import React from "react";
import { Link, useParams } from "react-router-dom";
import "./PetInfo.css";
import pets from "../../petDatabase";
import Layout from "../layout/Layout";
import ButtonComponent from "../ButtonComponent";

const PetInfo = () => {
  const { id } = useParams()
  const idAsInteger = parseInt(id)
  let pet = pets.find(pet => pet.id === idAsInteger)

  return (
    <>
      <Layout>
        <div className="pet-info-layout">
          <h1>Details</h1>
          <div className="pet-info-container">
              <div className = "pet-info-image-container">
                  <img className = "pet-info-image" src={`../images/${pet.id}.jpg`} alt = {`${pet.name} the lost ${pet.type}.`}></img>
              </div>
            <div className = "pet-info-details-container">
              <p><span className="pet-info-details-keys">Pet's name: </span><span className="pet-info-details-values">{pet.name}</span></p>
              <p><span className="pet-info-details-keys">Type of animal:  </span><span className="pet-info-details-values">{pet.type}</span></p>
              <p><span className="pet-info-details-keys">Pet Description: </span><span className="pet-info-details-values">{pet.description}</span></p>
              <p><span className="pet-info-details-keys">Date and Location Lost: </span><span className="pet-info-details-values">Lost on {pet.dateLastSeen} in the {pet.location} area.</span></p>
              <p><span className="pet-info-details-keys">Additional Details: </span><span className="pet-info-details-values">{pet.additionalInformation}</span></p>
            </div>
          </div>
          <Link to = "/lostPets"><ButtonComponent variant="button-return-to-pets">Return to All Pets</ButtonComponent></Link>
        </div>
      </Layout>
    </>
  );
};

export default PetInfo;
