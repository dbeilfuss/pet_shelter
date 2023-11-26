import { createAvailablePetCard } from "/Elements/pet-info-card/create-pet-card.js";

import { makeHeartsClickable } from "/Elements/pet-info-card/pet_info_card.js";

function displaySamplePets() {
  const listOfPets = document.getElementById("short-list-of-pets");
  let petCards = "";

  // set the number of cards based on the width of the screen
  const screenWidth = window.innerWidth;
  const cardWidth = 290;
  let numberOfCards = Math.floor(screenWidth / cardWidth);
  if (numberOfCards > 5) {
    numberOfCards = 5;
  }

  // create the cards
  for (let i = 0; i < numberOfCards; i++) {
    petCards += createAvailablePetCard();
  }

  listOfPets.innerHTML = petCards;
  makeHeartsClickable();
}

// Initial Load of Screen
document.addEventListener("DOMContentLoaded", () => {
  displaySamplePets();
});
