module.exports = function (app) {
    let car_handler = require("../handlers/car_handler");

    app.get("/cars", function (req, res) {
        return car_handler.getCars(req, res);
    });

};