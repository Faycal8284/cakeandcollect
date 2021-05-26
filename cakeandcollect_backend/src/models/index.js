const dbConfig = require("./../config/db.config");

const Sequelize = require("sequelize");

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

db.client.hasMany(db.commande, { as: "commandes" });

db.commande.belongsTo(db.client, {
  foreignKey: "clientId",
  as: "clients",
});

db.vendeur.hasMany(db.patisserie, { as: "patisseries" });

db.patisserie.belongsTo(db.vendeur, {
  foreignKey: "vendeurId",
  as: "vendeurs",
});

db.categorie.hasMany(db.patisserie, { as: "patisseries" });

db.patisserie.belongsTo(db.categorie, {
  foreignKey: "categorieId",
  as: "categories",
});

db.commande.hasMany(db.patisserie, { as: "patisseries" });

db.patisserie.belongsTo(db.commande, {
  foreignKey: "commandeId",
  as: "commandes",
});


module.exports = db;