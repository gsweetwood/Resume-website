import React from "react";
import SectionHeader from "./sub-components/SectionHeader";
import ProjectCard from "./sub-components/ProjectCard";
import waScreenshot from "../images/wa-screenshot.PNG";
import ytScreenshot from "../images/yt-browser-screenshot.PNG";
import inspectionDashScreenshot from "../images/inspection-dash-screenshot.PNG";
import bwApp from "../images/android-app.png";
import brewDashScreenshot from "../images/sugar-creek-brew.PNG";
import tdScreenshot from "../images/tower-defense.PNG";
import movieLinkScreenshot from "../images/movie-link.PNG";

const NewProjects = props => {
  return (
    <section className="project-container">
      <img
        src={inspectionDashScreenshot}
        alt="project"
        className="r1 c3 item"
      />
      <img src={movieLinkScreenshot} alt="project" className="r1 c1 item" />
      <img src={brewDashScreenshot} alt="project" className="r1 c5 item" />
      <img src={bwApp} alt="project" className="r3 c1 item" />
      <img src={waScreenshot} alt="project" className="r3 c5 item" />
      <img src={ytScreenshot} alt="project" className="r5 c1 item" />
      <img src={tdScreenshot} alt="project" className="r5 c3 item" />
      <img
        src={inspectionDashScreenshot}
        alt="project"
        className="r1 c3 item"
      />
      <div className="r3 c3  item center-proj">COMPLETED WORKS</div>
      <div className="r2 c2  item right-diagonal"></div>
      <div className="r2 c4  item left-diagonal"></div>
      <div className="r4 c4  item right-diagonal"></div>
      <div className="r4 c2  item left-diagonal"></div>
      <div className="r3 c2 item horizontal-line"></div>
      <div className="r3 c4 item horizontal-line"></div>
      <div className="r2 c3 item vertical-line"></div>
      <div className="r4 c3 item vertical-line"></div>
    </section>
  );
};

export default NewProjects;
