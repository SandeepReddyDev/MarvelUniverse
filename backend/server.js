require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors()); // Allow frontend to access backend
app.use(express.json()); // Middleware for JSON parsing

// ✅ Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('✅ Connected to Database');
  })
  .catch(error => {
    console.error('❌ Error connecting to DB:', error);
  });

// ✅ API Endpoint to Fetch Data
app.get('/api/movies', async (req, res) => {
  try {
    const db = mongoose.connection.db; // Get database reference
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

// ✅ Start Backend Server
app.listen(port, () => {
  console.log(`🚀 Server is running on port ${port}`);
});
