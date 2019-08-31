import React from "react";
import SectionHeader from "./sub-components/SectionHeader";
import SkillsCard from "./sub-components/SkillsCard";
import jsIcon from "../images/icons/javascript.png";
import reactIcon from "../images/icons/react.png";
import nodeIcon from "../images/icons/nodejs.png";
import htmlIcon from "../images/icons/html5.png";
import cssIcon from "../images/icons/css3.png";
import sassIcon from "../images/icons/sass.png";
import gitIcon from "../images/icons/github.png";
import udemyIcon from "../images/icons/udemy.png";
import hrIcon from "../images/icons/gold-badge.PNG";
import bootstrapIcon from "../images/icons/bootstrap.png";
import cplusplusIcon from "../images/icons/cpp-logo.png";
import javaIcon from "../images/icons/java-logo.png";
import solidworksIcon from "../images/icons/solidworks.png";
import mayaIcon from "../images/icons/maya-logo.png";

const Skills = () => (
  <div id="skills" className="skills-section">
    <SectionHeader sectionHeader="Skills" />
    <div className="skills-section">
      <SkillsCard skillsCategory="JavaScript">
        <div className="icon-set">
          <img src={jsIcon} className="skills-icons" />
          JavaScript
        </div>
        <div className="icon-set">
          <img src={reactIcon} className="skills-icons" />
          React
        </div>
        <div className="icon-set">
          <img src={nodeIcon} className="skills-icons" />
          Node.js
        </div>
      </SkillsCard>

      <SkillsCard skillsCategory="HTML / CSS">
        <div className="icon-set">
          <img src={htmlIcon} className="skills-icons" />
          HTML5
        </div>
        <div className="icon-set">
          <img src={reactIcon} className="skills-icons" />
          JSX
        </div>
        <div className="icon-set">
          <img src={cssIcon} className="skills-icons" />
          CSS3
        </div>
        <div className="icon-set">
          <img src={sassIcon} className="skills-icons" />
          SASS
        </div>
        <div className="icon-set">
          <img src={bootstrapIcon} className="skills-icons" />
          Bootstrap
        </div>
      </SkillsCard>

      <SkillsCard skillsCategory="Other">
        <div className="icon-set">
          <img src={gitIcon} className="skills-icons" />
          Git
        </div>
        <div className="icon-set">
          <img src={udemyIcon} className="skills-icons" />
          Over 100 hours of Web Development coursework completed
        </div>
        <div className="icon-set">
          <img src={hrIcon} className="skills-icons" />
          Gold Badge earned for Problem Solving in Hackerrank
        </div>
        <div className="icon-set">
          <img src={javaIcon} className="skills-icons" />
          JAVA
        </div>
        <div className="icon-set">
          <img src={cplusplusIcon} className="skills-icons" />
          C++
        </div>
        <div className="icon-set">
          <img src={solidworksIcon} className="skills-icons" />
          SolidWorks
        </div>
        <div className="icon-set">
          <img src={mayaIcon} className="skills-icons" />
          Autodesk Maya
        </div>
      </SkillsCard>
    </div>
  </div>
);
export default Skills;
