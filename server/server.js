const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const Itinerary = require('./models/Itinerary');
const Accommodation = require('./models/Accommodation');
const Discover = require('./models/Discover');

// 1. Route එක මුලින්ම require කරගන්න
const packageRoute = require('./routes/packageRoutes');

const app = express();

// --- CORS CONFIGURATION ---
app.use(cors({
    origin: 'http://localhost:5173', 
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

// Middleware
// JSON data සඳහා size limit එක 50MB දක්වා වැඩි කිරීම
app.use(express.json({ limit: '50mb' }));

// URL-encoded data (Form data) සඳහා size limit එක 50MB දක්වා වැඩි කිරීම
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// 2. API Routes මෙතනට ඇතුළත් කරන්න
app.use('/api/packages', packageRoute);

// Server එක වැඩ කරනවද කියලා බලන්න පොඩි පණිවිඩයක්
app.get('/', (req, res) => {
    res.send("Jai Lanka Travel Server is running!");
});

// Database Connection
const PORT = process.env.PORT || 5000;

// .env එකේ තියෙන MONGO_URI එක පාවිච්ចි කරනවා
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB Database Connected Successfully");
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    })
    .catch((err) => console.log("Database connection error:", err));

// උදාහරණයක් ලෙස අලුත් හෝටලයක් ඇතුළත් කිරීම:
app.post('/api/accommodation', async (req, res) => {
    try {
        const newHotel = new Accommodation(req.body);
        const savedHotel = await newHotel.save();
        res.status(201).json(savedHotel);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Itinerary APIs
app.post('/api/itineraries', async (req, res) => {
    try {
        const newItinerary = new Itinerary(req.body);
        const savedItinerary = await newItinerary.save();
        res.status(201).json(savedItinerary);
    } catch (err) {
        console.error("Database Save Error:", err);
        res.status(400).json({ message: err.message, details: err.errors });
    }
});

app.get('/api/itineraries', async (req, res) => {
    try {
        const itineraries = await Itinerary.find();
        res.status(200).json(itineraries);
    } catch (err) {
        res.status(500).json(err);
    }
});

app.get('/api/itineraries/:id', async (req, res) => {
    try {
        const itinerary = await Itinerary.findById(req.params.id);
        if (!itinerary) {
            return res.status(404).json({ message: 'Itinerary not found' });
        }
        res.status(200).json(itinerary);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Itinerary Update API
app.put('/api/itineraries/:id', async (req, res) => {
    try {
        const itinerary = await Itinerary.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!itinerary) {
            return res.status(404).json({ message: 'Itinerary not found' });
        }
        res.status(200).json(itinerary);
    } catch (err) {
        console.error("Database Update Error:", err);
        res.status(400).json({ message: err.message, details: err.errors });
    }
});

app.delete('/api/itineraries/:id', async (req, res) => {
    try {
        console.log('Delete request received for ID:', req.params.id);
        const deletedItinerary = await Itinerary.findByIdAndDelete(req.params.id);
        if (!deletedItinerary) {
            console.log('Itinerary not found for ID:', req.params.id);
            return res.status(404).json({ message: 'Itinerary not found' });
        }
        console.log('Itinerary deleted successfully:', deletedItinerary._id);
        res.status(200).json({ message: 'Itinerary deleted successfully', data: deletedItinerary });
    } catch (err) {
        console.error('Error deleting itinerary:', err);
        res.status(500).json({ message: 'Error deleting itinerary', error: err.message });
    }
});

// Discover APIs
app.post('/api/discover', async (req, res) => {
    try {
        const newDiscover = new Discover(req.body);
        const savedDiscover = await newDiscover.save();
        res.status(201).json(savedDiscover);
    } catch (err) {
        console.error("Database Save Error:", err);
        res.status(400).json({ message: err.message, details: err.errors });
    }
});

app.get('/api/discover', async (req, res) => {
    try {
        const discovers = await Discover.find();
        res.status(200).json(discovers);
    } catch (err) {
        res.status(500).json(err);
    }
});

// 💡 මෙතන තිබ්බ ** සලකුණු ඉවත් කළා (දැන් හරියටම වැඩ)
app.get('/api/discover/:id', async (req, res) => {
    try {
        const discover = await Discover.findById(req.params.id);
        if (!discover) {
            return res.status(404).json({ message: 'Discover not found' });
        }
        res.status(200).json(discover);
    } catch (err) {
        res.status(500).json(err);
    }
});

app.delete('/api/discover/:id', async (req, res) => {
    try {
        console.log('Delete request received for ID:', req.params.id);
        const deletedDiscover = await Discover.findByIdAndDelete(req.params.id);
        if (!deletedDiscover) {
            console.log('Discover not found for ID:', req.params.id);
            return res.status(404).json({ message: 'Discover not found' });
        }
        console.log('Discover deleted successfully:', deletedDiscover._id);
        res.status(200).json({ message: 'Discover deleted successfully', data: deletedDiscover });
    } catch (err) {
        console.error('Error deleting discover:', err);
        res.status(500).json({ message: 'Error deleting discover', error: err.message });
    }
});