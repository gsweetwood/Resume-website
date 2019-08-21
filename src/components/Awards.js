import React from "react";
import SectionHeader from "./sub-components/SectionHeader";
import mdeaIcon from "../images/icons/mdeaIcon.png";
import abAward from "../images/icons/above-beyond.png";
import pubIcon from "../images/icons/publication.png";

const Awards = () => (
  <div id="awards" className="award-section">
    <SectionHeader sectionHeader="awards and recognition" />

    <div className="card award-card">
      <div className="award-title title-font">
        Medical Design Excelence Award - Bronze Winner
      </div>
      <div className="award-body">
        <div className="award-icon-container">
          <img src={mdeaIcon} className="award-icon" id="mdea-award" />
        </div>
        International Award-Winning Design: 2016 Medical Design Excellence Award
        (MDEA) Winner – Bronze Winner. Conceptualized, ideated, and developed a
        product for safe patient handling to prevent and decrease rate of
        hospital caregiver injuries and prevent sacral pressure ulcers.
      </div>
    </div>

    <div className="card award-card">
      <div className="award-title title-font">Above and Beyond Award</div>
      <div className="award-body">
        <div className="award-icon-container">
          <img src={abAward} className="award-icon" id="ab-award" />
        </div>
        Awarded by Sage Products Inc. Recognized for significant contributions
        to company success; going above and beyond job requirements.
      </div>
    </div>

    <div className="card award-card">
      <div className="award-title title-font">
        publication - The Lichenologist
      </div>
      <div className="award-body">
        <div className="award-icon-container">
          <img src={pubIcon} className="award-icon" />
        </div>

        <div id="publication">
          Ascospore ontogeny and discharge in megalosporous Trypetheliaceae and
          Graphidaceae (Ascomycota: Dothideomycetes and Lecanoromycetes) suggest
          phylogenetic relationships and ecological constraints.
          <p>
            <a href="https://www.cambridge.org/core/journals/lichenologist/article/ascospore-ontogeny-and-discharge-in-megalosporous-trypetheliaceae-and-graphidaceae-ascomycota-dothideomycetes-and-lecanoromycetes-suggest-phylogenetic-relationships-and-ecological-constraints/2AB3301CF74992724C428E0865DFDE5D">
              See publication
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Awards;
