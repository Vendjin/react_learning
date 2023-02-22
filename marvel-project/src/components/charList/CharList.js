import './charList.scss';
import useMarvelService from "../../services/MarvelService";
import {useState, useEffect, useRef} from "react";
import ErrorMessage from "../errorMessage/ErrorMessage";
import Spinner from "../spinner/spinner";
import CharInfo from "../charInfo/CharInfo";
import PropTypes from "prop-types";

const CharList = (props) => {

    const [charList, setCharList] = useState([]);
    /*const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);*/
    const [blockNewItemLoading, setBlockNewItemLoading] = useState(false);
    const [offset, setOffset] = useState(210);
    const [lastChar, setLastChar] = useState(false);

    const {loading, error, getAllCharacters} =  useMarvelService();

    // первичная загрузка для отображения
    // [] функция выполнится 1 раз при создании компонента
    useEffect(() => {
        onRequest(offset, true)
    }, [])


    // запрашиваем персонажей
    const onRequest = (offset, initial) => {
        // initial = true - это первичныя загрузка, а если передали false, то это последющая
        initial ? setBlockNewItemLoading(false): setBlockNewItemLoading(true) ;
        // setBlockNewItemLoading используется и при первичной загрузке, поэтому блокируем кнопку
        // процесс загрузки персонажей, когда он запущен, ожидает пока загрузится запрос и не дает наспамить следующие
        // setBlockNewItemLoading(true);
        getAllCharacters(offset)
        .then(onCharListLoaded)
        // .catch(onError)
    }

/*    // процесс загрузки персонажей, когда он запущен, ожидает пока загрузится запрос и не дает наспамить следующие
    const onCharListLoading = () => {
        setBlockNewItemLoading(true);
    }*/

    // состояние персонажи загрузились
    const onCharListLoaded = (newCharList) => {
        let ended = false;
        if (newCharList.length < 9 ){
            ended = true;
        }

        setCharList(charList => [...charList, ...newCharList]);
        // setLoading(loading => false);
        setBlockNewItemLoading(blockNewItemLoading => false);
        setOffset(offset => offset + 9);
        setLastChar(lastChar => ended);
    }

/*    const onError = () => {
        setError(true);
        setLoading(false);
    }*/

    // массив ссылок на элементы
    const itemRefs = useRef([]);

    const focusOnItem = (id) => {
        itemRefs.current.forEach(item => item.classList.remove('char__item_selected'));
        itemRefs.current[id].classList.add('char__item_selected');
        itemRefs.current[id].focus();
    }

    const renderItems = (arrChar) => {
        const items = arrChar.map((item, index) => {
            let imgStyle = {'objectFit': 'cover'};
            const notImgUrl = 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg';
            if (item.thumbnail === notImgUrl) {
                imgStyle = {'objectFit': 'fill'};
            }
            return (
                <li
                    className='char__item'
                    // tabIndex - доступность с помощью табов
                    tabIndex={0}
                    ref={elem => itemRefs.current[index] = elem}
                    key={item.id}
                    // вытаскиваем через колбек из пропсов нашу функцию и вызываем ее, она изменит глобальный стейт
                    onClick={() => {
                        props.onCharSelected(item.id);
                        focusOnItem(index);
                    }}>
                    <img src={item.thumbnail} alt={item.name} style={imgStyle}/>
                    <div className='char__name'>{item.name}</div>
                </li>
            )
        });

        // А эта конструкция вынесена для центровки спинера/ошибки
        return (
            <ul className='char__list_wrapper'>
                {items}
            </ul>
        )
    }


    const items = renderItems(charList);
    const errorMessage = error ? <ErrorMessage/> : null;
    const spinner = loading  && !blockNewItemLoading ? <Spinner/> : null;
    // const content = !(loading || error) ? items : null;

    // ДИНАМИЧЕСКИЙ ИМПОРТ
    /*// пример динамического импора
    if (loading) {
        import('./someFunc')
        .then(obj => obj.logger())
        .catch(error)
    }

    // можно применить деструктуризацию для динамического импорта, но необходимо использовать
    // async / await
    const any = async () => {
        const {logger, secondLog} = await import('./someFunc');
        logger();
    }

    // если экспортируем дефолтную функцию
    if (loading) {
        import('./someFunc')
        .then(obj => obj.default())
        .catch(error)
    }*/

    return (
        <div className='char__list'>
            {errorMessage}
            {spinner}
            {/*{content}*/}
            {items}
            <button
                className='button__main button__long'
                // Блокировка кнопки через атрибут disabled и изменение ее стилей, что бы не спамить запросами true - кнопка заблокирована, false разблокирована
                disabled={blockNewItemLoading}
                style={{'display': lastChar ? 'none': 'block'}}
                onClick={() => onRequest(offset)}>
                LOAD MORE
            </button>
        </div>
    )
}

CharInfo.propTypes = {
    onCharSelected: PropTypes.func.isRequired,
};

export default CharList;