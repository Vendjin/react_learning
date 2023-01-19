import logo from './logo.svg';
import './App.css';
import React from "react";

// обычно таким синтаксисом не пользуются
const elem = React.createElement(
    'h2',
    {className: 'greetings'},
    'Hi!'
);

const text = 'TExt';
const reactElem = (
    <div>
        <h2 className="nameClass">Текст: {text}</h2>
        <label htmlFor="input"></label>
        <input type="text" id={"input"}/>
        <button tabIndex="0">Кнопка</button>
    </div>
)

const Header = () => {
    return reactElem;
}
function App() {
    return (
        <div className="App">
            <Header/>
        </div>
    );
}

export default App;
export {Header};
