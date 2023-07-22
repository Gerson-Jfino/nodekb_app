const mongodb = require('mongoose');

mongodb.connect('mongodb://0.0.0.0/nodekb');
const db = mongodb.connection;
module.exports = db;