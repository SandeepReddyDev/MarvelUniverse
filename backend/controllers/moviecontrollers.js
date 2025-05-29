const Movie = require('../models/Movie');

const createMovie = async (req, res) => {
    try {
        const { id, image, image2, poster, trailerLink, description, rating, releaseDate, title } = req.body;

        const newMovie = await Movie.create(req.body);
        res.status(201).json(newMovie);
    } catch (error) {
        console.error("There is an error:", error);
        res.status(500).json({ message: "Server error" });
    }
};

module.exports = {
    createMovie
};
