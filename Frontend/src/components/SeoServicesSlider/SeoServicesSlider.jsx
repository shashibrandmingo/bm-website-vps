import React from "react";
import { Link } from "react-router-dom";
import starIcon from "../../assets/images/icons/star1-1.svg";
import "./SeoServicesSlider.css";

/* ── Core SEO Services with Linear/Vercel Glass Chip Layout ── */
const SEO_SERVICES_CHIPS = [
  {
    whiteText: "Digital Marketing Company",
    accentText: "in Noida",
    fullTitle: "Digital Marketing Company in Noida",
    link: "/digital-marketing-company-in-noida",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    whiteText: "Website Development Company",
    accentText: "in Noida",
    fullTitle: "Website Development Company in Noida",
    link: "/web-development",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    whiteText: "Google Ads & Meta Ads Agency",
    accentText: "in Noida",
    fullTitle: "Google Ads & Meta Ads Agency in Noida",
    link: "/ads-and-campaigns",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 5L6 9H2v6h4l5 4V5z" />
        <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
      </svg>
    ),
  },
  {
    whiteText: "Social Media Marketing Agency",
    accentText: "in Noida",
    fullTitle: "Social Media Marketing Agency in Noida",
    link: "/social-media-management",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="18" cy="5" r="3" />
        <circle cx="6" cy="12" r="3" />
        <circle cx="18" cy="19" r="3" />
        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
      </svg>
    ),
  },
  {
    whiteText: "UI/UX Design & Website Audit",
    accentText: "Services",
    fullTitle: "UI/UX Design & Website Audit Services",
    link: "/ui-ux-audits",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="4" />
        <line x1="3" y1="12" x2="21" y2="12" />
        <circle cx="3" cy="12" r="1.8" fill="currentColor" />
        <circle cx="21" cy="12" r="1.8" fill="currentColor" />
        <path d="M12 3v5" />
        <path d="M12 16v5" />
      </svg>
    ),
  },
  {
    whiteText: "SEO Company in Noida for Higher",
    accentText: "Google Rankings",
    fullTitle: "SEO Company in Noida for Higher Google Rankings",
    link: "/seo-optimizing",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
  {
    whiteText: "E-Commerce & Shopify Store",
    accentText: "Management Services",
    fullTitle: "E-Commerce & Shopify Store Management Services",
    link: "/ecommerce-management",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <path d="M16 10a4 4 0 0 1-8 0" />
      </svg>
    ),
  },
  {
    whiteText: "Graphic Design & Branding Agency",
    accentText: "in Noida",
    fullTitle: "Graphic Design & Branding Agency in Noida",
    link: "/graphic-designing",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="6" />
        <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
      </svg>
    ),
  },
];

const SeoServicesSlider = () => {
  return (
    <section
      className="seo-chips-section"
      aria-label="Core SEO and Digital Solutions in Noida"
    >
      {/* Glass Chips Marquee Viewport with Edge Gradient Fade Mask */}
      <div className="seo-chips-viewport">
        <div className="seo-chips-track">
          {/* Multiple duplicated groups for smooth infinite scrolling */}
          {[...Array(4)].map((_, groupIdx) => (
            <div
              className="seo-chips-group"
              key={groupIdx}
              aria-hidden={groupIdx > 0 ? "true" : "false"}
            >
              {SEO_SERVICES_CHIPS.map((service, index) => (
                <React.Fragment key={index}>
                  <Link
                    to={service.link}
                    className="seo-glass-chip"
                    title={service.fullTitle}
                  >
                    {/* Glowing Micro Icon Bubble */}
                    <span className="seo-chip-icon-disc" aria-hidden="true">
                      {service.icon}
                    </span>

                    {/* Chip Text with Accent Keyword */}
                    <span className="seo-chip-text">
                      <span className="seo-chip-white">{service.whiteText}</span>{" "}
                      <span className="seo-chip-accent">{service.accentText}</span>
                    </span>

                    {/* Linear/Vercel Style Top-Right Arrow */}
                    <span className="seo-chip-arrow" aria-hidden="true">
                      <svg
                        width="13"
                        height="13"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="7" y1="17" x2="17" y2="7" />
                        <polyline points="7 7 17 7 17 17" />
                      </svg>
                    </span>
                  </Link>

                  {/* Brandmingo Orange Star Separator */}
                  <img src={starIcon} alt="SEO Services Star Icon" className="seo-chip-star" aria-hidden="true" loading="lazy" decoding="async" />
                </React.Fragment>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SeoServicesSlider;
