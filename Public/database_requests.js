// const baseURL = `http://localhost:8000/api`;
const baseURL = `./api`;

function getAllPets(callback) {
  const requestURL = `${baseURL}/getAllPets`;
  console.log(requestURL);

  axios
    .get(requestURL)
    .then((res) => {
      console.log(res.data);
      callback(res.data);
    })
    .catch((err) => {
      const messageSection = document.querySelector(".selected-item");
      messageSection.innerHTML = "Error Loading Pets";
      console.log(err);
    });
}

function getFilteredPets(filter, callback) {
  const requestURL = `${baseURL}/getFilteredPets?filter=${filter}`;
  console.log(requestURL);

  axios
    .get(requestURL)
    .then((res) => {
      console.log(res.data);
      callback(res.data);
    })
    .catch((err) => {
      const messageSection = document.querySelector(".selected-item");
      messageSection.innerHTML = "Error Loading Filtered Pets";
      console.log(err);
    });
}

function getPetInfo(petID, callback) {
  const requestURL = `${baseURL}/getPetInfo?petID=${petID}`;
  console.log(requestURL);

  axios
    .get(requestURL)
    .then((res) => {
      console.log(res.data);
      callback(res.data);
    })
    .catch((err) => {
      const messageSection = document.querySelector(".selected-item");
      messageSection.innerHTML = "Error Loading Pet";
      console.log(err);
    });
}

function updatePet(petData, callback) {
  const { id, name, imageURL, breed, age, sex, weight } = petData;
  const requestURL = `${baseURL}/updatePet`;
  console.log(requestURL);

  axios
    .put(requestURL, { id, name, imageURL, breed, age, sex, weight })
    .then((res) => {
      console.log(res.data);
      if (callback) callback(res.data);
    })
    .catch((err) => {
      const messageSection = document.querySelector(".selected-item");
      messageSection.innerHTML = "Error Loading Pet";
      console.log(err);
    });
}

function getSamplePets(numberOfPets) {
  const shuffledPets = petsList.sort(() => 0.5 - Math.random());
  return shuffledPets.slice(0, numberOfPets);
}

function seedDatabase() {
  const requestURL = `${baseURL}/seedDatabase`;

  axios
    .post(requestURL)
    .then(() => {
      location.reload();
    })
    .catch((err) => {
      const messageSection = document.querySelector(".selected-item");
      messageSection.innerHTML = "Error Ressetting Database";
      console.log(err);
    });
}

let usersList = [
  {
    Name: "Nitin",
    UserType: "admin",
    FavoritePets: [""],
  },
  {
    Name: "Dan",
    UserType: "admin",
    FavoritePets: [""],
  },
  {
    Name: "Ginger",
    UserType: "admin",
    FavoritePets: [""],
  },
  {
    Name: "Noah",
    UserType: "standard",
    FavoritePets: [""],
  },
  {
    Name: "Micah",
    UserType: "standard",
    FavoritePets: [""],
  },
  {
    Name: "Becca",
    UserType: "standard",
    FavoritePets: [""],
  },
];

let currentUser = "Dan";

function getAllUsers() {
  return usersList;
}

function getAdminUsers() {
  const adminUsers = usersList.filter((user) => user.UserType === "admin");
  return adminUsers;
}

function getStandardUsers() {
  const standardUsers = usersList.filter(
    (user) => user.UserType === "standard"
  );
  return standardUsers;
}

function recordLoginToDatabase(userName) {
  currentUser = userName;
  console.log(currentUser);
}

function isAdmin() {
  const thisUser = usersList.find((user) => user.Name === currentUser);
  const isAdmin = thisUser.UserType === "admin";
  console.log(`is admin: ${isAdmin}`);
  return isAdmin;
}

function getCurrentUser() {
  return currentUser;
}
