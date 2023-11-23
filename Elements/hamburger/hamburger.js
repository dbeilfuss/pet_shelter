// Function to toggle the dropdown menu
function toggleMenu() {
  let dropdown = document.getElementById("dropdownMenu");
  dropdown.classList.toggle("show");
}

function displaySelection() {
  let selectedItemText = document.getElementById("selectedItem");
  selectedItemText.textContent = `${this.textContent} Pets`;
}

// Event handler for dropdown menu items
document.querySelectorAll(".dropdown-menu a").forEach((item) => {
  item.addEventListener("click", function () {
    displaySelection();
    // Hide the dropdown menu after a selection
    let dropdown = document.getElementById("dropdownMenu");
    dropdown.classList.remove("show");
  });
});

// Close the dropdown when clicking outside of it
window.onclick = function (event) {
  if (!event.target.matches(".hamburger-menu")) {
    let dropdowns = document.getElementsByClassName("dropdown-menu");
    for (let i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};
