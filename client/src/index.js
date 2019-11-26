import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import {AppC} from './components/App/App';

import {INITIAL_STATE} from "./store/constants";
import rootReducer from './store/reducers/index'


import thunk from "redux-thunk";
import {applyMiddleware,createStore} from "redux";
import {Provider} from "react-redux";

const store = createStore(rootReducer,INITIAL_STATE,applyMiddleware(thunk))
ReactDOM.render(
        <Provider store ={store}>
            <AppC/>
        </Provider>,
    document.getElementById("root")

);
