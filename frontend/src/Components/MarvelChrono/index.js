import React from 'react';
import { Chrono } from 'react-chrono';
import './index.css';




const TwinkleStars = () => {
  const stars = Array.from({ length: 100 }, (_, i) => {
    const left = Math.random() * 100;
    const top = Math.random() * 100;
    const delay = Math.random() * 5;

    return (
      <div
        key={i}
        className="star"
        style={{
          left: `${left}vw`,
          top: `${top}vh`,
          animationDelay: `${delay}s`
        }}
      ></div>
    );
  });

  return <div className="star-sky">{stars}</div>;
};
const chronoList = [
  { movieTitle: "Captain America: The First Avenger", releaseDate: "2011-07-22", Poster: "https://i.pinimg.com/736x/f9/10/c0/f910c0394ac075bad0d89fca6359e91f.jpg" },
  { movieTitle: "Captain Marvel", releaseDate: "2019-03-08", Poster: "https://i.pinimg.com/736x/04/73/ae/0473ae98535198443083a5adad6a8fbb.jpg" },
  { movieTitle: "Iron Man", releaseDate: "2008-05-02", Poster: "https://i.pinimg.com/736x/f6/c8/ba/f6c8baa657f8cd6d6c297fee445bfc2e.jpg" },
  { movieTitle: "Iron Man 2", releaseDate: "2010-05-07", Poster: "https://i.pinimg.com/736x/56/f3/29/56f329c397f2782a544de552be523717.jpg" },
  { movieTitle: "The Incredible Hulk", releaseDate: "2008-06-13", Poster: "https://i.pinimg.com/736x/93/f2/2a/93f22a9a1a13ad7dda70355a9e284060.jpg" },
  { movieTitle: "Thor", releaseDate: "2011-05-06", Poster: "https://i.pinimg.com/736x/82/0a/f4/820af46b4111ec2344186a6e150ce21d.jpg" },
  { movieTitle: "The Avengers", releaseDate: "2012-05-04", Poster: "https://i.pinimg.com/736x/86/c8/99/86c8995d17c9f7958529899bffaae999.jpg" },
  { movieTitle: "Thor: The Dark World", releaseDate: "2013-11-08", Poster: "https://i.pinimg.com/736x/b3/43/ee/b343ee2b18c2299918fa3b9fc8fc939c.jpg" },
  { movieTitle: "Iron Man 3", releaseDate: "2013-05-03", Poster: "https://i.pinimg.com/736x/60/e8/2d/60e82da7dc757bf499fa03575db9337b.jpg" },
  { movieTitle: "Spider-Man: Far From Home", releaseDate: "2019-07-02", Poster: "https://i.pinimg.com/736x/a8/dc/89/a8dc8951ef2a8f9d28c3d5ab671dce2e.jpg" },
  { movieTitle: "Captain America: The Winter Soldier", releaseDate: "2014-04-04", Poster: "https://i.pinimg.com/736x/a6/e7/77/a6e777c19fe79596080c44fd5423c170.jpg" },
  { movieTitle: "Guardians of the Galaxy", releaseDate: "2014-08-01", Poster: "https://i.pinimg.com/736x/e8/69/84/e86984bfa318e45b08d7246208843d79.jpg" },
  { movieTitle: "Guardians of the Galaxy Vol. 2", releaseDate: "2017-05-05", Poster: "https://i.pinimg.com/736x/aa/e0/a2/aae0a2ad4d48cb2412ec2d2221b8adad.jpg" },
  { movieTitle: "Avengers: Age of Ultron", releaseDate: "2015-05-01", Poster: "https://i.pinimg.com/736x/dd/32/34/dd32346ce48d110957a67d00bb35085e.jpg" },
  { movieTitle: "Ant-Man", releaseDate: "2015-07-17", Poster: "https://i.pinimg.com/736x/c9/06/37/c90637429c17b32768c1d1de1ddf1b4c.jpg" },
  { movieTitle: "Captain America: Civil War", releaseDate: "2016-05-06", Poster: "https://i.pinimg.com/736x/c7/4a/14/c74a147eb87f24a90835a39b5f6628b5.jpg" },
  { movieTitle: "Black Widow", releaseDate: "2021-07-09", Poster: "https://i.pinimg.com/736x/69/b8/1b/69b81bde894f3f64564b0f41afd7c4a2.jpg" },
  { movieTitle: "Black Panther", releaseDate: "2018-02-16", Poster: "https://i.pinimg.com/736x/eb/06/80/eb0680d86102d3fca62ca750f31607b0.jpg" },
  { movieTitle: "Spider-Man: Homecoming", releaseDate: "2017-07-07", Poster: "https://i.pinimg.com/736x/44/b8/dd/44b8ddb35a09756faacb967e77c752c8.jpg" },
  { movieTitle: "Doctor Strange", releaseDate: "2016-11-04", Poster: "https://i.pinimg.com/736x/15/da/5f/15da5ff41218c37ffce49ccdb039c5c3.jpg" },
  { movieTitle: "Thor: Ragnarok", releaseDate: "2017-11-03", Poster: "https://i.pinimg.com/736x/6a/1c/46/6a1c46a60740ee70c8be9f03c3ce10f0.jpg" },
  { movieTitle: "Ant-Man and the Wasp", releaseDate: "2018-07-06", Poster: "https://i.pinimg.com/736x/c4/08/d4/c408d42e84417574a2073bca7b1c5528.jpg" },
  { movieTitle: "Avengers: Infinity War", releaseDate: "2018-04-27", Poster: "https://i.pinimg.com/736x/b9/af/a5/b9afa549981e30bac9ee7b6a67900d49.jpg" },
  { movieTitle: "Avengers: Endgame", releaseDate: "2019-04-26", Poster: "https://i.pinimg.com/736x/e9/bd/d0/e9bdd03b83ced69a0a8aaa72a4a15431.jpg" },
  { movieTitle: "Shang-Chi and the Legend of the Ten Rings", releaseDate: "2021-09-03", Poster: "https://i.pinimg.com/736x/74/d0/b2/74d0b2060fe71f540f4b947704dfefbe.jpg" },
  { movieTitle: "Eternals", releaseDate: "2021-11-05", Poster: "https://i.pinimg.com/736x/48/63/3c/48633c8c6c069f94803ef86760c0de82.jpg" },
  { movieTitle: "Spider-Man: No Way Home", releaseDate: "2021-12-17", Poster: "https://i.pinimg.com/736x/0b/bf/c6/0bbfc691c69666619f1ff7463fbee95b.jpg" },
  { movieTitle: "Doctor Strange in the Multiverse of Madness", releaseDate: "2022-05-06", Poster: "https://i.pinimg.com/736x/fa/d6/78/fad678727666ca281179aad293ace1da.jpg" },
  { movieTitle: "Thor: Love and Thunder", releaseDate: "2022-07-08", Poster: "https://i.pinimg.com/736x/da/ee/82/daee8203d7a764cdac844e9cf408a538.jpg" },
  { movieTitle: "Black Panther: Wakanda Forever", releaseDate: "2022-11-11", Poster: "https://i.pinimg.com/736x/54/32/5a/54325afe10023c6e83c840326e10c204.jpg" },
  { movieTitle: "Ant-Man and the Wasp: Quantumania", releaseDate: "2023-02-17", Poster: "https://i.pinimg.com/736x/58/d1/b3/58d1b3effbdffe8f05f3795d5d244b9c.jpg" },
  { movieTitle: "Guardians of the Galaxy Vol. 3", releaseDate: "2023-05-05", Poster: "https://i.pinimg.com/736x/7e/14/b7/7e14b71ad8ed35bee7d07f528b401a59.jpg" },
  { movieTitle: "The Marvels", releaseDate: "2023-11-10", Poster: "https://i.pinimg.com/736x/26/4a/09/264a09b370b0b2b85e128274a5d0234c.jpg" },
  { movieTitle: "Deadpool & Wolverine", releaseDate: "2024-07-26", Poster: "https://i.pinimg.com/736x/af/63/21/af63217ce6535f6802fdd6b973668155.jpg" },
  { movieTitle: "Captain America: Brave New World", releaseDate: "2025-02-14", Poster: "https://i.pinimg.com/736x/47/f8/20/47f82014ee1f464c24c54c57d3468089.jpg" },
  { movieTitle: "Thunderbolts*", releaseDate: "2025-05-02", Poster: "https://i.pinimg.com/736x/cd/ac/06/cdac06271523f2539b238902333f8a6a.jpg" },
  { movieTitle: "The Fantastic Four: First Steps", releaseDate: "2025-07-25", Poster: "https://i.pinimg.com/736x/ca/3e/b7/ca3eb72ebb34626f5d70e3e36700486c.jpg" }
];

const sortedChronoList = chronoList.slice().sort(
  (a, b) => new Date(a.releaseDate) - new Date(b.releaseDate)
);

const items = sortedChronoList.map((movie) => ({
  title: movie.releaseDate,
  cardTitle: movie.movieTitle,
  cardDetailedText: "Marvel Cinematic Universe",
}));


const ChronoContainer = () => {
  return (
    <div className="chrono-wrapper" style={{ height: "600px", width: "100%" }}>
      <TwinkleStars />
      <h2 className="chrono-title" style={{ textAlign: "center", color: "#e62429" }}>
        Marvel Movies Timeline
      </h2>
      <Chrono
        items={items}
        mode="VERTICAL_ALTERNATING"
        slideShow
        slideItemDuration={1000}
        theme={{
          primary: "#a020f0",        // Vibrant Purple for buttons & highlights
          secondary: "#0d0b1d",      // Deep cosmic purple (used as main background)
          cardBgColor: "#1a102e",    // Dark violet-gray for cards
          cardForeColor: "transparent", // Keep overlays transparent (or optional soft white glow)
          titleColor: "#c084fc",
        }}
        cardHeight={250}
        cardWidth={350}
        enableBreakPoint
        scrollable={{ scrollbar: false }}
         disableControls={true} 
      >
        {sortedChronoList.map((movie, index) => (
          <div key={index} className="chrono-card">
            <div className="chrono-image-wrapper">
              <img src={movie.Poster} alt={movie.movieTitle} className="chrono-image" />
              <div className="chrono-overlay">
                <h3 className="chrono-movie-title">{movie.movieTitle}</h3>
              </div>
            </div>
          </div>
        ))}

      </Chrono>
    </div>
  );
};

export default ChronoContainer;