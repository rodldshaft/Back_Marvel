const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/character/:id", async (req, res) => {
  try {
    // console.log("req.query :");
    // console.log(req.query);
    // console.log("req.params :");
    // console.log(req.params);
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/character/${req.params.id}?apiKey=${process.env.API_KEY}`
    );

    res.status(200).json(response.data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
