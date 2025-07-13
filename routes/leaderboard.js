// routes/leaderboard.js
const express = require('express');
const router = express.Router();
const User = require('../models/User');
const ClaimHistory = require('../models/ClaimHistory');

// Add user
router.post('/user', async (req, res) => {
  const user = new User({ name: req.body.name });
  await user.save();
  res.json(user);
});

// Get all users (sorted by points)
router.get('/users', async (req, res) => {
  const users = await User.find().sort({ points: -1 });
  res.json(users);
});

// Claim random points
router.post('/claim/:userId', async (req, res) => {
  const points = Math.floor(Math.random() * 10) + 1;
  const user = await User.findById(req.params.userId);
  if (!user) return res.status(404).send("User not found");

  user.points += points;
  await user.save();

  const history = new ClaimHistory({ userId: user._id, points });
  await history.save();

  res.json({ user, points });
});

// Get claim history
router.get('/history', async (req, res) => {
  const history = await ClaimHistory.find().populate('userId').sort({ timestamp: -1 });
  res.json(history);
});

module.exports = router;
