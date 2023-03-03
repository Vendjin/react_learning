import './App.css';
import {createContext, useContext, useState} from "react";

const ThemeContext = createContext('light');
const CurrentUserContext = createContext(null);

const MyProviders = ({children, theme}) => {
    const [currentUser, setCurrentUser] = useState(null);

    return (
        <ThemeContext.Provider value={theme}>
            <CurrentUserContext.Provider value={{currentUser, setCurrentUser}}>
                {children}
            </CurrentUserContext.Provider>
        </ThemeContext.Provider>
    );
}

function App() {
    const [theme, setTheme] = useState('light');

    return (
        <MyProviders theme={theme}>
            <WelcomePanel/>
            <label>
                <input type="checkbox"
                       checked={theme === 'dark'}
                       onChange={event => {
                           setTheme(event.target.checked ? 'dark' : 'light');
                       }}
                />
                Use dark mode
            </label>

        </MyProviders>
    );
}

const WelcomePanel = ({children}) => {
    const {currentUser} = useContext(CurrentUserContext);

    return (
        <Panel title={'Welcome'}>
            {currentUser ? <Greeting/> : <Login/>}
        </Panel>

    );
}


const Panel = ({title, children}) => {
    const theme = useContext(ThemeContext);
    const className = 'panel-' + theme

    return (
        <section className={className}>
            <h1>{title}</h1>
            {children}
        </section>

    )
}

const Login = ({children}) => {
    const {setCurrentUser} = useContext(CurrentUserContext)

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const isLogin = firstName && lastName && firstName !== ' ' && lastName !== ' ';

    return (
        <>
            <label>
                First name {': '}
                <input type="text"
                       onChange={ event => {
                           setFirstName(event.target.value);
                       }}
                />
            </label>
            <br/>
            <label>
                Last name {': '}
                <input type="text"
                       onChange={ event => {
                           setLastName(event.target.value);
                       }}
                />
            </label>
            <br/>
            <Button disabled={!isLogin}
                    onClick={() => {
                        setCurrentUser({name: `${firstName} ${lastName}`})
                    }}>
                Login
            </Button>
            {!isLogin && <i>Fill in both fields!</i>}
        </>
    )

}

const Greeting = ({children}) => {
    const {currentUser} = useContext(CurrentUserContext);

    return (
        <>
            <h2>Hello {currentUser.name}</h2>
        </>
    )
}

const Button = ({children, onClick, disabled}) => {
    const theme = useContext(ThemeContext);
    const className = 'button-' + theme;

    return (
        <button className={className}
                disabled={disabled}
                onClick={onClick}
        >
            {children}
        </button>
    )
}
export default App;
