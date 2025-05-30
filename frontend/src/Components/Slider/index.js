import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  FaHeart,
  FaRegHeart,
} from "react-icons/fa";
import "./slider.css";

const Slider = ({ movieslist }) => {

  const data = useSelector((state) => state);


  const sliderRef = useRef(null);
  const dispatch = useDispatch();
  const onClickFavourites = (movie) => {
    if (data.favoritesList.some((item) => movie.id === item.id)) {
      // If movie exists, remove it
      dispatch({ type: "REMOVE_FAVOURITE", payload: movie.id });
    } else {
      // If movie is not in favorites, add it
      dispatch({ type: "ADD_FAVOURITE", payload: movie });
    }
  };
  const scroll = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = 1000;
      sliderRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="slider-container">
      <button onClick={() => scroll("left")} className="nav-button left-2">
        <FaChevronLeft size={20} />
      </button>

      <div ref={sliderRef} className="slider no-scrollbar">
        {movieslist.map((movie) => (
          <div key={movie.id} className="slide-item">
            <img src={movie.image2} alt={movie.title} className="movie-image" />

            <div className="movie-info">
              <div style={{ overflow: 'hidden', borderRadius: '20px' }}>
                <img src={movie.image} alt={movie.title} className="info image2" />
              </div>

              <h3 className="text-xl font-bold mb-2 info card-title">{movie.title}</h3>

              <div className="text-gray-300 text-sm flex justify-around items-center gap-2 mb-2 info movie-details">
                • <span className="font-bold text-white">{new Date(movie.releaseDate).getFullYear()}</span> •
                <span className="bg-gray-600 text-white px-2 py-1 rounded-md">{movie.rating}</span> •
                <span>2h 10m</span> •
              </div>

              <div className="flex-wrap info movie-des">
                <p className="text-sm mt-2 text-gray-300 line-clamp-4">{movie.description}</p>
              </div>

              <div className="flex flex-row justify-around items-center mt-4 ">
                <Link to={`/movie/${movie.id}`}>
                  <button type="button" className="watch-now-button">▶ Watch Now</button>
                </Link>
                <button className="watch-now-button like-btn"
                id={movie.id}
                  onClick={() => {
                    onClickFavourites(movie);
                  }}>
                  {data.favoritesList.some((item) => movie.id === item.id) ? (
                  <span className="text-white">
                    <FaHeart />
                  </span>
                ) : (
                  <FaRegHeart />
                )}
                </button>
              </div>
            </div>
          </div>


        ))}
      </div>

      <button onClick={() => scroll("right")} className="nav-button right-2">
        <FaChevronRight size={20} />
      </button>
    </div>
  );
};

export default Slider;
