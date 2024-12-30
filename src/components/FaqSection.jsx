import React from "react";

const FaqSection = () => {
  const faqData = [
    {
      question: "How long are your contracts?",
      answer:
        "Squarespace plans are paid monthly or yearly. We make it simple to start — and stop — your service at any time.",
    },
    {
      question: "How long are your contracts?",
      answer:
        "Squarespace plans are paid monthly or yearly. We make it simple to start — and stop — your service at any time.",
    },
    {
      question: "How long are your contracts?",
      answer:
        "Squarespace plans are paid monthly or yearly. We make it simple to start — and stop — your service at any time.",
    },
    {
      question: "How long are your contracts?",
      answer:
        "Squarespace plans are paid monthly or yearly. We make it simple to start — and stop — your service at any time.",
    },
    {
      question: "How long are your contracts?",
      answer:
        "Squarespace plans are paid monthly or yearly. We make it simple to start — and stop — your service at any time.",
    },
    {
      question: "How long are your contracts?",
      answer:
        "Squarespace plans are paid monthly or yearly. We make it simple to start — and stop — your service at any time.",
    },
  ];

  return (
    <section className="faq">
      <div className="faq-container">
        
        <div className="faq-row1">
          <h1>Q&A</h1>
        </div>

        <div className="faq-row2">
          {faqData.map((item, index) => (
            <div className="faq-content" key={index}>
              <div className="faq-question">
                <h3>{item.question}</h3>
                <img src="./assets/plus.png" alt="Expand FAQ" />
              </div>
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
