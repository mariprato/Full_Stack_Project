import { configureStore } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk'; // Import redux-thunk middleware
import rootReducer from './reducers/rootReducer'; // Import your root reducer

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;