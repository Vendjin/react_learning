import {createReducer} from "@reduxjs/toolkit";
import {
    heroesFetching,
    heroesFetched,
    heroesFetchingError,
    heroAdd,
    heroDelete
} from "../../actions/__DEPRICATED__/indexWithCreateAction";


const initialState = {
    heroes: [],
    heroesLoadingStatus: 'idle',
}
// такой вариант работает с TS
const heroes = createReducer(initialState, builder => {
    builder
    .addCase(heroesFetching, state => {
        /*этот код нарушает принцип иммутабильности, но используя createReducer
        подтягивается библиотека ImmerJs которая сделает этот код иммутабильным
        по сути пишем простой код, который превратится в сложный*/
        state.heroesLoadingStatus = 'loading';
    })
    .addCase(heroesFetched, (state, action) => {
        state.heroesLoadingStatus = 'idle';
        state.heroes = action.payload;
    })
    .addCase(heroesFetchingError, state => {
        state.heroesLoadingStatus = 'error';
    })
    .addCase(heroAdd, (state, action) => {
        state.heroes.push(action.payload);
    })
    .addCase(heroDelete, (state, action) => {
        state.heroes = state.heroes.filter(hero => hero.id !== action.payload);
    })
    .addDefaultCase(() => {
    })
})

// такой вариант только с нативным JS
/*const heroes = createReducer(initialState, {
        [heroesFetching]: state => {
            state.heroesLoadingStatus = 'loading';
        },
        [heroesFetched]: (state, action) => {
            state.heroesLoadingStatus = 'idle';
            state.heroes = action.payload;
        },
        [heroesFetchingError]: state => {
            state.heroesLoadingStatus = 'error';
        },
        [heroAdd]: (state, action) => {
            state.heroes.push(action.payload);
        },
        [heroDelete]: (state, action) => {
            state.heroes = state.heroes.filter(hero => hero.id !== action.payload);
        },
    },
    [],
    state => state
)*/

// первичный вариант с использованием чистого REDUX
/*const heroes = (state = initialState, action) => {
    switch (action.type) {
        case 'HEROES_FETCHING':
            return {
                ...state,
                heroesLoadingStatus: 'loading'
            }
        case 'HEROES_FETCHED':
            return {
                ...state,
                heroes: action.payload,
                heroesLoadingStatus: 'idle'
            }
        case 'HEROES_FETCHING_ERROR':
            return {
                ...state,
                heroesLoadingStatus: 'error'
            }
        case 'HERO_DELETE':
            return {
                ...state,
                heroes: state.heroes.filter(hero => hero.id !== action.payload),
            }
        case 'HERO_ADD':
            return {
                ...state,
                heroes: [...state.heroes, action.payload]
            }
        default:
            return state
    }
}*/

export default heroes;