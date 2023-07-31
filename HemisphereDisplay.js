import React from "react";
import "./Hemisphere.css";
import nordPic from "./image/n.jpg";
import southPic from "./image/s.jpg";

const hemisphereConfig = {
  N: {
    text: "(Northern)",
    picture: nordPic
  },
  S: {
    text: "(Southern)",
    picture: southPic
  }
};
const HemisphereDisplay = ({ latitude }) => {
  const hemisphere = latitude > 0 ? "N" : "S";
  const { text, picture } = hemisphereConfig[hemisphere];
  return (
    <div className={hemisphere}>
      <div className="ui raised text container segment">
        <div className="image">
          <img src={picture} alt="hemisphere picture" />
          <div className="ui teal bottom attached label">
            <h1>{text}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HemisphereDisplay;
