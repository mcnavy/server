import * as constant from '../constants'
const currentCityReducer = (state = constant.INITIAL_STATE.currentCity, action = {}) => {
    if (action.id !== 0) {
        return state;
    }

    switch (action.type) {
        case constant.FWP:
            return {
                ...state,
                pending: true
            };

        case constant.FWS:
            return {
                ...state,
                pending: false,
                weather: action.weather
            };

        case constant.FWE:
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