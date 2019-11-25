import {INITIAL_STATE, PENDINGW,SUCCESSW,ERRORW} from "../constants";
const currentCityReducer = (state = INITIAL_STATE.current, action = {}) => {
    if (action.id !== 0) {
        return state;
    }

    switch (action.type) {
        case PENDINGW:
            return {
                ...state,
                pending: true
            };

        case SUCCESSW:
            return {
                ...state,
                pending: false,
                weather: action.weather
            };

        case ERRORW:
            return {
                ...state,
                pending: false,
                error: action.error
            };

        default:
            return state;
    }
};
export default currentCityReducer;