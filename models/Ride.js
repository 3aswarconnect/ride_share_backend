const mongoose = require('mongoose');

const rideSchema = new mongoose.Schema({
  bike: String,
  time: String,
  destination: String,
  fare: String,
  contactNumber: String
});

module.exports = mongoose.model('Ride', rideSchema);
