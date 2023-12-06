const axios = require("axios");
const Sequelize = require("sequelize");

const { dbSeedDatabase, dbGetAllPets } = require("./database_controller.js");

function seedDatabase(req, res) {
  dbSeedDatabase(req, res);
}

function getAllPets(req, res) {
  dbGetAllPets(req, res);
}

module.exports = {
  seedDatabase,
  getAllPets,
};
