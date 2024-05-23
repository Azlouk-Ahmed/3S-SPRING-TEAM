// Import necessary modules
const Team = require('../models/teamModel');

// Controller for creating a new team member
exports.createTeamMember = async (req, res) => {
  try {
    const newTeamMember = await Team.create(req.body);
    res.status(201).json(newTeamMember);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const admin = await Team.findOne({email: req.body.email});
    if (!admin) {
      return res.status(500).json({ error: "email not found" });
      
    }
    if(admin) {
      if(admin.password === req.body.password) {
        res.status(200).json({admin});
        
      }else {
        return res.status(500).json({ error: "incorrect password" });
      }

    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controller for fetching all team members
exports.getAllTeamMembers = async (req, res) => {
  try {
    const teamMembers = await Team.find();
    res.status(200).json(teamMembers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.getbyid = async (req, res) => {
  try {
    const teamMembers = await Team.findById(req.params.id);
    res.status(200).json(teamMembers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controller for updating a team member by ID
exports.updateTeamMember = async (req, res) => {
  try {
    const updatedTeamMember = await Team.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedTeamMember) {
      return res.status(404).json({ message: 'Team member not found' });
    }
    res.status(200).json(updatedTeamMember);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controller for deleting a team member by ID
exports.deleteTeamMember = async (req, res) => {
  try {
    const deletedTeamMember = await Team.findByIdAndDelete(req.params.id);
    if (!deletedTeamMember) {
      return res.status(404).json({ message: 'Team member not found' });
    }
    res.status(200).json({ message: 'Team member deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


module.exports = exports;
