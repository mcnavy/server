import * as constant from "./constants";

export const fetchCitiesPending = () =>({
    type : constant.FCP

});
export const fetchCitiesSuccess = (cities) => ({
    type : constant.FCS,
    cities
});
export const fetchCitiesError = (error) =>({
    type: constant.FCE,
    error
});

export const addCityPending = (name) => ({
    type: constant.ACP,
    name
});

export const addCitySuccess = (city) => ({
    type: constant.ACS,
    city
});

export const addCityError = (error) =>({
    type: constant.ACE,
    error
});

export const deleteCityPending = (id) =>({
    type: constant.DCP,
    id
});
export const deleteCitySuccess = (id) => ({
    type: constant.DCS,
    id
});
export const deleteCityError = (error) => ({
    type : constant.DCE,
    error
});

export const fetchWeatherPending = (id) => ({
    type: constant.FWP,
    id
});

export const fetchWeatherSuccess = (weather, id) => ({
    type: constant.FWS,
    id,
    weather
});

export const fetchWeatherError = (error, id) => ({
    type: constant.FWE,
    id,
    error
});
