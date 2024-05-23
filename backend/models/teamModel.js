
const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  
  position: {
    type: String,
    enum: ["webdev", "designer", "manager"]
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user"
  },
  experience: {
    type: Number,
    required: true
  },
  projects: [Object],
  testimnials: [Object],
  softSkills: [Object],
  technicalSkills: [Object],
  about: String,
  linkedIn: String,
  password: String,
  behance: String
});

// Create Team model
const Team = mongoose.model('Team', teamSchema);

// Export the Team model
module.exports = Team;
