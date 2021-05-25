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
db.vendeur = require('../models/vendeur.model')(sequelize, Sequelize);
db.client = require('../models/client.model')(sequelize, Sequelize);
db.commande = require('../models/commande.model')(sequelize, Sequelize);
db.categorie = require('../models/categorie.model')(sequelize, Sequelize);
db.patisserie = require('../models/patisserie.model')(sequelize, Sequelize);

module.exports = db;