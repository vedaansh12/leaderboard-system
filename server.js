// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const leaderboardRoutes = require('./routes/leaderboard');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI);

//mongodb+srv://leaderboard:<db_password>@cluster1.ihfjbeq.mongodb.net/

app.use('/api', leaderboardRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
