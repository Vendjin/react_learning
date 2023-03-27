import {heroesFetching, heroesFetched, heroesFetchingError} from '../../components/heroesList/heroesSlice';
import {filtersFetching, filtersFetched, filtersFetchingError} from '../../components/heroesFilters/filtersSlice';

// перенесены в ..Slice, как fetchHeroes и применяется в
//heroesSlice -> extraReducers
export const fetchHeroes = (request) => (dispatch) => {
    dispatch(heroesFetching())
    request("http://localhost:3001/heroes")
    .then(data => dispatch(heroesFetched(data)))
    .catch(() => dispatch(heroesFetchingError()))
}

export const fetchFilters = (request) => (dispatch) => {
    dispatch(filtersFetching());
    request("http://localhost:3001/filters")
    .then(data => dispatch(filtersFetched(data)))
    .catch(() => dispatch(filtersFetchingError()))
}

/*переделанный activeFilterChanged, добавлено переключение фильтра с задержкой с помощью Middleware
что позволяет применять функции и другое, а не только возвращать объект*/
/*
export const activeFilterChanged = (filter) => (dispatch) => {
    setTimeout(() => {
        dispatch(
            {
                type: 'ACTIVE_FILTER_CHANGED',
                payload: filter
            }
        )
    }, 1000)
}*/
