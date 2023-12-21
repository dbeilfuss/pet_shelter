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

function favoritePet(petID) {
  petID = Number(petID);
  console.log("petID: ", petID);
  const requestURL = `${baseURL}/favoritePet`;

  axios.put(requestURL, { petID }).catch((err) => {
    const messageSection = document.querySelector(".selected-item");
    messageSection.innerHTML = "Error marking pet as favorite";
    console.error(err);
  });
}

function reservePet(petID, userName, onSuccess) {
  petID = Number(petID);
  const requestURL = `${baseURL}/reservePet`;

  axios
    .put(requestURL, { petID, userName })

    .then(onSuccess)

    .catch((err) => {
      const messageSection = document.querySelector(".selected-item");
      messageSection.innerHTML = "Error reserving pet";
      console.error(err);
    });
}

function cancelReservation(petID, onSuccess) {
  petID = Number(petID);
  const requestURL = `${baseURL}/cancelReservation`;

  axios
    .put(requestURL, { petID })

    .then(onSuccess)

    .catch((err) => {
      const messageSection = document.querySelector(".selected-item");
      messageSection.innerHTML = "Error Canceling Reservation";
      console.error(err);
    });
}

function returnToShelter(petID, onSuccess) {
  petID = Number(petID);
  const requestURL = `${baseURL}/returnToShelter`;

  axios
    .put(requestURL, { petID })

    .then(onSuccess)

    .catch((err) => {
      const messageSection = document.querySelector(".selected-item");
      messageSection.innerHTML = "Error Returning Pet";
      console.error(err);
    });
}

function adoptPet(petID, onSuccess) {
  petID = Number(petID);
  const requestURL = `${baseURL}/adoptPet`;

  axios
    .put(requestURL, { petID })

    .then(onSuccess)

    .catch((err) => {
      const messageSection = document.querySelector(".selected-item");
      messageSection.innerHTML = "Error Marking Adopted";
      console.error(err);
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
    .then(callback)
    .catch((err) => {
      const messageSection = document.querySelector(".selected-item");
      messageSection.innerHTML = "Error Ressetting Database";
      console.log(err);
    });
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
      console.error(err);
    });
}

async function isAdmin(callback) {
  const requestURL = `${baseURL}/getIsAdmin`;

  try {
    const response = await axios.get(requestURL);
    const isAdmin = response.data[0].is_admin;
    callback(isAdmin);
  } catch (err) {
    const messageSection = document.querySelector(".selected-item");
    console.error(err);
    throw err;
  }
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

async function postNewUser(userName, callback) {
  const requestURL = `${baseURL}/newUser`;
  const userData = { userName: userName };

  try {
    const response = await axios.post(requestURL, userData);
    callback(response.data);
  } catch (err) {
    const messageSection = document.querySelector(".selected-item");
    messageSection.innerHTML = "Error Adding User";
    console.error(err);
    throw err;
  }
}
