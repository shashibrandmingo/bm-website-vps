import{a as e}from"./rolldown-runtime-COnpUsM8.js";import{d as t,l as n}from"./animations-BJc3zUQd.js";import{Ct as r,kt as i}from"./vendor-CfdKfBq_.js";import{n as a}from"./popup-DfbqftR9.js";import{t as o}from"./SEO-CJUyn_hk.js";var s=e(t(),1),c=n(),l=({openPopup:e})=>((0,s.useEffect)(()=>{},[]),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(`style`,{children:`
        .wd-hero {
          background-color: var(--body-bg);
          padding: 130px 0 90px;
          position: relative;
          overflow: hidden;
        }

        .wd-canvas {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 0;
        }

        .wd-inner {
          position: relative;
          z-index: 2;
          max-width: var(--container-width);
          margin: 0 auto;
          padding: 0 30px;
        }

        /* ── HERO GRID ── */
        .wd-hero-grid {
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 64px;
          align-items: center;
        }

        /* ── LEFT CONTENT ── */
        /* CHANGE 1: white text + orange border on tagline */
        .wd-tagline {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #fff;
          font-weight: 600;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 22px;
          border: 1px solid var(--theme-color1);
          padding: 6px 14px;
          border-radius: 15px;
        }

        .wd-tagline i { font-size: 11px; color: var(--theme-color1); }

        .wd-hero-content h3 {
          margin-bottom: 24px;
          line-height: var(--line-height-heading);
        }

        .wd-title-accent {
          color: var(--theme-color1);
        }

        .wd-description {
          color: var(--text-color);
          opacity: 0.7;
          max-width: 520px;
          margin-bottom: 42px;
          font-size: var(--body-font-size);
          line-height: var(--body-line-height);
        }

        /* ── ENTRY ANIMATIONS ── */
        @keyframes wd-fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        @keyframes wd-shimmer {
          0%   { transform: translateX(-100%) skewX(-15deg); }
          100% { transform: translateX(220%) skewX(-15deg); }
        }

        @keyframes wd-pulse-ring {
          0%   { box-shadow: 0 0 0 0 rgba(255,107,30,0.45); }
          70%  { box-shadow: 0 0 0 10px rgba(255,107,30,0); }
          100% { box-shadow: 0 0 0 0 rgba(255,107,30,0); }
        }

        .wd-tagline { animation: wd-fadeUp 0.55s ease both; animation-delay: 0.05s; }
        .wd-hero-content h3 { animation: wd-fadeUp 0.6s ease both; animation-delay: 0.15s; }
        .wd-description { animation: wd-fadeUp 0.6s ease both; animation-delay: 0.25s; }
        .wd-btn-group { animation: wd-fadeUp 0.6s ease both; animation-delay: 0.35s; }

        /* ── BUTTONS ── */
        .wd-btn-group {
          display: flex;
          gap: 14px;
          flex-wrap: nowrap;
          align-items: center;
        }

        .wd-btn-primary {
          background: var(--theme-color1);
          color: #fff;
          padding: 16px 28px;
          border-radius: 6px;
          font-weight: 600;
          font-size: 15px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          text-decoration: none;
          transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;
          border: 2px solid transparent;
          position: relative;
          overflow: hidden;
          white-space: nowrap;
          animation: wd-pulse-ring 2.4s ease-out 1.2s infinite;
        }

        .wd-btn-primary::before {
          content: '';
          position: absolute;
          top: 0; left: 0;
          width: 40%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.22), transparent);
          transform: translateX(-100%) skewX(-15deg);
          animation: wd-shimmer 2.6s ease 1.4s infinite;
        }

        .wd-btn-primary:hover {
          transform: translateY(-3px) scale(1.03);
          box-shadow: 0 16px 34px rgba(255,107,30,0.38);
          background: #e85c0d;
        }

        .wd-btn-secondary {
          background: transparent;
          color: var(--headings-color);
          padding: 14px 22px;
          border-radius: 6px;
          font-weight: 600;
          font-size: 15px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          text-decoration: none;
          transition: all 0.3s ease;
          border: 2px solid rgba(255,255,255,0.18);
          white-space: nowrap;
          position: relative;
          overflow: hidden;
        }

        .wd-btn-secondary::after {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(255,107,30,0.06);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .wd-btn-secondary:hover {
          border-color: var(--theme-color1);
          color: var(--theme-color1);
          transform: translateY(-3px);
        }

        .wd-btn-secondary:hover::after { opacity: 1; }

        .wd-play-icon {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: var(--theme-color1);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: background 0.3s ease, transform 0.3s ease;
        }

        .wd-play-icon i {
          font-size: 13px;
          color: #fff;
        }

        .wd-btn-secondary:hover .wd-play-icon {
          background: #e85c0d;
          transform: scale(1.1) rotate(-6deg);
        }

        /* ── RIGHT VISUAL ── */
        .wd-hero-visual { position: relative; }

        .wd-device-wrapper {
          position: relative;
          display: flex;
          align-items: flex-end;
          gap: -20px;
        }

        .wd-laptop {
          width: 100%;
          border-radius: 14px;
          background: #0f0f0f;
          border: 1px solid rgba(255,255,255,0.08);
          box-shadow: 0 40px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,107,30,0.05);
          overflow: hidden;
          position: relative;
        }

        .wd-laptop-bar {
          background: #1a1a1a;
          padding: 10px 16px;
          display: flex;
          align-items: center;
          gap: 12px;
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }

        .wd-dots { display: flex; gap: 6px; }
        .wd-dot-circle {
          width: 10px; height: 10px; border-radius: 50%;
        }
        .wd-dot-r { background: #ff5f56; }
        .wd-dot-y { background: #ffbd2e; }
        .wd-dot-g { background: #27c93f; }

        .wd-url-bar {
          flex: 1;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 4px;
          height: 22px;
          display: flex;
          align-items: center;
          padding: 0 10px;
          gap: 6px;
        }

        .wd-url-bar-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: var(--theme-color1);
          opacity: 0.7;
          flex-shrink: 0;
        }

        .wd-url-text {
          font-size: 10px;
          color: rgba(255,255,255,0.3);
          font-family: monospace;
        }

        .wd-laptop-nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 20px;
          border-bottom: 1px solid rgba(255,255,255,0.04);
        }

        .wd-mock-logo {
          font-size: 13px;
          font-weight: 700;
          color: #fff;
          letter-spacing: 0.5px;
        }

        .wd-mock-logo span { color: var(--theme-color1); }

        .wd-mock-nav-links {
          display: flex;
          gap: 18px;
          list-style: none;
          margin: 0; padding: 0;
        }

        .wd-mock-nav-links li {
          font-size: 10px;
          color: rgba(255,255,255,0.45);
        }

        .wd-mock-cta-small {
          background: var(--theme-color1);
          color: #fff;
          font-size: 10px;
          font-weight: 600;
          padding: 6px 14px;
          border-radius: 4px;
        }

        .wd-laptop-body {
          background: linear-gradient(145deg, #111 0%, #0d0d0d 100%);
          padding: 28px 20px 24px;
          min-height: 260px;
          position: relative;
          overflow: hidden;
        }

        .wd-laptop-body::before {
          content: '';
          position: absolute;
          top: -40px; right: -40px;
          width: 220px; height: 220px;
          background: radial-gradient(circle, rgba(255,107,30,0.18) 0%, transparent 70%);
          pointer-events: none;
        }

        .wd-mock-heading {
          font-size: 20px;
          font-weight: 700;
          color: #fff;
          line-height: 1.2;
          margin-bottom: 8px;
          font-style: italic;
          max-width: 200px;
        }

        .wd-mock-heading span { color: var(--theme-color1); }

        .wd-mock-sub {
          font-size: 10px;
          color: rgba(255,255,255,0.4);
          margin-bottom: 18px;
          max-width: 200px;
          line-height: 1.5;
        }

        .wd-mock-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: var(--theme-color1);
          color: #fff;
          font-size: 10px;
          font-weight: 600;
          padding: 8px 16px;
          border-radius: 4px;
          margin-bottom: 22px;
        }

        .wd-mock-btn i { font-size: 9px; }

        /* stats row inside mockup */
        .wd-mock-stats {
          display: grid;
          grid-template-columns: repeat(4,1fr);
          gap: 8px;
          border-top: 1px solid rgba(255,255,255,0.06);
          padding-top: 16px;
        }

        .wd-mock-stat {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .wd-mock-stat-val {
          font-size: 15px;
          font-weight: 700;
          color: #fff;
        }

        .wd-mock-stat-lbl {
          font-size: 8.5px;
          color: rgba(255,255,255,0.35);
          line-height: 1.3;
        }

        /* phone mock */
        .wd-phone {
          position: absolute;
          bottom: -12px;
          right: -32px;
          width: 130px;
          border-radius: 14px;
          background: #111;
          border: 1px solid rgba(255,255,255,0.1);
          box-shadow: 0 20px 50px rgba(0,0,0,0.7);
          overflow: hidden;
          z-index: 3;
        }

        .wd-phone-notch {
          background: #000;
          height: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .wd-phone-notch-bar {
          width: 30px; height: 3px;
          background: #222; border-radius: 4px;
        }

        .wd-phone-body {
          padding: 12px 10px;
          background: linear-gradient(145deg, #111, #0d0d0d);
          min-height: 180px;
          position: relative;
          overflow: hidden;
        }

        .wd-phone-body::before {
          content: '';
          position: absolute;
          top: -20px; right: -20px;
          width: 100px; height: 100px;
          background: radial-gradient(circle, rgba(255,107,30,0.2) 0%, transparent 70%);
          pointer-events: none;
        }

        .wd-phone-logo {
          font-size: 9px;
          font-weight: 700;
          color: #fff;
          margin-bottom: 10px;
        }

        .wd-phone-logo span { color: var(--theme-color1); }

        .wd-phone-heading {
          font-size: 11px;
          font-weight: 700;
          color: #fff;
          line-height: 1.25;
          margin-bottom: 6px;
        }

        .wd-phone-heading span { color: var(--theme-color1); }

        .wd-phone-sub {
          font-size: 8px;
          color: rgba(255,255,255,0.38);
          line-height: 1.5;
          margin-bottom: 12px;
        }

        .wd-phone-btn {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          background: var(--theme-color1);
          color: #fff;
          font-size: 8px;
          font-weight: 700;
          padding: 6px 10px;
          border-radius: 4px;
        }

        /* ── FEATURES STRIP ── */
        .wd-features {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0;
          margin-top: 80px;
          border-top: 1px solid rgba(255,255,255,0.08);
        }

        .wd-feat-item {
          flex: 1;
          padding: 26px 24px;
          display: flex;
          align-items: center;
          gap: 14px;
          border-right: 1px solid rgba(255,255,255,0.08);
          background: transparent;
        }

        .wd-feat-item:last-child {
          border-right: none;
        }

        .wd-feat-item:hover {
          background: transparent;
        }

        .wd-feat-icon-wrap {
          width: 42px;
          height: 42px;
          border-radius: 10px;
          background: rgba(255,107,30,0.12);
          border: 1px solid rgba(255,107,30,0.35);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--theme-color1);
          font-size: 16px;
          flex-shrink: 0;
        }

        .wd-feat-item h4 {
          font-size: 14px;
          font-weight: 600;
          margin: 0;
        }

        .wd-feat-item p {
          font-size: 12px;
          opacity: 0.6;
          margin: 0;
        }

        .wd-feat-item > div:last-child {
          display: flex;
          flex-direction: column;
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 1024px) {
          .wd-hero-grid {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .wd-tagline, .wd-btn-group { justify-content: center; }
          .wd-description { margin-left: auto; margin-right: auto; }
          .wd-hero-visual { display: none; }
          .wd-features { display: flex; flex-wrap: wrap; }
          .wd-feat-item { flex: 1 1 45%; }
          .wd-feat-item:nth-child(2) { border-right: none; }
          .wd-feat-item:nth-child(3) { border-right: 1px solid rgba(255,255,255,0.07); }
          .wd-feat-item:nth-child(3), .wd-feat-item:nth-child(4) {
            border-top: 1px solid rgba(255,255,255,0.07);
          }
        }

        @keyframes wd-card-glow {
          0%, 100% { box-shadow: 0 0 0 1px rgba(255,107,30,0.15), 0 8px 32px rgba(0,0,0,0.4); }
          50%       { box-shadow: 0 0 0 1px rgba(255,107,30,0.4),  0 8px 32px rgba(255,107,30,0.12); }
        }

        @keyframes wd-icon-float {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-4px); }
        }

        @media (max-width: 640px) {
          .wd-hero { padding: 100px 0 70px; }

          /* 2x2 premium card grid */
          .wd-features {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 14px;
            border-top: none;
            margin-top: 44px;
            padding: 0 2px;
          }

          /* premium card */
          .wd-feat-item {
            border-right: none !important;
            border-top: none !important;
            border: 1px solid rgba(255,107,30,0.18);
            border-radius: 18px;
            background: linear-gradient(145deg, rgba(255,107,30,0.07) 0%, rgba(255,255,255,0.02) 100%) !important;
            padding: 24px 16px 20px;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            gap: 14px;
            animation: wd-card-glow 3s ease-in-out infinite;
            position: relative;
            overflow: hidden;
          }

          /* stagger glow per card */
          .wd-feat-item:nth-child(2) { animation-delay: 0.75s; }
          .wd-feat-item:nth-child(3) { animation-delay: 1.5s; }
          .wd-feat-item:nth-child(4) { animation-delay: 2.25s; }

          /* top-right corner accent line */
          .wd-feat-item::before {
            content: '';
            position: absolute;
            top: 0; right: 0;
            width: 48px; height: 48px;
            background: radial-gradient(circle at top right, rgba(255,107,30,0.25), transparent 70%);
            border-radius: 0 18px 0 0;
          }

          /* bigger glowing icon */
          .wd-feat-icon-wrap {
            width: 56px !important;
            height: 56px !important;
            border-radius: 16px !important;
            background: rgba(255,107,30,0.14) !important;
            border: 1px solid rgba(255,107,30,0.45) !important;
            font-size: 22px !important;
            animation: wd-icon-float 3s ease-in-out infinite;
            box-shadow: 0 4px 20px rgba(255,107,30,0.2);
          }

          /* hide desc, keep title */
          .wd-feat-item p { display: none; }

          .wd-feat-item h4 {
            font-size: 13px;
            font-weight: 700;
            letter-spacing: 0.2px;
            line-height: 1.3;
          }

          .wd-feat-item > div:last-child {
            flex-direction: column;
            align-items: center;
            gap: 0;
          }

          /* buttons: one row side-by-side */
          .wd-btn-group {
            flex-direction: row !important;
            flex-wrap: nowrap !important;
            justify-content: center;
            gap: 10px;
            width: 100%;
          }

          .wd-btn-primary, .wd-btn-secondary {
            flex: 1;
            padding: 14px 10px !important;
            font-size: 13px !important;
            gap: 8px !important;
          }
        }
      `}),(0,c.jsx)(`section`,{className:`wd-hero`,children:(0,c.jsxs)(`div`,{className:`wd-inner`,children:[(0,c.jsxs)(`div`,{className:`wd-hero-grid`,children:[(0,c.jsxs)(`div`,{className:`wd-hero-content`,children:[(0,c.jsxs)(`div`,{className:`wd-tagline`,children:[(0,c.jsx)(`i`,{className:`fas fa-bolt`}),` DESIGN. DEVELOP. SCALE ONLINE.`]}),(0,c.jsxs)(`h3`,{children:[`Custom Websites`,(0,c.jsx)(`br`,{}),`Built to Grow`,` `,(0,c.jsx)(`span`,{className:`wd-title-accent`,children:` Your Business`})]}),(0,c.jsx)(`p`,{className:`wd-description`,children:`We build fast, SEO-optimized websites that strengthen your brand, attract qualified customers, improve conversions, and support long-term business growth.`}),(0,c.jsxs)(`div`,{className:`wd-btn-group`,children:[(0,c.jsxs)(`button`,{className:`wd-btn-primary`,onClick:e,type:`button`,children:[(0,c.jsx)(`i`,{className:`fas fa-rocket`}),` Start Your Project`]}),(0,c.jsxs)(r,{to:`/portfolio`,className:`wd-btn-secondary`,children:[(0,c.jsx)(`span`,{className:`wd-play-icon`,children:(0,c.jsx)(`i`,{className:`fas fa-eye`})}),`View Our Work`]})]})]}),(0,c.jsx)(`div`,{className:`wd-hero-visual`,children:(0,c.jsxs)(`div`,{className:`wd-device-wrapper`,children:[(0,c.jsxs)(`div`,{className:`wd-laptop`,children:[(0,c.jsxs)(`div`,{className:`wd-laptop-bar`,children:[(0,c.jsxs)(`div`,{className:`wd-dots`,children:[(0,c.jsx)(`div`,{className:`wd-dot-circle wd-dot-r`}),(0,c.jsx)(`div`,{className:`wd-dot-circle wd-dot-y`}),(0,c.jsx)(`div`,{className:`wd-dot-circle wd-dot-g`})]}),(0,c.jsxs)(`div`,{className:`wd-url-bar`,children:[(0,c.jsx)(`div`,{className:`wd-url-bar-dot`}),(0,c.jsx)(`span`,{className:`wd-url-text`,children:`nextcraft.agency`})]})]}),(0,c.jsxs)(`div`,{className:`wd-laptop-nav`,children:[(0,c.jsxs)(`div`,{className:`wd-mock-logo`,children:[`Next`,(0,c.jsx)(`span`,{children:`Craft`})]}),(0,c.jsx)(`ul`,{className:`wd-mock-nav-links`,children:[`Home`,`About`,`Services`,`Work`,`Contact`].map(e=>(0,c.jsx)(`li`,{children:e},e))}),(0,c.jsx)(`div`,{className:`wd-mock-cta-small`,children:`Get Started →`})]}),(0,c.jsxs)(`div`,{className:`wd-laptop-body`,children:[(0,c.jsxs)(`div`,{className:`wd-mock-heading`,children:[`Building Digital`,(0,c.jsx)(`br`,{}),(0,c.jsx)(`span`,{children:`Experiences`}),(0,c.jsx)(`br`,{}),`That Matter.`]}),(0,c.jsxs)(`p`,{className:`wd-mock-sub`,children:[`We design & develop modern websites`,(0,c.jsx)(`br`,{}),`that drive real results.`]}),(0,c.jsxs)(`div`,{className:`wd-mock-btn`,children:[`Explore Project `,(0,c.jsx)(`i`,{className:`fas fa-arrow-right`})]}),(0,c.jsx)(`div`,{className:`wd-mock-stats`,children:[{value:`200+`,label:`Projects Completed`},{value:`98%`,label:`Client Satisfaction`},{value:`3+`,label:`Years Experience`},{value:`24/7`,label:`Support`}].map((e,t)=>(0,c.jsxs)(`div`,{className:`wd-mock-stat`,children:[(0,c.jsx)(`span`,{className:`wd-mock-stat-val`,children:e.value}),(0,c.jsx)(`span`,{className:`wd-mock-stat-lbl`,children:e.label})]},t))})]})]}),(0,c.jsxs)(`div`,{className:`wd-phone`,children:[(0,c.jsx)(`div`,{className:`wd-phone-notch`,children:(0,c.jsx)(`div`,{className:`wd-phone-notch-bar`})}),(0,c.jsxs)(`div`,{className:`wd-phone-body`,children:[(0,c.jsxs)(`div`,{className:`wd-phone-logo`,children:[`Next`,(0,c.jsx)(`span`,{children:`Craft`})]}),(0,c.jsxs)(`div`,{className:`wd-phone-heading`,children:[`We build`,(0,c.jsx)(`br`,{}),`websites that`,(0,c.jsx)(`br`,{}),(0,c.jsxs)(`span`,{children:[`grow your`,(0,c.jsx)(`br`,{}),`business.`]})]}),(0,c.jsxs)(`p`,{className:`wd-phone-sub`,children:[`Modern, responsive and`,(0,c.jsx)(`br`,{}),`performance-driven solutions`,(0,c.jsx)(`br`,{}),`tailored to your needs.`]}),(0,c.jsxs)(`div`,{className:`wd-phone-btn`,children:[`Get Started`,` `,(0,c.jsx)(`i`,{className:`fas fa-arrow-right`,style:{fontSize:7}})]})]})]})]})})]}),(0,c.jsx)(`div`,{className:`wd-features`,children:[{icon:`fas fa-bolt`,title:`Lightning Fast`,desc:`Optimized for speed with fast-loading pages that deliver a smooth browsing experience.`},{icon:`fas fa-mobile-alt`,title:`100% Responsive`,desc:`Fully responsive websites that perform flawlessly across mobile, tablet, and desktop devices.`},{icon:`fas fa-search`,title:`SEO Optimized`,desc:`Built with SEO best practices to improve search visibility and drive organic traffic.`},{icon:`fas fa-shield-alt`,title:`Secure & Scalable`,desc:`Future-ready websites with secure architecture designed to support business growth.`}].map((e,t)=>(0,c.jsxs)(`div`,{className:`wd-feat-item`,children:[(0,c.jsx)(`div`,{className:`wd-feat-icon-wrap`,children:(0,c.jsx)(`i`,{className:e.icon})}),(0,c.jsxs)(`div`,{children:[(0,c.jsx)(`h4`,{children:e.title}),(0,c.jsx)(`p`,{children:e.desc})]})]},t))})]})})]})),u=`https://i.ibb.co/3YFS8j0N/BM-Site-Images.jpg`,d=[{fa:`fa-solid fa-code`,label:`React Development`,to:`/react`},{fa:`fa-brands fa-shopify`,label:`Shopify Website`,to:`/shopify`},{fa:`fa-brands fa-wordpress`,label:`WordPress Website`,to:`/wordpress`},{fa:`fa-solid fa-cart-shopping`,label:`WooCommerce Website`,to:`/woocommerce`},{fa:`fa-brands fa-php`,label:`PHP Development`,to:`/php`},{fa:`fa-solid fa-database`,label:`Custom CRM`,to:`/crm-development`}],f=[{fa:`fa-solid fa-shield-halved`,title:`Build Trust & Credibility`,desc:`Create a professional online presence that helps your business look credible and reliable from the very first visit`},{fa:`fa-solid fa-desktop`,title:`Showcase Your Services Clearly`,desc:`Present your services and offers in a way that helps customers quickly understand your value.`},{fa:`fa-solid fa-users`,title:`Generate Leads 24/7`,desc:`Your website keeps working around the clock by capturing inquiries and potential customers anytime.`},{fa:`fa-solid fa-chart-line`,title:`Get Found on Google`,desc:`SEO-focused websites help your business appear when customers search for services online.`},{fa:`fa-solid fa-crown`,title:`Stay Ahead of Competitors`,desc:`Stand out in the digital market with a strong online presence that attracts and converts customers.`}],p=[{fa:`fa-solid fa-briefcase`,key:`p`,suffix:`+`,label:`Projects Completed`,target:200},{fa:`fa-solid fa-face-smile`,key:`s`,suffix:`%`,label:`Client Satisfaction`,target:98},{fa:`fa-solid fa-award`,key:`e`,suffix:`+`,label:`Years Experience`,target:3}],m=()=>{let e=(0,s.useRef)(null),[t,n]=(0,s.useState)(!1),[r,a]=(0,s.useState)(0),[o,l]=(0,s.useState)({p:0,s:0,h:0,e:0}),m=i();(0,s.useEffect)(()=>{let t=new IntersectionObserver(([e])=>{e.isIntersecting&&(n(!0),h(),t.disconnect())},{threshold:.08});return e.current&&t.observe(e.current),()=>t.disconnect()},[]);let h=()=>{let e={p:200,s:98,h:24,e:3},t=0,n=setInterval(()=>{t++;let r=1-(1-Math.min(t/60,1))**3;l({p:Math.round(e.p*r),s:Math.round(e.s*r),h:Math.round(e.h*r),e:Math.round(e.e*r)}),t>=60&&clearInterval(n)},2e3/60)};return(0,c.jsx)(`section`,{className:`wda`,ref:e,children:(0,c.jsxs)(`div`,{className:`wda-grid`,children:[(0,c.jsxs)(`aside`,{className:`wda-sidebar`,children:[(0,c.jsxs)(`div`,{className:`wda-main-card`,children:[` `,(0,c.jsxs)(`div`,{className:`wda-logo-row`,children:[(0,c.jsx)(`div`,{className:`wda-logo-img`,children:(0,c.jsx)(`i`,{className:`fa-solid fa-layer-group`})}),(0,c.jsxs)(`div`,{className:`wda-logo-text`,children:[(0,c.jsx)(`b`,{children:`Brandmingo`}),(0,c.jsx)(`span`,{children:`Digital Solutions`})]})]})]}),(0,c.jsx)(`div`,{className:`wda-main-card`,children:(0,c.jsx)(`div`,{className:`wda-nav-wrap wda-nav-wrap--no-border`,children:(0,c.jsx)(`ul`,{className:`wda-nav`,children:d.map((e,t)=>(0,c.jsxs)(`li`,{className:r===t?`active`:``,onClick:()=>{a(t),m(e.to)},children:[(0,c.jsxs)(`span`,{className:`nl`,children:[(0,c.jsx)(`i`,{className:e.fa}),e.label]}),(0,c.jsx)(`i`,{className:`fa-solid fa-chevron-right chev`})]},t))})})}),(0,c.jsxs)(`div`,{className:`wda-main-card wda-call`,children:[(0,c.jsx)(`i`,{className:`fa-solid fa-rocket wda-rocket`}),(0,c.jsxs)(`h3`,{children:[`Let's Build `,(0,c.jsx)(`span`,{children:`Your Website`})]}),(0,c.jsx)(`p`,{children:`Have a project in mind? Let's turn your ideas into powerful digital solutions.`}),(0,c.jsx)(`a`,{href:`tel:+919990613140`,className:`wda-ring`,children:(0,c.jsx)(`i`,{className:`fa-solid fa-phone`})}),(0,c.jsx)(`small`,{className:`wda-expert-label`,children:`Talk to an expert`}),(0,c.jsx)(`a`,{href:`tel:+919990613140`,className:`wda-phone`,children:`+91 99906 13140`}),(0,c.jsx)(`small`,{className:`wda-expert-label wda-timing`,children:`Mon – Sat | 10:00 AM – 7:00 PM`})]}),(0,c.jsx)(`div`,{className:`wda-main-card`,children:(0,c.jsxs)(`div`,{className:`wda-stats-wrap`,children:[(0,c.jsx)(`p`,{className:`wda-stats-lbl`,children:`Our Work Speaks`}),p.map(e=>(0,c.jsxs)(`div`,{className:`wda-stat`,children:[(0,c.jsx)(`div`,{className:`wda-stat-ic`,children:(0,c.jsx)(`i`,{className:e.fa})}),(0,c.jsxs)(`div`,{children:[(0,c.jsxs)(`b`,{children:[o[e.key],e.suffix]}),(0,c.jsx)(`span`,{children:e.label})]})]},e.key))]})}),(0,c.jsxs)(`a`,{href:`src/assets/images/Brochure/BM Brochure.pdf`,target:`_blank`,rel:`noopener noreferrer`,className:`wda-pdf-card`,children:[(0,c.jsxs)(`span`,{className:`wda-dl-label`,children:[(0,c.jsx)(`i`,{className:`fa-solid fa-file-pdf`}),`Brochure (PDF)`]}),(0,c.jsx)(`div`,{className:`wda-dl-btn`,children:(0,c.jsx)(`i`,{className:`fa-solid fa-download`})})]})]}),(0,c.jsxs)(`main`,{className:`wda-main`,children:[(0,c.jsxs)(`div`,{className:`wda-hero`,children:[(0,c.jsx)(`img`,{src:u,alt:`Website Development Banner - Brandmingo`,className:`wda-hero-img`}),(0,c.jsx)(`div`,{className:`wda-hero-ov`,children:(0,c.jsxs)(`div`,{className:`wda-hero-txt`,children:[(0,c.jsxs)(`div`,{className:`wda-hero-badge`,children:[(0,c.jsx)(`i`,{className:`fa-solid fa-laptop-code`}),`About Web Development`]}),(0,c.jsxs)(`h2`,{children:[`Creating Powerful Digital Foundations`,` `,(0,c.jsx)(`span`,{children:` for Modern Businesses`})]})]})})]}),(0,c.jsxs)(`article`,{children:[(0,c.jsxs)(`div`,{className:`wda-lbl`,children:[(0,c.jsx)(`i`,{className:`fa-solid fa-circle`}),`Introduction`]}),(0,c.jsx)(`h2`,{className:`wda-h1`,children:`Understanding the Power of Web Development`}),(0,c.jsxs)(`p`,{className:`wda-p`,children:[`A strong website is more than just an online presence. It is the foundation of your brand in the digital world. From creating trust to attracting customers, modern web development helps businesses build faster, smarter, and more engaging digital experiences.`,(0,c.jsx)(`br`,{}),(0,c.jsx)(`br`,{}),`In today’s competitive market, your website works as your business’s 24/7 growth engine. A professionally developed website helps you generate leads, improve user experience, strengthen credibility, and turn visitors into loyal customers.`]}),(0,c.jsxs)(`div`,{className:`wda-lbl`,style:{marginTop:`40px`},children:[(0,c.jsx)(`i`,{className:`fa-solid fa-circle`}),`Strategy`]}),(0,c.jsx)(`h3`,{className:`wda-h2`,children:`WHY YOUR BUSINESS NEEDS A WEBSITE`}),(0,c.jsx)(`div`,{className:`wda-reasons`,children:f.map((e,n)=>(0,c.jsxs)(`div`,{className:`wda-r`,style:t?{animation:`wda-fade-up 0.55s ${n*.1}s forwards`}:{},children:[(0,c.jsx)(`div`,{className:`wda-r-ico`,children:(0,c.jsx)(`i`,{className:e.fa})}),(0,c.jsx)(`h5`,{children:e.title}),(0,c.jsx)(`p`,{children:e.desc})]},n))}),(0,c.jsxs)(`div`,{className:`wda-quote`,children:[(0,c.jsx)(`div`,{className:`wda-quote-icon`,children:(0,c.jsx)(`i`,{className:`fa-solid fa-quote-right`})}),(0,c.jsxs)(`span`,{children:[`Your website isn't an expense it's an investment that drives leads, `,(0,c.jsx)(`em`,{children:`sales, and long-term business growth.`})]})]}),(0,c.jsxs)(`div`,{className:`wda-img-cards`,children:[(0,c.jsxs)(`div`,{className:`wda-img-card`,children:[(0,c.jsx)(`img`,{src:`https://i.ibb.co/jvrt6Xy0/laptop-with-code-desk-home-office-980225-34580.jpg`,alt:`website-developement-banner-image-Brandmingo`}),(0,c.jsxs)(`div`,{className:`wda-img-card-body`,children:[(0,c.jsx)(`div`,{className:`wda-img-card-icon`,children:(0,c.jsx)(`i`,{className:`fa-solid fa-laptop-code`})}),(0,c.jsx)(`p`,{children:`Modern, fast-loading websites designed to create seamless user experiences and better business performance.`}),(0,c.jsx)(`a`,{href:`#contact`,className:`wda-img-card-arrow`,children:(0,c.jsx)(`i`,{className:`fa-solid fa-arrow-right`})})]})]}),(0,c.jsxs)(`div`,{className:`wda-img-card`,children:[(0,c.jsx)(`img`,{src:`https://i.ibb.co/Zz0MNRM4/website-developement-image-Brandmingo.avif`,alt:`E-commerce Solutions`}),(0,c.jsxs)(`div`,{className:`wda-img-card-body`,children:[(0,c.jsx)(`div`,{className:`wda-img-card-icon`,children:(0,c.jsx)(`i`,{className:`fa-solid fa-cart-shopping`})}),(0,c.jsx)(`p`,{children:`Custom web solutions and eCommerce platforms focused on increasing engagement, conversions, and revenue.`}),(0,c.jsx)(`a`,{href:`#contact`,className:`wda-img-card-arrow`,children:(0,c.jsx)(`i`,{className:`fa-solid fa-arrow-right`})})]})]})]})]})]})]})})},h=[{fa:`fa-solid fa-briefcase`,num:`01`,title:`Business Website Development `,desc:`Professional business websites designed to establish credibility, showcase your services, generate qualified leads, and strengthen your online presence.`},{fa:`fa-solid fa-cart-shopping`,num:`02`,title:`eCommerce Website`,desc:`Powerful online stores built to deliver seamless shopping experiences, secure payments, inventory management, and higher conversion rates.`},{fa:`fa-solid fa-palette`,num:`03`,title:`Portfolio Website`,desc:`Creative portfolio websites that showcase your work, achievements, and expertise while helping attract clients, recruiters, and business opportunities.`},{fa:`fa-solid fa-gear`,num:`04`,title:`Custom Web Applications`,desc:`Custom-built web platforms, dashboards, and systems designed to simplify operations and scale your business.`}],g=[{fa:`fa-brands fa-react`,title:`React Development`,desc:`Fast and interactive web applications built with modern React technology for smooth user experiences.`},{fa:`fa-brands fa-shopify`,title:`Shopify Development`,desc:`High-converting Shopify stores designed for seamless shopping and better online sales performance.`},{fa:`fa-brands fa-wordpress`,title:`WordPress Development`,desc:`Flexible and SEO-friendly WordPress websites built for easy management and business growth.`},{fa:`fa-brands fa-php`,title:`PHP Development`,desc:`Secure and scalable backend development for custom websites and web applications.`}],_=[{num:`01`,fa:`fa-solid fa-magnifying-glass-chart`,title:`Understanding Your Business`,desc:`We understand your goals, audience, and business needs before starting the development process.`},{num:`02`,fa:`fa-solid fa-file-lines`,title:`Planning & Structure`,desc:`We create the website structure and user flow to ensure a smooth and intuitive experience.`},{num:`03`,fa:`fa-solid fa-pen-ruler`,title:`UI/UX Design`,desc:`Modern and user-focused designs crafted to reflect your brand and improve engagement.`},{num:`04`,fa:`fa-solid fa-code`,title:`Development`,desc:`We build fast, responsive, and scalable websites using modern development technologies.`},{num:`05`,fa:`fa-solid fa-rocket`,title:`Testing & Launch`,desc:`Every website is tested carefully to ensure smooth performance before going live.`}],v=()=>{let e=(0,s.useRef)(null),[t,n]=(0,s.useState)(!1);return(0,s.useEffect)(()=>{let t=new IntersectionObserver(([e])=>{e.isIntersecting&&(n(!0),t.disconnect())},{threshold:.1});return e.current&&t.observe(e.current),()=>t.disconnect()},[]),(0,c.jsx)(`section`,{className:`wds`,ref:e,children:(0,c.jsx)(`div`,{className:`wds-container`,children:(0,c.jsxs)(`div`,{className:`wds-types-grid`,children:[(0,c.jsxs)(`div`,{className:`wds-types-left`,children:[(0,c.jsx)(`div`,{className:`wds-section-label`,children:`What We Build`}),(0,c.jsx)(`h3`,{className:`wds-types-heading`,children:`Custom Website Solutions Designed for Every Business`}),(0,c.jsx)(`p`,{className:`wds-types-desc`,children:`From business websites and eCommerce stores to custom web applications, Brandmingo builds high-performance digital solutions that help businesses attract customers, increase conversions, and scale faster online.`}),(0,c.jsx)(`div`,{className:`wds-deco`,"aria-hidden":`true`,children:(0,c.jsxs)(`svg`,{width:`240`,height:`190`,viewBox:`0 0 240 190`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,children:[(0,c.jsxs)(`defs`,{children:[(0,c.jsxs)(`radialGradient`,{id:`dotFade`,cx:`20%`,cy:`20%`,r:`80%`,children:[(0,c.jsx)(`stop`,{offset:`0%`,stopColor:`white`,stopOpacity:`0.55`}),(0,c.jsx)(`stop`,{offset:`100%`,stopColor:`white`,stopOpacity:`0`})]}),(0,c.jsx)(`mask`,{id:`gridMask`,children:(0,c.jsx)(`rect`,{width:`240`,height:`190`,fill:`url(#dotFade)`})}),(0,c.jsxs)(`radialGradient`,{id:`glowDot`,cx:`50%`,cy:`50%`,r:`50%`,children:[(0,c.jsx)(`stop`,{offset:`0%`,stopColor:`#f97316`,stopOpacity:`1`}),(0,c.jsx)(`stop`,{offset:`100%`,stopColor:`#f97316`,stopOpacity:`0`})]})]}),(0,c.jsx)(`g`,{mask:`url(#gridMask)`,children:Array.from({length:10},(e,t)=>Array.from({length:13},(e,n)=>(0,c.jsx)(`circle`,{cx:n*20+4,cy:t*20+4,r:`1.4`,fill:`#f97316`,opacity:`0.5`},`${t}-${n}`)))}),(0,c.jsx)(`path`,{d:`M 0 190 Q 180 150 230 20`,stroke:`#f97316`,strokeWidth:`1.2`,fill:`none`,opacity:`0.45`,strokeLinecap:`round`}),(0,c.jsx)(`circle`,{cx:`205`,cy:`72`,r:`5`,fill:`#f97316`,opacity:`0.9`}),(0,c.jsx)(`circle`,{cx:`205`,cy:`72`,r:`10`,fill:`#f97316`,opacity:`0.2`}),(0,c.jsx)(`circle`,{cx:`205`,cy:`72`,r:`16`,fill:`#f97316`,opacity:`0.08`})]})})]}),(0,c.jsx)(`div`,{className:`wds-types-cards`,children:h.map((e,n)=>(0,c.jsxs)(`div`,{className:`wds-type-card${t?` wds-anim`:``}`,style:t?{animationDelay:`${n*.1}s`}:{},children:[(0,c.jsx)(`span`,{className:`wds-card-num`,children:e.num}),(0,c.jsx)(`div`,{className:`wds-card-icon`,children:(0,c.jsx)(`i`,{className:e.fa})}),(0,c.jsx)(`h4`,{className:`wds-card-title`,children:e.title}),(0,c.jsx)(`p`,{className:`wds-card-desc`,children:e.desc}),(0,c.jsxs)(`button`,{type:`button`,className:`wds-card-link`,onClick:a,children:[`Learn More `,(0,c.jsx)(`i`,{className:`fa-solid fa-arrow-right`})]})]},n))})]})})})},y=()=>{let e=(0,s.useRef)(null),[t,n]=(0,s.useState)(!1);return(0,s.useEffect)(()=>{let t=new IntersectionObserver(([e])=>{e.isIntersecting&&(n(!0),t.disconnect())},{threshold:.1});return e.current&&t.observe(e.current),()=>t.disconnect()},[]),(0,c.jsx)(`section`,{className:`wdt`,ref:e,children:(0,c.jsx)(`div`,{className:`wdt-container`,children:(0,c.jsxs)(`div`,{className:`wdt-grid`,children:[(0,c.jsxs)(`div`,{className:`wdt-left`,children:[(0,c.jsx)(`div`,{className:`wds-section-label`,children:`BUILT WITH MODERN TECH`}),(0,c.jsx)(`h3`,{className:`wdt-heading`,children:`Tech That Power High-Performance Websites`}),(0,c.jsx)(`p`,{className:`wdt-desc`,children:`We use modern and scalable technologies to build fast, secure, and future-ready websites tailored to your business goals and growth needs.`})]}),(0,c.jsx)(`div`,{className:`wdt-cards`,children:g.map((e,n)=>(0,c.jsxs)(`div`,{className:`wdt-card${t?` wds-anim`:``}`,style:t?{animationDelay:`${n*.1}s`}:{},children:[(0,c.jsx)(`div`,{className:`wdt-card-icon`,children:(0,c.jsx)(`i`,{className:e.fa})}),(0,c.jsxs)(`div`,{className:`wdt-card-content`,children:[(0,c.jsx)(`h4`,{className:`wdt-card-title`,children:e.title}),(0,c.jsx)(`p`,{className:`wdt-card-desc`,children:e.desc}),(0,c.jsx)(`div`,{className:`wdt-card-line`})]})]},n))})]})})})},b=({openPopup:e})=>{let t=(0,s.useRef)(null),[n,r]=(0,s.useState)(!1);return(0,s.useEffect)(()=>{let e=new IntersectionObserver(([t])=>{t.isIntersecting&&(r(!0),e.disconnect())},{threshold:.08});return t.current&&e.observe(t.current),()=>e.disconnect()},[]),(0,c.jsx)(`section`,{className:`wdp`,ref:t,children:(0,c.jsx)(`div`,{className:`wdp-container`,children:(0,c.jsxs)(`div`,{className:`wdp-grid`,children:[(0,c.jsxs)(`div`,{className:`wdp-left`,children:[(0,c.jsx)(`div`,{className:`wds-section-label`,children:`OUR WORKFLOW`}),(0,c.jsx)(`h3`,{className:`wdp-heading`,children:`Our Proven Web Development Process`}),(0,c.jsx)(`p`,{className:`wdp-desc`,children:`Every successful website starts with a clear strategy. Our step-by-step development process helps us create websites that are fast, user-focused, and built for business growth.`}),(0,c.jsxs)(`div`,{className:`wdp-cta`,children:[(0,c.jsx)(`div`,{className:`wdp-cta-icon`,children:(0,c.jsx)(`i`,{className:`fa-solid fa-comments`})}),(0,c.jsxs)(`div`,{className:`wdp-cta-text`,children:[(0,c.jsx)(`h4`,{children:`Have a project in mind?`}),(0,c.jsx)(`p`,{children:`Let’s build a powerful digital experience that helps your business grow online.`}),(0,c.jsxs)(`button`,{className:`wdp-cta-btn`,onClick:e,type:`button`,children:[`Let’s Talk `,(0,c.jsx)(`i`,{className:`fa-solid fa-arrow-right`})]})]})]})]}),(0,c.jsx)(`div`,{className:`wdp-steps`,children:_.map((e,t)=>(0,c.jsxs)(`div`,{className:`wdp-step${n?` wds-anim`:``}`,style:n?{animationDelay:`${t*.1}s`}:{},children:[(0,c.jsx)(`div`,{className:`wdp-step-num`,children:e.num}),(0,c.jsx)(`div`,{className:`wdp-step-icon`,children:(0,c.jsx)(`i`,{className:e.fa})}),(0,c.jsxs)(`div`,{className:`wdp-step-body`,children:[(0,c.jsx)(`h4`,{children:e.title}),(0,c.jsx)(`p`,{children:e.desc})]})]},t))})]})})})},x=({openPopup:e})=>(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(v,{}),(0,c.jsx)(y,{}),(0,c.jsx)(b,{openPopup:e})]}),S=[{fa:`fa-solid fa-mobile-screen`,title:`Mobile Responsive`,desc:`Seamless website experience across mobile, tablet, and desktop devices.`},{fa:`fa-solid fa-magnifying-glass`,title:`SEO Optimized`,desc:`Built with clean structure and SEO best practices to improve online visibility.`},{fa:`fa-solid fa-bolt`,title:`High Performance`,desc:`Fast-loading websites optimized for speed, engagement, and smooth user experience.`},{fa:`fa-solid fa-bullseye`,title:`Conversion Focused`,desc:`Strategic layouts designed to turn visitors into leads and paying customers.`},{fa:`fa-solid fa-sliders`,title:`Easy to Manage`,desc:`User-friendly backend systems that make website management simple and hassle-free.`}],C=[`Sell your products 24/7`,`Accept secure online payments`,`Manage orders and inventory easily`,`Reach customers beyond your local market`],w=[`Complete Shopify and custom store setup`,`Secure payment gateway integration`,`Inventory and order management systems`,`Conversion-focused UI/UX design for better sales`],T=[{fa:`fa-brands fa-shopify`,title:`Shopify`,sub:`BEST FOR`,desc:`Product-based businesses and online stores.`,link:`/shopify`},{fa:`fa-brands fa-wordpress`,title:`WordPress`,sub:`BEST FOR`,desc:`Service-based websites, blogs, and SEO-focused businesses.`,link:`/wordpress`},{fa:`fa-brands fa-react`,title:`React`,sub:`BEST FOR`,desc:`High-performance websites and advanced user experiences`,link:`/react`},{fa:`fa-solid fa-code`,title:`Custom Dev`,sub:`BEST FOR`,desc:` Businesses that need custom features and scalable web solutions.`,link:`/crm-development`}],E=[{fa:`fa-solid fa-location-dot`,q:`Why is Brandmingo the best website development agency in Noida?`,a:`Brandmingo is based in Noida Sector 62 (ITHUM Tower). We provide end-to-end web development with dedicated in-house developers, modern tech stacks (React, Next.js, WordPress, Shopify), custom UI/UX design, built-in SEO optimization, and reliable post-launch technical support for startups and enterprise brands across Delhi NCR.`},{fa:`fa-solid fa-handshake`,q:`Can we visit your office in Noida for an in-person project consultation?`,a:`Yes, absolutely! Our corporate office is located at B-806, 8th Floor, ITHUM Tower, Block A, Sector 62, Noida, Uttar Pradesh 201309. You can schedule an in-person meeting with our technical leads and web designers to discuss your project requirements.`},{fa:`fa-solid fa-circle-question`,q:` What types of websites do you develop?`,a:`We develop business websites, eCommerce stores, portfolio websites, landing pages, custom web applications, booking platforms, and SEO-focused websites tailored to different industries and business goals.`},{fa:`fa-solid fa-layer-group`,q:` Which platform is best for my business: Shopify, WordPress, or React?`,a:`It depends on your business requirements. Shopify is ideal for online stores, WordPress works best for service-based and content-focused websites, while React is perfect for high-performance and custom web applications with advanced functionality.`},{fa:`fa-solid fa-mobile-screen`,q:`Will my website be mobile-friendly and SEO optimized?`,a:`Yes. Every website we build is fully responsive and optimized for speed, mobile devices, clean code structure, and SEO best practices to help improve visibility and user experience.`},{fa:`fa-solid fa-gear`,q:`What is your web development process?`,a:`Our process includes business research, planning, UI/UX design, development, testing, optimization, and launch. We focus on creating websites that are visually strong, technically reliable, and built for long-term growth.`}],D=(e=.1)=>{let t=(0,s.useRef)(null),[n,r]=(0,s.useState)(!1);return(0,s.useEffect)(()=>{let n=new IntersectionObserver(([e])=>{e.isIntersecting&&(r(!0),n.disconnect())},{threshold:e});return t.current&&n.observe(t.current),()=>n.disconnect()},[]),[t,n]},O=()=>{let[e,t]=D(.08);return(0,c.jsx)(`section`,{className:`wde`,ref:e,children:(0,c.jsx)(`div`,{className:`wde-container`,children:(0,c.jsxs)(`div`,{className:`wde-grid`,children:[(0,c.jsxs)(`div`,{className:`wde-left`,children:[(0,c.jsx)(`div`,{className:`wds-section-label`,children:`OUR PROMISE`}),(0,c.jsxs)(`h3`,{className:`wde-heading`,children:[`What Sets Our`,(0,c.jsx)(`span`,{children:` Websites Apart`})]}),(0,c.jsx)(`p`,{className:`wde-desc`,children:`We build websites that are not just visually impressive but strategically designed to improve performance, engagement, and business growth.`}),(0,c.jsx)(`div`,{className:`wde-gradient-bar`})]}),(0,c.jsxs)(`div`,{className:`wde-right`,children:[(0,c.jsx)(`div`,{className:`wde-features`,children:S.map((e,n)=>(0,c.jsxs)(`div`,{className:`wde-feat${t?` wde-anim`:``}`,style:t?{animationDelay:`${n*.1}s`}:{},children:[(0,c.jsx)(`div`,{className:`wde-feat-icon`,children:(0,c.jsx)(`i`,{className:e.fa})}),(0,c.jsxs)(`div`,{className:`wde-feat-body`,children:[(0,c.jsx)(`h5`,{children:e.title}),(0,c.jsx)(`p`,{children:e.desc})]})]},n))}),(0,c.jsxs)(`div`,{className:`wde-note`,children:[(0,c.jsx)(`div`,{className:`wde-note-icon`,children:(0,c.jsx)(`i`,{className:`fa-solid fa-rocket`})}),(0,c.jsxs)(`p`,{children:[`A website should do more than just exist.`,(0,c.jsx)(`em`,{children:` It should actively generate leads`}),` and drive business growth.`]})]})]})]})})})},k=()=>{let[e,t]=D(.08);return(0,c.jsx)(`section`,{className:`wdec`,ref:e,children:(0,c.jsx)(`div`,{className:`wdec-container`,children:(0,c.jsxs)(`div`,{className:`wdec-grid`,children:[(0,c.jsxs)(`div`,{className:`wdec-left`,children:[(0,c.jsx)(`div`,{className:`wds-section-label`,children:`GROW YOUR BUSINESS`}),(0,c.jsxs)(`h3`,{className:`wdec-heading`,children:[`Ready to Take Your Business`,(0,c.jsx)(`span`,{children:`Online with eCommerce?`})]}),(0,c.jsx)(`div`,{className:`wdec-divider`}),(0,c.jsx)(`p`,{className:`wdec-desc`,children:`An eCommerce website helps you sell products online, reach more customers, and grow your business without location or time limitations.`})]}),(0,c.jsxs)(`div`,{className:`wdec-cards`,children:[(0,c.jsxs)(`div`,{className:`wdec-card${t?` wde-anim`:``}`,style:t?{animationDelay:`0.1s`}:{},children:[(0,c.jsx)(`div`,{className:`wdec-card-icon`,children:(0,c.jsx)(`i`,{className:`fa-solid fa-cart-shopping`})}),(0,c.jsxs)(`h4`,{children:[`An E-commerce Website `,(0,c.jsx)(`span`,{children:`You Can:`})]}),(0,c.jsx)(`ul`,{className:`wdec-list`,children:C.map((e,t)=>(0,c.jsxs)(`li`,{children:[(0,c.jsx)(`i`,{className:`fa-solid fa-arrow-right`}),e]},t))})]}),(0,c.jsxs)(`div`,{className:`wdec-card${t?` wde-anim`:``}`,style:t?{animationDelay:`0.2s`}:{},children:[(0,c.jsx)(`div`,{className:`wdec-card-icon`,children:(0,c.jsx)(`i`,{className:`fa-solid fa-gift`})}),(0,c.jsx)(`h4`,{children:`What We Deliver:`}),(0,c.jsx)(`ul`,{className:`wdec-list wdec-list--dot`,children:w.map((e,t)=>(0,c.jsxs)(`li`,{children:[(0,c.jsx)(`i`,{className:`fa-solid fa-circle`}),e]},t))})]})]})]})})})},A=()=>{let e=i(),[t,n]=D(.08);return(0,c.jsx)(`section`,{className:`wdpl`,ref:t,children:(0,c.jsx)(`div`,{className:`wdpl-container`,children:(0,c.jsxs)(`div`,{className:`wdpl-grid`,children:[(0,c.jsxs)(`div`,{className:`wdpl-left`,children:[(0,c.jsx)(`div`,{className:`wds-section-label`,children:`Choose What’s Right`}),(0,c.jsxs)(`h3`,{className:`wdpl-heading`,children:[`Which Platform is`,(0,c.jsx)(`span`,{children:` Right`}),` for Your Business?`]}),(0,c.jsx)(`p`,{className:`wdpl-desc`,children:`Choosing the right platform plays a huge role in your website’s performance, scalability, and future growth. We help you choose the best solution based on your business goals and requirements.`})]}),(0,c.jsxs)(`div`,{className:`wdpl-right`,children:[(0,c.jsx)(`div`,{className:`wdpl-cards`,children:T.map((t,r)=>(0,c.jsxs)(`div`,{className:`wdpl-card${n?` wde-anim`:``}`,onClick:()=>e(t.link),role:`button`,tabIndex:0,children:[(0,c.jsxs)(`div`,{className:`wdpl-card-inner`,children:[(0,c.jsx)(`div`,{className:`wdpl-card-icon`,children:(0,c.jsx)(`i`,{className:t.fa})}),(0,c.jsxs)(`div`,{className:`wdpl-card-body`,children:[(0,c.jsx)(`h5`,{children:t.title}),(0,c.jsx)(`span`,{className:`wdpl-sub`,children:t.sub}),(0,c.jsx)(`p`,{children:t.desc})]})]}),(0,c.jsx)(`div`,{className:`wdpl-arrow`,children:(0,c.jsx)(`i`,{className:`fa-solid fa-arrow-right`})})]},r))}),(0,c.jsxs)(`div`,{className:`wdpl-note${n?` wde-anim`:``}`,style:n?{animationDelay:`0.45s`}:{},children:[(0,c.jsx)(`div`,{className:`wdpl-note-icon`,children:(0,c.jsx)(`i`,{className:`fa-solid fa-lightbulb`})}),(0,c.jsx)(`p`,{children:`Tailor-made web solutions built for flexibility, performance, and long-term business growth.`})]})]})]})})})},j=()=>{let[e,t]=D(.08),[n,r]=(0,s.useState)(null),i=e=>r(n===e?null:e);return(0,c.jsx)(`section`,{className:`wdfq`,ref:e,children:(0,c.jsxs)(`div`,{className:`wdfq-container`,children:[(0,c.jsx)(`div`,{className:`wds-section-label`,children:`QUESTIONS? WE’VE GOT ANSWERS`}),(0,c.jsx)(`h3`,{className:`wdfq-heading`,children:`Frequently Asked Questions`}),(0,c.jsx)(`div`,{className:`wdfq-list`,children:E.map((e,r)=>(0,c.jsxs)(`div`,{className:`wdfq-item${n===r?` open`:``}${t?` wde-anim`:``}`,style:t?{animationDelay:`${r*.1}s`}:{},onClick:()=>i(r),children:[(0,c.jsxs)(`div`,{className:`wdfq-q`,children:[(0,c.jsx)(`div`,{className:`wdfq-icon`,children:(0,c.jsx)(`i`,{className:e.fa})}),(0,c.jsx)(`span`,{children:e.q}),(0,c.jsx)(`div`,{className:`wdfq-plus`,children:(0,c.jsx)(`i`,{className:`fa-solid ${n===r?`fa-minus`:`fa-plus`}`})})]}),n===r&&(0,c.jsx)(`div`,{className:`wdfq-a`,children:(0,c.jsx)(`p`,{children:e.a})})]},r))})]})})},M=()=>(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(O,{}),(0,c.jsx)(k,{}),(0,c.jsx)(A,{}),(0,c.jsx)(j,{})]}),N=({openPopup:e})=>(0,c.jsxs)(`div`,{className:`page-wrapper`,children:[(0,c.jsx)(o,{title:`Best Website Development Agency in Noida & Delhi NCR | Brandmingo`,description:`Looking for the best website development company in Noida? Brandmingo delivers high-speed custom websites, React apps, WordPress, Shopify, and enterprise SaaS solutions at Sector 62, Noida.`,canonical:`https://brandmingo.com/web-development`,keywords:`best website development agency in noida, website development company in noida, web developers noida sector 62, custom web design delhi ncr, Brandmingo`}),(0,c.jsx)(l,{openPopup:e}),(0,c.jsx)(`section`,{className:`services-details pt-120 pb-120`,children:(0,c.jsx)(`div`,{className:`service-details-page`,children:(0,c.jsx)(`div`,{className:`container`,children:(0,c.jsx)(`div`,{className:`wd-outer`,children:(0,c.jsx)(`div`,{className:`wd-content-col`,children:(0,c.jsxs)(`div`,{className:`services-details__content`,children:[(0,c.jsx)(m,{}),(0,c.jsx)(`div`,{className:`WebDev-Services-spacing`,children:(0,c.jsx)(x,{openPopup:e})}),(0,c.jsx)(`div`,{className:`WebDev-Extra-spacing`,children:(0,c.jsx)(M,{})})]})})})})})})]});export{N as default};