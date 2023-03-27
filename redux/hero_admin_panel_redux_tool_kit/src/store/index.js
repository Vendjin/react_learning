import {configureStore} from "@reduxjs/toolkit";
// import heroes from '../reducers/heroes';
// import heroes from '../reducers/heroesWithCreateReduser';
import heroes from '../components/heroesList/heroesSlice';
// import filters from "../reducers/filters";
import filters from "../components/heroesFilters/filtersSlice";

const stringMiddleware = ({dispatch, getState}) => (nextDispatch) => (action) => {
    if (typeof action === 'string') {
        return nextDispatch({
            type: action
        })
    }
    return nextDispatch(action);
};

// store с помощью toolkit
const store = configureStore({
    reducer: {heroes, filters},
    // middleware: [ReduxThunk, stringMiddleware],
    // добавлены стандартные Middleware (ReduxThunk включены автоматом) из toolkit
    // и добавлен собственный stringMiddleware
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(stringMiddleware),
    devTools: process.env.NODE_ENV !== 'production',
});
export default store;