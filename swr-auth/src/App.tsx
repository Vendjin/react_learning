import React, {Suspense, lazy} from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Spinner from "./components/spinner";
import PrivateAuth from "./libs/privateAuth";


const LoginPage = lazy(() => import('./pages/login'));
const IndexPage = lazy(() => import('./pages/indexPage'));

function App() {
    return (
        <div className="App">
            <Suspense fallback={<Spinner/>}>
                <Routes>
                    <Route path={'login'} element={<LoginPage/>}/>
                    <Route element={<PrivateAuth/>}>
                        <Route path={'/'} element={<IndexPage/>}/>
                    </Route>
                </Routes>
            </Suspense>
        </div>
    );
}

export default App;
