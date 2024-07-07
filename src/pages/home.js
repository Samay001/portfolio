import React from "react";
import img from "../assets/images/main3.jpeg";
import "./style/home.css";
import About from "./about";
import Work from "./work";
import Projects from "./projects";
import Addon from "./addon";
import Contact from "./contact";
import SocialHandle from "./socialHandle";

const Home = () => {
  return (
    <>
      <div className="container">
        <div className="img-main">
          <img src={img} alt="main" />
        </div>
        <div className="heading-container">
          <div className="name-text">
            <h1>SAMAY RATHOD</h1>
            <h3>Software Developer</h3>
          </div>
        </div>
      </div>
      <About />
      <Work />
      <Projects />
      <Addon />
      <Contact />
      <SocialHandle />
    </>
  );
};

export default Home;
