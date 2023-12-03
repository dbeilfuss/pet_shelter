// import { isAdmin } from "../../database.js";

const mainHeader = `
<div class="identity-container">
  <a href="index.html" title="Admin Settings" class="nav-icon-link">
    <img
      src="Images/Pet_Shelter_Logo.png"
      alt="Keenesburg Animal Shelter Logo"
      class="logo"
    />
  </a>
  <h1 class="company-name">Keenesburg Animal Shelter</h1>
</div>

<nav class="navbar">
  <a href="view_all_pets.html" title="View All Pets" class="nav-icon-link">
    <div class="nav-icon-container" title="View All Pets">
      <img
        src="https://d29fhpw069ctt2.cloudfront.net/icon/image/39024/preview.png"
        alt="View all Pets"
        class="nav-icon"
      />
    </div>
  </a>
  <a href="login.html" title="View All Pets" class="nav-icon-link">
    <div class="nav-icon-container" title="User Profiles">
      <img
        src="https://static.thenounproject.com/png/665436-200.png"
        alt="User Profile"
        class="nav-icon"
      />
    </div>
  </a>
  `;

const adminLink = `<a href="admin.html" title="Admin Settings" class="nav-icon-link">
<div class="nav-icon-container" title="Admin Settings">
  <img
    src="https://cdn-icons-png.flaticon.com/512/0/128.png"
    alt="Admin Settings"
    class="nav-icon"
  />
</div>
</a>`;

const closing = `</nav>`;

function getHeaderHTML(includeAdminLink) {
  let headerHTML = mainHeader;
  if (includeAdminLink) {
    headerHTML += adminLink;
  }
  headerHTML += closing;
  return headerHTML;
}

function displayHeader() {
  let userIsAdmin = isAdmin();
  let headerHTML = getHeaderHTML(userIsAdmin);

  const headerSection = document.querySelector(".main-header");
  headerSection.innerHTML = headerHTML;
}

// Initial Load of Screen
document.addEventListener("DOMContentLoaded", () => {
  displayHeader();
});
