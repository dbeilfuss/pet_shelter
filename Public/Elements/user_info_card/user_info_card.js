// import { recordLoginToDatabase } from "/database.js";

function loginUser(card) {
  card.classList.add("selected");

  const userName = card.querySelector(".user-name").textContent;
  console.log(userName);
  markUserLoggedIn(userName);
}

function makeCardsClickable() {
  const userCards = document.querySelectorAll(".users-section");
  userCards.forEach((card) => {
    card.addEventListener("click", (event) => {
      console.log(event.target.closest(".user-card"));
      if (event.target.closest(".user-card")) {
        loginUser(event.target.closest(".user-card"));
      }
    });
  });
  console.log("cards are clickable");
}

// Add Event Listener
document.addEventListener("DOMContentLoaded", () => makeCardsClickable());

// Label the Logged in User TODO
