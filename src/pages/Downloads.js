import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Downloads() {
  return (
    <>
      <Header />
      <main className="Main">
        <a href={require("../assets/apks/storyshots-2-9-1.apk")} download>
          StoryShots APK
        </a>
      </main>
      <Footer />
    </>
  );
}

export default Downloads;
