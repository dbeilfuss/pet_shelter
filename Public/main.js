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
  // TODO use basic cards instead edit cards
  for (let i = 0; i < numberOfCards; i++) {
    petCards += createAvailablePetCard();
  }

  listOfPets.innerHTML = petCards;
  makeHeartsClickable();
}

// Scrolling Images & Text
const images = [
  "https://blog.adobe.com/en/publish/2021/10/19/media_16dc563cf8f4cafb81a1011a270c4c7919f09f0b2.png?width=750&format=png&optimize=medium",
  "https://network.bestfriends.org/sites/default/files/page_images/hero/BooEricMegSedrakyan-LF-9I9A7320_0.jpeg",
  "https://hips.hearstapps.com/hmg-prod/images/pet-adoption-websites1-1598044456.jpg",
  "https://pethavenmn.org/wp-content/uploads/2017/10/14570699_10154675430869617_7587350158264934234_o-6.jpg",
  "https://images.squarespace-cdn.com/content/v1/5719016a27d4bd6dafffd678/f9c1640b-a56b-4101-9839-6e15ea8a02e8/625522_598018436910972_1124958709_n.jpg",
  "https://bestfriends.org/sites/default/files/inline-images/Myth-NuggetAdoptionNKUTSuper2178sak.jpg",
  "https://getyourpet.com/wp-content/themes/gyp/assets/images/hero-sml15.jpg",
  "https://media.newyorker.com/photos/606b51c2313f23423168acbe/master/pass/Brewer-CompanionDogApplication.jpg",
];
const messages = [
  "Our dedicated team ensures every furry friend is nurtured, vaccinated, and groomed to perfection, ready to leap into your life with a wagging tail.",
  "Every animal in our care receives top-notch medical attention, love, and a promise of a bright future.",
  "Each of our animals is a shining example of health and happiness, ready to bring endless smiles and wagging tails into your home.",
  "Our commitment to excellence in animal health and well-being ensures that your new furry friend will be a joyful addition to your family.",
  "We pride ourselves on maintaining the highest standards of care, so you can find a companion who's as healthy as they are happy.",
  "Every pet is thoroughly screened to ensure the best match for your home. Together, we create forever stories filled with joy and companionship.",
  "Our pets are awaiting the chance to light up your life with unconditional love and playful antics.",
  "Our animals are not just pets; they are companions who have been lovingly prepared to bring warmth and laughter to their new forever homes.",
  "We pride ourselves on maintaining the highest standards of care, so you can find a companion who's as healthy as they are happy.",
];

let i = 0;

function changeContent() {
  const imageContainer = document.getElementById("celebration-image-container");
  const image = document.getElementById("celebration-image");
  const message = document.getElementById("scrolling-text");

  // fade out
  imageContainer.style.opacity = "0";
  message.style.opacity = "0";

  setTimeout(() => {
    // Change the content
    image.src = images[i];
    message.textContent = messages[i];

    // Fade back in
    imageContainer.style.opacity = "1";
    message.style.opacity = "1";

    // Update index
    i = (i + 1) % images.length;
  }, 1000); // Match this duration to CSS transition duration
}

// Change content every few seconds
setInterval(changeContent, 8000); // Adjust time as needed

// Initial Load of Screen
document.addEventListener("DOMContentLoaded", () => {
  displaySamplePets();
});
