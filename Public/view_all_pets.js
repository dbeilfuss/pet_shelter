import { getAllPets } from "/database.js";

import { createPetCard } from "/Elements/pet_info_card/create_pet_card.js";

import {
  makeHeartsClickable,
  makeButtonsClickable,
} from "/Elements/pet_info_card/basic_pet_info_card.js";

export function clearListOfPets() {
  const listOfPets = document.getElementById("list-of-pets");
  listOfPets.innerHTML = "";
}

function sortByStringProperty(arr, property) {
  console.log(`sorting by String: ${property}`);
  return arr.slice().sort((a, b) => a[property].localeCompare(b[property]));
}

function sortByNumberProperty(arr, property) {
  console.log(`sorting by number: ${property}`);
  return arr.slice().sort((a, b) => a[property] - b[property]);
}

function sortPets(sortBy) {
  console.log(sortBy);

  clearListOfPets();

  // create and sort list of pets
  let allPetsList = getAllPets();

  if (sortBy === "Name" || sortBy === "Breed" || sortBy === "MaleFemale") {
    allPetsList = sortByStringProperty(allPetsList, sortBy);
  } else if (sortBy === "Age" || sortBy === "Weight") {
    allPetsList = sortByNumberProperty(allPetsList, sortBy);
  }

  // create pet cards
  let petCards = "";

  for (const pet of allPetsList) {
    let card = createPetCard(
      pet.imageURL,
      pet.Name,
      pet.Breed,
      pet.MaleFemale,
      pet.Age,
      pet.Weight,
      "reservable"
    );
    petCards += card;
  }

  // add pet cards to DOM
  const petsSection = document.getElementById("list-of-pets");

  petsSection.innerHTML = petCards;

  // add event listeners
  makeHeartsClickable();
  makeButtonsClickable();
}

// Event handler for dropdown menu items
document.querySelector(".dropdown-menu").addEventListener("click", (event) => {
  const selectedText = event.target.textContent;

  sortPets(selectedText);
});
