import React from "react";
import SectionHeader from "./sub-components/SectionHeader";

const About = () => (
  <div id="about">
    <SectionHeader sectionHeader="About" id="aboutHeader" />
    <div className="about-section">
      <blockquote id="quote" className="title-font">
        <h2>
          A Full Stack Developer with diverse experience and extensive
          education; passionate about innovation, problem-solving, and product
          design.
        </h2>
      </blockquote>
      <p>
        I learn quickly, have strong communication and interpersonal skills,
        combined with boundless curiosity and grit. Exceptionally driven and
        hard-working, with aspirations for international travel and immersion,
        seeking a full-time remote position with a cutting-edge company.
      </p>
      <p>
        Previously 7+ years experience as an awarding-winning Medical Device
        Engineer, working to design, engineer, and test world-class products.
        Since returning to school 3 years ago and earning a second B.S. degree
        in Computer Science, my knowledge and passion for software development
        grows daily. I am currently consulting on Front-End Development for IBM.
      </p>
      <p>
        Currently residing in Seattle, Washington with my wife, Beth, our dog,
        and two cats. In my spare time, I enjoy hiking, scuba diving,
        photography, gaming, and geeking out about all things science.
      </p>
    </div>
  </div>
);

export default About;
