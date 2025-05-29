const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  releaseDate: { type: String, required: true, trim: true },
  rating: { type: Number, required: true, min: 0, max: 10 },
  poster: { type: String, required: true, trim: true },
  description: { type: String, required: true, trim: true },
  trailerLink: { type: String, required: true, trim: true },
  image: { type: String, required: true, trim: true },
  image2: { type: String, required: true, trim: true },
  id: { type: String, required: true, unique: true, trim: true }
});

module.exports = mongoose.model("Movie", movieSchema);
