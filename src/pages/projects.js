import React, { useState } from "react";
import "./style/projects.css";
import urbansnitch from "../assets/videos/urbansnitch.mp4";
import goland from "../assets/videos/goland.mp4";
import skywatch from "../assets/videos/skywatch.mp4";
import colorfont from "../assets/videos/colorfont.mp4";

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      name: "URBAN SNITCH",
      live: "https://urbansnitch-w7we.vercel.app/",
      github: "https://github.com/Samay001/urbansnitch",
      video: urbansnitch,
    },
    {
      name: "Concsious Chemist",
      live: "https://conscious-chemist.vercel.app",
      github: "https://github.com/Samay001/conscious-chemist",
      video: goland,
    },
    {
      name: "GO-LAND",
      live: "https://go-food-rho.vercel.app/",
      github: "https://github.com/Samay001/Go-Food",
      video: goland,
    },
    {
      name: "SKY-WATCH",
      live: "https://skywatch-five.vercel.app/",
      github: "https://github.com/Samay001/skywatch",
      video: "https://www.youtube.com/embed/j5Hea8Hc2u8",
      video: skywatch,
    },
    {
      name: "COLORFONT MASTER",
      live: "https://chromewebstore.google.com/detail/colorfont-master/ggcaimdnkaainkgamjjdkoimamgmfmcb?hl=en-GB",
      github: "https://github.com/Samay001/ColorFont-Master",
      video: colorfont,
    },
  ];

  return (
    <div className="container-projects">
      <div className="projects-text-box">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project pro-box"
            onMouseEnter={() => setHoveredProject(index)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <div className="project-name">
              <h1>{project.name}</h1>
            </div>
            <div className="links">
              <button onClick={() => window.open(project.live, "_blank")}>
                LIVE
              </button>
              <button onClick={() => window.open(project.github, "_blank")}>
                GITHUB
              </button>
            </div>
            {hoveredProject === index && (
              <div className="video-preview">
                {project.video.includes("youtube") ? (
                  <iframe
                    width="200"
                    height="150"
                    src={project.video}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <video src={project.video} autoPlay muted loop />
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
