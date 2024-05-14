import React from "react";
import PetCard from "../PetCard";
import pets from "../../petDatabase.js"
import './LostPets.css';

const LostPets = () => {
  console.log(pets)
  return (
    <div className = "lost-pets-layout">
      <h1>Lost Pets</h1>
      <div className = "petCardsContainer">
      {pets.map((pet) => 
          <PetCard key={pet.id} pet={pet} />
      )}
      </div>
      

    </div>
  );
};

export default LostPets;