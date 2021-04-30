// npm init
// npm install express sequelize mysql2 cors --save

const express = require('express');
const cors = require("cors");
var app = express();
const db = require("./src/models");
const rocket = db.rocket;

db.sequelize.sync();
// db.sequelize.sync({ force: true}).then(function () { 
//    console.log("Drop and re-sync db ");
//    initial(); // Exécuter l'initialisation de l'insertion des données
// });

app.use(cors());

app.use(express.json());  // l'api utilise du json

// function initial() { // initialiser les données dans formation_db
//     rocket.create({
//       id:1,
//       nom:"fusée Athena",
//       fabrication:"1990",
//       organisation: "Fox Trot 2356",
//       destination: "La lune"
//     });
//     rocket.create({
//         id:2,
//         nom:"fusée Ares",
//         fabrication:"2000",
//         organisation: "EAX SBZ 66890",
//         destination: "Venus"
//       });
//       rocket.create({
//         id:3,
//         nom:"fusée Antares",
//         fabrication:"2010",
//         organisation: "Fox TXTD YTH 345745",
//         destination: "Jupiter"
//     });
    
//   }
// http://localhost:8080/api/rockets
require('./src/routes/rocket.routes')(app);

app.use(express.urlencoded());

// navigateur web
app.get("/", (req, res) => {
    res.json({ message: "Bienvene dans l'application des fusées !!!" });
});

// Définir un port d'écoute
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server fonctionne sur le port ${PORT}.`); // Alt Gr+7
});