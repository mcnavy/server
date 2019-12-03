import React from 'react';
import Weather from './Weather'
import "../App/App.css"
import * as actions from "../../store/actions";
import {connect} from 'react-redux';
import axios from "axios"
import {getCities,getCityToDelete,getNewCity,getError,getIsFetching} from "../../store/reducers/index.js";
import {BE} from "../../store/constants";
import {fetchWeatherError} from "../../store/actions";

const getWeatherByName = (id,cityName) => {
    return dispatch =>{
        dispatch(actions.fetchWeatherPending(id));
        axios
            .get(`${BE}weather?city=${cityName}`)

            .then(response =>{
                dispatch(actions.fetchWeatherSuccess(response.data,id));
            })
            .catch(error =>{
                dispatch(fetchWeatherError(error,id));
            });
    }
};
const deleteCityAction = id =>{
    return dispatch =>{
        dispatch(actions.deleteCityPending(id));
        axios
            .delete(`${BE}favourites/${id}`)
            .then(response =>{
                dispatch(actions.deleteCitySuccess(id));
            })
            .catch(error =>{
                dispatch(actions.deleteCityError(error));
            });
    };
};
const fetchCitiesAction = () => {
    return dispatch =>{
        dispatch(actions.fetchCitiesPending());
        axios
            .get(`${BE}favourites`)
            .then(response =>{
                const cities = response.data.map(city => ({ name: city.name,id:city._id}));
                dispatch(actions.fetchCitiesSuccess(cities));
            })
            .catch(error =>{
                dispatch(actions.fetchCitiesError(error));
            });
    };
};

const mapStateToProps =(state) =>({
    cities:getCities(state),
    error:getError(state),
    isFetching: getIsFetching(state),
    newCity: getNewCity(state),
    cityToDelete: getCityToDelete(state)

});
const mapDispatchToProps = (dispatch) => ({
    weatherByName:(id,name) =>dispatch(getWeatherByName(id,name)),

    deleteCity: id=> dispatch(deleteCityAction(id)),
    fetchCities: () => dispatch(fetchCitiesAction())
});
class FavoriteWeather extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount() {
        this.props.fetchCities();
    }


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