import { getAllUsers } from "/database.js";

export function createUserCard(imageURL, name, userType) {
  let userCard = `
  <article class="${userType}user-card">
    <header class="${userType}-user-header">
        <h2 class="user-name">${name}</h2>
    </header>
    <img
      src="${imageURL}"
      alt="Photo of ${name}"
      class="user-photo"
    />
  </article>`;

  return petCard;
}

export function createNewUserCard(userType) {
  const newPetCard = `
<form id="new-${userType}-user-form">
  <article class="${userType}-user-card">
    <header class="${userType}-user-header">
      <input
        type="text"
        name="name"
        value=""
        placeholder="User Name"
        class="user-name-input"
      />
    </header>
    <div class="card-button-section">
      <input type="submit" name="save" value="Save" class="save-button" />
      <input type="submit" name="delete" value="Delete" class="delete-button" />
    </div>
  </article>
</form>
`;
  return newPetCard;
}

function clearListOfUsers() {
  const listOfPets = document.getElementById("list-of-pets");
  if (listOfPets) {
    listOfPets.innerHTML = "";
  }
}

function displayUsers(filter) {
  clearListOfPets();

  let listOfPetsSection = document.getElementById("list-of-users");

  // create user cards
  let userCards = "";

  for (const user of usersList) {
    let card = createPetCard(
      user.imageURL,
      user.Name,
      user.Breed,
      user.MaleFemale,
      user.Age,
      user.Weight,
      filter
    );
    userCards += card;
  }

  listOfUsersSection.innerHTML = userCards;
  makeButtonsClickable();
}

export function displayAddPetCard() {
  const listOfPets = document.getElementById("list-of-pets");
  const newPetCard = createNewPetCard();
  listOfPets.innerHTML = newPetCard;
}

// Initial Load of Screen
document.addEventListener("DOMContentLoaded", () => {
  displayPets("Available");
});
