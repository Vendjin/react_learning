import './App.css';
import React from "react";
import {Component, Fragment} from "react";
import styled from "styled-components";
import {Row} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from "react-dom";
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

    return <Button>{logged ? 'Enter' : text}</Button>
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
        <EmpItem>
            <h1 style={{fontSize: 90}}>Му name is {name}, surname - {surname}</h1>
            <a href={link}>Мой профиль</a>
        </EmpItem>
    )
}

const EmpItem = styled.div`
  padding: 20px;
  margin-bottom: 15px;
  border-radius: 5px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, .2);
  //поддерживает вложенность
  a {
    display: block;
    margin: 10px 0 10px 0;
    color: ${props => props.active ? 'orange' : 'black'};
  }

  h1 {
    font-style: italic;
    text-align: center;
    font-size: 24px;
  }
`;

const Wrapper = styled.div`
  width: 600px;
  margin: 80px auto 0 auto;
  //background-color: #61dafb;
`;

export const Button = styled.button`
  display: block;
  padding: 5px 15px;
  background-color: gold;
  border: 1px solid rgba(0, 0, 0, .2);
`;

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
            // используем стили и передаем в него пропс
            <EmpItem active>
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
            </EmpItem>
        )
    }
}


const DinamicGreating = (props) => {
    return (
        <div className={'children'}>
            {/*{props.children}*/}
            {
                React.Children.map(props.children, child => {
                    return React.cloneElement(child, {className: 'red'})
                })
            }
        </div>
    )
}

// еще одна разновидность вставки кода, типо есть заготовка, знаем, что есть точно 2 колонки, а чем заполняться они будут не знаем
/*const Test = (props) => {
    return (
        <Container className='mt-5 mb-5'>
            <Row>
                <Col>
                    {props.left}
                </Col>
                <Col>
                    {props.right}
                </Col>
            </Row>
        </Container>
    )
}

const Wrap = () => {
    <Test>
        left = {
            <h2>Какой то текст</h2>
        }
        right = {
            <SomeComponent>
                <h2>А сюда вставляем целый компонент</h2>
            </SomeComponent>
        }
    </Test>
}*/

const HelloGreating = () => {
    return (
        <div style={{'width': "800px", 'margin': '0 auto', 'backgroundColor': 'black'}}>
            <DinamicGreating>
                <h2>Что то написано</h2>
                <h2>Hello world</h2>
            </DinamicGreating>
        </div>
    )
}


// Render-props pattern
const Message = (props) => {
    return (
        <h2>The counter is {props.counter}</h2>
    )
}

class Counter extends Component {
    state = {
        counter: 0
    }

    changeCounter = () => {
        this.setState(({counter}) => ({
            counter: counter + 1
        }))
    }

    render() {
        return (
            <>
                {this.props.render(this.state.counter)}
                <button
                    className={'btn btn-primary'}
                    onClick={this.changeCounter}>
                    Click me counter
                </button>
            </>
        )
    }
}

// REF-ы - при открытии формы указатель ставился сразу на нужную строку
class Form extends Component {
    myRef = React.createRef();
    mySecondRef = React.createRef();

    // componentDidMount() {
    //     this.myRef.current.focus();
    // }

    focusFirst = () => {
        if (this.myRef){
            // this.myRef.current.focus();
            this.myRef.focus();
        }
    }

    setInputRef = elem => {
        this.myRef = elem;
    }

    render() {
        return (
            <div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1"
                           placeholder="name@example.com" ref={this.setInputRef}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                    <textarea  onClick={this.focusFirst} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
            </div>
        )
    }
}


// ПОРТАЛЫ показыват ькомпонент не внутри родительского а поверх
class FormPortal extends Component {
    state = {
        openModal: false
    }
    // handleClick = () => {
    //     this.setState({
    //         openModal: true
    //     })
    // }

    handleClick = () => {
        this.setState(({openModal}) => ({
            openModal: !openModal
        }))
        console.log(this.state.openModal)
    }

    render() {
        return (
            <div className='w-50 border mt-5 p-3 m-auto' onClick={this.handleClick}>
                <div className="mb-3" >
                    <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1"
                           placeholder="name@example.com"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                    <textarea  className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <button onClick={this.handleClick}>KNOPKA</button>
                { this.state.openModal ?
                    <Portal>
                        <Msg/>
                    </Portal> : null
                }


                {/*<Portal>
                    <Msg/>
                </Portal>*/}
            </div>
        )
    }
}

const Portal = (props) => {
    const node = document.createElement('div');
    document.body.appendChild(node)

    return ReactDOM.createPortal(props.children, node);
}
const Msg = () => {
    return (
        <div
            style={
                {
                    'width': '500px',
                    'height': '150px',
                    'backgroundColor': 'red',
                    'position': 'absolute',
                    'right': '0',
                    'bottom': '0'
                }
            }>
            Hello scdsfdfgfdfdgfdggg
        </div>
    )
}


function App() {
    return (
        <div className="App">
            <Header/>
            <Field/>
            <FieldClass/>
            <Btn/>
            <Wrapper>
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
                <DinamicGreating color={'green'}>
                    <h2>Что то написано</h2>
                    <h2>Hello world</h2>
                </DinamicGreating>

                <HelloGreating/>

                <Counter render={(counter) => (
                    <Message counter={counter}/>
                )}/>

                <Form/>

                <FormPortal/>
            </Wrapper>

        </div>
    );
}

export default App;
