const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path'); 
require('dotenv').config();

const Itinerary = require('./models/Itinerary');
const Accommodation = require('./models/Accommodation');
const Discover = require('./models/Discover');

const packageRoute = require('./routes/packageRoutes');
const tourRoutes = require('./routes/tourRoutes');
const seedAnuradhapuraTour = require('./config/dbSeeder');

const app = express();

app.use(cors());
app.use(express.json()); 

// 💡 1. Frontend  build Serve
app.use(express.static(path.join(__dirname, '../client/build'))); 
app.use(express.static(path.join(__dirname, 'public'))); 

// API Routes
app.use('/api/packages', packageRoute);
app.use('/api/tours', tourRoutes); 


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'), (err) => {
        if (err) {
            res.send("Jai Lanka Travel Server is running!");
        }
    });
});

// Database Connection
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb+srv://jailankauser:jailanka123@cluster0.p7scb.mongodb.net/jai-lanka-travels?retryWrites=true&w=majority';
mongoose.connect(MONGO_URI)
    .then(async () => { 
        console.log("⚡ MongoDB Database Connected Successfully");
        await seedAnuradhapuraTour();
        app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
    })
    .catch((err) => {
        console.error("❌ Database connection error:", err);
        console.error("Ensure MongoDB is running and accessible at 127.0.0.1:27017.");
        console.error("On Windows: start the MongoDB service or run 'mongod' in a terminal.");
        console.error("Or run a local MongoDB with Docker: docker run -d -p 27017:27017 --name mongo mongo:6.0");
        process.exit(1);
    });



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

app.delete('/api/itineraries/:id', async (req, res) => {
    try {
        const deletedItinerary = await Itinerary.findByIdAndDelete(req.params.id);
        if (!deletedItinerary) return res.status(404).json({ message: 'Itinerary not found' });
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
        if (!deletedDiscover) return res.status(404).json({ message: 'Discover not found' });
        res.status(200).json({ message: 'Discover deleted successfully', data: deletedDiscover });
    } catch (err) {
        res.status(500).json({ message: 'Error deleting discover', error: err.message });
    }
});