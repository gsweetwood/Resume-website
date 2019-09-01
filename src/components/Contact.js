import React from "react";
import SectionHeader from "./sub-components/SectionHeader";
import emailIcon from "../images/icons/email-icon.png";
import linkedinIcon from "../images/icons/linkedin-icon.png";
import gitIcon from "../images/icons/git-icon.png";
import docIcon from "../images/icons/download-resume-icon.png";

const Contact = () => (
  <section id="contact" className="contact-section">
    <SectionHeader sectionHeader="contact" />
    <div>
      <div className="contact-item">
        <img src={emailIcon} className="contact-icon" id="email-icon" />
        <span>garretsweetwood6@gmail.com</span>
      </div>

      <a
        href="https://www.linkedin.com/in/garretsweetwood"
        className="contact-item"
      >
        <img src={linkedinIcon} className="contact-icon" id="linkedin-icon" />
        <span>linkedin.com/in/garretsweetwood</span>
      </a>

      <a href="https://github.com/gsweetwood" className="contact-item">
        <img src={gitIcon} className="contact-icon" id="git-icon" />
        <span>github.com/garretsweetwood</span>
      </a>

      <a
        href="https://drive.google.com/file/d/1sG24YdX2TBJ_7-NYezE6oZMMfiHYITc4/view?usp=sharing"
        className="contact-item"
      >
        <img src={docIcon} className="contact-icon" id="resume-icon" />
        <span>Downloadable Resume</span>
      </a>
    </div>

    <div className="created-by">Created by Garret Sweetwood</div>
  </section>
);

export default Contact;
