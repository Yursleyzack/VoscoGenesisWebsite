import React, { useState } from "react";
import "../Styles/GamePage.css";
import DekarbonCover from "../assets/images/DekarbonCover.png";
import Nav from "../components/Nav";

function ZeroCarbon() {
  const [DownloadCounter, setDownloadCounter] = useState(0);
  return (
    <div className="ZeroCarbon">
      <Nav />
      <header
        style={{ backgroundImage: `url(${DekarbonCover})` }}
        className="Game-Header"
      ></header>
      <div className="Download-Game Centered">
        <span>Number of downloads: {DownloadCounter}</span>
        <span>Download Dekarbon</span>
        <a href={require("../assets/apks/Dekarbon.apk")} download>
          <button
            className="Download-btn"
            onClick={() => setDownloadCounter(DownloadCounter + 1)}
          >
            Download
          </button>
        </a>
      </div>
    </div>
  );
}

export default ZeroCarbon;
