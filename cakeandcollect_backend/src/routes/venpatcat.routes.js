const controller = require("../controllers/venpatcat.controller");

module.exports = function (app) {

    app.get("/api/venpatcat", controller.getAllVenPatCat); // http://localhost:8080/api/venpatcat
    app.get("/api/venpatcat/vendeurs", controller.getAllVendeurs); // http://localhost:8080/api/venpatcat/vendeurs
    app.get("/api/venpatcat/vendeurs/:id", controller.getVendeurById); // http://localhost:8080/api/venpatcat/idVendeur
    app.get("/api/venpatcat/categories", controller.getAllCategories); // http://localhost:8080/api/venpatcat/categories
    app.get("/api/venpatcat/categories/:id", controller.getCategorieById); // http://localhost:8080/api/venpatcat/idCategorie
    app.get("/api/venpatcat/patisseries", controller.getAllPatisseries); // http://localhost:8080/api/venpatcat/patisseries
    app.get("/api/venpatcat/patisseries/:id", controller.getPatisserieById); // http://localhost:8080/api/venpatcat/patisseries/idPatisserie
}