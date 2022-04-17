import "./TechnologiesCards.css";
import TechnologiesCard from "./TechnologiesCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { fahtml5 } from "@fortawesome/free-solid-svg-icons";

// TODO - Need to find symbols for technologies

function BackEndTech() {
  const backEndData = [
    {
      title: "Node.js",
      symbol: "fa-brands fa-node-js fa-3x",
    },
    {
      title: "Express",
      symbol: "express",
    },
    {
      title: ".Net",
      symbol: ".net",
    },
  ];
  return (
    <div className="backend-technologies">
      <div className="reveal">
        <h2 className="technologies-cards__header">Back End Technologies</h2>
        <div className="technologies-cards">
          {backEndData.map((backEndTechnologies, index) => (
            <TechnologiesCard
              title={backEndTechnologies.title}
              symbol={backEndTechnologies.symbol}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default BackEndTech;
