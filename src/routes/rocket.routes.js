const controller = require("../controllers/rocket.controller");

module.exports = function (app) {

    app.get("/api/rockets", controller.getAllRockets); // http://localhost:8080/api/rockets
    app.get("/api/rockets/:id", controller.getOneRocket); // http://localhost:8080/api/rockets/1
    app.post("/api/rockets", controller.createRocket); // http://localhost:8080/api/rockets
    app.put("/api/rockets/:id", controller.updateRocket); // http://localhost:8080/api/rockets/1
    app.delete("/api/rockets/:id", controller.deleteRocket); // http://localhost:8080/api/rockets/1

}