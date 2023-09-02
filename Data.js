const mongoose = require('mongoose');
const connection = require('./database');

// Define the schema for your data
const dataSchema = new mongoose.Schema({
  DATE: Date,
  TIMESTAMP : Date,
  MAXINDEX: {
    type : Number,
    defualt : 1
  },
  INDEX: {
    type : Number,
    defualt : 0
  },  STINTERVAL: {
    type : Number,
    defualt : 10
  },
  IMEI: String,
  GSM: {
    type : Number,
    default : 1
  },
  SIM: {
    type : Number,
    default : 1
  },
  NET: {
    type : Number,
    default : 1
  },
  GPRS: {
    type : Number,
    default : 1
  },
  RSSI: {
    type : Number,
    default: function () {
        // Generate a random number between 3 and 50
        return Math.floor(Math.random() * (50 - 3 + 1)) + 3;
      }
  },
  ONLINE: {
    type : Number,
    default : 1
  },
  GPS: {
    type : Number,
    default : 1
  },
  GPSLOC: {
    type : Number,
    default : 1
  },
  LAT: Number,
  LONG: Number,
  VD: {
    type: Number,
    default : 0
  },
  LOAD: {
    type: Number,
    default : 0
  },
  MSGID: {
    type: Number,
    default : 0
  },
  ASN_11: String,
  POTP: {
    type : String,
    default : 123456
  },
  COTP: {
    type : String,
    default : 123456
  },
  SD: {
    type : Number,
    default : 1
  },
  RF: {
    type : Number,
    default : 1
  },
  TEMP: {
    type : Number,
    default : 45.5,
  },
  SIMSLOT: {
    type : Number,
    default : 1,
  },
  SIMCHNGCNT: {
    type : Number,
    default : 1,
  },
  FLASH: {
    type : Number,
    default : 1,
  },
  VBATT: {
    type : Number,
    default : 0,
  },
  PST: {
    type : Number,
    default : 1,
  },
  BATTST: {
    type : Number,
    default : 1,
  },
});

// Create a model from the schema
const Data = connection.model('Data', dataSchema);

module.exports = Data;
