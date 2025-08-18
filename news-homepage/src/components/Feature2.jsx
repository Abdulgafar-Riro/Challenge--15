import React from "react";
import TopLaptops from "../assets/images/image-top-laptops.jpg";

function Feature2() {
  return (
    <div className="feature">
      <img src={TopLaptops} alt="image of a retro pcs" />

      <div className="feature-info">
        <h1>02</h1>
        <h2>Top 10 Laptops of 2022</h2>
        <p>Our best picks for various needs and budgets.</p>
      </div>
    </div>
  );
}

export default Feature2;
