import AppHeader from "../appHeader/AppHeader";
// import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'; v5
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import MainPage from "../pages/MainPage";
import ComicsPage from "../pages/ComicsPage";

const App = () => {

    return (
        /*// react router dom v5
        <Router>
            <div className="app">
                <AppHeader/>
                <main>
                    <Switch>
                        <Route exact path='/'>
                            <MainPage/>
                        </Route>

                        <Route exact path='/comics'>
                            <ComicsPage/>
                        </Route>
                    </Switch>
                </main>
            </div>
        </Router>*/

        // react router dom v6
        <Router>
            <div className="app">
                <AppHeader/>
                <main>
                    <Routes>
                        <Route path='/' element={<MainPage/>}/>
                        <Route path='comics' element={<ComicsPage/>}/>
                    </Routes>
                </main>
            </div>
        </Router>
    );


}

export default App;
