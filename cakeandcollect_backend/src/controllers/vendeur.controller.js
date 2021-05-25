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
    },

    async getVendeurById(req, res) {

        const id = req.params.id;
        try { 
            const oneVendeur = await vendeur.findOne(({
                where: { id_vendeur: id }
            }))
            if (oneVendeur) {
                res.status(201).send(oneVendeur);
            }
            else {
                res.status(404).send("Vendeur Not Found");
            }
        }
        catch (e) {
            console.log(e);
            res.status(400).send(e);
        }
    },
}