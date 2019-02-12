import React from "react";
import SectionHeader from "./sub-components/SectionHeader";
import ProjectCard from "./sub-components/ProjectCard";
import waScreenshot from "../images/wa-screenshot.PNG";
import ytScreenshot from "../images/yt-browser-screenshot.PNG";
import inspectionDashScreenshot from "../images/inspection-dash-screenshot.PNG";
import bwApp from "../images/android-app.png";
import brewDashScreenshot from "../images/sugar-creek-brew.PNG";
import tdScreenshot from "../images/tower-defense.PNG";

const Projects = () => (
  <div id="projects">
    <SectionHeader sectionHeader="Projects" />
    <div className="projects-list">
      <ProjectCard
        projectImage={inspectionDashScreenshot}
        projectTitle="Manufacturing Dashboard"
        projectDetails="An manufacturing inspection dashboard that displays real-time results, trending, graphical analysis, and alerts."
      />
      <ProjectCard
        projectImage={waScreenshot}
        projectTitle="WriteAid"
        projectDetails="A JAVA desktop application intended to help students and writers count the occurance for each word and offer synonyms for help."
      />

      <ProjectCard
        projectImage={ytScreenshot}
        projectTitle="YouTube Browser"
        projectDetails="A React app to demonstrate the various abilities of React."
      />

      <ProjectCard
        projectImage={bwApp}
        projectTitle="Utilities Mobile App"
        projectDetails="An Android app to calculate tips, display current weather conditions based on user's location, and a unit converter."
      />

      <ProjectCard
        projectImage={brewDashScreenshot}
        projectTitle="IoT Brewery Dashboard"
        projectDetails="A Front-End dasboard to monitor and record various stages at a professional brewery."
      />

      <ProjectCard
        projectImage={tdScreenshot}
        projectTitle="Tower Defense JavaScript Game"
        projectDetails="A Mario themed tower defense game programmed with JavaScript and playable in the browser."
      />
    </div>
  </div>
);

export default Projects;
