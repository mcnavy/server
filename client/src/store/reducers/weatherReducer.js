import {ADD_CITY, DELETE_CITY, INITIAL_STATE, PENDINGW,SUCCESSW,ERRORW} from "../constants";


const weatherReducer = (state = INITIAL_STATE.weatherList, action = {}) => {
    let changedCities = [];

    if (action.id === 0) {
        return state;
    }

    switch (action.type) {
        case PENDINGW:
            changedCities = state.cities.map(city =>
                city.id === action.id ? {...city, pending: true} : city
            );
            return {
                ...state,
                cities: changedCities
            };

        case SUCCESSW:
            changedCities = state.cities.map(city =>
                city.id === action.id ? {...city, pending: false, weather: action.weather} : city
            );
            return {
                ...state,
                cities: changedCities
            };

        case ERRORW:
            changedCities = state.cities.map(city =>
                city.id === action.id ? {...city, pending: false, error: action.error} : city
            );
            return {
                ...state,
                cities: changedCities
            };

        case ADD_CITY:

            changedCities = [
                ...state.cities,
                {
                    id: state.cities ? state.cities.length+1 : 1,
                    name: action.name
                }
            ];
            return {
                ...state,

                cities: changedCities
            };

        case DELETE_CITY:
            changedCities = state.cities.filter(city => city.id !== action.id);
            return {
                ...state,
                cities: changedCities
            };

        default:
            return state;
    }
};






export default weatherReducer;