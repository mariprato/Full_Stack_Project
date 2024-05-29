import { configureStore } from '@reduxjs/toolkit';
import submissionFormReducer from './reducers/submissionFormReducer';

const store = configureStore({
  reducer: {
    submissionForm: submissionFormReducer,
  },
});

export default store;
