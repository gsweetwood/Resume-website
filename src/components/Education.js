import React from "react";
import SectionHeader from "./sub-components/SectionHeader";
import osuIcon from "../images/icons/osu-logo-bw.png";
import rooseveltIcon from "../images/icons/roosevelt-logo.png";

const Education = () => (
  <section id="education">
    <SectionHeader sectionHeader="Education" />
    <div className="education-section">
      <div className="education-card card">
        <div className="degree-title title-font">
          Bachelor of Science - Computer Science
        </div>
        <div className="education-body">
          <img src={osuIcon} className="school-icon" />
          <div className="university-text">
            <p>Oregon State University</p>
            <p className="school-location">Corvallis, OR</p>
          </div>
        </div>
      </div>
      <div className="education-card card">
        <div className="degree-title title-font">
          Bachelor of Science - Biology
        </div>
        <div className="education-body">
          <img src={rooseveltIcon} className="school-icon" />
          <div className="university-text" id="roosevelt-text">
            <p>Roosevelt University</p>
            <p className="school-location">Chicago, IL</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Education;
