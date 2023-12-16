const axios = require("axios");
const rollbar = require("../rollbar_config.js");

const {
  dbSeedDatabase,
  getData,
  getPartialData,
  upsertData,
  deleteData,
} = require("./database_controller.js");

function seedDatabase(req, res) {
  rollbar.info("server log: seeding database");
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
  let filterRequest = "";

  switch (filter) {
    case "Available":
      filterRequest =
        "SELECT * FROM Pets WHERE is_reserved = false AND is_adopted = false";
      break;
    case "Reserved":
      filterRequest = "SELECT * FROM Pets WHERE is_reserved = true";
      break;
    case "Adopted":
      filterRequest = "SELECT * FROM Pets WHERE is_adopted = true";
      break;
    default:
      res.status(400).send("Invalid filter");
      return;
  }

  const favoriteRequest = `
    SELECT upf.pet_id
    FROM user_pets_favorites upf
    INNER JOIN User_Login ul ON upf.user_id = ul.user_id;
  `;

  // Fetch both sets of data
  Promise.all([
    getPartialData(filterRequest, {}),
    getPartialData(favoriteRequest, {}),
  ])
    .then(([filteredPets, favoritePets]) => {
      // Combine the data
      const combinedPets = filteredPets.map((pet) => {
        const isFavorite = favoritePets.some(
          (favorite) => favorite.pet_id === Number(pet.id)
        );
        return { ...pet, isFavorite };
      });

      res.send(combinedPets);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Error fetching pet data");
    });
}

function getPetInfo(req, res) {
  const petID = req.query.petID;
  const request = `SELECT * FROM Pets WHERE id = ${petID}`;

  getData(request, res);
}

function toggleFavoritePet(petID, res) {
  // Extract petID
  petID = Number(petID.body.petID);

  // Step 1: Determine the currently logged-in user
  const currentUserQuery =
    "SELECT user_id FROM User_Login ORDER BY id DESC LIMIT 1";

  getPartialData(currentUserQuery)
    .then((currentUserResult) => {
      const currentUserID = currentUserResult[0].user_id;

      // Step 2: Check if the pet is already a favorite
      const checkFavoriteQuery =
        "SELECT * FROM User_Pets_Favorites WHERE user_id = :userID AND pet_id = :petID";
      const replacements = { userID: currentUserID, petID: petID };

      console.log("Replacements:", replacements);

      getPartialData(checkFavoriteQuery, replacements)
        .then((favoriteResult) => {
          // Pet is already a favorite, so remove it

          if (favoriteResult.length > 0) {
            const deleteFavoriteQuery =
              "DELETE FROM User_Pets_Favorites WHERE user_id = :userID AND pet_id = :petID";
            deleteData(deleteFavoriteQuery, null, replacements, res);
          } else {
            // Pet is not a favorite, so add it

            const addFavoriteQuery =
              "INSERT INTO User_Pets_Favorites (user_id, pet_id) VALUES (:userID, :petID)";
            upsertData(addFavoriteQuery, replacements, res);
          }
        })
        .catch((err) => {
          console.error("Error in checking favorite pet status", err);
          res.status(500).send("Error in checking favorite pet status");
        });
    })
    .catch((err) => {
      console.error("Error in determining current user", err);
      res.status(500).send("Error in determining current user");
    });
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
  rollbar.info("changing user login");

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
  rollbar.info(`deleting pet: ${petID}`);

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
  toggleFavoritePet,
  getCurrentUser,
  getFilteredUsers,
  getIsAdmin,
  loginUser,
  updatePet,
  deletePet,
};
