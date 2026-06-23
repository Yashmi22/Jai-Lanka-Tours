const mongoose = require('mongoose');

const DiscoverSchema = new mongoose.Schema({
    name: { type: String, required: true },
    tag: { type: String, required: true },
    category: { type: String, required: true },
    type: { type: String, enum: ['destination', 'experience'], required: true }, // මෙතනින් තමයි වෙන් කරන්නේ
    img: { type: String, required: true },
    desc: { type: String, required: true },

    // ✨ Front-end එකේ Premium UI එකට අවශ්‍ය අලුත් Fields ටික මෙන්න:
    duration: { type: String, default: 'Flexible' }, // උදා: "2-3 Days"
    rating: { type: String, default: '4.9' },       // උදා: "4.8"
    bestTime: { type: String, default: 'All Year' }  // උදා: "Jan to April"
}, { timestamps: true });

module.exports = mongoose.model('Discover', DiscoverSchema);