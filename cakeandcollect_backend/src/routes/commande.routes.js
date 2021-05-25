const controller = require("../controllers/commande.controller");

module.exports = function (app) {
    app.get("/api/commandes", controller.getAllCommandes); // http://localhost:8080/api/Commandes
    app.get("/api/commandes/:id", controller.getCommandeById); // http://localhost:8080/api/Commandes/1
    app.post("/api/commandes", controller.createCommande); // http://localhost:8080/api/Commandes
    app.put("/api/commandes/:id", controller.updateCommande); // http://localhost:8080/api/Commandes/1
    app.delete("/api/commandes/:id", controller.deleteCommande); // http://localhost:8080/api/Commandes/1
}