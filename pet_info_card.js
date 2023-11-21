document.addEventListener("DOMContentLoaded", function () {
  const favoriteButtons = document.querySelectorAll(".favorite-button");
  favoriteButtons.forEach((button) => {
    button.addEventListener("click", function () {
      this.classList.toggle("favorited");
      this.querySelector(".heart").classList.toggle("favorited");
    });
  });
});
