import { getAllPets } from "/database.js";

import { createReservablePetCard } from "/Elements/pet-info-card/create-pet-card.js";

import {
  makeHeartsClickable,
  makeButtonsClickable,
} from "/Elements/pet-info-card/pet_info_card.js";

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

function displayAllPets(sortBy) {
  console.log(sortBy);

  clearListOfPets();

  // create and sort list of pets
  let allPetsList = getAllPets();

  console.log("all pets list is an array? " + Array.isArray(allPetsList));

  if (sortBy === "Name" || sortBy === "Breed" || sortBy === "MaleFemale") {
    allPetsList = sortByStringProperty(allPetsList, sortBy);
  } else if (sortBy === "Age" || sortBy === "Weight") {
    allPetsList = sortByNumberProperty(allPetsList, sortBy);
  }

  console.log(allPetsList);

  // create pet cards
  let petCards = "";
  for (const pet of allPetsList) {
    console.log(pet.Name);
    let card = createReservablePetCard(
      pet.imageURL,
      pet.Name,
      pet.Breed,
      pet.MaleFemale,
      pet.Age,
      pet.Weight
    );
    petCards += card;
  }

  // add pet cards to DOM
  const petsSection = document.getElementById("list-of-pets");
  console.log(allPetsList);

  petsSection.innerHTML = petCards;

  // add event listeners
  makeHeartsClickable();
  makeButtonsClickable();
}

function displayAddPetCard() {
  const listOfPets = document.getElementById("list-of-pets");
  const newPetCard = createNewPetCard();
  listOfPets.innerHTML = newPetCard;
}

function confirmDatabaseReset() {
  var confirmMessage =
    "Are you sure you want to do this? This will run the seed file - which will remove any changes you have made and reset the database to its default state.  This CANNOT BE UNDONE!";
  if (confirm(confirmMessage)) {
    return true;
  } else {
    return false;
  }
}

function resetDatabase() {
  if (confirmDatabaseReset()) {
    console.log("Resetting Database");
    // TODO Run Seed File
  } else {
    location.reload();
  }
}

// Event handler for dropdown menu items
document.querySelector(".dropdown-menu").addEventListener("click", (event) => {
  const selectedClassList = event.target.classList;
  const selectedText = event.target.textContent;

  displayAllPets(selectedText);
});

// Initial Load of Screen
document.addEventListener("DOMContentLoaded", () => {
  displayAllPets("Available");
});
