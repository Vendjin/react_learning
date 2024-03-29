import './randomChar.scss';
import hammer from '../../resources/img/mjolnir.png';
import {useEffect, useState} from "react";
import useMarvelService from "../../services/MarvelService";
import {setContent} from "../../utils/setContent";

const RandomChar = () => {
    const [char, setChar] = useState({});
    const {getCharacter, clearError, process, setProcess} = useMarvelService();

    // deps[] функция выполнится 1 раз при создании компонента
    useEffect(() => {
        updateChar();
        /*// создаем и очищаем интервал
        const timer Id = setInterval(updateChar, 60000);

        return () => {
            clearInterval(timerId)
        }*/
    }, []);

       // добавляем выгруженного персонажа в стейт
    const onCharLoaded = (char) => {
        setChar(char);
    }

    const updateChar = () => {
        const min = 1011000;
        const max = 1011400;
        const id = Math.floor(Math.random() * (max - min + 1)) + min;

        /*        // перед тем как отправить запрос мы устанавливаем спиннер
                // onCharLoading();
                // marvelService*/
        clearError();
        getCharacter(id)
        .then(onCharLoaded)
        .then(() => setProcess('confirmed'))
    }

    return (
        <div className="randomChar">
            {setContent(process, View, char)}

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
const View = ({data}) => {
    const {name, thumbnail, description, homepage, wiki} = data;

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