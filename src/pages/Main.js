import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import OurGames from "../components/Main/OurGames";
import WhyPlay from "../components/Main/WhyPlay";
import Community from "../components/Main/Community";

export default function Main() {
  return (
    <>
      <Header />
      <main className="Main">
        <OurGames />
        <WhyPlay />
        <Community />
      </main>
      <Footer />
    </>
  );
}
