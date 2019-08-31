import React from "react";

const ExperienceCard = props => (
  <div className="experience-card card">
    <div className="exp-card-header title-font">
      <img
        src={props.companyIcon}
        className="company-icon"
        alt="company logo"
      />
      <div className="company-name">{props.companyName}</div>
      <div className="position-title">{props.positionTitle}</div>
    </div>
    {props.children}
    <div className="exp-card-footer">
      {props.positionDates} | {props.positionLocation}
    </div>
  </div>
);

export default ExperienceCard;
