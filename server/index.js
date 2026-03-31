const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB Connection
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:2026/jailanka';

mongoose.connect(MONGO_URI)
    .then(() => console.log('MongoDB Connected Successfully'))
    .catch(err => console.log('MongoDB Connection Error:', err));

// Basic Route for Bookings (Example)
app.post('/api/plan-trip', async (req, res) => {
    try {
        // මෙතැනදී ඔබට ලැබෙන දත්ත DB එකට save කළ හැක
        console.log('Trip Data Received:', req.body);
        res.status(200).json({ message: 'Trip planning started successfully!' });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});