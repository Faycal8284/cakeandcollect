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
            
            const venpatcatCollection = await sequelize.query("SELECT * FROM venpatcat", { type: QueryTypes.SELECT });
            //const venpatcatCollection = await venpatcat.findAll();
            res.status(201).send(venpatcatCollection); 
            console.log(venpatcatCollection);
        } catch (e) { 
            console.log(e); 
            res.status(500).send(e); 
        } 
    },

    // Afficher les vendeurs
    async getAllVendeurs(req, res) { 
        try { 
            
            const allVendeursCollection = await sequelize.query("SELECT * FROM venpatcat GROUP BY IdVendeur;", { type: QueryTypes.SELECT });
            //const venpatcatCollection = await venpatcat.findAll();
            res.status(201).send(allVendeursCollection); 
            console.log(allVendeursCollection);
        } catch (e) { 
            console.log(e); 
            res.status(500).send(e); 
        } 
    },

    // Afficher par Id Vendeur
    async getVendeurById(req, res) {

        const id = req.params.id;
        try { 
            const vendeurCollection = await sequelize.query("SELECT * FROM venpatcat WHERE IdVendeur = " + id, { type: QueryTypes.SELECT });
            //const venpatcatCollection = await venpatcat.findAll();
            res.status(201).send(vendeurCollection); 
            console.log(vendeurCollection);
        } catch (e) { 
            console.log(e); 
            res.status(500).send(e); 
        } 
    },

    // Afficher toutes les catégories
    async getAllCategories(req, res) { 
        try { 
            
            const allCategoriesCollection = await sequelize.query("SELECT * FROM venpatcat GROUP BY IdCategorie", { type: QueryTypes.SELECT });
            //const venpatcatCollection = await venpatcat.findAll();
            res.status(201).send(allCategoriesCollection); 
            console.log(allCategoriesCollection);
        } catch (e) { 
            console.log(e); 
            res.status(500).send(e); 
        } 
    },

     // Afficher par Id Categorie
     async getCategorieById(req, res) {

        const id = req.params.id;
        try { 
            const categorie = await sequelize.query("SELECT * FROM venpatcat WHERE IdCategorie = " + id, { type: QueryTypes.SELECT });
            //const venpatcatCollection = await venpatcat.findAll();
            res.status(201).send(categorie); 
            console.log(categorie);
        } catch (e) { 
            console.log(e); 
            res.status(500).send(e); 
        } 
    },

    // Afficher toutes les patisserie
    async getAllPatisseries(req, res) { 
        try { 
            
            const allPatisseriesCollection = await sequelize.query("SELECT * FROM venpatcat GROUP BY IdPatisserie ORDER BY IdPatisserie;", { type: QueryTypes.SELECT });
            //const venpatcatCollection = await venpatcat.findAll();
            res.status(201).send(allPatisseriesCollection); 
            console.log(allPatisseriesCollection);
        } catch (e) { 
            console.log(e); 
            res.status(500).send(e); 
        } 
    },

    // Afficher par Id Patisserie
    async getPatisserieById(req, res) {

        const id = req.params.id;
        try { 
            const patisserie = await sequelize.query("SELECT * FROM venpatcat WHERE IdPatisserie = " + id, { type: QueryTypes.SELECT });
            //const venpatcatCollection = await venpatcat.findAll();
            res.status(201).send(patisserie); 
            console.log(patisserie);
        } catch (e) { 
            console.log(e); 
            res.status(500).send(e); 
        } 
    },
}

/* exports.getAllVenPatCat = (req, res, next) => {
    venpatcat.findAll({})
    .then(venpatcat => res.status(201).json(venpatcat))
    .catch(error => res.status(400).json({ error }));
}; */

//return venpatcat.init({}); ?