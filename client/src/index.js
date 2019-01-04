import React from 'react';
import { render } from "react-dom"

import "./assets/styles.css"

import App from './App';
import { BrowserRouter } from "react-router-dom";
import Favorites from "./Favorites"

render(
    <BrowserRouter>
        <Favorites>
            <App />
        </Favorites>
    </BrowserRouter>,
    document.getElementById("root")
)