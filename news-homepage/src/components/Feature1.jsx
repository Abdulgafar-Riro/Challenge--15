import React from "react";
import RetroPcs from "../../src/assets/images/image-retro-pcs.jpg";
import "./Feature.css";

function Feature1() {
  return (
    <div className="feature">
      <img src={RetroPcs} alt="image of a retro pcs" />

      <div className="feature-info">
        <h1>01</h1>
        <h2>Reviving Retro PCs</h2>
        <p>What happens when old PCs are given modern upgrades?</p>
      </div>
    </div>
  );
}

export default Feature1;
