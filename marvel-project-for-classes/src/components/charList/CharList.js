import './charList.scss';
import MarvelService from "../../services/MarvelService";
import {Component} from "react";
import ErrorMessage from "../errorMessage/ErrorMessage";
import Spinner from "../spinner/spinner";
import CharInfo from "../charInfo/CharInfo";
import PropTypes from "prop-types";

class CharList extends Component {

    state = {
        charList: [],
        loading: true,
        error: false,
        blockNewItemLoading: false,
        offset : 210,
        lastChar: false
    }

    marvelService = new MarvelService();

    // первичная загрузка для отображения
    componentDidMount() {
        this.onRequest();
    }

    // запрашиваем персонажей
    onRequest = (offset) => {
        // onCharListLoading используется и при первичной загрузке, поэтому блокируем кнопку
        this.onCharListLoading();
        this.marvelService.getAllCharacters(offset)
        .then(this.onCharListLoaded)
        .catch(this.onError)
    }

    // процесс загрузки персонажей, когда он запущен, ожидает пока загрузится запрос и не дает наспамить следующие
    onCharListLoading = () => {
        this.setState({
            blockNewItemLoading: true
        })
    }

    // состояние персонажи загрузились
    onCharListLoaded = (newCharList) => {
        let ended = false;
        if (newCharList.length < 9 ){
            ended = true;
        }
        // тк список персонажей формируем не заново, а добавляем к старым новых, то предыдущее состояния стейта важно! используй колбек. () => ({}) означает, что возвращаем объект из этой функции
        this.setState(({offset, charList}) => ({
            charList: [...charList, ...newCharList],
            loading: false,
            blockNewItemLoading: false,
            offset: offset + 9,
            lastChar: ended,
        }))
    }

    onError = () => {
        this.setState({
            error: true,
            loading: false,
        })
    }

    renderItems(arrChar) {
        const items = arrChar.map((item) => {
            let imgStyle = {'objectFit': 'cover'};
            const notImgUrl = 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg';
            if (item.thumbnail === notImgUrl) {
                imgStyle = {'objectFit': 'fill'};
            }
            return (
                <li
                    className='char__item'
                    key={item.id}
                    // вытаскиваем через колбек из пропсов нашу функцию и вызываем ее, она изменит глобальный стейт
                    onClick={() => this.props.onCharSelected(item.id)}>
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

    render() {
        const {charList, loading, error, offset, blockNewItemLoading, lastChar} = this.state;
        const items = this.renderItems(charList);

        const errorMessage = error ? <ErrorMessage/> : null;
        const spinner = loading ? <Spinner/> : null;
        const content = !(loading || error) ? items : null;

        return (
            <div className='char__list'>
                {errorMessage}
                {spinner}
                {content}
                <button
                    className='button__main button__long'
                    // Блокировка кнопки через атрибут disabled и изменение ее стилей, что бы не спамить запросами true - кнопка заблокирована, false разблокирована
                    disabled={blockNewItemLoading}
                    style={{'display': lastChar ? 'none': 'block'}}
                    onClick={() => this.onRequest(offset)}>
                    LOAD MORE
                </button>
            </div>
        )
    }
}

CharInfo.propTypes = {
    onCharSelected: PropTypes.func,
};

export default CharList;