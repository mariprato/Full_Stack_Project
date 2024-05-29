import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import PetCard from '../components/cards/PetCard/PetCard.jsx';
import pets from "../databases/petDatabase.js";
import './LostPets.css';
import Pagination from '../components/generic/pagination/pagination.js';
import Filter from '../components/filters/filter/filter.js';
import FilterContainer from '../components/filters/filterContainer/filterContainer.js';
import Layout from '../components/layout/layout/Layout.js';
import ButtonComponent from '../components/generic/button/ButtonComponent.js';

const LostPets = () => {
  const location = useLocation();
  const navigate = useNavigate();
  let stateData = location.state;

  const [activePage, setActivePage] = useState(1);
  const [petsToDisplay, setPetsToDisplay] = useState([]);
  const [filteredPets, setFilteredPets] = useState([...pets]);
  const [typeFilter, setTypeFilter] = useState('All');
  const [locationFilter, setLocationFilter] = useState('All');
  const [statusFilter, setStatusFilter] = useState('All');

  useEffect(() => {
    if (!!stateData){
      setTypeFilter(stateData.typeFilter);
      setLocationFilter(stateData.locationFilter);
      setStatusFilter(stateData.statusFilter);
      setActivePage(stateData.activePage);
    }
  }, []);

  const getPetArray = (pets) => {
    const indexToStart = (activePage - 1) * 8;
    return pets.slice(indexToStart, indexToStart + 8);
  };

  const getPetCategories = (filteredPets) => {
    let output = ['All'];
    for (let i = 0; i < filteredPets.length; ++i) {
      output.push(filteredPets[i]['type']);
    }
    let filteredOutput = output.filter((item, index) => output.indexOf(item) === index);
    return filteredOutput;
  };

  const getLocationCategories = (filteredPets) => {
    let output = ['All'];
    for (let i = 0; i < filteredPets.length; ++i) {
      output.push(filteredPets[i]['location']);
    }
    let filteredOutput = output.filter((item, index) => output.indexOf(item) === index);
    return filteredOutput;
  };

  const getStatusCategories = (filteredPets) => {
    const statusOptions = ['All'];
    if (filteredPets.some((pet) => pet.found === true)) {
      statusOptions.push('Found');
    }
    if (filteredPets.some((pet) => pet.found === false)) {
      statusOptions.push('Lost');
    }
    return statusOptions;
  };

  const filterPets = () => {
    let newFilteredPets = [...pets];
    if (typeFilter !== 'All') {
      newFilteredPets = newFilteredPets.filter((pet) => pet.type === typeFilter);
    }
    if (locationFilter !== 'All') {
      newFilteredPets = newFilteredPets.filter((pet) => pet.location === locationFilter);
    }
    if (statusFilter === 'Found') {
      newFilteredPets = newFilteredPets.filter((pet) => pet.found === true);
    } else if (statusFilter === 'Lost') {
      newFilteredPets = newFilteredPets.filter((pet) => pet.found === false);
    }
    setFilteredPets(newFilteredPets);
  };

  useEffect(() => {
    setPetsToDisplay(getPetArray(filteredPets));
  }, [activePage, filteredPets]);

  useEffect(() => {
    filterPets();
  }, [typeFilter, locationFilter, statusFilter]);


  const clearFilters = () => {
    setTypeFilter('All');
    setLocationFilter('All');
    setStatusFilter('All');
  };

  return (
    <Layout>
      <div className="lost-pets-layout">
        <h1>Lost Pets</h1>
        <FilterContainer>
          <div className="filter-buttons-container">
            <Filter
              options={getPetCategories(filteredPets)}
              onClick={(option) => {
                setTypeFilter(option);
                setActivePage(1)
                navigate(`/lostPets?page=1`);
              }}
              currentlySelected={typeFilter}
              filterMethod="Type"
            />
            <Filter
              options={getLocationCategories(filteredPets)}
              onClick={(option) => {
                setLocationFilter(option);
                setActivePage(1)
                navigate(`/lostPets?page=1`);
              }}
              currentlySelected={locationFilter}
              filterMethod="Location"
            />
            <Filter
              options={getStatusCategories(filteredPets)}
              onClick={(option) => {
                setStatusFilter(option);
                setActivePage(1)
                navigate(`/lostPets?page=1`);
              }}
              currentlySelected={statusFilter}
              filterMethod="Status"
            />
            <ButtonComponent
              variant="button-filter"
              onClick={clearFilters}
              className="clear-filters-margin"
            >
              Clear Filters
            </ButtonComponent>
          </div>
        </FilterContainer>
        <div className="pet-cards-container">
          {petsToDisplay.map((pet) => (
            <PetCard key={pet.id} pet={pet} state={{statusFilter: statusFilter, locationFilter: locationFilter, typeFilter: typeFilter, activePage: activePage}}/>
          ))}
        </div>
        <Pagination pets={filteredPets} activePage={activePage} setActivePage={setActivePage} />
      </div>
    </Layout>
  );
};

export default LostPets;
