import './characterMore.scss';
import {Link, useParams} from "react-router-dom";
import AppBanner from "../appBanner/AppBanner";
import {useEffect, useState} from "react";
import useMarvelService from "../../services/MarvelService";
import {setContent} from "../../utils/setContent";

export default function CharacterMore() {
    const [character, setCharacter] = useState(null);
    const {getCharacter, clearError, process, setProcess} = useMarvelService();
    const {charId} = useParams();

    const onCharacterLoaded = (characterId) => {
        setCharacter(characterId)
    }

    const updateCharacter = () => {
        clearError();
        getCharacter(charId)
        .then(onCharacterLoaded)
        .then(() => setProcess('confirmed'))

    }

    useEffect(() => {
        updateCharacter(charId);
    }, [charId]);

    return (
        <>
            <AppBanner/>
            {setContent(process, View, character)}
        </>
    )
}


const View = ({data}) => {
    const {name, description, thumbnail} = data;

    return (
        <div className='character__more'>
            <img src={thumbnail} alt={name} className='character__more_img'/>
            <div className="character__more_info">
                <div className="character__more_title">{name}</div>
                <div className="character__more_description">{description}</div>
            </div>
            <Link to={'/'} className="character__more_back">Back to main</Link>
        </div>

    )
}