const mongoose = require('mongoose');

const rideSchema = new mongoose.Schema({
  bike: String,
  time: Date,
  destination: String,
  fare: String,
  contactNumber: String
}, { timestamps: true }); // Adds createdAt and updatedAt fields

const Ride = mongoose.model('Ride', rideSchema);

module.exports = Ride;
