import { setImageVerified, setImageVerificationError } from '../reducers/imageVerificationSlice';

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