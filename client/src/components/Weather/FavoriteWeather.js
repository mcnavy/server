import React from 'react';
import Weather from './Weather'
import "../App/App.css"
import {pending,errorW,success,deleteCity} from "../../store/actions";
import {connect} from 'react-redux';
import axios from "axios"
import {getCities} from "../../store/reducers/index.js";
export const getWeatherByName = (id,cityName) => {
    return dispatch =>{
        dispatch(pending(id));
        axios
            .get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&APPID=96c2fc4713551153e7966978b449861a`)
            .then(response =>{
                dispatch(success(response.data,id));
            })
            .catch(error =>{
                dispatch(errorW(error,id));
            });
    }
};
const mapStateToProps =(state) =>({
    cities:getCities(state),


});
const mapDispatchToProps = (dispatch) => ({
    weatherByName:(id,name) =>dispatch(getWeatherByName(id,name)),

    deleteCity: id=> dispatch(deleteCity(id))
});
class FavoriteWeather extends React.Component{
    render(){
        return(
            <div className="Weather2">
                {this.props.cities.map(city =>(
                    <Weather key ={city.id} data ={city} findWeatherApiCall ={() => this.props.weatherByName(city.id,city.name)} deleteCity={() =>this.props.deleteCity(city.id)}/>
                 ))}
            </div>
        )
    }
}
const FavoriteWeatherList = connect(mapStateToProps,mapDispatchToProps)(FavoriteWeather);
export default FavoriteWeatherList;