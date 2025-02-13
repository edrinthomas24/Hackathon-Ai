const express = require('express');
const User = require('../models/User');
const LostMember = require('../models/LostMember');

const router = express.Router();

// Middleware to check admin access
const isAdmin = (req, res, next) => {
  const { password } = req.headers;
  if (password === 'Klaus_Mike') {
    next();
  } else {
    res.status(403).json({ message: 'Access denied' });
  }
};

// Get all members
router.get('/members', isAdmin, async (req, res) => {
  const members = await User.find();
  res.json(members);
});

// Get all lost members
router.get('/lost-members', isAdmin, async (req, res) => {
  const lostMembers = await LostMember.find().populate('reportedBy');
  res.json(lostMembers);
});

module.exports = router;
