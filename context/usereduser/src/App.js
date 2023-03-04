import {useState, useReducer} from 'react';
import {Container} from 'react-bootstrap';


function reducer(state, action) {
    switch (action.type) {
        case 'toggle':
            return {autoplay: !state.autoplay};
        case 'slow':
            return {autoplay: 300};
        case 'fast':
            return {autoplay: 700};
        case 'custom':
            return {autoplay: action.payload}
        default:
            throw new Error('Нет такого действия');
    }
}

function init(initial) {
    return {autoplay: initial}
}

const Slider = ({initial}) => {
    const [slide, setSlide] = useState(0);
    //useState принимает функцию reducer, начальное состояние, ленивое создание начального состояния
    // reducer - функция отвечающая за МОДИФИКАЦИЮ(не изменения) состояния
    // const [autoplay, dispatch] = useReducer(reducer, {autoplay: false});
    const [autoplay, dispatch] = useReducer(reducer, initial, init);

    function changeSlide(i) {
        setSlide(slide => slide + i);
    }

    return (
        <Container>
            <div className="slider w-50 m-auto">
                <img className="d-block w-100"
                     src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
                     alt="slide"/>
                <div className="text-center mt-5">Active slide {slide} <br/>{autoplay.autoplay ? 'auto' : null} </div>
                <div className="buttons mt-3">
                    <button
                        className="btn btn-primary me-2"
                        onClick={() => changeSlide(-1)}>-1
                    </button>
                    <button
                        className="btn btn-primary me-2"
                        onClick={() => changeSlide(1)}>+1
                    </button>
                    <button
                        className="btn btn-primary me-2"
                        // {type: 'toggle'} - этот объект action, и объект в диспатче должен содержать
                        //одно обязательное поле type
                        onClick={() => dispatch({type: 'toggle'})}>toggle autoplay
                    </button>
                    <button
                        className="btn btn-primary me-2"
                        onClick={() => dispatch({type: 'slow'})}>slow autoplay
                    </button>
                    <button
                        className="btn btn-primary me-2"
                        onClick={() => dispatch({type: 'fast'})}>fast autoplay
                    </button>
                    <button
                        className="btn btn-primary me-2"
                        // получение данных через payload из самой кнопки
                        onClick={(event) => dispatch({type: 'custom', payload: +event.target.textContent})}> 500
                    </button>
                </div>
            </div>
        </Container>
    )
}

function App() {
    return (
        <Slider initial={false}/>
    );
}

export default App;