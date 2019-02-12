import React, { Component } from "react";
import Sidebar from "./Sidebar";
import "../styles/main.css";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import Skills from "./Skills";
import Awards from "./Awards";
import Education from "./Education";
import Contact from "./Contact";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar />
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
