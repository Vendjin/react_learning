import './App.css';
import React from "react";
import {Component, Fragment} from "react";
// обычно таким синтаксисом не пользуются
const elem = React.createElement(
    'h2',
    {className: 'greetings'},
    'Hi!'
);

const text = 'TExt';
const reactElem = (
    // что бы не плодить пустые дивы используем Fragment
    <Fragment>
        <h2 className="nameClass">Текст: {text}</h2>
        <label htmlFor="input"></label>
        <input type="text" id={"input"}/>
        <button tabIndex="0">Кнопка</button>
    </Fragment>
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

    return <button>{logged ? 'Enter' : text}</button>
}


class FieldClass extends React.Component {
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

function WhoAmi(props) {
    return (
        <div>
            <h1>Му name is {props.name}, surname - {props.surname}</h1>
            <a href={props.link}>Мой профиль</a>
        </div>
    )
}

function WhoAmiDestr({name, surname, link}) {
    return (
        <div>
            <h1>Му name is {name}, surname - {surname}</h1>
            <a href={link}>Мой профиль</a>
        </div>
    )
}

class WhoAmiClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            years: 27,
            text: '+++',
            position: ''
        }
    }

    nextYear = () => {
        /*// увеличиваем стейт, но может случится баг, состояние не успеет отработать и счетчик поломается
        this.setState({
            years: this.state.years + 1
        })*/
        // используем колбек, что бы следующая функция выполнялась,
        // после того как выполнилась преыдущая
        this.setState((state) => ({
            years: state.years + 1
        }))
    }

    commitInputChanges = (event, color) => {
        console.log(color);
        this.setState({
            position: event.target.value
        })
    }

    render() {
        const {name, surname, link} = this.props;
        const {position, years} = this.state
        return (
            // еще 1 способ избавиться от пустого дива
            <>
                <button onClick={this.nextYear}>{this.state.text}</button>
                <h1>Му name is {name},
                    surname - {surname},
                    age - {years},
                    position - {position}</h1>
                <a href={link}>Мой профиль</a>

                <form action="">
                    <span>Введите должность</span>
                    <input type="text" onChange={(event) => this.commitInputChanges(event, 'green')}/>
                </form>
            </>
        )
    }
}

function App() {
    return (
        <div className="App">
            <Header/>
            <Field/>
            <FieldClass/>
            <Btn/>
            <WhoAmi
                name="John"
                surname={"Smith"}
                link={'profile.com'}
            />
            <WhoAmiDestr
                name="John"
                surname={"Smith"}
                link={'profile.com'}
            />
            <WhoAmiClass
                name="John"
                surname={"Smith"}
                link={'profile.com'}
            />
            <WhoAmiClass
                name="John"
                surname={"Smith"}
                link={'profile.com'}
            />
        </div>
    );
}

export default App;
