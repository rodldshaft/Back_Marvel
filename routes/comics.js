const express = require("express");
const router = express.Router();
const axios = require("axios");
let result = false;
//routes du front ou postman

// route comics liste des comics
router.get("/comics", async (req, res) => {
  try {
    console.log(req.query);
    // console.log(route);
    result = true;
    console.log("result : " + result);

    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=${process.env.API_KEY}&limit=5`
    );

    // console.log(response.data);

    res.status(200).json(response.data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
