import {useHttp} from '../../hooks/http.hook';
import {useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {heroesFetching, heroesFetched, heroesFetchingError, heroDelete} from '../../actions';
import HeroesListItem from "../heroesListItem/HeroesListItem";
import Spinner from '../spinner/Spinner';
import data from "bootstrap/js/src/dom/data";

// Задача для этого компонента:
// При клике на "крестик" идет удаление персонажа из общего состояния
// Усложненная задача:
// Удаление идет и с json файла при помощи метода HTTP DELETE

const HeroesList = () => {
    const {filteredHeroes, heroesLoadingStatus} = useSelector(state => state);
    const dispatch = useDispatch();
    const {request} = useHttp();

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


    const renderHeroesList = (heroes, heroesLoadingStatus) => {
        if (heroesLoadingStatus === "loading") {
            return <Spinner/>;
        } else if (heroesLoadingStatus === "error") {
            return <h5 className="text-center mt-5">Ошибка загрузки</h5>
        }

        if (heroes.length === 0) {
            return <h5 className="text-center mt-5">Героев пока нет</h5>
        }

        return heroes.map(({id, ...props}) => {
            return <HeroesListItem key={id} {...props} onDelete={() => onDelete(id)}/>
        })
    }

    const elements = renderHeroesList(filteredHeroes, heroesLoadingStatus);
    return (
        <ul>
            {elements}
        </ul>
    )
}

export default HeroesList;