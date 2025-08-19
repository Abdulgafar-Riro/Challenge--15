import React from "react";
import "./TopLeft.css";
import web3Desktop from "../assets/images/image-web-3-desktop.jpg";
import web3Mobile from "../assets/images/image-web-3-mobile.jpg";

function TopLeft() {
  return (
    <div className="top-left">
      <picture>
        <source media="(min-width: 1200px)" srcSet={web3Desktop} />

        <img src={web3Mobile} alt="Web 3 image" className="web3-image" />
      </picture>

      <div className="info">
        <h1>The Bright Future of Web 3.0?</h1>
        <div className="info-left">
          <p>
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>

          <button type="submit" className="read-more-btn">
            READ MORE
          </button>
        </div>
      </div>
    </div>
  );
}

export default TopLeft;
