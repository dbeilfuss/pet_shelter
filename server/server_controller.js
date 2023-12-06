const axios = require("axios");
const Sequelize = require("sequelize");

const { dbSeedDatabase, getData } = require("./database_controller.js");

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

module.exports = {
  seedDatabase,
  getAllPets,
  getFilteredPets,
};
