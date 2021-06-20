const controller = require("../controllers/contact.controller");

module.exports = function (app) {

    app.get("/api/contact", controller.getAllContact); // http://localhost:8080/api/contact
    app.get("/api/contact/:id", controller.getContactById); // http://localhost:8080/api/contact/1
    app.post("/api/contact", controller.createContact); // http://localhost:8080/api/contact
    app.delete("/api/contact/:id", controller.deleteContact);
}