import React from "react";
import BackEndTech from "./BackEndTech";
import DatabaseTech from "./DatabaseTech";
import FrontEndTech from "./FrontEndTech";
import "./TechnologiesCards.css";

function ExperienceCards() {
  return (
    <div>
      <FrontEndTech />
      <BackEndTech />
      <DatabaseTech />
    </div>
  );
}

export default ExperienceCards;
