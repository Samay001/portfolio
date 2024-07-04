import React from "react";
import img from "../assets/images/main3.jpeg";
import "./style/home.css";
import About from "./about";
import Work from "./work";
import Projects from "./projects";
import Addon from "./addon";
import Contact from "./contact";

const Home = () => {
  return (
    <>
      <div className="container">
        <div className="img-main">
          <img src={img} alt="main" />
        </div>
        <div className="heading-container">
          <div className="row">
            <span className="text-block">
              <h3>INSTAGRAM</h3>
              <h1>INFO</h1>
            </span>
            <span className="text-block">
              <h3>AWWARDS</h3>
              <h1>WORK</h1>
            </span>
          </div>

          <div className="name-text">
            <h1>SAMAY RATHOD</h1>
            <h3>Software Developer</h3>
          </div>

          <div className="row">
            <span className="text-block">
              <h3>INSTAGRAM</h3>
              <h1>INFO</h1>
            </span>
            <span className="text-block bio">
              <h3>WORKING PROJECT FOR BRAND</h3>
              <h1>BRAND DIRECTIONAL DIGITAL</h1>
            </span>
            <span className="text-block">
              <h3>AWWARDS</h3>
              <h1>WORK</h1>
            </span>
          </div>
        </div>
      </div>
      <About />
      <Work />
      <Projects />
      <Addon />
      <Contact />
    </>
  );
};

export default Home;
