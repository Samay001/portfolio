import React from "react";
import "./style/addon.css";
import img from "../assets/images/model.jpg";

const addon = () => {
  return (
    <div className="container-addon">
      <div className="model-img">
        <img src={img} alt="model" />
      </div>
      <div className="addon-text-box">
        <h1>
          OFFERING CREATIVE DESIGN AND DEVELOPMENT FOR AMBITIOUS BRANDS THAT
          WANT TO EXPAND AND CREATE.
        </h1>
        <h2>Lasting Change</h2>
        <p>
          WORKING WITH PASSIONATE PEOPLE & AMBITIOUS BRANDS TO CREATE MEMORABLE
          BRANDS & CAPTIVATING DIGITAL EXPERIENCES THAT DELIVER RESULTS
        </p>
      </div>
    </div>
  );
};

export default addon;
