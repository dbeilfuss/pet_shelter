function newUser() {
  function promptForUsername() {
    let username = prompt("Enter New Username - Maximum 8 characters:");
    while (username && username.length > 8) {
      alert("Username must be 8 characters or less.");
      username = prompt("Enter New Username - Maximum 8 characters:");
    }
    return username; // Will be null if the user cancels the prompt
  }

  let newUsername = promptForUsername();
  if (newUsername) {
    postNewUser(newUsername, () => location.reload());
  }
}

function loginUser(card) {
  card.classList.add("selected");

  const userID = card.dataset.userid;
  if (userID !== "null") {
    recordLoginToDatabase(userID, () => location.reload());
  } else {
    newUser();
  }
}

function makeCardsClickable() {
  const userCards = document.querySelectorAll(".users-section");
  userCards.forEach((card) => {
    card.addEventListener("click", (event) => {
      if (event.target.closest(".user-card")) {
        loginUser(event.target.closest(".user-card"));
      }
    });
  });
}

// Add Event Listener
document.addEventListener("DOMContentLoaded", () => makeCardsClickable());
