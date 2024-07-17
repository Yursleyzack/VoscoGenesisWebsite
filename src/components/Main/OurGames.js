import React from "react";

function OurGames() {
  const Games = [
    {
      id: 1,
      name: "Zero Carbon",
      image: require("../../assets/images/VoscoLogoFinalOrangeText.png"),
    },
  ];
  return (
    <div className="Division ">
      <h1>OUR GAMES</h1>
      <div className="Carousel">
        {Games.map((game) => (
          <div
            className="Carousel-Component Centered"
            style={{ width: "400px" }}
            key={game.id}
          >
            <img src={game.image} alt={game.name} width="150px" />
            <span>{game.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurGames;
