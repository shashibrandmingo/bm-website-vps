import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SEO_DATA = {
  "/": {
    title: "Brandmingo | Best Website Development & Digital Marketing Company in Noida Sector 62",
    description: "Brandmingo is Noida's premier website development & digital marketing agency located at ITHUM Tower, Sector 62. Custom high-speed websites, React web apps, Google/Meta Ads, and #1 Google ranking SEO for businesses in Noida, Delhi NCR, and worldwide.",
    keywords: "best website development agency in noida, website development company in noida, digital marketing agency in noida, seo agency in noida, web developers in noida sector 62, website designing company in noida, web development company in noida sector 63, best web designers in delhi ncr, it companies in noida sector 62, website designers near me, custom web development noida, react js development company noida, google ads agency noida, performance marketing agency noida, Brandmingo, hire remote developers noida",
  },
  "/about": {
    title: "About Us | Brandmingo - Leading Tech & Marketing Agency in Noida Sector 62",
    description: "Discover Brandmingo, headquartered at ITHUM Tower, Sector 62, Noida. We are a trusted digital transformation, custom software development, and performance marketing company serving businesses in Noida, Delhi NCR, and globally.",
    keywords: "about brandmingo, it software company noida sector 62, web development team noida, digital marketing firm noida, top tech agency ithum tower noida, website designers noida, custom software developers delhi ncr",
  },
  "/about-us": {
    title: "About Us | Brandmingo - Leading Tech & Marketing Agency in Noida Sector 62",
    description: "Discover Brandmingo, headquartered at ITHUM Tower, Sector 62, Noida. We are a trusted digital transformation, custom software development, and performance marketing company serving businesses in Noida, Delhi NCR, and globally.",
    keywords: "about brandmingo, it software company noida sector 62, web development team noida, digital marketing firm noida, top tech agency ithum tower noida, website designers noida, custom software developers delhi ncr",
  },
  "/services": {
    title: "Our Services | Web Development, SEO, Ads & Branding in Noida | Brandmingo",
    description: "Comprehensive digital growth services by Brandmingo Noida: Custom Web Development, SEO Services, Performance Marketing (Google & Meta Ads), Social Media Management, UI/UX Audits, and Ecommerce Scalability for Delhi NCR & global brands.",
    keywords: "web development services noida, digital marketing services noida, best seo services noida, google ads management noida, ecommerce development noida, web design services delhi ncr, software development company noida, performance marketing noida",
  },
  "/products": {
    title: "SaaS Products & Enterprise Business Solutions in Noida | Brandmingo",
    description: "Proprietary business software, CRM tools, and scalable SaaS digital products engineered by Brandmingo in Noida Sector 62 to automate and accelerate operations for startups and global enterprises.",
    keywords: "business software noida, saas products noida, crm software noida, custom software development brandmingo, enterprise tools delhi ncr, cloud applications noida",
  },
  "/portfolio": {
    title: "Our Portfolio & Case Studies | Proven Digital Results in Noida | Brandmingo",
    description: "Explore our proven portfolio of high-performing websites, React web apps, and multi-crore revenue marketing campaigns delivered for clients in Noida, Delhi NCR, and international markets.",
    keywords: "brandmingo portfolio, website development case studies noida, digital marketing results, client work delhi ncr, web design examples noida, best agency work portfolio",
  },
  "/blogs": {
    title: "Brandmingo Blog | Latest Insights in Web Tech, SEO & Marketing in Noida",
    description: "Actionable digital marketing playbooks, SEO growth strategies, web development technology updates, and business insights curated by the digital experts at Brandmingo Noida.",
    keywords: "digital marketing blog noida, web development insights, seo tips noida, marketing trends delhi ncr, tech blog noida, google ranking strategies",
  },
  "/contact-us": {
    title: "Contact Brandmingo | Hire Top Web Developers & Marketers in Noida Sector 62",
    description: "Visit Brandmingo at B-806, 8th Floor, ITHUM Tower, Sector 62, Noida. Call or WhatsApp +91-9990613140 or email hello@brandmingo.com for project quotations and consultation.",
    keywords: "contact brandmingo, web design company contact noida, it companies in ithum tower noida sector 62, hire developers noida, digital marketing agency contact noida, hire offshore developers",
  },
  "/web-development": {
    title: "Top Website Development Company in Noida Sector 62 | Brandmingo",
    description: "Award-winning website development company in Noida. We build lightning-fast React, Node, Next.js, WordPress, Shopify, and custom full-stack enterprise web portals for businesses in Noida, Delhi NCR, and worldwide.",
    keywords: "website development company in noida, best website development agency in noida, web developers in noida sector 62, web development company in noida sector 63, custom website development noida, responsive web design noida, react js development company noida, hire full stack developers noida, corporate website development noida, b2b website development noida, affordable website development noida, website development company near me",
  },
  "/seo-optimizing": {
    title: "Best SEO Company in Noida | Rank #1 on Google Search | Brandmingo",
    description: "Dominate search engine rankings locally and globally with Brandmingo, Noida's top SEO agency. Technical SEO audits, Local Google Map 3-Pack SEO in Noida & Delhi NCR, and high-authority backlink building.",
    keywords: "best seo company in noida, seo agency in noida sector 62, local seo services in noida, google map ranking services noida, top seo consultants in noida, technical seo audit noida, high quality backlink service noida, organic traffic growth agency noida, rank 1 on google noida, ecommerce seo agency noida, guaranteed seo services noida",
  },
  "/ads-and-campaigns": {
    title: "Performance Marketing & Paid Ads Agency in Noida | Brandmingo",
    description: "Scale your business revenue with high-converting Meta, Google, and LinkedIn ad campaigns. Certified media buyers delivering proven ROAS and verified leads in Noida, Delhi NCR, and globally.",
    keywords: "performance marketing agency noida, google ads agency in noida, ppc company in noida, meta ads agency noida, lead generation company in noida, facebook ads company in noida, instagram advertising agency noida, paid advertising agency delhi ncr, roas improvement agency noida",
  },
  "/social-media-management": {
    title: "Social Media Marketing (SMM) Agency in Noida | Brandmingo",
    description: "Build an active brand community, viral awareness, and high engagement across Instagram, LinkedIn, YouTube, and Facebook with Brandmingo's expert SMM team in Noida Sector 62.",
    keywords: "social media marketing agency in noida, smm company in noida, social media management delhi ncr, instagram marketing agency noida, linkedin b2b marketing noida, brand awareness campaigns noida",
  },
  "/ui-ux-audits": {
    title: "UI/UX Design & Website Audit Agency in Noida | Brandmingo",
    description: "Elevate user experience and conversion rates with modern UI/UX design, interactive Figma prototyping, user research, and comprehensive website usability audits in Noida.",
    keywords: "ui ux design company in noida, website audit services noida, user experience agency delhi ncr, figma designers in noida, website redesign company noida, conversion rate optimization noida",
  },
  "/ecommerce-management": {
    title: "Ecommerce Management & Marketplace Growth Agency in Noida | Brandmingo",
    description: "End-to-end ecommerce store management for Shopify, Amazon, Flipkart, and WooCommerce. Optimize product listings, PPC ads, inventory, and scale sales across Delhi NCR and India.",
    keywords: "ecommerce management noida, amazon account management noida, flipkart listing services noida, shopify store management noida, ecommerce marketing agency delhi ncr, marketplace growth services noida",
  },
  "/graphic-designing": {
    title: "Creative Graphic Designing & Brand Identity Agency in Noida | Brandmingo",
    description: "Craft distinctive logos, product packaging, corporate brochures, and cohesive visual brand identities with Brandmingo's creative graphic design studio in Noida Sector 62.",
    keywords: "graphic design company in noida, logo design in noida sector 62, brand identity design noida, brochure design company delhi ncr, packaging design studio noida, corporate branding noida",
  },
  "/wordpress": {
    title: "WordPress Website Development Company in Noida | Brandmingo",
    description: "Custom WordPress theme development, WooCommerce plugins, speed optimization, and secure CMS management by certified WordPress developers in Noida.",
    keywords: "wordpress development company in noida, custom wordpress theme noida, wordpress developers in noida, wordpress speed optimization delhi ncr, woocommerce wordpress website noida",
  },
  "/shopify": {
    title: "Shopify Store Development & Optimization Agency in Noida | Brandmingo",
    description: "Build lightning-fast, high-converting Shopify & Shopify Plus ecommerce stores with customized Liquid themes, app integrations, and checkout optimization in Noida.",
    keywords: "shopify development agency noida, shopify experts in noida, shopify store designer delhi ncr, ecommerce shopify website noida, hire shopify developer noida",
  },
  "/woocommerce": {
    title: "WooCommerce Development Services in Noida | Brandmingo",
    description: "Tailor-made WooCommerce ecommerce stores with custom Indian & international payment gateways, inventory management, and ultra-fast hosting configurations in Noida.",
    keywords: "woocommerce development noida, woocommerce store setup noida, wordpress ecommerce development delhi ncr, online store developers noida",
  },
  "/react": {
    title: "React.js Web App Development Company in Noida | Brandmingo",
    description: "Enterprise-grade React.js frontends and Single Page Applications with fluid UX, server-side capabilities, and unmatched performance by React experts in Noida.",
    keywords: "react js development company noida, hire react developers in noida, frontend development agency delhi ncr, full stack react development noida, custom web app development noida",
  },
  "/php": {
    title: "PHP & Laravel Custom Web Development Company in Noida | Brandmingo",
    description: "Robust, secure, and scalable PHP & Laravel web development services for complex portals, web applications, and backend systems in Noida Sector 62.",
    keywords: "php development company in noida, laravel developers in noida, backend web development delhi ncr, custom php application noida, web portal development noida",
  },
  "/crm-development": {
    title: "Custom CRM & ERP Software Development in Noida | Brandmingo",
    description: "Custom CRM, ERP, and internal management tools engineered in Noida Sector 62 to streamline sales pipelines, customer interactions, and business operations.",
    keywords: "custom crm development noida, erp software company noida, business software development delhi ncr, lead management system noida, workflow automation software noida",
  },
  "/performance-marketing": {
    title: "ROI-Focused Performance Marketing Agency in Noida | Brandmingo",
    description: "Data-driven performance marketing focused on customer acquisition cost (CAC) reduction and maximum return on ad spend (ROAS) across Google, Meta, and LinkedIn in Noida.",
    keywords: "performance marketing agency noida, roas optimization noida, digital advertising company delhi ncr, b2b lead generation noida, paid media marketing noida",
  },
  "/google-ads": {
    title: "Certified Google Ads (PPC) Management Agency in Noida | Brandmingo",
    description: "Google Search, Display, Shopping, and YouTube Ads managed by Google Certified Partner professionals in Noida to drive immediate high-intent leads and sales.",
    keywords: "google ads agency in noida, google ads management noida, ppc company in noida, google adwords experts noida, search ads agency delhi ncr, b2b google ads noida",
  },
  "/facebook-instagram-ads": {
    title: "Meta (Facebook & Instagram) Ads Agency in Noida | Brandmingo",
    description: "High-converting creative campaigns, lookalike audience targeting, and funnel retargeting on Facebook and Instagram delivered by media buyers in Noida.",
    keywords: "meta ads agency noida, facebook ads company in noida, instagram advertising agency noida, social media ads delhi ncr, lead gen facebook ads noida",
  },
  "/organic-traffic": {
    title: "Organic Traffic Growth & Advanced SEO in Noida | Brandmingo",
    description: "Sustainable organic search traffic growth through deep keyword research, content clustering, semantic SEO, and authoritative backlink acquisition in Noida.",
    keywords: "organic traffic growth noida, advanced seo agency noida, rank keywords on google delhi ncr, content marketing seo noida, organic lead generation noida",
  },
  "/local-search-dominance": {
    title: "Local SEO & Google My Business Dominance in Noida | Brandmingo",
    description: "Capture nearby customers with Google Map 3-pack optimization, localized citations, review management, and local search dominance in Noida Sector 62, 18, and Delhi NCR.",
    keywords: "local seo in noida, google my business optimization noida, gmb ranking services noida, local search dominance delhi ncr, local seo agency near me, map ranking noida",
  },
  "/custom-web-design": {
    title: "Custom Web Design Company in Noida | Brandmingo",
    description: "Bespoke, pixel-perfect website designs crafted for conversions, responsive across all screen sizes, built by creative web designers in Noida.",
    keywords: "custom web design noida, website designer in noida, bespoke web design delhi ncr, modern website design noida, creative web agency noida",
  },
  "/corporate-branding": {
    title: "Corporate Branding Agency in Noida & Delhi NCR | Brandmingo",
    description: "Build an unforgettable corporate identity with complete brand guidelines, typography, color palettes, and brand voice developed by Brandmingo Noida.",
    keywords: "corporate branding agency noida, brand identity design delhi ncr, corporate visual identity noida, brand strategy firm noida",
  },
  "/mobile-app-design": {
    title: "Mobile App UI/UX Design Agency in Noida | Brandmingo",
    description: "Intuitive iOS and Android mobile app UI/UX design with interactive wireframing, user flows, and Figma design systems in Noida.",
    keywords: "mobile app design noida, app ui ux designers noida, ios android design agency delhi ncr, mobile app prototyping noida",
  },
  "/product-design": {
    title: "Digital Product Design & Prototyping in Noida | Brandmingo",
    description: "End-to-end digital product design for SaaS apps, web portals, and mobile products with scalable design systems in Noida.",
    keywords: "product design agency noida, saas product design noida, digital product prototyping delhi ncr, ux product designers noida",
  },
  "/logo-design": {
    title: "Professional Logo Design Company in Noida Sector 62 | Brandmingo",
    description: "Unique, memorable vector logo design for startups and established enterprises. Crafted by expert graphic designers in Noida.",
    keywords: "logo design company in noida, professional logo designers noida sector 62, creative logo design delhi ncr, business logo maker noida",
  },
  "/label-designing": {
    title: "Product Packaging & Label Design Agency in Noida | Brandmingo",
    description: "Stand out on retail shelves and online marketplaces with premium product packaging and label designs created by Brandmingo Noida.",
    keywords: "label design agency noida, product packaging design noida, retail box design delhi ncr, bottle label designer noida",
  },
  "/corporate-identity-designing": {
    title: "Corporate Identity Design Services in Noida | Brandmingo",
    description: "Complete corporate identity packages including business cards, letterheads, brochures, and brand stationery in Noida Sector 62.",
    keywords: "corporate identity design noida, business stationery design noida, brand identity package delhi ncr, corporate collateral noida",
  },
  "/brand-identity-design": {
    title: "Complete Brand Identity Design Agency in Noida | Brandmingo",
    description: "Turn your business into a recognizable brand with complete visual identity, logos, color theory, and marketing design systems in Noida.",
    keywords: "brand identity design noida, visual branding agency noida, brand styling delhi ncr, brand guidelines designer noida",
  },
  "/amazon-management-services": {
    title: "Amazon Account Management & PPC Agency in Noida | Brandmingo",
    description: "Boost your Amazon sales with listing optimization, A+ content, Amazon PPC ads, and Buy Box strategies managed by Brandmingo in Noida.",
    keywords: "amazon account management noida, amazon ppc agency noida, amazon product listing optimization delhi ncr, amazon sales growth noida",
  },
  "/flipkart-management-services": {
    title: "Flipkart Account Management & Listing Services in Noida | Brandmingo",
    description: "Scale your revenue on Flipkart with professional catalog management, Flipkart ads, and keyword-rich listing optimization in Noida.",
    keywords: "flipkart management services noida, flipkart listing optimization noida, flipkart advertising agency delhi ncr, sell on flipkart noida",
  },
  "/shopsy-management-services": {
    title: "Shopsy Account Management Agency in Noida | Brandmingo",
    description: "Grow your e-commerce presence on Shopsy with expert cataloging, pricing strategies, and order fulfillment support in Noida.",
    keywords: "shopsy account management noida, shopsy listing services noida, shopsy seller agency delhi ncr",
  },
  "/snapdeal-management-services": {
    title: "Snapdeal Account Management Services in Noida | Brandmingo",
    description: "Maximize your marketplace reach on Snapdeal with end-to-end seller account management and marketing by Brandmingo Noida.",
    keywords: "snapdeal management services noida, snapdeal seller account agency noida, marketplace management delhi ncr",
  },
  "/linkedin-ads": {
    title: "B2B LinkedIn Ads Management Agency in Noida | Brandmingo",
    description: "Generate high-value B2B leads and enterprise clients with precision-targeted LinkedIn sponsored content and InMail ads in Noida.",
    keywords: "linkedin ads agency noida, b2b lead generation noida, linkedin advertising company delhi ncr, corporate linkedin marketing noida",
  },
  "/openai-ads": {
    title: "AI Advertising & Next-Gen Marketing in Noida | Brandmingo",
    description: "Leverage AI-driven advertising, predictive targeting, and automated marketing workflows to accelerate customer acquisition in Noida.",
    keywords: "ai advertising agency noida, ai digital marketing noida, automated advertising solutions delhi ncr",
  },
  "/brand-awareness": {
    title: "Brand Awareness & PR Marketing Campaigns in Noida | Brandmingo",
    description: "Amplify your brand voice, reach millions of potential customers, and build lasting credibility with viral campaigns in Noida.",
    keywords: "brand awareness agency noida, pr marketing noida, viral brand marketing delhi ncr, digital pr services noida",
  },
  "/strategy-planning": {
    title: "Digital Marketing Strategy & Growth Planning in Noida | Brandmingo",
    description: "Custom digital roadmaps, competitor intelligence, and market expansion strategies engineered for sustainable ROI in Noida.",
    keywords: "marketing strategy consultant noida, digital growth planning noida, business marketing roadmap delhi ncr",
  },
  "/content-creation-publishing": {
    title: "Content Creation & Copywriting Agency in Noida | Brandmingo",
    description: "High-converting SEO blog posts, website copywriting, social media creative content, and video scripts produced in Noida.",
    keywords: "content creation agency noida, seo copywriting services noida, content marketing company delhi ncr, creative writing noida",
  },
  "/engagement-growth": {
    title: "Social Engagement & Audience Growth Agency in Noida | Brandmingo",
    description: "Grow active followers, boost comments and shares, and foster loyal customer communities across digital channels in Noida.",
    keywords: "social media engagement agency noida, audience growth company noida, community management delhi ncr",
  },
  "/privacy-policy": {
    title: "Privacy Policy | Brandmingo",
    description: "Review Brandmingo's privacy policy, data protection standards, and terms concerning user information.",
    keywords: "brandmingo privacy policy",
  },
  "/terms-of-use": {
    title: "Terms of Use | Brandmingo",
    description: "Read the official terms and conditions for utilizing Brandmingo's website, products, and agency services.",
    keywords: "brandmingo terms of use, terms and conditions",
  },
};

const PAGE_FAQS = {
  "/web-development": [
    {
      q: "Why is Brandmingo the best website development agency in Noida?",
      a: "Brandmingo is based in Noida Sector 62 (ITHUM Tower). We provide end-to-end web development with dedicated in-house developers, modern tech stacks (React, Next.js, WordPress, Shopify), custom UI/UX design, built-in SEO optimization, and reliable post-launch technical support for startups and enterprise brands across Delhi NCR.",
    },
    {
      q: "Can we visit your office in Noida for an in-person project consultation?",
      a: "Yes, absolutely! Our corporate office is located at B-806, 8th Floor, ITHUM Tower, Block A, Sector 62, Noida, Uttar Pradesh 201309. You can schedule an in-person meeting with our technical leads and web designers to discuss your project requirements.",
    },
    {
      q: "What is the cost of website development in Noida?",
      a: "Website development cost depends on the scope, features, and platform. Basic business websites typically start around ₹15,000–₹25,000, while custom React applications, enterprise web portals, and advanced ecommerce stores range from ₹40,000 to ₹1,50,000+.",
    },
    {
      q: "How long does it take to develop a custom website?",
      a: "A standard business website typically takes 1 to 2 weeks, while complex web applications, custom CRM platforms, or large ecommerce stores take 3 to 6 weeks, including testing and optimization.",
    },
    {
      q: "Which platform is best for my business: Shopify, WordPress, or React?",
      a: "It depends on your business requirements. Shopify is ideal for online stores, WordPress works best for service-based and content-focused websites, while React is perfect for high-performance and custom web applications with advanced functionality.",
    },
    {
      q: "Will my website be mobile-friendly and SEO optimized?",
      a: "Yes. Every website we build is 100% mobile-responsive and optimized for high-speed performance, clean code structure, and Core Web Vitals to help you rank at the top of Google search results.",
    },
  ],
  "/seo-optimizing": [
    {
      q: "What SEO services do you offer in Noida and globally?",
      a: "We provide Technical SEO, On-Page SEO, Off-Page SEO, Local SEO (Google Maps 3-Pack), Keyword Research, Content Optimization, High-Authority Link Building, eCommerce SEO, and Enterprise SEO services.",
    },
    {
      q: "How long does SEO take to show ranking results on Google?",
      a: "Most businesses begin seeing measurable keyword ranking improvements within 3 to 6 months. Low-competition local keywords in Noida can rank in 30 to 60 days, while competitive global keywords require sustained authority building.",
    },
    {
      q: "How do you improve Google rankings and organic traffic?",
      a: "We combine technical crawl error fixes, site speed optimization, schema markup injection, high-intent keyword clustering, high-authority backlink outreach, and UX improvements for sustainable growth.",
    },
    {
      q: "Is SEO better than paid advertising (Google Ads)?",
      a: "SEO delivers long-term free organic visibility that continues paying dividends without daily ad spend, while paid ads generate immediate traffic. Combining both strategies maximizes total search real estate.",
    },
    {
      q: "Do you guarantee #1 ranking on Google?",
      a: "No ethical agency can guarantee specific #1 positions because Google's algorithm changes constantly. However, our proven data-driven SEO framework consistently lands 90%+ of client target keywords onto Google's first page.",
    },
  ],
  "/ads-and-campaigns": [
    {
      q: "What advertising platforms do you manage?",
      a: "We manage high-ROI campaigns across Google Ads (Search, Display, Shopping, YouTube), Meta Ads (Facebook & Instagram), and LinkedIn Ads tailored to your industry and conversion goals.",
    },
    {
      q: "How long does it take to see results from paid ads?",
      a: "Paid ad campaigns start driving impressions and leads within 24 to 48 hours of launch. Maximum conversion efficiency and lowest cost-per-acquisition (CPA) is typically achieved within 2 weeks of algorithm learning.",
    },
    {
      q: "How do you optimize campaigns to increase ROAS?",
      a: "We continuously A/B test ad creatives, copy hooks, landing page conversion rates, audience exclusions, negative keywords, and bidding strategies to maximize return on ad spend.",
    },
    {
      q: "What is the minimum ad budget required to start?",
      a: "You can start testing with as low as ₹500–₹1,000 per day for Meta ads, or ₹1,000–₹2,000 per day for Google Search ads to gather sufficient data and initial lead volume.",
    },
  ],
  "/ecommerce-management": [
    {
      q: "What marketplaces do you manage for ecommerce sellers?",
      a: "We provide end-to-end account management, listing optimization, advertising, and catalog management for Amazon, Flipkart, Shopsy, Snapdeal, and independent Shopify stores.",
    },
    {
      q: "How do you increase sales on Amazon and Flipkart?",
      a: "We optimize product titles, bullet points, backend keywords, and A+ content, resolve account health issues, run Amazon PPC / Flipkart ads, and optimize Buy Box win rates.",
    },
  ],
  "/contact-us": [
    {
      q: "Where is Brandmingo office located?",
      a: "Our office is located at B-806, 8th Floor, ITHUM Tower, Block A, Industrial Area, Sector 62, Noida, Uttar Pradesh 201309.",
    },
    {
      q: "How can I contact Brandmingo for a project quotation?",
      a: "You can call or WhatsApp us at +91-9990613140 / +91-8799719725, email us at hello@brandmingo.com, or fill out the enquiry form on our website.",
    },
  ],
};

export default function SEOManager() {
  const { pathname } = useLocation();

  useEffect(() => {
    const matched = SEO_DATA[pathname] || SEO_DATA["/"];
    const canonicalUrl = `https://brandmingo.com${pathname === "/" ? "/" : pathname.replace(/\/$/, "")}`;

    // Update Title
    document.title = matched.title;

    // Helper to safely set meta tag content
    const setMeta = (nameOrProperty, attr, content) => {
      let el = document.querySelector(`meta[${attr}="${nameOrProperty}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, nameOrProperty);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    // Standard Meta
    setMeta("description", "name", matched.description);
    setMeta("keywords", "name", matched.keywords);

    // OpenGraph
    setMeta("og:title", "property", matched.title);
    setMeta("og:description", "property", matched.description);
    setMeta("og:url", "property", canonicalUrl);

    // Twitter
    setMeta("twitter:title", "name", matched.title);
    setMeta("twitter:description", "name", matched.description);

    // Canonical link — use id for fast lookup (avoids duplicate tags)
    let canonical = document.getElementById("canonical-tag");
    if (!canonical) {
      canonical = document.querySelector('link[rel="canonical"]');
    }
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      canonical.setAttribute("id", "canonical-tag");
      document.head.insertBefore(canonical, document.head.firstChild);
    }
    canonical.setAttribute("href", canonicalUrl);

    // FAQ Schema (Google Snippets Hack)
    const faqs = PAGE_FAQS[pathname];
    let faqScript = document.getElementById("faq-schema");
    if (faqs && faqs.length > 0) {
      if (!faqScript) {
        faqScript = document.createElement("script");
        faqScript.id = "faq-schema";
        faqScript.type = "application/ld+json";
        document.head.appendChild(faqScript);
      }
      faqScript.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map((faq) => ({
          "@type": "Question",
          "name": faq.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.a,
          },
        })),
      });
    } else if (faqScript) {
      faqScript.remove();
    }

    // BreadcrumbList Schema (Google Clean Navigation URLs)
    const bcScriptId = "breadcrumb-schema";
    let bcScript = document.getElementById(bcScriptId);
    if (pathname !== "/") {
      if (!bcScript) {
        bcScript = document.createElement("script");
        bcScript.id = bcScriptId;
        bcScript.type = "application/ld+json";
        document.head.appendChild(bcScript);
      }
      const cleanTitle = matched.title.split("|")[0].trim();
      bcScript.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://brandmingo.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": cleanTitle,
            "item": canonicalUrl
          }
        ]
      });
    } else if (bcScript) {
      bcScript.remove();
    }
  }, [pathname]);

  return null;
}
