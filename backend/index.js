const express = require("express");
const app = express();

require("dotenv").config();

app.get("/", (req, res) => {
  res.send("Welcome to our todosss api...");
});

app.listen(5000, () => {
  console.log("server running on port 5000");
});
