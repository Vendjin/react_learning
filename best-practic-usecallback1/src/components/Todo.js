import React, {useCallback, useEffect} from 'react';

const Todo = ({id, title, completed, removeTodo, toggleTodo}) => {
    const  handleDelete  = () => removeTodo(id);
    const handleChange = () => toggleTodo(id);

    // второй вариант использование useCallback + useEffect
    const logUpdate = useCallback(() => console.log(`todo with ${id}`), [id]);
    useEffect(() => {
        if (completed) {
            logUpdate();
        }
    }, [completed, logUpdate]);

    return (
        <div>
            <input type={"checkbox"} defaultChecked={completed} onChange={handleChange}/>
            <span>{title}</span><button onClick={handleDelete}>delete</button>
        </div>
    );
};

export default Todo;