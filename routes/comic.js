const express = require("express");
const router = express.Router();
const axios = require("axios");
let result = false;
//routes du front ou postman

// route comics liste des comics
router.get("/comic/:comicId", async (req, res) => {
  try {
    console.log("req.query");
    console.log(req.query);
    console.log("req.params.comicId");
    console.log(req.params.comicId);
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comics/${req.params.comicId}?apiKey=${process.env.API_KEY}?limit=5`
    );

    console.log(response.data);
    console.log(response.data.counter);

    res.status(200).json(response.data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
