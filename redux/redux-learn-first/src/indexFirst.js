import React from 'react';
import ReactDOM from 'react-dom/client';
import {createStore} from 'redux';

/*const initialState = null;

const reducer = (state= initialState, action) => {
    switch (action.type) {
        case 'INC':
            return state + 1;
        case 'DEC':
            return state - 1;
        case 'RND':
            /!*логику рандома нужно вынести за reducer, лучше в само действие, тк это нарушает принцип
            Чистой функции reducer*!/
            return state * action.payload
        default:
            return state;
    }
}*/

const initialState = {value: null};

const reducer = (state= initialState, action) => {
    switch (action.type) {
        case 'INC':
            /*создается новый объект {}
            в него копируется и разворачивается старый объект ...state
            в новом объекте создается поле value
            со значением из старого state.value и прибавляем 1*/
            return {...state, value: state.value + 1};
        case 'DEC':
            return {...state, value: state.value - 1};
        case 'RND':
            /*логику рандома нужно вынести за reducer, лучше в само действие, тк это нарушает принцип
            Чистой функции reducer*/
            return {...state, value: state.value * action.payload}
        default:
            return state;
    }
}

// let state = reducer(initialState, {
//     type: 'INC',
// });

const update = () => {
    document.getElementById('counter').textContent = store.getState().value;
}

const store = createStore(reducer);
store.subscribe(update);
store.subscribe(() => {
    console.log(store.getState());
});

// функция ActionCreater
const inc = () => ({type: 'INC'});
const dec = () => ({type: 'DEC'});
const rnd = (value) => ({type: 'RND', payload: value});

document.getElementById('inc').addEventListener('click', ()=> {
    store.dispatch(inc());
})

document.getElementById('dec').addEventListener('click', ()=> {
    store.dispatch(dec());
})

document.getElementById('rnd').addEventListener('click', ()=> {
    const value = Math.floor(Math.random() * 10);
    // store.dispatch({type: 'RND', payload: value});
    store.dispatch(rnd(value));
})



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>

    </React.StrictMode>
);