import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "./pages/home/home";
import PrivateRoute from "./utils/router/privateRoute";
import AuthRootComponent from "./pages/auth/auth";
import {ColorModeContext, useMode} from "./theme/theme";
import {ThemeProvider, CssBaseline} from "@mui/material";
import Layout from "./components/layout/layout";
import WatchList from "./pages/watchList/watchList";
import News from "./pages/news/news";
import Settings from "./pages/settings/settings";
import SingleAssetPage from "./pages/singleAsset/singleAssetPage";

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
                                    <Route path='/single/:id' element={<SingleAssetPage/>}/>
                                </Route>
                            </Route>

                        </Routes>
                    </div>
            </ThemeProvider>
        </ColorModeContext.Provider>

    );
}

export default App;
