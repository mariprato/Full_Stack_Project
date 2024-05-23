import React, { useEffect, useState } from "react";
import PetCard from "../PetCard";
import pets from "../../petDatabase.js";
import "./LostPets.css";
import Pagination from "../layout/pagination.js";
import Filter from "../filters/filter.js";
import FilterContainer from "../filters/filterContainer.js";
import Layout from "../layout/Layout.js";
import ButtonComponent from "../ButtonComponent";
import { useLocation } from 'react-router-dom';

const LostPets = () => {
  function getPetArray(pets) {
    const indexToStart = (activePage - 1) * 8;
    return pets.slice(indexToStart, indexToStart + 8);
  }

  function getPetCategories(filteredPets) {
    let output = ["All"];
    for (let i = 0; i < filteredPets.length; ++i) {
      output.push(filteredPets[i]["type"]);
    }
    let filteredOutput = output.filter(
      (item, index) => output.indexOf(item) === index
    );
    return filteredOutput;
  }

  function getLocationCategories(filteredPets) {
    let output = ["All"];
    for (let i = 0; i < filteredPets.length; ++i) {
      output.push(filteredPets[i]["location"]);
    }
    let filteredOutput = output.filter(
      (item, index) => output.indexOf(item) === index
    );
    return filteredOutput;
  }

  function getStatusCategories(filteredPets) {
    const statusOptions = ["All"];
    if (filteredPets.some((pet) => pet.found === true)) {
      statusOptions.push("Found");
    }
    if (filteredPets.some((pet) => pet.found === false)) {
      statusOptions.push("Lost");
    }
    return statusOptions;
  }

  function filterPets() {
    let newFilteredPets = [...pets];
    if (typeFilter !== "All") {
      newFilteredPets = newFilteredPets.filter(
        (pet) => pet.type === typeFilter
      );
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

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const initialPage = parseInt(searchParams.get('page')) || 1;

  const [activePage, setActivePage] = useState(initialPage);
  const [petsToDisplay, setPetsToDisplay] = useState([]);
  const [filteredPets, setFilteredPets] = useState([...pets]);
  const [typeFilter, setTypeFilter] = useState("All");
  const [locationFilter, setLocationFilter] = useState("All");
  const [foundFilter, setFoundFilter] = useState("All");

  const petCategories = getPetCategories(filteredPets);
  const locationCategories = getLocationCategories(filteredPets);
  const statusCategories = getStatusCategories(filteredPets);

  useEffect(() => {
    setPetsToDisplay([]);
    const petArray = getPetArray(filteredPets);
    setPetsToDisplay(petArray);
  }, [activePage, filteredPets]);

  useEffect(() => {
    filterPets();
  }, [typeFilter, locationFilter, foundFilter]);

  // Function to clear all filters
  function clearFilters() {
    setTypeFilter("All");
    setLocationFilter("All");
    setFoundFilter("All");
  }

  return (
    <>
      <Layout>
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
                options={locationCategories}
                onClick={(option) => setLocationFilter(option)}
                currentlySelected={locationFilter}
                filterMethod="Location"
              />
              <Filter
                options={statusCategories}
                onClick={(option) => setFoundFilter(option)}
                currentlySelected={foundFilter}
                filterMethod="Status"
              />
              {/* NEW CLEAR FILTER BUTTON */}
              <ButtonComponent
                variant="button-filter"
                onClick={clearFilters}
                className="clear-filters-margin"
              >
                Clear Filters
              </ButtonComponent>
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
      </Layout>
    </>
  );
};

export default LostPets;
