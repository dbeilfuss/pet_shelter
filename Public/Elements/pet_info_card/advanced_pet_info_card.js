// import { createEditablePetCard, clearListOfPets } from "./create_pet_card.js";

// function makeHeartsClickable() {
//   // TODO Depricate
//   const favoriteButtons = document.querySelectorAll(".favorite-button");

//   favoriteButtons.forEach((button) => {
//     button.addEventListener("click", function () {
//       this.classList.toggle("favorited");
//       this.querySelector(".heart").classList.toggle("favorited");
//     });
//   });
// }

function editButtonClicked(event) {
  // Identify the PetID
  const clickedButton = event.target;
  const articleElement = clickedButton.closest(".pet-card");
  let petID = articleElement.dataset.petid;

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

    clearListOfPets();
    createEditablePetCard(petData);
  });
}

function reserveButtonClicked(event) {
  // Identify the petID and the articleElement
  const clickedButton = event.target;
  const articleElement = clickedButton.closest(".pet-card");
  let petID = articleElement.dataset.petid;

  // Show prompt for admin to enter the name
  const userName = prompt(
    "Please enter the name of the person reserving the pet:"
  );
  if (userName) {
    // Name entered, communicate with server
    reservePet(petID, userName, () => {
      // Remove the articleElement from the DOM on successful reservation
      articleElement.remove();
    });
  }
}

function saveButtonClicked() {
  console.log("Save button");
  document
    .getElementById("editPetForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      const formData = new FormData(this);
      const petData = Object.fromEntries(formData.entries());

      updatePet(petData, () => location.reload());
    });
}

function deleteButtonClicked(event) {
  var confirmMessage =
    "Are you sure you want to delete this pet? This CANNOT BE UNDONE!";

  if (confirm(confirmMessage)) {
    let petID;

    // Check if the editPetForm exists
    const form = document.getElementById("editPetForm");
    if (form) {
      petID = form.querySelector("input[name='id']").value;
    } else {
      // If the form doesn't exist, use the closest pet-card element
      const clickedButton = event.target;
      const articleElement = clickedButton.closest(".pet-card");
      petID = articleElement.dataset.petid;
    }

    console.log("Delete button clicked for pet id:", petID);

    deletePet(petID, () => {
      const messageSection = document.querySelector(".selected-item");
      messageSection.innerHTML = "Pet deleted successfully";
      clearListOfPets();
    });
  }
}

function cancelButtonClicked() {
  console.log("Cancel button");
}

function confirmAdoptionButtonClicked() {
  console.log("Confirm Adoption button");
}

function cancelReservationButtonClicked(event) {
  // Identify the petID and the articleElement
  const clickedButton = event.target;
  const articleElement = clickedButton.closest(".pet-card");
  let petID = articleElement.dataset.petid;

  // Show confirmation dialog
  const confirmMessage = "This pet is no longer reserved?";
  const cancelConfirmation = confirm(confirmMessage);
  if (cancelConfirmation) {
    // Cancelation confirmed, communicate with server
    cancelReservation(petID, () => {
      // Remove the articleElement from the DOM on successful cancelation
      articleElement.remove();
    });
  } else {
    // User cancelled, do nothing
    console.log("Reservation cancelled");
  }
}

function returnedToShelterButtonClicked() {
  console.log("Returned to Shelter button");
}

function makeButtonsClickable() {
  // TODO Depricate
  const editButtons = document.querySelectorAll(".edit-button");
  editButtons.forEach((button) => {
    button.addEventListener("click", (event) => editButtonClicked(event));
  });

  // const reserveButtons = document.querySelectorAll(".reserve-button");
  // reserveButtons.forEach((button) => {
  //   // button.addEventListener("click", () => reserveButtonClicked());
  // });

  const saveButtons = document.querySelectorAll(".save-button");
  saveButtons.forEach((button) => {
    button.addEventListener("click", () => saveButtonClicked());
  });

  const cancelButtons = document.querySelectorAll(".cancel-button");
  cancelButtons.forEach((button) => {
    button.addEventListener("click", () => cancelButtonClicked());
  });

  // const deleteButtons = document.querySelectorAll(".delete-button");
  // deleteButtons.forEach((button) => {
  //   button.addEventListener("click", () => deleteButtonClicked());
  // });

  const confirmAdoptionButtons = document.querySelectorAll(
    ".confirm-adoption-button"
  );
  confirmAdoptionButtons.forEach((button) => {
    button.addEventListener("click", () => confirmAdoptionButtonClicked());
  });

  // const cancelReservationButtons = document.querySelectorAll(
  //   ".cancel-reservation-button"
  // );

  // cancelReservationButtons.forEach((button) => {
  //   button.addEventListener("click", () => cancelReservationButtonClicked());
  // });

  const returnedToShelterButtons =
    document.querySelectorAll(".returned-button");
  returnedToShelterButtons.forEach((button) => {
    button.addEventListener("click", () => returnedToShelterButtonClicked());
  });
}

// document.addEventListener("DOMContentLoaded", () => makeHeartsClickable());

document.addEventListener("DOMContentLoaded", () => makeButtonsClickable());
