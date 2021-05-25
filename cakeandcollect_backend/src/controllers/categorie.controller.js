const categorie = require('../models').categorie;

module.exports = {
    // Afficher tous les categories
    async getAllCategories(req, res) { 
        try { 
            const categorieCollection = await categorie.findAll() 
            res.status(201).send(categorieCollection); 
            console.log(categorieCollection);
        } catch (e) { 
            console.log(e); 
            res.status(500).send(e); 
        } 
    },

    async getCategorieById(req, res) {

        const id = req.params.id;
        try { 
            const oneCategorie = await categorie.findOne(({
                where: { id_categorie: id }
            }))
            if (oneCategorie) {
                res.status(201).send(oneCategorie);
            }
            else {
                res.status(404).send("Categorie Not Found");
            }
        }
        catch (e) {
            console.log(e);
            res.status(400).send(e);
        }
    },

    async createCategorie(req, res) {
        try {
            const categorieCreated = await categorie.create({
                nom: req.body.nom,
                prenom: req.body.prenom,
                email: req.body.email,
                mdp: req.body.mdp,
                actif: req.body.actif,
                rue: req.body.rue,
                code_postal: req.body.code_postal,
                ville: req.body.ville,
                note_vendeur: req.body.note_vendeur,
                avis_commande: req.body.avis_commande,

            });
            res.status(201).send(categorieCreated)
        }
        catch (e) {
            console.log(e);
            res.status(400).send(e);
        }
    },

    async updateCategorie(req, res) {
        const id = req.params.id;
        try {
            const oneCategorie = await categorie.findOne(({
                where: { id_categorie: id }
            }))
            if (oneCategorie) {
                const updatedCategorie = await oneCategorie.update(req.body, {
                    where: { id_categorie: id }
                })

                res.status(201).send(updatedCategorie);
            }
            else {
                res.status(404).send("Categorie Not Found");
            }
        }
        catch (e) {
            console.log(e);
            res.status(400).send(e);
        } 
    },

    async deleteCategorie(req, res) {
        const id = req.params.id;
        try {

            const deletedCategorie = await categorie.findOne(({
                where: { id_categorie: id }
            }))
            if (deletedCategorie) {
                deletedCategorie.destroy();
                res.status(201).send("Deleted");
            }
            else {
                res.status(404).send("Categorie Not Found");
            }

        }
        catch (e) {
            console.log(e);
            res.status(400).send(e);
        }
    },
}