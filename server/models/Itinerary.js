const mongoose = require('mongoose');

const ItinerarySchema = new mongoose.Schema({
    title: { type: String, required: true },
    category: { type: String, default: 'CULTURAL TOURS' },
    tag: { type: String }, // Duration tag (e.g., "7 Days / 6 Nights")
    accommodation: { type: String, default: '3-Star Hotels' }, // Default accommodation grade
    duration: String,
    description: String,
    imageUrl: String, // Main Image URL
    mapUrl: String, // Google Map Embed URL
    tourPlan: [{
        dayNumber: { type: Number },
        day: String,
        title: String,
        activities: [String],
        images: [String]
    }],
    hotels: [{
        name: String,
        location: String,
        desc: String,
        longDesc: String,
        img: String,
        amenities: [String],
        hotelMap: String
    }]
}, { timestamps: true });

module.exports = mongoose.model('Itinerary', ItinerarySchema);