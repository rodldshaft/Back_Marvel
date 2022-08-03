// package serveur
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

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
  console.log("serveur has started🔥");
});
