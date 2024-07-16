import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Main() {
  return (
    <>
      <Header />
      <main className="Main">
        <div>Bla Bla Bla</div>
        <div className="Division1">
          <div className="TextDiv">
            <span className="Text">Div 1 text</span>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
