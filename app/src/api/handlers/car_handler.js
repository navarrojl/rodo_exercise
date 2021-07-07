'use strict';
const Handler = require("./handler");

const CarHandler = class CarHandler extends Handler {
    
    constructor() {
        super();
        this.Controller = require("../controllers/car_controller");
    }

    async getCars(req, res){
        try{
            let cars = await this.Controller.getCars();
            return res.status(200).send(cars);
        }catch(error){
            return res.status(500).send(error);
        }
    }
    
}

module.exports = new CarHandler();
