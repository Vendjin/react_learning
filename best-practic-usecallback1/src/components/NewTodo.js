import {memo} from "react";

export const NewTodo = memo(({addTodo}) => {

    // обычно в useCallback оборачивают handleSubmit,
    // а надо обернуть функцию которая вызывается  в ней те addTodo
    const handleSubmit = event => {
        event.preventDefault();
        const newTodo = event.target.todo.value;

        addTodo({id: Date.now(), title: newTodo, completed: false});
        event.target.reset();
    };
    console.log('render NewTodo');

    return (
        <form onSubmit={handleSubmit} autoComplete={'off'}>
            <label>New todo</label>
            <input type={'text'} name={'todo'}/>
        </form>
    );
});