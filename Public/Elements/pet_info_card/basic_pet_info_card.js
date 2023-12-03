function makeHeartsClickable() {
  const favoriteButtons = document.querySelectorAll(".favorite-button");

  favoriteButtons.forEach((button) => {
    button.addEventListener("click", function () {
      this.classList.toggle("favorited");
      this.querySelector(".heart").classList.toggle("favorited");
    });
  });
}

function reserveButtonClicked() {
  console.log("Reserve button");
}

function makeButtonsClickable() {
  const reserveButtons = document.querySelectorAll(".reserve-button");
  reserveButtons.forEach((button) => {
    button.addEventListener("click", () => reserveButtonClicked());
  });
}

document.addEventListener("DOMContentLoaded", () => makeHeartsClickable());

document.addEventListener("DOMContentLoaded", () => makeButtonsClickable());
