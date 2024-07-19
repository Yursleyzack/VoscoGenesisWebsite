import React from "react";
import { Games } from "../../constants";
import { Link } from "react-router-dom";

const games = Games;

function OurGames() {
  return (
    <div className="Division ">
      <h1>OUR GAMES</h1>
      <div className="Carousel">
        {games.map((game) => (
          <Link
            to={game.link}
            className="Carousel-Component Centered"
            style={{ width: "400px" }}
            key={game.id}
          >
            <img src={game.image} alt={game.name} width="150px" />
            <span>{game.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default OurGames;
