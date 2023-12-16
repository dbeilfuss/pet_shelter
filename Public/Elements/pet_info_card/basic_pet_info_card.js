function heartClicked(event) {
  // identify the petID
  const clickedButton = event.target.closest(".favorite-button");
  const articleElement = clickedButton.closest(".pet-card");
  let petID = articleElement.dataset.petid;
  console.log(`PetID: ${petID}`);

  // Change Heart Color
  clickedButton.classList.toggle("favorited");
  clickedButton.querySelector(".heart").classList.toggle("favorited");

  // Communicate with Server
  favoritePet(petID);
}

// function makeHeartsClickable() {
// TODO Depricate
// const favoriteButtons = document.querySelectorAll(".favorite-button");
// favoriteButtons.forEach((button) => {
//   button.addEventListener("click", function () {
//     // identify the petID
//     const clickedButton = event.target;
//     const articleElement = clickedButton.closest(".pet-card");
//     let petID = articleElement.dataset.petid;
//     console.log(`PetID: ${petID}`);
//     // Change Heart Color
//     this.classList.toggle("favorited");
//     this.querySelector(".heart").classList.toggle("favorited");
//     // Communicate with Server
//     heartClicked(petID);
//   });
// });
// }

function reserveButtonClicked() {
  console.log("Reserve button");
}

function makeButtonsClickable() {
  // TODO Depricate
  const reserveButtons = document.querySelectorAll(".reserve-button");
  reserveButtons.forEach((button) => {
    button.addEventListener("click", () => reserveButtonClicked());
  });
}

// document.addEventListener("DOMContentLoaded", () => makeHeartsClickable());

document.addEventListener("DOMContentLoaded", () => makeButtonsClickable());
