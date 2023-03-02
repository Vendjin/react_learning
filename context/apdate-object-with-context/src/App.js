import './App.css';
import {createContext, useContext, useState} from "react";

const CurrentUserContext = createContext(null);


function App() {
    const [currentUser, setCurrentUser] = useState(null);
    console.log(currentUser)
    /*объединяете { currentUser, setCurrentUser }в один объект и передаете его через контекст
    внутри файла value={}. Это позволяет любому нижеприведенному компоненту,
    такому как LoginButton, считывать currentUser, и setCurrentUser,
     а затем вызывать setCurrentUser при необходимости.*/
    return (
        <CurrentUserContext.Provider value={{currentUser, setCurrentUser}}>
            <Form/>
        </CurrentUserContext.Provider>
    );
}

function Form({children}) {
    return (
        <Panel title={"Welcome"}>
            <LoginButton/>
        </Panel>
    );
}

function LoginButton() {
    const {currentUser, setCurrentUser} = useContext(CurrentUserContext);

    if (currentUser !== null) {
        return <p>You logged in as {currentUser.name}</p>
    }
    return (
        <Button onClick={() => {
            setCurrentUser({name: 'TestName'})
        }}>Login</Button>
    );
}

function Panel ({title, children}) {
    return (
        <section className={'panel'}>
            <h1>{title}</h1>
            {children}
        </section>
    );
}

function Button ({children, onClick}) {
    return (
        <button className={'button'} onClick={onClick}>{children}</button>
    );
}
export default App;
