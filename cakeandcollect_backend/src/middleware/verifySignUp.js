const db = require("../models");
//const ROLES = db.ROLES;
const Vendeur = db.vendeur;

checkVendeurEmail = (req, res, next) => {
  // Vendeur
  Vendeur.findOne({
    where: {
      email: req.body.email
    }
  }).then(vendeur => {
    if (vendeur) {
      res.status(400).send({
        message: "Failed! email is already in use!"
      });
      return;
    }

    // Email
    Vendeur.findOne({
      where: {
        email: req.body.email
      }
    }).then(vendeur => {
      if (vendeur) {
        res.status(400).send({
          message: "Failed! Email is already in use!"
        });
        return;
      }

      next();
    });
  });
};

/* checkRolesExisted = (req, res, next) => {
  if (req.body.roles) {
    for (let i = 0; i < req.body.roles.length; i++) {
      if (!ROLES.includes(req.body.roles[i])) {
        res.status(400).send({
          message: "Failed! Role does not exist = " + req.body.roles[i]
        });
        return;
      }
    }
  }
  
  next();
}; */

const verifySignUp = {
    checkVendeurEmail: checkVendeurEmail
    //checkRolesExisted: checkRolesExisted
};

module.exports = verifySignUp;