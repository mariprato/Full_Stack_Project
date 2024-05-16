import React, { useEffect, useState } from "react";
import PetCard from "../PetCard";
import pets from "../../petDatabase.js"
import './LostPets.css';
import Pagination from "../layout/pagination.js";
import Navbar from "../layout/navbar.js";
import Dropdown from "../dropdown.js";

const LostPets = () => {
  function getPetArray(pets){
    const indexToStart = (activePage - 1) * 8;
    return pets.slice(indexToStart, indexToStart + 8) 
  }

  function filterPets(petType){
    if (petType === "All"){
      setFilteredPets(pets)
      setActivePage(1)
    } else {
      const filteredPets = pets.filter((pet) => pet.type === petType)
      setFilteredPets(filteredPets)
      setActivePage(1)
    }
  }

  function getCategories(){
    let output = ["All"];
    for (let i=0; i < pets.length ; ++i)
        output.push(pets[i]["type"]);
    let filteredOutput = output.filter((item, index) => output.indexOf(item) === index)
    return filteredOutput
  }

  const [activePage, setActivePage] = useState(1)
  const [petsToDisplay, setPetsToDisplay] = useState([])
  const [filteredPets, setFilteredPets] = useState([...pets])
  const petCategories = getCategories();

  useEffect(() => {
    setPetsToDisplay([])
    const petArray = getPetArray(filteredPets)
    setPetsToDisplay(petArray)
  }, [activePage, filteredPets]);
  
  return (
    <>
      <Navbar/>
      <div className = "lost-pets-layout">
        <h1>Lost Pets</h1>
        <Dropdown options={petCategories} onClick ={filterPets}/>
        <div className = "petCardsContainer">
        {petsToDisplay.map((pet) => 
            <PetCard key={pet.id} pet={pet} />
        )}
        </div>
        
        <Pagination pets={filteredPets} activePage={activePage} setActivePage={setActivePage} setPetsToDisplay={setPetsToDisplay}/>
      </div>
    </>
  );
};

export default LostPets;