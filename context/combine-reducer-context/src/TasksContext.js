import {createContext, useReducer} from "react";

export const TasksContext = createContext(null);
export const TaskDispatchContext = createContext(null);

export function TasksProvider({children}) {
    const [tasks, dispatch] = useReducer(taskReducer, initialTasks);

    return (
        <TasksContext.Provider value={tasks}>
            <TaskDispatchContext.Provider value={dispatch}>
                {children}
            </TaskDispatchContext.Provider>
        </TasksContext.Provider>
    )
}

const initialTasks = [
    {id: 0, text: 'Philosopher’s Path', done: true},
    {id: 1, text: 'Visit the temple', done: false},
    {id: 2, text: 'Drink matcha', done: false}
];

function taskReducer(tasksState, action) {
    switch (action.type) {
        case 'added' : {
            console.log(action)
            return [...tasksState, {
                id: action.id,
                text: action.text,
                done: false
            }];
        }
        case 'deleted' : {
            return tasksState.filter(task => task.id !== action.id)
        }
        case 'changed' : {
            console.log(action)
            return tasksState.map(task => {
                console.log(task)
                if (task.id === action.task.id) {
                    return action.task
                } else {
                    return task
                }
            })
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}