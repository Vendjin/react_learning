import './comicsMore.scss';
import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import useMarvelService from "../../services/MarvelService";
import ErrorMessage from "../errorMessage/ErrorMessage";
import Spinner from "../spinner/spinner";

const ComicsMore = () => {
    const [comics, setComics] = useState(null);
    const {loading, error, getComics, clearError} = useMarvelService();

    const {comicId} = useParams();

    useEffect(() => {
        updateComics(comicId);
    }, [comicId]);


    const updateComics = () => {
        clearError();
        getComics(comicId).then(onComicsLoaded)
    }

    const onComicsLoaded = (comics) => {
        setComics(comics);
    }

    const errorMessage = error ?  <ErrorMessage/> : null;
    const spinner = loading ? <Spinner/> : null;
    const content = !(loading || error || !comics)  ? <View comics={comics}/> : null

    return (
        <>
            {errorMessage}
            {spinner}
            {content}
        </>
    )
}

const View = ({comics}) => {
    const {title, thumbnail, description, pageCount, language, prices} = comics;

    return (
        <div className='comics__more'>
            <img src={thumbnail} alt={title} className='comics__more_img'/>
            <div className="comics__more_info">
                <div className="comics__more_title">{title}</div>
                <div className="comics__more_description">{description}
                </div>
                <div className="comics__more_pages">{pageCount}</div>
                <div className="comics__more_language">Language: {language}</div>
                <div className="comics__more_price">{prices}</div>
            </div>
            <Link to={'/comics'} className="comics__more_back">Back to all</Link>
        </div>
    )

}

export default ComicsMore;