// app.js

const express = require('express');
const bodyParser = require('body-parser');

const call = require('./routes/call.route'); // Imports routes for the products
const app = express();

// Set up mongoose connection
const mongoose = require('mongoose');
let dev_db_url = 'mongodb://sampleuser:abc123@ds133104.mlab.com:33104/swqdb1';
const mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.Promise = global.Promise;

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/call', call);

let port = process.env.PORT || 3000

app.listen({}, () => {
    console.log('Server is up and running on port numner ' + port);
});