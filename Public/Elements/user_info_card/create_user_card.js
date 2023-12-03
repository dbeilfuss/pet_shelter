// import { getAdminUsers, getStandardUsers, getCurrentUser } from "/database.js";

// const currentUser = getCurrentUser();

function createUserCard(imageURL, name, userType) {
  let userCard = `<article class="user-card ${userType}-user-card `;

  if (name === currentUser) {
    userCard += ` selected`;
  }

  userCard += `">
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

function displayUsers() {
  const adminList = getAdminUsers();
  const standardUserList = getStandardUsers();

  // create user cards
  let adminUserCards = "";
  let standardUserCards = "";

  for (const user of adminList) {
    let imageURL =
      "https://icons.iconarchive.com/icons/fa-team/fontawesome/512/FontAwesome-User-Gear-icon.png";
    let name = user.Name;
    let userType = user.UserType;
    let card = createUserCard(imageURL, name, userType);
    adminUserCards += card;
  }

  for (const user of standardUserList) {
    let imageURL = "https://cdn-icons-png.flaticon.com/512/9131/9131478.png";
    let name = user.Name;
    let userType = user.UserType;
    let card = createUserCard(imageURL, name, userType);
    standardUserCards += card;
  }

  // Add User Cards to DOM
  const listOfAdminsSection = document.getElementById("admin-section");
  const listOfStandardUsersSection = document.getElementById(
    "standard-users-section"
  );
  listOfAdminsSection.innerHTML = adminUserCards;
  listOfStandardUsersSection.innerHTML = standardUserCards;
}

// Initial Load of Screen
document.addEventListener("DOMContentLoaded", () => {
  displayUsers();
});
