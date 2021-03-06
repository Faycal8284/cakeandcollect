const { verifySignUp } = require("../middleware");
const controller = require("../controllers/auth.vendeur.controller");

module.exports = function(app) {
    
    app.use(function(req, res, next) {
      res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
      );
      next();
    });
  
    app.post(
      "/api/auth/vendeur/signup",
      [
        verifySignUp.checkVendeurEmail
      ],
      controller.signup
    );

    
    app.post("/api/auth/vendeur/signin", controller.signin);
    //app.post("/api/auth/vendeur/signup", controller.signup);
  };