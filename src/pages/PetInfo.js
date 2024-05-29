import React, { useEffect } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import './PetInfo.css';
import pets from "../databases/petDatabase";
import Layout from '../components/layout/layout/Layout';
import ButtonComponent from '../components/generic/button/ButtonComponent';

const PetInfo = () => {
  const location = useLocation();
  let state = location.state;

  const { id } = useParams();

  const pet = pets.find((pet) => pet.id === parseInt(id));

  return (
    <Layout>
      <div className="pet-info-layout">
        <h1>Details</h1>
        <div className="pet-info-container">
          <div className="pet-info-image-container">
            <img
              className="pet-info-image"
              src={`../images/${pet.id}.jpg`}
              alt={`${pet.name} the lost ${pet.type}.`}
            />
          </div>
          <div className="pet-info-details-container">
            <p>
              <span className="pet-info-details-keys">Pet's name: </span>
              <span className="pet-info-details-values">{pet.name}</span>
            </p>
            <p>
              <span className="pet-info-details-keys">Type of animal: </span>
              <span className="pet-info-details-values">{pet.type}</span>
            </p>
            <p>
              <span className="pet-info-details-keys">Pet Description: </span>
              <span className="pet-info-details-values">{pet.description}</span>
            </p>
            <p>
              <span className="pet-info-details-keys">Date and Location Lost: </span>
              <span className="pet-info-details-values">
                Lost on {pet.dateLastSeen} in the {pet.location} area.
              </span>
            </p>
            <p>
              <span className="pet-info-details-keys">Additional Details: </span>
              <span className="pet-info-details-values">{pet.additionalInformation}</span>
            </p>
            <p className="pet-info-details-keys">Have you seen this pet? Contact us <a className="navbar-email"
              href= {`mailto:enquiry@fur-everfound.com?subject=I think I have found ${pet.name} the ${pet.type}.`}
              rel="noreferrer"
              target="_blank">here.</a></p>
          </div>
        </div>
        <Link to={`/lostPets?page=${state["activePage"]}`} state={state}>
          <ButtonComponent variant="button-return-to-pets">Return to All Pets</ButtonComponent>
        </Link>
      </div>
    </Layout>
  );
};

export default PetInfo;
