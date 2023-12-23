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

    // make the browser back-button refresh the current page.
    window.onpopstate = function (event) {
      // Refresh the current page.
      window.location.reload();
    };

    // Push the current state into the history
    history.pushState({}, "");
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
    let clickedButton;
    let articleElement;

    // Check if the editPetForm exists
    const form = document.getElementById("editPetForm");
    if (form) {
      petID = form.querySelector("input[name='id']").value;
    } else {
      // If the form doesn't exist, use the closest pet-card element
      clickedButton = event.target;
      articleElement = clickedButton.closest(".pet-card");
      petID = articleElement.dataset.petid;
    }

    deletePet(petID, () => {
      const messageSection = document.querySelector(".selected-item");
      messageSection.innerHTML = "Pet deleted successfully";
      articleElement ? articleElement.remove() : clearListOfPets();
    });
  }
}

function cancelButtonClicked() {
  console.log("Cancel button");
  location.reload();
}

function confirmAdoptionButtonClicked(event) {
  // Identify the petID and the articleElement
  const clickedButton = event.target;
  const articleElement = clickedButton.closest(".pet-card");
  let petID = articleElement.dataset.petid;

  // Show confirmation dialog
  const confirmMessage = "This pet has been officially adopted?";
  const adoptedConfirmation = confirm(confirmMessage);
  if (adoptedConfirmation) {
    // Cancelation confirmed, communicate with server
    adoptPet(petID, () => {
      // Remove the articleElement from the DOM on successful cancelation
      articleElement.remove();
    });
  } else {
    // User cancelled, do nothing
    console.log("Reservation cancelled");
  }
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

function returnedToShelterButtonClicked(event) {
  // Identify the petID and the articleElement
  const clickedButton = event.target;
  const articleElement = clickedButton.closest(".pet-card");
  let petID = articleElement.dataset.petid;

  // Show confirmation dialog
  const confirmMessage = "This pet has been returned?";
  const returnConfirmation = confirm(confirmMessage);
  if (returnConfirmation) {
    // Cancelation confirmed, communicate with server
    returnToShelter(petID, () => {
      // Remove the articleElement from the DOM on successful cancelation
      articleElement.remove();
    });
  } else {
    // User cancelled, do nothing
    console.log("Return cancelled");
  }
}
