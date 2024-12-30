import React from "react";
import PlanSection from "./PlanSection";
import RatingSection from "./RatingSection";
import PricingTable from "./PricingTable";
import CtaSection from "./CtaSection";
import FaqSection from "./FaqSection";

function App(){

    return (
        <div>
            <PlanSection/>
            <RatingSection/>
            <PricingTable/>
            <CtaSection/>
            <FaqSection/>
        </div>
    );
};

export default App;