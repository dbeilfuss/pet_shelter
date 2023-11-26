export function makeHeartsClickable() {
  const favoriteButtons = document.querySelectorAll(".favorite-button");
  favoriteButtons.forEach((button) => {
    button.addEventListener("click", function () {
      this.classList.toggle("favorited");
      this.querySelector(".heart").classList.toggle("favorited");
    });
  });
}

export function makeButtonsClickable() {}

document.addEventListener("DOMContentLoaded", makeHeartsClickable());
document.addEventListener("DOMContentLoaded", makeButtonsClickable());
