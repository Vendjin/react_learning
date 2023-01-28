import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from "./App";

import {Button} from "./App";
import styled from "styled-components";

const BigButton = styled(Button)`
  margin: 0 auto;
  width: 245px;
  cursor: pointer;
`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <App/>
        <Button/>
        <BigButton as='a'>Унаследовали кнопку, и переделали ее в сслыку</BigButton>
    </>
);

reportWebVitals();
