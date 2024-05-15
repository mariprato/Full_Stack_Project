import React, { useEffect, useState } from "react";
import PetCard from "../PetCard";
import pets from "../../petDatabase.js"
import './LostPets.css';
import Pagination from "../layout/pagination.js";

const LostPets = () => {
  function getPetArray(pets){
    const indexToStart = (activePage - 1) * 8;
    return pets.slice(indexToStart, indexToStart + 8) 
  }

  const [activePage, setActivePage] = useState(1)
  const [petsToDisplay, setPetsToDisplay] = useState([])

  useEffect(() => {
    setPetsToDisplay([])
    const petArray = getPetArray(pets)
    setPetsToDisplay(petArray)
  }, [activePage]);
  
  return (
    <div className = "lost-pets-layout">
      <h1>Lost Pets</h1>
      <div className = "petCardsContainer">
      {petsToDisplay.map((pet) => 
          <PetCard key={pet.id} pet={pet} />
      )}
      </div>
      
      <Pagination pets={pets} activePage={activePage} setActivePage={setActivePage} setPetsToDisplay={setPetsToDisplay}/>
    </div>
  );
};

export default LostPets;