const mongoose = require('mongoose');

const ItinerarySchema = new mongoose.Schema({
    title: { type: String, required: true },
    category: { type: String, default: 'CULTURAL TOURS' },
    duration: String,
    description: String,
    img: String, // Main Image URL
    mapUrl: String, // Google Map Embed URL
    tourPlan: [{
        day: String,
        title: String,
        activities: [String],
        images: [String]
    }],
    hotels: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Accommodation' }]
}, { timestamps: true });

module.exports = mongoose.model('Itinerary', ItinerarySchema);