import {Component, useState, useEffect, useCallback, useMemo, useRef} from 'react';
import {Container} from 'react-bootstrap';
import './App.css';
import Refs from "./refs";
import SelfHooks from "./selfHooks";
import Filter from "./Filter";

class Slider extends Component {

    constructor(props) {
        super(props);
        this.state = {
            autoplay: false,
            slide: 0
        }
    }

    // componentDidMount() {
    //     document.title = `Slide: ${this.state.slide}`;
    // }
    //
    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     document.title = `Slide: ${this.state.slide}`;
    // }

    changeSlide = (i) => {
        console.log(this.state.slide)
        this.setState(({slide}) => ({
            slide: slide + i
        }))
    }

    toggleAutoplay = () => {
        this.setState(({autoplay}) => ({
            autoplay: !autoplay
        }))
    }

    render() {
        return (
            <Container>
                <div className="slider w-50 m-auto">
                    <img className="d-block w-100"
                         src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
                         alt="slide"/>
                    <div className="text-center mt-5">Active slide {this.state.slide}
                        <br/> {this.state.autoplay ? 'auto' : null}</div>
                    <div className="buttons mt-3">
                        <button
                            className="btn btn-primary me-2"
                            onClick={() => this.changeSlide(-1)}>-1
                        </button>
                        <button
                            className="btn btn-primary me-2"
                            onClick={() => this.changeSlide(1)}>+1
                        </button>
                        <button
                            className="btn btn-primary me-2"
                            onClick={this.toggleAutoplay}>toggle autoplay
                        </button>
                    </div>
                </div>
            </Container>
        )
    }
}

const countTotal = (num) => {
    console.log('counting');
    return num + 10
}
const calcValue = () => {
    console.log('random');

    return Math.random() * (50 - 1) + 1;
}

// const getSomeImages = () => {
//     console.log('fetching');
//     return [
//         'https://avatars.mds.yandex.net/i?id=1d3a7f4b63e9fe0106cdbe8a12d74131d1205bda-4579121-images-thumbs&n=13',
//         'https://bipbap.ru/wp-content/uploads/2017/04/priroda_kartinki_foto_03.jpg',
//         "https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
//     ]
// }

const SliderHook = (props) => {
    // useState(calcValue); - calcValue вызовется 1 раз
    // useState(calcValue()) - вызывается каждый раз и перерендеревается
    // useState(() => calcValue(some)) вызовется 1 раз, но с возможностью передать аргументы
    // const [slide, setSlide] = useState(calcValue);
    const [slide, setSlide] = useState(0);
    const [autoPlay, setAutoPlay] = useState(false);

    /*меморизировання ФУНКЦИЯ с помощью useCallback, вызовется 1 раз и запомнится в памяти, для правильного
    использования необходимо создавать дочерний компонент Slide*/
    const getSomeImages = useCallback(() => {
        console.log('fetching');
        return [
            'https://avatars.mds.yandex.net/i?id=1d3a7f4b63e9fe0106cdbe8a12d74131d1205bda-4579121-images-thumbs&n=13',
            'https://bipbap.ru/wp-content/uploads/2017/04/priroda_kartinki_foto_03.jpg',
            "https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
        ]
    }, []);


    function logging() {
        console.log('logger');
    }

    // useEffect используем для запросов на сервер, таймаутов, изменений DOM структуры
    // второй передаваемый элемент, это массив зависимостей, за чем следить,
    useEffect(() => {
        console.log('slide')
        document.title = `Slide: ${slide}`;

        // назначил эффект логгер
        window.addEventListener('click', logging);
        // для очистки/удаления эффекта нужно вызвать  return в котором вырубаем наш логгер
        return () => {
            window.removeEventListener('click', logging);
        }

    }, [slide]);

    // можно создавать сколько угодно useEffect
    useEffect(() => {
        console.log('Log Autoplay');

    }, [autoPlay]);

    function changeSlide(i) {
        setSlide(slide => slide + i);
    }

    function toggleAutoplay() {
        // setAutoPlay(!autoPlay);
        // так же для асинхронности, что бы учитывать предыдущее состояние передаем callback
        setAutoPlay(autoPlay => !autoPlay);
    }
    /*меморизированное ЗНАЧЕНМИЕ, которое высчитывается на основании какой то функции, один раз вычисляем и запоминаем,
    при перерендеровании не будет снова вызываться, можно добавить при каком еще условии вызываться*/
    const total = useMemo(() => {
        return countTotal(slide);
    }, [slide]);


    const style =  useMemo(() => ({
        color: slide > 4 ? 'red': 'black',
    }), [slide])


    useEffect(() => {
        console.log('Styles');
    }, [style])


    return (
        <Container>
            <div className="slider w-50 m-auto">
                <Slide getSomeImages={getSomeImages}/>
                <div className="text-center mt-5">Active slide {slide} <br/> {autoPlay ? 'auto' : null} </div>
                <div style={style} className="text-center mt-5">TotalSlides {total}</div>
                <div className="buttons mt-3 text-center">
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
                        onClick={toggleAutoplay}>toggle autoplay
                    </button>
                </div>
            </div>
        </Container>
    )
}

const Slide = ({getSomeImages}) => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        setImages(getSomeImages())
    }, [getSomeImages])

    return (
        <>
            {
                images.map((url, i) =>
                    <img className="d-block w-100"
                         src={url}
                         alt="slide"
                         key={i}
                    />
                )
            }
        </>
    )
}

function App() {

    const [slider, setSlider] = useState(true);

    return (
        <>
            <button onClick={() => setSlider(!slider)}>
                Click OnOffSlider
            </button>
            {slider ? <SliderHook/> : null}
            {/*<Slider/>*/}
            {/*<Refs/>*/}
            <SelfHooks/>

            <hr/>
            <Filter/>
        </>
    );
}

export default App;
