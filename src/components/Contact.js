import React from "react";
import SectionHeader from "./sub-components/SectionHeader";
import emailIcon from "../images/icons/email-icon.png";
import linkedinIcon from "../images/icons/linkedin-icon.png";
import gitIcon from "../images/icons/git-icon.png";
import docIcon from "../images/icons/download-resume-icon.png";

const Contact = () => (
  <section id="contact">
    <SectionHeader sectionHeader="contact" />
    <div className="contact-section">
      <div className="contact-item">
        <img src={emailIcon} className="contact-icon" id="email-icon" />
        garretsweetwood6@gmail.com
      </div>

      <a
        href="https://www.linkedin.com/in/garretsweetwood"
        className="contact-item"
      >
        <img src={linkedinIcon} className="contact-icon" id="linkedin-icon" />
        <div>linkedin.com/in/garretsweetwood</div>
      </a>

      <a href="https://github.com/gsweetwood" className="contact-item">
        <img src={gitIcon} className="contact-icon" id="git-icon" />
        <div>github.com/garretsweetwood</div>
      </a>

      <a
        href="https://drive.google.com/file/d/1sG24YdX2TBJ_7-NYezE6oZMMfiHYITc4/view?usp=sharing"
        className="contact-item"
      >
        <img src={docIcon} className="contact-icon" id="resume-icon" />
        <div>Downloadable Resume</div>
      </a>
    </div>
    <div className="created-by">Created by Garret Sweetwood</div>
  </section>
);

export default Contact;
