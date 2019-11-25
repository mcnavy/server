import currentCityReducer from "./currentCityReducer";
import weatherReducer from "./weatherReducer";
import {combineReducers} from "redux";

export const getCities = state => state.weatherList.cities;

export const getCurrentCity = state => state.current;
export default combineReducers({
    weatherList: weatherReducer,
    current: currentCityReducer
})