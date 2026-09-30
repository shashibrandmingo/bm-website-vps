import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SEO_DATA = {
  "/": {
    title: "Brandmingo | Best Web Development & Digital Marketing Agency | Noida & Worldwide",
    description: "Brandmingo is a premier web development and digital marketing agency based in Noida Sector 62, delivering custom high-speed websites, React apps, Meta/Google Ads, and SEO for clients across Delhi NCR, USA, UK, UAE, and Worldwide.",
    keywords: "best website development agency in noida, website development company in noida, digital marketing agency in noida, SEO agency Noida, web developers noida sector 62, Brandmingo, global web development agency, hire remote developers, offshore software development",
  },
  "/about": {
    title: "About Us | Brandmingo - Leading Tech & Marketing Agency | Noida & Global",
    description: "Discover Brandmingo, based in Noida Sector 62, delivering world-class digital transformation, custom software, and marketing solutions to businesses locally in India and globally worldwide.",
    keywords: "about brandmingo, digital agency noida sector 62, global tech agency, software development team",
  },
  "/about-us": {
    title: "About Us | Brandmingo - Leading Tech & Marketing Agency | Noida & Global",
    description: "Discover Brandmingo, based in Noida Sector 62, delivering world-class digital transformation, custom software, and marketing solutions to businesses locally in India and globally worldwide.",
    keywords: "about brandmingo, digital agency noida sector 62, global tech agency, software development team",
  },
  "/services": {
    title: "Our Services | Web Development, SEO, Ads & Branding | Noida & Worldwide",
    description: "Full-cycle digital solutions by Brandmingo: Custom Web Development, Performance Marketing, SEO, Social Media, UI/UX Audits, and Ecommerce Scalability for Delhi NCR and global clients.",
    keywords: "digital marketing services noida, web development services, seo services delhi ncr, global digital agency, performance marketing",
  },
  "/products": {
    title: "SaaS Products & Enterprise Solutions | Brandmingo Noida & Worldwide",
    description: "Proprietary business software, CRM tools, and scalable SaaS digital products engineered by Brandmingo to automate and accelerate operations for startups and global enterprises.",
    keywords: "business software noida, saas products, crm software, custom software development brandmingo, enterprise tools",
  },
  "/portfolio": {
    title: "Our Portfolio & Case Studies | Proven Results in Noida & Worldwide | Brandmingo",
    description: "Explore our proven portfolio of high-performing websites, web apps, and multi-million revenue marketing campaigns delivered for clients in Noida, Delhi NCR, and international markets.",
    keywords: "brandmingo portfolio, web development case studies, digital marketing results, client work, global projects",
  },
  "/blogs": {
    title: "Brandmingo Blog | Latest Insights in Web Tech, SEO & Global Marketing",
    description: "Actionable marketing playbooks, SEO strategies, web technology updates, and growth insights curated by the digital experts at Brandmingo.",
    keywords: "digital marketing blog, web development insights, seo tips noida, marketing trends, global seo tips",
  },
  "/contact-us": {
    title: "Contact Brandmingo | Hire Top Developers in Noida & Worldwide",
    description: "Get in touch with Brandmingo at ITHUM Tower, Sector 62, Noida. Call or WhatsApp +91-9990613140 or email hello@brandmingo.com to discuss your project.",
    keywords: "contact brandmingo, web design company contact, digital agency noida sector 62, hire developers noida, hire offshore team",
  },
  "/web-development": {
    title: "Top Web Development Company in Noida & Worldwide | Brandmingo",
    description: "High-speed, scalable custom web development. We build React, Node, WordPress, Shopify, and full-stack enterprise solutions for businesses in Noida, Delhi NCR, and worldwide.",
    keywords: "web development company noida, custom website development, react developers noida, full stack web development, hire dedicated developers, enterprise web apps",
  },
  "/seo-optimizing": {
    title: "Best SEO Services Agency | Rank #1 in Noida & Globally | Brandmingo",
    description: "Dominate search engine rankings locally and worldwide with Brandmingo: Technical SEO audits, local Google Map SEO in Noida/NCR, and international multi-region SEO growth.",
    keywords: "seo agency in noida, best seo company noida, local seo noida, rank 1 on google, international seo agency, search engine optimization",
  },
  "/ads-and-campaigns": {
    title: "Performance Marketing & Paid Ads Agency | Noida & Global | Brandmingo",
    description: "Scale your revenue with high-converting Meta, Google, and LinkedIn ad campaigns. Certified media buyers delivering proven ROAS in India and international markets.",
    keywords: "google ads agency noida, meta ads noida, performance marketing delhi ncr, ppc agency noida, global ppc agency, lead generation",
  },
  "/social-media-management": {
    title: "Social Media Marketing Agency in Noida | Brandmingo",
    description: "Build an active community, viral brand awareness, and high engagement across Instagram, LinkedIn, YouTube, and Facebook with Brandmingo's SMM team.",
    keywords: "social media marketing noida, smm agency noida, instagram marketing delhi ncr, social media management",
  },
  "/ui-ux-audits": {
    title: "UI/UX Design & Website Audit Services | Brandmingo Noida",
    description: "Elevate user experience and conversion rates with modern UI/UX design, interactive prototyping, user research, and comprehensive website usability audits.",
    keywords: "ui ux design company noida, website audit services, user experience agency, conversion rate optimization",
  },
  "/ecommerce-management": {
    title: "Ecommerce Management & Marketplace Growth Agency | Brandmingo",
    description: "End-to-end ecommerce store management for Shopify, Amazon, Flipkart, and WooCommerce. Optimize product listings, inventory, and scale sales.",
    keywords: "ecommerce management noida, amazon account management, flipkart listing services, shopify agency noida",
  },
  "/graphic-designing": {
    title: "Creative Graphic Designing & Brand Identity Agency | Brandmingo",
    description: "Craft distinctive logos, product packaging, brochures, and cohesive visual brand identities that turn visitors into lifelong brand advocates.",
    keywords: "graphic designing agency noida, logo design noida, brand identity design delhi ncr, creative design studio",
  },
  "/wordpress": {
    title: "WordPress Web Development Services in Noida | Brandmingo",
    description: "Custom WordPress theme development, plugin integration, speed optimization, and secure CMS management by Brandmingo experts.",
    keywords: "wordpress development company noida, custom wordpress theme, wordpress developers delhi ncr",
  },
  "/shopify": {
    title: "Shopify Store Development & Optimization Agency | Brandmingo",
    description: "Build lightning-fast, high-converting Shopify & Shopify Plus stores with customized themes and checkout optimization.",
    keywords: "shopify development agency noida, shopify experts, ecommerce web design",
  },
  "/woocommerce": {
    title: "WooCommerce Development Services | Brandmingo Noida",
    description: "Tailor-made WooCommerce ecommerce stores with custom payment gateways, inventory management, and ultra-fast hosting configurations.",
    keywords: "woocommerce development noida, woocommerce store setup, ecommerce wordpress",
  },
  "/react": {
    title: "React.js Web App Development Company | Brandmingo",
    description: "Enterprise-grade React.js frontends and Single Page Applications with fluid UX, server-side capabilities, and unmatched performance.",
    keywords: "react js development company noida, hire react developers, frontend development agency",
  },
  "/php": {
    title: "PHP Custom Web Application Development | Brandmingo",
    description: "Robust, secure, and scalable PHP & Laravel web development services for complex portals, web applications, and backend systems.",
    keywords: "php development company noida, laravel developers, backend web development",
  },
  "/crm-development": {
    title: "Custom CRM Development Services in Noida | Brandmingo",
    description: "Custom CRM, ERP, and internal management tools engineered to streamline sales pipelines, customer interactions, and business operations.",
    keywords: "custom crm development noida, crm software company, enterprise tools delhi ncr",
  },
  "/performance-marketing": {
    title: "ROI-Focused Performance Marketing Agency | Brandmingo",
    description: "Data-driven performance marketing focused on customer acquisition cost (CAC) reduction and maximum return on ad spend (ROAS).",
    keywords: "performance marketing agency noida, roas optimization, paid media agency",
  },
  "/google-ads": {
    title: "Certified Google Ads (PPC) Management Agency | Brandmingo",
    description: "Google Search, Display, Shopping, and YouTube Ads managed by Google Certified Partner professionals to drive immediate high-intent leads.",
    keywords: "google ads management noida, ppc company noida, google adwords agency",
  },
  "/facebook-instagram-ads": {
    title: "Meta (Facebook & Instagram) Ads Agency | Brandmingo",
    description: "High-converting creative campaigns, lookalike audience targeting, and funnel retargeting on Facebook and Instagram.",
    keywords: "meta ads agency noida, facebook ads company, instagram advertising agency",
  },
  "/organic-traffic": {
    title: "Organic Traffic Growth & Advanced SEO Strategies | Brandmingo",
    description: "Sustainable organic search traffic growth through deep keyword research, content clustering, and authoritative backlink acquisition.",
    keywords: "organic traffic growth, advanced seo agency noida, rank keywords google",
  },
  "/local-search-dominance": {
    title: "Local Search & Google My Business Dominance | Brandmingo",
    description: "Capture nearby customers with Google Map 3-pack optimization, localized citations, review management, and local search dominance.",
    keywords: "local seo noida, google my business optimization, gmb management noida, local search dominance",
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
