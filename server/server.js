const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const Itinerary = require('./models/Itinerary');
const Accommodation = require('./models/Accommodation');
const Discover = require('./models/Discover');




// 1. Route  require 
const packageRoute = require('./routes/packageRoutes');
const tourRoutes = require('./routes/tourRoutes');
const { seedAnuradhapuraTour, seedOffRoadAdventureItinerary } = require('./config/dbSeeder');

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
app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// 2. API Routes 
app.use('/api/packages', packageRoute);
app.use('/api/tours', tourRoutes); 



app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'), (err) => {
        if (err) {
            res.send("Jai Lanka Travel Server is running!");
        }
    });
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


mongoose.connect(process.env.MONGO_URI)
    .then(async () => {
        console.log("MongoDB Database Connected Successfully");
        // await seedAnuradhapuraTour();
        // await seedOffRoadAdventureItinerary();
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    })
    .catch((err) => console.log("Database connection error:", err));

    
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

        // 4. Database  Update 
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
    