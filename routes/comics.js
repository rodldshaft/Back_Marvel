const express = require("express");
const router = express.Router();

//routes du front ou postman

// route comics liste des comics
router.get("/comics", async (req, res) => {
  try {
    console.log(req.body);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = comics;
