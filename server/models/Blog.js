const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String, required: true },
  image: { type: String, required: true },
  desc: { type: String, required: true },
  content: { type: String, required: true },
  readTime: { type: String, default: '5 min read' }
}, { timestamps: true });

module.exports = mongoose.model('Blog', BlogSchema);