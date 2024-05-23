import React, { useState } from "react";
import './SubmissionForm.css';
import ButtonComponent from "../ButtonComponent";
import Layout from "../layout/Layout.js";

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

  const [confirmationMessage, setConfirmationMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    console.log(`Changed field: ${name}, Value: ${value}, Files: ${files}`);
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: files ? files[0] : value,
    }));

    // Additional validation to mark fields as touched
    if (value.trim() === "") {
      e.target.classList.add("touched");
    } else {
      e.target.classList.remove("touched");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with data:", formData);
    
    // Check if any field is empty
    const emptyFields = Object.values(formData).some((val) => val === "");
    if (emptyFields) {
      alert("Please fill in all fields.");
      return;
    }

    // Retrieve existing posts from local storage or initialize an empty array
    const savedPosts = JSON.parse(localStorage.getItem("lostPets")) || [];
    console.log("Retrieved saved posts from local storage:", savedPosts);

    // Add the current form data to the array of saved posts
    savedPosts.push(formData);
    console.log("Updated saved posts array:", savedPosts);

    // Save the updated posts array back to local storage
    localStorage.setItem("lostPets", JSON.stringify(savedPosts));
    console.log("Post saved to local storage");

    setConfirmationMessage(`We have received the information of ${formData.petName} and will be letting you know as soon as the post is up on our Lost Pets page.`);
    
    // Reset form data
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
          <h1>Post Your Lost Pet Now</h1>
          {confirmationMessage && (
            <div className="confirmation-message">
              {confirmationMessage}
            </div>
          )}
          <form className="submission-form" onSubmit={handleSubmit}>
            <div className="form-group image-upload">
              <label>
                <span>Browse</span>
                <input
                  type="file"
                  name="image"
                  accept="image/*"
                  onChange={handleChange}
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
                max={new Date().toISOString().split('T')[0]} // Set max attribute to current date
                className={formData.dateLost.trim() === "" ? "touched" : ""}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
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
          <div className="contact-info">
            <div className="contact-item">
              <i className="fa fa-phone"></i> (000) 000 000
            </div>
            <div className="contact-item">
              <i className="fa fa-envelope"></i> info@fur-everfound.com
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default SubmissionForm;
