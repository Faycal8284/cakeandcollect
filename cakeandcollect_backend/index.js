const express = require('express');
const cors = require("cors");
const db = require("./src/models");
var app = express();
db.sequelize.sync();

// définir les tables
const client = db.client;
const vendeur = db.vendeur;
const categorie = db.categorie;
const commande = db.commande;
const patisserie = db.patisserie;

app.use(cors());

app.use(express.json()); 
//app.use(express.urlencoded());
app.use(express.urlencoded({ extended: true }));


// http://localhost:8080/api/clients
require('./src/routes/client.routes')(app);

// http://localhost:8080/api/vendeurs
require('./src/routes/vendeur.routes')(app);

// http://localhost:8080/api/categories
require('./src/routes/categorie.routes')(app);

// http://localhost:8080/api/commandes
require('./src/routes/commande.routes')(app);

// http://localhost:8080/api/patisseries
require('./src/routes/patisserie.routes')(app);


// navigateur web
app.get("/", (req, res) => {
    res.json({ message: "Bienvene dans l'application Cake And Collect !" });
});

// Définir un port d'écoute
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server fonctionne sur le port ${PORT}.`); // Alt Gr+7
});
