const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

const app = express();

// Middleware to handle JSON and Cross-Origin requests
app.use(express.json());
app.use(cors());

// MongoDB Connection Logic
const DB_URI = process.env.MONGO_URI;

mongoose.connect(DB_URI)
    .then(() => console.log("MongoDB Connected Successfully!"))
    .catch((err) => console.log("Database Connection Error: ", err));

// Main Route
app.get('/', (req, res) => {
    res.status(200).json({
        message: "Jai Lanka Travels API is Live",
        database: "Connected"
    });
});

// Port Setup
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});