require("dotenv").config();
const { SUPABASE_URI } = process.env;
const rollbar = require("../rollbar_config.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(SUPABASE_URI, {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
});

function getData(query, replacements, res) {
  const options = {
    type: sequelize.QueryTypes.SELECT,
  };

  if (replacements) {
    options.replacements = replacements;
  }

  sequelize
    .query(query, options)
    .then((dbResponse) => {
      res.status(200).send(dbResponse);
    })
    .catch((err) => {
      const errorMessage = `Error Getting Data - Query: ${query}, Error: ${err}`;
      console.log(errorMessage);
      res.status(500).send(errorMessage);
    });
}

function getPartialData(query, replacements) {
  // used when you don't want a 'res'
  return new Promise((resolve, reject) => {
    sequelize

      .query(query, { replacements: replacements })

      .then((dbResponse) => {
        resolve(dbResponse[0]); // Resolve with the actual data
      })

      .catch((err) => {
        reject(err); // Reject the Promise if there's an error
      });
  });
}

function updateData(query, replacements, res) {
  sequelize

    .query(query, { replacements, type: sequelize.QueryTypes.UPDATE })
    .then(() => {
      console.log("Pet data updated successfully");
      res.sendStatus(200);
    })

    .catch((err) => {
      console.error("Error in updating pet data", err);
      res.status(500).send("Error updating pet data");
    });
}

function upsertData(query, replacements, res) {
  sequelize

    .query(query, { replacements, type: sequelize.QueryTypes.UPSERT })

    .then(() => {
      console.log("Data saved successfully");
      res.sendStatus(200);
    })

    .catch((err) => {
      console.error("Error in upserting data", err);
      res.status(500).send("Error saving data");
    });
}

function insertData(query, replacements) {
  return new Promise((resolve, reject) => {
    sequelize
      .query(query, { replacements, type: sequelize.QueryTypes.INSERT })
      .then((result) => {
        console.log("Data inserted successfully");
        resolve(result);
      })
      .catch((err) => {
        console.error("Error in inserting data", err);
        reject(err);
      });
  });
}

function deleteData(query1, query2, replacements, res) {
  sequelize

    .query(query1, { replacements, type: sequelize.QueryTypes.DELETE })

    .then(() => {
      if (query2) {
        return sequelize.query(query2, {
          replacements,
          type: sequelize.QueryTypes.DELETE,
        });
      } else {
        console.log("Pet deleted successfully");
        res.sendStatus(200);
        return null;
      }
    })

    .then((result) => {
      if (result !== null) {
        console.log("Pet deleted successfully");
        res.sendStatus(200);
      }
    })

    .catch((err) => {
      console.error("Error in deleting pet data", err);
      res.status(500).send("Error deleting pet data");
    });
}

function dbSeedDatabase(req, res) {
  console.log("Seeding DB");

  sequelize

    .query(req)

    .then(() => {
      console.log("DB seeded!");
      res.sendStatus(200);
    })

    .catch((err) => {
      const errorMessage = `Error seeding Database: ${err}`;
      rollbar.error(errorMessage);
      console.log(errorMessage);
      res.status(500).send(errorMessage);
    });
}

module.exports = {
  sequelize,
  dbSeedDatabase,
  getData,
  getPartialData,
  updateData,
  upsertData,
  insertData,
  deleteData,
};
