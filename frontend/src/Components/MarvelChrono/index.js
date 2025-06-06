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
  { movieTitle: "Captain America: The First Avenger", releaseDate: "2011-07-22", Poster: "https://i.pinimg.com/736x/bc/b3/81/bcb381486be31d486c6a2d4a80915020.jpg" },
  { movieTitle: "Captain Marvel", releaseDate: "2019-03-08", Poster: "https://i.pinimg.com/736x/ae/1c/f5/ae1cf5f12b7c3385e81029be860b5805.jpg" },
  { movieTitle: "Iron Man", releaseDate: "2008-05-02", Poster: "https://i.pinimg.com/736x/86/c4/e4/86c4e44a0a74eb01e2c436ebca9f5592.jpg" },
  { movieTitle: "Iron Man 2", releaseDate: "2010-05-07", Poster: "https://i.pinimg.com/736x/a3/23/ea/a323ea850246a5dbcad0815fbc528de0.jpg" },
  { movieTitle: "The Incredible Hulk", releaseDate: "2008-06-13", Poster: "https://i.pinimg.com/736x/3b/4e/98/3b4e986f7dcb054d676bbf5b25a774e7.jpg" },
  { movieTitle: "Thor", releaseDate: "2011-05-06", Poster: "https://i.pinimg.com/736x/d0/00/ec/d000ecb25747ff7c4f5a0c26b3fab615.jpg" },
  { movieTitle: "The Avengers", releaseDate: "2012-05-04", Poster: "https://i.pinimg.com/736x/3d/d0/53/3dd053bb9b709a3cb4a636a013d4dda3.jpg" },
  { movieTitle: "Thor: The Dark World", releaseDate: "2013-11-08", Poster: "https://i.pinimg.com/736x/6c/fa/1c/6cfa1ce8662b37fbebe8f6adfbf2947c.jpg" },
  { movieTitle: "Iron Man 3", releaseDate: "2013-05-03", Poster: "https://i.pinimg.com/736x/8f/85/9c/8f859c54f49c7867d76c41dbaabce43f.jpg" },
  { movieTitle: "Spider-Man: Far From Home", releaseDate: "2019-07-02", Poster: "https://i.pinimg.com/736x/f7/13/d0/f713d04eff64d3236564830acaa7903a.jpg" },
  { movieTitle: "Captain America: The Winter Soldier", releaseDate: "2014-04-04", Poster: "https://i.pinimg.com/736x/5e/f4/b7/5ef4b7536fbe4568b3574cd9dced7394.jpg" },
  { movieTitle: "Guardians of the Galaxy", releaseDate: "2014-08-01", Poster: "https://i.pinimg.com/736x/0f/86/fe/0f86fe0ed39fd59712554e83f66ea65f.jpg" },
  { movieTitle: "Guardians of the Galaxy Vol. 2", releaseDate: "2017-05-05", Poster: "https://i.pinimg.com/736x/4c/df/1d/4cdf1d52d4b6e0625118a8b15af5d7bd.jpg" },
  { movieTitle: "Avengers: Age of Ultron", releaseDate: "2015-05-01", Poster: "https://i.pinimg.com/736x/31/04/c3/3104c33c7ece026d2b1e2b4c646f75e0.jpg" },
  { movieTitle: "Ant-Man", releaseDate: "2015-07-17", Poster: "https://i.pinimg.com/736x/19/4b/c8/194bc8b6e5fc26b6e8f85fe21042c33a.jpg" },
  { movieTitle: "Captain America: Civil War", releaseDate: "2016-05-06", Poster: "https://i.pinimg.com/736x/f6/c0/7b/f6c07bb81362f1ef1b7be03f0adb2101.jpg" },
  { movieTitle: "Black Widow", releaseDate: "2021-07-09", Poster: "https://i.pinimg.com/736x/0e/7d/e3/0e7de3f12b6e28e78df26e0b2c173890.jpg" },
  { movieTitle: "Black Panther", releaseDate: "2018-02-16", Poster: "https://i.pinimg.com/736x/69/1c/4d/691c4d4a77d08e07ffe220f4fc6a7026.jpg" },
  { movieTitle: "Spider-Man: Homecoming", releaseDate: "2017-07-07", Poster: "https://i.pinimg.com/736x/02/97/2f/02972fb882b8caf5265a5538c80b1885.jpg" },
  { movieTitle: "Doctor Strange", releaseDate: "2016-11-04", Poster: "https://i.pinimg.com/736x/57/98/5d/57985d856d7b9b7990cda4260d2b2ddf.jpg" },
  { movieTitle: "Thor: Ragnarok", releaseDate: "2017-11-03", Poster: "https://i.pinimg.com/736x/0f/bc/7f/0fbc7f892df63fcd8cf6e4797c092d7a.jpg" },
  { movieTitle: "Ant-Man and the Wasp", releaseDate: "2018-07-06", Poster: "https://i.pinimg.com/736x/94/9e/cb/949ecb12ef7468a7bc78880f638a26a7.jpg" },
  { movieTitle: "Avengers: Infinity War", releaseDate: "2018-04-27", Poster: "https://i.pinimg.com/736x/43/fe/46/43fe46b8fdfe6e8346f5e0d713c4d644.jpg" },
  { movieTitle: "Avengers: Endgame", releaseDate: "2019-04-26", Poster: "https://i.pinimg.com/736x/d5/86/19/d58619d1fe5a4ca71c57cb1afde76a0a.jpg" },
  { movieTitle: "Shang-Chi and the Legend of the Ten Rings", releaseDate: "2021-09-03", Poster: "https://i.pinimg.com/736x/77/87/56/7787566d160bb51d4ca71ac063a0fc6d.jpg" },
  { movieTitle: "Eternals", releaseDate: "2021-11-05", Poster: "https://i.pinimg.com/736x/4f/6f/68/4f6f68f789b7aa8eb0b19dd5d76bf9e1.jpg" },
  { movieTitle: "Spider-Man: No Way Home", releaseDate: "2021-12-17", Poster: "https://i.pinimg.com/736x/9c/3d/40/9c3d40eae09d62fd1020f9ae47c4141c.jpg" },
  { movieTitle: "Doctor Strange in the Multiverse of Madness", releaseDate: "2022-05-06", Poster: "https://i.pinimg.com/736x/b6/df/83/b6df831eec3205c76bdfed68183a2de5.jpg" },
  { movieTitle: "Thor: Love and Thunder", releaseDate: "2022-07-08", Poster: "https://i.pinimg.com/736x/ea/58/d0/ea58d0b72e1baf43dc48542c49e1785e.jpg" },
  { movieTitle: "Black Panther: Wakanda Forever", releaseDate: "2022-11-11", Poster: "https://i.pinimg.com/736x/45/c4/f7/45c4f7b45881cdd028883b215c4aa8e0.jpg" },
  { movieTitle: "Ant-Man and the Wasp: Quantumania", releaseDate: "2023-02-17", Poster: "https://i.pinimg.com/736x/45/4f/6c/454f6c0831e7e03f7a360be7e8722b8f.jpg" },
  { movieTitle: "Guardians of the Galaxy Vol. 3", releaseDate: "2023-05-05", Poster: "https://i.pinimg.com/736x/49/28/12/492812a34bb61f39dbbd367f7ea031e0.jpg" },
  { movieTitle: "The Marvels", releaseDate: "2023-11-10", Poster: "https://i.pinimg.com/736x/a7/96/d5/a796d5998a1efc7c78552ddc07632678.jpg" },
  { movieTitle: "Deadpool & Wolverine", releaseDate: "2024-07-26", Poster: "https://i.pinimg.com/736x/f8/3f/63/f83f63369ab7d9611016b171664a8295.jpg" },
  { movieTitle: "Captain America: Brave New World", releaseDate: "2025-02-14", Poster: "https://i.pinimg.com/736x/17/b3/6b/17b36b9c690544cb98869ce821a2ce14.jpg" },
  { movieTitle: "Thunderbolts*", releaseDate: "2025-05-02", Poster: "https://i.pinimg.com/736x/50/09/5c/50095c9b594550ce055169181661089f.jpg" },
  { movieTitle: "The Fantastic Four: First Steps", releaseDate: "2025-07-25", Poster: "https://i.pinimg.com/736x/cc/ad/7e/ccad7e642c92fd8c3e60501d0036a2ab.jpg" }
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
        cardWidth={400}
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
