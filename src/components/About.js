import React from "react";
import SectionHeader from "./sub-components/SectionHeader";

const About = () => (
  <div id="about" className="about-section">
    <SectionHeader sectionHeader="About" id="aboutHeader" />

    <blockquote id="quote" className="title-font">
      <h2>
        A Full Stack Developer with diverse experience and extensive education;
        passionate about innovation, problem-solving, and product design.
      </h2>
    </blockquote>
    <p>
      Hello, my name is Garret Sweetwood. I’m an award-winning medical device
      engineer making a career switch into Software Engineering. My curiosity,
      focus on user needs, and determination led me to ideate, design, develop,
      and launch a product which won an international award for excellence and
      became the company’s fastest growing product in their history. It’s
      important to note that all of these activities were well outside the scope
      of my position at the time. My career thus far has depended greatly on
      working cohesively with diverse teams, effective communication,
      persevering through failure, and rapid adaptability. I have a true passion
      for innovation, learning, and making a real impact on the world. This
      drive is what led me to return to school and earn a second degree in
      Computer Science. Since graduation, I have focused on front-end
      development with React, JavaScript, HTML, and CSS and also back-end
      development with NodeJS and MySQL. Recently, I completed a front-end
      consulting project with IBM and I am now looking to commit full time to an
      exciting new team. If you are looking for new talent who knows what it
      takes and is eager to dive in and work hard, I would love the opportunity
      to speak with you.
    </p>
  </div>
);

export default About;
