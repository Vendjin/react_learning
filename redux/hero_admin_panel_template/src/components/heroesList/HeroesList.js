import {useHttp} from '../../hooks/http.hook';
import {useCallback, useEffect, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {heroesFetching, heroesFetched, heroesFetchingError, heroDelete} from '../../actions';
import HeroesListItem from "../heroesListItem/HeroesListItem";
import Spinner from '../spinner/Spinner';
import data from "bootstrap/js/src/dom/data";
import {CSSTransition, TransitionGroup} from 'react-transition-group';

// Задача для этого компонента:
// При клике на "крестик" идет удаление персонажа из общего состояния
// Усложненная задача:
// Удаление идет и с json файла при помощи метода HTTP DELETE

const HeroesList = () => {
    const {filteredHeroes, heroesLoadingStatus} = useSelector(state => state);
    const dispatch = useDispatch();
    const {request} = useHttp();
    const nodeRef = useRef(null)

    useEffect(() => {
        dispatch(heroesFetching());
        request("http://localhost:3001/heroes")
        .then(data => dispatch(heroesFetched(data)))
        .catch(() => dispatch(heroesFetchingError()))
    }, []);

    const onDelete = useCallback((heroId) => {
        request(`http://localhost:3001/heroes/${heroId}`, 'DELETE')
        .then(data => console.log(data, 'DELETED'))
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