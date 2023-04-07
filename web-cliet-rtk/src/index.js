import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/app/App';
import {BrowserRouter} from "react-router-dom";
import {createTheme} from './theme/index';
import {ThemeProvider} from "@mui/material";
import {Provider} from "react-redux";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ThemeProvider theme={createTheme()}>
            <Provider store={store}>
                <BrowserRouter>
                    <App/>
                </BrowserRouter>
            </Provider>

        </ThemeProvider>


    </React.StrictMode>
);

