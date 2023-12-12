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

  axios
    .get(requestURL)
    .then((res) => {
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
      callback(res.data);
    })
    .catch((err) => {
      const messageSection = document.querySelector(".selected-item");
      messageSection.innerHTML = "Error Loading Pet";
      console.log(err);
    });
}

function deletePet(petID, callback) {
  const requestURL = `${baseURL}/deletePet/${petID}`;
  console.log(requestURL);

  axios
    .delete(requestURL)
    .then((res) => {
      console.log(res.data);
      callback(res.data);
    })
    .catch((err) => {
      const messageSection = document.querySelector(".selected-item");
      messageSection.innerHTML = "Error Deleting Pet";
      console.log(err);
    });
}

function getSamplePets(numberOfPets) {
  const shuffledPets = petsList.sort(() => 0.5 - Math.random());
  return shuffledPets.slice(0, numberOfPets);
}

function seedDatabase(callback) {
  console.log("seeding database");
  const requestURL = `${baseURL}/seedDatabase`;

  axios
    .post(requestURL)
    .then(callback())
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

async function getUserList(userType, callback) {
  const requestURL = `${baseURL}/getUserList?userType=${userType}`;

  try {
    const response = await axios.get(requestURL);
    callback(response.data);
  } catch (err) {
    const messageSection = document.querySelector(".selected-item");
    messageSection.innerHTML = `Error Loading ${userType} User List`;
    console.error(err);
    throw err;
  }
}

function recordLoginToDatabase(userID, callback) {
  const requestURL = `${baseURL}/loginUser`;

  axios
    .put(requestURL, { userID })
    .then((res) => {
      console.log(res.data);
      callback();
    })
    .catch((err) => {
      const messageSection = document.querySelector(".selected-item");
      messageSection.innerHTML = "Error Logging in User";
      console.log(err);
    });
}

function isAdmin() {
  const thisUser = usersList.find((user) => user.Name === currentUser);
  const isAdmin = thisUser.UserType === "admin";
  return isAdmin;
}

async function getCurrentUser(callback) {
  const requestURL = `${baseURL}/getCurrentUser`;

  try {
    const response = await axios.get(requestURL);
    callback(response.data);
  } catch (err) {
    const messageSection = document.querySelector(".selected-item");
    messageSection.innerHTML = "Error Loading Current User";
    console.error(err);
    throw err;
  }
}
