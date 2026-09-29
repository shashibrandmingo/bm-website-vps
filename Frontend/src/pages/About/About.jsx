import React from "react";
import SEO from "../../components/SEO/SEO";
// import AboutAwardSection from "../../components/AboutAwardSection/AboutAwardSection";
import AboutHero from "../../components/AboutpagesHero/AboutHero";
import AboutStats from "../../components/AboutStats/AboutStats";
import AboutMission from "../../components/AboutMission/AboutMission";
import AboutProcess from "../../components/AboutProcess/AboutProcess";
import AboutTeam from "../../components/AboutTeam/AboutTeam";
import Founders from "../../components/Founders/Founders";

const About = ({ openPopup }) => {
  return (
    <>
      <SEO
        title="About Us | Brandmingo — 360° Digital Marketing & Tech Solutions"
        description="Learn about Brandmingo, our mission, vision, and how our experienced team of developers, marketers, and designers scale modern businesses."
        canonical="https://brandmingo.com/about-us"
        keywords="About Brandmingo, digital marketing team India, branding agency vision, web developers"
      />
      {/* <AboutPageHero /> */}
      <AboutHero />
      <div className="about-stats-wrap">
        <AboutStats />
      </div>

      <div className="about-mission">
        <AboutMission />
      </div>

      <div className="about-process">
        <AboutProcess />
      </div>

      {/* <div className="about-awardSection">
        <AboutAwardSection />
      </div> */}

      <div className="about-founders">
        <Founders />
      </div>

      <div className="about-team">
        <AboutTeam openPopup={openPopup} />
      </div>
    </>
  );
};

export default About;
