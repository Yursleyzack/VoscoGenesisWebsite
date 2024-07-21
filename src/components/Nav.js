import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav className="Centered">
      <ul className="Nav-Ul Centered">
        <li className="Nav-Li ">
          <NavLink
            className={({ isActive }) =>
              isActive ? "Nav-Link Active-Link" : "Nav-Link"
            }
            to="/Home"
          >
            Home
          </NavLink>
        </li>
        <li className="Nav-Li">
          <NavLink
            className={({ isActive }) =>
              isActive ? "Nav-Link Active-Link" : "Nav-Link"
            }
            to="/Downloads"
          >
            Downloads
          </NavLink>
        </li>
        <li className="Nav-Li">
          <NavLink
            className={({ isActive }) =>
              isActive ? "Nav-Link Active-Link" : "Nav-Link"
            }
            to="/About-Us"
          >
            About US
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
