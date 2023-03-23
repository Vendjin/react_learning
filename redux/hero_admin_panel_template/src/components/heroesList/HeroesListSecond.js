import {useHttp} from '../../hooks/http.hook';
import {useCallback, useEffect, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {heroDelete, heroesFetched, heroesFetching, heroesFetchingError} from '../../actions';
import HeroesListItem from "../heroesListItem/HeroesListItem";
import Spinner from '../spinner/Spinner';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import {createSelector} from "reselect";

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

    /*лучше фильтрацию проводить не в редьюсере, а в useSelector, используется несколько редьюсеров,
    но есть косяк в том, что даже когда стоит all и будет нажат all, произойдет перерендер
    для этого необходимо использовать библиотеку RESELECT код выше*/
    /*    const filteredHeroes = useSelector(state => {
            if (state.filters.activeFilter === 'all') {
                return state.heroes.heroes;
            } else {
                return state.heroes.heroes.filter(hero => hero.element === state.filters.activeFilter);
            }
        });*/

    const filteredHeroes = useSelector(filteredHeroesSelector)

    const {heroesLoadingStatus} = useSelector(state => state.heroes);
    const dispatch = useDispatch();
    const {request} = useHttp();
    const nodeRef = useRef(null)

    useEffect(() => {
        // использую Redux-Thunk в редьюсер передаем heroesFetching без вызова
        dispatch(heroesFetching)
        /*/!*пример использования расширенного стора вместо функции heroesFetching которая возвращает
        объект return {type: 'HEROES_FETCHING'} вставим строку на прямую*!/
        dispatch('HEROES_FETCHING');*/

        // dispatch(heroesFetching());

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