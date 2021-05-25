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

    async createVendeur(req, res) {
        try {
            const vendeurCreated = await vendeur.create({
                nom: req.body.nom,
                prenom: req.body.prenom,
                siret: req.body.siret,
                mdp: req.body.mdp,
                particulier: req.body.particulier,
                actif: req.body.actif,
                rue: req.body.rue,
                code_postal: req.body.code_postal,
                ville: req.body.ville,
                code_promo: req.body.code_promo,
            });
            res.status(201).send(vendeurCreated)
        }
        catch (e) {
            console.log(e);
            res.status(400).send(e);
        }
    },

    async updateVendeur(req, res) {
        const id = req.params.id;
        try {
            const oneVendeur = await vendeur.findOne(({
                where: { id_vendeur: id }
            }))
            if (oneVendeur) {
                const updatedVendeur = await oneVendeur.update(req.body, {
                    where: { id_vendeur: id }
                })

                res.status(201).send(updatedVendeur);
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

    async deleteVendeur(req, res) {
        const id = req.params.id;
        try {

            const deletedVendeur = await vendeur.findOne(({
                where: { id_vendeur: id }
            }))
            if (deletedVendeur) {
                deletedVendeur.destroy();
                res.status(201).send("Deleted");
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