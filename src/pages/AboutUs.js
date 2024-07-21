import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

function AboutUs() {
  return (
    <>
      <Header />
      <main className="Main">
        <Nav />
        <span className="">
          We are a group of students teaching sustainable living through games.
        </span>
      </main>
      <Footer />
    </>
  );
}

export default AboutUs;
