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

  // Identify the articleElement, petID, and petName
  const clickedButton = event.target;
  const articleElement = clickedButton.closest(".pet-card");
  let petID = articleElement.dataset.petid;
  let headerElement = articleElement.querySelector(".pet-name");
  let petName = headerElement.textContent;
  console.log(`PetID: ${petID}; petName: ${petName}`);

  // Show confirmation dialog
  const confirmMessage =
    `We will let ${petName} know that you are coming!  They will be very excited to meet you!\n\n` +
    "Please stop by our shelter by 5pm tomorrow pick them up.\n\n" +
    "If you change your mind, please call us and let us know.\n\n" +
    `Please understand, if we do not hear from you by 5pm tomorrow, ${petName} will be made available to be offered to another home.\n\n` +
    `Are you sure you’d like to reserve ${petName}?`;
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
