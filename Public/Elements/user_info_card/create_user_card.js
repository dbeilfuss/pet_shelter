function createUserCard(userID, imageURL, name, is_admin, currentUser) {
  const userType = is_admin ? "admin" : "standard";
  let userCard = `<article class="user-card ${userType}-user-card `;

  if (name === currentUser) {
    userCard += ` selected`;
  }

  userCard += `" data-userid="${userID}">
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

async function displayUsers() {
  let adminUsersList = "";
  let standardUsersList = "";
  let currentUser = "";

  async function getUserInfo() {
    await getUserList("admin", (userList) => (adminUsersList = userList));
    await getUserList("standard", (userList) => (standardUsersList = userList));
    await getCurrentUser((userData) => (currentUser = userData[0].name));
  }

  await getUserInfo();

  // create user cards
  let adminUserCards = "";
  let standardUserCards = "";

  for (const user of adminUsersList) {
    let imageURL =
      "https://icons.iconarchive.com/icons/fa-team/fontawesome/512/FontAwesome-User-Gear-icon.png";
    const { id, name, is_admin } = user;

    let card = createUserCard(id, imageURL, name, is_admin, currentUser);
    adminUserCards += card;
  }

  for (const user of standardUsersList) {
    let imageURL = "https://cdn-icons-png.flaticon.com/512/9131/9131478.png";
    const { id, name, is_admin } = user;
    let card = createUserCard(id, imageURL, name, is_admin, currentUser);
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
