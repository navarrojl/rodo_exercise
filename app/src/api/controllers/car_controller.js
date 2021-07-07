const Controller = require("./controller");
const Cars = require('../data/cars.json');
const Functions = require('../../utils/functions');

const CarController = class CarController extends Controller {

    constructor() {
        super();
    }

    async getCars(filters) {
        // Get Cars from DATASET. If we would like to get the data from DataBase, it would be needed to create the models and manage the connection
        // Using ORM is a good option
        let cars = Cars;
        let filtered_cars = this.filterCars(cars, filters);
        let grouped_cars = this.groupCars(filtered_cars);
        let car_prices = filtered_cars.map(car => car.price);

        let res = {
            data: filtered_cars,
            grouped_data: grouped_cars,
            count: filtered_cars.length,
            min_price: Math.min(...car_prices),
            max_price: Math.max(...car_prices),
            median_price: Functions.calculateMedian(car_prices)
        }

        return res;
    }

    filterCars(cars, filters) {
        return cars
            .filter(car => filters.make != null ? car.make.toLowerCase().includes(filters.make.toLowerCase()) : -1)
            .filter(car => filters.model != null ? car.model.toLowerCase().includes(filters.model.toLowerCase()) : -1)
            .filter(car => filters.price != null ? car.price <= filters.price : -1)
            .filter(car => filters.year != null ? car.year == filters.year : -1);
    }

    groupCars(cars) {
        return cars.reduce((count, car) => {
            let groupKey = car['make'] + '-' + car['model'];
            // Init count if not exists
            if (!count[groupKey]) {
                count[groupKey] = {
                    count: 0,
                    data: []
                };
            }
            // Count and push new car to the group
            count[groupKey].count++;
            count[groupKey].data.push(car);
            return count;
        }, {});
    };

}

module.exports = new CarController();