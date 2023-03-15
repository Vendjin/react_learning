import './charList.scss';
import useMarvelService from "../../services/MarvelService";
import {useEffect, useMemo, useRef, useState} from "react";
import PropTypes from "prop-types";
import {setContentList} from "../../utils/setContent";


const CharList = (props) => {
    const [charList, setCharList] = useState([]);
    const [blockNewItemLoading, setBlockNewItemLoading] = useState(false);
    const [offset, setOffset] = useState(210);
    const [lastChar, setLastChar] = useState(false);

    const {getAllCharacters, process, setProcess} =  useMarvelService();

    // первичная загрузка для отображения
    // [] функция выполнится 1 раз при создании компонента
    useEffect(() => {
        onRequest(offset,  true)
    }, [])


    // запрашиваем персонажей
    const onRequest = (offset, initial) => {
        // initial = true - это первичная загрузка, а если передали false, то это последующая
        initial ? setBlockNewItemLoading(false): setBlockNewItemLoading(true) ;
        // setBlockNewItemLoading используется и при первичной загрузке, поэтому блокируем кнопку
        // процесс загрузки персонажей, когда он запущен, ожидает пока загрузится запрос и не дает наспамить следующие
        getAllCharacters(offset)
        .then(onCharListLoaded)
        .then(() => setProcess('confirmed'))
    }

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

    /*из за перехода на принцип Конечного автомата, случился баг, что рендерится компонент
    2 раза, а анимация выбора не отрабатывает с 1 раза*/
    const elements = useMemo( () => {
        return setContentList(process, () => renderItems(charList), blockNewItemLoading);
    }, [process]);

    return (
        <div className='char__list'>
            {elements}
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

CharList.propTypes = {
    onCharSelected: PropTypes.func.isRequired,
};

export default CharList;