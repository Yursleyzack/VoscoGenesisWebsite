import React from "react";
import { NavLink } from "react-router-dom";

function Downloads() {
  return (
    <main className="Main">
      <a href={require("../assets/apks/storyshots-2-9-1.apk")} download>
        StoryShots APK
      </a>
    </main>
  );
}

export default Downloads;
