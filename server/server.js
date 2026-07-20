const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const Itinerary = require('./models/Itinerary');
const Accommodation = require('./models/Accommodation');
const Discover = require('./models/Discover');

// 1. Route require 
const packageRoute = require('./routes/packageRoutes');
const tourRoutes = require('./routes/tourRoutes');
const { seedAnuradhapuraTour, seedOffRoadAdventureItinerary } = require('./config/dbSeeder');

const app = express();

// --- CORS CONFIGURATION (Production Ready) ---
const allowedOrigins = [
    'http://localhost:5173',
    'http://localhost:3000',
    'https://jai-lanka-tours.vercel.app'
];

app.use(cors({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(null, true); // production support
        }
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

// Middleware
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// 2. Healthcheck & Root Route
app.get('/', (req, res) => {
    res.status(200).send('Jai Lanka Travel Backend is running successfully!');
});

// 3. API Routes 
app.use('/api/packages', packageRoute);
app.use('/api/tours', tourRoutes); 

// --- ADMIN AUTHENTICATION API ---
const JWT_SECRET = process.env.JWT_SECRET || "JaiLankaSuperSecretKey123";

// Admin Login Endpoint
app.post('/api/admin/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        const admin = await Admin.findOne({ username });
        if (!admin) {
            return res.status(400).json({ message: "Invalid Username or Password" });
        }

        const isMatch = await bcrypt.compare(password, admin.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid Username or Password" });
        }

        const token = jwt.sign({ id: admin._id }, JWT_SECRET, { expiresIn: '1d' });

        res.json({
            success: true,
            token,
            admin: { id: admin._id, username: admin.username }
        });
    } catch (error) {
        res.status(500).json({ message: "Server error during login" });
    }
});

// --- ACCOMMODATION & ITINERARY ROUTES ---
app.post('/api/accommodation', async (req, res) => {
    try {
        const newHotel = new Accommodation(req.body);
        const savedHotel = await newHotel.save();
        res.status(201).json(savedHotel);
    } catch (err) {
        res.status(500).json(err);
    }
});

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
        if (!itinerary) return res.status(404).json({ message: 'Itinerary not found' });
        res.status(200).json(itinerary);
    } catch (err) {
        res.status(500).json(err);
    }
});

app.put('/api/itineraries/:id', async (req, res) => {
    try {
        const existingItinerary = await Itinerary.findById(req.params.id);
        if (!existingItinerary) {
            return res.status(404).json({ message: 'Itinerary not found' });
        }

        const { title, category, tag, accommodation, description, imageUrl, tourPlan, hotels } = req.body;

        const updateData = {
            title,
            category,
            tag,
            accommodation,
            description,
            imageUrl: imageUrl || existingItinerary.imageUrl, 
            tourPlan,
            hotels
        };

        const itinerary = await Itinerary.findByIdAndUpdate(
            req.params.id, 
            { $set: updateData }, 
            { new: true }
        );
        
        res.status(200).json(itinerary);
    } catch (err) {
        console.error("Database Update Error:", err);
        res.status(400).json({ message: err.message });
    }
});

app.delete('/api/itineraries/:id', async (req, res) => {
    try {
        const deletedItinerary = await Itinerary.findByIdAndDelete(req.params.id);
        if (!deletedItinerary) {
            console.log('Itinerary not found for ID:', req.params.id);
            return res.status(404).json({ message: 'Itinerary not found' });
        }
        console.log('Itinerary deleted successfully:', deletedItinerary._id);
        res.status(200).json({ message: 'Itinerary deleted successfully', data: deletedItinerary });
    } catch (err) {
        res.status(500).json({ message: 'Error deleting itinerary', error: err.message });
    }
});

// --- DISCOVER ROUTES ---
app.post('/api/discover', async (req, res) => {
    try {
        const newDiscover = new Discover(req.body);
        const savedDiscover = await newDiscover.save();
        res.status(201).json(savedDiscover);
    } catch (err) {
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

app.get('/api/discover/:id', async (req, res) => {
    try {
        const discover = await Discover.findById(req.params.id);
        if (!discover) return res.status(404).json({ message: 'Discover not found' });
        res.status(200).json(discover);
    } catch (err) {
        res.status(500).json(err);
    }
});

app.delete('/api/discover/:id', async (req, res) => {
    try {
        const deletedDiscover = await Discover.findByIdAndDelete(req.params.id);
        if (!deletedDiscover) {
            console.log('Discover not found for ID:', req.params.id);
            return res.status(404).json({ message: 'Discover not found' });
        }
        console.log('Discover deleted successfully:', deletedDiscover._id);
        res.status(200).json({ message: 'Discover deleted successfully', data: deletedDiscover });
    } catch (err) {
        res.status(500).json({ message: 'Error deleting discover', error: err.message });
    }
});

app.put('/api/discover/:id', async (req, res) => {
    try {
        const updatedDiscover = await Discover.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!updatedDiscover) {
            console.log('Discover not found for update ID:', req.params.id);
            return res.status(404).json({ message: 'Discover not found' });
        }

        res.status(200).json(updatedDiscover);
    } catch (err) {
        res.status(400).json({ message: err.message, details: err.errors });
    }
});

// Dashboard Stats API Endpoint
app.get('/api/admin/stats', async (req, res) => {
    try {
        const itineraryCount = await Itinerary.countDocuments();
        res.status(200).json({
            itineraries: itineraryCount,
            dayTours: 0 
        });
    } catch (err) {
        console.error("Dashboard stats error:", err);
        res.status(500).json({ message: "Server Error", error: err.message });
    }
});

// --- SERVER STARTUP & DATABASE CONNECTION ---
const PORT = process.env.PORT || 5000;
const mongoURI = process.env.MONGO_URI;

if (!mongoURI) {
  console.error('Error: MONGO_URI is not defined in environment variables!');
}

mongoose.connect(mongoURI)
  .then(() => {
    console.log('MongoDB Connected Successfully...');
    app.listen(PORT, '0.0.0.0', () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Database connection error occurred:', err.message);
    app.listen(PORT, '0.0.0.0', () => {
      console.log(`Server running on port ${PORT} (without DB)`);
    });
  });