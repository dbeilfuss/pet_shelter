// Card Templates //
function createPetCard(
  petID,
  imageURL,
  name,
  breed,
  maleFemale,
  age,
  weight,
  cardType
) {
  let petCard = `
  <article class="pet-card petID-${petID}">
  <header class="pet-header">
      <h2 class="pet-name">${name}</h2>
      `;
  if (cardType === "basic" || cardType === "reservable") {
    petCard += `
      <button class="favorite-button" aria-label="Favorite ${name}">
        <span class="heart"></span>
      </button>

`;
    // petCard += `
    // <button class="favorite-button" aria-label="Favorite ${name}">
    // <span class="heart">❤</span>
    // </button>
    // `;
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
              type="submit"
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
            type="submit"
            name="edit"
            value="Edit"
            class="edit-button"
            />
            <input
            type="submit"
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
            type="submit"
            name="confirm"
            value="Confirm Adoption"
            class="confirm-adoption-button"
            />
            <input
            type="submit"
            name="cancel"
            value="Cancel Reservation"
            class="cancel-reservation-button"
            />
            <p class="pet-info">Reserved by Nitin Misra</p>
          </div>
        </article>`;
      break;

    case "Adopted":
      petCard += `<div class="card-button-section">
            <input
            type="submit"
            name="returned"
            value="Returned to Shelter"
            class="returned-button"
            />
            <input
            type="submit"
            name="delete"
            value="Delete"
            class="delete-button"
            />
          </div>
          <p class="pet-info">Adopted by Noah</p>

        </article>`;
      break;

    default:
      petCard = "<p>Error Loading Pets</p>";
  }

  return petCard;
}

function createNewPetCard() {
  const newPetCard = `
<form id="editPetForm" class="edit-pet-form">
  <article class="pet-card">
    <header class="pet-header">
      <input
        type="text"
        name="name"
        value=""
        placeholder="Pet Name"
        class="pet-name-input"
      />
    </header>
    <img
      src=""
      alt=""
      class="pet-photo"
    />
    <div class="pet-form-details">
      <input
        type="text"
        name="imageURL"
        value=""
        placeholder="Image URL"
        class="pet-image-url-input"
      />
      <input
        type="text"
        name="breed"
        value=""
        placeholder="Breed"
        class="pet-breed-input"
      />
      <input
        type="text"
        name="age"
        value=""
        placeholder="Age in Years"
        class="pet-age-input"
      />
      <input
        type="text"
        name="sex"
        value=""
        placeholder="Male / Female"
        class="pet-sex-input"
      />
      <input
        type="text"
        name="weight"
        value=""
        placeholder="Weight in Lbs"
        class="pet-weight-input"
      />
    </div>
    <div class="card-button-section">
      <input type="submit" name="save" value="Save" class="save-button" />
      <input type="submit" name="undo" value="Undo" class="reserve-button" />
      <input type="submit" name="delete" value="Delete" class="delete-button" />
    </div>
  </article>
</form>
`;
  return newPetCard;
}

function createEditablePetCard() {
  const editablePetCard = `
<form id="editPetForm" class="edit-pet-form">
  <article class="pet-card">
    <header class="pet-header">
      <input
        type="text"
        name="name"
        value="Bella"
        placeholder="Pet Name"
        class="pet-name-input"
      />
    </header>
    <img
      src="https://www.hartz.com/wp-content/uploads/2022/01/volunteer-at-animal-shelter-1.jpg"
      alt=""
      class="pet-photo"
    />
    <div class="pet-form-details">
      <input
        type="text"
        name="imageURL"
        value="https://www.hartz.com/wp-content/uploads/2022/01/volunteer-at-animal-shelter-1.jpg"
        placeholder="Image URL"
        class="pet-image-url-input"
      />
      <input
        type="text"
        name="breed"
        value="Mix: Pit Bull Terrier"
        placeholder="Breed: ie Mix: Pit Bull Terrier"
        class="pet-breed-input"
      />
      <input
        type="text"
        name="age"
        value="1"
        placeholder="Age in Years"
        class="pet-age-input"
      />
      <input
        type="text"
        name="sex"
        value="Female"
        placeholder="Male / Female"
        class="pet-sex-input"
      />
      <input
        type="text"
        name="weight"
        value="35"
        placeholder="Weight in Lbs"
        class="pet-weight-input"
      />
    </div>
    <div class="card-button-section">
      <input type="submit" name="save" value="Save" class="save-button" />
      <input type="submit" name="undo" value="Undo" class="reserve-button" />
      <input type="submit" name="delete" value="Delete" class="delete-button" />
    </div>
  </article>
</form>
`;
  return editablePetCard;
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
      filter
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
    getAllPets((petsList) => {
      displayPetsCallback(petsList, false, filter);
    });
  }
}

function displayAddPetCard() {
  const listOfPets = document.getElementById("list-of-pets");
  const newPetCard = createNewPetCard();
  listOfPets.innerHTML = newPetCard;
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
