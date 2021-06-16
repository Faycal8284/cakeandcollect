const image = require('../models').image;

module.exports = {
    // Afficher tous les images
    async getAllimages(req, res) { 
        try { 
            const imageCollection = await image.findAll() 
            res.status(201).send(imageCollection); 
            console.log(imageCollection);
        } catch (e) { 
            console.log(e); 
            res.status(500).send(e); 
        } 
    },

    async getimageById(req, res) {

        const id = req.params.id;
        try { 
            const oneimage = await image.findOne(({
                where: { id: id }
            }))
            if (oneimage) {
                res.status(201).send(oneimage);
            }
            else {
                res.status(404).send("image Not Found");
            }
        }
        catch (e) {
            console.log(e);
            res.status(400).send(e);
        }
    },

    async createimage(req, res) {
        try {
            const imageCreated = await image.create({
                nom: req.body.nom,
                descriptions: req.body.descriptions,
                img: req.body.img
            });
            res.status(201).send(imageCreated)
        }
        catch (e) {
            console.log(e);
            res.status(400).send(e);
        }
    },

    async updateimage(req, res) {
        const id = req.params.id;
        try {
            const oneimage = await image.findOne(({
                where: { id: id }
            }))
            if (oneimage) {
                const updatedimage = await oneimage.update(req.body, {
                    where: { id: id }
                })

                res.status(201).send(updatedimage);
            }
            else {
                res.status(404).send("image Not Found");
            }
        }
        catch (e) {
            console.log(e);
            res.status(400).send(e);
        } 
    },

    async deleteimage(req, res) {
        const id = req.params.id;
        try {

            const deletedimage = await image.findOne(({
                where: { id: id }
            }))
            if (deletedimage) {
                deletedimage.destroy();
                res.status(201).send("Deleted");
            }
            else {
                res.status(404).send("image Not Found");
            }

        }
        catch (e) {
            console.log(e);
            res.status(400).send(e);
        }
    },
}