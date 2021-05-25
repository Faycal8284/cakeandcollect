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
                where: { id_commande: id }
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
                where: { id_commande: id }
            }))
            if (oneCommande) {
                const updatedCommande = await oneCommande.update(req.body, {
                    where: { id_commande: id }
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
                where: { id_commande: id }
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