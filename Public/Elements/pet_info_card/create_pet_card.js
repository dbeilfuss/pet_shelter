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
  isFavorite
) {
  let petCard = `
  <article class="pet-card" data-petid="${petID}">
  <header class="pet-header">
      <h2 class="pet-name">${name}</h2>
      `;

  if (cardType === "basic" || cardType === "reservable") {
    const favoritedClass = isFavorite ? " favorited" : "";

    petCard += `
      <button class="favorite-button${favoritedClass}" aria-label="Favorite ${name}">
        <span class="heart${favoritedClass}"></span>
      </button>
      `;
  }

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

  switch (cardType) {
    case "basic":
      petCard += `</article>`;
      break;

    case "reservable":
      petCard += `<div class="card-button-section">
              <input
              type="button"
              name="reserve"
              value="Reserve Pet"
              class="reserve-button"
              />
          </div>
        </article>`;
      break;

    case "Available":
      petCard += `<div class="card-button-section">
            <input
            type="button"
            name="edit"
            value="Edit"
            class="edit-button"
            />
            <input
            type="button"
            name="reserve"
            value="Reserve"
            class="reserve-button"
            />
          </div>
        </article>`;
      break;

    case "Reserved":
      petCard += `<div class="card-button-section">
            <input
            type="button"
            name="confirm"
            value="Confirm Adoption"
            class="confirm-adoption-button"
            />
            <input
            type="button"
            name="cancel"
            value="Cancel Reservation"
            class="cancel-reservation-button"
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
      />
      <input
        type="text"
        name="age"
        value="${petData.age}"
        placeholder="Age in Years"
        class="pet-age-input"
      />
      <input
        type="text"
        name="sex"
        value="${petData.maleFemale}"
        placeholder="Male / Female"
        class="pet-sex-input"
      />
      <input
        type="text"
        name="weight"
        value="${petData.weight}"
        placeholder="Weight in Lbs"
        class="pet-weight-input"
      />
    </div>
    <div class="card-button-section">
      <input type="submit" name="save" value="Save" class="save-button" />
      <input type="button" name="cancel" value="Cancel" class="cancel-button" />
      <input type="button" name="delete" value="Delete" class="delete-button" onclick="deleteButtonClicked()" />
    </div>
  </article>
</form>
`;

  const petsSection = document.getElementById("list-of-pets");
  petsSection.innerHTML = editablePetCard;

  makeButtonsClickable();
}

function clearListOfPets() {
  const listOfPets = document.getElementById("list-of-pets");
  if (listOfPets) {
    listOfPets.innerHTML = "";
  }
}

function availableSpace() {
  // set the number of cards based on the width of the screen
  const screenWidth = window.innerWidth;
  const cardWidth = 290;

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
      pet.isFavorite
    );
    petCards += card;
  }

  listOfPetsSection.innerHTML = petCards;
  makeHeartsClickable();
  makeButtonsClickable();
}

function displayPets(filter) {
  clearListOfPets();

  let listOfPetsSection = document.getElementById("list-of-pets");
  const isShortSection = listOfPetsSection.classList.contains("short");

  // adjust variables for a short section
  if (isShortSection) {
    const numberOfCards = availableSpace();
    getSamplePets(numberOfCards);
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
