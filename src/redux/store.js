import { configureStore } from '@reduxjs/toolkit';
import submissionFormReducer from './reducers/submissionFormReducer';
import imageVerificationReducer from './reducers/imageVerificationSlice';

const store = configureStore({
  reducer: {
    submissionForm: submissionFormReducer,
    imageVerification: imageVerificationReducer,
  },
});

export default store;
