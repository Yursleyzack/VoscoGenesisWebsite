import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/images/VoscoLogoFinalOrangeText.png";

export default function Header() {
  return (
    <header className="Header Centered">
      <div className="Header-Div">
        <div className="Header-Logo-Title">
          <img src={Logo} alt="Logo" width={"10%"} />
          <span className="HeaderTitle">Vosco Genesis</span>
        </div>
      </div>

      <Nav />
    </header>
  );
}

function Nav() {
  return (
    <nav className="Centered">
      <ul className="Nav-Ul Centered">
        <li className="Nav-Li ">
          <NavLink
            className={({ isActive }) =>
              isActive ? "Nav-Link Active-Link" : "Nav-Link"
            }
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li className="Nav-Li">
          <NavLink
            className={({ isActive }) =>
              isActive ? "Nav-Link Active-Link" : "Nav-Link"
            }
            to="About-Us"
          >
            About US
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
