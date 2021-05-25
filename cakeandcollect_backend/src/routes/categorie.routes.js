const controller = require("../controllers/categorie.controller");

module.exports = function (app) {

    app.get("/api/categories", controller.getAllCategories); // http://localhost:8080/api/Categories
    app.get("/api/categories/:id", controller.getCategorieById); // http://localhost:8080/api/Categories/1
    app.post("/api/categories", controller.createCategorie); // http://localhost:8080/api/Categories
    app.put("/api/categories/:id", controller.updateCategorie); // http://localhost:8080/api/Categories/1
    app.delete("/api/categories/:id", controller.deleteCategorie); // http://localhost:8080/api/Categories/1

}