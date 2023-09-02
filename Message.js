const mongoose = require('mongoose');
const connection = require('./database');

// Define the schema for your data
const masterSchema = new mongoose.Schema({
  IMEI: Number,
  LAT: Number,
  LONG: Number,
  ASN_11: Number
});

// Create a model from the schema
const Master = connection.model('Master', masterSchema);

module.exports = Master;
