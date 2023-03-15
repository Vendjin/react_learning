import './comicsList.scss';
import {useEffect, useState} from "react";
import ErrorMessage from "../errorMessage/ErrorMessage";
import Spinner from "../spinner/spinner";
import useMarvelService from "../../services/MarvelService";
import {Link} from "react-router-dom";

const ComicsListOld = () => {

    const [comicsList, setComicsList] = useState([]);
    const [blockNewComicsLoading, setBlockNewComicsLoading] = useState(false);
    const [offset, setOffset] = useState(0);
    const [lastComics, setLastComics] = useState(false);

    const {error, loading, getAllComics} = useMarvelService();

    useEffect(() => {
        onRequest(offset, true)
    }, [])

    const onRequest = (offset, initial) => {
        initial ? setBlockNewComicsLoading(false) : setBlockNewComicsLoading(true);
        getAllComics(offset).then(onComicsListLoaded)
    }

    const onComicsListLoaded = (newComicsList) => {
        let ended = false;
        if (newComicsList.length < 8) {
            ended = true;
        }

        setComicsList(comicsList => [...comicsList, ...newComicsList]);
        setBlockNewComicsLoading(false);
        setOffset(offset => offset + 8);
        setLastComics(ended);
    }

    const renderItems = (arrComics) => {
        const notImgUrl = 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg';

        const items = arrComics.map((item, i) => {
            let imgStyle = {'objectFit': 'cover'};
            if (item.thumbnail === notImgUrl) {
                imgStyle = {'objectFit': 'fill'};
            }
            return (
                <li className='comics__list_item' tabIndex={0} key={i}>
                    <Link to={`/comics/${item.id}`}>
                        <img src={item.thumbnail} alt={item.title} className='comics__list_img' style={imgStyle}/>
                        <div className="comics__list_name">{item.title}</div>
                        <div className="comics__list_price">{item.prices}</div>
                    </Link>
                </li>
            )
        });

        // для центровки спинера и ошибки
        return (
            <ul className='comics__list_wrapper'>
                {items}
            </ul>
        )
    }


    const items = renderItems(comicsList);
    const errorMessage = error ? <ErrorMessage/> : null;
    const spinner = loading && !blockNewComicsLoading ? <Spinner/> : null;

    return (
        <div className="comics__list">
            {spinner}
            {errorMessage}
            {items}
            <button
                className='button__main button__long'
                // Блокировка кнопки через атрибут disabled и изменение ее стилей, что бы не спамить запросами true - кнопка заблокирована, false разблокирована
                disabled={blockNewComicsLoading}
                style={{'display': lastComics ? 'none' : 'block'}}
                onClick={() => onRequest(offset)}
            >
                LOAD MORE
            </button>
        </div>
    )
}

export default ComicsListOld;