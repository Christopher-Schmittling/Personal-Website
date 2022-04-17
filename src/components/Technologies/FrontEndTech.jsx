import "./TechnologiesCards.css";
import TechnologiesCard from "./TechnologiesCard";

// TODO - Need to find symbols for technologies

function FrontEndTech() {
  const frontEndData = [
    {
      title: "HTML",
      symbol: "fa-brands fa-html5  fa-3x",
    },
    {
      title: "CSS",
      symbol: "fa-brands fa-css3 fa-3x",
    },
    {
      title: "JavaScript",
      symbol: "fa-brands fa-js fa-3x",
    },
    {
      title: "BootStrap",
      symbol: "fa-brands fa-bootstrap fa-3x",
    },
    {
      title: "React",
      symbol: "fa-brands fa-react fa-3x",
    },
  ];

  return (
    <div className="frontend-technologies">
      <div className="reveal">
        <h2 className="technologies-cards__header">Front End Technologies</h2>
        <div className="technologies-cards">
          {frontEndData.map((frontEndTechnologies, index) => (
            <TechnologiesCard
              title={frontEndTechnologies.title}
              symbol={frontEndTechnologies.symbol}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default FrontEndTech;
