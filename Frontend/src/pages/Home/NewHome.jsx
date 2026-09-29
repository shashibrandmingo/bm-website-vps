import React from "react";
import MarqueeSection from "../../components/MarqueeSection/MarqueeSection";
import WorkProcess from "../../components/WorkProcess/WorkProcess";
import VideoSection from "../../components/VideoSection/VideoSection";
import TestimonialHome from "../../components/Testimonial/TestimonialHome";
import FaqSection from "../../components/FaqSection/FaqSection";
import BrandSection from "../../components/BrandSection/BrandSection";
import ClientForm from "../../components/contactfrom/ClientForm";
import AboutUsHome from "../../components/AboutSection/AboutUsHome";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";
import ServicesSectionHome from "../../components/ServicesSection/ServicesSectionHome";
import Client from "../../components/Testimonial/Client";
import ProjectSection from "../../components/ProjectSection/ProjectSection";
import BlogHome from "../../components/BlogHome/BlogHome";
import HeroTwo from "../../components/Hero/HeroTwo";
import SEO from "../../components/SEO/SEO";

const NewHome = ({ openPopup }) => {
  return (
    <>
      <SEO
        title="Brandmingo | Digital Marketing, Branding & Web Development Company in India"
        description="Brandmingo provides 360° digital growth solutions: SEO, Google Ads, Meta Ads, high-performance website development, UI/UX, and modern SaaS products."
        canonical="https://brandmingo.com/"
        keywords="Brandmingo, digital marketing agency, SEO company India, web development company, branding agency"
      />
      <HeroTwo openPopup={openPopup} />
      <div className="marqueeSection">
        <MarqueeSection />
      </div>

      <div className="aboutUsHome">
        <AboutUsHome />
      </div>

      <WhyChooseUs />

      <div className="servicesSectionHome">
        <ServicesSectionHome />
      </div>

      <div className="project-Section-home">
        <ProjectSection />
      </div>

      <div className="workProcess-Section-home">
        <WorkProcess />
      </div>

      <VideoSection />

      <div className="client-home">
        <Client />
      </div>

      <div className="faqSection-home">
        <FaqSection />
      </div>

      <BrandSection />

      <TestimonialHome />

      <div className="newsSection-home">
        <BlogHome />
      </div>

      <div className="clientForm-home">
        <ClientForm />
      </div>
    </>
  );
};

export default NewHome;
