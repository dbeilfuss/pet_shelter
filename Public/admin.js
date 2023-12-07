// Database Reset
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
    seedDatabase();
  }
}

// Event handler for Hamburger menu items
document.querySelector(".dropdown-menu").addEventListener("click", (event) => {
  const selectedClassList = event.target.classList;
  const selectedText = event.target.textContent;

  if (event.target.tagName === "A") {
    if (selectedClassList.contains("lookup-pets")) {
      getFilteredPets(selectedText, (petsList) => {
        displayPetsCallback(petsList, false, selectedText);
      });
    } else if (selectedClassList.contains("command")) {
      if (selectedText === "+ Add") {
        console.log("command confirmed");
        clearListOfPets();
        const petData = {
          petID: "",
          imageURL: "",
          name: "",
          breed: "",
          maleFemale: "",
          age: "",
          weight: "",
        };

        createEditablePetCard(petData);
      } else if (selectedText === "! Reset Database") {
        resetDatabase();
      }
    }
  }
});
