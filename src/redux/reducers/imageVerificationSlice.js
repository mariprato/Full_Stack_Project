import { createSlice } from '@reduxjs/toolkit';

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
