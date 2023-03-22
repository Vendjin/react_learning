import {useHttp} from '../../hooks/http.hook';
import {useCallback, useEffect, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {heroDelete, heroesFetched, heroesFetching, heroesFetchingError} from '../../actions';
import HeroesListItem from "../heroesListItem/HeroesListItem";
import Spinner from '../spinner/Spinner';
import {CSSTransition, TransitionGroup} from 'react-transition-group';


const HeroesList = () => {
    // лучше фильтрацию проводить не в редьюсере, а в useSelector
    const filteredHeroes = useSelector(state => {
        if (state.activeFilter === 'all') {
            return state.heroes;
        } else {
            return state.heroes.filter(hero => hero.element === state.activeFilter);
        }
    });

    const {heroesLoadingStatus} = useSelector(state => state);
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