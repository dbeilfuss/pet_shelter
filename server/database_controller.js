require("dotenv").config();
const { SUPABASE_URI } = process.env;

const Sequelize = require("sequelize");
const sequelize = new Sequelize(SUPABASE_URI, {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
});

const { seedData } = require("./seedData.js");

function dbGetAllPets(req, res) {
  console.log("Getting all Pets");

  const request = "SELECT * FROM Pets";

  sequelize
    .query(request)
    .then((dbResponse) => {
      // console.log("Pets Received, " + dbResponse[0]);
      res.status(200).send(dbResponse[0]);
    })
    .catch((err) => {
      const errorMessage = `Error Getting Pets, ${err}`;
      console.log(errorMessage);
      res.status(500).send(errorMessage);
    });
}

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
  dbGetAllPets,
};
