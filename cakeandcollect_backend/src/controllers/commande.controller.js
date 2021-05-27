const commande = require('../models').commande;

module.exports = {
    // Afficher tous les commandes
    async getAllCommandes(req, res) { 
        try { 
            const commandeCollection = await commande.findAll() 
            res.status(201).send(commandeCollection); 
            console.log(commandeCollection);
        } catch (e) { 
            console.log(e); 
            res.status(500).send(e); 
        } 
    },

    async getCommandeById(req, res) {

        const id = req.params.id;
        try { 
            const oneCommande = await commande.findOne(({
                where: { id: id }
            }))
            if (oneCommande) {
                res.status(201).send(oneCommande);
            }
            else {
                res.status(404).send("Commande Not Found");
            }
        }
        catch (e) {
            console.log(e);
            res.status(400).send(e);
        }
    },

    async createCommande(req, res) {
        try {
            const commandeCreated = await commande.create({
                clientId: req.body.clientId,
                titre: req.body.titre,
                actif: req.body.actif,
                quantite: req.body.quantite,
                prix_vente: req.body.prix_vente,
                date_commande: req.body.date_commande,
                date_recuperation: req.body.date_recuperation
            });
            res.status(201).send(commandeCreated)
        }
        catch (e) {
            console.log(e);
            res.status(400).send(e);
        }
    },

    async updateCommande(req, res) {
        const id = req.params.id;
        try {
            const oneCommande = await commande.findOne(({
                where: { id: id }
            }))
            if (oneCommande) {
                const updatedCommande = await oneCommande.update(req.body, {
                    where: { id: id }
                })

                res.status(201).send(updatedCommande);
            }
            else {
                res.status(404).send("Commande Not Found");
            }
        }
        catch (e) {
            console.log(e);
            res.status(400).send(e);
        } 
    },

    async deleteCommande(req, res) {
        const id = req.params.id;
        try {

            const deletedCommande = await commande.findOne(({
                where: { id: id }
            }))
            if (deletedCommande) {
                deletedCommande.destroy();
                res.status(201).send("Deleted");
            }
            else {
                res.status(404).send("Commande Not Found");
            }

        }
        catch (e) {
            console.log(e);
            res.status(400).send(e);
        }
    },
}