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
                res.status(404).send("Patisserie introuvable");
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
                quantite: req.body.quantite,
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
                res.status(404).send("Patisserie introuvable");
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
                res.status(201).send("Patisserie supprimée avec succès !");
            }
            else {
                res.status(404).send("Patisserie innexistante");
            }

        }
        catch (e) {
            console.log(e);
            res.status(400).send(e);
        }
    }, 

    /* async deletePatisserie(req, res) {
        const id = req.params.id;
        const deletedPatisserie = await patisserie.findOne(({
                where: { id: id }
            }))
            deletedPatisserie.destroy() 
                .then(num => {
                    if (num == 1) {
                        res.send({
                            message: "Patisserie bien supprimée!"
                        });
                    } else {
                        res.send({
                            message: `Impossible de supprimer avec id=${id}. Peut-être que la patisserie n'existe pas ?!`
                        });
                    }
                })
                .catch(err => {
                    res.status(500).send({
                        message: "Impossible de supprimer la patisserie à l'id=" + id
                    });
                });
    }, */

    
}