const axios = require("axios");

const {
  dbSeedDatabase,
  getData,
  upsertData,
  deleteData,
} = require("./database_controller.js");

function seedDatabase(req, res) {
  dbSeedDatabase(req, res);
}

function getAllPets(req, res) {
  console.log("Getting all Pets");
  const request = "SELECT * FROM Pets";
  getData(request, res);
}

function getFilteredPets(req, res) {
  const filter = req.query.filter;
  console.log(`Getting Pets Filtered by ${filter}`);

  let request = "";

  switch (filter) {
    case "Available":
      request =
        "SELECT * FROM Pets WHERE is_reserved = false AND is_adopted = false";
      break;
    case "Reserved":
      request = "SELECT * FROM Pets WHERE is_reserved = true";
      break;
    case "Adopted":
      request = "SELECT * FROM Pets WHERE is_adopted = true";
      break;
    default:
  }

  getData(request, res);
}

function getPetInfo(req, res) {
  const petID = req.query.petID;
  const request = `SELECT * FROM Pets WHERE id = ${petID}`;

  getData(request, res);
}

function getCurrentUser(req, res) {
  const request = `
  SELECT u.name
  FROM Users u
  INNER JOIN User_Login ul ON u.id = ul.user_id;
  `;

  getData(request, res);
}

function getIsAdmin(req, res) {
  const request = `
  SELECT u.is_admin
  FROM Users u
  INNER JOIN User_Login ul ON u.id = ul.user_id;
  `;

  getData(request, res);
}

function getFilteredUsers(req, res) {
  const filter = req.query.userType;
  console.log(`Getting Users Filtered by ${filter}`);

  let request = "";

  switch (filter) {
    case "admin":
      request = "SELECT * FROM Users WHERE is_admin = true";
      break;
    case "standard":
      request = "SELECT * FROM Users WHERE is_admin = false";
      break;
    default:
      res.status(400).send("user type not recognized");
  }

  getData(request, res);
}

function loginUser(req, res) {
  console.log(req.body);
  let { userID } = req.body;

  const upsertQuery = `
    UPDATE User_Login
    SET user_id = :userID
    WHERE id = 1;
  `;

  upsertData(upsertQuery, { userID: userID }, res);
}

function updatePet(req, res) {
  console.log(req.body);
  let { id, name, imageURL, breed, age, sex, weight } = req.body;

  // Set 'id' to null if it's an empty string or not provided
  id = id ? parseInt(id, 10) : null;

  const upsertQuery = `
    INSERT INTO Pets (${
      id ? "id, " : ""
    }name, breed, age, weight, sex, image_url)
    VALUES (${
      id !== null ? ":id, " : ""
    }:name, :breed, :age, :weight, :sex, :imageURL)
    ON CONFLICT (id) DO UPDATE
    SET name = EXCLUDED.name, breed = EXCLUDED.breed, age = EXCLUDED.age, weight = EXCLUDED.weight, sex = EXCLUDED.sex, image_url = EXCLUDED.image_url;
  `;

  upsertData(
    upsertQuery,
    {
      ...(id !== null && { id: id }),
      name: name,
      breed: breed,
      age: age,
      weight: weight,
      sex: sex,
      imageURL: imageURL,
    },
    res
  );
}

function deletePet(req, res) {
  const petId = parseInt(req.params.id, 10);
  console.log(petId);

  const deleteFavoritePetsQuery =
    "DELETE FROM user_pets_favorites WHERE pet_id = :id";
  const deletePetQuery = "DELETE FROM Pets WHERE id = :id";

  deleteData(deleteFavoritePetsQuery, deletePetQuery, { id: petId }, res);
}

module.exports = {
  seedDatabase,
  getAllPets,
  getFilteredPets,
  getPetInfo,
  getCurrentUser,
  getFilteredUsers,
  getIsAdmin,
  loginUser,
  updatePet,
  deletePet,
};