const controller = require("../controllers/patisserie.controller");

module.exports = function (app) {

    app.get("/api/patisseries", controller.getAllPatisseries); // http://localhost:8080/api/Patisseries
    app.get("/api/patisseries/:id", controller.getPatisserieById); // http://localhost:8080/api/Patisseries/1
    app.post("/api/patisseries", controller.createPatisserie); // http://localhost:8080/api/Patisseries
    app.put("/api/patisseries/:id", controller.updatePatisserie); // http://localhost:8080/api/Patisseries/1
    app.delete("/api/patisseries/:id", controller.deletePatisserie); // http://localhost:8080/api/Patisseries/1

}