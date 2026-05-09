const express = require('express');
const router = express.Router();
const Package = require('../models/Package');

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

module.exports = router;