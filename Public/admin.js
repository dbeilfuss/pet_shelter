import {
  createNewPetCard,
  createEditablePetCard,
} from "/Elements/pet-info-card/create-pet-card.js";

function clearListOfPets() {
  const listOfPets = document.getElementById("list-of-pets");
  listOfPets.innerHTML = "";
}

function displayPets(filter) {}

function displayAddPetCard() {
  const listOfPets = document.getElementById("list-of-pets");
  const newPetCard = createNewPetCard();
  listOfPets.innerHTML = newPetCard;
}

function confirmDatabaseReset() {
  var confirmMessage =
    "Are you sure you want to do this? This will run the seed file - which will remove any changes you have made and reset the database to its default state.  This CANNOT BE UNDONE!";
  if (confirm(confirmMessage)) {
    return true;
  } else {
    return false;
  }
}

function resetDatabase() {
  if (confirmDatabaseReset()) {
    console.log("Resetting Database");
    // TODO Run Seed File
  } else {
    location.reload();
  }
}

// Event handler for dropdown menu items
document
  .querySelector(".dropdown-menu")
  .addEventListener("click", function (event) {
    // Check if the clicked element is a link
    if (event.target.tagName === "A") {
      if (event.target.classList.contains("lookup-pets")) {
        clearListOfPets();
        displayPets(event.target.textContent);
      } else if (event.target.classList.contains("command")) {
        console.log("command confirmed");
        if (event.target.textContent === "+ Add") {
          clearListOfPets();
          displayAddPetCard();
        } else if (event.target.textContent === "! Reset Database") {
          resetDatabase();
        }
      }
    }
  });
