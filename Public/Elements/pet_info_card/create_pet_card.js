function createPetCard(
  petID,
  imageURL,
  name,
  breed,
  maleFemale,
  age,
  weight,
  human,
  cardType,
  isFavorite,
  isReserved
) {
  let petCard =
    // Card Header
    `
  <article class="pet-card" data-petid="${petID}">
  <header class="pet-header">
      <h2 class="pet-name">${name}</h2>
      `;

  // Hearts
  if (cardType === "basic" || cardType === "reservable") {
    const favoritedClass = isFavorite ? " favorited" : "";

    petCard += `
    <button class="favorite-button${favoritedClass}" aria-label="Favorite ${name}">
        <span class="heart${favoritedClass}" onclick="heartClicked(event)"></span>
      </button>
      `;
  }

  // Pet Details
  petCard += `
  </header>
  <img
    src="${imageURL}"
    alt="Photo of ${name}"
    class="pet-photo"
  />
  <p class="pet-breed">${breed}</p>
  <p class="pet-info">${age} Yrs · ${maleFemale} · ${weight} Lbs</p>
`;

  // Buttons - Differ based on card type
  switch (cardType) {
    case "basic":
      petCard += `</article>`;
      break;

    case "reservable":
      const buttonDetails = {
        value: isReserved ? "Reserved" : "Reserve Pet",
        class: isReserved ? "is-reserved" : "",
        action: isReserved ? "" : "reserveButtonClicked(event)",
      };

      petCard += `<div class="card-button-section">
          <input
            type="button"
            name="reserve"
            value="${buttonDetails.value}"
            class="reserve-button ${buttonDetails.class}"
            onclick="${buttonDetails.action}"
            />
          </div>
        </article>`;
      break;

    case "Available":
      if (!isReserved) {
        petCard += `<div class="card-button-section">
            <input
              type="button"
              name="edit"
              value="Edit"
              class="edit-button"
              onclick="editButtonClicked(event)"
            />
            <input
              type="button"
              name="reserve"
              value="Reserve"
              class="reserve-button"
              onclick="reserveButtonClicked(event)"
              />
          </div>
        </article>`;
      } else {
        petCard = "";
      }
      break;

    case "Reserved":
      petCard += `<div class="card-button-section">
            <input
            type="button"
            name="confirm"
            value="Confirm Adoption"
            class="confirm-adoption-button"
            onclick="confirmAdoptionButtonClicked(event)"
            />
            <input
            type="button"
            name="cancel"
            value="Cancel Reservation"
            class="cancel-reservation-button"
            onclick="cancelReservationButtonClicked(event)"
            />
            <p class="pet-info">Reserved by ${human}</p>
          </div>
        </article>`;
      break;

    case "Adopted":
      petCard += `<div class="card-button-section">
            <input
            type="button"
            name="returned"
            value="Returned to Shelter"
            class="returned-button"
            onclick="returnedToShelterButtonClicked(event)"
            />
            <input
            type="button"
            name="delete"
            value="Delete"
            class="delete-button"
            onclick="deleteButtonClicked(event)"
            />
          </div>
          <p class="pet-info">Adopted by ${human}</p>

        </article>`;
      break;

    default:
      petCard = "<p>Error Loading Pets</p>";
      console.log("Card type not recognized");
  }

  return petCard;
}

// Specialized Card for Editing Pets or Adding New Pets
function createEditablePetCard(petData) {
  const editablePetCard = `
<form id="editPetForm" class="edit-pet-form">
  <article class="pet-card">
    <input type="hidden" name="id" value="${petData.petID}">
    <header class="pet-header">
      <input
        type="text"
        name="name"
        value="${petData.name}"
        placeholder="Pet Name"
        class="pet-name-input"
        required
        maxlength="30"
      />
    </header>
    <img
      src="${petData.imageURL}"
      alt=""
      class="pet-photo"
    />
    <div class="pet-form-details">
      <input
        type="text"
        name="imageURL"
        value="${petData.imageURL}"
        placeholder="Image URL"
        class="pet-image-url-input"
      />
      <input
        type="text"
        name="breed"
        value="${petData.breed}"
        placeholder="Breed: i.e. German Shepher Mix"
        class="pet-breed-input"
        required
        maxlength="30"
      />
      <input
        type="number"
        name="age"
        value="${petData.age}"
        placeholder="Age in Years"
        class="pet-age-input"
        min="0"
        max="99"
        required
      />
      <select name="sex" class="pet-sex-input" required>
        <option value="Male" ${
          petData.maleFemale === "Male" ? "selected" : ""
        }>Male
        </option>
        <option value="Female" ${
          petData.maleFemale === "Female" ? "selected" : ""
        }>Female
        </option>
      </select>
      <input
        type="number"
        name="weight"
        value="${petData.weight}"
        placeholder="Weight in Lbs"
        class="pet-weight-input"
        min="0"
        max="500"
        required
      />
    </div>
    <div class="card-button-section">
      <input type="submit" name="save" value="Save" class="save-button" 
      onclick="saveButtonClicked(event)"
      />
      <input type="button" name="cancel" value="Cancel" class="cancel-button" 
      onclick="cancelButtonClicked(event)"
      />
      <input type="button" name="delete" value="Delete" class="delete-button" onclick="deleteButtonClicked()" />
    </div>
  </article>
</form>
`;

  const petsSection = document.getElementById("list-of-pets");
  petsSection.innerHTML = editablePetCard;
}

function makePhotosClickable() {
  // Get the modal elements
  var modal = document.getElementById("photoModal");
  var modalImg = document.getElementById("enlargedPhoto");
  var closeModal = document.getElementById("closeModal");

  // Add click event to each pet photo
  document.querySelectorAll(".pet-photo").forEach((img) => {
    img.addEventListener("click", function () {
      modalImg.src = this.src;
      modal.style.display = "block";
    });

    // Additionally listen for touch events
    modal.addEventListener("touchstart", function (event) {
      if (event.target == modal) {
        closeModalFunction();
      }
    });
  });

  // Close the modal when the close button is clicked
  closeModal.onclick = function () {
    modal.style.display = "none";
  };

  // Optional: Close the modal if clicked outside the image
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
}

function clearListOfPets() {
  const listOfPets = document.getElementById("list-of-pets");
  if (listOfPets) {
    listOfPets.innerHTML = "";
  }
}

// set the number of cards based on the width of the screen
function availableSpace() {
  const screenWidth = window.innerWidth;
  const cardWidth = 285;

  let numberOfCards = Math.floor(screenWidth / cardWidth);

  return numberOfCards;
}

function displayPetsCallback(petsList, isShortSection, filter) {
  let listOfPetsSection = document.getElementById("list-of-pets");

  if (isShortSection) {
    filter = "basic";
  }

  // create pet cards
  let petCards = "";

  for (const pet of petsList) {
    let card = createPetCard(
      pet.id,
      pet.image_url,
      pet.name,
      pet.breed,
      pet.sex,
      pet.age,
      pet.weight,
      pet.adopted_by,
      filter,
      pet.isFavorite,
      pet.is_reserved
    );
    petCards += card;
  }

  listOfPetsSection.innerHTML = petCards;

  makePhotosClickable();
}

function displayPets(filter) {
  clearListOfPets();

  let listOfPetsSection = document.getElementById("list-of-pets");
  const isShortSection = listOfPetsSection.classList.contains("short");

  // adjust variables for a short section
  if (isShortSection) {
    const numberOfCards = availableSpace();
    getSamplePets(numberOfCards, (petsList) => {
      displayPetsCallback(petsList, true, filter);
    });
  } else {
    getFilteredPets("Available", (petsList) => {
      displayPetsCallback(petsList, false, filter);
    });
  }
}

// Initial Load of Screen
document.addEventListener("DOMContentLoaded", () => {
  const listOfPets = document.getElementById("list-of-pets");
  if (listOfPets.classList.contains("admin")) {
    displayPets("Available");
  } else {
    displayPets("reservable");
  }
});
