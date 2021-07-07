'use strict';

const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//API routes
const carRoutes = require('./api/routes/car_routes');
carRoutes(app);

//API port
const port = 4000;

app.listen(port, function () {
    console.log('Listening on port ' + port);
});

module.exports = app;