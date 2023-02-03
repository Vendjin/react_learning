import './charList.scss';
import MarvelService from "../../services/MarvelService";
import {Component} from "react";
import ErrorMessage from "../errorMessage/ErrorMessage";
import Spinner from "../spinner/spinner";

class CharList extends Component {
    marvelService = new MarvelService();

    state = {
        charList: [],
        loading: true,
        error: false,
    }

    onCharListLoaded = (charList) => {
        // char тоже самое что и  char:char
        this.setState({charList, loading: false})
    }

    updateState = () => {
        this.marvelService
        .getAllCharacters()
        .then(this.onCharListLoaded)
        .catch(this.onError)
    }

    onError = () => {
        this.setState(
            {
                error: true,
                loading: false,
            }
        )
    }

    componentDidMount() {
        this.updateState();
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
                    // вытаскиваем через колбек из пропсов нашу функцию и вызываем ее
                    onClick={() => this.props.onCharSelected(item.id)}>
                    <img src={item.thumbnail} alt={item.name} style={imgStyle}/>
                    <div className='char__name'>{item.name}</div>
                </li>
            )
        });

        // А эта конструкция вынесена для центровки спиннера/ошибки
        return (
            <ul className='char__list_wrapper'>
                {items}
            </ul>
        )
    }

    render() {
        const {charList, loading, error} = this.state;
        const items = this.renderItems(charList);

        const errorMessage = error ? <ErrorMessage/> : null;
        const spinner = loading ? <Spinner/> : null;
        const content = !(loading || error) ? items : null;

        return (
            <div className='char__list'>
                {errorMessage}
                {spinner}
                {content}
                <button className='button__main button__long'>LOAD MORE</button>
            </div>
        )
    }
}


export default CharList;