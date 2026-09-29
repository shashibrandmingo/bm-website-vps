import{a as e}from"./rolldown-runtime-COnpUsM8.js";import{d as t,l as n}from"./animations-BJc3zUQd.js";import{Ct as r}from"./vendor-CfdKfBq_.js";import{n as i}from"./popup-DfbqftR9.js";var a=e(t(),1),o=n(),s=[{id:`enterprise`,title:`Enterprise Application Development`,desc:`As a leading ReactJS web development company, we build stable and easy-to-maintain enterprise apps.`,points:[`Develop secure and organized front ends for large systems`,`Create modular components for a consistent user experience`,`Support long-term scalability and smooth performance`,`Deliver solutions that grow with your business needs`]},{id:`legacy`,title:`Legacy Application Modernization`,desc:`Transform your outdated applications into modern, high-performance systems using ReactJS.`,points:[`Migrate old codebases to modern React architecture`,`Improve performance and user experience significantly`,`Reduce maintenance costs and technical debt`,`Ensure compatibility with modern devices and browsers`]},{id:`pwa`,title:`React PWA Development`,desc:`Build Progressive Web Apps that offer a native app-like experience directly in the web browser.`,points:[`Ensure offline functionality and fast loading times`,`Enable push notifications to increase user engagement`,`Provide a consistent experience across all devices`,`Eliminate the need for app store downloads`]},{id:`api`,title:`Third-Party APIs Integration`,desc:`Enhance your React applications by seamlessly connecting them with powerful third-party services.`,points:[`Integrate payment gateways, social media, and maps`,`Connect with CRM, ERP, and marketing automation tools`,`Ensure secure and efficient data exchange`,`Expand application functionality without rebuilding`]},{id:`ecommerce`,title:`Ecommerce Development Solutions`,desc:`Create dynamic and engaging online stores that drive sales and provide a superior shopping experience.`,points:[`Build fast-loading product catalogs and search features`,`Develop intuitive shopping carts and checkout processes`,`Integrate secure payment and shipping solutions`,`Optimize for mobile devices and search engines`]},{id:`spa`,title:`React SPA Development`,desc:`Our team is skilled at delivering focused, efficient ReactJS web development services for single-page applications (SPAs).`,points:[`Create dynamic screens without full page reloads`,`Improve overall speed and usability`,`Support real-time interactions and modern UI patterns`,`Deliver lightweight and consistent interfaces`]},{id:`migration`,title:`ReactJS Migration`,desc:`Smoothly transition your existing web applications to ReactJS with minimal disruption to your business.`,points:[`Analyze existing application structure and code`,`Develop a detailed migration plan and timeline`,`Execute migration with data integrity and security`,`Provide post-migration support and optimization`]},{id:`payment`,title:`Payment Gateway Integration`,desc:`Integrate robust and secure payment processing solutions directly into your React applications.`,points:[`Support multiple payment methods (credit cards, UPI, wallets)`,`Ensure PCI compliance and secure data handling`,`Provide a seamless and trustworthy checkout experience`,`Integrate with leading payment gateways (Stripe, Razorpay, PayPal)`]}],c=()=>{let[e,t]=(0,a.useState)(s[0]),[n,r]=(0,a.useState)(s[0].id),i=e=>{r(t=>t===e?null:e)};return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)(`div`,{className:`react-expertise-section`,children:[(0,o.jsxs)(`div`,{className:`auto-container`,children:[(0,o.jsx)(`h3`,{className:`mb-5 text-center section-main-h3`,children:`Our ReactJS Development Expertise`}),(0,o.jsxs)(`div`,{className:`react-expertise-grid re-desktop-only`,children:[(0,o.jsx)(`div`,{className:`react-expertise-tabs`,children:s.map(n=>(0,o.jsxs)(`button`,{className:`react-expertise-tab-btn ${e.id===n.id?`active`:``}`,onClick:()=>t(n),children:[(0,o.jsx)(`h3`,{className:`tab-btn-title`,children:n.title}),(0,o.jsx)(`span`,{className:`arrow-icon`,children:(0,o.jsx)(`i`,{className:`fas fa-arrow-right`})})]},n.id))}),(0,o.jsxs)(`div`,{className:`react-expertise-content`,children:[(0,o.jsx)(`h3`,{className:`react-expertise-content-title`,children:e.title}),(0,o.jsx)(`p`,{className:`react-expertise-content-desc`,children:e.desc}),(0,o.jsx)(`ul`,{className:`react-expertise-content-list`,children:e.points.map((e,t)=>(0,o.jsx)(`li`,{children:e},t))})]},e.id)]}),(0,o.jsx)(`div`,{className:`re-accordion re-mobile-only`,children:s.map(e=>{let t=n===e.id;return(0,o.jsxs)(`div`,{className:`re-accordion-item ${t?`open`:``}`,children:[(0,o.jsxs)(`button`,{className:`re-accordion-header`,onClick:()=>i(e.id),children:[(0,o.jsx)(`span`,{className:`re-acc-title`,children:e.title}),(0,o.jsx)(`span`,{className:`re-acc-icon`,children:(0,o.jsx)(`i`,{className:`fas fa-chevron-${t?`up`:`down`}`})})]}),t&&(0,o.jsxs)(`div`,{className:`re-accordion-body`,children:[(0,o.jsx)(`p`,{className:`re-acc-desc`,children:e.desc}),(0,o.jsx)(`ul`,{className:`re-acc-list`,children:e.points.map((e,t)=>(0,o.jsx)(`li`,{children:e},t))})]})]},e.id)})})]}),(0,o.jsx)(`style`,{children:`
          /* ─────────────────────────────────────────
             REACT EXPERTISE — Desktop unchanged
             Mobile: accordion replaces grid
          ───────────────────────────────────────── */

          .react-expertise-section {
            background-color: var(--body-bg);
            padding: 100px 0;
          }

          /* visibility helpers */
          .re-desktop-only { display: grid; }
          .re-mobile-only  { display: none; }

          /* ── DESKTOP GRID (unchanged) ── */
          .react-expertise-grid {
            grid-template-columns: 1fr 1.2fr;
            gap: 30px;
            align-items: stretch;
          }

          .react-expertise-tabs {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 15px;
          }

          .react-expertise-tab-btn {
            background-color: var(--bg-color);
            border: 1px solid var(--border-color2-rgba);
            border-radius: 12px;
            padding: 25px 20px;
            color: rgba(255, 255, 255, 0.5);
            text-align: left;
            cursor: pointer;
            transition: all 0.3s ease;
            display: flex;
            justify-content: space-between;
            align-items: center;
            line-height: 1.3;
            height: 100%;
          }

          .tab-btn-title {
            font-family: var(--heading-font-family) !important;
            font-size: var(--body-font-size) !important;
            font-weight: 400 !important;
            color: inherit;
            margin: 0;
            max-width: 85%;
          }

          .react-expertise-tab-btn:hover {
            background-color: #1a1a1a;
            border-color: rgba(var(--theme-color1-rgb), 0.3);
            color: #fff;
          }

          .react-expertise-tab-btn.active {
            background-color: var(--bg-color);
            border: 1px solid var(--theme-color1);
            color: #fff;
            box-shadow: 0 8px 25px rgba(var(--theme-color1-rgb), 0.15);
          }

          .react-expertise-tab-btn.active .tab-btn-title {
            font-weight: 700 !important;
          }

          .react-expertise-tab-btn .arrow-icon {
            font-size: 14px;
            color: var(--theme-color1);
            opacity: 0.3;
            transition: 0.3s ease;
          }

          .react-expertise-tab-btn.active .arrow-icon {
            opacity: 1;
            transform: rotate(-45deg);
          }

          .react-expertise-content {
            background-color: var(--bg-color);
            border-radius: 20px;
            padding: 50px;
            border: 1px solid var(--border-color2-rgba);
            display: flex;
            flex-direction: column;
            justify-content: center;
            height: 100%;
          }

          .react-expertise-content-title {
            font-family: var(--heading-font-family);
            font-size: var(--h3-font-size);
            color: var(--headings-color);
            margin-bottom: 20px;
            font-weight: 600;
            border-left: 4px solid var(--theme-color1);
            padding-left: 20px;
          }

          .react-expertise-content-desc {
            color: var(--text-color);
            opacity: 0.7;
            font-size: var(--body-font-size);
            line-height: var(--body-line-height);
            margin-bottom: 30px;
            font-family: var(--body-font-family);
          }

          .react-expertise-content-list {
            list-style: none;
            padding: 0;
            display: flex;
            flex-direction: column;
            gap: 15px;
          }

          .react-expertise-content-list li {
            font-size: 15px;
            color: var(--text-color);
            opacity: 0.9;
            display: flex;
            align-items: start;
            gap: 12px;
            font-family: var(--body-font-family);
          }

          .react-expertise-content-list li::before {
            content: '✓';
            color: var(--theme-color1);
            font-weight: bold;
          }

          /* tablet: stack columns */
          @media (max-width: 1200px) {
            .react-expertise-grid { grid-template-columns: 1fr; }
          }

          /* ── MOBILE: swap to accordion ── */
          @media (max-width: 768px) {
            .react-expertise-section { padding: 60px 0; }

            .re-desktop-only { display: none !important; }
            .re-mobile-only  { display: flex; flex-direction: column; gap: 10px; }

            /* accordion item */
            .re-accordion-item {
              border: 1px solid var(--border-color2-rgba);
              border-radius: 12px;
              overflow: hidden;
              transition: border-color 0.3s ease;
            }
            .re-accordion-item.open {
              border-color: var(--theme-color1);
            }

            /* header */
            .re-accordion-header {
              width: 100%;
              background-color: var(--bg-color);
              border: none;
              padding: 18px 20px;
              display: flex;
              justify-content: space-between;
              align-items: center;
              gap: 12px;
              cursor: pointer;
              text-align: left;
            }
            .re-accordion-item.open .re-accordion-header {
              border-bottom: 1px solid var(--border-color2-rgba);
            }

            .re-acc-title {
              font-family: var(--heading-font-family);
              font-size: 15px;
              font-weight: 600;
              color: #fff;
              line-height: 1.4;
            }

            .re-acc-icon {
              font-size: 13px;
              color: var(--theme-color1);
              flex-shrink: 0;
            }

            /* body */
            .re-accordion-body {
              background-color: var(--bg-color);
              padding: 20px 20px 24px;
            }

            .re-acc-desc {
              font-family: var(--body-font-family);
              font-size: 14px;
              color: var(--text-color);
              opacity: 0.75;
              line-height: var(--body-line-height);
              margin-bottom: 16px;
            }

            .re-acc-list {
              list-style: none;
              padding: 0;
              margin: 0;
              display: flex;
              flex-direction: column;
              gap: 12px;
            }

            .re-acc-list li {
              font-family: var(--body-font-family);
              font-size: 14px;
              color: var(--text-color);
              display: flex;
              align-items: flex-start;
              gap: 10px;
              line-height: 1.5;
            }

            .re-acc-list li::before {
              content: "✓";
              color: var(--theme-color1);
              font-weight: bold;
              flex-shrink: 0;
            }
          }
        `})]})})},l=()=>(0,o.jsxs)(`svg`,{viewBox:`0 0 300 300`,xmlns:`http://www.w3.org/2000/svg`,style:{width:`100%`,height:`100%`},children:[(0,o.jsxs)(`defs`,{children:[(0,o.jsxs)(`radialGradient`,{id:`coreg`,cx:`50%`,cy:`50%`,r:`50%`,children:[(0,o.jsx)(`stop`,{offset:`0%`,stopColor:`#FF5D00`}),(0,o.jsx)(`stop`,{offset:`100%`,stopColor:`#ff8c42`})]}),(0,o.jsxs)(`filter`,{id:`glow`,children:[(0,o.jsx)(`feGaussianBlur`,{stdDeviation:`3`,result:`blur`}),(0,o.jsxs)(`feMerge`,{children:[(0,o.jsx)(`feMergeNode`,{in:`blur`}),(0,o.jsx)(`feMergeNode`,{in:`SourceGraphic`})]})]})]}),(0,o.jsx)(`ellipse`,{cx:`150`,cy:`150`,rx:`135`,ry:`48`,fill:`none`,stroke:`#FF5D00`,strokeWidth:`2.5`,opacity:`0.9`,filter:`url(#glow)`}),(0,o.jsx)(`ellipse`,{cx:`150`,cy:`150`,rx:`135`,ry:`48`,fill:`none`,stroke:`#FF5D00`,strokeWidth:`2.5`,opacity:`0.9`,transform:`rotate(60 150 150)`,filter:`url(#glow)`}),(0,o.jsx)(`ellipse`,{cx:`150`,cy:`150`,rx:`135`,ry:`48`,fill:`none`,stroke:`#FF5D00`,strokeWidth:`2.5`,opacity:`0.9`,transform:`rotate(120 150 150)`,filter:`url(#glow)`}),(0,o.jsx)(`circle`,{cx:`150`,cy:`150`,r:`18`,fill:`url(#coreg)`,filter:`url(#glow)`}),(0,o.jsx)(`circle`,{cx:`150`,cy:`150`,r:`10`,fill:`#fff`,opacity:`0.9`})]}),u=({text:e,fontFamily:t})=>(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(`style`,{children:`
      @property --gt-bg1x { syntax: "<number>"; inherits: true; initial-value: 25; }
      @property --gt-bg2x { syntax: "<number>"; inherits: true; initial-value: 35; }
      @property --gt-bg2y { syntax: "<number>"; inherits: true; initial-value: 40; }
      @property --gt-bg3x { syntax: "<number>"; inherits: true; initial-value: 45; }
      @property --gt-bg3y { syntax: "<number>"; inherits: true; initial-value: 20; }
      .gt-text {
        font-family: ${t||`var(--heading-font-family)`};
        font-size: clamp(48px, 9vw, 92px);
        font-weight: 700;
        line-height: 1;
        letter-spacing: -0.02em;
        margin: 0;
        display: block;
        width: 100%;
        mix-blend-mode: lighten;
        background:
          url("data:image/svg+xml,%3Csvg viewBox='0 0 600 600' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E"),
          conic-gradient(from 120deg at calc(var(--gt-bg1x) * 1%) 85%, hsl(15deg 100% 8%), hsl(20deg 100% 30%), hsl(25deg 100% 55%), hsl(30deg 100% 65%), hsl(35deg 95% 72%), hsl(40deg 100% 78%), hsl(45deg 100% 85%), hsl(38deg 100% 72%), hsl(28deg 100% 58%), hsl(20deg 100% 40%), hsl(15deg 100% 10%)),
          radial-gradient(ellipse at calc(var(--gt-bg2x) * 1%) calc(var(--gt-bg2y) * 1%), rgba(255,220,180,0.98) 10%, transparent 38%),
          radial-gradient(ellipse at calc(var(--gt-bg3x) * 1%) calc(var(--gt-bg3y) * 1%), hsl(30deg 100% 65%), transparent 38%);
        background-size: 500px, cover, cover, cover;
        background-blend-mode: color-burn;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        animation: gt-shift 18s linear infinite alternate;
      }
      @keyframes gt-shift {
        0%   { --gt-bg1x:25; --gt-bg2x:35; --gt-bg2y:40; --gt-bg3x:45; --gt-bg3y:20; }
        25%  { --gt-bg1x:15; --gt-bg2x:75; --gt-bg2y:25; --gt-bg3x:30; --gt-bg3y:10; }
        50%  { --gt-bg1x:8;  --gt-bg2x:20; --gt-bg2y:20; --gt-bg3x:40; --gt-bg3y:45; }
        75%  { --gt-bg1x:38; --gt-bg2x:55; --gt-bg2y:8;  --gt-bg3x:18; --gt-bg3y:15; }
        100% { --gt-bg1x:25; --gt-bg2x:35; --gt-bg2y:40; --gt-bg3x:45; --gt-bg3y:20; }
      }
    `}),(0,o.jsx)(`span`,{className:`gt-text`,children:e})]}),d=()=>{let[e,t]=a.useState(`var(--heading-font-family)`);return(0,a.useEffect)(()=>{let e=getComputedStyle(document.documentElement).getPropertyValue(`--heading-font-family`).trim();e&&t(e)},[]),(0,o.jsx)(`section`,{className:`rdh-section`,children:(0,o.jsx)(`div`,{className:`auto-container`,children:(0,o.jsxs)(`div`,{className:`rdh-grid`,children:[(0,o.jsxs)(`div`,{className:`rdh-top-block`,children:[(0,o.jsx)(`div`,{className:`rdh-eyebrow`,children:`Premium Solution`}),(0,o.jsx)(`h1`,{className:`title`,children:`React`}),(0,o.jsx)(`div`,{className:`rdh-liquid-wrap`,children:(0,o.jsx)(u,{text:`Development`,fontFamily:e})}),(0,o.jsxs)(`ul`,{className:`rdh-breadcrumb`,children:[(0,o.jsx)(`li`,{children:(0,o.jsx)(`a`,{href:`/`,children:`Home`})}),(0,o.jsx)(`li`,{className:`sep`,children:`/`}),(0,o.jsx)(`li`,{className:`active`,children:`React Development`})]})]}),(0,o.jsxs)(`div`,{className:`rdh-right`,children:[(0,o.jsx)(`div`,{className:`rdh-ring-1`}),(0,o.jsx)(`div`,{className:`rdh-ring-2`}),(0,o.jsx)(`div`,{className:`rdh-img-glow`}),(0,o.jsx)(`div`,{className:`rdh-atom-wrap`,children:(0,o.jsx)(l,{})}),(0,o.jsxs)(`div`,{className:`rdh-chip rdh-chip-1`,children:[(0,o.jsx)(`i`,{className:`fas fa-bolt`}),` Component-Driven`]}),(0,o.jsxs)(`div`,{className:`rdh-chip rdh-chip-2`,children:[(0,o.jsx)(`i`,{className:`fas fa-code`}),` TypeScript Ready`]}),(0,o.jsxs)(`div`,{className:`rdh-chip rdh-chip-3`,children:[(0,o.jsx)(`i`,{className:`fas fa-tachometer-alt`}),` 3X Faster Apps`]}),(0,o.jsx)(`span`,{className:`rdh-vert-label`,children:`React · PWA · SPA · TypeScript`})]}),(0,o.jsxs)(`div`,{className:`rdh-bottom-block`,children:[(0,o.jsx)(`p`,{className:`rdh-desc`,children:`Transform your digital presence with responsive, scalable, and dynamic ReactJS SPAs, PWAs, and web apps that convert 3X better. We combine technical excellence with premium design.`}),(0,o.jsxs)(`div`,{className:`rdh-btn-row`,children:[(0,o.jsxs)(`a`,{href:`/`,className:`rdh-btn-primary`,onClick:e=>{e.preventDefault(),i()},children:[`Discuss Your Business Requirements`,(0,o.jsx)(`i`,{className:`fas fa-arrow-right`})]}),(0,o.jsxs)(r,{to:`/portfolio`,className:`rdh-btn-ghost`,children:[(0,o.jsx)(`i`,{className:`fas fa-play`}),`View Our Work`]})]}),(0,o.jsxs)(`div`,{className:`rdh-badges`,children:[(0,o.jsxs)(`div`,{className:`rdh-badge`,children:[(0,o.jsx)(`img`,{src:`/Cloudinary-images/f-500_icvdap.svg`,className:`rdh-badge-logo`,alt:`Fortune 500`}),(0,o.jsxs)(`div`,{className:`rdh-badge-text`,children:[(0,o.jsx)(`strong`,{children:`Fortune 500`}),(0,o.jsx)(`span`,{children:`Trusted by Companies`})]})]}),(0,o.jsxs)(`div`,{className:`rdh-badge`,children:[(0,o.jsx)(`img`,{src:`/Cloudinary-images/ica_hx4ujj.svg`,className:`rdh-badge-logo`,alt:`ICA`}),(0,o.jsxs)(`div`,{className:`rdh-badge-text`,children:[(0,o.jsx)(`strong`,{children:`ICA Certified`}),(0,o.jsx)(`span`,{children:`International Compliance`})]})]}),(0,o.jsxs)(`div`,{className:`rdh-badge`,children:[(0,o.jsx)(`img`,{src:`/Cloudinary-images/topp-dev_l9jcyb.png`,className:`rdh-badge-logo`,alt:`Top Devs`}),(0,o.jsxs)(`div`,{className:`rdh-badge-text`,children:[(0,o.jsx)(`strong`,{children:`Top Developers`}),(0,o.jsx)(`span`,{children:`Award Recognised`})]})]})]})]})]})})})};export{c as n,d as t};