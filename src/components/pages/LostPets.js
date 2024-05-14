import React from "react";
import PetCard from "../PetCard";
import pets from "../../petDatabase.js"
import './LostPets.css';

const LostPets = () => {

  return (
    <div className = "lost-pets-layout">
      <h1>This is the Lost Pets page</h1>
      {/* This will be removed and the pets array will be mapped through. Putting this here to demonstrate the component as page logic does not yet exist. */}
      <div className = "petCardsContainer">
        <PetCard pet = {pets[0]} />
        <PetCard pet = {pets[1]} />
      </div>
    </div>
  );
};

export default LostPets;