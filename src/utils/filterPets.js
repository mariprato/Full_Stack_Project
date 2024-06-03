// Called when any filter is selected. Applies current type, location and found filters to the pets.
export const filterPets = (pets, setFilteredPets, typeFilter, locationFilter, statusFilter) => {
    let newFilteredPets = [...pets];
    const filters = [typeFilter, locationFilter, statusFilter];
    const filterKeys = ["type", "location", "found"];
    for (let i = 0; i < filters.length; i++){
      if (filters[i] !== 'All'){
        let key = filterKeys[i]
        newFilteredPets = newFilteredPets.filter((pet) => pet[key] === filters[i])
      }
    }
    setFilteredPets(newFilteredPets);
  };