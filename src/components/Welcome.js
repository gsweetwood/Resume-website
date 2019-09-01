import React from "react";
import downArrow from "../images/icons/white-down-arrow.png";

const Welcome = props => {
  return (
    <section className="welcome-container">
      <h1>Garret Sweetwood</h1>
      <h3>Full Stack Engineer</h3>
      <img alt="down arrow" src={downArrow} className="down-arrow" />
    </section>
  );
};

export default Welcome;
