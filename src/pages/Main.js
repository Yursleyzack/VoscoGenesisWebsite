import React from "react";
import { Link } from "react-router-dom";

export default function Main() {
  return (
    <main className="Main">
      <div>Bla Bla Bla</div>
      <div className="Division1">
        <div className="TextDiv">
          <span className="Text">Div 1 text</span>
          <Link to="About-Us">About Us</Link>
        </div>
      </div>
    </main>
  );
}
