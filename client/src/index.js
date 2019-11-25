import React from 'react';
import {render} from "react-dom";
import './index.css';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';
import {INITIAL_STATE} from "./store/constants";
import rootReducer from './store/reducers/index'


import thunk from "redux-thunk";
import {applyMiddleware,createStore} from "redux";
import {Provider} from "react-redux";


const cities = localStorage['training'] ? JSON.parse(localStorage['training'])['cities']:[];
const state ={
    ...INITIAL_STATE,
    weatherList:{
        ...INITIAL_STATE.weatherList,
        cities,

    }
};
const store  = createStore(rootReducer,state,applyMiddleware(thunk));
render(
        <Provider store ={store}>
            <App/>
        </Provider>,
    document.getElementById("root")

);

store.subscribe(() =>{
    localStorage.setItem('training',JSON.stringify({
        'cities':store.getState().weatherList.cities.map(city =>({id:city.id,name:city.name})),

    }));
});