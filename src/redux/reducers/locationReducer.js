import { SET_LOCATION, SET_LOCATION_ERROR } from '../actions/googleMapsActions';

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
