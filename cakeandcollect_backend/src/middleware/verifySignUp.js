const db = require("../models");

const Vendeur = db.vendeur;
const Client = db.client;

checkVendeurEmail = (req, res, next) => {
  // Vendeur
  Vendeur.findOne({
    where: {
      email: req.body.email
    }
  }).then(vendeur => {
    if (vendeur) {
      res.status(400).send({
        message: "Erreur! email existe déjà!"
      });
      return;
    }
    next();
  });
};

checkClientEmail = (req, res, next) => {
  // Client
  Client.findOne({
    where: {
      email: req.body.email
    }
  }).then(client => {
    if (client) {
      res.status(400).send({
        message: "Erreur ! Email existe déjà !"
      });
      return;
    }
    next();
  });
};

const verifySignUp = {
  checkVendeurEmail: checkVendeurEmail,
  checkClientEmail: checkClientEmail
};

module.exports = verifySignUp;