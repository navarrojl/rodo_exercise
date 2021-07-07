module.exports = function (app) {
    let car_handler = require("../handlers/car_handler");

    app.get("/cars/:make?/:model?/:price?/:year?", function (req, res) {
        return car_handler.getCars(req, res);
    });

};