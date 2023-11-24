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
  return newPetCard;
}

export function createAvailablePetCard() {
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
  return newPetCard;
}
