import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import PetCard from '../components/cards/PetCard/PetCard.jsx';
import pets from "../databases/petDatabase.js";
import './LostPets.css';
import Pagination from '../components/generic/pagination/pagination.js';
import Filter from '../components/filters/filter'
import FilterContainer from '../components/filters/filterContainer/filterContainer.js';
import Layout from '../components/layout/layout/Layout.js';
import ButtonComponent from '../components/generic/button/ButtonComponent.js';
import { clearFilters } from '../utils/clearFilters.js';
import { getCategories } from '../utils/getCategories.js';
import { getPetArray } from '../utils/getPetArray.js';
import { filterPets } from '../utils/filterPets.js';

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
    if (stateData){
      setTypeFilter(stateData.typeFilter);
      setLocationFilter(stateData.locationFilter);
      setStatusFilter(stateData.statusFilter);
      setActivePage(stateData.activePage);
    }
  }, []);

  useEffect(() => {
    setPetsToDisplay(getPetArray(filteredPets, activePage));
  }, [activePage, filteredPets]);

  useEffect(() => {
    filterPets(pets, setFilteredPets, typeFilter, locationFilter, statusFilter);
  }, [typeFilter, locationFilter, statusFilter]);

  return (
    <Layout>
      <div className="lost-pets-layout">
        <h1>Lost Pets</h1>
        <FilterContainer>
          <div className="filter-buttons-container">
            
            <Filter
              options={getCategories(filteredPets, "type")}
              onClick={(option) => {
                setTypeFilter(option);
                setActivePage(1)
                navigate(`/lostPets?page=1`);
              }}
              currentlySelected={typeFilter}
              filterMethod="Type"
            />
            <Filter
              options={getCategories(filteredPets, "location")}
              onClick={(option) => {
                setLocationFilter(option);
                setActivePage(1)
                navigate(`/lostPets?page=1`);
              }}
              currentlySelected={locationFilter}
              filterMethod="Location"
            />
            <Filter
              options={getCategories(filteredPets, "found")}
              onClick={(option) => {
                setStatusFilter(option);
                setActivePage(1)
                navigate(`/lostPets?page=1`);
              }}
              currentlySelected={statusFilter}
              filterMethod="Status"
            />
            <ButtonComponent
              variant="button-post-blue"
              onClick={() => clearFilters(setTypeFilter, setLocationFilter, setStatusFilter)}
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
