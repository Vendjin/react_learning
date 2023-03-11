import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";
import decoration from '../../resources/img/vision.png';
import {useState} from "react";
import FindForm from "../findForm/FindForm";


const MainPage = () => {
    const [selectedChar, setSelectedChar] = useState(null);

    const onCharSelected = (id) => {
        setSelectedChar(id)
    }

    return (
        <>
            <ErrorBoundary>
                <RandomChar/>
            </ErrorBoundary>

            <div className="char__content">
                {/*передаем пропc в CharList, оттуда вернет id чара*/}
                <CharList onCharSelected={onCharSelected}/>

                <ErrorBoundary>
                    {/*полученное id чара передаем через пропc в CharInfo*/}
                    <CharInfo charId={selectedChar}/>
                    <FindForm/>
                </ErrorBoundary>
            </div>

            <img className='bg-decoration' src={decoration} alt='vision'/>
        </>
    )
};

export default MainPage;