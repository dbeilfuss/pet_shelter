// import { recordLoginToDatabase } from "/database.js";

function loginUser(card) {
  card.classList.add("selected");

  const userID = card.dataset.userid;
  recordLoginToDatabase(userID, () => location.reload());
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
