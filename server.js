const express = require("express");
const cors = require("cors");
const axios = require("axios");
const app = express();

app.use(cors());
app.use(express.static("Public"));

/// Imports ///

const { seedDatabase } = require("./server/controller.js");

/// End Points ///
app.post("/api/seedDatabase", seedDatabase);

/// Run Server ///
app.listen(8000, "0.0.0.0", () => {
  console.log(`Listening on 8000`);
});
