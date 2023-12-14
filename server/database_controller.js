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

function getData(req, res) {
  sequelize
    .query(req)
    .then((dbResponse) => {
      // console.log(dbResponse[0]);
      res.status(200).send(dbResponse[0]);
    })
    .catch((err) => {
      const errorMessage = `Error Getting Data - Request: ${req}, Error: ${err}`;
      console.log(errorMessage);
      res.status(500).send(errorMessage);
    });
}

function getPartialData(query) {
  return new Promise((resolve, reject) => {
    sequelize
      .query(query)
      .then((dbResponse) => {
        resolve(dbResponse[0]); // Resolve with the actual data
      })
      .catch((err) => {
        reject(err); // Reject the Promise if there's an error
      });
  });
}

function upsertData(query, replacements, res) {
  sequelize
    .query(query, { replacements, type: sequelize.QueryTypes.UPSERT })
    .then(() => {
      console.log("Pet data saved successfully");
      res.sendStatus(200);
    })
    .catch((err) => {
      console.error("Error in upserting pet data", err);
      res.status(500).send("Error saving pet data");
    });
}

function deleteData(query1, query2, replacements, res) {
  sequelize
    .query(query1, { replacements, type: sequelize.QueryTypes.DELETE })
    .then(() => {
      return sequelize.query(query2, {
        replacements,
        type: sequelize.QueryTypes.DELETE,
      });
    })
    .then(() => {
      console.log("Pet deleted successfully");
      res.sendStatus(200);
    })
    .catch((err) => {
      console.error("Error in deleting pet data", err);
      res.status(500).send("Error deleting pet data");
    });
}

function dbSeedDatabase(req, res) {
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
  sequelize,
  dbSeedDatabase,
  getData,
  getPartialData,
  upsertData,
  deleteData,
};
