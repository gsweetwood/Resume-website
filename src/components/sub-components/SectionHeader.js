import React from "react";

const SectionHeader = props => {
  return (
    <div className="section-header title-font" id={props.id}>
      <h1>{props.sectionHeader}</h1>
    </div>
  );
};

export default SectionHeader;
