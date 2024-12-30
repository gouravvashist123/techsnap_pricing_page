import React from "react";

const PricingTable = () => {
  const tableData = {
    headers: [
      { title: "Start learning", className: "section-title css-11pi3d3" },
      {
        title: "Basic",
        subtitle: "Free",
        className: "css-udv16e",
        button: {
          text: "Get Started",
          link: "/users/sign_up?from_pricing=true",
          className: "css-1leb99q",
          testId: "Basic-cta-button",
        },
      },
      {
        title: "Premium",
        subtitle: "$29 /month",
        className: "css-1x448vy",
        button: {
          text: "Subscribe Now",
          link: "/subscribe?from_pricing=true&pay_period=monthly&product=premium",
          className: "css-1f9hrc8",
          testId: "Premium-cta-button",
        },
      },
      {
        title: "Teams",
        subtitle: "$12.42 per user /month",
        className: "css-1avy2qp",
        button: {
          text: "Set Up a Team",
          link: "/groups/subscribe/account",
          className: "css-1leb99q",
          testId: "Teams-cta-button",
        },
      },
      {
        title: "Enterprise",
        subtitle: "Contact sales for pricing",
        className: "css-gn75rm",
        button: {
          text: "Request a Demo",
          link: "/business/demo",
          className: "css-1leb99q",
          testId: "Enterprise-cta-button",
        },
      },
    ],
    footers: [
      { title: "", className: "section-title css-11pi3d3" },
      {
        title: "Basic",
        subtitle: "Free",
        className: "css-udv16e",
        button: {
          text: "Get Started",
          link: "/users/sign_up?from_pricing=true",
          className: "css-1leb99q",
          testId: "Basic-cta-button",
        },
      },
      {
        title: "Premium",
        subtitle: "$29 /month",
        className: "css-1x448vy",
        button: {
          text: "Subscribe Now",
          link: "/subscribe?from_pricing=true&pay_period=monthly&product=premium",
          className: "css-1f9hrc8",
          testId: "Premium-cta-button",
        },
      },
      {
        title: "Teams",
        subtitle: "$12.42 per user /month",
        className: "css-1avy2qp",
        button: {
          text: "Set Up a Team",
          link: "/groups/subscribe/account",
          className: "css-1leb99q",
          testId: "Teams-cta-button",
        },
      },
      {
        title: "Enterprise",
        subtitle: "Contact sales for pricing",
        className: "css-gn75rm",
        button: {
          text: "Request a Demo",
          link: "/business/demo",
          className: "css-1leb99q",
          testId: "Enterprise-cta-button",
        },
      },
    ],
    rows: [
      {
        title: "First chapter of every course",
        classes:"css-11pi3d3",
        values: [
          { content: "Included", icon: true },
          { content: "Included", icon: true },
          { content: "Included", icon: true },
          { content: "Included", icon: true },
        ],
      },
      {
        title: "Access to the full course library (470+)",
        classes:"css-11pi3d3",
        values: [
          { content: "Not included" },
          { content: "Unlimited" },
          { content: "Unlimited" },
          { content: "Unlimited and bespoke" },
        ],
      },
      {
        title: "All cheat sheets",
        classes:"css-11pi3d3",
        values: [
          { content: "Included", icon: true },
          { content: "Included", icon: true },
          { content: "Included", icon: true },
          { content: "Included", icon: true },
        ],
      },
      {
        title: "All tutorials",
        classes:"css-11pi3d3",
        values: [
          { content: "Included", icon: true },
          { content: "Included", icon: true },
          { content: "Included", icon: true },
          { content: "Included", icon: true },
        ],
      },
      {
        title: "Personalized and adaptive learning paths",
        classes:"css-11pi3d3",
        values: [
          { content: "Not included" },
          { content: "Coming Soon" },
          { content: "Coming Soon" },
          { content: "Included", icon: true },
        ],
      },
      {
        title: "Learn on mobile",
        classes:"css-11pi3d3",
        values: [
          { content: "Included", icon: true },
          { content: "Unlimited" },
          { content: "Unlimited" },
          { content: "Unlimited" },
        ],
      },
      {
        title: "Demonstrate your skills",
        classes:"css-11pi3d3 section-title",
        values: [
          { content: "" },
          { content: "" },
          { content: "" },
          { content: "" },
        ],
      },
      {
        title: "Skill assessments to discover your level",
        classes:"css-11pi3d3 section-row-one css-lgbo0i",
        values: [
          { content: "Included", icon: true },
          { content: "Included", icon: true },
          { content: "Included", icon: true },
          { content: "Included", icon: true },
        ],
      },
      {
        title: "Earn certificates",
        classes:"css-11pi3d3",
        values: [
          { content: "Not included" },
          { content: "Included", icon: true },
          { content: "Included", icon: true },
          { content: "Included", icon: true },
        ],
      },
      {
        title: "Employment-ready programs",
        classes:"css-11pi3d3",
        values: [
          { content: "Not included" },
          { content: "Included", icon: true },
          { content: "Included", icon: true },
          { content: "Included", icon: true },
        ],
      },
      {
        title: "Get hired",
        classes:"css-11pi3d3 section-title section-divider css-lgbo0i",
        values: [
          { content: "" },
          { content: "" },
          { content: "" },
          { content: "" },
        ],
      },
      {
        title: "Create a professional profile",
        classes:"css-11pi3d3",
        values: [
          { content: "Included", icon: true },
          { content: "Included", icon: true },
          { content: "Not included" },
          { content: "Not included" },
        ],
      },
      {
        title: "Share your portfolio of analyses",
        classes:"css-11pi3d3",
        values: [
          { content: "Included", icon: true },
          { content: "Included", icon: true },
          { content: "Not included" },
          { content: "Not included" },
        ],
      },
      {
        title: "Apply to jobs listed on DataCamp",
        classes:"css-11pi3d3",
        values: [
          { content: "Included", icon: true },
          { content: "Included", icon: true },
          { content: "Not included" },
          { content: "Not included" },
        ],
      },
      {
        title: "Practice data analysis",
        classes:"css-11pi3d3 section-title",
        values: [
          { content: "" },
          { content: "" },
          { content: "" },
          { content: "" },
        ],
      },
      {
        title: "Live code-alongs",
        classes:"css-11pi3d3",
        values: [
          { content: "Included", icon: true },
          { content: "Included", icon: true },
          { content: "Included", icon: true },
          { content: "Included", icon: true },
        ],
      },
      {
        title: "Competitions",
        classes:"css-11pi3d3",
        values: [
          { content: "Included", icon: true },
          { content: "Included", icon: true },
          { content: "Included", icon: true },
          { content: "Unlimited and bespoke"},
        ],
      },
      {
        title: "Bite-size practice exercises",
        classes:"css-11pi3d3",
        values: [
          { content: "Limited" },
          { content: "Included", icon: true },
          { content: "Included", icon: true },
          { content: "Included", icon: true },
        ],
      },
      {
        title: "Step-by-step coding projects",
        classes:"css-11pi3d3",
        values: [
          { content: "Limited" },
          { content: "Unlimited" },
          { content: "Unlimited" },
          { content: "Unlimited" },
        ],
      },
      {
        title: "Be social",
        classes:"css-11pi3d3 section-title",
        values: [
          { content: "" },
          { content: "" },
          { content: "" },
          { content: "" },
        ],
      },
      {
        title: "Join our global Slack community",
        classes:"css-11pi3d3",
        values: [
          { content: "" },
          { content: "Included", icon: true },
          { content: "Included", icon: true },
          { content: "Included", icon: true },
        ],
      },
      {
        title: "Build and share your portfolio of analyses",
        classes:"css-11pi3d3",
        values: [
          { content: "Included", icon: true },
          { content: "Included", icon: true },
          { content: "Included", icon: true },
          { content: "Included", icon: true },
        ],
      },
      {
        title: "Get Help",
        classes:"css-11pi3d3 section-title",
        values: [
          { content: "" },
          { content: "" },
          { content: "" },
          { content: "" },
        ],
      },
      {
        title: "Priority Customer Support",
        classes:"css-11pi3d3",
        values: [
          { content: "Not included" },
          { content: "Included", icon: true },
          { content: "Included", icon: true },
          { content: "Included", icon: true },
        ],
      },
      {
        title: "Corporate learning features",
        classes:"css-11pi3d3 section-title",
        values: [
          { content: "" },
          { content: "" },
          { content: "" },
          { content: "" },
        ],
      },
      {
        title: "Admin dashboard",
        classes:"css-11pi3d3",
        values: [
          { content: "Not included" },
          { content: "Not included" },
          { content: "Included", icon: true },
          { content: "Included", icon: true },
        ],
      },
      {
        title: "License management",
        classes:"css-11pi3d3",
        values: [
          { content: "Not included" },
          { content: "Not included" },
          { content: "Included", icon: true },
          { content: "Included", icon: true },
        ],
      },
      {
        title: "Team performance reports",
        classes:"css-11pi3d3",
        values: [
          { content: "Not included" },
          { content: "Not included" },
          { content: "Included", icon: true },
          { content: "Included", icon: true },
        ],
      },
      {
        title: "Create your own custom tracks",
        classes:"css-11pi3d3",
        values: [
          { content: "Not included" },
          { content: "Not included" },
          { content: "Not included" },
          { content: "Included", icon: true },
        ],
      },
      {
        title: "Skill Matrix",
        classes:"css-11pi3d3",
        values: [
          { content: "Not included" },
          { content: "Not included" },
          { content: "Not included" },
          { content: "Included", icon: true },
        ],
      },
      {
        title: "Single Sign-On (SSO)",
        classes:"css-11pi3d3",
        values: [
          { content: "Not included" },
          { content: "Not included" },
          { content: "Not included" },
          { content: "Included", icon: true },
        ],
      },
      {
        title: "LMS/LXP integrations",
        classes:"css-11pi3d3",
        values: [
          { content: "Not included" },
          { content: "Not included" },
          { content: "Not included" },
          { content: "Included", icon: true },
        ],
      },
      {
        title: "Connect data sources",
        classes:"css-11pi3d3",
        values: [
          { content: "Not included" },
          { content: "Not included" },
          { content: "Not included" },
          { content: "Included", icon: true },
        ],
      },
      {
        title: "Customize reporting templates",
        classes:"css-11pi3d3",
        values: [
          { content: "Not included" },
          { content: "Not included" },
          { content: "Not included" },
          { content: "Included", icon: true },
        ],
      },
      {
        title: "Dedicated Customer Success Manager",
        classes:"css-11pi3d3",
        values: [
          { content: "Not included" },
          { content: "Not included" },
          { content: "Not included" },
          { content: "Speak to sales"},
        ],
      },
      {
        title: "Co-branded landing page",
        classes:"css-11pi3d3",
        values: [
          { content: "Not included" },
          { content: "Not included" },
          { content: "Not included" },
          { content: "Team of 20+"},
        ],
      },
      {
        title: "Hire data professionals",
        classes:"css-11pi3d3 section-title",
        values: [
          { content: "" },
          { content: "" },
          { content: "" },
          { content: "" },
        ],
      },
      {
        title: "Create a recruiter profile",
        classes:"css-11pi3d3",
        values: [
          { content: "Not included" },
          { content: "Not included" },
          { content: "Speak to sales" },
          { content: "Speak to sales" },
        ],
      },
      {
        title: "List your jobs",
        classes:"css-11pi3d3",
        values: [
          { content: "Not included" },
          { content: "Not included" },
          { content: "Speak to sales" },
          { content: "Speak to sales" },
        ],
      },
      {
        title: "Recruit from our pool of professionals",
        classes:"css-11pi3d3",
        values: [
          { content: "Not included" },
          { content: "Not included" },
          { content: "Speak to sales" },
          { content: "Speak to sales" },
        ],
      },
      {
        title: "Plans",
        classes:"css-11pi3d3 section-title",
        values: [
          { content: "" },
          { content: "" },
          { content: "" },
          { content: "" },
        ],
      },

    ],
  };

  return (
    <section className="table">
      <div id="table" className="table-container">
        <table cellPadding="0" cellSpacing="0" className="price-table">
          <thead className="table-heading">
            <tr>
              {tableData.headers.map((header, index) => (
                <th key={index} className={header.className}>
                  <div>
                    {header.title}
                    {header.subtitle && (
                      <strong className="css-1psl0n2">{header.subtitle}</strong>
                    )}
                  </div>
                  {header.button && (
                    <div className="css-1jal2oa">
                      <a
                        href={header.button.link}
                        className={header.button.className}
                        data-testid={header.button.testId}
                      >
                        <span className="css-61bni1">{header.button.text}</span>
                      </a>
                    </div>
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableData.rows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {/* <td className="css-11pi3d3">{row.title}</td> */}
                <td className={row.classes}>{row.title}</td>
                {row.values.map((value, valueIndex) => (
                  <td key={valueIndex} className="css-11pi3d3">
                    <span className="css-tk5bo6">{value.content}</span>
                    {value.icon && (
                      <svg
                        viewBox="0 0 18 18"
                        aria-hidden="true"
                        height="24"
                        role="img"
                        width="24"
                      >
                        <title>Checkmark</title>
                        <path
                          fill="currentColor"
                          d="M13.746 4.337a1.015 1.015 0 011.409-.099c.417.354.462.97.101 1.378l-7.13 8.047a1.015 1.015 0 01-1.483.03L2.771 9.67a.961.961 0 01.044-1.38 1.015 1.015 0 011.412.041l3.113 3.235 6.406-7.229z"
                          fillRule="evenodd"
                        ></path>
                      </svg>
                    )}
                    
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
          <tfoot className="table-heading">
            <tr>
              {tableData.footers.map((footer, index) => (
                <th key={index} className={footer.className}>
                  <div>
                    {footer.title}
                    {footer.subtitle && (
                      <strong className="css-1psl0n2">{footer.subtitle}</strong>
                    )}
                  </div>
                  {footer.button && (
                    <div className="css-1jal2oa">
                      <a
                        href={footer.button.link}
                        className={footer.button.className}
                        data-testid={footer.button.testId}
                      >
                        <span className="css-61bni1">{footer.button.text}</span>
                      </a>
                    </div>
                  )}
                </th>
              ))}
            </tr>
          </tfoot>
        </table>
      </div>

      <div aria-hidden="true" class="ie-vsWrapper css-1ho3t5z">
				<svg
					height="164"
					width="110"
					xmlns="http://www.w3.org/2000/svg"
					aria-hidden="true"
					class="css-10s5lfq">
					<g fill="none" fill-rule="evenodd" transform="rotate(90 55 55)">
						<circle
							class="broome_svg__c1"
							cx="109.03"
							cy="54.59"
							fill="#974dff"
							r="54.59"></circle>
						<circle
							class="broome_svg__c2"
							cx="54.59"
							cy="54.59"
							fill="#ff6ea9"
							r="54.59"></circle>
						<path
							class="broome_svg__p1"
							d="M81.81 7.26a54.59 54.59 0 0 1 0 94.67 54.57 54.57 0 0 1-27.38-47.34A54.57 54.57 0 0 1 81.71 7.31z"
							fill="#05172c"></path>
					</g>
				</svg>
			</div>
    </section>
  );
};

export default PricingTable;

