import './App.css';
import {createContext, useContext, useState} from "react";

const ThemeContext = createContext('light');
const CurrentUserContext = createContext(null);


function App() {
    const [theme, setTheme] = useState('light');
    const [currentUser, setCurrentUser] = useState(null);

    return (
        // обернул все в оба контекста
        <ThemeContext.Provider value={theme}>
            <CurrentUserContext.Provider value={{currentUser, setCurrentUser}}>
                <WelcomePanel/>
                <label>
                    <input type="checkbox"
                           style={{marginLeft: '20px'}}
                           checked={theme === 'dark'}
                           onChange={event => {
                               setTheme(event.target.checked ? 'dark' : 'light');
                           }}
                    />
                    Use dark mode
                </label>
            </CurrentUserContext.Provider>
        </ThemeContext.Provider>
    );
}

// компонент обертка, что бы выбрать что показывать исходя из контекста
const WelcomePanel = ({children}) => {
    const {currentUser} = useContext(CurrentUserContext);

    return (
        <Panel title={'Welcome'}>
            {currentUser ? <Greeting/> : <Login/>}
        </Panel>
    )
}

const Greeting = () => {
    const {currentUser} = useContext(CurrentUserContext);
    return (
        <h2>Hello user {currentUser.name}</h2>
    )
}

const Login = ({children}) => {
    const {setCurrentUser} = useContext(CurrentUserContext);

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const isLogin = firstName && lastName && firstName !== ' ' && lastName !== ' ';

    return (
        <>
            <label>
                First name{': '}
                <input type="text"
                       required
                       value={firstName}
                       onChange={event => {
                           setFirstName(event.target.value)
                       }}
                />
            </label>
            <br/>
            <label>
                Last name{': '}
                <input type="text"
                       required
                       value={lastName}
                       onChange={event => {
                           setLastName(event.target.value)
                       }}
                />
            </label>
            <br/>
            <Button disabled={!isLogin}
                    onClick={() => {
                        setCurrentUser({name: `${firstName} ${lastName}`})
                    }}>
                Log In
            </Button>
            {!isLogin && <i>Fill in both fields.</i>}
        </>
    )
}

const Panel = ({title, children}) => {
    const theme = useContext(ThemeContext);
    const className = 'panel-' + theme;

    return (
        <section className={className}>
            <h1>{title}</h1>
            {children}
        </section>
    );
}

const Button = ({children, onClick, disabled}) => {
    const theme = useContext(ThemeContext);
    const className = 'button-' + theme;

    return (
        <button className={className}
                onClick={onClick}
                disabled={disabled}
        >
            {children}
        </button>
    );
}

export default App;
