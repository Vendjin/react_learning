import {createStore} from 'redux';
import reducer from '../reducers/indexSecondVariant';
import heroes from '../reducers/heroes';
import filters from "../reducers/filters";
import {combineReducers} from "@reduxjs/toolkit";

// Variant1
/*const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());*/

const store = createStore(
    combineReducers({heroes, filters}),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;