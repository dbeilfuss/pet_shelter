// import { createEditablePetCard, clearListOfPets } from "./create_pet_card.js";

function makeHeartsClickable() {
  const favoriteButtons = document.querySelectorAll(".favorite-button");

  favoriteButtons.forEach((button) => {
    button.addEventListener("click", function () {
      this.classList.toggle("favorited");
      this.querySelector(".heart").classList.toggle("favorited");
    });
  });
}

function editButtonClicked(event) {
  // Identify the PetID
  const clickedButton = event.target;
  const articleElement = clickedButton.closest(".pet-card");
  let petID = articleElement.dataset.petid;
  console.log(`PetID: ${petID}`);

  clearListOfPets();

  getPetInfo(petID, (petInfo) => {
    const petData = {
      petID: petInfo[0].id,
      imageURL: petInfo[0].image_url,
      name: petInfo[0].name,
      breed: petInfo[0].breed,
      maleFemale: petInfo[0].sex,
      age: petInfo[0].age,
      weight: petInfo[0].weight,
    };

    createEditablePetCard(petData);
  });
}

function reserveButtonClicked() {
  console.log("Reserve button");
}

function saveButtonClicked() {
  console.log("Save button");
  document
    .getElementById("editPetForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      const formData = new FormData(this);
      const petData = Object.fromEntries(formData.entries());

      updatePet(petData, (response) => {});
    });
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

function makeButtonsClickable() {
  const editButtons = document.querySelectorAll(".edit-button");
  editButtons.forEach((button) => {
    button.addEventListener("click", (event) => editButtonClicked(event));
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
