import {lazy, Suspense} from "react";
import AppHeader from "../appHeader/AppHeader";
// import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'; v5
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Spinner from "../spinner/spinner";


const Page404 = lazy(() => import('../pages/404'));
const MainPage = lazy(() => import('../pages/MainPage'));
const ComicsPage = lazy(() => import('../pages/ComicsPage'));
const ComicsMore = lazy(() => import('../comicsMore/ComicsMore'));

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
                    <Suspense fallback={<Spinner/>}>
                        <Routes>
                            <Route path='/' element={<MainPage/>}/>
                            <Route path='comics' element={<ComicsPage/>}/>
                            <Route path='comics/:comicId' element={<ComicsMore/>}/>
                            <Route path='*' element={<Page404/>}/>
                        </Routes>
                    </Suspense>
                </main>
            </div>
        </Router>
    );


}

export default App;
