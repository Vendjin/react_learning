/*Рефы - ссылки на элемент или компонент в дом дереве
Удобно чтобы посчитать какое количество раз компонент перерендерился*/
import {useEffect, useRef, useState} from "react";
import {Container} from "react-bootstrap";

const Refs = () => {
    const [text, setText] = useState('');

    const myRef = useRef(0);

    const focusFirstTI = () => {
        myRef.current.focus();
    }

    useEffect(() => {
        myRef.current++;
        console.log('Количество рендеров компонента', myRef.current);

        // посмотреть предыдущее состояние стейта
        myRef.current = text;
    })
    return (
        <Container>
            <form className="w-50 border mt-5 p-3 m-auto">
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                    <input onChange={event => setText(event.target.value)} type="email" className="form-control"
                           id="exampleFormControlInput1" placeholder="name@example.com"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                    <textarea onClick={() => myRef.current + 1} value={myRef.current} className="form-control"
                              id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
            </form>
        </Container>
    )
}

export default Refs;