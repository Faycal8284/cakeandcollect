const controller = require("../controllers/client.controller");

module.exports = function (app) {

    app.get("/api/clients", controller.getAllClients); // http://localhost:8080/api/clients

    
    app.get("/api/clients/:id", controller.getClientById); // http://localhost:8080/api/clients/1
    app.post("/api/clients", controller.createClient); // http://localhost:8080/api/clients
    app.put("/api/clients/:id", controller.updateClient); // http://localhost:8080/api/clients/1
    app.delete("/api/clients/:id", controller.deleteClient); // http://localhost:8080/api/clients/1

}