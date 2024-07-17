import React from "react";
import { Reasons } from "../../constants";

function WhyPlay() {
  return (
    <div className="Division">
      <h1>WHY PLAY?</h1>

      <div className="Carousel">
        {Reasons.map((reason) => (
          <div className="Carousel-Component  Centered" key={reason.id}>
            <h2>{reason.id}</h2>
            <span>{reason.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WhyPlay;
