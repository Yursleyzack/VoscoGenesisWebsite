import React, { useEffect, useState } from "react";
import "../../Styles/GamePage.css";
import DekarbonCover from "../../assets/images/DekarbonCover.png";
import Nav from "../../components/Nav";

import { getDownloadCount } from "../../supabase";
import { incrementDownloads } from "../../supabase";

function Dekarbon() {
  const gameID = 1;
  console.log(getDownloadCount(gameID));
  const [downloadCount, setDownloadCount] = useState(null);
  useEffect(() => {
    const fetchDownloadCount = async () => {
      const count = await getDownloadCount(gameID);
      setDownloadCount(count);
    };
    fetchDownloadCount();
  }, []);
  // const [DownloadCounter, setDownloadCounter] = useState(
  //   downloads_data[1].count
  // );
  return (
    <div className="ZeroCarbon">
      <Nav />
      <header
        style={{ backgroundImage: `url(${DekarbonCover})` }}
        className="Game-Header"
      ></header>
      <div className="Download-Game Centered">
        <span className="Centered">
          Number of downloads:
          {downloadCount !== null ? downloadCount : "loading..."}
        </span>

        <a href={require("../../assets/apks/Dekarbon.apk")} download>
          <button
            className="Download-btn"
            onClick={() => incrementDownloads(gameID)}
          >
            Download Dekarbon The App
          </button>
        </a>
      </div>
    </div>
  );
}

export default Dekarbon;
