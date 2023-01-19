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

const Field = () => {
    const styledField = {
        width: '500px',
        borderColor: "red"
    }

    return <input placeholder="Type here" type="text" style={styledField}/>
}

const Btn = () => {
    const text = 'Log in';
    const logged = false;

    return <button>{logged ? 'Enter': text}</button>
}

function App() {
    return (
        <div className="App">
            <Header/>
            <Field/>
            <Btn/>
        </div>
    );
}

class FieldClass extends React.Component{
    render() {
        const text = 'Log in';

        const styledField = {
            width: '500px',
            borderColor: "red"
        }
        return <input
            placeholder={text}
            type="text"
            style={styledField}/>
    }
}

export default App;
export {Header};
