import {useState, useEffect} from 'react';
import {Container} from 'react-bootstrap';
import './App.css';

// компонент высшего порядка, компоненты ниже по сути похожи и всю логику вынес в компонент высшего порядка
const withSlider = (BaseComponent, getData) => {
    return (props) => {
        const [slide, setSlide] = useState(0);
        const [autoplay, setAutoplay] = useState(false)

        useEffect(() => {
            setSlide(getData());
        }, [])

        function changeSlide(i) {
            setSlide(slide => slide + i);
        }

        return <BaseComponent {...props}
                              slide={slide}
                              autoplay={autoplay}
                              changeSlide={changeSlide}
                              setAutoplay={setAutoplay}/>
    }
}
const getDataFromFirstFetch = () => {
    return 10
};
const getDataFromSecondFetch = () => {
    return 20
};

const SliderFirst = ({slide, changeSlide, name}) => {
    console.log(name)
    return (
        <Container>
            <div className="slider w-50 m-auto">
                <img className="d-block w-100"
                     src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
                     alt="slide"/>
                <div className="text-center mt-5">Active slide {slide}</div>
                <div className="buttons mt-3">
                    <button
                        className="btn btn-primary me-2"
                        onClick={() => changeSlide(-1)}>-1
                    </button>
                    <button
                        className="btn btn-primary me-2"
                        onClick={() => changeSlide(1)}>+1
                    </button>
                </div>
            </div>
        </Container>
    )
}

const SliderSecond = ({slide, autoplay, changeSlide, setAutoplay}) => {
    return (
        <Container>
            <div className="slider w-50 m-auto">
                <img className="d-block w-100"
                     src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
                     alt="slide"/>
                <div className="text-center mt-5">Active slide {slide} <br/>{autoplay ? 'auto' : null} </div>
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
                        onClick={() => setAutoplay(autoplay => !autoplay)}>toggle autoplay
                    </button>
                </div>
            </div>
        </Container>
    )
}

const SliderWithFirstFetch = withSlider(SliderFirst, getDataFromFirstFetch);
const SliderWithSecondFetch = withSlider(SliderSecond, getDataFromSecondFetch);

// Сокращенное написание HOC
const hi = () => {
    return '10';
}
const withLogger  = (WrappedComponent, getData) => props => {
    useEffect(() => {
        console.log('first render', getData())
    }, [])

    return <WrappedComponent {...props}/>
}

const Hello = () => {
    return (
        <h1>Hello</h1>
    )
}

const HelloWithLogger = withLogger(Hello, hi)



function App() {
    return (
        <>
            <HelloWithLogger/>
            <SliderWithFirstFetch name={'NAME'}/>
            <SliderWithSecondFetch/>
        </>
    );
}

export default App;