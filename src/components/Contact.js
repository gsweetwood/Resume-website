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
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={linkedinIcon} className="contact-icon" id="linkedin-icon" />
        <span>linkedin.com/in/garretsweetwood</span>
      </a>

      <a
        href="https://github.com/gsweetwood"
        target="_blank"
        rel="noopener noreferrer"
        className="contact-item"
      >
        <img src={gitIcon} className="contact-icon" id="git-icon" />
        <span>github.com/garretsweetwood</span>
      </a>

      <a
        href="https://drive.google.com/open?id=1PrmPHbK36zE_WaoKUJar_Ps_UiaQKXy0"
        className="contact-item"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={docIcon} className="contact-icon" id="resume-icon" />
        <span>Downloadable CV</span>
      </a>
    </div>

    <div className="created-by">Created by Garret Sweetwood</div>
  </section>
);

export default Contact;
