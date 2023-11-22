// Function to toggle the dropdown menu
function toggleMenu() {
  var dropdown = document.getElementById("dropdownMenu");
  dropdown.classList.toggle("show");
}

// Event handler for dropdown menu items
document.querySelectorAll(".dropdown-menu a").forEach((item) => {
  item.addEventListener("click", function () {
    // Get the element where you want to display the selected item text
    var selectedItemText = document.getElementById("selectedItem");

    // Set the text content of that element to the clicked item's text
    selectedItemText.textContent = this.textContent;

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
