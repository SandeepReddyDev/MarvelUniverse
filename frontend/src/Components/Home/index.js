import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import { Navigation, Autoplay } from "swiper/modules";
import { useSelector } from "react-redux";
import Slider from "../Slider";
import { MdOutlineAddBox } from "react-icons/md";
import "swiper/css";
import "swiper/css/navigation";
import "./home.css";

const movieDetails = [
  {
    id: 22,
    title: "Avengers : Endgame",
    description:
      "The Avengers must gather the Infinity Stones to undo the destruction caused by Thanos in Infinity War.",
    genre: ["Action", "Sci-Fi"],
    releaseYear: 2019,
    duration: "2h 23m",
    ageRating: "U/A 13+",
    imageURL:
      "https://i.pinimg.com/736x/a8/9d/3a/a89d3a1f1997eec0e62643cf1c40d098.jpg",
  },
  {
    id: 1,
    title: "Iron Man",
    description:
      "Tony Stark faces the Mandarin while dealing with post-Avengers trauma.",
    genre: ["Action", "Sci-Fi"],
    releaseYear: 2013,
    duration: "2h 10m",
    ageRating: "U/A 13+",
    imageURL:
      "https://i.pinimg.com/736x/c8/4c/17/c84c172b36c1a7db4a54c681949cd466.jpg",
  },
  {
    id: 26,
    title: "Spider-Man: No Way Home",
    description:
      "Peter Parker's identity is revealed, causing multiversal chaos.",
    genre: ["Action", "Adventure", "Sci-Fi"],
    releaseYear: 2021,
    duration: "2h 28m",
    ageRating: "U/A 13+",
    imageURL:
      "https://i.pinimg.com/736x/95/11/3f/95113f6aa27bc97763e9daf02356ab38.jpg",
  },
  {
    id: 37,
    title: "Loki",
    description:
      "Loki embarks on a timeline-altering adventure after escaping with the Tesseract.",
    genre: ["Action", "Sci-Fi", "Fantasy"],
    releaseYear: 2021,
    duration: "~EP : 50 mins",
    ageRating: "U/A 13+",
    imageURL:
      "https://i.pinimg.com/736x/e3/26/4b/e3264ba258c4e9ff8d92236d784a39f3.jpg",
  },
  {
    id: 17,
    title: "Thor: Ragnarok",
    description:
      "Thor must escape Sakaar and stop Hela from destroying Asgard.",
    genre: ["Action", "Comedy", "Fantasy"],
    releaseYear: 2017,
    duration: "2h 10m",
    ageRating: "U/A 13+",
    imageURL:
      "https://i.pinimg.com/736x/96/4d/c7/964dc7961a56cf21134b34f5aa3d6854.jpg",
  },
  {
    id: 5,
    title: "Captain America: The First Avenger",
    description:
      "Steve Rogers becomes Captain America and battles the Red Skull during WWII.",
    genre: ["Action", "Adventure", "Sci-Fi"],
    releaseYear: 2011,
    duration: "2h 4m",
    ageRating: "U/A 13+",
    imageURL:
      "https://i.pinimg.com/736x/84/66/ac/8466ac9172a84bc6579e3af5ece6665a.jpg",
  },
  {
    id: 64,
    title: "The Wolverine",
    description:
      "Wolverine travels to Japan and faces a deadly samurai threat.",
    genre: ["Action", "Sci-Fi"],
    releaseYear: 2013,
    duration: "2h 6m",
    ageRating: "U/A 16+",
    imageURL:
      "https://i.pinimg.com/736x/74/f8/8e/74f88e4654fddb958f1363860359c691.jpg",
  },
  {
    id: 18,
    title: "Black Panther",
    description: "T'Challa must defend Wakanda from the vengeful Killmonger.",
    genre: ["Action", "Adventure", "Sci-Fi"],
    releaseYear: 2018,
    duration: "2h 14m",
    ageRating: "U/A 13+",
    imageURL:
      "https://i.pinimg.com/736x/89/42/6f/89426fa1a55f270ce21674238f79f7d9.jpg",
  },
  {
    id: 35,
    title: "Captain America: Brave New World",
    description:
      "Sam Wilson officially takes up the mantle of Captain America.",
    genre: ["Action", "Adventure", "Sci-Fi"],
    releaseYear: 2025, // Upcoming
    duration: "2h 00m",
    ageRating: "U/A 13+ ",
    imageURL:
      "https://i.pinimg.com/736x/46/aa/7e/46aa7e108d1cae16b351f10807adea86.jpg",
  },
  {
    id: 34,
    title: "Deadpool & Wolverine",
    description:
      "Deadpool and Wolverine team up in a chaotic and hilarious adventure.",
    genre: ["Action", "Comedy", "Sci-Fi"],
    releaseYear: 2024, // Upcoming
    duration: "2h 7m",
    ageRating: "A )",
    imageURL:
      "https://i.pinimg.com/736x/31/5b/26/315b26dd8d83bba5a7efe5471b018f37.jpg",
  },
];

const Home = ({ webSeries, timelineMovies, legacyMovies }) => {
  const data = useSelector((state) => state);
  const savedList = data.savedList;
  const favoritesList = data.favoritesList;
  return (
    <div className="home-container">
      <div id="Swiper" >
        <Swiper
          className="Swiper mt-5"
          modules={[Navigation, Autoplay]}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          navigation
          loop
        >
          {movieDetails.map((movie) => (
            <SwiperSlide
              key={movie.id}
              style={{
                backgroundImage: `url(${movie.imageURL})`,
                backgroundAttachment: "fixed",
                backgroundSize: "cover",
                backgroundPosition: "center",
                imageRendering: "crisp-edges",
                WebkitImageRendering: "optimize-contrast",
              }}
            >
              <div className="absolute bottom-0 left-0 m-6 bg-transparent  text-white font-bold rounded-lg   ">
                <h3 className="corousel-title">{movie.title}</h3>
                <div className="text-gray-300 text-lg flex items-center gap-2 mt-3 corousel-content">
                  <span className="font-bold  text-white text-lg">
                    {movie.releaseYear}
                  </span>
                  <span className="bg-gray-600 text-white px-2 py-1 text-lg rounded-md">
                    {movie.ageRating}
                  </span>
                  •<span className="text-lg">{movie.duration}</span>•
                </div>

                {/* Movie Description */}
                <p className=" text-white text-lg mt-3 corousel-des ">{movie.description}</p>

                {/* Tags */}
                <p className="mt-3   text-white text-sm flex gap-2 flex-wrap corousel-content ">
                  {movie.genre.map((genre) => (
                    <span
                      key={genre}
                      className="backdrop-blur-lg bg-white/10 px-2 py-1 rounded-md"
                    >
                      {genre}
                    </span>
                  ))}
                </p>

                {/* Buttons */}
                <div className=" flex items-start  gap-3">
                  <Link to={`/movie/${movie.id}`}>
                    <button className="courosel-watchnow-btn">Watch Now</button>
                  </Link>
                  <button className="watchlist-btn">+</button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {savedList.length === 0 || (
        <div className=" mx-1 ">
          <div className="category-container px-4">
            {/* Category Heading */}
            <h2 className="category-heading ">
              Watch List—
              <span className="underline-effect"></span>
            </h2>

            {/* View All Button */}
            <Link to="/watchlist"><button className="view-all-button">View All</button></Link>
          </div>

          <Slider movieslist={savedList} />
        </div>
      )}
      {favoritesList.length === 0 || (
        <div className=" mx-1 ">
          <div className="category-container px-4">
            {/* Category Heading */}
            <h2 className="category-heading">
              Favourites—
              <span className="underline-effect"></span>
            </h2>

            {/* View All Button */}
            <Link to="/favourites"><button className="view-all-button">View All</button></Link>
          </div>

          <Slider movieslist={favoritesList} />
        </div>
      )}

      <div id="TimelineMovies" className=" mx-1 ">
        <div className="category-container px-4">
          {/* Category Heading */}
          <h2 className="category-heading">
            Marvel Timeline Movies—
            <span className="underline-effect"></span>
          </h2>

          {/* View All Button */}
          <Link to="/timelinemovies"><button className="view-all-button">View All</button></Link>
          
        </div>

        <Slider movieslist={timelineMovies} />
      </div>
      <div id="LegacyMovies" className=" mx-1 ">
        <div className="category-container px-4">
          {/* Category Heading */}
          <h2 className="category-heading">
            Marvel Legacy Movies—
            <span className="underline-effect"></span>
          </h2>

          {/* View All Button */}
          <Link to="/legacymovies"><button className="view-all-button">View All</button></Link>
        </div>

        <Slider movieslist={legacyMovies} />
      </div> 
      <div id="Webseries" className=" mx-1 ">
        <div className="category-container px-4">
          {/* Category Heading */}
          <h2 className="category-heading">
            Marvel Series—
            <span className="underline-effect"></span>
          </h2>

          {/* View All Button */}
          <Link to="/webseries"><button className="view-all-button">View All</button></Link>
        </div>

        <Slider movieslist={webSeries} />
      </div>
    </div>
  );
};

export default Home;
