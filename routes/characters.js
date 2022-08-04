const express = require("express");
const router = express.Router();
const axios = require("axios");
//routes du front ou postman

// route comics liste des comics
router.get("/characters", async (req, res) => {
  try {
    console.log(req.query);
    // console.log(route);
    result = true;
    // console.log("result : " + result);

    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=${process.env.API_KEY}`
    );

    console.log(response.data);

    res.status(200).json(response.data);

    // console.log(req.body);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
