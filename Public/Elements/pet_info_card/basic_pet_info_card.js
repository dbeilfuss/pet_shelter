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

function reserveButtonClicked(event) {
  console.log("Reserve button");

  // Identify the petID and the articleElement
  const clickedButton = event.target;
  const articleElement = clickedButton.closest(".pet-card");
  let petID = articleElement.dataset.petid;
  console.log(`PetID: ${petID}`);

  // Show confirmation dialog
  const confirmMessage =
    "Your new pet is about to be reserved! Please stop by in the next 24 hours to pick them up.\n\n" +
    "Remember: Bring $50 to cover the cost of vaccinations.\n\n" +
    "Are you sure you’d like to reserve this Pet?";
  const confirmReservation = confirm(confirmMessage);
  if (confirmReservation) {
    // User confirmed, communicate with server
    reservePet(petID, "", () => {
      // Remove the articleElement from the DOM on successful reservation
      articleElement.remove();
    });
  } else {
    // User cancelled, do nothing
    console.log("Reservation cancelled");
  }
}
