module.exports = function (app) {
    let car_handler = require("../handlers/car_handler");

    /**
     *  Get Cars Route
     * 
     *  Params: 
     *      - make: manufacturer
     *      - model: car model
     *      - price: budget in $
     *      - year: model year
     * 
     *  Output: 
     *         {
     *              data: [ CARS_ARRAY ],
     *              grouped_data: {
     *                  MAKE-MODEL: {
     *                      count: Num,
     *                      data: [ CARS_ARRAY ]
     *                  },
     *                  ...
     *              },
     *              count: Num,
     *              min_price: Num,
     *              max_price: Num,
     *              median_price: Num,                                                                                                                              
     *         }                                                                                            
     */
    app.get("/cars/:make?/:model?/:price?/:year?", function (req, res) {
        return car_handler.getCars(req, res);
    });

};