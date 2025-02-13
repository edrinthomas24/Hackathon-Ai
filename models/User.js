const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['user', 'management'], default: 'user' },
  uniqueCode: { type: String, unique: true },
});

module.exports = mongoose.model('User', userSchema);
