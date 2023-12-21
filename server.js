const express = require("express");
const cors = require("cors");
const axios = require("axios");
const app = express();
const rollbar = require("./rollbar_config.js");
rollbar.info("Hello world!");

app.use(cors());
app.use(express.json());
app.use(express.static("Public"));

/// Imports ///
const {
  seedDatabase,
  getAllPets,
  getFilteredPets,
  getPetInfo,
  getAdoptedCount,
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
} = require("./server/server_controller.js");

/// End Points ///
app.get("/api/getAllPets", getAllPets);
app.get("/api/getFilteredPets", getFilteredPets);
app.get("/api/getPetInfo", getPetInfo);
app.get("/api/getAdoptedCount", getAdoptedCount);
app.get("/api/getCurrentUser", getCurrentUser);
app.get("/api/getUserList", getFilteredUsers);
app.get("/api/getIsAdmin", getIsAdmin);
app.put("/api/updatePet", updatePet);
app.put("/api/favoritePet", toggleFavoritePet);
app.put("/api/reservePet", reservePet);
app.put("/api/cancelReservation", cancelReservation);
app.put("/api/returnToShelter", returnToShelter);
app.put("/api/adoptPet", adoptPet);
app.put("/api/loginUser", loginUser);
app.post("/api/newUser", newUser);
app.post("/api/seedDatabase", seedDatabase);
app.delete("/api/deletePet/:id", deletePet);

/// Run Server ///
app.listen(8000, "0.0.0.0", () => {
  console.log(`Listening on 8000`);
});
