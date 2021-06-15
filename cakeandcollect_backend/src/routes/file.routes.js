//const controller = require("../controllers/file.controller");
let express = require('express');
let router = express.Router();
let upload = require('../config/multer.config.js');
const fileWorker = require('../controllers/file.controller.js');

module.exports = function (app) {
 
    app.post('/api/file/upload', upload.single("file"), fileWorker.uploadFile);
    app.get('/api/file/info', fileWorker.listAllFiles);
    app.get('/api/file/:id', fileWorker.downloadFile);

    // Node.js project exposes RestAPIs to upload/download files:
    //app.post('/api/file/upload', controller.createFile); // http://localhost:8080/api/file/upload
    //app.post('/api/file/upload', controller.upload.single("file"), fileWorker.uploadFile); // http://localhost:8080/api/file/upload
    //app.get('/api/file/info', fileWorker.listAllFiles); // http://localhost:8080/api/file/info
    //app.get('/api/file/info', controller.fileWorker.listAllFiles); // http://localhost:8080/api/file/info
    //app.get('/api/file/:id', controller.getFileById); // http://localhost:8080/api/file/:id
    //app.get('/api/file/:id', controller.fileWorker.downloadFile); // http://localhost:8080/api/file/:id
    
    /* app.post('/api/file/upload', upload.single("file"), (req, res) => { 
        
           // to do
        
    }); */
}