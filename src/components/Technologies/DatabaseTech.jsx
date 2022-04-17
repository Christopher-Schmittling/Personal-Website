import "./TechnologiesCards.css";
import TechnologiesCard from "./TechnologiesCard";

// TODO - Need to find symbols for technologies

function DatabaseTech() {
  const databaseData = [
    {
      title: "MongoDB",
      symbol: "mongodb",
    },
    {
      title: "SQL",
      symbol: "sql",
    },
  ];
  return (
    <div className="database-technologies">
      <div className="reveal">
        <h2 className="technologies-cards__header">Database Technologies</h2>
        <div className="technologies-cards">
          {databaseData.map((databaseTechnologies, index) => (
            <TechnologiesCard
              title={databaseTechnologies.title}
              symbol={databaseTechnologies.symbol}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default DatabaseTech;
