import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import OurGames from "../components/Main/OurGames";
import WhyPlay from "../components/Main/WhyPlay";
import Community from "../components/Main/Community";
import { isInDevelopment } from "../constants";
import Warning from "../components/warning";
import Nav from "../components/Nav";

export default function Main() {
  return (
    <>
      <Header />
      <Nav />
      <main className="Main">
        {isInDevelopment ? <Warning /> : null}
        <OurGames />
        <WhyPlay />
        <Community />
      </main>
      <Footer />
    </>
  );
}
