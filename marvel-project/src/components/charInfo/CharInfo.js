import './charInfo.scss';
import {useEffect, useState} from "react";
import useMarvelService from "../../services/MarvelService";
import Spinner from "../spinner/spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";
import Skeleton from "../sceleton/Skeleton";
import PropTypes from "prop-types";
import {Link, useParams} from "react-router-dom";

const CharInfo = (props) => {

    const [char, setChar] = useState(null);
    /*const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);*/

    const {loading, error, getCharacter, clearError} = useMarvelService();
/*    const onError = () => {
        setError(true);
        setLoading(false);
    }

    const onLoading = () => {
        setLoading(true);
    }*/

    // полученные данные закидываем в стейт
    const onCharLoaded = (char) => {
        setChar(char);
        // setLoading(false);
    }

    // предзагрузка данных, первичная загрузка на страницу
    useEffect(() => {
        updateCharInfo();
    }, [props.charId])


    const updateCharInfo = () => {
        const {charId} = props;
        // что бы не вылезала ошибка, что не передан charId в url на сервер
        if (!charId) {
            return;
        }
        clearError();
        // показывать спиннер пока данные не загрузились
        // onLoading();
        getCharacter(charId)
        .then(onCharLoaded)
        // .catch(onError);
    }

    const skeleton = !char || loading || error ? <Skeleton/> : null;
    const errorMessage = error ? <ErrorMessage/> : null;
    const spinner = loading ? <Spinner/> : null;

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
                    const comicsId = item.resourceURI.match(/\d+/g)[1];
                    // console.log(item.resourceURI, item.resourceURI.match(/\d+/g)[1])
                    // console.log(item)
                    // не показывать больше 10 комиксов
                    if (i > 9) return;
                    return (
                        <li className="char__comics-item" key={i}>
                            <Link to={`/comics/${comicsId}`}>{item.name}</Link>
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