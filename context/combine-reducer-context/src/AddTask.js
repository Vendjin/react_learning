import {useContext, useState} from 'react';
import {TaskDispatchContext} from "./TasksContext";

let nextId = 3;

// export default function AddTask ({onAddTask}) {
export default function AddTask() {
    const [text, setText] = useState('');
    const dispatch = useContext(TaskDispatchContext);

    return (
        <>
            <input type="text"
                   placeholder={'AddTask'}
                   value={text}
                   onChange={(event) => {
                       setText(event.target.value)
                   }}
            />
            <button onClick={() => {
                // очищаю поле ввода
                setText('');
                dispatch({
                    type: 'added',
                    id: nextId++,
                    text: text,
                    done: false
                });
            }}>Add Task
            </button>
        </>
    )
}