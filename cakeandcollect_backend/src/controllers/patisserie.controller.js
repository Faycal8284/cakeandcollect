const patisserie = require('../models').patisserie;

module.exports = {
    // Afficher tous les patisseries
    async getAllPatisseries(req, res) { 
        try { 
            const patisserieCollection = await patisserie.findAll() 
            res.status(201).send(patisserieCollection); 
            console.log(patisserieCollection);
        } catch (e) { 
            console.log(e); 
            res.status(500).send(e); 
        } 
    },

    async getPatisserieById(req, res) {

        const id = req.params.id;
        try { 
            const onePatisserie = await patisserie.findOne(({
                where: { id: id }
            }))
            if (onePatisserie) {
                res.status(201).send(onePatisserie);
            }
            else {
                res.status(404).send("Patisserie Not Found");
            }
        }
        catch (e) {
            console.log(e);
            res.status(400).send(e);
        }
    },

    async createPatisserie(req, res) {
        try {
            const patisserieCreated = await patisserie.create({
                vendeurId: req.body.vendeurId,
                categorieId: req.body.categorieId,
                commandeId: req.body.commandeId,
                nom: req.body.nom,
                disponible: req.body.disponible,
                descriptions: req.body.descriptions,
                ingredients: req.body.ingredients,
                prix_u: req.body.prix_u,
                stock: req.body.stock,
                img: req.body.img,
                img1: req.body.img1,
                img2: req.body.img2,
                img3: req.body.img3,
            });
            res.status(201).send(patisserieCreated)
        }
        catch (e) {
            console.log(e);
            res.status(400).send(e);
        }
    },

    async updatePatisserie(req, res) {
        const id = req.params.id;
        try {
            const onePatisserie = await patisserie.findOne(({
                where: { id: id }
            }))
            if (onePatisserie) {
                const updatedPatisserie = await onePatisserie.update(req.body, {
                    where: { id: id }
                })

                res.status(201).send(updatedPatisserie);
            }
            else {
                res.status(404).send("Patisserie Not Found");
            }
        }
        catch (e) {
            console.log(e);
            res.status(400).send(e);
        } 
    },

    async deletePatisserie(req, res) {
        const id = req.params.id;
        try {

            const deletedPatisserie = await patisserie.findOne(({
                where: { id: id }
            }))
            if (deletedPatisserie) {
                deletedPatisserie.destroy();
                res.status(201).send("Deleted");
            }
            else {
                res.status(404).send("Patisserie Not Found");
            }

        }
        catch (e) {
            console.log(e);
            res.status(400).send(e);
        }
    },
}