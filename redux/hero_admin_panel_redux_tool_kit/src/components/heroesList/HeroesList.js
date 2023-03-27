import {useHttp} from '../../hooks/http.hook';
import {useCallback, useEffect, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
// import {fetchHeroes} from '../../actions';
import {heroDelete, fetchHeroes} from './heroesSlice';
import HeroesListItem from "../heroesListItem/HeroesListItem";
import Spinner from '../spinner/Spinner';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
// createSelector так же включен в toolKit
// import {createSelector} from "reselect";
import {createSelector} from '@reduxjs/toolkit'

const HeroesList = () => {

    /*несколько стейтов с помощью createSelector
    1 строка получаем значение из стейта filters и оно сохраняется в filter
    2 строка получаем значение из стейта heroes и оно сохраняется в heroes*/
    const filteredHeroesSelector = createSelector(
        (state) => state.filters.activeFilter,
        (state) => state.heroes.heroes,
        (filter, heroes) => {
            if (filter === 'all') {
                return heroes;
            } else {
                return heroes.filter(hero => hero.element === filter);
            }
        }
    );

    const filteredHeroes = useSelector(filteredHeroesSelector)

    const {heroesLoadingStatus} = useSelector(state => state.heroes);
    const dispatch = useDispatch();
    const {request} = useHttp();
    const nodeRef = useRef(null)

    useEffect(() => {
        // fetchHeroes из стандартных action
        // dispatch(fetchHeroes(request))
        dispatch(fetchHeroes())
    }, []);

    const onDelete = useCallback((heroId) => {
        request(`http://localhost:3001/heroes/${heroId}`, 'DELETE')
        .then(dispatch(heroDelete(heroId)))
        .catch(err => console.log(err))
    }, [request]);


    if (heroesLoadingStatus === "loading") {
        return <Spinner/>;
    } else if (heroesLoadingStatus === "error") {
        return <h5 className="text-center mt-5">Ошибка загрузки</h5>
    }

    const renderHeroesList = (hero) => {
        if (hero.length === 0) {
            return (
                <CSSTransition
                    timeout={0}
                    classNames="hero"
                    nodeRef={nodeRef}
                >
                    <h5 className="text-center mt-5">Героев пока нет</h5>
                </CSSTransition>
            )
        }

        return hero.map(({id, ...props}) => {
            return (
                <CSSTransition
                    key={id}
                    timeout={500}
                    classNames="hero"
                    nodeRef={nodeRef}
                >
                    <HeroesListItem  {...props} onDelete={() => onDelete(id)}/>
                </CSSTransition>
            )
        })
    }

    const elements = renderHeroesList(filteredHeroes);
    return (
        <TransitionGroup component="ul">
            {elements}
        </TransitionGroup>
    )
}

export default HeroesList;