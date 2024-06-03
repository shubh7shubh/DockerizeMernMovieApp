const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://kosevimit:newEcommerceApp@cluster0.3fiwro7.mongodb.net/';

mongoose.connect(connectionString, { useNewUrlParser: true }).catch((e) => {
  console.error('Connection error', e.message);
});

const db = mongoose.connection;

module.exports = db;
