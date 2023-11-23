function clearListOfPets() {
  const listOfPets = document.getElementById("list-of-pets");
  listOfPets.innerHTML = "";
}

function displayPets(filter) {
  selectedFilter = filter;
}

function displayAddPetForm() {}

function confirmDatabaseReset() {
  var confirmMessage =
    "Are you sure you want to do this? This will remove any changes you have made and reset the database to its default state by running the Seed File.";
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
document.querySelectorAll(".dropdown-menu a").forEach((item) => {
  item.addEventListener("click", function () {
    if (this.classList.contains("lookup-pets")) {
      clearListOfPets();
      displayPets(this.textContent);
    } else if (this.classList.contains("command")) {
      if (this.textContent === "+ Add") {
        clearListOfPets();
        displayAddPetForm();
      } else if (this.textContent === "! Reset Database") {
        resetDatabase();
      }
    }

    // Display Selection
    let selectedItemText = document.getElementById("selectedItem");
    selectedItemText.textContent = `${this.textContent} Pets`;

    // Hide the dropdown menu after a selection
    let dropdown = document.getElementById("dropdownMenu");
    dropdown.classList.remove("show");
  });
});
