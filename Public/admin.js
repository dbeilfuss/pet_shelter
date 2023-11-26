import {
  createNewPetCard,
  createEditablePetCard,
  createAvailablePetCard,
  createReservedPetCard,
  createAdoptedPetCard,
} from "/Elements/pet-info-card/create-pet-card.js";

import {
  makeHeartsClickable,
  makeButtonsClickable,
} from "/Elements/pet-info-card/pet_info_card.js";

export function clearListOfPets() {
  const listOfPets = document.getElementById("list-of-pets");
  listOfPets.innerHTML = "";
}

function displayPets(filter) {
  console.log(filter);

  clearListOfPets();

  const listOfPets = document.getElementById("list-of-pets");
  let petCards = "";

  for (let i = 0; i < 5; i++) {
    if (filter === "Available") {
      console.log(filter, i);
      petCards += createAvailablePetCard();
    } else if (filter === "Reserved") {
      console.log(filter, i);
      petCards += createReservedPetCard();
    } else if (filter === "Adopted") {
      console.log(filter, i);
      petCards += createAdoptedPetCard();
    }
  }

  listOfPets.innerHTML = petCards;
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

  if (event.target.tagName === "A") {
    if (selectedClassList.contains("lookup-pets")) {
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

// Initial Load of Screen
document.addEventListener("DOMContentLoaded", () => {
  displayPets("Available");
});
