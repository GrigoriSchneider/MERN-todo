const express = require("express");
const app = express();
const mongoose = require("mongoose");

require("dotenv").config();

app.get("/", (req, res) => {
  res.send("Welcome to our todosss api...");
});

const connection_string = process.env.CONNECTION_STRING;
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`server running on ${port}`);
});

mongoose
  .connect(connection_string, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connection established..."))
  .catch((error) => console.error("MongoDB connection failed:", error.message));
