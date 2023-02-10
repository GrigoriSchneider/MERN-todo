const express = require("express");
const mongoose = require("mongoose");
const todos = require("./routes/todos");
const cors = require("cors");

require("dotenv").config();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/todos", todos);

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
    useFindAndModify: false,
  })
  .then(() => console.log("MongoDB connection established..."))
  .catch((error) => console.error("MongoDB connection failed:", error.message));
