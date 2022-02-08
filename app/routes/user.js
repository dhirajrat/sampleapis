const controller = require("../controllers/user");

module.exports = (app) => {
  // Post: User Registration
  app.post("/register", controller.register);

  // add Address of any categories
  app.post("/addaddress", controller.addAddress);

};
