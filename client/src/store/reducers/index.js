import currentCityReducer from "./currentCityReducer";
import weatherReducer from "./weatherReducer";
import {combineReducers} from "redux";

export const getCities = state => state.weatherList.cities;
export const getError = state => state.weatherList.error;
export const getIsFetching = state => state.weatherList.isFetching;
export const getNewCity = state => state.weatherList.newCity;
export const getCurrentCity = state => state.currentCity;
export const getCityToDelete = state => state.weatherList.cityToDelete;
export default combineReducers({
    weatherList: weatherReducer,
    currentCiy: currentCityReducer
})