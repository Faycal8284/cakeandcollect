const db = require("../models");
const config = require("../config/auth.config");
const Vendeur = db.vendeur;
//const Role = db.role;
//const Op = db.Sequelize.Op;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signup = (req, res) => {
  // Save Vendeur to Database
  Vendeur.create({
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8)
  })
    .then(vendeur => {
        res.send({ message: "Vendeur was registered successfully!" });
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

exports.signin = (req, res) => {
  Vendeur.findOne({
    where: {
      email: req.body.email
    }
  })
    .then(vendeur => {
      if (!vendeur) {
        return res.status(404).send({ message: "Vendeur Not found." });
      }

      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        vendeur.mdp
      );

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!"
        });
      }

      var token = jwt.sign({ id: vendeur.id }, config.secret, {
        expiresIn: 86400 // 24 hours
      });

      res.status(200).send({
        id: vendeur.id,
        email: vendeur.email,
        accessToken: token
      });
      
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
}