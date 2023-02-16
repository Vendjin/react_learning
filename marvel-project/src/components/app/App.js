import AppHeader from "../appHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import {useState} from "react";
import decoration from '../../resources/img/vision.png';
import ErrorBoundary from "../errorBoundary/ErrorBoundary";
import ComicsMore from "../comicsMore/ComicsMore";
// react router dom v5
import {BrowserRouter as Router, Route} from 'react-router-dom';
import AppBanner from "../appBanner/AppBanner";
import ComicsList from "../comicsList/ComicsList";

const App = () => {

    const [selectedChar, setSelectedChar] = useState(null);

    const onCharSelected = (id) => {
        setSelectedChar(id)
    }

    return (
        <Router>
            <div className="app">
                <AppHeader/>
                <main>
                    <Route>
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
                    </Route>
                    <Route>
                        <AppBanner/>
                        <ComicsList/>
                    </Route>
                </main>
            </div>
        </Router>
    );


}

export default App;
