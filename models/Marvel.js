// import axios from "axios";
// const Marvel = () => {
//   try {
//     const fetchCharacter = async () => {
//       const response = await axios.get(
//         `https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=${process.env.API_KEY}`
//         //   `https://lereacteur-vinted-api.herokuapp.com/offers`
//       );

//       setData(response.data);
//       setIsLoading(false);
//       console.log(data);
//     };
//     fetchCharacter();
//   } catch (error) {
//     console.log(error.message);
//   }

//   console.log(data);
//   return isLoading === true ? (
//     <div>En cours de chargement</div>
//   ) : (
//     <div>
//       <div>{data.count} Character</div>
//     </div>
//   );
// };

// export default Marvel;

// // recois une requette du front et je renvoie la requette au serveur marvel
// // je simule la requette avec postman pour avoir le retour du serveur que je vais renvoyer au front
// app.get("/comics", (req, res) => {
//   // recuperer les données de postman
//   const result = console.log(req.query);

//   //renvois les données au serveur marvel
// });

// app.get("/comics/:characterId", (req, res) => {
//   // recuperer les données de postman
//   const result = console.log(req.query);
//   const result2 = console.log(req.params);

//   //renvois les données au serveur marvel
//   app.get(
//     `https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=${process.env.API_KEY}`,
//     (req, res) => {
//       console.log(res.body);
//     }
//   );
// });
