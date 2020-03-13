import React from "react";
import SectionHeader from "./sub-components/SectionHeader";

const About = () => (
  <div id="about" className="about-section">
    <SectionHeader sectionHeader="About" id="aboutHeader" />

    {/* <blockquote id="quote" className="title-font">
      <h2>
      Software Development Engineer with experience in Front End development, Open Source software, and Amazon Web Services. Skilled in JavaScript, React, TypeScript, CSS/SASS, C++, and Java with the ability to learn new languages and technologies as required. I’ve had a varied and fulfilling career thus far, including 9+ years as an internationally award-winning medical device designer and engineer, prior to entering the Software industry. 
      </h2>
    </blockquote> */}
    <p>
    Software Development Engineer with experience in Amazon Web Services, Front End development, and open source software. Skilled in JavaScript, React, TypeScript, CSS/SASS, and Kotlin/Java with the ability to learn new languages and technologies as required. I’ve had a varied and fulfilling career thus far, including 9+ years as an internationally award-winning medical device designer and engineer, prior to entering the Software industry. 
    </p>
    {/* <div className="to-top-button">TOP</div> */}
  </div>
);

export default About;
