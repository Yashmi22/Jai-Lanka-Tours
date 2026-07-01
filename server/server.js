const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs'); 
const jwt = require('jsonwebtoken'); 
require('dotenv').config({ path: './.env' });

// Models
const Itinerary = require('./models/Itinerary');
const Accommodation = require('./models/Accommodation');
const Discover = require('./models/Discover');

// Dynamic fallback schema to hide DayTour errors if model file is missing
let DayTour;
try {
    DayTour = mongoose.model('DayTour');
} catch (error) {
    const dayTourSchema = new mongoose.Schema({}, { strict: false, collection: 'daytours' });
    DayTour = mongoose.model('DayTour', dayTourSchema);
}

// Admin Schema registration 
let Admin;
try {
    Admin = mongoose.model('Admin');
} catch (error) {
    const adminSchema = new mongoose.Schema({
        username: { type: String, required: true, unique: true },
        password: { type: String, required: true }
    });
    Admin = mongoose.model('Admin', adminSchema);
}

// Require the route first
const packageRoute = require('./routes/packageRoutes');

const app = express();

// --- CORS CONFIGURATION (Production Ready) ---
const allowedOrigins = [
    'http://localhost:5173', // Local Vite development port
    'http://localhost:3000'  // Local React development port
];

app.use(cors({
    origin: function (origin, callback) {
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
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// Include API Routes here
app.use('/api/packages', packageRoute);

// Simple route to check if the server is running
app.get('/', (req, res) => {
    res.send("Jai Lanka Travel Server is running!");
});

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

// --- SERVER STARTUP & DATABASE CONNECTION ---
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`🚀 Jai Lanka Server is smoothly running on port ${PORT}`);
});

mongoose.connect(process.env.MONGO_URI)
    .then(async () => {
        console.log("🎯 MongoDB Database Connected Successfully");
        
        const adminUsername = process.env.ADMIN_USERNAME;
        const adminPassword = process.env.ADMIN_PASSWORD;

        if (adminUsername && adminPassword) {
            const adminExists = await Admin.findOne({ username: adminUsername });
            if (!adminExists) {
                const hashedPassword = await bcrypt.hash(adminPassword, 10);
                const defaultAdmin = new Admin({ username: adminUsername, password: hashedPassword });
                await defaultAdmin.save();
                console.log("👤 Secure Admin account initialized via Environment Variables!");
            }
        }
    })
    .catch((err) => {
        console.error("❌ Database connection error:", err.message);
    });

// Accommodations APIs
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

// Dashboard Stats API Endpoint
app.get('/api/admin/stats', async (req, res) => {
    try {
        const activeItinerariesCount = await Itinerary.countDocuments({});
        const dayToursCount = await DayTour.countDocuments({});
        const accommodationsCount = await Accommodation.countDocuments({});
        const discoverCount = await Discover.countDocuments({}); 

        const totalRevenue = "Rs. 0.00"; 

        res.json({
            totalRevenue: totalRevenue,
            activeItineraries: activeItinerariesCount,
            dayToursCount: dayToursCount,
            accommodationsCount: accommodationsCount,
            discoverCount: discoverCount, // Fixed missing comma here
            monthlyViews: [0, 0, 0, 0, 0, 0, 0]
        });
    } catch (error) {
        console.error("Dashboard stats error:", error);
        res.status(500).json({ message: "Server error fetching live dashboard stats" });
    }
});