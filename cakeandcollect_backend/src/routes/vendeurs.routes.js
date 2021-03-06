const controller = require("../controllers/vendeurs.controller");

module.exports = function (app) {

    app.get("/api/vendeurs", controller.getAllVendeurs); // http://localhost:8080/api/vendeurs
    app.get("/api/vendeurs/:id", controller.getVendeurById); // http://localhost:8080/api/vendeurs/1
    app.post("/api/vendeurs", controller.createVendeur); // http://localhost:8080/api/vendeurs
    app.put("/api/vendeurs/:id", controller.updateVendeur); // http://localhost:8080/api/vendeurs/1
    app.delete("/api/vendeurs/:id", controller.deleteVendeur); // http://localhost:8080/api/vendeurs/

}