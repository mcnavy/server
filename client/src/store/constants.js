export const FWP = 'FWP';
export const FWS = 'FWS';
export const FWE = 'FWE';
export const FCP = 'FCP';
export const FCS = 'FCS';
export const FCE = 'FCE';
export const ACP = 'ACP';
export const ACS = 'ACS';
export const ACE = 'ACE';
export const DCP = 'DCP';
export const DCS = 'DCS';
export const DCE = 'DCE';
export const BE = 'http://localhost:3001/';
export const INITIAL_STATE = {

    weatherList:{
        cities:[],
        error : null,
        isFetching: false,
        newCity : null,
        cityToDelete:null

    },
    currentCity:{
        id:0
    }

};
export const DEFAULT_COORDS = {
    'longitude':40.62,
    'latitude':68.75
};