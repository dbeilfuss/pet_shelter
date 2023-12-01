import { getAllPets } from "/database.js";
import { createPetCard } from "/Elements/pet_info_card/create_pet_card.js";
import {
  makeHeartsClickable,
  makeButtonsClickable,
} from "/Elements/pet_info_card/basic_pet_info_card.js";

function displaySamplePets() {
  let allPetsList = getAllPets();
  let petCards = "";

  // set the number of cards based on the width of the screen
  const screenWidth = window.innerWidth;
  const cardWidth = 290;
  let numberOfCards = Math.floor(screenWidth / cardWidth);
  if (numberOfCards > 5) {
    numberOfCards = 5;
  }

  // create pet cards
  // TODO limit cards to the variable selected directly above
  for (const pet of allPetsList) {
    let card = createPetCard(
      pet.imageURL,
      pet.Name,
      pet.Breed,
      pet.MaleFemale,
      pet.Age,
      pet.Weight,
      "basic"
    );
    petCards += card;
  }

  const adminSection = document.getElementById("admin-list");
  adminSection.innerHTML = petCards;

  const standardUsersSection = document.getElementById("standard-users-list");
  standardUsersSection.innerHTML = petCards;

  // add event listeners
  makeHeartsClickable();
  makeButtonsClickable();
}

// Initial Load of Screen
document.addEventListener("DOMContentLoaded", () => {
  displaySamplePets();
});
