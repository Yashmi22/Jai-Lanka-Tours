const mongoose = require('mongoose');

const AccommodationSchema = new mongoose.Schema({
    name: { type: String, required: true },
    desc: String,
    longDesc: String,
    img: String,
    tags: [String],
    amenities: [String],
    hotelMap: String // Google Map Embed URL
}, { timestamps: true });

module.exports = mongoose.model('Accommodation', AccommodationSchema);