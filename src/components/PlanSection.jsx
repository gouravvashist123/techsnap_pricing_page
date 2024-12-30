import React from "react";

const PlanSection = () => {
  const plans = [
    {
      title: "Personal",
      price: "$23",
      saveText: "Save 30% annually",
      description:
        "Our foundational plan with access to fully customizable, best-in-class templates.",
      features: [
        "Mobile optimized websites",
        "Templates to fit every need",
        "Free custom domain*",
      ],
    },
    {
      title: "Business",
      price: "$23",
      saveText: "Save 30% annually",
      description:
        "Our foundational plan with access to fully customizable, best-in-class templates.",
      features: [
        "Mobile optimized websites",
        "Templates to fit every need",
        "Free custom domain*",
      ],
    },
    {
      title: "Commerce Basic",
      price: "$23",
      saveText: "Save 30% annually",
      description:
        "Our foundational plan with access to fully customizable, best-in-class templates.",
      features: [
        "Mobile optimized websites",
        "Templates to fit every need",
        "Free custom domain*",
      ],
    },
    {
      title: "Commerse Advanced",
      price: "$23",
      saveText: "Save 30% annually",
      description:
        "Our foundational plan with access to fully customizable, best-in-class templates.",
      features: [
        "Mobile optimized websites",
        "Templates to fit every need",
        "Free custom domain*",
      ],
    },
  ];

  return (
    <section className="plan">
      <div className="plan-container">
        <div className="plan-flex">
          {plans.map((plan, index) => (
            <div className="plan-item" key={index}>
              <h5>{plan.title}</h5>
              <h2>
                <span className="plan-price">{plan.price}</span>/mo
              </h2>
              <p className="plan-save">{plan.saveText}</p>
              <p className="plan-content">{plan.description}</p>
              <div className="plan-button">START FREE TRIAL</div>
              <p className="plan-feature-heading">PRODUCTS</p>
              <div className="plan-features">
                {plan.features.map((feature, i) => (
                  <div className="plan-feature-item" key={i}>
                    <div className="plan-feature-flex">
                      <img
                        className="plan-feature-icon"
                        src="./assets/app-development.png"
                        alt=""
                      />
                      <h4>{feature}</h4>
                    </div>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      title="Info icon"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8 14.2222C11.4364 14.2222 14.2222 11.4364 14.2222 8C14.2222 4.56356 11.4364 1.77778 8 1.77778C4.56356 1.77778 1.77778 4.56356 1.77778 8C1.77778 11.4364 4.56356 14.2222 8 14.2222ZM16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8Z"
                        fill="#A2A2A2"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8.88889 6.22222V12.4444H7.11111V6.22222H8.88889Z"
                        fill="#A2A2A2"
                      ></path>
                      <path
                        d="M8.88889 5.33333H7.11111V3.55556H8.88889V5.33333Z"
                        fill="#A2A2A2"
                      ></path>
                    </svg>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <a href="#table" class="plan-compare">
					<p>Compare features</p>
					<img src="assets/next.png" alt="" />
				</a>
      </div>
    </section>
  );
};

export default PlanSection;
