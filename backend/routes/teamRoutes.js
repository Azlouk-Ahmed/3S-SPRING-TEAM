// Import necessary modules
const express = require('express');
const router = express.Router();
const teamController = require('../controllers/teamcontroller');

// Route to create a new team member
router.post('/team', teamController.createTeamMember);

// Route to get all team members
router.get('/team', teamController.getAllTeamMembers);

// Route to update a team member by ID
router.get('/team/:id', teamController.getbyid);
router.put('/team/:id', teamController.updateTeamMember);

// Route to delete a team member by ID
router.delete('/team/:id', teamController.deleteTeamMember);

// Export the router
module.exports = router;
