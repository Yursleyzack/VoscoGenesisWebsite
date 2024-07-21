import React from "react";
import { Games } from "../../constants";
import { Link } from "react-router-dom";

const games = Games;

function OurGames() {
  return (
    <div className="Division">
      <h1>OUR GAMES</h1>
      <div className="Carousel">
        {games.map((game) => (
          <Link
            to={game.link}
            className="Carousel-Component Game Centered"
            style={{
              width: "400px",

              backgroundImage: `url(${game.image})`, // Use the imported image
              backgroundSize: "cover", // Ensure the image covers the element
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat", // Prevent the image from repeating
            }}
            key={game.id}
          ></Link>
        ))}
      </div>
    </div>
  );
}

export default OurGames;
