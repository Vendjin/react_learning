import {applyMiddleware, compose, createStore} from 'redux';
import heroes from '../reducers/heroes';
import filters from "../reducers/filters";
import {combineReducers} from "@reduxjs/toolkit";
import ReduxThunk from 'redux-thunk';
// а Middleware модифицирует только диспатч
const stringMiddleware = ({dispatch, getState}) => (nextDispatch) => (action) => {
    if (typeof action === 'string') {
        return nextDispatch({
            type: action
        })
    }
    return nextDispatch(action);
};


const store = createStore(
    combineReducers({heroes, filters}),
    compose(
        applyMiddleware(ReduxThunk, stringMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);
export default store;