import {configureStore} from "@reduxjs/toolkit";
// import heroes from '../reducers/heroes';
import heroes from '../reducers/heroesWithCreateReduser';

import filters from "../reducers/filters";

const stringMiddleware = ({dispatch, getState}) => (nextDispatch) => (action) => {
    if (typeof action === 'string') {
        return nextDispatch({
            type: action
        })
    }
    return nextDispatch(action);
};


const store = configureStore({
    reducer: {heroes, filters},
    // middleware: [ReduxThunk, stringMiddleware],
    // добавлены стандартные Middleware (ReduxThunk включены автоматом)
    // из toolkit и добавлен собственный stringMiddleware
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(stringMiddleware),
    devTools: process.env.NODE_ENV !== 'production',
})
export default store;