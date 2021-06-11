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
    nom: req.body.nom,
    prenom: req.body.prenom,
    siret: req.body.siret,
    email: req.body.email,
    //mdp: bcrypt.hashSync(req.body.mdp, 8),
    //mdp: bcrypt.hash(req.body.mdp, 8),
    mdp: req.body.mdp,
    img: req.body.img,
    categorie: req.body.categorie,
    note: req.body.note,
    code_promo: req.body.code_promo,
    particulier: req.body.particulier,
    tel: req.body.tel,
    descriptions: req.body.descriptions,
    actif: req.body.actif,
    rue: req.body.rue,
    code_postal: req.body.code_postal,
    ville: req.body.ville
  }).then(vendeur => {
        res.send({ message: "Le Vendeur a bien été ajouté à la base !" });
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
        return res.status(404).send({ message: "Vendeur non trouvé !" });
      }

      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        vendeur.mdp
      );

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Mot de passe non valide !"
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