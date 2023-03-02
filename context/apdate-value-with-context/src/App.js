import './App.css';
import {createContext, useContext, useState} from "react";
import * as PropTypes from "prop-types";

const ThemeContext = createContext('light')

function App() {
    const [theme, setTheme] = useState('light');

    return (
        <>
            <ThemeContext.Provider value={theme}>
                <Form/>
                <label htmlFor="check" style={{marginLeft: '20px'}}>
                    <input type="checkbox"
                        /*checked пригодится при кнопке, если тема будет поставлена в дарк кнопкой
                         то поставится автоматом галка*/
                           checked={theme === 'dark'}
                           onChange={event => {
                               setTheme(event.target.checked ? 'dark' : 'light')
                           }}
                           id={'check'}
                    />
                    Use dark mode
                </label>
            </ThemeContext.Provider>

            {/*а тут я кнопку вытащил из Provider и она не окрашивается сама, но окрашивает все
            остальное, тк не использован провайдер, используется значение по умолчанию light*/}
            <br/>
            <ButtonToggle onClick={() => {
                setTheme(theme === 'light' ? 'dark' : 'light');
            }}>
                Toggle theme
            </ButtonToggle>

        </>

    );
}

function Form() {
    return (
        <Panel title={'Welcome'}>
            <Button>Sign up</Button>
            <Button>Sign out</Button>
        </Panel>
    )
}

function Panel({title, children}) {
    const theme = useContext(ThemeContext);
    const className = 'panel-' + theme;

    return (
        <section className={className}>
            <h1>{title}</h1>
            {children}
        </section>
    )
}

function Button({children}) {
    const theme = useContext(ThemeContext);
    const className = 'button-' + theme;
    return (
        <button className={className}>
            {/*использую children что бы передать текст в кнопку*/}
            {children}
        </button>
    );
}

function ButtonToggle({children, onClick}) {
    const theme = useContext(ThemeContext);
    const className = 'button-toggle-' + theme;

    return (
        <button className={className} onClick={onClick}>{children}</button>
    )

}

Panel.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node
};
Button.propTypes = {children: PropTypes.node};


export default App;
