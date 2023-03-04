import {useState} from 'react';

export default function AddTask ({onAddTask}) {
    const [text, setText] = useState('');

    return (
        <>
            <input type="text"
                   placeholder={'AddTask'}
                   value={text}
                   onChange={(event) => {
                       setText(event.target.value)
                   }}
            />
            <button onClick={ () => {
                // очищаю поле ввода
                setText('');
                onAddTask(text);
            }}>Add Task</button>
        </>
    )
}