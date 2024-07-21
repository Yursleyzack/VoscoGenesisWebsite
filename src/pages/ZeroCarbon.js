import React from "react";
import "../Styles/GamePage.css";
import DekarbonCover from "../assets/images/DekarbonCover.png";
import Nav from "../components/Nav";

function ZeroCarbon() {
  return (
    <div className="ZeroCarbon">
      <Nav />
      <header
        style={{ backgroundImage: `url(${DekarbonCover})` }}
        className="Game-Header"
      ></header>
      <div className="Download-Game Centered">
        <span>Download Dekarbon</span>
        <a href={require("../assets/apks/Dekarbon.apk")} download>
          <button className="Download-btn">Download</button>
        </a>
      </div>
    </div>
  );
}

export default ZeroCarbon;
