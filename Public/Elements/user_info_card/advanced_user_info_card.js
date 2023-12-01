import { createEditablePetCard, clearListOfPets } from "./create_user_card.js";

export function makeHeartsClickable() {
  const favoriteButtons = document.querySelectorAll(".favorite-button");

  favoriteButtons.forEach((button) => {
    button.addEventListener("click", function () {
      this.classList.toggle("favorited");
      this.querySelector(".heart").classList.toggle("favorited");
    });
  });
}

function editButtonClicked() {
  clearListOfPets();

  const listOfPets = document.getElementById("list-of-pets");
  let petCards = createEditablePetCard();

  listOfPets.innerHTML = petCards;
}

function reserveButtonClicked() {
  console.log("Reserve button");
}

function saveButtonClicked() {
  console.log("Save button");
}

function cancelButtonClicked() {
  console.log("Cancel button");
}

function deleteButtonClicked() {
  console.log("Delete button");
}

function confirmAdoptionButtonClicked() {
  console.log("Confirm Adoption button");
}

function cancelReservationButtonClicked() {
  console.log("Cancel Reservation button");
}

function returnedToShelterButtonClicked() {
  console.log("Returned to Shelter button");
}

export function makeButtonsClickable() {
  const editButtons = document.querySelectorAll(".edit-button");
  editButtons.forEach((button) => {
    button.addEventListener("click", () => editButtonClicked());
  });

  const reserveButtons = document.querySelectorAll(".reserve-button");
  reserveButtons.forEach((button) => {
    button.addEventListener("click", () => reserveButtonClicked());
  });

  const saveButtons = document.querySelectorAll(".save-button");
  saveButtons.forEach((button) => {
    button.addEventListener("click", () => saveButtonClicked());
  });

  const cancelButtons = document.querySelectorAll(".cancel-button");
  cancelButtons.forEach((button) => {
    button.addEventListener("click", () => cancelButtonClicked());
  });

  const deleteButtons = document.querySelectorAll(".delete-button");
  deleteButtons.forEach((button) => {
    button.addEventListener("click", () => deleteButtonClicked());
  });

  const confirmAdoptionButtons = document.querySelectorAll(
    ".confirm-adoption-button"
  );
  confirmAdoptionButtons.forEach((button) => {
    button.addEventListener("click", () => confirmAdoptionButtonClicked());
  });

  const cancelReservationButtons = document.querySelectorAll(
    ".cancel-reservation-button"
  );

  cancelReservationButtons.forEach((button) => {
    button.addEventListener("click", () => cancelReservationButtonClicked());
  });

  const returnedToShelterButtons =
    document.querySelectorAll(".returned-button");
  returnedToShelterButtons.forEach((button) => {
    button.addEventListener("click", () => returnedToShelterButtonClicked());
  });
}

document.addEventListener("DOMContentLoaded", () => makeHeartsClickable());

document.addEventListener("DOMContentLoaded", () => makeButtonsClickable());
