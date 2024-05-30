import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  formData: {
    image: null,
    imagePreview: null,
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
    setImage: (state, action) => {
        state.formData.image = action.payload.file;
        state.formData.imagePreview = action.payload.preview;
      },
  },
});

export const { submitForm, storeLocally, setImage } = submissionFormSlice.actions;

export default submissionFormSlice.reducer;