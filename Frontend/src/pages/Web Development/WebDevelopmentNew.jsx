import React from "react";
import WebDevelopmentHero from "../Web Development/webDevComponent/WebDevelopmentHero";
import WebDevAbout from "./webDevComponent/WebDevAbout";
import WebDevServices from "./webDevComponent/WebDevSections";
import WebDevExtra from "./webDevComponent/WebDevExtra";
import SEO from "../../components/SEO/SEO";

const WebDevelopmentNew = ({ openPopup }) => {
  return (
    <div className="page-wrapper">
      <SEO
        title="Best Website Development Agency in Noida & Delhi NCR | Brandmingo"
        description="Looking for the best website development company in Noida? Brandmingo delivers high-speed custom websites, React apps, WordPress, Shopify, and enterprise SaaS solutions at Sector 62, Noida."
        canonical="https://brandmingo.com/web-development"
        keywords="best website development agency in noida, website development company in noida, web developers noida sector 62, custom web design delhi ncr, Brandmingo"
      />
      {/* HERO */}
      <WebDevelopmentHero openPopup={openPopup} />

      {/* MAIN */}
      <section
        className="services-details pt-120 pb-120"
        // style={{ marginTop: "-40px", marginBottom: "10px" }}
      >
        <div className="service-details-page">
          <div className="container">
            <div className="wd-outer">
              <div className="wd-content-col">
                <div className="services-details__content">
                  {/* S1 */}
                  <WebDevAbout />
                  <div className="WebDev-Services-spacing">
                    <WebDevServices openPopup={openPopup} />
                  </div>

                  <div className="WebDev-Extra-spacing">
                    <WebDevExtra />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebDevelopmentNew;
