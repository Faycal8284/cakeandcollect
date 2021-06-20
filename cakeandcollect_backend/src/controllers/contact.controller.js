const contact = require('../models').contact;

module.exports = {
    // Afficher tous les categories
    async getAllContact(req, res) { 
        try { 
            const contactCollection = await contact.findAll() 
            res.status(201).send(contactCollection); 
            console.log(contactCollection);
        } catch (e) { 
            console.log(e); 
            res.status(500).send(e); 
        } 
    },
    
    async createContact(req, res) {
        try {
            const contactCreated = await contact.create({
                nom: req.body.nom,
                prenom: req.body.prenom,
                mail: req.body.mail,
                message: req.body.message
            });
            res.status(201).send(contactCreated)
        }
        catch (e) {
            console.log(e);
            res.status(400).send(e);
        }
    },


    async getContactById(req, res) {

        const id = req.params.id;
        try { 
            const r = await contact.findOne(({
                where: { id: id }
            }))
            if (r) {
                res.status(201).send(r);
            }
            else {
                res.status(404).send("Message Not Found");
            }
        }
        catch (e) {
            console.log(e);
            res.status(400).send(e);
        }

    },
    async deleteContact(req, res) {
        const id = req.params.id;
        try {

            const deletedContact = await contact.findOne(({
                where: { id: id }
            }))
            if (deletedContact) {
                deletedContact.destroy();
                res.status(201).send("Deleted");
            }
            else {
                res.status(404).send("Message Not Found");
            }

        }
        catch (e) {
            console.log(e);
            res.status(400).send(e);
        }

    },
}