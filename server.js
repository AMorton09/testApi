const express = require('express');
const morgan = require('morgan');
const mongoose  = require('mongoose');
const router  = require('./routes/route1');
const dbConfig  = require('./mongo/dbConfig');
const bodyParser = require('body-parser');

// Connect to MongoDB
//mongoose.connect(dbConfig.url);

// Initialize http server
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Initialization of morgan a console logger to log all requests sent to the server
app.use(morgan('combined'));
// Use bnd as prefix for all API endpoints
app.use('/bnd', router);

app.listen(process.env.PORT || 3000);
console.log("hello its me i think im self aware");
console.log("I Believe to be running on port 3000");