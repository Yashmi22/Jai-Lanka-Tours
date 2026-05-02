const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Server එක වැඩ කරනවද කියලා බලන්න පොඩි පණිවිඩයක්
app.get('/', (req, res) => {
    res.send("Jai Lanka Travel Server is running!");
});

// Database Connection
const PORT = process.env.PORT || 5000;

// .env එකේ තියෙන MONGO_URI එක පාවිච්චි කරනවා
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB Database Connected Successfully");
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    })
    .catch((err) => console.log("Database connection error:", err));