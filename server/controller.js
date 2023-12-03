const axios = require("axios");
const { seedFromFile } = require("./seed.js");

module.exports = {
  seedDatabase: (req, res) => {
    seedFromFile(req, res);
  },
};
