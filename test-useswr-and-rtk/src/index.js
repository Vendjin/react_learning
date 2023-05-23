import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Weather} from './App';
import reportWebVitals from './reportWebVitals';

import {Provider} from "react-redux";

import {configureStore} from "@reduxjs/toolkit";
import {weatherSlice} from "./slice";

const store = configureStore({
    reducer: {
        weather: weatherSlice.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== 'production',
});
export default store;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Provider store={store}>
          <Weather />
      </Provider>

  </React.StrictMode>
);
reportWebVitals();
