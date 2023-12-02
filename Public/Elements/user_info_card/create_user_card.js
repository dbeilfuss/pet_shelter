import { getAdminUsers, getStandardUsers } from "/database.js";

export function createUserCard(imageURL, name, userType) {
  let userCard = `
  <article class="user-card" class="${userType}-user-card">
    <header class="${userType}-user-header">
        <h2 class="user-name">${name}</h2>
    </header>
    <img
      src="${imageURL}"
      alt="Photo of ${name}"
      class="user-photo"
    />
  </article>`;

  return userCard;
}

export function createNewUserCard(userType) {
  const newUserCard = `
<form id="new-${userType}-user-form">
  <article class="user-card" class="${userType}-user-card">
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
  return newUserCard;
}

function clearListOfUsers() {
  const listOfAdminsSection = document.getElementById("admin-section");
  const listOfStandardUsersSection = document.getElementById("admin-section");
  listOfAdminsSection.innerHTML = "";
  listOfStandardUsersSection.innerHTML = "";
}

function displayUsers() {
  const adminList = getAdminUsers();
  const standardUserList = getStandardUsers();

  console.log(adminList, standardUserList);

  clearListOfUsers();

  // create user cards
  let adminUserCards = "";
  let standardUserCards = "";

  for (const user of adminList) {
    let imageURL =
      "https://icons.iconarchive.com/icons/fa-team/fontawesome/512/FontAwesome-User-Gear-icon.png";
    let name = user.Name;
    let userType = user.Type;
    let card = createUserCard(imageURL, name, userType);
    adminUserCards += card;
  }

  for (const user of standardUserList) {
    let imageURL = "https://cdn-icons-png.flaticon.com/512/9131/9131478.png";
    let name = user.Name;
    let userType = user.Type;
    let card = createUserCard(imageURL, name, userType);
    standardUserCards += card;
  }

  const listOfAdminsSection = document.getElementById("admin-section");
  const listOfStandardUsersSection = document.getElementById(
    "standard-users-section"
  );
  listOfAdminsSection.innerHTML = adminUserCards;
  listOfStandardUsersSection.innerHTML = standardUserCards;

  // makeButtonsClickable();
}

export function displayAddUserCard() {
  const listOfPets = document.getElementById("users-section");
  const newUserCard = createNewUserCard();
  listOfPets.innerHTML = newUserCard;
}

// Initial Load of Screen
document.addEventListener("DOMContentLoaded", () => {
  displayUsers("Available");
});
