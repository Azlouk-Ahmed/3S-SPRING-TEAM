// Import necessary modules
const express = require('express');
const router = express.Router();
const testimonialController = require('../controllers/testiControllers');

// Route to create a new testimonial
router.post('/testimonial', testimonialController.createTestimonial);

// Route to get all testimonials
router.get('/testimonial', testimonialController.getAllTestimonials);

// Route to update a testimonial by ID
router.put('/testimonial/:id', testimonialController.updateTestimonial);

// Route to delete a testimonial by ID
router.delete('/testimonial/:id', testimonialController.deleteTestimonial);

// Export the router
module.exports = router;
