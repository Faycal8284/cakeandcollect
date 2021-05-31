const venpatcat = require('../models').venpatcat;
const dbConfig = require("./../config/db.config");
const Sequelize = require("sequelize");
const { QueryTypes } = require('sequelize');

const db = {};
// doit se connecter pour récupérer la vue dans la base de données
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

// Connexion établie
db.Sequelize = Sequelize;
db.sequelize = sequelize;
module.exports = {
    // Afficher tous
    async getAllVenPatCat(req, res) { 
        try { 
            
            const venpatcatCollection = await sequelize.query("SELECT * FROM `venpatcat`", { type: QueryTypes.SELECT });
            //const venpatcatCollection = await venpatcat.findAll();
            res.status(201).send(venpatcatCollection); 
            console.log(venpatcatCollection);
        } catch (e) { 
            console.log(e); 
            res.status(500).send(e); 
        } 
    },
    // Afficher 1
    async getVendeurById(req, res) {

        const id = req.params.id;
        try { 
            const oneVendeur = await venpatcat.findOne(({
                where: { IdVendeur: id }
            }))
            if (oneVendeur) {
                res.status(201).send(oneVendeur);
            }
            else {
                res.status(404).send("Vendeur patisserie Not Found");
            }
        }
        catch (e) {
            console.log(e);
            res.status(400).send(e);
        }
    }
}

/* exports.getAllVenPatCat = (req, res, next) => {
    venpatcat.findAll({})
    .then(venpatcat => res.status(201).json(venpatcat))
    .catch(error => res.status(400).json({ error }));
}; */

//return venpatcat.init({}); ?