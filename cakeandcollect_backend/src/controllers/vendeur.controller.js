const vendeur = require('../models').vendeur;

module.exports = {
    // Afficher tous les vendeurs
    async getAllVendeurs(req, res) { 
        try { 
            const vendeurCollection = await vendeur.findAll() 
            res.status(201).send(vendeurCollection); 
            console.log(vendeurCollection);
        } catch (e) { 
            console.log(e); 
            res.status(500).send(e); 
        } 
    }
}