const express = require("express");
const router = express.Router();
const axios = require("axios");
//routes du front ou postman

// route characters liste des characters
router.get(`/characters`, async (req, res) => {
  try {
    console.log("req.query ");
    console.log(req.query);

    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/characters?limit=${req.query.limit}&skip=${req.query.skip}&apiKey=${process.env.API_KEY}`
    );
    console.log(response.data.count);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
