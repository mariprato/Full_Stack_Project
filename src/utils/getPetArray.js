// Returns an array of 8 pets that should be displayed on the page that is currently selected. 

export const getPetArray = (pets, activePage) => {
    const indexToStart = (activePage - 1) * 8;
    return pets.slice(indexToStart, indexToStart + 8);
  };