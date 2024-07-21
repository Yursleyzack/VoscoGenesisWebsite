import React from "react";
import { SocialMedias } from "../../constants";

function Community() {
  return (
    <div className="Division Community">
      <h1>Community</h1>
      <span className="Community-Span">
        Click on icon to go to one of our pages!
      </span>
      <div className="Social-Medias Centered">
        {SocialMedias.map((social) => (
          <div key={social.id} className="social Centered">
            <a href={social.link} className="Social-Button">
              <img src={social.image} alt={social.name} width="100px" />
            </a>
            <span className="Social-Acc">{social.acc}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Community;
