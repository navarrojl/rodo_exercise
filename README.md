# RODO API EXERCISE

Rodo API exercise is an API to get cars data. 

# Requierements

Rodo API Exercise requieres the following to run: 

* [Node.js](https://nodejs.org/) 12.18.2+
* [npm](https://www.npmjs.com/)

# Installation

Use the package manager [npm](https://www.npmjs.com/) to install dependencies.

```bash
npm install
```

# Run

Use [npm](https://www.npmjs.com/) to run the application: 

```bash
npm run start
```

In development environments you can run the application with nodemon: 

```bash
npm run start-nodemon
```

Additional information:

* Application runs in port 4000 by default
* If you want to change the port edit "port" const in app/index.js file
* In production environments is recommended to add .env files to manage the environment variables. As this is just a coding test, .env files are not included

# How to use

Use the following route to get cars data: 

```bash
http://localhost:4000/cars
```

The following parameters are optional: 

* make: manufacturer
* model: car model
* price: budget in $
* year: model year

```bash
http://localhost:4000/cars?make=MAKE_VALUE&model=MODEL_VALUE&price=PRICE_VALUE&year=YEAR_VALUE
```

It is possible to get cars data from command line using [curl](https://curl.se/docs/manpage.html) command: 

```bash
curl http://localhost:4000/cars?make=ACURA&price=20000
```
It is also possible to use tools like [postman](https://www.postman.com/) or Chrome/Safari/Mozilla to get the data. 


# Project Architecture

Rodo API exercise is divided in the following layers: 
* Routes: API routes declaration
* Handlers: Handle API requests and param validations
* Controllers: Business logic
* Data: cars dataset

There is also a utils folder with the following files:
* functions.js: Global Functions

# Assumtions
* If no params are sent, all values are returned
* If no results are found, empty array is returned with http 200 response code
* Partial make and model search uses the "includes" method. Another option would be using "startsWith()" method
* In case a DataBase is requiered (MySQL, MongoDB,...), a Models Layer would be needewd to manage the objects. Using ORM (sequelize, mongoose…) is a good approach for data mapping