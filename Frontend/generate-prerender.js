import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DIST_DIR = path.join(__dirname, "dist");
const BASE_URL = "https://brandmingo.com";

const ROUTES_DATA = {
  "/": {
    title: "Brandmingo | Best Website Development & Digital Marketing Company in Noida Sector 62",
    description: "Brandmingo is Noida's premier website development & digital marketing agency located at ITHUM Tower, Sector 62. Custom high-speed websites, React web apps, Google/Meta Ads, and #1 Google ranking SEO for businesses in Noida, Delhi NCR, and worldwide.",
    keywords: "digital marketing company in noida, website development company in noida, digital marketing agency in noida, seo agency in noida, web developers in noida sector 62, website designing company in noida, it companies in noida sector 62, best digital marketing company in noida sector 62, Brandmingo",
    h1: "Best Website Development Company & Digital Marketing Agency in Noida Sector 62",
  },
  "/digital-marketing-company-in-noida": {
    title: "Best Digital Marketing Company in Noida Sector 62 | Brandmingo",
    description: "Top digital marketing company in Noida Sector 62. Rank #1 on Google with high-authority SEO, 5.4x ROAS Meta/Google Ads, web development & branding. Call +91-9990613140.",
    keywords: "digital marketing company in noida, digital marketing agency in noida, digital marketing company in noida sector 62, best digital marketing agency in noida, digital marketing agency in noida sector 62, seo company in noida, website development company in noida, performance marketing agency noida",
    h1: "Best Digital Marketing Company in Noida Sector 62",
    faqs: [
      {
        q: "Why is Brandmingo the best digital marketing company in Noida Sector 62?",
        a: "Brandmingo combines technical depth with performance marketing. Located at ITHUM Tower, Sector 62, Noida, our in-house team of certified Google & Meta specialists, full-stack React developers, and SEO strategists deliver end-to-end growth with transparent weekly ROI tracking and proven #1 Google rankings.",
      },
      {
        q: "How long does it take to rank on Google's first page for Noida keywords?",
        a: "For high-intent local queries in Noida and Delhi NCR, our clients typically see initial 1st-page rankings within 45 to 90 days using our Local Map 3-Pack optimization, high-authority backlink building, and technical SEO schema injection.",
      },
      {
        q: "Can we visit your office in Noida Sector 62 for an in-person meeting?",
        a: "Yes! You are welcome to meet our team at B-806, 8th Floor, ITHUM Tower, Block A, Industrial Area, Sector 62, Noida, UP 201309. Call or WhatsApp +91-9990613140 to schedule a consultation.",
      },
    ],
  },
  "/digital-marketing-agency-in-delhi-ncr": {
    title: "Best Digital Marketing Agency in Delhi NCR | Top SEO & Ads Company",
    description: "Scale your revenue across Delhi NCR with Brandmingo. Proven #1 Google rankings, high-converting Google/Meta Ads, website development & branding solutions.",
    keywords: "digital marketing agency in delhi ncr, digital marketing company in delhi, best digital marketing firm delhi, seo company delhi ncr, web development agency delhi, performance marketing delhi",
    h1: "Leading Digital Marketing Agency in Delhi NCR",
  },
  "/digital-marketing-company-in-gurgaon": {
    title: "Top Digital Marketing Company in Gurgaon (Gurugram) | Brandmingo",
    description: "Premier digital marketing and SEO company in Gurgaon. Scale with high-ROAS Google Ads, LinkedIn B2B funnels, React web development, and #1 Google rankings.",
    keywords: "digital marketing company in gurgaon, digital marketing agency in gurugram, seo agency gurgaon, b2b marketing company gurgaon, website development gurgaon",
    h1: "Top Digital Marketing Company in Gurgaon (Gurugram)",
  },
  "/digital-marketing-company-in-greater-noida": {
    title: "Best Digital Marketing Company in Greater Noida | Brandmingo",
    description: "Leading digital marketing company in Greater Noida. Local SEO, Google Map ranking, website design, and social media advertising for institutions & businesses.",
    keywords: "digital marketing company in greater noida, seo services greater noida, website design greater noida, pari chowk marketing agency, digital marketing agency greater noida",
    h1: "Best Digital Marketing Company in Greater Noida",
  },
  "/digital-marketing-company-in-ghaziabad": {
    title: "Top Digital Marketing Agency in Ghaziabad & Indirapuram | Brandmingo",
    description: "Accelerate your local business with Brandmingo Ghaziabad. Top Google ranking SEO, high-impact Meta ads, responsive websites, and local lead generation.",
    keywords: "digital marketing company in ghaziabad, digital marketing agency in indirapuram, seo agency ghaziabad, website designing ghaziabad, local seo ghaziabad",
    h1: "Top Digital Marketing Agency in Ghaziabad & Indirapuram",
  },
  "/digital-marketing-company-in-faridabad": {
    title: "Best Digital Marketing Company in Faridabad | Brandmingo",
    description: "Scale your industrial & commercial business with Brandmingo Faridabad. High-performance SEO, Google Ads, website design, and B2B digital lead generation.",
    keywords: "digital marketing company in faridabad, seo services in faridabad, website development faridabad, b2b industrial marketing faridabad, digital marketing agency faridabad",
    h1: "Best Digital Marketing Company in Faridabad",
  },
  "/about-us": {
    title: "About Us | Brandmingo - Leading Tech & Marketing Agency in Noida Sector 62",
    description: "Discover Brandmingo, headquartered at ITHUM Tower, Sector 62, Noida. Trusted digital transformation, custom software development, and performance marketing company.",
    keywords: "about brandmingo, it software company noida sector 62, web development team noida, digital marketing firm noida",
    h1: "About Brandmingo Media Private Limited",
  },
  "/services": {
    title: "Our Services | Web Development, SEO, Ads & Branding in Noida | Brandmingo",
    description: "Comprehensive digital growth services by Brandmingo Noida: Custom Web Development, SEO Services, Performance Marketing, Social Media, and Ecommerce Growth.",
    keywords: "web development services noida, digital marketing services noida, best seo services noida, google ads management noida",
    h1: "Full-Stack Digital & Engineering Services in Noida",
  },
  "/products": {
    title: "SaaS Products & Enterprise Business Solutions in Noida | Brandmingo",
    description: "Proprietary business software, CRM tools, and scalable SaaS digital products engineered by Brandmingo in Noida Sector 62.",
    keywords: "business software noida, saas products noida, crm software noida",
    h1: "Enterprise Products & SaaS Solutions",
  },
  "/portfolio": {
    title: "Our Portfolio & Case Studies | Proven Digital Results in Noida | Brandmingo",
    description: "Explore our proven portfolio of high-performing websites, React web apps, and multi-crore revenue marketing campaigns delivered by Brandmingo.",
    keywords: "brandmingo portfolio, website development case studies noida, digital marketing results",
    h1: "Proven Client Success & Portfolio Case Studies",
  },
  "/blogs": {
    title: "Brandmingo Blog | Latest Insights in Web Tech, SEO & Marketing in Noida",
    description: "Actionable digital marketing playbooks, SEO growth strategies, web development technology updates, and business insights curated by Brandmingo.",
    keywords: "digital marketing blog noida, web development insights, seo tips noida",
    h1: "Latest Digital Marketing & Tech Insights",
  },
  "/contact-us": {
    title: "Contact Brandmingo | Hire Top Web Developers & Marketers in Noida Sector 62",
    description: "Visit Brandmingo at B-806, 8th Floor, ITHUM Tower, Sector 62, Noida. Call or WhatsApp +91-9990613140 or email hello@brandmingo.com.",
    keywords: "contact brandmingo, web design company contact noida, it companies in ithum tower noida sector 62",
    h1: "Contact Brandmingo Corporate Office in Noida Sector 62",
  },
  "/careers": {
    title: "Careers at Brandmingo | Join Top Web & Digital Agency in Noida Sector 62",
    description: "Explore exciting career opportunities at Brandmingo Noida. We are hiring React developers, SEO specialists, Google/Meta Ads media buyers, and UI/UX designers.",
    keywords: "brandmingo careers, web developer jobs noida, seo jobs noida sector 62, digital marketing jobs noida",
    h1: "Careers & Open Positions at Brandmingo Noida",
  },
  "/privacy-policy": {
    title: "Privacy Policy | Brandmingo",
    description: "Review Brandmingo's privacy policy, data protection standards, and terms concerning user information.",
    keywords: "brandmingo privacy policy",
    h1: "Privacy Policy",
  },
  "/terms-of-use": {
    title: "Terms of Use | Brandmingo",
    description: "Read the official terms and conditions for utilizing Brandmingo's website, products, and agency services.",
    keywords: "brandmingo terms of use, terms and conditions",
    h1: "Terms of Use",
  },
  "/web-development": {
    title: "Top Website Development Company in Noida Sector 62 | Brandmingo",
    description: "Award-winning website development company in Noida. We build lightning-fast React, Node, Next.js, WordPress, Shopify, and custom full-stack enterprise portals.",
    keywords: "website development company in noida, best website development agency in noida, web developers in noida sector 62, web development company in noida sector 63",
    h1: "Top Website Development Company in Noida Sector 62",
  },
  "/seo-optimizing": {
    title: "Best SEO Company in Noida | Rank #1 on Google Search | Brandmingo",
    description: "Dominate search engine rankings locally and globally with Brandmingo, Noida's top SEO agency. Technical SEO audits, Local Google Map 3-Pack SEO in Noida & Delhi NCR.",
    keywords: "best seo company in noida, seo agency in noida sector 62, local seo services in noida, google map ranking services noida",
    h1: "Best SEO Company in Noida - Rank #1 on Google",
  },
  "/ads-and-campaigns": {
    title: "Performance Marketing & Paid Ads Agency in Noida | Brandmingo",
    description: "Scale your business revenue with high-converting Meta, Google, and LinkedIn ad campaigns. Certified media buyers delivering proven ROAS in Noida & Delhi NCR.",
    keywords: "performance marketing agency noida, google ads agency in noida, ppc company in noida, meta ads agency noida",
    h1: "Performance Marketing & Paid Ads Agency in Noida",
  },
  "/social-media-management": {
    title: "Social Media Marketing (SMM) Agency in Noida | Brandmingo",
    description: "Build an active brand community, viral awareness, and high engagement across Instagram, LinkedIn, YouTube, and Facebook with Brandmingo in Noida Sector 62.",
    keywords: "social media marketing agency in noida, smm company in noida, social media management delhi ncr",
    h1: "Social Media Marketing Agency in Noida",
  },
  "/ui-ux-audits": {
    title: "UI/UX Design & Website Audit Agency in Noida | Brandmingo",
    description: "Elevate user experience and conversion rates with modern UI/UX design, interactive Figma prototyping, and comprehensive website usability audits in Noida.",
    keywords: "ui ux design company in noida, website audit services noida, user experience agency delhi ncr",
    h1: "UI/UX Design & Website Audit Services in Noida",
  },
  "/ecommerce-management": {
    title: "Ecommerce Management & Marketplace Growth Agency in Noida | Brandmingo",
    description: "End-to-end ecommerce store management for Shopify, Amazon, Flipkart, and WooCommerce. Optimize product listings, PPC ads, and scale sales in Noida.",
    keywords: "ecommerce management noida, amazon account management noida, flipkart listing services noida, shopify store management noida",
    h1: "Ecommerce & Marketplace Account Management Agency in Noida",
  },
  "/graphic-designing": {
    title: "Creative Graphic Designing & Brand Identity Agency in Noida | Brandmingo",
    description: "Craft distinctive logos, product packaging, corporate brochures, and cohesive visual brand identities with Brandmingo's studio in Noida Sector 62.",
    keywords: "graphic design company in noida, logo design in noida sector 62, brand identity design noida",
    h1: "Creative Graphic Designing & Branding Agency in Noida",
  },
  "/wordpress": {
    title: "WordPress Website Development Company in Noida | Brandmingo",
    description: "Custom WordPress theme development, WooCommerce plugins, speed optimization, and secure CMS management by certified WordPress developers in Noida.",
    keywords: "wordpress development company in noida, custom wordpress theme noida, wordpress developers in noida",
    h1: "WordPress Website Development in Noida",
  },
  "/shopify": {
    title: "Shopify Store Development & Optimization Agency in Noida | Brandmingo",
    description: "Build lightning-fast, high-converting Shopify & Shopify Plus ecommerce stores with customized Liquid themes and checkout optimization in Noida.",
    keywords: "shopify development agency noida, shopify experts in noida, ecommerce shopify website noida",
    h1: "Shopify Store Development & Optimization Agency in Noida",
  },
  "/woocommerce": {
    title: "WooCommerce Development Services in Noida | Brandmingo",
    description: "Tailor-made WooCommerce ecommerce stores with custom payment gateways, inventory management, and fast hosting in Noida.",
    keywords: "woocommerce development noida, woocommerce store setup noida",
    h1: "WooCommerce Ecommerce Development Services",
  },
  "/react": {
    title: "React.js Web App Development Company in Noida | Brandmingo",
    description: "Enterprise-grade React.js frontends and Single Page Applications with fluid UX, server-side capabilities, and unmatched performance in Noida.",
    keywords: "react js development company noida, hire react developers in noida",
    h1: "React.js Web Application Development in Noida",
  },
  "/php": {
    title: "PHP & Laravel Custom Web Development Company in Noida | Brandmingo",
    description: "Robust, secure, and scalable PHP & Laravel web development services for complex portals and web applications in Noida Sector 62.",
    keywords: "php development company in noida, laravel developers in noida",
    h1: "PHP & Laravel Custom Web Development",
  },
  "/crm-development": {
    title: "Custom CRM & ERP Software Development in Noida | Brandmingo",
    description: "Custom CRM, ERP, and internal management tools engineered in Noida Sector 62 to streamline sales pipelines and operations.",
    keywords: "custom crm development noida, erp software company noida",
    h1: "Custom CRM & ERP Software Development in Noida",
  },
  "/performance-marketing": {
    title: "ROI-Focused Performance Marketing Agency in Noida | Brandmingo",
    description: "Data-driven performance marketing focused on customer acquisition cost reduction and maximum ROAS across Google, Meta, and LinkedIn.",
    keywords: "performance marketing agency noida, roas optimization noida",
    h1: "Performance Marketing Agency in Noida",
  },
  "/google-ads": {
    title: "Certified Google Ads (PPC) Management Agency in Noida | Brandmingo",
    description: "Google Search, Display, Shopping, and YouTube Ads managed by Google Certified Partner professionals in Noida.",
    keywords: "google ads agency in noida, google ads management noida, ppc company in noida",
    h1: "Google Ads (PPC) Management Agency in Noida",
  },
  "/facebook-instagram-ads": {
    title: "Meta (Facebook & Instagram) Ads Agency in Noida | Brandmingo",
    description: "High-converting creative campaigns, lookalike audience targeting, and funnel retargeting on Facebook and Instagram.",
    keywords: "meta ads agency noida, facebook ads company in noida, instagram advertising agency noida",
    h1: "Facebook & Instagram (Meta) Ads Agency in Noida",
  },
  "/organic-traffic": {
    title: "Organic Traffic Growth & Advanced SEO in Noida | Brandmingo",
    description: "Sustainable organic search traffic growth through deep keyword research, content clustering, and authoritative backlink acquisition in Noida.",
    keywords: "organic traffic growth noida, advanced seo agency noida",
    h1: "Organic Traffic Growth & Advanced SEO in Noida",
  },
  "/local-search-dominance": {
    title: "Local SEO & Google My Business Dominance in Noida | Brandmingo",
    description: "Capture nearby customers with Google Map 3-pack optimization, localized citations, and local search dominance in Noida Sector 62, 18, and Delhi NCR.",
    keywords: "local seo in noida, google my business optimization noida, gmb ranking services noida",
    h1: "Local SEO & Google Map 3-Pack Dominance in Noida",
  },
  "/amazon-management-services": {
    title: "Amazon Account Management & PPC Agency in Noida | Brandmingo",
    description: "Boost your Amazon sales with listing optimization, A+ content, Amazon PPC ads, and Buy Box strategies managed by Brandmingo.",
    keywords: "amazon account management noida, amazon ppc agency noida, amazon listing optimization",
    h1: "Amazon Account Management Services in Noida",
  },
  "/flipkart-management-services": {
    title: "Flipkart Account Management & Listing Services in Noida | Brandmingo",
    description: "Scale your revenue on Flipkart with professional catalog management, Flipkart ads, and keyword-rich listing optimization in Noida.",
    keywords: "flipkart management services noida, flipkart listing optimization noida",
    h1: "Flipkart Account Management & Listing Services",
  },
  "/shopsy-management-services": {
    title: "Shopsy Account Management Agency in Noida | Brandmingo",
    description: "Grow your e-commerce presence on Shopsy with expert cataloging, pricing strategies, and order fulfillment support in Noida.",
    keywords: "shopsy account management noida, shopsy seller agency delhi ncr",
    h1: "Shopsy Account Management Agency in Noida",
  },
  "/snapdeal-management-services": {
    title: "Snapdeal Account Management Services in Noida | Brandmingo",
    description: "Maximize your marketplace reach on Snapdeal with end-to-end seller account management and marketing by Brandmingo Noida.",
    keywords: "snapdeal management services noida, marketplace management delhi ncr",
    h1: "Snapdeal Account Management Services",
  },
  "/logo-design": {
    title: "Professional Logo Design Company in Noida Sector 62 | Brandmingo",
    description: "Unique, memorable vector logo design for startups and established enterprises. Crafted by expert graphic designers in Noida.",
    keywords: "logo design company in noida, professional logo designers noida sector 62",
    h1: "Professional Logo Design Company in Noida",
  },
  "/label-designing": {
    title: "Product Packaging & Label Design Agency in Noida | Brandmingo",
    description: "Stand out on retail shelves and online marketplaces with premium product packaging and label designs created by Brandmingo Noida.",
    keywords: "label design agency noida, product packaging design noida",
    h1: "Product Packaging & Label Design Agency in Noida",
  },
  "/corporate-identity-designing": {
    title: "Corporate Identity Design Services in Noida | Brandmingo",
    description: "Complete corporate identity packages including business cards, letterheads, brochures, and brand stationery in Noida Sector 62.",
    keywords: "corporate identity design noida, business stationery design noida",
    h1: "Corporate Identity Design Services in Noida",
  },
  "/brand-identity-design": {
    title: "Complete Brand Identity Design Agency in Noida | Brandmingo",
    description: "Turn your business into a recognizable brand with complete visual identity, logos, color theory, and marketing design systems in Noida.",
    keywords: "brand identity design noida, visual branding agency noida",
    h1: "Complete Brand Identity Design Agency in Noida",
  },
  "/linkedin-ads": {
    title: "B2B LinkedIn Ads Management Agency in Noida | Brandmingo",
    description: "Generate high-value B2B leads and enterprise clients with precision-targeted LinkedIn sponsored content and InMail ads in Noida.",
    keywords: "linkedin ads agency noida, b2b lead generation noida",
    h1: "B2B LinkedIn Ads Management Agency in Noida",
  },
  "/openai-ads": {
    title: "AI Advertising & Next-Gen Marketing in Noida | Brandmingo",
    description: "Leverage AI-driven advertising, predictive targeting, and automated marketing workflows to accelerate customer acquisition in Noida.",
    keywords: "ai advertising agency noida, ai digital marketing noida",
    h1: "AI Advertising & Next-Gen Marketing Solutions",
  },
  "/brand-awareness": {
    title: "Brand Awareness & PR Marketing Campaigns in Noida | Brandmingo",
    description: "Amplify your brand voice, reach millions of potential customers, and build lasting credibility with viral campaigns in Noida.",
    keywords: "brand awareness agency noida, pr marketing noida",
    h1: "Brand Awareness & PR Marketing Campaigns in Noida",
  },
  "/strategy-planning": {
    title: "Digital Marketing Strategy & Growth Planning in Noida | Brandmingo",
    description: "Custom digital roadmaps, competitor intelligence, and market expansion strategies engineered for sustainable ROI in Noida.",
    keywords: "marketing strategy consultant noida, digital growth planning noida",
    h1: "Digital Marketing Strategy & Growth Planning in Noida",
  },
  "/content-creation-publishing": {
    title: "Content Creation & Copywriting Agency in Noida | Brandmingo",
    description: "High-converting SEO blog posts, website copywriting, social media creative content, and video scripts produced in Noida.",
    keywords: "content creation agency noida, seo copywriting services noida",
    h1: "Content Creation & Copywriting Agency in Noida",
  },
  "/engagement-growth": {
    title: "Social Engagement & Audience Growth Agency in Noida | Brandmingo",
    description: "Grow active followers, boost comments and shares, and foster loyal customer communities across digital channels in Noida.",
    keywords: "social media engagement agency noida, audience growth company noida",
    h1: "Social Engagement & Audience Growth Agency in Noida",
  },
  "/custom-web-design": {
    title: "Custom Web Design Company in Noida | Brandmingo",
    description: "Bespoke, pixel-perfect website designs crafted for conversions, responsive across all screen sizes, built by creative web designers in Noida.",
    keywords: "custom web design noida, website designer in noida",
    h1: "Custom Web Design Company in Noida",
  },
  "/corporate-branding": {
    title: "Corporate Branding Agency in Noida & Delhi NCR | Brandmingo",
    description: "Build an unforgettable corporate identity with complete brand guidelines, typography, color palettes, and brand voice developed by Brandmingo Noida.",
    keywords: "corporate branding agency noida, brand identity design delhi ncr",
    h1: "Corporate Branding Agency in Noida & Delhi NCR",
  },
  "/mobile-app-design": {
    title: "Mobile App UI/UX Design Agency in Noida | Brandmingo",
    description: "Intuitive iOS and Android mobile app UI/UX design with interactive wireframing, user flows, and Figma design systems in Noida.",
    keywords: "mobile app design noida, app ui ux designers noida",
    h1: "Mobile App UI/UX Design Agency in Noida",
  },
  "/product-design": {
    title: "Digital Product Design & Prototyping in Noida | Brandmingo",
    description: "End-to-end digital product design for SaaS apps, web portals, and mobile products with scalable design systems in Noida.",
    keywords: "product design agency noida, saas product design noida",
    h1: "Digital Product Design & Prototyping in Noida",
  },
};

function generatePrerender() {
  const templatePath = path.join(DIST_DIR, "index.html");
  if (!fs.existsSync(templatePath)) {
    console.error(`❌ Template not found at: ${templatePath}. Run vite build first.`);
    process.exit(1);
  }

  const baseHtml = fs.readFileSync(templatePath, "utf-8");
  let generatedCount = 0;

  for (const [route, data] of Object.entries(ROUTES_DATA)) {
    const canonicalUrl = `${BASE_URL}${route === "/" ? "/" : route}`;
    let html = baseHtml;

    // 1. Title replacement
    html = html.replace(/<title>.*?<\/title>/is, `<title>${data.title}</title>`);

    // 2. Meta description replacement
    if (html.includes('name="description"')) {
      html = html.replace(
        /<meta name="description" content=".*?" \/>/is,
        `<meta name="description" content="${data.description.replace(/"/g, '&quot;')}" />`
      );
    }

    // 3. Meta keywords replacement
    if (html.includes('name="keywords"')) {
      html = html.replace(
        /<meta name="keywords" content=".*?" \/>/is,
        `<meta name="keywords" content="${data.keywords.replace(/"/g, '&quot;')}" />`
      );
    }

    // 4. Canonical tag replacement (CRUCIAL: Fixes the 12+ duplicate canonical issue)
    html = html.replace(
      /<link rel="canonical"[^>]*?>/is,
      `<link rel="canonical" id="canonical-tag" href="${canonicalUrl}" />`
    );

    // 5. OpenGraph Tags
    html = html.replace(
      /<meta property="og:title" content=".*?" \/>/is,
      `<meta property="og:title" content="${data.title.replace(/"/g, '&quot;')}" />`
    );
    html = html.replace(
      /<meta property="og:description" content=".*?" \/>/is,
      `<meta property="og:description" content="${data.description.replace(/"/g, '&quot;')}" />`
    );
    html = html.replace(
      /<meta property="og:url" content=".*?" \/>/is,
      `<meta property="og:url" content="${canonicalUrl}" />`
    );

    // 6. Twitter Tags
    html = html.replace(
      /<meta name="twitter:title" content=".*?" \/>/is,
      `<meta name="twitter:title" content="${data.title.replace(/"/g, '&quot;')}" />`
    );
    html = html.replace(
      /<meta name="twitter:description" content=".*?" \/>/is,
      `<meta name="twitter:description" content="${data.description.replace(/"/g, '&quot;')}" />`
    );

    // 7. Inject Route-Specific FAQ & Breadcrumb Schema
    let extraSchemas = [];
    if (route !== "/") {
      extraSchemas.push({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": `${BASE_URL}/`,
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": data.title.split("|")[0].trim(),
            "item": canonicalUrl,
          },
        ],
      });
    }

    if (data.faqs && data.faqs.length > 0) {
      extraSchemas.push({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": data.faqs.map((f) => ({
          "@type": "Question",
          "name": f.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": f.a,
          },
        })),
      });
    }

    if (extraSchemas.length > 0) {
      const schemaScripts = extraSchemas
        .map((s) => `\n    <script type="application/ld+json">${JSON.stringify(s)}</script>`)
        .join("");
      html = html.replace("</head>", `${schemaScripts}\n  </head>`);
    }

    // 8. Crawlable semantic content inside <div id="root"> (Fixes Discovered - currently not indexed)
    const crawlableFallback = `
    <div id="root">
      <header style="padding: 40px 20px; text-align: center; background: #0b0b0f; color: #fff;">
        <h1 style="color: #ff6b1e; font-size: 32px; font-weight: 800; margin-bottom: 12px;">${data.h1 || data.title}</h1>
        <p style="font-size: 16px; max-width: 800px; margin: 0 auto; color: rgba(255,255,255,0.75); line-height: 1.6;">${data.description}</p>
      </header>
      <div class="bm-initial-bar">
        <div class="bm-initial-progress"></div>
      </div>
    </div>`;

    html = html.replace(/<div id="root">[\s\S]*?<\/div>\s*<script/is, crawlableFallback.trim() + "\n    <script");

    // 9. Write to file
    if (route === "/") {
      fs.writeFileSync(path.join(DIST_DIR, "index.html"), html, "utf-8");
    } else {
      const routeDir = path.join(DIST_DIR, route.replace(/^\//, ""));
      if (!fs.existsSync(routeDir)) {
        fs.mkdirSync(routeDir, { recursive: true });
      }
      fs.writeFileSync(path.join(routeDir, "index.html"), html, "utf-8");
    }

    generatedCount++;
  }

  console.log(`✅ [SSG Prerender] Successfully generated ${generatedCount} static route pages in dist/!`);
}

generatePrerender();
