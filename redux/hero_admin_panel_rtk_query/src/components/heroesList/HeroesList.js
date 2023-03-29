import {useMemo, useRef} from 'react';
import {useSelector} from 'react-redux';
import HeroesListItem from "../heroesListItem/HeroesListItem";
import Spinner from '../spinner/Spinner';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import {useGetHeroesQuery} from "../../api/apiSlice";

const HeroesList = () => {
    const {
        data: heroes = [],
        isLoading,
        isError,
    } = useGetHeroesQuery();

    const activeFilter = useSelector(state => state.filters.activeFilter);

    const filteredHeroes = useMemo(() => {
        const filteredHeroes = heroes.slice();

        if (activeFilter === 'all') {
            return heroes;
        } else {
            return filteredHeroes.filter(hero => hero.element === activeFilter);
        }
    }, [heroes, activeFilter]);

    const nodeRef = useRef(null)

    if (isLoading) {
        return <Spinner/>;
    } else if (isError) {
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
                    {/*<HeroesListItem  {...props} onDelete={() => onDelete(id)}/>*/}
                    <HeroesListItem  {...props} id={id}/>
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