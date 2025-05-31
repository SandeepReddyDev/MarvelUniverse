require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Root route to confirm server is running
app.get('/', (req, res) => {
  res.send('🎉 Marvel Movies API is Running!');
});

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ Connected to MongoDB');
  })
  .catch(error => {
    console.error('❌ MongoDB connection error:', error.message);
  });

// API Endpoint
app.get('/api/movies', async (req, res) => {
  try {
    const db = mongoose.connection.db;
    const legacyMovies = await db.collection('LegacyMovies').find().toArray();
    const timelineMovies = await db.collection('TimelineMovies').find().toArray();
    const webSeries = await db.collection('WebSeries').find().toArray();

    res.status(200).json({
      legacyMovies,
      timelineMovies,
      webSeries
    });
  } catch (error) {
    console.error("❌ Server error:", error);
    res.status(500).json({ message: "Server error", error });
  }
});

app.listen(port, () => {
  console.log(`🚀 Server is running on port ${port}`);
});
