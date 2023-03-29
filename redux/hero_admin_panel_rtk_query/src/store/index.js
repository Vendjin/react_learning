import {configureStore} from "@reduxjs/toolkit";
import heroesReducer from '../components/heroesList/heroesSlice';
import filtersReducer from "../components/heroesFilters/filtersSlice";
import {apiSlice} from "../api/apiSlice";

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
    reducer: {
        heroes: heroesReducer,
        filters: filtersReducer,
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(stringMiddleware, apiSlice.middleware),
    devTools: process.env.NODE_ENV !== 'production',
});
export default store;