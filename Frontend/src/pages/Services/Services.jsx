import ServiceDetails from "../../components/ServicePage/ServiceDetails";
import ServicePageHero from "../../components/ServicePage/ServicePageHero";
import ServiceSectionCard from "../../components/ServicePage/ServiceSectionCard";
import SEO from "../../components/SEO/SEO";

const About = () => {
  return (
    <>
      <SEO
        title="Our Services | Web Development, SEO, Ads & Branding | Brandmingo"
        description="Comprehensive digital solutions by Brandmingo: Full-stack web development, SEO optimization, Meta & Google Ads, UI/UX design, and eCommerce management."
        canonical="https://brandmingo.com/services"
        keywords="Brandmingo services, web development, SEO, performance marketing, social media management, India"
      />
      <ServicePageHero/>
      <ServiceSectionCard/>
      {/* <ServiceDetails/> */}
    </>
  );
};

export default About;