import AppHeader from "../appHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import {useState} from "react";
import decoration from '../../resources/img/vision.png';
import ErrorBoundary from "../errorBoundary/ErrorBoundary";

const App = () => {

    const [selectedChar, setSelectedChar] = useState(null);

    const onCharSelected = (id) => {
        setSelectedChar(id)
    }

    return (
        <div className="app">
            <AppHeader/>
            <main>
                <RandomChar/>
                <div className="char__content">
                    {/*передаем пропc в CharList, оттуда вернет id чара*/}
                    <CharList onCharSelected={onCharSelected}/>
                    <ErrorBoundary>
                        {/*полученное id чара передаем через пропc в CharInfo*/}
                        <CharInfo charId={selectedChar}/>
                    </ErrorBoundary>

                </div>
                <img className='bg-decoration' src={decoration} alt='vision'/>
            </main>
        </div>
    );


}

export default App;
