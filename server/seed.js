require("dotenv").config();
const { SUPABASE_URI } = process.env;
const Sequelize = require("sequelize");

const sequelize = new Sequelize(SUPABASE_URI);

const { seedData } = require("./seedData.js");

function seedFromFile(req, res) {
  console.log("Seeding DB");

  sequelize
    .query(seedData())
    .then(() => {
      console.log("DB seeded!");
      res.sendStatus(200);
    })
    .catch((err) => console.log("error seeding DB", err));
}

module.exports = {
  seedFromFile,
};
