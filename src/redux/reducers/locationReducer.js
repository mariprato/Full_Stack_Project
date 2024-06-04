import { SET_LOCATION, SET_LOCATION_ERROR } from '../actions/googleMapsActions';

// This code defines a Redux reducer to manage the state of a location, handling actions to set the location or report an error.


const initialState = {
  location: '',
  error: null,
};

const locationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOCATION:
      return {
        ...state,
        location: action.payload,
        error: null,
      };
    case SET_LOCATION_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default locationReducer;
