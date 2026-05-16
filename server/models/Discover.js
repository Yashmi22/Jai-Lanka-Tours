const mongoose = require('mongoose');

const DiscoverSchema = new mongoose.Schema({
    name: { type: String, required: true },
    tag: { type: String, required: true },
    category: { type: String, required: true },
    type: { type: String, enum: ['destination', 'experience'], required: true }, // මෙතනින් තමයි වෙන් කරන්නේ
    img: { type: String, required: true },
    desc: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Discover', DiscoverSchema);