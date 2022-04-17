import React from "react";
import "./TechnologiesCard.css";

function TechnologiesCard(props) {
  return (
    <div className="technologies-card">
      <div className="technologies-card__symbol">
        <i className={props.symbol}></i>
      </div>
      <div className="technologies-card__title">{props.title}</div>
    </div>
  );
}

export default TechnologiesCard;
