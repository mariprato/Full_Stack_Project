import { combineReducers } from 'redux';
import submissionFormReducer from './submissionFormReducer';
import imageVerificationSlice from './imageVerificationSlice';

const rootReducer = combineReducers({
  submissionForm: submissionFormReducer,
  imageVerification: imageVerificationSlice,
});

export default rootReducer;
