const db = require("../models");
const config = require("../config/auth.config");
const Client = db.client;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signup = (req, res) => {
  // Save Client to Database
  Client.create({    
    nom: req.body.nom,
    prenom: req.body.prenom,
    email: req.body.email,
    mdp: req.body.mdp,
    //mdp: bcrypt.hashSync(req.body.mdp, 8),
    //mdp: bcrypt.hash(req.body.mdp, 8),
    img: req.body.img,
    tel: req.body.tel,
    actif: req.body.actif,
    rue: req.body.rue,
    code_postal: req.body.code_postal,
    ville: req.body.ville,
    note_vendeur: req.body.note_vendeur,
    avis_commande: req.body.avis_commande
  }).then(client => {
        res.send({ message: "Le Client a bien été ajouté à la base !" });
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
        return res.status(404).send({ message: "Client introuvable." });
      }

      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        client.mdp
      );

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Mot de passe invalide!"
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