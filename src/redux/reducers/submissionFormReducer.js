import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  formData: {
    image: null,
    name: "",
    email: "",
    petName: "",
    dateLost: "",
    locationLost: "",
    additionalDetails: "",
  },
};

export const submissionFormSlice = createSlice({
  name: 'submissionForm',
  initialState,
  reducers: {
    submitForm: (state, action) => {
      state.formData = action.payload;
    },
    storeLocally: (state, action) => {
      state.formData = action.payload;
    },
  },
});

export const { submitForm, storeLocally } = submissionFormSlice.actions;

export default submissionFormSlice.reducer;