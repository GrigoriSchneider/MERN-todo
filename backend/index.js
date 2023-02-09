// Diese methode wir genutzt wenn im package.json file
//   "type": "module"
// nicht deklariert ist
//
// const express = require("express");
// const mongoose = require("mongoose");
// const Todo = require("./models/todo");
// require("dotenv").config();

import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import { Todo } from "./models/todo.js";

dotenv.config();

console.log(Todo);

const app = express();
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
