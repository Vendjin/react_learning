import './charInfo.scss';
import {useEffect, useState} from "react";
import useMarvelService from "../../services/MarvelService";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {setContent} from "../../utils/setContent";

const CharInfo = (props) => {

    const [char, setChar] = useState(null);
    const {getCharacter, clearError, process, setProcess} = useMarvelService();

    // предзагрузка данных, первичная загрузка на страницу
    useEffect(() => {
        updateChar();
    }, [props.charId])


    const updateChar = () => {
        const {charId} = props;
        if (!charId) {
            return;
        }

        clearError();
        getCharacter(charId)
        .then(onCharLoaded)
        .then(() => setProcess('confirmed'))
    }

    // полученные данные закидываем в стейт
    const onCharLoaded = (char) => {
        setChar(char);
    }

    return (
        <div className="char__info">
            {setContent(process, View, char)}
        </div>
    )
}

const View = ({data}) => {
    const {name, thumbnail, description, homepage, wiki, comics} = data;

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