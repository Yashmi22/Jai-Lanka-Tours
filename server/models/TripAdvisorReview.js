const mongoose = require('mongoose');

const tripAdvisorReviewSchema = new mongoose.Schema(
  {
    authorName: {
      type: String,
      required: true,
      trim: true,
    },
    authorLocation: {
      type: String,
      default: '',
      trim: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
      default: 5,
    },
    reviewTitle: {
      type: String,
      required: true,
      trim: true,
    },
    reviewText: {
      type: String,
      required: true,
      trim: true,
    },
    reviewDate: {
      type: String,
      default: '',
      trim: true,
    },
    isPublished: {
      type: Boolean,
      default: true, // Auto-published by default
    },
  },
  {
    timestamps: true, // CreatedAt UpdatedAt Auto 
  }
);

module.exports = mongoose.model('TripAdvisorReview', tripAdvisorReviewSchema);