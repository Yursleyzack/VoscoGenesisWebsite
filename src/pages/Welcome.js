import React from "react";
import { Link } from "react-router-dom";

function Welcome() {
  return (
    <div className="Welcome Centered">
      <img
        className="Welcome-Logo"
        src={require("../assets/images/VoscoLogoFinalOrangeText.png")}
        alt="logo"
        width={"60%"}
      />
      <Link className="Welcome-Link Centered" to="/Home">
        <span> Welcome!</span>
      </Link>
    </div>
  );
}

export default Welcome;
