const express = require('express');
const router = express.Router();
const Tripadvisor = require('../models/TripAdvisorReview');

// 1. Fetch All Reviews
router.get('/admin/all', async (req, res) => {
    try {
        const reviews = await Tripadvisor.find().sort({ createdAt: -1 });
        res.status(200).json(reviews);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// 2. Add New Review
router.post('/admin', async (req, res) => {
    try {
        const newReview = new Tripadvisor(req.body);
        const savedReview = await newReview.save();
        res.status(201).json(savedReview);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// 3. Update Review
router.put('/admin/:id', async (req, res) => {
    try {
        const updatedReview = await Tripadvisor.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.status(200).json(updatedReview);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// 4. Delete Review
router.delete('/admin/:id', async (req, res) => {
    try {
        await Tripadvisor.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Review deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;