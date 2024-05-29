import React, { useEffect, useRef } from "react";
import './SubmissionForm.css';
import ButtonComponent from "../../generic/ButtonComponent.js";
import { useDispatch, useSelector } from 'react-redux';
import { submitForm, storeLocally, confirmReceived } from '../../../redux/reducers/submissionFormReducer.js';
import { verifyImage } from '../../../redux/actions/imageVerificationActions.js';

const SubmissionForm = () => {
  const formData = useSelector((state) => state.submissionForm.formData);
  const imageVerified = useSelector((state) => state.imageVerification.imageVerified); 
  const errorMessage = useSelector((state) => state.imageVerification.errorMessage);
  const confirmationMessage = useSelector((state) => state.submissionForm.confirmationMessage);
  const dispatch = useDispatch();
  const locationInputRef = useRef(null);

  useEffect(() => {
    if (window.google) {
      const autocomplete = new window.google.maps.places.Autocomplete(locationInputRef.current, {
        types: ["address"],
      });
      autocomplete.addListener("place_changed", () => {
        const place = autocomplete.getPlace();
        if (place && place.formatted_address) {
          dispatch(submitForm({
            ...formData,
            locationLost: place.formatted_address,
          }));
        }
      });
    }
  }, [dispatch, formData]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    dispatch(submitForm({
      ...formData,
      [name]: files ? files[0] : value,
    }));
    if (name === 'image' && files && files[0]) {
      dispatch(verifyImage(files[0])); // Verify the selected image
    }
  };

  const handleImageRemove = () => {
    document.getElementById('fileInput').value = "";
    dispatch(submitForm({
      ...formData,
      image: null,
    }));
    dispatch(verifyImage(null)); // Verify the image removal
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emptyFields = Object.values(formData).some((val) => val === "");
    if (emptyFields) {
      alert("Please fill in all fields, including uploading a photo.");
      return;
    }

    if (!imageVerified) {
      alert("Please upload a valid image.");
      return;
    }  

    const savedPosts = JSON.parse(localStorage.getItem("lostPets")) || [];
    savedPosts.push(formData);
    localStorage.setItem("lostPets", JSON.stringify(savedPosts));

    dispatch(storeLocally(formData));
    dispatch(confirmReceived(formData));
    dispatch(submitForm({
      image: null,
      name: "",
      email: "",
      petName: "",
      dateLost: "",
      locationLost: "",
      additionalDetails: "",
    }));
  };

  return (
    <>
      <div className="submission-form-container">
        <h1>Post Your Lost Pet</h1>
        <p>Please fill in the details below, and a member of the Fur-Ever Found team will review and post your information on our lost pets page to help reunite you with your pet.</p>
        {confirmationMessage && (
          <div className="confirmation-message">
            {confirmationMessage}
          </div>
        )}
        
        <form className="submission-form" onSubmit={handleSubmit} noValidate>
          {/* Image upload */}
          <div className="form-group">
            <div className="image-upload-header">
              <h3>Upload your image</h3>
              <p>Please upload a recent picture of your pet for us to share</p>
            </div>
            <label htmlFor="fileInput" className="image-upload">
              {formData.image ? (
                <div className="uploaded-image">
                  {formData.image.name}
                  <button type="button" onClick={handleImageRemove}>X</button>
                </div>
              ) : (
                <span>Browse</span>
              )}
              <input
                id="fileInput"
                type="file"
                name="image"
                accept="image/*"
                onChange={handleChange}
                style={{ display: 'none' }}
                required
              />
            </label>
            {!imageVerified && (
              <div className="error-message">
                {errorMessage}
              </div>
            )}
          </div>

          {/* Other input fields */}
          <div className="form-group">
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className={formData.name.trim() === "" ? "touched" : ""}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              placeholder="Your Email Address"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={formData.email.trim() === "" ? "touched" : ""}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Pet's Name"
              name="petName"
              value={formData.petName}
              onChange={handleChange}
              required
              className={formData.petName.trim() === "" ? "touched" : ""}
            />
          </div>
          <div className="form-group">
            <input
              type="date"
              placeholder="Date Lost"
              name="dateLost"
              value={formData.dateLost}
              onChange={handleChange}
              required
              max={new Date().toISOString().split('T')[0]}
              className={formData.dateLost.trim() === "" ? "touched" : ""}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              ref={locationInputRef}
              placeholder="Location Lost"
              name="locationLost"
              value={formData.locationLost}
              onChange={handleChange}
              required
              className={formData.locationLost.trim() === "" ? "touched" : ""}
            />
          </div>
          <div className="form-group">
            <textarea
              placeholder="Additional Details"
              name="additionalDetails"
              rows="4"
              value={formData.additionalDetails}
              onChange={handleChange}
              required
              className={formData.additionalDetails.trim() === "" ? "touched" : ""}
            ></textarea>
          </div>
          
          {/* Submit button */}
          <div className="form-group">
            <ButtonComponent type="submit" variant="button-form-submit">Submit</ButtonComponent>
          </div>
        </form>
        <p className="disclaimer">*By pressing submit you accept our <a href="#">terms and conditions</a>.</p>
      </div>
    </>
  );
};

export default SubmissionForm;
