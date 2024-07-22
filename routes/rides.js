const express = require('express');
const router = express.Router();
const Ride = require('../models/Ride');

// Create a new ride
router.post('/', async (req, res) => {
  try {
    const newRide = new Ride(req.body);
    await newRide.save();
    res.status(201).send(newRide);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Get all rides
router.get('/', async (req, res) => {
  try {
    const rides = await Ride.find();
    res.status(200).send(rides);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
