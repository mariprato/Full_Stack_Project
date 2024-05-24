import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import PetCard from '../PetCard';
import pets from '../../petDatabase.js';
import './LostPets.css';
import Pagination from '../layout/pagination.js';
import Filter from '../filters/filter.js';
import FilterContainer from '../filters/filterContainer.js';
import Layout from '../layout/Layout.js';
import ButtonComponent from '../ButtonComponent';

const LostPets = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const initialPage = parseInt(searchParams.get('page')) || 1;
  const navigate = useNavigate();

  const [activePage, setActivePage] = useState(initialPage);
  const [petsToDisplay, setPetsToDisplay] = useState([]);
  const [filteredPets, setFilteredPets] = useState([...pets]);
  const [typeFilter, setTypeFilter] = useState('All');
  const [locationFilter, setLocationFilter] = useState('All');
  const [foundFilter, setFoundFilter] = useState('All');

  function getPetArray(pets) {
    const indexToStart = (activePage - 1) * 8;
    return pets.slice(indexToStart, indexToStart + 8);
  }

  function getPetCategories(filteredPets) {
    let output = ['All'];
    for (let i = 0; i < filteredPets.length; ++i) {
      output.push(filteredPets[i]['type']);
    }
    let filteredOutput = output.filter((item, index) => output.indexOf(item) === index);
    return filteredOutput;
  }

  function getLocationCategories(filteredPets) {
    let output = ['All'];
    for (let i = 0; i < filteredPets.length; ++i) {
      output.push(filteredPets[i]['location']);
    }
    let filteredOutput = output.filter((item, index) => output.indexOf(item) === index);
    return filteredOutput;
  }

  function getStatusCategories(filteredPets) {
    const statusOptions = ['All'];
    if (filteredPets.some((pet) => pet.found === true)) {
      statusOptions.push('Found');
    }
    if (filteredPets.some((pet) => pet.found === false)) {
      statusOptions.push('Lost');
    }
    return statusOptions;
  }

  function filterPets() {
    let newFilteredPets = [...pets];
    if (typeFilter !== 'All') {
      newFilteredPets = newFilteredPets.filter((pet) => pet.type === typeFilter);
    }
    if (locationFilter !== 'All') {
      newFilteredPets = newFilteredPets.filter((pet) => pet.location === locationFilter);
    }
    if (foundFilter === 'Found') {
      newFilteredPets = newFilteredPets.filter((pet) => pet.found === true);
    } else if (foundFilter === 'Lost') {
      newFilteredPets = newFilteredPets.filter((pet) => pet.found === false);
    }
    setFilteredPets(newFilteredPets);
  }

  useEffect(() => {
    setPetsToDisplay(getPetArray(filteredPets));
  }, [activePage, filteredPets]);

  useEffect(() => {
    filterPets();
  }, [typeFilter, locationFilter, foundFilter]);

  useEffect(() => {
    const initialPage = parseInt(searchParams.get('page')) || 1;
    setActivePage(initialPage);
    if (!searchParams.get('page')) {
      navigate(`${location.pathname}?page=1`);
    }
  }, [location, navigate, searchParams]);

  useEffect(() => {
    sessionStorage.setItem('lastVisitedPage', activePage);
  }, [activePage]);

  function clearFilters() {
    setTypeFilter('All');
    setLocationFilter('All');
    setFoundFilter('All');
  }

  return (
    <>
      <Layout>
        <div className="lost-pets-layout">
          <h1>Lost Pets</h1>
          <FilterContainer>
            <div className="filter-buttons-container">
              <Filter
                options={getPetCategories(filteredPets)}
                onClick={(option) => setTypeFilter(option)}
                currentlySelected={typeFilter}
                filterMethod="Type"
              />
              <Filter
                options={getLocationCategories(filteredPets)}
                onClick={(option) => setLocationFilter(option)}
                currentlySelected={locationFilter}
                filterMethod="Location"
              />
              <Filter
                options={getStatusCategories(filteredPets)}
                onClick={(option) => setFoundFilter(option)}
                currentlySelected={foundFilter}
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
              <PetCard key={pet.id} pet={pet} />
            ))}
          </div>
          <Pagination pets={filteredPets} activePage={activePage} setActivePage={setActivePage} />
        </div>
      </Layout>
    </>
  );
};

export default LostPets;
