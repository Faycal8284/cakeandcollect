const express = require('express');
const cors = require("cors");
const multer = require('multer');
// const bodyParser = require('body-parser');

// Configure cross-origin for Angular-Client which running at port:
/* const corsOptions = {
    origin: 'http://localhost:8200', // ou http://localhost:8100
    optionsSuccessStatus: 200
} */

const db = require("./src/models");
var app = express();
db.sequelize.sync();

// définir les tables
const client = db.client;
const vendeur = db.vendeur;
const categorie = db.categorie;
const commande = db.commande;
const patisserie = db.patisserie;

const file = db.File;

const image = db.image;

// Définir la vue
const venpatcat = db.venpatcat;

// upload files
//const fileWorker = require('../controllers/file.controller.js');

//app.use(cors(corsOptions)); => ne fonctionne pas !!!

//app.use(cors());

app.use(cors({ origin : "*" }));

app.use(express.json()); 
//app.use(bodyParser.json()); 

//app.use(express.urlencoded());
app.use(express.urlencoded({ extended: true }));

// Définir les routes

// http://localhost:8080/api/clients
require('./src/routes/clients.routes')(app);

// http://localhost:8080/api/vendeurs
require('./src/routes/vendeurs.routes')(app);

// http://localhost:8080/api/categories
require('./src/routes/categorie.routes')(app);

// http://localhost:8080/api/commandes
require('./src/routes/commande.routes')(app);

// http://localhost:8080/api/patisseries
require('./src/routes/patisserie.routes')(app);

// http://localhost:8080/api/venpatcat
require('./src/routes/venpatcat.routes')(app);

//authentification
// http://localhost:8080/api/auth/vendeur
require('./src/routes/auth.vendeur.routes')(app);

// http://localhost:8080/api/auth/client
require('./src/routes/auth.client.routes')(app);

// login vendeur
require('./src/routes/vendeur.routes')(app);
// login client
require('./src/routes/client.routes')(app);

// upload files
/* app.post('/api/file/upload', upload.single("file"), (req, res) => { 
		// to do
}); */


// http://localhost:8080/api/file (/info /:id /upload)
require('./src/routes/file.routes')(app);

//let router = require('./src/routers/file.router.js');
//app.use('/', router);

// http://localhost:8080/api/image
//require('./src/routes/image.routes')(app);

// navigateur web
app.get("/", (req, res) => {
    res.json({ message: "Bienvene dans l'application Cake And Collect !" });
});

// Définir un port d'écoute
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server fonctionne sur le port ${PORT}.`); // Alt Gr+7
});

const UPLOAD_PATH = '../ionic-cakeandcollect/src/assets/images/uploads';

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, UPLOAD_PATH )
    },
    filename: (req, file, callback) => {
        callback(null, `${file.originalname}`)
    }
})

var upload = multer({ storage: storage })

// let upload = multer({ dest: 'upload/' })

app.get("/", (req, res) => {
    res.send(
        `<h1 syle='text-align: center'> Test 2 sur upload image</h1>`
    );
});

app.post('/file', upload.single('file'), (req, res, next) => {
    const file = req.file
    console.log(file.filename);
    if(!file) {
        const error = new Error('Please upload a file')
        error.httpStatusCode = 400
        return next(error)
    }
    res.send(file)
})

app.post('/multiplefiles', upload.array('files'), (req, res, next) => {
    const files = req.files
    console.log(files);
    if(!files) {
        const error = new Error('No file')
        error.httpStatusCode = 400
        return next(error)
    }
    res.send({status: 'ok'});
})

//db.sequelize.query("UPDATE patisseries p JOIN categories c ON p.categorieId = c.Id SET p.img = REPLACE(p.img, 'C:\\fakepath\\', 'assets/images/uploads/patisseries/');" );




