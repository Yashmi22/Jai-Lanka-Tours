const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config({ path: './.env' });
const Itinerary = require('./models/Itinerary');
const Accommodation = require('./models/Accommodation');
const Discover = require('./models/Discover');

// Require the route first
const packageRoute = require('./routes/packageRoutes');

const app = express();

// --- CORS CONFIGURATION (Production Ready) ---
// Add your future live frontend URL to this array when you host it
const allowedOrigins = [
    'http://localhost:5173', // Local Vite development port
    'http://localhost:3000'  // Local React development port
];

app.use(cors({
    origin: function (origin, callback) {
        // Allow requests with no origin (like mobile apps, postman, or curl)
        if (!origin) return callback(null, true);
        
        if (allowedOrigins.indexOf(origin) === -1) {
            const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

// Middleware
// Increase size limit for JSON data up to 50MB
app.use(express.json({ limit: '50mb' }));

// Increase size limit for URL-encoded data (Form data) up to 50MB
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// Include API Routes here
app.use('/api/packages', packageRoute);

// Simple route to check if the server is running
app.get('/', (req, res) => {
    res.send("Jai Lanka Travel Server is running!");
});

// --- SERVER STARTUP & DATABASE CONNECTION (Bypassed Freeze) ---
const PORT = process.env.PORT || 5000;

// 1. සර්වර් එක ඩේටාබේස් එක එනකම් බලන් ඉන්නේ නැතිව කෙලින්ම පණ ගැන්වෙනවා
app.listen(PORT, () => {
    console.log(`🚀 Jai Lanka Server is smoothly running on port ${PORT}`);
});

// 2. ඩේටාබේස් එක Background එකේ හෙමින් කනෙක්ට් වෙනවා (සර්වර් එක හිර කරන්නේ නැහැ)
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("🎯 MongoDB Database Connected Successfully");
    })
    .catch((err) => {
        console.error("❌ Database connection error:", err.message);
    });

// Example: Inserting a new accommodation/hotel
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
            return res.status(404).json({ message: 'Itinerary not found' });
        }
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

// Get discover item by ID
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
            return res.status(404).json({ message: 'Discover not found' });
        }
        res.status(200).json({ message: 'Discover deleted successfully', data: deletedDiscover });
    } catch (err) {
        console.error('Error deleting discover:', err);
        res.status(500).json({ message: 'Error deleting discover', error: err.message });
    }
});