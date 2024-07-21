import React from "react";
import { Games } from "../constants";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const games = Games;

function Downloads() {
  return (
    <>
      <Header />
      <main className="Main">
        {games.map((game) => (
          <Link
            to={game.link}
            className="Carousel-Component Centered"
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
      </main>
      <Footer />
    </>
  );
}

export default Downloads;
