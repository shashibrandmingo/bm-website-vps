import React, { lazy, Suspense } from "react";
import HeroTwo from "../../components/Hero/HeroTwo";
import MarqueeSection from "../../components/MarqueeSection/MarqueeSection";
import AboutUsHome from "../../components/AboutSection/AboutUsHome";
import SEO from "../../components/SEO/SEO";

// Below-the-fold sections loaded asynchronously to ensure instant initial render (<0.1s)
const WhyChooseUs = lazy(() => import("../../components/WhyChooseUs/WhyChooseUs"));
const ServicesSectionHome = lazy(() => import("../../components/ServicesSection/ServicesSectionHome"));
const ProjectSection = lazy(() => import("../../components/ProjectSection/ProjectSection"));
const WorkProcess = lazy(() => import("../../components/WorkProcess/WorkProcess"));
const VideoSection = lazy(() => import("../../components/VideoSection/VideoSection"));
const Client = lazy(() => import("../../components/Testimonial/Client"));
const FaqSection = lazy(() => import("../../components/FaqSection/FaqSection"));
const BrandSection = lazy(() => import("../../components/BrandSection/BrandSection"));
const TestimonialHome = lazy(() => import("../../components/Testimonial/TestimonialHome"));
const BlogHome = lazy(() => import("../../components/BlogHome/BlogHome"));
const ClientForm = lazy(() => import("../../components/contactfrom/ClientForm"));

const SectionFallback = () => <div style={{ minHeight: "100px" }} />;

const NewHome = ({ openPopup }) => {
  return (
    <>
      <SEO
        title="Brandmingo | Best Web Development & Digital Marketing Agency | Noida & Worldwide"
        description="Brandmingo is a premier web development and digital marketing agency based in Noida Sector 62, delivering custom high-speed websites, React apps, Meta/Google Ads, and SEO for clients across Delhi NCR, USA, UK, UAE, and Worldwide."
        canonical="https://brandmingo.com/"
        keywords="best website development agency in noida, website development company in noida, digital marketing agency in noida, SEO agency Noida, web developers noida sector 62, Brandmingo, global web development agency, hire remote developers, offshore software development, performance marketing worldwide"
      />
      {/* ── Above the fold: Instant Mount ── */}
      <HeroTwo openPopup={openPopup} />
      <div className="marqueeSection">
        <MarqueeSection />
      </div>

      <div className="aboutUsHome">
        <AboutUsHome />
      </div>

      {/* ── Below the fold: Lazy loaded in background without blocking paint ── */}
      <Suspense fallback={<SectionFallback />}>
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
      </Suspense>
    </>
  );
};

export default NewHome;
