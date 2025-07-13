
const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
  name: String,
  points: { type: Number, default: 0 },
});
module.exports = mongoose.model('User', UserSchema);
