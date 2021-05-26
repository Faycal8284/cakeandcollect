const db = require("../models");
const config = require("../config/auth.config");
const Client = db.client;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signup = (req, res) => {
  // Save Client to Database
  Client.create({
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8)
  })
    .then(client => {
        res.send({ message: "Client was registered successfully!" });
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

exports.signin = (req, res) => {
  Client.findOne({
    where: {
      email: req.body.email
    }
  })
    .then(client => {
      if (!client) {
        return res.status(404).send({ message: "Client Not found." });
      }

      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        client.mdp
      );

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!"
        });
      }

      var token = jwt.sign({ id: client.id }, config.secret, {
        expiresIn: 86400 // 24 hours
      });

      res.status(200).send({
        id: client.id,
        email: client.email,
        accessToken: token
      });
      
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
}