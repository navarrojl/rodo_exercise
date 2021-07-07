'use strict';

const express = require('express');
const app = express();
app.use(express.json());

//API port
const port = 4000;

app.listen(port, function () {
    console.log('Listening on port ' + port);
});