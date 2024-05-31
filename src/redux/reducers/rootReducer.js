import { combineReducers } from 'redux';
import submissionFormReducer from './submissionFormReducer';
import imageVerificationSlice from './imageVerificationSlice';
import locationReducer from './locationReducer';

const rootReducer = combineReducers({
  submissionForm: submissionFormReducer,
  imageVerification: imageVerificationSlice,
  location: locationReducer,
});

export default rootReducer;
