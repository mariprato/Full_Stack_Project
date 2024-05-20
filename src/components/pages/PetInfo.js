import React from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../layout/navbar";
import "./PetInfo.css";
import pets from "../../petDatabase";
import FooterCom from "../layout/footer";


const PetInfo = () => {
  const { id } = useParams()
  const idAsInteger = parseInt(id)
  let pet = pets.find(pet => pet.id === idAsInteger)

  return (
    <>
      <Navbar />
      <div className="pet-info-layout">
        <h1>Details</h1>
        <div className="pet-info-container">
            <div className = "pet-info-image-container">
                  <div className="pet-info-background-image">
                      <img className="pet-info-image" src={`../images/${pet.id}.jpg`}></img>
                  </div>
                  <div className="pet-info-foreground-image">
                      <img className = "pet-info-image" src={`../images/${pet.id}.jpg`} alt = {`Image of ${pet.name} the lost ${pet.type}.`}></img>
                  </div>
            </div>
          <div className = "pet-info-details-container">
            <p><span className="pet-info-details-keys">Pet's name: </span><span className="pet-info-details-values">{pet.name}</span></p>
            <p><span className="pet-info-details-keys">Type of animal:  </span><span className="pet-info-details-values">{pet.type}</span></p>
            <p><span className="pet-info-details-keys">Pet Description: </span><span className="pet-info-details-values">{pet.description}</span></p>
            <p><span className="pet-info-details-keys">Date and Location Lost: </span><span className="pet-info-details-values">Lost on {pet.dateLastSeen} in the {pet.location} area.</span></p>
            <p><span className="pet-info-details-keys">Additional Details: </span><span className="pet-info-details-values">{pet.additionalInformation}</span></p>
          </div>
        </div>
        <Link to = "/lostPets"><button className="return-to-pets-button">Return to All Pets</button></Link>
      </div>
    </>
  );
};

export default PetInfo;
