const jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js");
const db = require("../models");
const Vendeur = db.vendeur;

verifyToken = (req, res, next) => {
  let token = req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send({
      message: "No token provided!"
    });
  }

  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({
        message: "Unauthorized!"
      });
    }
    req.vendeurId = decoded.id;
    next();
  });
};

isVendeur = (req, res, next) => {
  Vendeur.findByPk(req.vendeurId).then(vendeur => {
    next(); // à vérifier
    return;
    })
};

const authJwt = {
  verifyToken: verifyToken,
  isVendeur: isVendeur
};
module.exports = authJwt;