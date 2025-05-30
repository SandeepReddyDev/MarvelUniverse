import React from "react";
import "./index.css";

const CSSFallingStars = ({ count = 10 }) => {
  const stars = Array.from({ length: count });

  return (
    <div className="night">
      {stars.map((_, i) => {
        const left = Math.random() * 100; // Random % left
        const top = Math.random() * 100;  // Random % top
        const delay = Math.random() * 5;  // Random delay between 0–5s
        const duration = 3 + Math.random() * 5; // Duration between 3–8s

        return (
          <div
            key={i}
            className="star"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              animationDelay: `${delay}s`,
              animationDuration: `${duration}s`,
            }}
          />
        );
      })}
    </div>
  );
};

export default CSSFallingStars;
