import {useCallback, useState} from "react";
import {NewTodo} from "./NewTodo";
import Todo from "./Todo";

export const Todos = () => {
    const [todos, setTodos] = useState([]);

    // нужно именно эту функцию оборачивать в useCallback, но при этом без Memo работать не будет
    const addTodo = useCallback(
        (newTodo) => setTodos(
            (todos) => [...todos, newTodo]
        ), []);

    const toggleTodo = (todoId) => {
        setTodos(todos.map(todo =>
            todo.id !== todoId ? todo : {...todo, completed: !todo.completed}
            /*if (todo.id !== todoId) {
                return todo
            }
            return { ...todo,  completed: !todo.completed}*/
        ))
    }

    const removeTodo = (todoId) => {
        console.log(todoId)
        setTodos(todos.filter(todo => todo.id !== todoId))
    }


    return (
        <>
            <NewTodo addTodo={addTodo}/>
            <div>
                {todos.map(todo => (
                    <Todo
                        key={todo.id}
                        {...todo}
                        removeTodo={removeTodo}
                        toggleTodo={toggleTodo}
                    />
                ))}
            </div>
        </>
    );
};