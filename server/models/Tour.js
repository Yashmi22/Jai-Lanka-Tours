const mongoose = require('mongoose');

const PlaceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true }, // පින්තූරයේ නම හෝ URL එක
  desc: { type: String, required: true }
});

const TourSchema = new mongoose.Schema({
  tourId: { type: String, required: true, unique: true }, // e.g., "anuradhapura"
  title: { type: String, required: true },
  category: { type: String, required: true },
  duration: { type: String, required: true },
  type: { type: String, required: true },
  
  kingdomTitle: { type: String, required: true },
  kingdomDesc: { type: String, required: true },
  
  lunchTitle: { type: String, required: true },
  lunchDesc: { type: String, required: true },
  
  mihintaleTitle: { type: String, required: true },
  mihintaleImage: { type: String, required: true },
  mihintaleDesc: { type: String, required: true },
  
  places: [PlaceSchema] // පූජනීය ස්ථාන 6 
}, { timestamps: true });

module.exports = mongoose.model('Tour', TourSchema);