const express = require("express");
const cors = require("cors");
const axios = require("axios");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("Public"));

// include and initialize the rollbar library with your access token
var Rollbar = require("rollbar");
var rollbar = new Rollbar({
  accessToken: "8abf7cdc6a8740d5b076c52dc32c8bc7",
  captureUncaught: true,
  captureUnhandledRejections: true,
});

// record a generic message and send it to Rollbar
// rollbar.log("Hello world!");

/// Imports ///
const {
  seedDatabase,
  getAllPets,
  getFilteredPets,
  getPetInfo,
  getCurrentUser,
  getFilteredUsers,
  loginUser,
  updatePet,
  deletePet,
} = require("./server/server_controller.js");

/// End Points ///
app.get("/api/getAllPets", getAllPets);
app.get("/api/getFilteredPets", getFilteredPets);
app.get("/api/getPetInfo", getPetInfo);
app.get("/api/getCurrentUser", getCurrentUser);
app.get("/api/getUserList", getFilteredUsers);
app.put("/api/loginUser", loginUser);
app.put("/api/updatePet", updatePet);
app.post("/api/seedDatabase", seedDatabase);
app.delete("/api/deletePet/:id", deletePet);

/// Run Server ///
app.listen(8000, "0.0.0.0", () => {
  console.log(`Listening on 8000`);
});
