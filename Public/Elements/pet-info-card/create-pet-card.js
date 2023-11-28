export function createNewPetCard() {
  const newPetCard = `
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
    <div class="admin-pet-buttons">
      <input type="submit" name="save" value="Save" class="save-button" />
      <input type="submit" name="undo" value="Undo" class="reserve-button" />
      <input type="submit" name="delete" value="Delete" class="delete-button" />
    </div>
  </article>
</form>
`;
  return newPetCard;
}

export function createEditablePetCard() {
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
    <div class="admin-pet-buttons">
      <input type="submit" name="save" value="Save" class="save-button" />
      <input type="submit" name="undo" value="Undo" class="reserve-button" />
      <input type="submit" name="delete" value="Delete" class="delete-button" />
    </div>
  </article>
</form>
`;
  return editablePetCard;
}

export function createAvailablePetCard() {
  const availablePetCard = `
  <article class="pet-card">
  <header class="pet-header">
      <h2 class="pet-name">Bella</h2>
      <button class="favorite-button" aria-label="Favorite Bella">
          <span class="heart">❤</span>
      </button>
  </header>
  <img
  src="https://www.hartz.com/wp-content/uploads/2022/01/volunteer-at-animal-shelter-1.jpg"
  alt="Photo of Bella"
  class="pet-photo"
  />
  <p class="pet-breed">Mix: Pit Bull Terrier</p>
  <p class="pet-info">1 Yrs · Female · 30 Lbs</p>
  <div class="admin-pet-buttons">
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
</article>
`;
  return availablePetCard;
}

export function createReservedPetCard() {
  const reservedPetCard = `
  <article class="pet-card">
            <header class="pet-header">
                <h2 class="pet-name">Bella</h2>
                <button class="favorite-button" aria-label="Favorite Bella">
                    <span class="heart">❤</span>
                </button>
            </header>
            <img
            src="https://www.hartz.com/wp-content/uploads/2022/01/volunteer-at-animal-shelter-1.jpg"
            alt="Photo of Bella"
            class="pet-photo"
            />
            <p class="pet-breed">Mix: Pit Bull Terrier</p>
            <p class="pet-info">1 Yrs · Female · 30 Lbs</p>
            <div class="admin-pet-buttons">
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
            </div>
        </article>
`;
  return reservedPetCard;
}

export function createAdoptedPetCard() {
  const adoptedPetCard = `
  <article class="pet-card">
  <header class="pet-header">
      <h2 class="pet-name">Bella</h2>
      <button class="favorite-button" aria-label="Favorite Bella">
          <span class="heart">❤</span>
      </button>
  </header>
  <img
  src="https://www.hartz.com/wp-content/uploads/2022/01/volunteer-at-animal-shelter-1.jpg"
  alt="Photo of Bella"
  class="pet-photo"
  />
  <p class="pet-breed">Mix: Pit Bull Terrier</p>
  <p class="pet-info">1 Yrs · Female · 30 Lbs</p>
  <div class="admin-pet-buttons">
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
</article>
`;
  return adoptedPetCard;
}

export function createReservablePetCard(
  imageURL,
  name,
  breed,
  maleFemale,
  age,
  weight
) {
  const reservablePetCard = `
  <article class="pet-card">
  <header class="pet-header">
      <h2 class="pet-name">${name}</h2>
      <button class="favorite-button" aria-label="Favorite ${name}">
          <span class="heart">❤</span>
      </button>
  </header>
  <img
  src="${imageURL}"
  alt="Photo of ${name}"
  class="pet-photo"
  />
  <p class="pet-breed">${breed}</p>
  <p class="pet-info">${age} Yrs · ${maleFemale} · ${weight} Lbs</p>
  <div class="admin-pet-buttons">
      <input
      type="submit"
      name="reserve"
      value="Reserve Pet"
      class="reserve-button"
      />
  </div>
</article>
`;
  return reservablePetCard;
}
