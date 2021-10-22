import ReactDOM from 'react-dom';
import React from 'react';
import reportWebVitals from './reportWebVitals';
import { AppContainer } from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Redux/Redux_Store';


ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>, document.getElementById('root')
);

reportWebVitals();

