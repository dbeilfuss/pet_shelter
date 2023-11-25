import {
  createNewPetCard,
  createEditablePetCard,
  createAvailablePetCard,
} from "/Elements/pet-info-card/create-pet-card.js";

import { makeHeartsClickable } from "/Elements/pet-info-card/pet_info_card.js";

function clearListOfPets() {
  const listOfPets = document.getElementById("list-of-pets");
  listOfPets.innerHTML = "";
}

function displayPets(filter) {
  console.log(filter);
  const listOfPets = document.getElementById("list-of-pets");
  let petCard = "";

  if (filter === "Available") {
    petCard = createAvailablePetCard();
  } else if (filter === "Reserved") {
    petCard = createReservedPetCard();
  } else if (filter === "Adopted") {
    petCard = createAdoptedPetCard();
  }

  listOfPets.innerHTML = petCard;
  makeHeartsClickable();
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
document
  .querySelector(".dropdown-menu")
  .addEventListener("click", function (event) {
    const selectedClassList = event.target.classList;
    const selectedText = event.target.textContent;

    if (event.target.tagName === "A") {
      if (selectedClassList.contains("lookup-pets")) {
        clearListOfPets();
        displayPets(selectedText);
      } else if (selectedClassList.contains("command")) {
        if (selectedText === "+ Add") {
          console.log("command confirmed");
          clearListOfPets();
          displayAddPetCard();
        } else if (selectedText === "! Reset Database") {
          resetDatabase();
        }
      }
    }
  });
