export const submitFormData = (formData) => {
    return {
      type: SUBMIT_FORM_DATA,
      payload: formData,
    };
  };