import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "./components/home";
import PrivateRoute from "./utils/router/privateRoute";
import AuthRootComponent from "./components/home/auth";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path='login' element={<AuthRootComponent/>}/>
                <Route path='register' element={<AuthRootComponent/>}/>

                <Route element={<PrivateRoute/>}>
                    <Route path='/' element={<Home/>}/>

                </Route>

            </Routes>
        </div>
    );
}

export default App;
