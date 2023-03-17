import React from 'react';
import ReactDOM from 'react-dom/client';
import {createStore, bindActionCreators} from 'redux';
import reducer from "./reduser";
// import {dec, inc, rnd} from "./actions";
import * as actions from "./actions";
const store = createStore(reducer);
const {dispatch, subscribe} = store;

const update = () => {
    document.getElementById('counter').textContent = store.getState().value;
}

// subscribe(update);
subscribe(() => {
    update();
    console.log(store.getState());
});

/*
// слушатель .addEventListener('click', ()=> {
//     store.dispatch(dec());
// }) переделан на переменные вида
// const incDispatch = () => dispatch(inc());
// const decDispatch = () => dispatch(dec());
// const rndDispatch = (value) => dispatch(rnd(value));
*/


/*// слушатели выше передел на функцию bindActionCreator
const bindActionCreator = (creater, dispatch) => (...args) => {
    dispatch(creater(...args));
}

const incDispatch = bindActionCreator(inc, dispatch);
const decDispatch = bindActionCreator(dec, dispatch);
const rndDispatch = bindActionCreator(rnd, dispatch);*/

// а функцию выше заменил на bindActionCreators из пакета Redux, тк она делает тоже-самое
/*const incDispatch = bindActionCreators(inc, dispatch);
const decDispatch = bindActionCreators(dec, dispatch);
const rndDispatch = bindActionCreators(rnd, dispatch);*/

/*// дальнейший вариант оптимизации кода
const {incDispatch, decDispatch, rndDispatch} = bindActionCreators({
    incDispatch: inc,
    decDispatch: dec,
    rndDispatch: rnd
}, dispatch)*/

/*document.getElementById('inc').addEventListener('click', incDispatch)
document.getElementById('dec').addEventListener('click', decDispatch)
document.getElementById('rnd').addEventListener('click', () => {
    const value = Math.floor(Math.random() * 10);
    rndDispatch(value);
})*/

// последний вариант оптимизации
const {inc, dec, rnd} = bindActionCreators(actions, dispatch)

document.getElementById('inc').addEventListener('click', inc)
document.getElementById('dec').addEventListener('click', dec)
document.getElementById('rnd').addEventListener('click', () => {
    const value = Math.floor(Math.random() * 10);
    rnd(value);
})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>

    </React.StrictMode>
);