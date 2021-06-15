import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import {addPost} from "./Redux/state";


export let renderEntire = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={addPost}/>
        </React.StrictMode>,
        document.getElementById('root')
    );

}