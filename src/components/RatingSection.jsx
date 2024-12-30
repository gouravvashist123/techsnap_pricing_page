import React from "react";

const RatingSection = () => {
  const rateData = [
    {
      value: "180+",
      description: "Countries using the DataCamp platform",
    },
    {
      value: "4.0+ ⭐⭐⭐⭐",
      description: "Trusted by more than 13 million learners",
    },
    {
      value: "80%",
      description: "of the Fortune 1000 use DataCamp",
    },
  ];

  return (
    <section className="rate">
      <div className="rate-container">
        {rateData.map((item, index) => (
          <div className="rate-item" key={index}>
            <h2>{item.value}</h2>
            <h4>{item.description}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RatingSection;
