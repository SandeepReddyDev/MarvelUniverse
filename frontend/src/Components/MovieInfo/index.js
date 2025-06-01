import React from "react";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  FaExternalLinkSquareAlt,
  FaHeart,
  FaRegHeart,
  FaRegBookmark,
  FaBookmark,
} from "react-icons/fa";
import { RxExternalLink } from "react-icons/rx";

import TrailerModal from "../TrailerModal";
import Slider from '../Slider'
import "./info.css";

const MovieDetails = ({ AllMovies }) => {
  const paramsID = useParams();
  const data = useSelector((state) => state);
  const [similarmovies, setSimilarMovies] = useState([])
  const dispatch = useDispatch();
  const movie = AllMovies.find((movie) => movie.id === Number(paramsID.id));

  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
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

  useEffect(() => {
    setSimilarMovies(AllMovies.filter((item) => (movie.category === item.category)))
  }, [])

  return (
    <div
      className="movie-container">
      <div className="flex justify-center items-center" style={{
        backgroundImage: `url(${movie.poster})`,
        backgroundSize: "cover",
        filter: "brightness(70%) contrast(120%)", // Reduces brightness and sharpens the image
        width: "100%",
        height: "100%",
        padding: "auto",
      }}>
        <div className="movie-content m-auto"
        >
          <div className="movie-poster">
            <img src={movie.image2} alt={movie.title} />
          </div>
          <div className="movie-info-details">
            <h1 className="movie-title">{movie.title}</h1>

            <p className='movie-info-des' >
              {movie.description}  {movie.description}
            </p>



            <h3 className="m-3 text-xl">
              Released on <span className="font-bold">{movie.releaseDate}</span>
            </h3>
            <h3 className="m-3 text-xl">
              Available on <span className="font-bold">{movie.OTT}</span>
            </h3>
            <h3 className="m-3 text-xl">
              Duration : <span className="font-bold">{movie.duration}</span>
            </h3>
            <h3 className="m-3 text-xl">
              IMDB Rating : <span className="font-bold">{movie.rating}/10</span>
            </h3>
            <div className="m-3 flex flex-row align-items-center gap-3 btns-container">
              <span className="backdrop-blur-lg bg-white/10 px-2 py-1 rounded-md m-3">
                Action
              </span>
              <span className="backdrop-blur-lg bg-white/10 px-2 py-1 rounded-md m-3">
                Adventure
              </span>
              <span className="backdrop-blur-lg bg-white/10 px-2 py-1 rounded-md m-3">
                Sci-fi
              </span>
            </div>
            <div className="flex flex-row gap-3 btns-container">
              <button
                className="info-btns flex flex-row justify-center items-center gap-1 "
                onClick={openModal}
              >
                Trailer <span className="text-xl"><RxExternalLink /></span>

              </button>
              <button
                className="icon bg-purple-800"
                onClick={() => {
                  onClickSave(movie);
                }}
              >
                {data.savedList.some((item) => movie.id === item.id) ? (
                  <span className="text-white">
                    <FaBookmark />
                  </span>
                ) : (
                  <FaRegBookmark />
                )}
              </button>
              <button
                onClick={() => {
                  onClickFavourites(movie);
                }}
                className="icon bg-purple-800"
              >
                {data.favoritesList.some((item) => movie.id === item.id) ? (
                  <span className="text-white">
                    <FaHeart />
                  </span>
                ) : (
                  <FaRegHeart />
                )}
              </button>
            </div>
            <div className="modal-c">
              <TrailerModal
                videoUrl={movie.trailerLink}
                isOpen={isModalOpen}
                onClose={closeModal}
              />
            </div>

          </div>
        </div>
      </div>
      <div className=" mx-1 ">
        <div className="flex justify-start px1 bg-transparent">
          <h2 className="category-heading">
            Similar Movies—
          </h2>
        </div>
        <div className="similar-movies-c  "> <Slider movieslist={similarmovies} /></div>

      </div>

    </div>
  );
};

export default MovieDetails;
