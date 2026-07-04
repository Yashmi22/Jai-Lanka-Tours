const express = require('express');
const router = express.Router();
const Tour = require('../models/Tour');

// 1. හැම ටුවර් එකක්ම ගන්න (Dashboard එකට සහ DayTours පේජ් එකට)
router.get('/', async (mod, res) => {
  try {
    const tours = await Tour.find();
    res.status(200).json(tours);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
});

// 2. ID එක අනුව තනි ටුවර් එකක විස්තර ගන්න (TourDetails පේජ් එකට)
router.get('/:id', async (req, res) => {
  try {
    const tour = await Tour.findOne({ tourId: req.params.id });
    if (!tour) {
      return res.status(404).json({ message: "Tour not found" });
    }
    res.status(200).json(tour);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
});

module.exports = router;