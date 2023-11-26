const express = require("express");
const cors = require("cors");
const axios = require("axios");
const app = express();

app.use(cors());
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/main.html");
});

/// Run Server ///
app.listen(8000, "0.0.0.0", () => {
  console.log(`Listening on 8000`);
});
