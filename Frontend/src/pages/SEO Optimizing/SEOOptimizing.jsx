import React from "react";
import SEOHero from "./SEOOptimizingComponent/SEOHero";
import SEOAbout from "./SEOOptimizingComponent/SEOAbout";
import SEOSections from "./SEOOptimizingComponent/SEOSections";
import SEOExtra from "./SEOOptimizingComponent/SEOExtra";
import SEO from "../../components/SEO/SEO";

const SEOOptimizing = () => {
  return (
    <div className="page-wrapper">
      <SEO
        title="Best SEO Company in Noida & Delhi NCR | Brandmingo"
        description="Rank #1 on Google with Brandmingo, the leading SEO agency in Noida Sector 62. We deliver data-driven on-page SEO, Google Maps Local 3-Pack rankings, and high-authority link building."
        canonical="https://brandmingo.com/seo-optimizing"
        keywords="SEO agency in Noida, best SEO company in Noida, local SEO services Noida, search engine optimization Delhi NCR, Brandmingo"
      />
      {/* HERO */}
      <SEOHero />

      {/* MAIN */}
      <section
        className="services-details pt-120 pb-120"
        style={{ marginTop: "40px", marginBottom: "120px" }}
      >
        <div className="service-details-page">
          <div className="container">
            <div className="wd-outer">
              <div className="wd-content-col">
                <div className="services-details__content">
                  {/* S1 */}
                  <SEOAbout />
                  <SEOSections />
                  <SEOExtra />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SEOOptimizing;
