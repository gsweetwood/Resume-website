import React, { Component } from "react";
import * as Scroll from "react-scroll";
import { scroller } from "react-scroll";
import "../styles/styles.scss";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import Skills from "./Skills";
import Awards from "./Awards";
import Education from "./Education";
import Contact from "./Contact";
import Welcome from "./Welcome";

class App extends Component {
  componentDidMount() {
    setTimeout(() => {
      scroller.scrollTo("about-section", { duration: 1200, offset: -50 });
    }, 3500);
  }

  render() {
    return (
      <div className="App">
        <Welcome />

        <div className="main">
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Awards />
          <Education />
          <Contact />
        </div>
      </div>
    );
  }
}

export default App;
