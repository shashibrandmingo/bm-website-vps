import React, { useState } from "react";

const serviceImages = {
  lead: "https://res.cloudinary.com/dqqgpii8v/image/upload/v1788609700/BM_WEBSITE_IMAGES_1_auqsbv.png",
  ecommerce:
    "https://res.cloudinary.com/dqqgpii8v/image/upload/v1788609700/BM_WEBSITE_IMAGES_1_auqsbv.png",
  google:
    "https://res.cloudinary.com/dqqgpii8v/image/upload/v1788609700/BM_WEBSITE_IMAGES_1_auqsbv.png",
  meta: "https://res.cloudinary.com/dqqgpii8v/image/upload/v1788609700/BM_WEBSITE_IMAGES_1_auqsbv.png",
  retargeting:
    "https://res.cloudinary.com/dqqgpii8v/image/upload/v1788609700/BM_WEBSITE_IMAGES_1_auqsbv.png",
  funnel:
    "https://res.cloudinary.com/dqqgpii8v/image/upload/v1788609700/BM_WEBSITE_IMAGES_1_auqsbv.png",
  analytics:
    "https://res.cloudinary.com/dqqgpii8v/image/upload/v1788609700/BM_WEBSITE_IMAGES_1_auqsbv.png",
  scaling:
    "https://res.cloudinary.com/dqqgpii8v/image/upload/v1788609700/BM_WEBSITE_IMAGES_1_auqsbv.png",
};

const servicesData = [
  {
    id: "lead",
    title: "AI Lead Generation",
    desc: "Generate qualified leads with AI-powered advertising designed to connect your brand with high-intent audiences. Our strategies focus on relevant conversations, customer intent, and conversion opportunities that drive meaningful business growth.",
  },

  {
    id: "ecommerce",
    title: "AI-Powered Advertising",
    desc: "Reach customers through AI-powered advertising experiences built around their needs and interests. We create relevant campaigns that improve brand visibility, engage potential customers, and turn AI-driven discovery into valuable opportunities.",
  },

  {
    id: "google",
    title: "OpenAI Ads Management",
    desc: "Manage and optimize OpenAI Ads campaigns with strategies focused on audience relevance, brand visibility, and measurable results. From campaign setup to performance optimization, we help your brand grow in the AI advertising space.",
  },

  {
    id: "meta",
    title: "Conversational Advertising",
    desc: "Connect with customers through relevant AI-powered conversations that align with their questions, interests, and needs. We create advertising strategies designed to build brand relevance and influence customer consideration.",
  },

  {
    id: "retargeting",
    title: "AI Retargeting Campaigns",
    desc: "Reconnect with audiences who have already interacted with your brand through intelligent retargeting strategies. We use customer intent and engagement signals to bring valuable prospects back and improve conversion opportunities.",
  },

  {
    id: "funnel",
    title: "Audience Intent Optimization",
    desc: "Understand customer intent and optimize your advertising strategy around what audiences are actively looking for. We align messaging, targeting, and customer journeys to create more relevant experiences and stronger conversions.",
  },

  {
    id: "analytics",
    title: "Analytics & Tracking Setup",
    desc: "Measure campaign engagement, audience interactions, and conversions with reliable analytics and tracking systems. We turn performance data into actionable insights that help improve campaigns and support smarter growth decisions.",
  },

  {
    id: "scaling",
    title: "Campaign Scaling & Optimization",
    desc: "Scale successful OpenAI Ads campaigns with continuous optimization and data-driven strategies. We identify what works, improve campaign performance, expand audience reach, and build a stronger foundation for long-term growth.",
  },
];

const OpenaiAdsModernDigital = () => {
  const [activeTab, setActiveTab] = useState(servicesData[0]);
  const [animKey, setAnimKey] = useState(0);
  const [openAccordion, setOpenAccordion] = useState(servicesData[0].id);

  const handleTabClick = (service) => {
    setActiveTab(service);
    setAnimKey((k) => k + 1);
  };

  const toggleAccordion = (id) => {
    setOpenAccordion((prev) => (prev === id ? null : id));
  };

  return (
    <div className="ret-section">
      <div className="auto-container">
        {/* Heading — h3 tag, style.css vars apply automatically */}
        <h3 className="ret-heading text-center mb-5">
          OpenAI Ads Solutions for Business Growth
          {/* <br /> Modern Digital Businesses */}
        </h3>

        {/* ── DESKTOP ── */}
        <div className="ret-grid ret-desktop-only">
          {/* Left: tab buttons */}
          <div className="ret-tabs">
            {servicesData.map((service) => (
              <button
                key={service.id}
                className={`ret-tab-btn ${activeTab.id === service.id ? "active" : ""}`}
                onClick={() => handleTabClick(service)}
              >
                <span className="ret-tab-label">{service.title}</span>
                <span className="ret-arrow">
                  <i className="fas fa-arrow-right" />
                </span>
              </button>
            ))}
          </div>

          {/* Right: content panel */}
          <div className="ret-content" key={animKey}>
            <h4 className="ret-content-title">{activeTab.title}</h4>
            <div className="ret-content-body">
              <p className="ret-content-desc">{activeTab.desc}</p>
              <div className="ret-image-wrap">
                <div className="ret-image-badge">
                  <i className="fas fa-code" />
                </div>
                <div className="ret-image-inner">
                  <img
                    src={serviceImages[activeTab.id]}
                    alt={activeTab.title}
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── MOBILE accordion ── */}
        <div className="ret-mobile-only">
          {servicesData.map((service) => {
            const isOpen = openAccordion === service.id;
            return (
              <div
                key={service.id}
                className={`ret-mob-item ${isOpen ? "open" : ""}`}
              >
                <button
                  className="ret-mob-header"
                  onClick={() => toggleAccordion(service.id)}
                >
                  <span className="ret-mob-title">{service.title}</span>
                  <span className="ret-mob-icon">
                    <i className={`fas fa-chevron-${isOpen ? "up" : "down"}`} />
                  </span>
                </button>

                {isOpen && (
                  <div className="ret-mob-body">
                    <p className="ret-mob-desc">{service.desc}</p>
                    <div className="ret-mob-img-wrap">
                      <img
                        src={serviceImages[service.id]}
                        alt={service.title}
                        loading="lazy"
                      />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OpenaiAdsModernDigital;
