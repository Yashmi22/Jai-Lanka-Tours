const express = require('express');
const router = express.Router();
const Package = require('../models/Package');
const Discover = require('../models/Discover'); // අපි කලින් හදාගත්තු Discover Model එක මෙතනට Require කරන්න
const Blog = require('../models/Blog'); // Blog Model එක Require කරන්න

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
        // req.body එකේ කෙලින්ම img ලින්ක් එක තියෙන නිසා අමුතුවෙන් මුකුත් කරන්න ඕන නෑ
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

// ==========================================
// 3. BLOG ROUTES (Blog Management)
// ==========================================

// Admin Blog පේජ් එකෙන් එන Blog දත්ත Save කරන පාර
router.post('/blog/add', async (req, res) => {
    try {
        const newBlog = new Blog(req.body);
        const savedBlog = await newBlog.save();
        res.status(200).json(savedBlog);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Blog පේජ් එකට Database එකේ තියෙන ඔක්කොම Blog ටික ලබා දෙන පාර
router.get('/blog/all', async (req, res) => {
    try {
        const blogs = await Blog.find();
        res.status(200).json(blogs);
    } catch (err) {
        res.status(500).json(err);
    }
});

// නිශ්චිත Blog එක ID එක ඇතිනෙ ලබා දෙන පාර
router.get('/blog/:id', async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);
        if (!blog) {
            return res.status(404).json({ message: 'Blog not found' });
        }
        res.status(200).json(blog);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;