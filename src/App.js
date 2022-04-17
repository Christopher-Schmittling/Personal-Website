import React from "react";
import TechnologiesCards from "./components/Technologies/TechnologiesCards";
import LandingPage from "./components/LandingPage";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="main-wrapper">
      <LandingPage />
      <TechnologiesCards />
      <Contact />
    </div>
  );
}

export default App;
