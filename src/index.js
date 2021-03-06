import React from 'react';
import ReactDOM from 'react-dom';
import App from './route/Index';
import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware, compose} from "redux";
import {Provider} from 'react-redux';
import thunk from "redux-thunk";
import reducers from './redux/reduces/index';

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root'));


serviceWorker.unregister();
