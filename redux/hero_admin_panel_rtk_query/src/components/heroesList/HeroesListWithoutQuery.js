import {useEffect, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchHeroes, filteredHeroesSelector} from './heroesSlice';
import HeroesListItem from "../heroesListItem/HeroesListItem";
import Spinner from '../spinner/Spinner';
import {CSSTransition, TransitionGroup} from 'react-transition-group';

const HeroesList = () => {
    const filteredHeroes = useSelector(filteredHeroesSelector);
    const {heroesLoadingStatus} = useSelector(state => state.heroes);
    const dispatch = useDispatch();
    const nodeRef = useRef(null)

    useEffect(() => {
        dispatch(fetchHeroes())
    }, []);


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