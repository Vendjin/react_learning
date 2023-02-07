import './charInfo.scss';
import {Component} from "react";
import MarvelService from "../../services/MarvelService";
import Spinner from "../spinner/spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";
import Skeleton from "../sceleton/Skeleton";
import PropTypes from "prop-types";

class CharInfo extends Component {

    state = {
        char: null,
        loading: false,
        error: false,
    }

    marvelService = new MarvelService();

    onError = () => {
        this.setState({
            error: true,
            loading: false
        })
    }

    onLoading = () => {
        this.setState({loading: true})
    }

    // полученные данные закидываем в стейт
    onCharLoadedState = (char) => {
        this.setState({char, loading: false})
    }

    // хук жизненного цикла, предзагрузка данных
    componentDidMount() {
        this.updateCharInfo();
    }

    // еще хук жизненного цикла, когда предали пропс
    componentDidUpdate(prevProps, prevState) {
        // проверяем изменились ли пропсы для перерендеревания
        if (this.props.charId !== prevProps.charId){
            this.updateCharInfo();
        }
    }


    updateCharInfo = () => {
        const {charId} = this.props;
        // что бы не вылезала ошибка, что не передан charId в url на сервер
        if (!charId) {
            return;
        }

        // показывать спинер пока данные не загрузились
        this.onLoading();
        this.marvelService
        .getCharacter(charId)
        .then(this.onCharLoadedState)
        .catch(this.onError);

        // строка для примера работы с предохранителем
        // this.foo.bar = 0
    }

    render() {
        const {char, loading, error} =this.state;

        const skeleton = !char || loading || error ? <Skeleton/>: null;
        const errorMessage = error ? <ErrorMessage/>: null;
        const spinner = loading ? <Spinner/>: null;

        const content = !(loading || error || !char) ? <View char={char}/> : null;

        return (
            <div className='char__info'>
                {skeleton}
                {errorMessage}
                {spinner}
                {content}
            </div>
        )
    }
}

const View = ({char}) => {
    const {name, thumbnail, description, homepage, wiki, comics} = char;
    return (
        <>
            <div className="char__info-header">
                <img src={thumbnail} alt={name}/>
                <div className="char__info-nav">
                    <div className="char__info-name">{name}</div>
                    <div className="char__btns">
                        <a href={homepage} className="button button__main">HOMEPAGE</a>
                        <a href={wiki} className="button button__secondary">WIKI</a>
                    </div>
                </div>
            </div>

            <div className="char__descr">
                {description}
            </div>

            <div className="char__comics">Comics:</div>
            <ul className="char__comics-list">
                {comics.length > 0 ? null : 'Комиксы не найдены'}
                {comics.map((item, i) => {
                    // не показывать больше 10 комиксов
                    if (i > 9) return;
                    return (
                        <li className="char__comics-item" key={i}>
                            {item.name}
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

CharInfo.propTypes = {
    charId: PropTypes.number,

}
export default CharInfo;