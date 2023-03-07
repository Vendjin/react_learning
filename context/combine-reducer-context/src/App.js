import './App.css';
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import {useReducer} from "react";
import {TasksContext, TaskDispatchContext, TasksProvider} from "./TasksContext";

/*// v3 так же все перенес в TaskSContext
// let nextId = 3;
const initialTasks = [
    { id: 0, text: 'Philosopher’s Path', done: true },
    { id: 1, text: 'Visit the temple', done: false },
    { id: 2, text: 'Drink matcha', done: false }
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
                if (task.id  === action.task.id) {
                    return action.task
                } else {
                    return task
                }
            })
        } default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}*/

function App() {
    /*// v3 перенесу в TaskContext
    const [tasks, dispatch] = useReducer(taskReducer, initialTasks);*/

    // v2 все хендлы убираю из функций и прописываю в самих действиях, непосредственно в компонентах
    /*const handleAddTask = (text) => {
        dispatch({
            type: 'added',
            id: nextId++,
            text: text
        });
    }

    const handleChangeTask = (task) => {
        dispatch({
            type: 'changed',
            task: task
        })
    }

    const handleDeleteTask = (taskId) => {
        dispatch({
            type: 'deleted',
            id: taskId
        })
    }*/


    /*return (
        <TasksContext.Provider value={tasks}>
            <TaskDispatchContext.Provider value={dispatch}>
                <h1>Hello friend</h1>
                {/!*<AddTask onAddTask={handleAddTask}/>
                <TaskList tasks={tasks}
                          onChangeTask={handleChangeTask}
                          onDeleteTask={handleDeleteTask}>
                </TaskList>*!/}
                <AddTask/>
                <TaskList/>
            </TaskDispatchContext.Provider>
        </TasksContext.Provider>
    );*/
    return (
        <TasksProvider>
            <h1>Hello friend</h1>
            <AddTask/>
            <TaskList/>
        </TasksProvider>
    )
}

export default App;
