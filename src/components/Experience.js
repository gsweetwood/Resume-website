import React from "react";
import SectionHeader from "./sub-components/SectionHeader";
import ExperienceCard from "./sub-components/ExperienceCard";
import ibmIcon from "../images/ibm-icon.png";
import olympusIcon from "../images/olympus-logo.png";
import sunstarLogo from "../images/sunstar-logo.png";
import sageProductsLogo from "../images/sage-products-logo.png";

const Experience = () => (
  <div id="experience" className="experience-section">
    <SectionHeader sectionHeader="experience" />
    <div className="experience-list">
      {/*  //IBM Consulting */}
      <ExperienceCard
        companyIcon={ibmIcon}
        companyName="IBM"
        positionTitle="Front-End Development Consultant"
        positionDates="Jan 2019 - Present"
        positionLocation="Remote"
      >
        <ul>
          <li>
            Constructed a React.js application that will interface with current
            manufacturing inspection processes.
          </li>
          <li>
            Redesigned and restructured current UI to give a better user
            experience and be highly responsive.
          </li>
          <li>
            Refactored existing code into more modern technologies such as
            React.js and Socket.io.
          </li>
        </ul>
      </ExperienceCard>
      {/* //IBM Summer Project */}
      <ExperienceCard
        companyIcon={ibmIcon}
        companyName="IBM"
        positionTitle="Front-End Development Summer Intern Project"
        positionDates="Jul 2018"
        positionLocation="Remote"
      >
        <ul>
          <li>
            Increased data visibility and operating efficiency by applying IoT
            strategies to brewing stages and bottling process. Designed user
            interface to allow engineers to monitor real-time data linked to the
            Cloud.
          </li>
          <li>
            Redesigned and restructured current UI to give a better user
            experience and be highly responsive.
          </li>
        </ul>
      </ExperienceCard>
      {/* //Olympus - Quality Engineer */}
      <ExperienceCard
        companyIcon={olympusIcon}
        companyName="Spiration d/b/a Olympus Respiratory America"
        positionTitle="Quality Engineer II"
        positionDates="Dec 2017 - Present"
        positionLocation="Redmond, WA"
      >
        <ul>
          <li>
            Designed an algorithm to analyze and graph simulated breathing
            patterns.
          </li>
          <li>
            Perform design reviews, execute verification and validation
            protocols, and troubleshoot nonconformities regarding quality.
          </li>
        </ul>
      </ExperienceCard>
      <ExperienceCard
        companyIcon={sunstarLogo}
        companyName="Sunstar Americas"
        positionTitle="Research and Development Engineer"
        positionDates="Jun 2016 - Jun 2017"
        positionLocation="Schaumburg, IL"
      >
        <ul>
          <li>
            Researched latest technologies and experimented to discover
            innovative solutions and new product opportunities.
          </li>
        </ul>
      </ExperienceCard>
      <ExperienceCard
        companyIcon={sageProductsLogo}
        companyName="Sage Products"
        positionTitle="New Product Development Engineer"
        positionDates="May 2012 - Jun 2016"
        positionLocation="Cary, IL"
      >
        <ul>
          <li>
            International Award-Winning Design: 2016 Medical Design Excellence
            Award (MDEA) Winner – Bronze Winner. Conceptualized and developed a
            product for safe patient handling.
          </li>
          <li>
            GMP Documentation: Review and approve GMP controlled documentation
            such as test methods, specifications, Work Instructions and
            controlled forms.
          </li>
          <li>{`Patent Development & Innovative Design: Lead inventor on four medical device patents.`}</li>
          <li>
            Sage Award Nominations: Nominated for significant contributions
            under “Above and Beyond” award title.
          </li>
          <li>
            Product Design: Designed dozens of cutting-edge medical products
            through developing quality solutions that tackle product challenges
            by exploring new concepts, conducting research, and increasing
            usability.
          </li>
          <li>
            SolidWorks Modeling: Built dozens of 3D models of small medical
            devices with CAD tools (SolidWorks).
          </li>
        </ul>
      </ExperienceCard>
    </div>
  </div>
);

export default Experience;
