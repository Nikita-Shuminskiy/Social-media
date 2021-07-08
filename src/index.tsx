import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import { store } from './Redux/store'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { StateType} from './Redux/store';

let renderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App dispatch={store.dispatch.bind(store)} store={store} state={state}/>
        </BrowserRouter>, document.getElementById('root')
    );
}
renderEntireTree(store.getState())
store.subscribe ( () => { // ошибка
    let state = store.getState()
    renderEntireTree(state)
})
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

