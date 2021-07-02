import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import store from './Redux/store'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

let renderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App store={store}/>
        </BrowserRouter>, document.getElementById('root')
    );
}
renderEntireTree()
store._subscribe(renderEntireTree)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

