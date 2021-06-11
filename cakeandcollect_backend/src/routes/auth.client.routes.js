const { verifySignUp } = require("../middleware");
const controller = require("../controllers/auth.client.controller");

module.exports = function(app) {
    
    app.use(function(req, res, next) {
      res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
      );
      next();
    });
  
    app.post(
      "/api/auth/client/signup",
      [
        verifySignUp.checkClientEmail
      ],
      controller.signup
    );
  
    app.post("/api/auth/client/signin", controller.signin);
    //app.post("/api/auth/client/signup", controller.signup);
  };