import {ADD_CITY,DELETE_CITY,PENDINGW,SUCCESSW,ERRORW} from "./constants";

export const addCity = (name) =>({
    type: ADD_CITY,
    name
});
export const deleteCity = (id) =>({
    type : DELETE_CITY,
    id
});
export const pending = (id) =>({
    type:PENDINGW,
    id
});
export const success = (weather,id) =>({
    type:SUCCESSW,
    id,
    weather
});
export const errorW = (error,id) => ({
    type:ERRORW,
    id,
    error

});