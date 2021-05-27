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
                where: { id: id }
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
                email: req.body.email,
                mdp: req.body.mdp,
                img: req.body.img,
                categorie: req.body.categorie,
                note: req.body.note,
                code_promo: req.body.code_promo,
                particulier: req.body.particulier,
                actif: req.body.actif,
                rue: req.body.rue,
                code_postal: req.body.code_postal,
                ville: req.body.ville
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
                where: { id: id }
            }))
            if (oneVendeur) {
                const updatedVendeur = await oneVendeur.update(req.body, {
                    where: { id: id }
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
                where: { id: id }
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