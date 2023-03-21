// В этом файле меняется глобальный стейт
// const initialState = {value: 0, foo: 'bar', name: 'ivan'};

const initialState = {counter: 0};

// функция которая делает изменения стейта
const reducer = (state= initialState, action) => {
    switch (action.type) {
        case 'INC':
            /*создается новый объект {}
            в него копируется и разворачивается старый объект ...state
            в новом объекте создается поле value
            со значением из старого state.value и прибавляем 1*/
            return {...state, counter: state.counter + 1};
        case 'DEC':
            return {...state, counter: state.counter - 1};
        case 'RND':
            /*логику рандома нужно вынести за reducer, лучше в само действие, тк это нарушает принцип
            Чистой функции reducer*/
            return {...state, counter: state.counter * action.payload}
        default:
            return state;
    }
};

export default reducer;