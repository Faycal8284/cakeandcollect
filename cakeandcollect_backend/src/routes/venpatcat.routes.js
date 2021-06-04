const controller = require("../controllers/venpatcat.controller");

module.exports = function (app) {

    app.get("/api/venpatcat", controller.getAllVenPatCat); // http://localhost:8080/api/venpatcat
    app.get("/api/venpatcat/:id", controller.getVendeurById); // http://localhost:8080/api/venpatcat
}