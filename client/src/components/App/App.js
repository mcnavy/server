import './App.css'
import '../Weather/Weather.css'
import '../City/AddCity.css'
import React from 'react';
import axios from 'axios';
import {
    fetchWeatherError,fetchWeatherPending,fetchWeatherSuccess
} from "../../store/actions";
import {connect} from 'react-redux';
import AddCityForm from "../City/AddCity";
import {BE, DEFAULT_COORDS} from "../../store/constants";
import {getCurrentCity} from "../../store/reducers";
import Weather from "../Weather/Weather";
import FavoriteWeatherList from "../Weather/FavoriteWeather";

const findWeatherApiCall = (dispatch,coords,id) =>{
    axios
        .get(
            `${BE}weather/coordinates?lat=${coords.latitude}&long=${coords.longitude}`
        )
        .then(response =>{
            dispatch(fetchWeatherSuccess(response.data,id));
        })
        .catch(error =>{
           dispatch(fetchWeatherError(error,id));
        });
};
export const findWeather = () =>{
    return dispatch =>{
        const id = 0;
        const options = {
            enableHighAccuracy:true,
            timeout:300
        };
        dispatch(fetchWeatherPending(id));

            navigator.geolocation.getCurrentPosition(position => {
                findWeatherApiCall(dispatch,position.coords,id);
            },err=>{
                findWeatherApiCall(dispatch,DEFAULT_COORDS,id);

            },options);


    }
};

class App extends React.Component {


    render() {
        return (
            <div>`
                <div className="App">
                    <div className="weatherHere">
                        <h2>Weather here</h2>
                        <button onClick={() => this.props.getWeather()}>Update geolocation</button>
                    </div>
                    <Weather key ={0} data ={this.props.current} findWeatherApiCall ={() =>this.props.getWeather()}/>
                    <div className="favorites">
                        <h2>Favorites</h2>
                        <AddCityForm/>
                    </div>
                    <FavoriteWeatherList/>

                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    currentCity: getCurrentCity(state)
});
const mapDispatchToProps = dispatch => ({
    getWeather : () => dispatch(findWeather())
});


const AppC =  connect(mapStateToProps, mapDispatchToProps)(App);

export {AppC, App};