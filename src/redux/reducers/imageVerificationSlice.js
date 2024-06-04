import { createSlice } from '@reduxjs/toolkit';

// This code creates a Redux slice for managing image verification state, with actions to set the verification status and error messages.


const initialState = {
  imageVerified: false,
  errorMessage: "",
};

export const imageVerificationSlice = createSlice({
  name: 'imageVerification',
  initialState,
  reducers: {
    setImageVerified: (state, action) => {
      state.imageVerified = action.payload;
    },
    setImageVerificationError: (state, action) => {
      state.errorMessage = action.payload;
    },
  },
});

export const { setImageVerified, setImageVerificationError } = imageVerificationSlice.actions;

export default imageVerificationSlice.reducer;