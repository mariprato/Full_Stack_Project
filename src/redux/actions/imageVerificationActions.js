import { setImageVerified, setImageVerificationError } from '../reducers/imageVerificationSlice';

// This code verifies if an uploaded image is square and dispatches actions to update the verification state or handle errors.


export const verifyImage = (image) => async (dispatch) => {
  try {
    if (image) {
      const img = new Image();
      img.onload = () => {
        const imageVerified = img.width === img.height;
        if (!imageVerified) {
          dispatch(setImageVerificationError("The provided image does not meet our specifications. Please select a square image."));
        } else {
          dispatch(setImageVerified(true));
          dispatch(setImageVerificationError(""));
        }
      };
      img.src = URL.createObjectURL(image);
    } else {
      dispatch(setImageVerified(false));
    }
  } catch (error) {
    console.error("Error verifying image:", error);
    dispatch(setImageVerificationError("An error occurred while verifying the image."));
  }
};