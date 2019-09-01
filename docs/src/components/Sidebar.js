import React from "react";

import projectsIcon from "../images/icons/projects-icon.png";
import aboutIcon from "../images/icons/about-icon.png";
import experienceIcon from "../images/icons/experience-icon.png";
import skillsIcon from "../images/icons/skills-icon.png";
import awardsIcon from "../images/icons/awards-icon.png";
import educationIcon from "../images/icons/education-icon.png";
import contactIcon from "../images/icons/contact-icon.png";
import profilePic from "../images/profile-pic.png";

const Sidebar = () => {
  return (
    <div id="sidebar">
      <div className="sidebar-title">
        <div id="sidebar-name">
          Garret <div>Sweetwood</div>
        </div>
        <div>Full Stack Developer</div>
        <img src={profilePic} alt="profile-picture" id="profile-photo" />
      </div>

      <div className="sidebar-links">
        <a href="#about" id="about-link">
          <img src={aboutIcon} className="link-icon" />
          About
        </a>

        <a href="#experience" id="experience-link">
          <img src={experienceIcon} className="link-icon" />
          Experience
        </a>

        <a href="#projects" id="projects-link">
          <img className="link-icon" src={projectsIcon} />
          Projects
        </a>

        <a href="#skills" id="skills-link">
          <img src={skillsIcon} className="link-icon" />
          Skills
        </a>

        <a href="#awards" id="awards-link">
          <img src={awardsIcon} className="link-icon" />
          Awards
        </a>

        <a href="#education" id="education-link">
          <img src={educationIcon} className="link-icon" />
          Education
        </a>

        <a href="#contact" id="contact-link">
          <img src={contactIcon} className="link-icon" />
          Contact
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
