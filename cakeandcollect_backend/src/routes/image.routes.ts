import upload from "../config/multer.config";
import db from "../models";

const controller = require("../controllers/image.controller");
const image = db.image;
const UPLOAD_PATH = 'uploads/images/patisseries';

import * as path from 'path';
import * as fs from 'fs';
import * as del from 'del';

module.exports = function (app) {
    // Upload a new image with description
    app.post('/images', upload.single('image'), (req, res, next) => {
        // Create a new image model and fill the properties
        //let image = new Image();
        image.filename = req.file.filename;
        image.originalName = req.file.originalname;
        image.desc = req.body.desc
        image.save(err => {
            if (err) {
                return res.sendStatus(400);
            }
            res.status(201).send({ image });
        });
    });

    // Get all uploaded images
    app.get('/images', (req, res, next) => {
        // use lean() to get a plain JS object
        // remove the version key from the response
        image.find({}, '-__v').lean().exec((err, images) => {
            if (err) {
                res.sendStatus(400);
            }

            // Manually set the correct URL to each image
            for (let i = 0; i < images.length; i++) {
                var img = images[i];
                img.url = req.protocol + '://' + req.get('host') + '/images/' + img._id;
            }
            res.json(images);
        })
    });

    // Get one image by its ID
    app.get('/images/:id', (req, res, next) => {
        let imgId = req.params.id;

        image.findById(imgId, (err, image) => {
            if (err) {
                res.sendStatus(400);
            }
            // stream the image back by loading the file
            res.setHeader('Content-Type', 'image/jpeg');
            fs.createReadStream(path.join(UPLOAD_PATH, image.filename)).pipe(res);
        })
    });

    // Delete one image by its ID
    app.delete('/images/:id', (req, res, next) => {
        let imgId = req.params.id;

        image.findByIdAndRemove(imgId, (err, image) => {
            if (err && image) {
                res.sendStatus(400);
            }

            del([path.join(UPLOAD_PATH, image.filename)]).then(deleted => {
                res.sendStatus(200);
            })
        })
    });
}