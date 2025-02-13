const mongoose = require('mongoose');

const lostMemberSchema = new mongoose.Schema({
  name: { type: String, required: true },
  contactDetails: { type: String, required: true },
  reportedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('LostMember', lostMemberSchema);
