import './randomChar.scss';
import hammer from '../../resources/img/mjolnir.png';
import {useEffect, useState} from "react";
import MarvelService from "../../services/MarvelService";
import Spinner from "../spinner/spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";

const RandomChar = (props) => {

    const [char, setChar] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    // deps[] функция выполнится 1 раз при создании компонента
    useEffect(() => {
        updateChar();

        // создаем и очищаем интревал
        const timerId = setInterval(updateChar, 60000);

        return () => {
            clearInterval(timerId)
        }

    }, []);

    const onError = () => {
        setError(true);
        setLoading(false);
    }

    const onCharLoading = () => {
        setLoading(true)
    }

    // добавляем выгруженного персонажа в стейт
    const onCharLoaded = (char) => {
        setChar(char);
        setLoading(false)
    }

    // создаем новое свойство marvelService
    const marvelService = new MarvelService();

    const updateChar = () => {
        const min = 1011000;
        const max = 1011400;
        const id = Math.floor(Math.random() * (max - min + 1)) + min;

        // перед тем как отправить запрос мы устанавливаем спиннер
        onCharLoading();
        marvelService
        .getCharacter(id)
        .then(onCharLoaded)
        // ловим в кетче ошибку и передаем его в обработчик, который поменяет стейт
        .catch(onError)
    }


    // если есть ошибка, то отображаем компонент с ошибкой, если нет, то null - ничего
    const errorMessage = error ? <ErrorMessage/> : null;
    // если стейт лоадинг показываем спиннер, если false, то ничего
    const spinner = loading ? <Spinner/> : null;
    // если нет спинера и нет ошибки, то отображаем View иначе null
    const content = !(loading || error) ? <View char={char}/> : null;

    return (
        <div className="randomChar">
            {/*если стейт лоадинг показываем спиннер, если загружен показываем компонент
            {loading ? <Spinner/> : <View char={char}/>}*/}
            {errorMessage}
            {spinner}
            {content}

            <div className="randomChar__static">
                <div className="randomChar__title">Random character for today!<br/>
                    Do you want to get to know him better?
                </div>
                <div className="randomChar__title">Or choose another one</div>
                <button className=" button button__main" onClick={updateChar}>TRY IT</button>
                <img src={hammer} alt="Random Character" className='randomChar__decoration'/>
            </div>

        </div>
    )

}


// условный компонент
const View = ({char}) => {
    const {name, thumbnail, description, homepage, wiki} = char;

    let toggleImgClass = () => {
        const imgUrl = 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg';
        let imgClass = "randomChar__img";
        if (thumbnail === imgUrl) {
            imgClass += '-not_available';
        }
        return imgClass

    }

    return (
        <div className="randomChar__block">
            <img src={thumbnail} alt="Random Character" className={toggleImgClass()}/>
            <div className="randomChar__info">
                <h2 className="randomChar__name">{name}</h2>
                <div className='randomChar__descr'>
                    {description}
                </div>

                <div className='randomChar__btns'>
                    <button className=" button button__main">
                        <a href={homepage}>HOMEPAGE</a>
                    </button>
                    <button className=" button button__secondary">
                        <a href={wiki}>WIKI</a>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default RandomChar;