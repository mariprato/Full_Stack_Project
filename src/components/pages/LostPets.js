import React, { useEffect, useState } from "react";
import PetCard from "../PetCard";
import pets from "../../petDatabase.js";
import "./LostPets.css";
import Pagination from "../layout/pagination.js";
import Navbar from "../layout/navbar.js";
import Filter from "../filters/filter.js";
import FilterContainer from "../filters/filterContainer.js";

const LostPets = () => {
  function shuffleArray(array) {
    // Fisher-Yates shuffle algorithm
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  function getPetArray(pets) {
    const indexToStart = (activePage - 1) * 8;
    return pets.slice(indexToStart, indexToStart + 8);
  }

  function getPetCategories() {
    let output = ["All"];
    for (let i = 0; i < pets.length; ++i)
      output.push(pets[i]["type"]);
    let filteredOutput = output.filter(
      (item, index) => output.indexOf(item) === index
    );
    return filteredOutput;
  }

  function getLocationCategories() {
    let output = ["All"];
    for (let i = 0; i < pets.length; ++i)
      output.push(pets[i]["location"]);
    let filteredOutput = output.filter(
      (item, index) => output.indexOf(item) === index
    );
    return filteredOutput;
  }

  function filterPets() {
    let newFilteredPets = [...pets]; // Use the original, unshuffled array so it doesn't break the filter code
    setActivePage(1);
    if (typeFilter !== "All") {
      newFilteredPets = pets.filter((pet) => pet.type === typeFilter);
    }
    if (locationFilter !== "All") {
      newFilteredPets = newFilteredPets.filter(
        (pet) => pet.location === locationFilter
      );
    }
    if (foundFilter === "Found") {
      newFilteredPets = newFilteredPets.filter((pet) => pet.found === true);
    } else if (foundFilter === "Lost") {
      newFilteredPets = newFilteredPets.filter((pet) => pet.found === false);
    }
    setFilteredPets(newFilteredPets);
  }

  const [activePage, setActivePage] = useState(1);
  const [petsToDisplay, setPetsToDisplay] = useState([]);
  const [filteredPets, setFilteredPets] = useState([...pets]);
  const [typeFilter, setTypeFilter] = useState("All");
  const [locationFilter, setLocationFilter] = useState("All");
  const [foundFilter, setFoundFilter] = useState("All");

  const petCategories = getPetCategories();
  const locationCategories = getLocationCategories();
  const foundCategories = ["All", "Found", "Lost"];

  useEffect(() => {
    setPetsToDisplay([]);
    const petArray = getPetArray(filteredPets);
    setPetsToDisplay(petArray);
  }, [activePage, filteredPets]);

  useEffect(() => {
    filterPets();
  }, [typeFilter, locationFilter, foundFilter]);

  useEffect(() => {
    shuffleArray(pets);
  }, []);

  return (
    <>
      <Navbar />
      <div className="lost-pets-layout">
        <h1>Lost Pets</h1>
        <FilterContainer>
          <div className="filter-buttons-container">
            <Filter
              options={petCategories}
              onClick={(option) => setTypeFilter(option)}
              currentlySelected={typeFilter}
              filterMethod="Type"
            />
            <Filter
              options={["All", ...locationCategories.filter((location) =>
                pets.some((pet) => pet.type === typeFilter && pet.location === location)
              )]}
              onClick={(option) => setLocationFilter(option)}
              currentlySelected={locationFilter}
              filterMethod="Location"
            />
            <Filter
              options={foundCategories}
              onClick={(option) => setFoundFilter(option)}
              currentlySelected={foundFilter}
              filterMethod="Status"
            />
          </div>
        </FilterContainer>

        <div className="petCardsContainer">
          {petsToDisplay.map((pet) => (
            <PetCard key={pet.id} pet={pet} />
          ))}
        </div>

        <Pagination
          pets={filteredPets}
          activePage={activePage}
          setActivePage={setActivePage}
          setPetsToDisplay={setPetsToDisplay}
        />
      </div>
    </>
  );
};

export default LostPets;
