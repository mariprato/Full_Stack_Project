import React, { useState, useEffect, useRef } from "react";
import './SubmissionForm.css';
import ButtonComponent from "../../generic/button/ButtonComponent.js";
import Modal from "../../cards/Modal/Modal.js";
import { useDispatch, useSelector } from 'react-redux';
import { submitForm, storeLocally, setImage } from '../../../redux/reducers/submissionFormReducer.js';
import { verifyImage } from '../../../redux/actions/imageVerificationActions.js';
import { initializeAutocomplete } from '../../../redux/actions/googleMapsActions.js';

const SubmissionForm = () => {
  const formData = useSelector((state) => state.submissionForm.formData);
  const imageVerified = useSelector((state) => state.imageVerification.imageVerified); 
  const errorMessage = useSelector((state) => state.imageVerification.errorMessage);
  const locationError = useSelector((state) => state.location.error);
  const dispatch = useDispatch();
  const location = useSelector((state) => state.location.location);
  const locationInputRef = useRef(null);

  useEffect(() => {
    dispatch(initializeAutocomplete(locationInputRef));
  }, [dispatch]);

  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image' && files && files[0]) {
      const file = files[0];
      const preview = URL.createObjectURL(file);
      dispatch(setImage({ preview }));
      dispatch(verifyImage(file));
    } else {
      dispatch(submitForm({
        ...formData,
        [name]: value,
      }));
    }
  };

  const handleImageRemove = () => {
    document.getElementById('fileInput').value = "";
    dispatch(setImage({ file: null, preview: null }));
    dispatch(verifyImage(null));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emptyFields = Object.values(formData).some((val) => val === "");
    if (emptyFields || !formData.imagePreview) {
      alert("Please fill in all fields, including uploading a photo.");
      return;
    }

    if (!imageVerified) {
      alert("Please upload a valid image.");
      return;
    }

    const savedPosts = JSON.parse(localStorage.getItem("lostPets")) || [];
    console.log("Retrieved saved posts from local storage:", savedPosts);

    savedPosts.push(formData);
    console.log("Updated saved posts array:", savedPosts);

    localStorage.setItem("lostPets", JSON.stringify(savedPosts));
    console.log("Post saved to local storage");

    setShowModal(true);

    dispatch(storeLocally(formData));
    dispatch(submitForm({
      image: null,
      imagePreview: null,
      name: "",
      email: "",
      petName: "",
      dateLost: "",
      locationLost: "",
      additionalDetails: "",
    }));
  };

  useEffect(() => {
    if (location) {
      dispatch(submitForm({
        ...formData,
        locationLost: location,
      }));
    }
  }, [location, dispatch]);

  return (
    <>
      <div className="submission-form-container">
        <h1>Post Your Lost Pet</h1>
        <p>Please fill in the details below, and a member of the Fur-Ever Found team will review and post your information on our lost pets page to help reunite you with your pet.</p>
        
        <form className="submission-form" onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <div className="image-upload-header">
              <h3>Upload your image</h3>
              <p>Please upload a recent picture in a square format of your pet for us to share</p>
            </div>
            <label htmlFor="fileInput" className="image-upload">
              {formData.imagePreview ? (
                <div className="uploaded-image">
                  <img src={formData.imagePreview} alt={formData.image ? formData.image.name : "Uploaded preview"} />
                  {formData.image && (
                    <div className="image-name">{formData.image.name}</div>
                  )}
                  <ButtonComponent type="button" onClick={handleImageRemove}>X</ButtonComponent>
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
            {locationError && <div className="error-message">{locationError}</div>}
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
          <div className="form-group">
            <ButtonComponent type="submit" variant="button-form-submit">Submit</ButtonComponent>
          </div>
        </form>
        <p className="disclaimer">*By pressing submit you accept our <a href="#" onClick={(e) => e.preventDefault()}>terms and conditions</a>.</p>
      </div>
      <Modal show={showModal} onClose={() => setShowModal(false)} />
    </>
  );
};

export default SubmissionForm;
