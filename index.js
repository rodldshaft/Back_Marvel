require("dotenv").config();
// package serveur
const axios = require("axios");
const express = require("express");
const cors = require("cors");
const router = express.Router();
const morgan = require("morgan");

const app = express();
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

//import des routes comics et character
const comicsRoutes = require("./routes/comics");
app.use(comicsRoutes);

const charactersRoutes = require("./routes/characters");
app.use(charactersRoutes);

// route home
app.get("/", (req, res) => {
  console.log("route /");
  res.status(200).json({ message: "route /" });
});

// les routes inconnue reçoive ce message
app.all("*", (req, res) => {
  console.log("route not found");
  res.status(404).json({ message: "route not found !" });
});

// lancement du serveur
app.listen(4000, () => {
  console.log("serveur has started🔥 port 4000");
});
