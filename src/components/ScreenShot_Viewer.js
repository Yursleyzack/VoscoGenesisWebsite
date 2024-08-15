import React, { useState } from "react";
import "../Styles/ScreenShot-Viewer.css";

export default function ScreenShotViewer({ array, upperBound }) {
  const [currentScreen, setCurrentScreen] = useState(0);
  return (
    <div className="Screenshot-Viewer Centered">
      <button
        className="SS-Viewer-Btn"
        onClick={() => {
          currentScreen > 0
            ? setCurrentScreen(currentScreen - 1)
            : setCurrentScreen(currentScreen);
        }}
      >
        Back
      </button>

      <img src={array[currentScreen]} alt="Screenshots" height="90%"></img>

      <button
        className="SS-Viewer-Btn"
        onClick={() => {
          currentScreen < upperBound - 1
            ? setCurrentScreen(currentScreen + 1)
            : setCurrentScreen(currentScreen);
        }}
      >
        Next
      </button>
    </div>
  );
}
