import {createStore, compose, applyMiddleware} from 'redux';
import reducer from '../reducers/indexSecondVariant';
import heroes from '../reducers/heroes';
import filters from "../reducers/filters";
import {combineReducers} from "@reduxjs/toolkit";

// а Middleware модифицирует только диспатч
const stringMiddleware = ({dispatch, getState}) => (nextDispatch) => (action) => {
    if (typeof action === 'string') {
        return nextDispatch({
            type: action
        })
    }
    return nextDispatch(action);
};


// enhancer модифицирует стор с диспатчем
const enhancer = (createStore) => (...args) => {
    const store = createStore(...args);

    const oldDispatch = store.dispatch;
    store.dispatch = (action) => {
        if (typeof action === 'string') {
            return oldDispatch({
                type: action
            })
        }
        return oldDispatch(action);
    }
    return store;
}
// Variant1
/*const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());*/

// variant2
// const store = createStore(
//     combineReducers({heroes, filters}),
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

// variant 3 добавил УСИЛИТЕЛЬ стора, теперь в диспатч может приходить не только объект, но и строка
// const store = createStore(combineReducers({heroes, filters}), enhancer);

// variant 4, использование compose, что бы добавить несколько enchancer и DevTools
// const store = createStore(
//     combineReducers({heroes, filters}),
//     compose(
//         enhancer,
//         window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//     ));

// variant 5, используя midleware
const store = createStore(
    combineReducers({heroes, filters}),
    compose(
        applyMiddleware(stringMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);
export default store;