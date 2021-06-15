const dbConfig = require("./../config/db.config");

const Sequelize = require("sequelize");

const bcrypt = require("bcrypt");

// Initialisation nouvelle instance connexion database
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,

    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

const db = {};

// To be connected
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Import de l'entité vendeur à mapper (create table vendeur avec ses proprietes dans la base) 
db.client = require('../models/client.model')(sequelize, Sequelize);
db.vendeur = require('../models/vendeur.model')(sequelize, Sequelize);
db.categorie = require('../models/categorie.model')(sequelize, Sequelize);
db.commande = require('../models/commande.model')(sequelize, Sequelize);
db.patisserie = require('../models/patisserie.model')(sequelize, Sequelize);
db.venpatcat = require('../models/venpatcat.model')(sequelize, Sequelize);
db.files = require('../models/file.model')(sequelize, Sequelize);

// 1 Client peut avoir plusieurs commandes
db.client.hasMany(db.commande, { as: "commandes" });

db.commande.belongsTo(db.client, {
  foreignKey: "clientId",
  as: "clients",
});

// 1 Vendeur peut avoir plusieurs patisseries
db.vendeur.hasMany(db.patisserie, { as: "patisseries" });

db.patisserie.belongsTo(db.vendeur, {
  foreignKey: "vendeurId",
  as: "vendeurs",
});

// 1 Catégorie peut avoir plusieurs patisseries
db.categorie.hasMany(db.patisserie, { as: "patisseries" });

db.patisserie.belongsTo(db.categorie, {
  foreignKey: "categorieId",
  as: "categories",
});

// 1 commande peut avoir plusieurs patisseries
db.commande.hasMany(db.patisserie, { as: "patisseries" });

db.patisserie.belongsTo(db.commande, {
  foreignKey: "commandeId",
  as: "commandes",
  allowNull: true,
});

db.vendeur.beforeCreate((vendeur, options) => {
  return bcrypt.hash(vendeur.mdp, 8)
      .then(hash => {
        vendeur.mdp = hash;
      })
      .catch(err => { 
          throw new Error(); 
      });
});

// à la création de la table, hacher le mot de passe
db.client.beforeCreate((client, options) => {
  return bcrypt.hash(client.mdp, 8)
      .then(hash => {
        client.mdp = hash;
      })
      .catch(err => { 
          throw new Error(); 
      });
});

module.exports = db;