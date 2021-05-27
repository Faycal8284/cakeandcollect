const client = require('../models').client;

module.exports = {
    // Afficher tous les clients
    async getAllClients(req, res) { 
        try { 
            const clientCollection = await client.findAll() 
            res.status(201).send(clientCollection); 
            console.log(clientCollection);
        } catch (e) { 
            console.log(e); 
            res.status(500).send(e); 
        } 
    },

    async getClientById(req, res) {

        const id = req.params.id;
        try { 
            const oneClient = await client.findOne(({
                where: { id: id }
            }))
            if (oneClient) {
                res.status(201).send(oneClient);
            }
            else {
                res.status(404).send("Client Not Found");
            }
        }
        catch (e) {
            console.log(e);
            res.status(400).send(e);
        }
    },

    async createClient(req, res) {
        try {
            const clientCreated = await client.create({
                nom: req.body.nom,
                prenom: req.body.prenom,
                email: req.body.email,
                mdp: req.body.mdp,
                img: req.body.img,
                actif: req.body.actif,
                rue: req.body.rue,
                code_postal: req.body.code_postal,
                ville: req.body.ville,
                note_vendeur: req.body.note_vendeur,
                avis_commande: req.body.avis_commande

            });
            res.status(201).send(clientCreated)
        }
        catch (e) {
            console.log(e);
            res.status(400).send(e);
        }
    },

    async updateClient(req, res) {
        const id = req.params.id;
        try {
            const oneClient = await client.findOne(({
                where: { id: id }
            }))
            if (oneClient) {
                const updatedClient = await oneClient.update(req.body, {
                    where: { id: id }
                })

                res.status(201).send(updatedClient);
            }
            else {
                res.status(404).send("Client Not Found");
            }
        }
        catch (e) {
            console.log(e);
            res.status(400).send(e);
        } 
    },

    async deleteClient(req, res) {
        const id = req.params.id;
        try {

            const deletedClient = await client.findOne(({
                where: { id: id }
            }))
            if (deletedClient) {
                deletedClient.destroy();
                res.status(201).send("Deleted");
            }
            else {
                res.status(404).send("Client Not Found");
            }

        }
        catch (e) {
            console.log(e);
            res.status(400).send(e);
        }
    },
}