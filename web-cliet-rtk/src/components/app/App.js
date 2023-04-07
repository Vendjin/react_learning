import {lazy, Suspense} from "react";
import {Route, Routes} from "react-router-dom";
import PrivateAuth from '../../hocs/PrivateAuth';
import Spinner from "../spinner/Spinner";

const Page404 = lazy(() => import('../../pages/404'));
const IndexPage = lazy(() => import('../Index'));
const LoginPage = lazy(() => import('../../pages/auth/Login'));
const Second = lazy(() => import('../Second'));

function App() {
    return (
        <div className="App">
            <main>
                {/*TODO подумать над общей анимацией загрузки*/}
                <Suspense fallback={<Spinner/>}>
                    {/*<AuthContextProvider>*/}
                        <Routes>
                            <Route path={'login'} element={<LoginPage/>}/>
                            <Route element={<PrivateAuth/>}>
                                <Route path={'/'} element={<IndexPage/>}/>
                                <Route path={'2'} element={<Second/>}/>
                                <Route path={'*'} element={<Page404/>}/>
                            </Route>
                        </Routes>
                    {/*</AuthContextProvider>*/}
                </Suspense>
            </main>
        </div>
    );
}

export default App;
