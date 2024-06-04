// Looks through the pets database array and creates an array of all of the categories for that type.
// If if called for the location filter, it looks through the pets array and creates an array of all locations that exist.

export const getCategories = (filteredPets, filter) => {
    let output = ['All'];
    for (let i = 0; i < filteredPets.length; ++i) {
      output.push(filteredPets[i][`${filter}`]);
    }
    let filteredOutput = output.filter((item, index) => output.indexOf(item) === index);
    return filteredOutput;
  }