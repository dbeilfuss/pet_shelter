// Function to toggle the dropdown menu
function toggleMenu() {
  var dropdown = document.getElementById("dropdownMenu");
  dropdown.classList.toggle("show");
}

// Event handler for dropdown menu items
document.querySelectorAll(".dropdown-menu a").forEach((item) => {
  item.addEventListener("click", function () {
    // Display Selection
    var selectedItemText = document.getElementById("selectedItem");
    selectedItemText.textContent = `${this.textContent} Pets`;

    // Hide the dropdown menu after a selection
    var dropdown = document.getElementById("dropdownMenu");
    dropdown.classList.remove("show");
  });
});

// Close the dropdown when clicking outside of it
window.onclick = function (event) {
  if (!event.target.matches(".hamburger-menu")) {
    var dropdowns = document.getElementsByClassName("dropdown-menu");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};
