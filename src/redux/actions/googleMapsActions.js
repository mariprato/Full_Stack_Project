import loadGoogleMapsAPI from '../../utils/loadGoogleMapsAPI';
import GoogleMapsService from '../../services/googleMapsService';
import {GOOGLE_MAPS_API_KEY} from '../../config/config';

const googleMapsService = new GoogleMapsService();

export const SET_LOCATION = 'SET_LOCATION';
export const SET_LOCATION_ERROR = 'SET_LOCATION_ERROR';

export const setLocation = (location) => ({
  type: SET_LOCATION,
  payload: location,
});

export const setLocationError = (error) => ({
  type: SET_LOCATION_ERROR,
  payload: error,
});

export const initializeAutocomplete = (inputRef) => {
  return async (dispatch) => {
    try {
      await loadGoogleMapsAPI(GOOGLE_MAPS_API_KEY);
      googleMapsService.initAutocompleteService();
      googleMapsService.initializeAutocomplete(inputRef, (address, error) => {
        if (error) {
          dispatch(setLocationError(error.message));
        } else {
          dispatch(setLocation(address));
        }
      });
    } catch (error) {
      dispatch(setLocationError(error.message));
    }
  };
};
