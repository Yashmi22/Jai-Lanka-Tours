// routes/adminRoutes.js
const express = require('express');
const router = express.Router();

// MongoDB Models  import  (Optional)
// const Itinerary = require('../models/Itinerary');
// const Discover = require('../models/Discover');

// GET: Admin Stats Endpoint
router.get('/stats', async (req, res) => {
  try {
    // Database  Counts\
    // const activeItineraries = await Itinerary.countDocuments();
    // const discoverCount = await Discover.countDocuments();

    //  Dummy Data 
    const statsData = {
      totalRevenue: 'Rs',
      activeItineraries: 12,
      discoverCount: 28,
      dayToursCount: 8,
      accommodationsCount: 15,
      totalViews: 3420,
      monthlyViews: [120, 300, 450, 800, 650, 900, 1200]
    };

    res.status(200).json(statsData);
  } catch (error) {
    console.error("Stats Error:", error);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
});

module.exports = router;