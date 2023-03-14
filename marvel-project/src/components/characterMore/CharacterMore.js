import './characterMore.scss';
import {Link, useParams} from "react-router-dom";
import AppBanner from "../appBanner/AppBanner";
import {useEffect, useState} from "react";
import useMarvelService from "../../services/MarvelService";
import ErrorMessage from "../errorMessage/ErrorMessage";
import Spinner from "../spinner/spinner";

export default function CharacterMore () {
    const [character, setCharacter] = useState(null);
    const {loading, error, getCharacter, clearError} = useMarvelService();
    const {charId} = useParams();

    const onCharacterLoaded = (characterId) => {
        setCharacter(characterId)
    }

    const updateCharacter = () => {
        clearError();
        getCharacter(charId).then(onCharacterLoaded);
    }

    useEffect(() => {
        updateCharacter(charId);
    }, [charId]);

    const errorMessage = error ? <ErrorMessage/> : null;
    const spinner = loading ? <Spinner/> : null;
    const content = !(loading || error || !character) ? <View character={character}></View> : null

    return (
        <>
            <AppBanner/>
            {errorMessage}
            {spinner}
            {content}
        </>
    )

}


const View = ({character}) => {
    const {name, description, thumbnail} = character;
    console.log(character)
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