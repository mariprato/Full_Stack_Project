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
    confirmationMessage: "",
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
    confirmReceived: (state, action) => {
        const { petName } = action.payload;
        state.confirmationMessage = `We have received the information about ${petName} and will let you know as soon as the post is up on our Lost Pets page.`;
    },
  },
});

export const { submitForm, storeLocally, confirmReceived } = submissionFormSlice.actions;

export default submissionFormSlice.reducer;
