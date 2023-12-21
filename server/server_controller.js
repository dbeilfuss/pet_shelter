const axios = require("axios");
const rollbar = require("../rollbar_config.js");
const { seedData } = require("./seedData.js");

const {
  dbSeedDatabase,
  getData,
  getPartialData,
  updateData,
  upsertData,
  insertData,
  deleteData,
} = require("./database_controller.js");

function seedDatabase(req, res) {
  rollbar.info("server log: seeding database");
  dbSeedDatabase(seedData(), res);
}

function getAllPets(req, res) {
  console.log("Getting all Pets");
  const request = "SELECT * FROM Pets ORDER BY id DESC";
  getData(request, res);
}

function getFilteredPets(req, res) {
  const filter = req.query.filter;
  console.log(`Getting Pets Filtered by ${filter}`);
  let filterRequest = "";

  switch (filter) {
    case "Available":
      filterRequest =
        "SELECT * FROM Pets WHERE is_reserved = false AND is_adopted = false ORDER BY id DESC";
      break;
    case "Reserved":
      filterRequest =
        "SELECT * FROM Pets WHERE is_reserved = true ORDER BY id DESC";
      break;
    case "Adopted":
      filterRequest =
        "SELECT * FROM Pets WHERE is_adopted = true ORDER BY id DESC";
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
  const requestQuery = "SELECT * FROM Pets WHERE id = :petID";
  const replacements = { petID: petID };

  getData(requestQuery, replacements, res);
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

function reservePet(req, res) {
  let { petID, userName } = req.body;

  if (userName === "") {
    // Step 1. Get Current User Information
    const currentUserQuery =
      "SELECT user_id FROM User_Login ORDER BY id DESC LIMIT 1";
    getPartialData(currentUserQuery)
      .then((currentUserResult) => {
        const currentUserID = currentUserResult[0].user_id;
        const currentUserNameQuery =
          "SELECT name FROM Users WHERE id = :userID";
        const replacements = { userID: currentUserID };

        return getPartialData(currentUserNameQuery, replacements);
      })

      // Step 2: Mark Pet as Reserved, and by Whom
      .then((currentUserNameResult) => {
        const currentUserName = currentUserNameResult[0].name;
        const query =
          "UPDATE Pets SET is_reserved = true, adopted_by = :userName WHERE id = :petID";
        const replacements = { userName: currentUserName, petID: petID };

        return updateData(query, replacements, res);
      })
      .catch((err) => {
        console.error("Error in processing reservation", err);
        res.status(500).send("Error in processing reservation");
      });
  } else {
    const query =
      "UPDATE Pets SET is_reserved = true, adopted_by = :userName WHERE id = :petID";
    const replacements = { userName: userName, petID: petID };

    return updateData(query, replacements, res);
  }
}

function cancelReservation(req, res) {
  let petID = req.body.petID;
  const query =
    "UPDATE Pets SET is_reserved = false, adopted_by = null WHERE id = :petID";
  const replacements = { petID: petID };
  return updateData(query, replacements, res);
}

function returnToShelter(req, res) {
  let petID = req.body.petID;
  const query =
    "UPDATE Pets SET is_adopted = false, adopted_by = null WHERE id = :petID";
  const replacements = { petID: petID };
  return updateData(query, replacements, res);
}

function adoptPet(req, res) {
  let petID = req.body.petID;
  const query =
    "UPDATE Pets SET is_reserved = false, is_adopted = true WHERE id = :petID";
  const replacements = { petID: petID };
  return updateData(query, replacements, res);
}

function getCurrentUser(req, res) {
  const request = `
  SELECT u.name
  FROM Users u
  INNER JOIN User_Login ul ON u.id = ul.user_id;
  `;

  getData(request, null, res);
}

function getIsAdmin(req, res) {
  const request = `
  SELECT u.is_admin
  FROM Users u
  INNER JOIN User_Login ul ON u.id = ul.user_id;
  `;

  getData(request, null, res);
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

  getData(request, null, res);
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

function newUser(req, res) {
  console.log(req.body);
  let { userName } = req.body;

  const insertQuery = `
    INSERT INTO Users (name) VALUES (:name);
  `;

  insertData(insertQuery, { name: userName })
    .then(() => {
      const getQuery = `
        SELECT * FROM Users WHERE name = :name;
      `;
      return getPartialData(getQuery, { name: userName });
    })
    .then((userData) => {
      if (!userData || userData.length === 0) {
        throw new Error("User not found after insertion");
      }

      const userID = userData[0].id;
      const userDataForLogin = { body: { userID: userID } };
      loginUser(userDataForLogin, res);
    })
    .catch((err) => {
      console.error("Error in newUser function:", err);
      res.status(500).send("Error processing new user");
    });
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
  rollbar.info(`deleting pet: ${petId}`);

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
  reservePet,
  cancelReservation,
  returnToShelter,
  adoptPet,
  getCurrentUser,
  getFilteredUsers,
  newUser,
  getIsAdmin,
  loginUser,
  updatePet,
  deletePet,
};
