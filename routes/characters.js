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

    // console.log(response.data.results.name);
    //response.data.results.map(name,index).sort(name, "ascending")
    // console.log(
    //   response.data.results.map(result, index) //.sort(result.name, "ascending")
    // );
    // const resort = response.data.find().limit(1000).skip(100);

    // --------------------------------exemple
    // const offers = await Offer.find()
    //   .limit(3)
    //   .skip(6)
    //   .select("product_name product_price -_id");

    // res.json(offers);
    //-----------------------------------------

    // res.status(200).json(resort); //.sort(name : "ascending"));
    res.status(200).json(response.data); //.sort(name : "ascending"));

    // console.log(req.body);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
