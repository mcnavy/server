import * as constant from '../constants'
import {FWE} from "../constants";



const weatherReducer = (state = constant.INITIAL_STATE.weatherList, action = {}) => {
    let changedCities = [];

    if (action.id === 0) {
        return state;
    }

    switch (action.type) {
        case constant.FWP:
            changedCities = state.cities.map(city =>
                city.id === action.id ? {...city, pending: true} : city
            );
            return {
                ...state,
                cities: changedCities
            };

        case constant.FWS:
            changedCities = state.cities.map(city =>
                city.id === action.id ? {...city, pending: false, weather: action.weather} : city
            );
            return {
                ...state,
                cities: changedCities
            };

        case constant.FWE:
            changedCities = state.cities.map(city =>
                city.id === action.id ? {...city, pending: false, error: action.error} : city
            );
            return {
                ...state,
                cities: changedCities
            };

        case constant.FCP:

            return {
                ...state,
                isFetching: true,
            };

        case constant.FCS:
            return{
                ...state,
                cities: action.cities,
                isFetching: false
            };
        case constant.FCE:
            return{
                ...state,
                isFetching: true,
                error : action.error
            };
        case constant.ACP:
            return{
                ...state,
                newCity : action.name
            };
        case constant.ACS:
            changedCities = [...state.cities, action.city];
            return {
                ...state,
                error: null,
                cities : changedCities,
                newCity: null
            };
        case constant.ACE:
            return {
                ...state,
                error: action.error
            };
        case constant.DCP:
            return{
                ...state,
                cityToDelete: action.id
            };
        case constant.DCS:
            changedCities = state.cities.filter(city => city.id !== action.id);
            return {
                ...state,
                cities:changedCities,
                error:null,
                cityToDelete: null
            };

        default:
            return state;
    }
};






export default weatherReducer;