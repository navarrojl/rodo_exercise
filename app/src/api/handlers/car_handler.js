'use strict';
const Handler = require("./handler");
const Functions = require('../../utils/functions');

const CarHandler = class CarHandler extends Handler {
    
    constructor() {
        super();
        this.Controller = require("../controllers/car_controller");
    }

    async getCars(req, res){
        try{
            let filters = req.query;
            // Validate params
            this.checkFilters(filters);            
            let cars = await this.Controller.getCars(filters);
            return res.status(200).send(cars);
        }catch(error){
            let response = {
                code: error.code != null && error.msg != null ? error.code : 500,
                msg: error.code != null && error.msg != null ? error.msg : 'Internal Server Error'
            }
            return res.status(response.code).send(response);
        }
    }

    checkFilters(filters){
        // Make must not contain special characters. Check "containsSpecialCharacters" Function to check characters accepted.
        if(filters.make && Functions.containsSpecialCharacters(filters.make)){
            throw {
                code: 400,
                msg: "Bad request. Make must not contain special characters."
            }
        }

        // Model must not contain special characters. Check "containsSpecialCharacters" Function to check characters accepted.
        if(filters.model && Functions.containsSpecialCharacters(filters.model)){
            throw {
                code: 400,
                msg: "Bad request. Model must not contain special characters."
            }
        }

        // Price must be positive number
        if(filters.price && !Functions.isPossitiveNumber(filters.price)){
            throw {
                code: 400,
                msg: "Bad request. Price must be a positive number."
            }
        }

        // Year must be between 1900 and 2100
        if(filters.year && !Functions.isBetweenTwoNumbers(filters.year, 1900, 2100)){
            throw {
                code: 400,
                msg: "Bad request. Year must be between 1900 && 2100."
            }
        }
        return true;
    } 
    
}

module.exports = new CarHandler();
