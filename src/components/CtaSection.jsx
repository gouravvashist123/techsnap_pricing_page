import React from "react";

const CtaSection = () => {
  return (
    <section className="cta">
      <div className="cta-container">

        <div className="cta-row1">
          <h5>Enterprise</h5>
          <h1>Custom plans for larger teams</h1>
          <p>
            Our premier website solution made for the unique needs of big
            business.
          </p>
          <div className="cta-button">Learn more</div>
        </div>
        
        <div className="cta-row2">
          <img
            src="https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Enterprise solution visual"
          />
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
