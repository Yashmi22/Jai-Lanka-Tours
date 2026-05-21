const express = require('express');
const router = express.Router();
const Package = require('../models/Package');
const Discover = require('../models/Discover'); // අපි කලින් හදාගත්තු Discover Model එක මෙතනට Require කරන්න

// ==========================================
// 1. TOUR PACKAGES ROUTES (කලින් තිබුණු කොටස)
// ==========================================

// Dashboard එකෙන් එන දත්ත Save කරන පාර
router.post('/add', async (req, res) => {
    try {
        const newPackage = new Package(req.body);
        await newPackage.save();
        res.status(200).json("Package added!");
    } catch (err) {
        res.status(500).json(err);
    }
});


// ==========================================
// 2. DISCOVER SRI LANKA ROUTES (අලුතින් එකතු කළ කොටස)
// ==========================================

// Admin පේජ් එකෙන් එන Discover දත්ත (Destinations / Experiences) Save කරන පාර
router.post('/discover/add', async (req, res) => {
    try {
        const newDiscover = new Discover(req.body);
        const savedDiscover = await newDiscover.save();
        res.status(200).json(savedDiscover);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Discover Sri Lanka පේජ් එකට Database එකේ තියෙන ඔක්කොම දත්ත ටික ලබා දෙන පාර
router.get('/discover/all', async (req, res) => {
    try {
        const items = await Discover.find();
        res.status(200).json(items);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;