function clearListOfPets() {
  const listOfPets = document.getElementById("list-of-pets");
  listOfPets.innerHTML = "";
}

function sortByStringProperty(arr, property) {
  const dbKey = {
    Name: "name",
    Breed: "breed",
    MaleFemale: "sex",
  };
  const dbProperty = dbKey[property];
  console.log(dbProperty);
  console.log(`sorting by String: ${dbProperty}`);
  const sortedPetCards = arr
    .slice()
    .sort((a, b) => a[dbProperty].localeCompare(b[dbProperty]));

  displayPetsCallback(sortedPetCards, false, "reservable");
}

function sortByNumberProperty(arr, property) {
  const dbKey = {
    Age: "age",
    Weight: "weight",
  };
  const dbProperty = dbKey[property];
  console.log(`sorting by number: ${dbProperty}`);
  const sortedPetCards = arr
    .slice()
    .sort((a, b) => a[dbProperty] - b[dbProperty]);

  displayPetsCallback(sortedPetCards, false, "reservable");
}

function sortPets(sortBy) {
  clearListOfPets();

  if (sortBy === "Name" || sortBy === "Breed" || sortBy === "MaleFemale") {
    getFilteredPets("Available", (petsList) =>
      sortByStringProperty(petsList, sortBy)
    );
  } else if (sortBy === "Age" || sortBy === "Weight") {
    getFilteredPets("Available", (petsList) =>
      sortByNumberProperty(petsList, sortBy)
    );
  }
}

// Event handler for dropdown menu items
document.querySelector(".dropdown-menu").addEventListener("click", (event) => {
  const selectedText = event.target.textContent;

  sortPets(selectedText);
});
