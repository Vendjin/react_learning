import {useContext, useState} from "react";
import {TaskDispatchContext, TasksContext} from "./TasksContext";

// export default function TaskList({tasks, onChangeTask, onDeleteTask}) {
export default function TaskList() {
    const tasks = useContext(TasksContext);

    return (
        <ul>
            {tasks.map(task => (
                <li key={task.id}>
                    {/*<Task task={task}
                          onChange={onChangeTask}
                          onDelete={onDeleteTask}/>*/}
                    <Task task={task}/>
                </li>
            ))}
        </ul>
    );
}

// function Task({task, onChange, onDelete}) {
function Task({task}) {
    const [isEditing, setIsEditing] = useState(false);
    const dispatch = useContext(TaskDispatchContext);
    let taskContent;

    if (isEditing) {
        taskContent = (
            <>
                <input type="text"
                       value={task.text}
                       onChange={event => {
                           /*onChange({
                               ...task,
                               text: event.target.value
                           });*/
                           dispatch({
                               type: 'changed',
                               task: {...task, text: event.target.value},
                           })
                       }}/>
                <button onClick={() => setIsEditing(false)}>Save</button>
            </>
        );
    } else {
        taskContent = (
            <>
                {task.text}
                <button onClick={() => setIsEditing(true)}>Edit</button>
            </>
        )
    }
    return (
        <label>
            <input type="checkbox"
                   checked={task.done}
                   onChange={event => {
                       /*onChange({
                           ...task,
                           done: event.target.checked
                       });*/
                       dispatch({
                           type: 'changed',
                           task: {...task, done: event.target.checked}
                       });
                   }}
            />
            {taskContent}
            <button onClick={() => {
                // () => onDelete(task.id)
                dispatch({
                    type: 'deleted',
                    id: task.id
                });
            }}>
                Delete
            </button>
        </label>
    )
}