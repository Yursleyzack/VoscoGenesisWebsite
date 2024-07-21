import React from "react";

import Logo from "../assets/images/VoscoLogoFinalOrangeText.png";
import Nav from "./Nav";

export default function Header() {
  return (
    <header className="Header Centered">
      <div className="Header-Div">
        <div className="Header-Logo-Title">
          <img src={Logo} alt="Logo" width={"10%"} />
          <span className="Header-Title">Vosco Genesis</span>
        </div>
      </div>
    </header>
  );
}
