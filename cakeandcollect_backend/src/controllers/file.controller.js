const files = require('../models').files;
var stream = require('stream');

//const files = db.files;

exports.uploadFile = (req, res) => {
	files.create({
		type: req.file.mimetype,
		name: req.file.originalname,
		data: req.file.buffer
	}).then(() => {
		res.json({msg:'File uploaded successfully! -> filename = ' + req.file.originalname});
	}).catch(err => {
		console.log(err);
		res.json({msg: 'Error', detail: err});
	});
}

exports.listAllFiles = (req, res) => {
	files.findAll({attributes: ['id', 'name']}).then(files => {
	  res.json(files);
	}).catch(err => {
		console.log(err);
		res.json({msg: 'Error', detail: err});
	});
}

exports.downloadFile = (req, res) => {
	files.findById(req.params.id).then(file => {
		var fileContents = Buffer.from(file.data, "base64");
		var readStream = new stream.PassThrough();
		readStream.end(fileContents);
		
		res.set('Content-disposition', 'attachment; filename = ' + file.name);
		res.set('Content-Type', file.type);

		readStream.pipe(res);
	}).catch(err => {
		console.log(err);
		res.json({msg: 'Error', detail: err});
	});
}



/* module.exports = {

    async createFile(req, res) {
        try {
            const fileCreated = await file.create({
                type: req.file.mimetype,
                name: req.file.originalname,
                data: req.file.buffer
            });
            res.status(201).send(fileCreated);
            //res.json({msg: 'File uploaded successfully! -> filename = ' + req.file.originalname});
        }
        catch (e) {
            console.log(e);
            res.status(400).send(e);
        }
    },

    async getFileById(req, res) {

        const id = req.params.id;
        try {
            const oneFile = await File.findOne(({
                where: { id: id }
            }))
            if (oneFile) {
                res.status(201).send(oneFile);
            }
            else {
                res.status(404).send("File Not Found");
            }
        }
        catch (e) {
            console.log(e);
            res.status(400).send(e);
        }
    },

    getFileById(){
        File.findById(req.params.id).then(file => {
            var fileContents = Buffer.from(file.data, "base64");
            var readStream = new stream.PassThrough();
            readStream.end(fileContents);
        
            res.set('Content-disposition', 'attachment; filename=' + file.name);
            res.set('Content-Type', file.type);
        
            readStream.pipe(res);
        })
    }



} */
/* (req, res) => {
        File.create({
            type: req.file.mimetype,
            name: req.file.originalname,
            data: req.file.buffer
        }).then(() => {
            res.json({msg: 'File uploaded successfully! -> filename = ' + req.file.originalname});
        }) */

/* File.findById(req.params.id).then(file => {
    var fileContents = Buffer.from(file.data, "base64");
    var readStream = new stream.PassThrough();
    readStream.end(fileContents);

    res.set('Content-disposition', 'attachment; filename=' + file.name);
    res.set('Content-Type', file.type);

    readStream.pipe(res);
}) */