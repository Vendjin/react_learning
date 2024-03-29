import './comicsMore.scss';
import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import useMarvelService from "../../services/MarvelService";
import {setContent} from "../../utils/setContent";

const ComicsMore = () => {
    const [comics, setComics] = useState(null);
    const {getComics, clearError, process, setProcess} = useMarvelService();
    const {comicId} = useParams();

    useEffect(() => {
        updateComics(comicId);
    }, [comicId]);


    const updateComics = () => {
        clearError();
        getComics(comicId)
        .then(onComicsLoaded)
        .then(() => setProcess('confirmed'))
    }

    const onComicsLoaded = (comics) => {
        setComics(comics);
    }

    return (
        <>
            {setContent(process, View, comics)}
        </>
    )
}

const View = ({data}) => {
    const {title, thumbnail, description, pageCount, language, prices} = data;

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