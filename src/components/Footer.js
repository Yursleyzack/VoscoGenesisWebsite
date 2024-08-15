import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Footer.css";

export default function Footer() {
  return (
    <footer className="Footer">
      <ul className="Footer-Ul">
        <li className="Footer-Li">
          <Link className="Footer-Link" to="/About-Us">
            About Us
          </Link>
        </li>
      </ul>
    </footer>
  );
}
