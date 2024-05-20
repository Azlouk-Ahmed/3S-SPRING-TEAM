// Import necessary modules
const mongoose = require('mongoose');

// Define the testimonial schema
const testimonialSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Team',
    required: true
  },
  from: {
    type: String,
    required: true
  },
  fromImg: String,
  fromPosition: String,
  content: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Create Testimonial model
const Testimonial = mongoose.model('Testimonial', testimonialSchema);

// Export the Testimonial model
module.exports = Testimonial;
