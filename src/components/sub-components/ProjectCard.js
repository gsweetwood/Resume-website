import React from "react";

const ProjectCard = props => (
  <div className="card project-card">
    <div className="image-container">
      <img src={props.projectImage} className="project-image" />
    </div>
    <div className="project-body">
      <div className="project-title title-font">{props.projectTitle}</div>
      <div className="project-details">{props.projectDetails}</div>
    </div>
  </div>
);

export default ProjectCard;
