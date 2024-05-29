import React, { useState, useEffect, useRef } from "react";
import './SubmissionForm.css';
import ButtonComponent from "../components/generic/button/ButtonComponent.js";
import Layout from "../components/layout/layout/Layout.js";
import ButtonComponent from "../components/generic/ButtonComponent";
import Layout from "../components/layout/Layout.js";
import Modal from "../components/generic/Modal.js";

const SubmissionForm = () => {
  const [formData, setFormData] = useState({
    image: null,
    name: "",
    email: "",
    petName: "",
    dateLost: "",
    locationLost: "",
    additionalDetails: "",
  });

  // const [confirmationMessage, setConfirmationMessage] = useState("");
  const locationInputRef = useRef(null);

  useEffect(() => {
    if (window.google) {
      const autocomplete = new window.google.maps.places.Autocomplete(locationInputRef.current, {
        types: ["address"],
      });
      autocomplete.addListener("place_changed", () => {
        const place = autocomplete.getPlace();
        if (place && place.formatted_address) {
          setFormData((prevFormData) => ({
            ...prevFormData,
            locationLost: place.formatted_address,
          }));
        }
      });
    }
  }, []);
  const [showModal, setShowModal] = useState(false);

  

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: files ? files[0] : value,
    }));

    if (value.trim() === "") {
      e.target.classList.add("touched");
    } else {
      e.target.classList.remove("touched");
    }
  };

  const handleImageRemove = () => {
    document.getElementById('fileInput').value = "";
    setFormData((prevFormData) => ({
      ...prevFormData,
      image: null,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emptyFields = Object.values(formData).some((val) => val === "");
    if (emptyFields || !formData.image) {
      alert("Please fill in all fields, including uploading a photo.");
      return;
    }

    const savedPosts = JSON.parse(localStorage.getItem("lostPets")) || [];
    console.log("Retrieved saved posts from local storage:", savedPosts);

    savedPosts.push(formData);
    console.log("Updated saved posts array:", savedPosts);

    localStorage.setItem("lostPets", JSON.stringify(savedPosts));
    console.log("Post saved to local storage");

    setShowModal(true);

    
    
    setFormData({
      image: null,
      name: "",
      email: "",
      petName: "",
      dateLost: "",
      locationLost: "",
      additionalDetails: "",
    });
  };

  return (
    <>
      <Layout>
        <div className="submission-form-container">
          <h1>Post Your Lost Pet</h1>
          <p>Please fill in the details below, and a member of the Fur-Ever Found team will review and post your information on our lost pets page to help reunite you with your pet.</p>
        
          
          <form className="submission-form" onSubmit={handleSubmit} noValidate>
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
          <p className="disclaimer">*By pressing submit you accept our <a href="#">terms and conditions</a>.</p>
        </div>
      </Layout>
      <Modal show={showModal} onClose={() => setShowModal(false)} />
    </>
  );
};

export default SubmissionForm;
