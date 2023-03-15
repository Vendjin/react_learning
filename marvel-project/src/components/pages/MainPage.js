import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";
import decoration from '../../resources/img/vision.png';
import {useState} from "react";
import FindForm from "../findForm/FindForm";
import {Helmet}  from 'react-helmet'

const MainPage = () => {
    const [selectedChar, setSelectedChar] = useState(null);

    const onCharSelected = (id) => {
        setSelectedChar(id)
    }

    return (
        <>
            <Helmet>
                <meta
                    name="description"
                    content="Marvel information portal"
                />
                <title>Marvel information portal</title>
            </Helmet>
            <ErrorBoundary>
                <RandomChar/>
            </ErrorBoundary>

            <div className="char__content">
                {/*передаем пропc в CharList, оттуда вернет id чара*/}
                <CharList onCharSelected={onCharSelected}/>
                <div>
                    <ErrorBoundary>
                        {/*полученное id чара передаем через пропc в CharInfo*/}
                        <CharInfo charId={selectedChar}/>
                    </ErrorBoundary>
                    <ErrorBoundary>
                        <FindForm/>
                    </ErrorBoundary>
                </div>

            </div>

            <img className='bg-decoration' src={decoration} alt='vision'/>
        </>
    )
};

export default MainPage;