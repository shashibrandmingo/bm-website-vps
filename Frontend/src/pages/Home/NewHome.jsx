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
        title="Brandmingo | Best Website Development & Digital Marketing Company in Noida Sector 62"
        description="Brandmingo is Noida's premier website development & digital marketing agency located at ITHUM Tower, Sector 62. Custom high-speed websites, React web apps, Google/Meta Ads, and #1 Google ranking SEO for businesses in Noida, Delhi NCR, and worldwide."
        canonical="https://brandmingo.com/"
        keywords="best website development agency in noida, website development company in noida, digital marketing agency in noida, seo agency in noida, web developers in noida sector 62, website designing company in noida, web development company in noida sector 63, best web designers in delhi ncr, it companies in noida sector 62, website designers near me, custom web development noida, react js development company noida, google ads agency noida, performance marketing agency noida, Brandmingo, hire remote developers noida"
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
