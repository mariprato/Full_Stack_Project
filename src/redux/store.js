import { configureStore } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';
import submissionFormReducer from './reducers/submissionFormReducer';
import imageVerificationReducer from './reducers/imageVerificationSlice';
import locationReducer from './reducers/locationReducer'; // Import the new location reducer

const store = configureStore({
  reducer: {
    submissionForm: submissionFormReducer,
    imageVerification: imageVerificationReducer,
    location: locationReducer, // Include the new location reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk), // Use a callback function
});

export default store;
