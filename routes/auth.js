const express = require('express');
const User = require('../models/User');
const jwt = require('jsonwebtoken');

const router = express.Router();

// Sign-up route
router.post('/signup', async (req, res) => {
  const { name, email, password, role } = req.body;
  const uniqueCode = Math.random().toString(36).substring(7); // Generate a unique code
  const user = new User({ name, email, password, role, uniqueCode });
  await user.save();
  res.status(201).json({ message: 'User created', uniqueCode });
});

// Login route
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user || user.password !== password) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
  const token = jwt.sign({ userId: user._id, role: user.role }, 'secret_key');
  res.json({ token });
});

module.exports = router;
