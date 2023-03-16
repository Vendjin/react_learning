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
};

export default reducer;