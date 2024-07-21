import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Downloads() {
  return (
    <>
      <Header />
      <main className="Main">
        <a href={require("../assets/apks/Dekarbon.apk")} download>
          Dekarbon App
        </a>
      </main>
      <Footer />
    </>
  );
}

export default Downloads;
