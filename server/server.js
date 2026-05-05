const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// 1. Route එක මුලින්ම require කරගන්න
const packageRoute = require('./routes/packageRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // මේක දැනටමත් තියෙනවා, ඒ නිසා එහෙමම තියන්න

// 2. API Routes මෙතනට ඇතුළත් කරන්න
app.use('/api/packages', packageRoute);

// Server එක වැඩ කරනවද කියලා බලන්න පොඩි පණිවිඩයක්
app.get('/', (req, res) => {
    res.send("Jai Lanka Travel Server is running!");
});

// Database Connection
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB Database Connected Successfully");
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    })
    .catch((err) => console.log("Database connection error:", err));