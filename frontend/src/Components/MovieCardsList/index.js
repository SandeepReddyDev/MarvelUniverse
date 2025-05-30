import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import './index.css';
import {
  FaHeart,
  FaPlay,
  FaRegHeart,
  FaRegBookmark,
  FaBookmark,
  FaSearch
} from "react-icons/fa";



const MovieCard = ({ movie, onClickFavourites, onClickSave }) => {
  const data = useSelector((state) => state);
  return (
    <div className="movie-card-item">
      <img src={movie.image2} className="movie-card-image" alt={movie.title} />
      <div className="movie-card-info">
        <h3 className="movie-card-title">{movie.title}</h3>
        <div className="movie-card-details">
          <span className='rating-duration'>{movie.rating}/10</span>
          <span className='rating-duration'>{movie.duration}</span>
        </div>
        <div className="movie-card-buttons">
          <Link to={`/movie/${movie.id}`}>
            <button className="movie-card-button" title="Watch Now">
              <FaPlay />
            </button>
          </Link>

          <button className="movie-card-button" title="Like"
            onClick={() => { onClickFavourites(movie) }}>
            {data.favoritesList.some((item) => movie.id === item.id) ? (
              <span className="text-white">
                <FaHeart />
              </span>
            ) : (
              <FaRegHeart />
            )}
          </button>
          <button className="movie-card-button" title="Bookmark"
            onClick={() => { onClickSave(movie) }}>
            {data.savedList.some((item) => movie.id === item.id) ? (
              <span className="text-white">
                <FaBookmark />
              </span>
            ) : (
              <FaRegBookmark />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

const MovieCardsList = ({ prop, movieList }) => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state);
  const favourites = useSelector((state) => state.favoritesList);
  const saved = useSelector((state) => state.savedList);

  const [search, setSearch] = useState("");

  let list;
  let heading;

  switch (prop) {
    case "Favourite":
      list = favourites;
      heading = "Favourites";
      break;
    case "Save":
      list = saved;
      heading = "Watchlist";
      break;
    case "Timeline":
      list = movieList;
      heading = "Timeline Movies";
      break;
    case "Legacy":
      list = movieList;
      heading = "Legacy Movies";
      break;
    case "Series":
      list = movieList;
      heading = "Web Series";
      break;
    case "AllMovies":
    default:
      list = movieList;
      heading = "All Movies & Series";
  }

  const filteredMovies = list.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );
  const onClickFavourites = (movie) => {
    if (data.favoritesList.some((item) => movie.id === item.id)) {
      // If movie exists, remove it
      dispatch({ type: "REMOVE_FAVOURITE", payload: movie.id });
    } else {
      // If movie is not in favorites, add it
      dispatch({ type: "ADD_FAVOURITE", payload: movie });
    }
  };
  const onClickSave = (movie) => {
    if (data.savedList.some((item) => movie.id === item.id)) {
      // If movie exists, remove it
      dispatch({ type: "REMOVE_SAVE", payload: movie.id });
    } else {
      // If movie is not in favorites, add it
      dispatch({ type: "ADD_SAVE", payload: movie });
    }
  };
  return (
    <div className="movie-card-container">
      <div className="search-header-container">
        <h2 className="heading-text">{heading}</h2>
        <div className="search-group">
          <input
            type="text"
            placeholder="Search..."
            className="search-input"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="search-button"><FaSearch /></button>
        </div>

      </div>
      {filteredMovies.length === 0 ?
        <div className="empty-container">
          <h1 className="heading-text-gradient">No Movies Found</h1>
          <img
            className="empty-image"
            src="https://i.postimg.cc/Y07CtXGw/Deadpool.png"
            alt="No Movies"
          />
        </div>
        :
        <div className="cards-container">
          {filteredMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} onClickSave={onClickSave} onClickFavourites={onClickFavourites} />
          ))}
        </div>
      }


    </div>
  );
};

export default MovieCardsList;
