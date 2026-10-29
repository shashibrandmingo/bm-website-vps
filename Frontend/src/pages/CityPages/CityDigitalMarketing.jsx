import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import SEO from "../../components/SEO/SEO";
import { openEnquiryPopup } from "../../utils/popup";
import "./CityDigitalMarketing.css";

const CITY_CONFIG = {
  noida: {
    cityKey: "noida",
    cityName: "Noida",
    badge: "Headquartered in Sector 62 Noida • ITHUM Tower",
    slug: "digital-marketing-company-in-noida",
    metaTitle: "Best Digital Marketing Company in Noida Sector 62 | Brandmingo",
    metaDesc: "Top digital marketing company in Noida Sector 62. Rank #1 on Google with high-authority SEO, 5.4x ROAS Meta/Google Ads, web development & branding. Call +91-9990613140.",
    keywords: "digital marketing company in noida, digital marketing agency in noida, digital marketing company in noida sector 62, best digital marketing agency in noida, digital marketing agency in noida sector 62, seo company in noida, website development company in noida, performance marketing agency noida",
    h1Title: "Best Digital Marketing Company in Noida Sector 62",
    h1Sub: "Dominate search rankings, drive millions in revenue, and outpace your competitors with Brandmingo — Noida's premier ROI-driven digital marketing agency located at ITHUM Tower, Sector 62.",
    areas: [
      { name: "Sector 62, Noida", desc: "Our corporate headquarters at ITHUM Tower, Block A. Serving IT parks, startups, and institutions." },
      { name: "Sector 63, Noida", desc: "Complete digital growth and eCommerce account management for industrial units and manufacturers." },
      { name: "Sector 18 & Film City", desc: "Performance marketing, branding, and lead generation for commercial enterprises and agencies." },
      { name: "Noida Expressway (Sec 132-142)", desc: "Corporate website development and enterprise SEO for tech MNCs and real estate leaders." },
      { name: "Greater Noida & Pari Chowk", desc: "Local 3-Pack SEO dominance and localized Google/Meta ads for educational institutes and B2B." },
      { name: "Delhi NCR Coverage", desc: "Unified digital strategy reaching 30M+ potential consumers across the entire capital region." },
    ],
    faqs: [
      {
        q: "Why is Brandmingo the best digital marketing company in Noida Sector 62?",
        a: "Brandmingo combines technical depth with performance marketing. Located right at ITHUM Tower, Sector 62, Noida, our in-house team of certified Google & Meta specialists, full-stack React developers, and SEO strategists deliver end-to-end growth with transparent weekly ROI tracking and proven #1 Google rankings.",
      },
      {
        q: "How long does it take to rank on Google's first page for Noida keywords?",
        a: "For high-intent local queries such as 'in Noida' or 'Noida Sector 62', our clients typically see initial 1st-page rankings within 45 to 90 days using our Local Map 3-Pack optimization, high-authority backlink building, and technical SEO schema injection.",
      },
      {
        q: "Can we visit your office in Noida Sector 62 for an in-person meeting?",
        a: "Yes! You are always welcome to meet our technical leads, SEO specialists, and creative directors at B-806, 8th Floor, ITHUM Tower, Block A, Industrial Area, Sector 62, Noida, UP 201309. Call or WhatsApp +91-9990613140 to schedule a consultation.",
      },
      {
        q: "What digital marketing services do you provide in Noida?",
        a: "We provide comprehensive 360-degree digital solutions: Search Engine Optimization (SEO), Google Search & Shopping Ads (PPC), Meta Ads (Facebook & Instagram), Social Media Marketing (SMM), High-Speed Website & Web App Development (React, WordPress, Shopify), eCommerce Marketplace Management (Amazon, Flipkart), and Corporate Branding.",
      },
      {
        q: "How do you track and report campaign ROI for businesses in Noida?",
        a: "We implement advanced server-side tracking, Google Tag Manager, Google Analytics 4 (GA4), and custom Looker Studio dashboards. Clients receive live transparent reporting tracking every rupee spent, cost per lead (CPL), and customer acquisition cost (CAC).",
      },
    ],
  },
  "delhi-ncr": {
    cityKey: "delhi-ncr",
    cityName: "Delhi NCR",
    badge: "Enterprise Digital Marketing Agency • Delhi NCR",
    slug: "digital-marketing-agency-in-delhi-ncr",
    metaTitle: "Best Digital Marketing Agency in Delhi NCR | Top SEO & Ads Company",
    metaDesc: "Scale your revenue across Delhi NCR with Brandmingo. Proven #1 Google rankings, high-converting Google/Meta Ads, website development & branding solutions.",
    keywords: "digital marketing agency in delhi ncr, digital marketing company in delhi, best digital marketing firm delhi, seo company delhi ncr, web development agency delhi, performance marketing delhi",
    h1Title: "Leading Digital Marketing Agency in Delhi NCR",
    h1Sub: "Empower your brand with data-backed search engine optimization, high-converting paid ad funnels, and enterprise web solutions built for ambitious Delhi NCR businesses.",
    areas: [
      { name: "South Delhi & Okhla", desc: "Corporate growth, performance marketing, and creative branding for upscale brands and agencies." },
      { name: "Connaught Place & Central Delhi", desc: "B2B lead generation, LinkedIn advertising, and executive corporate web portals." },
      { name: "North & West Delhi (Pitampura/NSP)", desc: "eCommerce growth, retail brand marketing, and high-volume lead capture funnels." },
      { name: "East Delhi & Laxmi Nagar", desc: "Local business SEO, Google Maps visibility, and affordable paid marketing setups." },
      { name: "Noida & Greater Noida", desc: "Seamless cross-border campaign synchronization managed from our Noida Sector 62 tech hub." },
      { name: "Gurugram & Cyber City", desc: "SaaS growth engineering, enterprise SEO audits, and hyper-targeted LinkedIn PPC campaigns." },
    ],
    faqs: [
      {
        q: "What makes Brandmingo a preferred digital marketing agency for Delhi NCR brands?",
        a: "We deliver full-funnel digital acceleration with direct accountability. We have successfully managed multi-crore ad campaigns across Google, Meta, and marketplaces, delivering an average 5.4x ROAS for enterprises throughout the Delhi National Capital Region.",
      },
      {
        q: "Do you offer localized SEO across multiple cities in Delhi NCR?",
        a: "Yes. We create multi-location schema architectures, localized citations, and regional landing pages that enable your business to rank on the first page across Delhi, Noida, Gurgaon, Faridabad, and Ghaziabad simultaneously.",
      },
      {
        q: "How does Brandmingo compare to freelance marketers or conventional agencies in Delhi?",
        a: "Unlike freelancers or traditional PR shops, Brandmingo is a complete engineering and growth studio with in-house UI/UX designers, React/Next.js developers, dedicated ad buyers, and technical SEO auditors.",
      },
    ],
  },
  gurgaon: {
    cityKey: "gurgaon",
    cityName: "Gurgaon (Gurugram)",
    badge: "Tech-Driven Growth Marketing • Gurgaon / Cyber City",
    slug: "digital-marketing-company-in-gurgaon",
    metaTitle: "Top Digital Marketing Company in Gurgaon (Gurugram) | Brandmingo",
    metaDesc: "Premier digital marketing and SEO company in Gurgaon. Scale with high-ROAS Google Ads, LinkedIn B2B funnels, React web development, and #1 Google rankings.",
    keywords: "digital marketing company in gurgaon, digital marketing agency in gurugram, seo agency gurgaon, b2b marketing company gurgaon, website development gurgaon, cyber city marketing agency",
    h1Title: "Top Digital Marketing Company in Gurgaon (Gurugram)",
    h1Sub: "Fuel your enterprise and startup growth with cutting-edge performance marketing, B2B lead generation, and technical SEO designed for Gurgaon's competitive ecosystem.",
    areas: [
      { name: "DLF Cyber City & Cyber Hub", desc: "SaaS customer acquisition, B2B LinkedIn campaigns, and corporate branding." },
      { name: "Golf Course Road & Extension", desc: "High-ticket real estate lead gen, luxury branding, and high-speed web apps." },
      { name: "Sohna Road & Subhash Chowk", desc: "Local retail acceleration, ecommerce Shopify setups, and Google Ads management." },
      { name: "Udyog Vihar Industrial Area", desc: "B2B manufacturing exports marketing, international SEO, and CRM automations." },
      { name: "MG Road & Sector 29", desc: "Hospitality, retail footfall marketing, and viral social media branding." },
      { name: "Manesar IMT", desc: "Industrial B2B catalogs, Google Search ads, and enterprise lead capture systems." },
    ],
    faqs: [
      {
        q: "Why should Gurgaon startups choose Brandmingo for digital marketing?",
        a: "We engineer lean, high-velocity customer acquisition engines. From validating search intent to scaling Google & LinkedIn ad campaigns, our team ensures your burn rate translates directly into qualified demo bookings and paying customers.",
      },
      {
        q: "Do you handle B2B performance marketing for Gurgaon companies?",
        a: "Yes! We specialize in B2B lead funnels across LinkedIn Ads, Google Search, Account-Based Marketing (ABM), and high-intent organic search ranking.",
      },
    ],
  },
  "greater-noida": {
    cityKey: "greater-noida",
    cityName: "Greater Noida",
    badge: "Regional SEO & Paid Advertising • Greater Noida",
    slug: "digital-marketing-company-in-greater-noida",
    metaTitle: "Best Digital Marketing Company in Greater Noida | Brandmingo",
    metaDesc: "Leading digital marketing company in Greater Noida. Local SEO, Google Map ranking, website design, and social media advertising for institutions & businesses.",
    keywords: "digital marketing company in greater noida, seo services greater noida, website design greater noida, pari chowk marketing agency, digital marketing agency greater noida",
    h1Title: "Best Digital Marketing Company in Greater Noida",
    h1Sub: "Establish total search dominance and drive qualified local customer inquiries with Brandmingo's hyper-localized digital marketing strategies in Greater Noida.",
    areas: [
      { name: "Knowledge Park (I, II, III)", desc: "Student enrollment campaigns, higher-ed lead generation, and educational institution SEO." },
      { name: "Pari Chowk & Alpha/Beta", desc: "Retail commercial visibility, Google Maps 3-Pack rankings, and local Meta Ads." },
      { name: "Ecotech & Industrial Hubs", desc: "Manufacturer catalogs, export lead generation, and B2B corporate web portals." },
      { name: "Noida-Greater Noida Expressway", desc: "Real estate project launches, 3D landing pages, and hyper-targeted lead funnels." },
      { name: "Greater Noida West (Noida Extension)", desc: "Residential service business marketing, local SEO dominance, and community branding." },
    ],
    faqs: [
      {
        q: "What makes Brandmingo ideal for Greater Noida educational institutes & businesses?",
        a: "We have proven experience running student admission lead generation, local clinic marketing, and manufacturing export lead campaigns with unmatched cost-per-lead efficiencies.",
      },
    ],
  },
  ghaziabad: {
    cityKey: "ghaziabad",
    cityName: "Ghaziabad",
    badge: "Local Business Growth Agency • Ghaziabad & Indirapuram",
    slug: "digital-marketing-company-in-ghaziabad",
    metaTitle: "Top Digital Marketing Agency in Ghaziabad & Indirapuram | Brandmingo",
    metaDesc: "Accelerate your local business with Brandmingo Ghaziabad. Top Google ranking SEO, high-impact Meta ads, responsive websites, and local lead generation.",
    keywords: "digital marketing company in ghaziabad, digital marketing agency in indirapuram, seo agency ghaziabad, website designing ghaziabad, local seo ghaziabad",
    h1Title: "Top Digital Marketing Agency in Ghaziabad & Indirapuram",
    h1Sub: "Dominate local Google searches, attract nearby customers, and skyrocket your sales with customized digital marketing campaigns for businesses in Ghaziabad.",
    areas: [
      { name: "Indirapuram & Shipra Sun City", desc: "Healthcare, education, and retail local Google 3-Pack dominance and Instagram ads." },
      { name: "Vaishali & Vasundhara", desc: "Corporate service marketing, website redesigns, and lead generation campaigns." },
      { name: "Raj Nagar & Raj Nagar Extension", desc: "Real estate marketing, fitness centers, and multi-location business branding." },
      { name: "Loni & Mohan Nagar Industrial Area", desc: "Factory and manufacturing SEO, B2B directory placements, and Google Search Ads." },
      { name: "Crossings Republik", desc: "Neighborhood consumer marketing, local promotions, and high-converting landing pages." },
    ],
    faqs: [
      {
        q: "How can local businesses in Ghaziabad get more customer inquiries through Brandmingo?",
        a: "We optimize your Google Business Profile (GBP), build high-authority local citations, run targeted hyper-local Facebook and Instagram ads within a 10km radius, and build high-converting mobile websites.",
      },
    ],
  },
  faridabad: {
    cityKey: "faridabad",
    cityName: "Faridabad",
    badge: "Industrial & Commercial Digital Agency • Faridabad",
    slug: "digital-marketing-company-in-faridabad",
    metaTitle: "Best Digital Marketing Company in Faridabad | Brandmingo",
    metaDesc: "Scale your industrial & commercial business with Brandmingo Faridabad. High-performance SEO, Google Ads, website design, and B2B digital lead generation.",
    keywords: "digital marketing company in faridabad, seo services in faridabad, website development faridabad, b2b industrial marketing faridabad, digital marketing agency faridabad",
    h1Title: "Best Digital Marketing Company in Faridabad",
    h1Sub: "From industrial manufacturing giants to fast-growing local brands, we deliver data-driven digital marketing and #1 Google rankings across Faridabad.",
    areas: [
      { name: "NIT (New Industrial Township)", desc: "Manufacturing B2B lead generation, export catalogs, and search ads." },
      { name: "Sector 15 & Commercial Sectors", desc: "Retail marketing, corporate website development, and brand identity design." },
      { name: "Mathura Road Corridor", desc: "High-visibility Google Display ads, auto dealership campaigns, and lead funnels." },
      { name: "Ballabgarh & Greater Faridabad", desc: "Local SEO, Google Map rankings, and community-focused social media campaigns." },
    ],
    faqs: [
      {
        q: "Do you specialize in B2B manufacturing digital marketing in Faridabad?",
        a: "Yes! Faridabad is an industrial powerhouse. We help manufacturing units build modern product catalogs, rank on Google for high-intent supply keywords, and acquire domestic and international buyers.",
      },
    ],
  },
};

const CORE_SERVICES = [
  {
    icon: "fa-solid fa-magnifying-glass-chart",
    title: "Search Engine Optimization (SEO)",
    desc: "Achieve top Page 1 Google rankings with technical SEO audits, keyword clustering, and high-authority backlink building.",
    points: [
      "Local Google Map 3-Pack Ranking",
      "Technical Crawl & Speed Optimization",
      "High-Authority Backlink Acquisition",
      "Targeted Commercial Keyword Strategy",
    ],
    link: "/seo-optimizing",
  },
  {
    icon: "fa-solid fa-bullhorn",
    title: "Google & Meta Paid Advertising",
    desc: "Maximize ROAS with precision-targeted Google Search, Shopping, YouTube ads, and Meta (Facebook & Instagram) campaigns.",
    points: [
      "Search, Display & Performance Max Ads",
      "Meta Carousel & Reel Video Funnels",
      "Advanced Audience Retargeting",
      "Lowest Customer Acquisition Cost (CAC)",
    ],
    link: "/ads-and-campaigns",
  },
  {
    icon: "fa-solid fa-laptop-code",
    title: "High-Speed Website Development",
    desc: "Build lightning-fast, conversion-optimized React, WordPress, and Shopify websites engineered to convert traffic into leads.",
    points: [
      "Custom React & Next.js Architecture",
      "Mobile-First Responsive UX/UI",
      "Built-in Schema & SEO Structure",
      "Sub-Second Page Load Speeds (<0.8s)",
    ],
    link: "/web-development",
  },
  {
    icon: "fa-solid fa-share-nodes",
    title: "Social Media Marketing (SMM)",
    desc: "Cultivate an active community, viral brand awareness, and steady customer engagement across Instagram, LinkedIn, and YouTube.",
    points: [
      "Engaging Video & Carousel Production",
      "Strategic Influencer Collaborations",
      "B2B Thought Leadership on LinkedIn",
      "Active Daily Community Management",
    ],
    link: "/social-media-management",
  },
  {
    icon: "fa-solid fa-cart-shopping",
    title: "Ecommerce & Marketplace Growth",
    desc: "Scale monthly revenues on Shopify, Amazon, and Flipkart with catalog optimization, sponsored ads, and inventory tracking.",
    points: [
      "Amazon & Flipkart Listing Optimization",
      "A+ Content & High-Converting Images",
      "Marketplace PPC & Buy-Box Strategies",
      "Full Account Health Management",
    ],
    link: "/ecommerce-management",
  },
  {
    icon: "fa-solid fa-pen-nib",
    title: "Graphic Design & Brand Identity",
    desc: "Craft unforgettable brand identities, distinctive vector logos, corporate brochures, and packaging that command market respect.",
    points: [
      "Vector Logo & Full Brand Guidelines",
      "Product Packaging & Label Design",
      "Corporate Stationery & Collateral",
      "High-Converting Ad Creatives",
    ],
    link: "/graphic-designing",
  },
];

const WHY_CHOOSE = [
  {
    icon: "fa-solid fa-building-user",
    title: "Local Sector 62 Office (No Outsourcing)",
    desc: "Our entire multidisciplinary engineering, design, and marketing team sits under one roof at ITHUM Tower, Sector 62, Noida. Visit us anytime for in-person collaboration.",
  },
  {
    icon: "fa-solid fa-chart-line",
    title: "Data-Driven ROI Focus",
    desc: "We prioritize actual revenue and qualified customer leads over vanity metrics. Every campaign is laser-focused on lowering CAC and driving sustainable profitability.",
  },
  {
    icon: "fa-solid fa-award",
    title: "Certified Partner Specialists",
    desc: "Certified Google Partners, Meta Certified Media Buyers, and seasoned full-stack engineers manage your brand's growth using industry-leading methodologies.",
  },
  {
    icon: "fa-solid fa-file-invoice-dollar",
    title: "100% Transparent Weekly Reporting",
    desc: "Real-time access to live dashboards, automated weekly summaries, and bi-weekly strategic calls keep you in complete control of your marketing budget.",
  },
];

export default function CityDigitalMarketing({ forcedCity }) {
  const location = useLocation();
  const [openFaq, setOpenFaq] = useState(0);

  // Determine city from route or props
  let currentCityKey = forcedCity;
  if (!currentCityKey) {
    const path = location.pathname.toLowerCase();
    if (path.includes("delhi-ncr")) currentCityKey = "delhi-ncr";
    else if (path.includes("gurgaon")) currentCityKey = "gurgaon";
    else if (path.includes("greater-noida")) currentCityKey = "greater-noida";
    else if (path.includes("ghaziabad")) currentCityKey = "ghaziabad";
    else if (path.includes("faridabad")) currentCityKey = "faridabad";
    else currentCityKey = "noida";
  }

  const city = CITY_CONFIG[currentCityKey] || CITY_CONFIG.noida;
  const canonicalUrl = `https://brandmingo.com/${city.slug}`;

  // Comprehensive Schema for Local SEO
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": `${canonicalUrl}#localbusiness`,
        "name": `Brandmingo - Digital Marketing Company in ${city.cityName}`,
        "url": canonicalUrl,
        "logo": "https://brandmingo.com/brandmingo-fab-iocn.png",
        "image": "https://brandmingo.com/brandmingo-fab-iocn.png",
        "telephone": "+91-9990613140",
        "email": "hello@brandmingo.com",
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "B-806, 8th Floor, ITHUM Tower, Block A, Industrial Area, Sector 62",
          "addressLocality": "Noida",
          "addressRegion": "Uttar Pradesh",
          "postalCode": "201309",
          "addressCountry": "IN",
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 28.6280,
          "longitude": 77.3670,
        },
        "areaServed": [
          city.cityName,
          "Noida",
          "Delhi NCR",
          "Greater Noida",
          "Gurgaon",
          "Ghaziabad",
          "Faridabad",
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": `Digital Marketing Services in ${city.cityName}`,
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Search Engine Optimization (SEO)" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Google Ads & Meta Ads Management" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Website Development & React Web Apps" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Social Media Marketing" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Ecommerce Marketplace Management" } },
          ],
        },
      },
      {
        "@type": "FAQPage",
        "mainEntity": city.faqs.map((faq) => ({
          "@type": "Question",
          "name": faq.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.a,
          },
        })),
      },
    ],
  };

  return (
    <div className="cdm-page">
      <SEO
        title={city.metaTitle}
        description={city.metaDesc}
        canonical={canonicalUrl}
        keywords={city.keywords}
        schema={schemaData}
      />

      {/* ── 1. HERO SECTION ── */}
      <section className="cdm-hero">
        <div className="cdm-hero-glow" />
        <div className="cdm-container">
          <div className="cdm-hero-content">
            <div className="cdm-eyebrow-badge">
              <i className="fa-solid fa-location-dot" /> {city.badge}
            </div>

            <h1 className="cdm-title">
              <span className="cdm-title-gradient">{city.h1Title}</span>
            </h1>

            <p className="cdm-subtitle">{city.h1Sub}</p>

            <div className="cdm-hero-btns">
              <button
                type="button"
                className="cdm-btn-primary"
                onClick={() => openEnquiryPopup()}
              >
                <span>Claim Free SEO &amp; Growth Audit</span>
                <i className="fa-solid fa-arrow-right" />
              </button>

              <a href="tel:+919990613140" className="cdm-btn-secondary">
                <i className="fa-solid fa-phone" /> Call: +91 99906 13140
              </a>

              <a
                href="https://wa.me/919990613140?text=Hi%20Brandmingo%2C%20I%20want%20to%20grow%20my%20business%20in%20"
                target="_blank"
                rel="noopener noreferrer"
                className="cdm-btn-secondary"
              >
                <i className="fa-brands fa-whatsapp" style={{ color: "#25d366" }} /> WhatsApp Us
              </a>
            </div>

            <div className="cdm-hero-trust-chips">
              <span><i className="fa-solid fa-circle-check" /> Google &amp; Meta Certified Partners</span>
              <span><i className="fa-solid fa-circle-check" /> 5.4x Average ROAS</span>
              <span><i className="fa-solid fa-circle-check" /> 98% Client Retention</span>
              <span><i className="fa-solid fa-circle-check" /> Sector 62 Noida Corporate Office</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. STATS BAR ── */}
      <div className="cdm-stats-bar">
        <div className="cdm-container">
          <div className="cdm-stats-grid">
            <div className="cdm-stat-item">
              <div className="cdm-stat-num">350+</div>
              <div className="cdm-stat-label">Businesses Scaled Across India</div>
            </div>
            <div className="cdm-stat-item">
              <div className="cdm-stat-num">5.4x</div>
              <div className="cdm-stat-label">Average Return on Ad Spend (ROAS)</div>
            </div>
            <div className="cdm-stat-item">
              <div className="cdm-stat-num">98%</div>
              <div className="cdm-stat-label">Client Retention &amp; Satisfaction</div>
            </div>
            <div className="cdm-stat-item">
              <div className="cdm-stat-num">#1</div>
              <div className="cdm-stat-label">Google Page 1 Ranking Specialists</div>
            </div>
          </div>
        </div>
      </div>

      {/* ── 3. CORE SERVICES ── */}
      <section className="cdm-section">
        <div className="cdm-container">
          <div className="cdm-section-header">
            <span className="cdm-section-tag">HIGH-PERFORMANCE SOLUTIONS</span>
            <h2 className="cdm-section-title">
              Full-Stack Digital Marketing Services in {city.cityName}
            </h2>
            <p className="cdm-section-desc">
              From organic search dominance to high-volume paid customer acquisition, we engineer end-to-end digital growth channels built for maximum profitability.
            </p>
          </div>

          <div className="cdm-services-grid">
            {CORE_SERVICES.map((srv, idx) => (
              <div key={idx} className="cdm-service-card">
                <div className="cdm-service-icon">
                  <i className={srv.icon} />
                </div>
                <h3 className="cdm-service-title">{srv.title}</h3>
                <p className="cdm-service-text">{srv.desc}</p>
                <ul className="cdm-service-points">
                  {srv.points.map((pt, pIdx) => (
                    <li key={pIdx}>
                      <i className="fa-solid fa-chevron-right" /> {pt}
                    </li>
                  ))}
                </ul>
                <Link to={srv.link} className="cdm-service-link">
                  <span>Explore Service Details</span>
                  <i className="fa-solid fa-arrow-right" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. WHY CHOOSE BRANDMINGO ── */}
      <section className="cdm-section cdm-why-section">
        <div className="cdm-container">
          <div className="cdm-section-header">
            <span className="cdm-section-tag">THE BRANDMINGO ADVANTAGE</span>
            <h2 className="cdm-section-title">
              Why Businesses in {city.cityName} Trust Brandmingo
            </h2>
            <p className="cdm-section-desc">
              We replace guesswork and vanity metrics with battle-tested digital playbooks, deep engineering, and continuous revenue optimization.
            </p>
          </div>

          <div className="cdm-why-grid">
            {WHY_CHOOSE.map((item, idx) => (
              <div key={idx} className="cdm-why-box">
                <div className="cdm-why-icon">
                  <i className={item.icon} />
                </div>
                <div className="cdm-why-content">
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. LOCAL SERVING HUBS ── */}
      <section className="cdm-section">
        <div className="cdm-container">
          <div className="cdm-section-header">
            <span className="cdm-section-tag">LOCAL SEARCH DOMINANCE</span>
            <h2 className="cdm-section-title">
              Targeted Service Hubs &amp; Micro-Markets in {city.cityName}
            </h2>
            <p className="cdm-section-desc">
              Hyper-local geo-targeting tailored to the specific business districts and industrial clusters of {city.cityName} and Delhi NCR.
            </p>
          </div>

          <div className="cdm-areas-grid">
            {city.areas.map((area, idx) => (
              <div key={idx} className="cdm-area-card">
                <i className="fa-solid fa-location-crosshairs" />
                <div>
                  <h4 className="cdm-area-name">{area.name}</h4>
                  <p className="cdm-area-desc">{area.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. FAQ ACCORDION ── */}
      <section className="cdm-section" style={{ background: "rgba(14, 14, 20, 0.6)" }}>
        <div className="cdm-container">
          <div className="cdm-section-header">
            <span className="cdm-section-tag">FREQUENTLY ASKED QUESTIONS</span>
            <h2 className="cdm-section-title">
              Digital Marketing FAQs for {city.cityName}
            </h2>
            <p className="cdm-section-desc">
              Clear, transparent answers about our growth strategies, timelines, pricing, and guaranteed ranking workflows.
            </p>
          </div>

          <div className="cdm-faq-list">
            {city.faqs.map((faq, idx) => (
              <div
                key={idx}
                className={`cdm-faq-item ${openFaq === idx ? "active" : ""}`}
              >
                <div
                  className="cdm-faq-q"
                  onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                >
                  <span>{faq.q}</span>
                  <i className="fa-solid fa-chevron-down" />
                </div>
                {openFaq === idx && (
                  <div className="cdm-faq-a">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. CTA BANNER ── */}
      <section className="cdm-section">
        <div className="cdm-container">
          <div className="cdm-cta-card">
            <h2 className="cdm-cta-title">
              Ready to Rank #1 on Google and Multiply Your Revenue?
            </h2>
            <p className="cdm-cta-text">
              Schedule a direct consultation with our senior digital strategists at ITHUM Tower, Sector 62, Noida. We will analyze your competitors, uncover ranking gaps, and map out a 90-day growth roadmap.
            </p>

            <div className="cdm-cta-btns">
              <button
                type="button"
                className="cdm-btn-primary"
                onClick={() => openEnquiryPopup()}
              >
                <span>Request Free Consultation</span>
                <i className="fa-solid fa-arrow-right" />
              </button>

              <a href="tel:+919990613140" className="cdm-btn-secondary">
                <i className="fa-solid fa-phone" /> Call +91 99906 13140
              </a>
            </div>

            <div className="cdm-office-box">
              <i className="fa-solid fa-location-dot" />
              <span>
                <strong>Corporate Office:</strong> B-806, 8th Floor, ITHUM Tower, Block A, Sector 62, Noida, Uttar Pradesh 201309
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

