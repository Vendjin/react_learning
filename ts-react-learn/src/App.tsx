import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "./components/home";
import PrivateRoute from "./utils/router/privateRoute";
import AuthRootComponent from "./components/auth/index";
import {ColorModeContext, useMode} from "./theme";
import {ThemeProvider, CssBaseline} from "@mui/material";
import Layout from "./components/layout";
import WatchList from "./components/watchList";
import News from "./components/news";
import Settings from "./components/settings";

function App() {

    const [theme, colorMode] = useMode();
    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline/>

                    <div className="App">
                        <Routes>
                            <Route element={<Layout/>}>
                                <Route path='login' element={<AuthRootComponent/>}/>
                                <Route path='register' element={<AuthRootComponent/>}/>

                                <Route element={<PrivateRoute/>}>
                                    <Route path='/' element={<Home/>}/>
                                    <Route path='/watchlist' element={<WatchList/>}/>
                                    <Route path='/news' element={<News/>}/>
                                    <Route path='/settings' element={<Settings/>}/>
                                </Route>
                            </Route>

                        </Routes>
                    </div>
            </ThemeProvider>
        </ColorModeContext.Provider>

    );
}

export default App;
