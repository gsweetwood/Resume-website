import React from "react";

const SkillsCard = props => (
  <div className="card skills-card">
    <div className="skills-header title-font">{props.skillsCategory}</div>
    <div className="skills-body">
      <div className="skills-icons-container">{props.children}</div>
    </div>
  </div>
);

export default SkillsCard;
