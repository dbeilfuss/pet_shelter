import { getAllPets } from "/database.js";

import {
  createPetCard,
  createNewPetCard,
} from "/Elements/pet_info_card/create_pet_card.js";

import {
  makeHeartsClickable,
  makeButtonsClickable,
} from "/Elements/pet_info_card/advanced_pet_info_card.js";

export function clearListOfPets() {
  const listOfPets = document.getElementById("list-of-pets");
  listOfPets.innerHTML = "";
}

// TODO Have admin cards retain a business feel, basic font, no favorite button
function displayPets(filter) {
  console.log(filter);
  clearListOfPets();

  const allPetsList = getAllPets();

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
      filter
    );
    petCards += card;
  }

  const listOfPets = document.getElementById("list-of-pets");

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
