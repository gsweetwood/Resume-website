import React, { Component } from "react";
import Sidebar from "./Sidebar";
import "../styles/styles.scss";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import Skills from "./Skills";
import Awards from "./Awards";
import Education from "./Education";
import Contact from "./Contact";
import Welcome from "./Welcome";
import NewProjects from "./NewProjects";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Welcome />
        {/* <Sidebar /> */}
        <div className="main">
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Awards />
          <Education />
          <Contact />
          <NewProjects />
        </div>
      </div>
    );
  }
}

export default App;
