import './App.css';
import React from "react";
import PlanSection from "./components/PlanSection";
import RatingSection from "./components/RatingSection";
import PricingTable from "./components/PricingTable";
import CtaSection from "./components/CtaSection";
import FaqSection from "./components/FaqSection";

function App() {
  return (
    <div>
            <PlanSection/>
            <RatingSection/>
            <PricingTable/>
            <CtaSection/>
            <FaqSection/>
    </div>
  );
}

export default App;
