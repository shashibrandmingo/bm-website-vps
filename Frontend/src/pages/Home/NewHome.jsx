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
        title="Brandmingo | Digital Marketing, Branding & Web Development Company in India"
        description="Brandmingo provides 360° digital growth solutions: SEO, Google Ads, Meta Ads, high-performance website development, UI/UX, and modern SaaS products."
        canonical="https://brandmingo.com/"
        keywords="Brandmingo, digital marketing agency, SEO company India, web development company, branding agency"
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
