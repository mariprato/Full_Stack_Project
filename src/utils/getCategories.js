export const getCategories = (filteredPets, filter) => {
    let output = ['All'];
    for (let i = 0; i < filteredPets.length; ++i) {
      output.push(filteredPets[i][`${filter}`]);
    }
    let filteredOutput = output.filter((item, index) => output.indexOf(item) === index);
    return filteredOutput;
  }