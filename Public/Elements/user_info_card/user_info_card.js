// import { recordLoginToDatabase } from "/database.js";

function loginUser(card) {
  card.classList.add("selected");

  const userName = card.querySelector(".user-name").textContent;
  recordLoginToDatabase(userName);
  location.reload();
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

// Label the Logged in User TODO
