const Controller = require("./controller");
const Cars = require('../data/cars.json');

const CarController = class CarController extends Controller {

    constructor() {
        super();
    }

    async getCars(req, res){
        return Cars;
    }

}

module.exports = new CarController();