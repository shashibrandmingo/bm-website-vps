import{a as e}from"./rolldown-runtime-COnpUsM8.js";import{d as t,l as n}from"./animations-BJc3zUQd.js";import{Ct as r,kt as i}from"./vendor-CfdKfBq_.js";import{n as a}from"./popup-DfbqftR9.js";import{t as o}from"./SEO-CJUyn_hk.js";var s=e(t(),1),c=n(),l=()=>((0,s.useEffect)(()=>{},[]),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(`style`,{children:`
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

        .wd-hero-grid {
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 64px;
          align-items: center;
        }

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

        .wd-title-accent { color: var(--theme-color1); }

        .wd-description {
          color: var(--text-color);
          opacity: 0.7;
          max-width: 520px;
          margin-bottom: 42px;
          font-size: var(--body-font-size);
          line-height: var(--body-line-height);
        }

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

        @keyframes wd-bar-grow {
          from { width: 0; }
          to   { width: var(--bar-w); }
        }

        @keyframes wd-float {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-6px); }
        }

        .wd-tagline { animation: wd-fadeUp 0.55s ease both; animation-delay: 0.05s; }
        .wd-hero-content h3 { animation: wd-fadeUp 0.6s ease both; animation-delay: 0.15s; }
        .wd-description { animation: wd-fadeUp 0.6s ease both; animation-delay: 0.25s; }
        .wd-btn-group { animation: wd-fadeUp 0.6s ease both; animation-delay: 0.35s; }

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
          width: 34px; height: 34px;
          border-radius: 50%;
          background: var(--theme-color1);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          transition: background 0.3s ease, transform 0.3s ease;
        }

        .wd-play-icon i { font-size: 13px; color: #fff; }

        .wd-btn-secondary:hover .wd-play-icon {
          background: #e85c0d;
          transform: scale(1.1) rotate(-6deg);
        }

        /* ════════════════════════════════════
           RIGHT VISUAL — SEO Dashboard Mock
        ════════════════════════════════════ */
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
          animation: wd-float 5s ease-in-out infinite;
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
        .wd-dot-circle { width: 10px; height: 10px; border-radius: 50%; }
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

        /* ── Laptop Body — SEO Dashboard ── */
        .wd-laptop-body {
          background: linear-gradient(145deg, #111 0%, #0d0d0d 100%);
          padding: 18px 20px 18px;
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

        .wd-dash-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 12px;
        }

        .wd-dash-title {
          font-size: 12px;
          font-weight: 700;
          color: #fff;
        }

        .wd-dash-title span { color: var(--theme-color1); }

        .wd-dash-live {
          display: flex;
          align-items: center;
          gap: 5px;
          background: rgba(255,107,30,0.12);
          border: 1px solid rgba(255,107,30,0.3);
          color: var(--theme-color1);
          font-size: 8px;
          font-weight: 700;
          padding: 3px 8px;
          border-radius: 20px;
        }

        .wd-dash-live-dot {
          width: 5px; height: 5px; border-radius: 50%;
          background: #27c93f;
          flex-shrink: 0;
        }

        /* SEO KPI cards */
        .wd-kpi-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 8px;
          margin-bottom: 12px;
        }

        .wd-kpi-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 8px;
          padding: 9px 10px;
        }

        .wd-kpi-label {
          font-size: 8px;
          color: rgba(255,255,255,0.4);
          margin-bottom: 3px;
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .wd-kpi-label i { font-size: 7px; color: var(--theme-color1); }

        .wd-kpi-value {
          font-size: 15px;
          font-weight: 700;
          color: #fff;
          line-height: 1;
        }

        .wd-kpi-delta {
          font-size: 8px;
          color: #27c93f;
          font-weight: 600;
          margin-top: 2px;
        }

        /* Keyword ranking rows */
        .wd-channels {
          display: flex;
          flex-direction: column;
          gap: 7px;
          margin-bottom: 12px;
        }

        .wd-ch-row {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .wd-ch-icon {
          width: 20px; height: 20px;
          border-radius: 5px;
          display: flex; align-items: center; justify-content: center;
          font-size: 9px;
          flex-shrink: 0;
          font-weight: 700;
          color: #fff;
        }

        .wd-ch-name {
          font-size: 9px;
          color: rgba(255,255,255,0.55);
          width: 88px;
          flex-shrink: 0;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .wd-ch-bar-track {
          flex: 1;
          height: 4px;
          background: rgba(255,255,255,0.07);
          border-radius: 4px;
          overflow: hidden;
        }

        .wd-ch-bar-fill {
          height: 100%;
          border-radius: 4px;
          animation: wd-bar-grow 1.3s ease forwards;
        }

        .wd-ch-val {
          font-size: 9px;
          font-weight: 700;
          color: rgba(255,255,255,0.75);
          width: 34px;
          text-align: right;
          flex-shrink: 0;
        }

        /* Stats strip */
        .wd-mock-stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 8px;
          border-top: 1px solid rgba(255,255,255,0.06);
          padding-top: 12px;
        }

        .wd-mock-stat { display: flex; flex-direction: column; gap: 2px; }

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

        /* ── PHONE mock ── */
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
          animation: wd-float 5s ease-in-out 0.9s infinite;
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

        .wd-phone-widget-label {
          font-size: 7.5px;
          font-weight: 700;
          color: rgba(255,255,255,0.4);
          text-transform: uppercase;
          letter-spacing: 0.8px;
          margin-bottom: 6px;
        }

        /* Organic traffic count */
        .wd-phone-lead-count {
          font-size: 26px;
          font-weight: 800;
          color: #fff;
          line-height: 1;
          margin-bottom: 2px;
        }

        .wd-phone-lead-count span { color: var(--theme-color1); }

        .wd-phone-lead-sub {
          font-size: 8px;
          color: rgba(255,255,255,0.38);
          margin-bottom: 10px;
          line-height: 1.4;
        }

        /* Keyword rank pills */
        .wd-phone-channels {
          display: flex;
          flex-direction: column;
          gap: 5px;
          margin-bottom: 12px;
        }

        .wd-phone-ch-row {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .wd-phone-ch-icon {
          width: 16px; height: 16px;
          border-radius: 4px;
          display: flex; align-items: center; justify-content: center;
          font-size: 7px;
          font-weight: 800;
          flex-shrink: 0;
          color: #fff;
        }

        .wd-phone-ch-name {
          font-size: 8px;
          color: rgba(255,255,255,0.55);
          flex: 1;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .wd-phone-ch-val {
          font-size: 8px;
          font-weight: 700;
          color: var(--theme-color1);
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
          width: 100%;
          justify-content: center;
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

        .wd-feat-item:last-child { border-right: none; }
        .wd-feat-item:hover { background: transparent; }

        .wd-feat-icon-wrap {
          width: 42px; height: 42px;
          border-radius: 10px;
          background: rgba(255,107,30,0.12);
          border: 1px solid rgba(255,107,30,0.35);
          display: flex; align-items: center; justify-content: center;
          color: var(--theme-color1);
          font-size: 16px;
          flex-shrink: 0;
        }

        .wd-feat-item h4 { font-size: 14px; font-weight: 600; margin: 0; }
        .wd-feat-item p  { font-size: 12px; opacity: 0.6; margin: 0; }

        .wd-feat-item > div:last-child { display: flex; flex-direction: column; }

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

          .wd-features {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 14px;
            border-top: none;
            margin-top: 44px;
            padding: 0 2px;
          }

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

          .wd-feat-item:nth-child(2) { animation-delay: 0.75s; }
          .wd-feat-item:nth-child(3) { animation-delay: 1.5s; }
          .wd-feat-item:nth-child(4) { animation-delay: 2.25s; }

          .wd-feat-item::before {
            content: '';
            position: absolute;
            top: 0; right: 0;
            width: 48px; height: 48px;
            background: radial-gradient(circle at top right, rgba(255,107,30,0.25), transparent 70%);
            border-radius: 0 18px 0 0;
          }

          .wd-feat-icon-wrap {
            width: 56px !important; height: 56px !important;
            border-radius: 16px !important;
            background: rgba(255,107,30,0.14) !important;
            border: 1px solid rgba(255,107,30,0.45) !important;
            font-size: 22px !important;
            animation: wd-icon-float 3s ease-in-out infinite;
            box-shadow: 0 4px 20px rgba(255,107,30,0.2);
          }

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
      `}),(0,c.jsx)(`section`,{className:`wd-hero`,children:(0,c.jsxs)(`div`,{className:`wd-inner`,children:[(0,c.jsxs)(`div`,{className:`wd-hero-grid`,children:[(0,c.jsxs)(`div`,{className:`wd-hero-content`,children:[(0,c.jsxs)(`div`,{className:`wd-tagline`,children:[(0,c.jsx)(`i`,{className:`fas fa-bolt`}),` RANK HIGHER. DRIVE ORGANIC GROWTH. TRAFFIC.`]}),(0,c.jsxs)(`h3`,{children:[`SEO Services That Drive`,(0,c.jsx)(`br`,{}),`More Traffic`,` `,(0,c.jsx)(`span`,{className:`wd-title-accent`,children:` Leads & Revenue`})]}),(0,c.jsx)(`p`,{className:`wd-description`,children:`Increase your online visibility with data-driven SEO strategies designed to improve Google rankings, attract qualified organic traffic, and generate consistent leads. From technical SEO and keyword research to on-page optimization and content strategy, we help your business achieve sustainable long-term growth.`}),(0,c.jsxs)(`div`,{className:`wd-btn-group`,children:[(0,c.jsxs)(`button`,{className:`wd-btn-primary`,type:`button`,onClick:a,children:[(0,c.jsx)(`i`,{className:`fas fa-rocket`}),`Get SEO Audit`]}),(0,c.jsxs)(r,{to:`/portfolio`,className:`wd-btn-secondary`,children:[(0,c.jsx)(`span`,{className:`wd-play-icon`,children:(0,c.jsx)(`i`,{className:`fas fa-eye`})}),`View SEO Strategy`]})]})]}),(0,c.jsx)(`div`,{className:`wd-hero-visual`,children:(0,c.jsxs)(`div`,{className:`wd-device-wrapper`,children:[(0,c.jsxs)(`div`,{className:`wd-laptop`,children:[(0,c.jsxs)(`div`,{className:`wd-laptop-bar`,children:[(0,c.jsxs)(`div`,{className:`wd-dots`,children:[(0,c.jsx)(`div`,{className:`wd-dot-circle wd-dot-r`}),(0,c.jsx)(`div`,{className:`wd-dot-circle wd-dot-y`}),(0,c.jsx)(`div`,{className:`wd-dot-circle wd-dot-g`})]}),(0,c.jsxs)(`div`,{className:`wd-url-bar`,children:[(0,c.jsx)(`div`,{className:`wd-url-bar-dot`}),(0,c.jsx)(`span`,{className:`wd-url-text`,children:`seo.brandmingo.com`})]})]}),(0,c.jsxs)(`div`,{className:`wd-laptop-nav`,children:[(0,c.jsxs)(`div`,{className:`wd-mock-logo`,children:[`Brand`,(0,c.jsx)(`span`,{children:`SEO`})]}),(0,c.jsx)(`ul`,{className:`wd-mock-nav-links`,children:[`Rankings`,`Keywords`,`Backlinks`,`Traffic`,`Reports`].map(e=>(0,c.jsx)(`li`,{children:e},e))}),(0,c.jsx)(`div`,{className:`wd-mock-cta-small`,children:`Boost Rankings →`})]}),(0,c.jsxs)(`div`,{className:`wd-laptop-body`,children:[(0,c.jsxs)(`div`,{className:`wd-dash-header`,children:[(0,c.jsxs)(`div`,{className:`wd-dash-title`,children:[`Organic `,(0,c.jsx)(`span`,{children:`Search Performance`})]}),(0,c.jsxs)(`div`,{className:`wd-dash-live`,children:[(0,c.jsx)(`div`,{className:`wd-dash-live-dot`}),`Tracking`]})]}),(0,c.jsx)(`div`,{className:`wd-kpi-row`,children:[{icon:`fas fa-search`,label:`Organic Traffic`,value:`62.4K`,delta:`+34% this month`},{icon:`fas fa-trophy`,label:`Top 3 Rankings`,value:`48 KW`,delta:`+12 new keywords`},{icon:`fas fa-link`,label:`Domain Authority`,value:`DA 58`,delta:`+6 pts gained`}].map((e,t)=>(0,c.jsxs)(`div`,{className:`wd-kpi-card`,children:[(0,c.jsxs)(`div`,{className:`wd-kpi-label`,children:[(0,c.jsx)(`i`,{className:e.icon}),` `,e.label]}),(0,c.jsx)(`div`,{className:`wd-kpi-value`,children:e.value}),(0,c.jsx)(`div`,{className:`wd-kpi-delta`,children:e.delta})]},t))}),(0,c.jsx)(`div`,{className:`wd-channels`,children:[{rank:`#1`,rankBg:`rgba(255,107,30,0.9)`,name:`digital marketing agency`,vol:`12.1K/mo`,barW:`92%`,barColor:`#FF6B1E`},{rank:`#2`,rankBg:`rgba(52,211,153,0.85)`,name:`SEO services India`,vol:`8.4K/mo`,barW:`74%`,barColor:`#34D399`},{rank:`#4`,rankBg:`rgba(167,139,250,0.85)`,name:`social media marketing`,vol:`6.8K/mo`,barW:`58%`,barColor:`#A78BFA`},{rank:`#7`,rankBg:`rgba(251,191,36,0.85)`,name:`Google Ads management`,vol:`4.2K/mo`,barW:`38%`,barColor:`#FBBF24`}].map((e,t)=>(0,c.jsxs)(`div`,{className:`wd-ch-row`,children:[(0,c.jsx)(`div`,{className:`wd-ch-icon`,style:{background:e.rankBg,borderRadius:5,fontSize:8},children:e.rank}),(0,c.jsx)(`span`,{className:`wd-ch-name`,children:e.name}),(0,c.jsx)(`div`,{className:`wd-ch-bar-track`,children:(0,c.jsx)(`div`,{className:`wd-ch-bar-fill`,style:{"--bar-w":e.barW,background:e.barColor}})}),(0,c.jsx)(`span`,{className:`wd-ch-val`,children:e.vol})]},t))}),(0,c.jsx)(`div`,{className:`wd-mock-stats`,children:[{value:`250+`,label:`Projects Completed`},{value:`98%`,label:`Client Satisfaction`},{value:`3+`,label:`Years Experience`},{value:`24/7`,label:`Support`}].map((e,t)=>(0,c.jsxs)(`div`,{className:`wd-mock-stat`,children:[(0,c.jsx)(`span`,{className:`wd-mock-stat-val`,children:e.value}),(0,c.jsx)(`span`,{className:`wd-mock-stat-lbl`,children:e.label})]},t))})]})]}),(0,c.jsxs)(`div`,{className:`wd-phone`,children:[(0,c.jsx)(`div`,{className:`wd-phone-notch`,children:(0,c.jsx)(`div`,{className:`wd-phone-notch-bar`})}),(0,c.jsxs)(`div`,{className:`wd-phone-body`,children:[(0,c.jsxs)(`div`,{className:`wd-phone-logo`,children:[`Brand`,(0,c.jsx)(`span`,{children:`SEO`})]}),(0,c.jsx)(`div`,{className:`wd-phone-widget-label`,children:`Organic Traffic`}),(0,c.jsx)(`div`,{className:`wd-phone-lead-count`,children:(0,c.jsx)(`span`,{children:`62.4K`})}),(0,c.jsxs)(`p`,{className:`wd-phone-lead-sub`,children:[`+34% this month`,(0,c.jsx)(`br`,{}),`from organic search`]}),(0,c.jsx)(`div`,{className:`wd-phone-channels`,children:[{rank:`#1`,rankBg:`rgba(255,107,30,0.9)`,name:`digital mktg`,val:`12.1K`},{rank:`#2`,rankBg:`rgba(52,211,153,0.85)`,name:`SEO services`,val:`8.4K`},{rank:`#4`,rankBg:`rgba(167,139,250,0.85)`,name:`social media`,val:`6.8K`}].map((e,t)=>(0,c.jsxs)(`div`,{className:`wd-phone-ch-row`,children:[(0,c.jsx)(`div`,{className:`wd-phone-ch-icon`,style:{background:e.rankBg},children:e.rank}),(0,c.jsx)(`span`,{className:`wd-phone-ch-name`,children:e.name}),(0,c.jsx)(`span`,{className:`wd-phone-ch-val`,children:e.val})]},t))}),(0,c.jsxs)(`div`,{className:`wd-phone-btn`,children:[`All Keywords`,` `,(0,c.jsx)(`i`,{className:`fas fa-arrow-right`,style:{fontSize:7}})]})]})]})]})})]}),(0,c.jsx)(`div`,{className:`wd-features`,children:[{icon:`fas fa-ranking-star`,title:`Improve Search Rankings`,desc:`Boost Google rankings with strategic SEO for high-value keywords and better online visibility.`},{icon:`fas fa-chart-line`,title:`Drive Organic Traffic`,desc:`Attract high-intent visitors through proven SEO strategies that increase quality website traffic.`},{icon:`fas fa-users`,title:`Generate Qualified Leads`,desc:`Turn organic visitors into qualified leads with targeted SEO and search-driven conversions.`},{icon:`fas fa-arrow-trend-up`,title:`Long-Term Business Growth`,desc:`Build sustainable online growth with scalable SEO strategies that deliver lasting business results.`}].map((e,t)=>(0,c.jsxs)(`div`,{className:`wd-feat-item`,children:[(0,c.jsx)(`div`,{className:`wd-feat-icon-wrap`,children:(0,c.jsx)(`i`,{className:e.icon})}),(0,c.jsxs)(`div`,{children:[(0,c.jsx)(`h4`,{children:e.title}),(0,c.jsx)(`p`,{children:e.desc})]})]},t))})]})})]})),u=`https://res.cloudinary.com/dqqgpii8v/image/upload/v1783153379/Untitled_design_2_wboyug.png`,d=[{fa:`fa-solid fa-chart-line`,label:`Organic Traffic`,to:`/organic-traffic`},{fa:`fa-solid fa-location-dot`,label:`Local Search Dominance`,to:`/local-search-dominance`}],f=[{fa:`fa-solid fa-magnifying-glass`,title:`Improve Search Visibility`,desc:`Get your website discovered by users actively searching for your services.`},{fa:`fa-solid fa-shield-halved`,title:`Build Strong Brand Authority`,desc:`Increase trust and credibility by ranking higher across search engines.`},{fa:`fa-solid fa-chart-line`,title:`Drive Organic Traffic`,desc:`Attract consistent, high-quality visitors through proven SEO strategies.`},{fa:`fa-solid fa-chart-column`,title:`Track Measurable Growth`,desc:`Monitor rankings, traffic, leads, and conversions with actionable insights.`},{fa:`fa-solid fa-arrow-trend-up`,title:`Long-Term Business Growth`,desc:`Build a sustainable traffic source that grows with your business.`}],p=[{fa:`fa-solid fa-briefcase`,key:`p`,suffix:`+`,label:`SEO Projects Delivered`,target:250},{fa:`fa-solid fa-face-smile`,key:`s`,suffix:`%`,label:`Client Satisfaction`,target:98},{fa:`fa-solid fa-award`,key:`e`,suffix:`+`,label:`Years SEO Experience`,target:3}],m=()=>{let e=(0,s.useRef)(null),[t,n]=(0,s.useState)(!1),[r,a]=(0,s.useState)(0),[o,l]=(0,s.useState)({p:0,s:0,h:0,e:0}),m=i();(0,s.useEffect)(()=>{let t=new IntersectionObserver(([e])=>{e.isIntersecting&&(n(!0),h(),t.disconnect())},{threshold:.08});return e.current&&t.observe(e.current),()=>t.disconnect()},[]);let h=()=>{let e={p:250,s:98,h:24,e:3},t=0,n=setInterval(()=>{t++;let r=1-(1-Math.min(t/60,1))**3;l({p:Math.round(e.p*r),s:Math.round(e.s*r),h:Math.round(e.h*r),e:Math.round(e.e*r)}),t>=60&&clearInterval(n)},2e3/60)};return(0,c.jsx)(`section`,{className:`wda`,ref:e,children:(0,c.jsxs)(`div`,{className:`wda-grid`,children:[(0,c.jsxs)(`aside`,{className:`wda-sidebar`,children:[(0,c.jsx)(`div`,{className:`wda-main-card`,children:(0,c.jsxs)(`div`,{className:`wda-logo-row`,children:[(0,c.jsx)(`div`,{className:`wda-logo-img`,children:(0,c.jsx)(`i`,{className:`fa-solid fa-layer-group`})}),(0,c.jsxs)(`div`,{className:`wda-logo-text`,children:[(0,c.jsx)(`b`,{children:`Brandmingo`}),(0,c.jsx)(`span`,{children:`Digital Solutions`})]})]})}),(0,c.jsx)(`div`,{className:`wda-main-card`,children:(0,c.jsx)(`div`,{className:`wda-nav-wrap wda-nav-wrap--no-border`,children:(0,c.jsx)(`ul`,{className:`wda-nav`,children:d.map((e,t)=>(0,c.jsxs)(`li`,{className:r===t?`active`:``,onClick:()=>{a(t),m(e.to)},children:[(0,c.jsxs)(`span`,{className:`nl`,children:[(0,c.jsx)(`i`,{className:e.fa}),e.label]}),(0,c.jsx)(`i`,{className:`fa-solid fa-chevron-right chev`})]},t))})})}),(0,c.jsxs)(`div`,{className:`wda-main-card wda-call`,children:[(0,c.jsx)(`i`,{className:`fa-solid fa-rocket wda-rocket`}),(0,c.jsxs)(`h3`,{children:[`Let’s Grow Your `,(0,c.jsx)(`span`,{children:`Business with Ads`})]}),(0,c.jsx)(`p`,{children:`Have a campaign idea? Let’s turn your budget into high-performing ads that generate real leads and sales.`}),(0,c.jsx)(`a`,{href:`tel:+919990613140`,className:`wda-ring`,children:(0,c.jsx)(`i`,{className:`fa-solid fa-phone`})}),(0,c.jsx)(`small`,{className:`wda-expert-label`,children:`Talk to an expert`}),(0,c.jsx)(`a`,{href:`tel:+919990613140`,className:`wda-phone`,children:`+91 99906 13140`}),(0,c.jsx)(`small`,{className:`wda-expert-label wda-timing`,children:`Mon – Sat | 10:00 AM – 7:00 PM`})]}),(0,c.jsx)(`div`,{className:`wda-main-card`,children:(0,c.jsxs)(`div`,{className:`wda-stats-wrap`,children:[(0,c.jsx)(`p`,{className:`wda-stats-lbl`,children:`Our Work Speaks`}),p.map(e=>(0,c.jsxs)(`div`,{className:`wda-stat`,children:[(0,c.jsx)(`div`,{className:`wda-stat-ic`,children:(0,c.jsx)(`i`,{className:e.fa})}),(0,c.jsxs)(`div`,{children:[(0,c.jsxs)(`b`,{children:[o[e.key],e.suffix]}),(0,c.jsx)(`span`,{children:e.label})]})]},e.key))]})}),(0,c.jsxs)(`a`,{href:`src/assets/images/Brochure/BM Brochure.pdf`,target:`_blank`,rel:`noopener noreferrer`,className:`wda-pdf-card`,children:[(0,c.jsxs)(`span`,{className:`wda-dl-label`,children:[(0,c.jsx)(`i`,{className:`fa-solid fa-file-pdf`}),`Brochure (PDF)`]}),(0,c.jsx)(`div`,{className:`wda-dl-btn`,children:(0,c.jsx)(`i`,{className:`fa-solid fa-download`})})]})]}),(0,c.jsxs)(`main`,{className:`wda-main`,children:[(0,c.jsxs)(`div`,{className:`wda-hero`,children:[(0,c.jsx)(`img`,{src:u,alt:`SEO Optimization Banner - Brandmingo`,className:`wda-hero-img`}),(0,c.jsx)(`div`,{className:`wda-hero-ov`,children:(0,c.jsxs)(`div`,{className:`wda-hero-txt`,children:[(0,c.jsxs)(`div`,{className:`wda-hero-badge`,children:[(0,c.jsx)(`i`,{className:`fa-solid fa-laptop-code`}),`ABOUT SEO SERVICES`]}),(0,c.jsxs)(`h2`,{children:[`Grow Your Business`,` `,(0,c.jsx)(`span`,{children:`with Data-Driven SEO Strategies`})]})]})})]}),(0,c.jsxs)(`article`,{children:[(0,c.jsxs)(`div`,{className:`wda-lbl`,children:[(0,c.jsx)(`i`,{className:`fa-solid fa-circle`}),`Introduction`]}),(0,c.jsx)(`h2`,{className:`wda-h1`,children:`What Are SEO Services?`}),(0,c.jsx)(`p`,{className:`wda-p`,children:`SEO Services are the process of optimizing your website's structure, content, technical performance, and authority to improve visibility in search engines like Google. Effective SEO helps businesses rank for relevant keywords, attract targeted traffic, enhance user experience, and increase conversions.`}),(0,c.jsxs)(`div`,{className:`wda-lbl`,style:{marginTop:`40px`},children:[(0,c.jsx)(`i`,{className:`fa-solid fa-circle`}),`Strategy`]}),(0,c.jsx)(`h3`,{className:`wda-h2`,children:`Why Your Business Needs Professional SEO Services`}),(0,c.jsx)(`div`,{className:`wda-reasons`,children:f.map((e,n)=>(0,c.jsxs)(`div`,{className:`wda-r`,style:t?{animation:`wda-fade-up 0.55s ${n*.1}s forwards`}:{},children:[(0,c.jsx)(`div`,{className:`wda-r-ico`,children:(0,c.jsx)(`i`,{className:e.fa})}),(0,c.jsx)(`h5`,{children:e.title}),(0,c.jsx)(`p`,{children:e.desc})]},n))}),(0,c.jsxs)(`div`,{className:`wda-quote`,children:[(0,c.jsx)(`div`,{className:`wda-quote-icon`,children:(0,c.jsx)(`i`,{className:`fa-solid fa-quote-right`})}),(0,c.jsxs)(`span`,{children:[`If your website isn't ranking on Google, your competitors are winning `,(0,c.jsx)(`em`,{children:` the customers you should be reaching`})]})]}),(0,c.jsxs)(`div`,{className:`wda-img-cards`,children:[(0,c.jsxs)(`div`,{className:`wda-img-card`,children:[(0,c.jsx)(`img`,{src:`https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80&w=700`,alt:`Modern Web Development`}),(0,c.jsxs)(`div`,{className:`wda-img-card-body`,children:[(0,c.jsx)(`div`,{className:`wda-img-card-icon`,children:(0,c.jsx)(`i`,{className:`fa-solid fa-magnifying-glass-chart`})}),(0,c.jsx)(`p`,{children:`Data-driven SEO strategies designed to improve Google rankings, increase organic traffic, and deliver sustainable business growth.`}),(0,c.jsx)(`a`,{href:`#contact`,className:`wda-img-card-arrow`,children:(0,c.jsx)(`i`,{className:`fa-solid fa-arrow-right`})})]})]}),(0,c.jsxs)(`div`,{className:`wda-img-card`,children:[(0,c.jsx)(`img`,{src:`https://i.ibb.co/Zz0MNRM4/website-developement-image-Brandmingo.avif`,alt:`E-commerce Solutions`}),(0,c.jsxs)(`div`,{className:`wda-img-card-body`,children:[(0,c.jsx)(`div`,{className:`wda-img-card-icon`,children:(0,c.jsx)(`i`,{className:`fa-solid fa-chart-line`})}),(0,c.jsx)(`p`,{children:`Conversion-focused SEO campaigns that attract qualified visitors, generate leads, and drive measurable business results.`}),(0,c.jsx)(`a`,{href:`#contact`,className:`wda-img-card-arrow`,children:(0,c.jsx)(`i`,{className:`fa-solid fa-arrow-right`})})]})]})]})]})]})]})})},h=[{fa:`fa-solid fa-file-lines`,num:`01`,title:`On-Page SEO`,desc:`Optimize content, keywords, meta tags, and internal links to improve search rankings and user experience.`},{fa:`fa-solid fa-gears`,num:`02`,title:`Technical SEO`,desc:`Improve website speed, indexing, Core Web Vitals, and crawlability for stronger search performance.`},{fa:`fa-solid fa-link`,num:`03`,title:`Off-Page SEO`,desc:`Build domain authority through quality backlinks, digital PR, and strategic outreach campaigns.`},{fa:`fa-solid fa-location-dot`,num:`04`,title:`Local SEO`,desc:`Increase local visibility with Google Business Profile optimization and location-based SEO strategies.`}],g=[{fa:`fa-brands fa-google`,title:`Google Search Console`,desc:`Track search visibility, indexing, keyword performance, and website health using trusted Google search data.`},{fa:`fa-solid fa-chart-line`,title:`SEO Analytics Tools`,desc:`Monitor rankings, organic traffic, user behavior, and SEO performance with accurate analytics and reports.`},{fa:`fa-solid fa-key`,title:`Keyword Research Tools`,desc:`Discover valuable keywords, analyze competitors, and uncover search opportunities to increase organic traffic.`},{fa:`fa-solid fa-screwdriver-wrench`,title:`Technical SEO Tools`,desc:`Identify crawl issues, speed errors, indexing problems, and technical improvements for stronger SEO performance.`}],_=[{num:`01`,fa:`fa-solid fa-magnifying-glass`,title:`SEO Audit & Competitor Analysis`,desc:`We audit your website, competitors, keyword opportunities, technical health, and current rankings to uncover growth opportunities.`},{num:`02`,fa:`fa-solid fa-clipboard-list`,title:`SEO Strategy & Keyword Research`,desc:`We build a customized SEO roadmap with keyword research, content planning, and strategies aligned with your business goals.`},{num:`03`,fa:`fa-solid fa-gears`,title:`On-Page & Technical Optimization`,desc:`We optimize website structure, content, metadata, Core Web Vitals, and technical SEO to improve search visibility.`},{num:`04`,fa:`fa-solid fa-link`,title:`Content & Authority Building`,desc:`We create SEO-optimized content and build quality backlinks to strengthen authority and improve organic rankings.`},{num:`05`,fa:`fa-solid fa-chart-line`,title:`Monitoring & Growth Optimization`,desc:`We continuously track SEO performance, refine strategies, and optimize campaigns for sustainable organic business growth.`}],v=()=>{let e=(0,s.useRef)(null),[t,n]=(0,s.useState)(!1);return(0,s.useEffect)(()=>{let t=new IntersectionObserver(([e])=>{e.isIntersecting&&(n(!0),t.disconnect())},{threshold:.1});return e.current&&t.observe(e.current),()=>t.disconnect()},[]),(0,c.jsx)(`section`,{className:`wds`,ref:e,children:(0,c.jsx)(`div`,{className:`wds-container`,children:(0,c.jsxs)(`div`,{className:`wds-types-grid`,children:[(0,c.jsxs)(`div`,{className:`wds-types-left`,children:[(0,c.jsx)(`div`,{className:`wds-section-label`,children:`WHAT WE OPTIMIZE`}),(0,c.jsx)(`h3`,{className:`wds-types-heading`,children:`SEO Services Tailored to Your Business Goals`}),(0,c.jsx)(`p`,{className:`wds-types-desc`,children:`Every business has different goals, audiences, and competition. We create customized SEO strategies that improve search rankings, increase organic traffic, and generate qualified leads through data-driven optimization and long-term growth.`}),(0,c.jsx)(`div`,{className:`wds-deco`,"aria-hidden":`true`,children:(0,c.jsxs)(`svg`,{width:`240`,height:`190`,viewBox:`0 0 240 190`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,children:[(0,c.jsxs)(`defs`,{children:[(0,c.jsxs)(`radialGradient`,{id:`dotFade`,cx:`20%`,cy:`20%`,r:`80%`,children:[(0,c.jsx)(`stop`,{offset:`0%`,stopColor:`white`,stopOpacity:`0.55`}),(0,c.jsx)(`stop`,{offset:`100%`,stopColor:`white`,stopOpacity:`0`})]}),(0,c.jsx)(`mask`,{id:`gridMask`,children:(0,c.jsx)(`rect`,{width:`240`,height:`190`,fill:`url(#dotFade)`})}),(0,c.jsxs)(`radialGradient`,{id:`glowDot`,cx:`50%`,cy:`50%`,r:`50%`,children:[(0,c.jsx)(`stop`,{offset:`0%`,stopColor:`#f97316`,stopOpacity:`1`}),(0,c.jsx)(`stop`,{offset:`100%`,stopColor:`#f97316`,stopOpacity:`0`})]})]}),(0,c.jsx)(`g`,{mask:`url(#gridMask)`,children:Array.from({length:10},(e,t)=>Array.from({length:13},(e,n)=>(0,c.jsx)(`circle`,{cx:n*20+4,cy:t*20+4,r:`1.4`,fill:`#f97316`,opacity:`0.5`},`${t}-${n}`)))}),(0,c.jsx)(`path`,{d:`M 0 190 Q 180 150 230 20`,stroke:`#f97316`,strokeWidth:`1.2`,fill:`none`,opacity:`0.45`,strokeLinecap:`round`}),(0,c.jsx)(`circle`,{cx:`205`,cy:`72`,r:`5`,fill:`#f97316`,opacity:`0.9`}),(0,c.jsx)(`circle`,{cx:`205`,cy:`72`,r:`10`,fill:`#f97316`,opacity:`0.2`}),(0,c.jsx)(`circle`,{cx:`205`,cy:`72`,r:`16`,fill:`#f97316`,opacity:`0.08`})]})})]}),(0,c.jsx)(`div`,{className:`wds-types-cards`,children:h.map((e,n)=>(0,c.jsxs)(`div`,{className:`wds-type-card${t?` wds-anim`:``}`,style:t?{animationDelay:`${n*.1}s`}:{},children:[(0,c.jsx)(`span`,{className:`wds-card-num`,children:e.num}),(0,c.jsx)(`div`,{className:`wds-card-icon`,children:(0,c.jsx)(`i`,{className:e.fa})}),(0,c.jsx)(`h4`,{className:`wds-card-title`,children:e.title}),(0,c.jsx)(`p`,{className:`wds-card-desc`,children:e.desc}),(0,c.jsxs)(`a`,{href:`#contact`,className:`wds-card-link`,children:[`Learn More `,(0,c.jsx)(`i`,{className:`fa-solid fa-arrow-right`})]})]},n))})]})})})},y=()=>{let e=(0,s.useRef)(null),[t,n]=(0,s.useState)(!1);return(0,s.useEffect)(()=>{let t=new IntersectionObserver(([e])=>{e.isIntersecting&&(n(!0),t.disconnect())},{threshold:.1});return e.current&&t.observe(e.current),()=>t.disconnect()},[]),(0,c.jsx)(`section`,{className:`wdt`,ref:e,children:(0,c.jsx)(`div`,{className:`wdt-container`,children:(0,c.jsxs)(`div`,{className:`wdt-grid`,children:[(0,c.jsxs)(`div`,{className:`wdt-left`,children:[(0,c.jsx)(`div`,{className:`wds-section-label`,children:`BUILT WITH POWERFUL TOOLS`}),(0,c.jsx)(`h3`,{className:`wdt-heading`,children:`SEO Tools & Platforms We Use`}),(0,c.jsx)(`p`,{className:`wdt-desc`,children:`We use industry-leading SEO tools and analytics platforms to uncover insights, monitor performance, improve rankings, and identify growth opportunities that help your business achieve long-term organic success.`})]}),(0,c.jsx)(`div`,{className:`wdt-cards`,children:g.map((e,n)=>(0,c.jsxs)(`div`,{className:`wdt-card${t?` wds-anim`:``}`,style:t?{animationDelay:`${n*.1}s`}:{},children:[(0,c.jsx)(`div`,{className:`wdt-card-icon`,children:(0,c.jsx)(`i`,{className:e.fa})}),(0,c.jsxs)(`div`,{className:`wdt-card-content`,children:[(0,c.jsx)(`h4`,{className:`wdt-card-title`,children:e.title}),(0,c.jsx)(`p`,{className:`wdt-card-desc`,children:e.desc}),(0,c.jsx)(`div`,{className:`wdt-card-line`})]})]},n))})]})})})},b=()=>{let e=(0,s.useRef)(null),[t,n]=(0,s.useState)(!1);return(0,s.useEffect)(()=>{let t=new IntersectionObserver(([e])=>{e.isIntersecting&&(n(!0),t.disconnect())},{threshold:.08});return e.current&&t.observe(e.current),()=>t.disconnect()},[]),(0,c.jsx)(`section`,{className:`wdp`,ref:e,children:(0,c.jsx)(`div`,{className:`wdp-container`,children:(0,c.jsxs)(`div`,{className:`wdp-grid`,children:[(0,c.jsxs)(`div`,{className:`wdp-left`,children:[(0,c.jsx)(`div`,{className:`wds-section-label`,children:`OUR WORKFLOW`}),(0,c.jsx)(`h3`,{className:`wdp-heading`,children:` Our SEO Process`}),(0,c.jsx)(`p`,{className:`wdp-desc`,children:`Successful SEO is built on strategy, research, and continuous optimization. Our proven process improves search visibility, drives qualified organic traffic, and delivers measurable business growth through data-driven SEO execution.`}),(0,c.jsxs)(`div`,{className:`wdp-cta`,children:[(0,c.jsx)(`div`,{className:`wdp-cta-icon`,children:(0,c.jsx)(`i`,{className:`fa-solid fa-comments`})}),(0,c.jsxs)(`div`,{className:`wdp-cta-text`,children:[(0,c.jsx)(`h4`,{children:`Have an SEO project in mind?`}),(0,c.jsx)(`p`,{children:`Let’s build a strong SEO strategy that drives traffic and real growth.`}),(0,c.jsxs)(`button`,{className:`wdp-cta-btn`,type:`button`,onClick:a,children:[`Let's Talk`,(0,c.jsx)(`i`,{className:`fa-solid fa-arrow-right`})]})]})]})]}),(0,c.jsx)(`div`,{className:`wdp-steps`,children:_.map((e,n)=>(0,c.jsxs)(`div`,{className:`wdp-step${t?` wds-anim`:``}`,style:t?{animationDelay:`${n*.1}s`}:{},children:[(0,c.jsx)(`div`,{className:`wdp-step-num`,children:e.num}),(0,c.jsx)(`div`,{className:`wdp-step-icon`,children:(0,c.jsx)(`i`,{className:e.fa})}),(0,c.jsxs)(`div`,{className:`wdp-step-body`,children:[(0,c.jsx)(`h4`,{children:e.title}),(0,c.jsx)(`p`,{children:e.desc})]})]},n))})]})})})},x=()=>(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(v,{}),(0,c.jsx)(y,{}),(0,c.jsx)(b,{})]}),S=[{fa:`fa-solid fa-bullseye`,title:`Highly Targeted SEO`,desc:`Reach the right audience with precise keyword targeting strategies.`},{fa:`fa-solid fa-chart-line`,title:`ROI-Focused SEO`,desc:`Optimized to deliver long-term value and measurable organic growth.`},{fa:`fa-solid fa-chart-pie`,title:`Data-Driven Optimization`,desc:`Continuous analysis and improvements to boost rankings and traffic.`},{fa:`fa-solid fa-magnifying-glass`,title:`Conversion-Focused Approach`,desc:`Designed to turn organic visitors into leads and customers.`},{fa:`fa-solid fa-sliders`,title:`Easy SEO Management`,desc:`Transparent reporting and clear insights for better decisions.`}],C=[`Increase Google rankings & visibility`,`Drive qualified organic website traffic`,`Generate consistent leads & enquiries`,`Build long-term business growth`],w=[`SEO audit & keyword strategy`,`On-page & technical optimization`,`Content marketing & link building`,`Performance tracking & SEO reporting`],T=[{fa:`fa-solid fa-magnifying-glass`,title:`On-Page SEO`,sub:`BEST FOR`,desc:`Improve content quality, keyword relevance, and search visibility.`},{fa:`fa-solid fa-screwdriver-wrench`,title:`Technical SEO`,sub:`BEST FOR`,desc:`Enhance website speed, indexing, and technical performance.`},{fa:`fa-solid fa-link`,title:`Off-Page SEO`,sub:`BEST FOR`,desc:`Build domain authority, quality backlinks, and online trust.`},{fa:`fa-solid fa-location-dot`,title:`Local SEO`,sub:`BEST FOR`,desc:`Increase local visibility, nearby reach, and customer growth.`}],E=[{fa:`fa-solid fa-list-check`,q:`What SEO services do you offer?`,a:`We provide Technical SEO, On-Page SEO, Off-Page SEO, Local SEO, Keyword Research, Content Optimization, SEO Audits, Link Building, eCommerce SEO, and Enterprise SEO services.`},{fa:`fa-solid fa-bullseye`,q:`Which SEO strategy is best for my business?`,a:`The right SEO strategy depends on your industry, competition, audience, and business goals. We create a customized SEO roadmap designed to maximize long-term growth.`},{fa:`fa-solid fa-clock`,q:`How long does SEO take to show results?`,a:`Most businesses begin seeing measurable improvements within 3–6 months. Competitive industries may require ongoing optimization for stronger long-term rankings.`},{fa:`fa-solid fa-chart-line`,q:`How do you improve rankings and organic traffic?`,a:`We combine technical SEO, keyword research, content optimization, link building, UX improvements, and continuous performance tracking for sustainable growth.`},{fa:`fa-solid fa-scale-balanced`,q:`Is SEO better than paid advertising?`,a:`SEO delivers long-term organic visibility, while paid ads generate immediate traffic. Combining both strategies helps maximize reach, leads, and business growth.`}],D=(e=.1)=>{let t=(0,s.useRef)(null),[n,r]=(0,s.useState)(!1);return(0,s.useEffect)(()=>{let n=new IntersectionObserver(([e])=>{e.isIntersecting&&(r(!0),n.disconnect())},{threshold:e});return t.current&&n.observe(t.current),()=>n.disconnect()},[]),[t,n]},O=()=>{let[e,t]=D(.08);return(0,c.jsx)(`section`,{className:`wde`,ref:e,children:(0,c.jsx)(`div`,{className:`wde-container`,children:(0,c.jsxs)(`div`,{className:`wde-grid`,children:[(0,c.jsxs)(`div`,{className:`wde-left`,children:[(0,c.jsx)(`div`,{className:`wds-section-label`,children:`OUR DIFFERENCE`}),(0,c.jsxs)(`h3`,{className:`wde-heading`,children:[`Why Businesses Choose Brandmingo `,(0,c.jsx)(`span`,{children:`SEO Services`})]}),(0,c.jsx)(`p`,{className:`wde-desc`,children:`Most SEO agencies focus only on rankings. At Brandmingo, we focus on qualified traffic, lead generation, measurable ROI, and long-term business growth through proven SEO strategies.`}),(0,c.jsx)(`div`,{className:`wde-gradient-bar`})]}),(0,c.jsxs)(`div`,{className:`wde-right`,children:[(0,c.jsx)(`div`,{className:`wde-features`,children:S.map((e,n)=>(0,c.jsxs)(`div`,{className:`wde-feat${t?` wde-anim`:``}`,style:t?{animationDelay:`${n*.1}s`}:{},children:[(0,c.jsx)(`div`,{className:`wde-feat-icon`,children:(0,c.jsx)(`i`,{className:e.fa})}),(0,c.jsxs)(`div`,{className:`wde-feat-body`,children:[(0,c.jsx)(`h5`,{children:e.title}),(0,c.jsx)(`p`,{children:e.desc})]})]},n))}),(0,c.jsxs)(`div`,{className:`wde-note`,children:[(0,c.jsx)(`div`,{className:`wde-note-icon`,children:(0,c.jsx)(`i`,{className:`fa-solid fa-rocket`})}),(0,c.jsxs)(`p`,{children:[`Higher Google rankings matter only when they generate`,` `,(0,c.jsx)(`em`,{children:`qualified leads `}),`real customers, and measurable business growth`]})]})]})]})})})},k=()=>{let[e,t]=D(.08);return(0,c.jsx)(`section`,{className:`wdec`,ref:e,children:(0,c.jsx)(`div`,{className:`wdec-container`,children:(0,c.jsxs)(`div`,{className:`wdec-grid`,children:[(0,c.jsxs)(`div`,{className:`wdec-left`,children:[(0,c.jsx)(`div`,{className:`wds-section-label`,children:`GROW YOUR BUSINESS`}),(0,c.jsxs)(`h3`,{className:`wdec-heading`,children:[`Is SEO Right`,(0,c.jsx)(`span`,{children:`for Your Business?`})]}),(0,c.jsx)(`div`,{className:`wdec-divider`}),(0,c.jsx)(`p`,{className:`wdec-desc`,children:`If your website isn't generating consistent organic traffic or relies heavily on paid ads, SEO can become your most valuable long-term growth channel. A strategic SEO campaign helps improve rankings, attract qualified visitors, and generate sustainable leads that continue growing your business over time.`})]}),(0,c.jsxs)(`div`,{className:`wdec-cards`,children:[(0,c.jsxs)(`div`,{className:`wdec-card${t?` wde-anim`:``}`,style:t?{animationDelay:`0.1s`}:{},children:[(0,c.jsx)(`div`,{className:`wdec-card-icon`,children:(0,c.jsx)(`i`,{className:`fa-solid fa-magnifying-glass`})}),(0,c.jsxs)(`h4`,{children:[`SEO Optimization `,(0,c.jsx)(`span`,{children:`Allows You To:`})]}),(0,c.jsx)(`ul`,{className:`wdec-list`,children:C.map((e,t)=>(0,c.jsxs)(`li`,{children:[(0,c.jsx)(`i`,{className:`fa-solid fa-arrow-right`}),e]},t))})]}),(0,c.jsxs)(`div`,{className:`wdec-card${t?` wde-anim`:``}`,style:t?{animationDelay:`0.2s`}:{},children:[(0,c.jsx)(`div`,{className:`wdec-card-icon`,children:(0,c.jsx)(`i`,{className:`fa-solid fa-gift`})}),(0,c.jsx)(`h4`,{children:`We Provide:`}),(0,c.jsx)(`ul`,{className:`wdec-list wdec-list--dot`,children:w.map((e,t)=>(0,c.jsxs)(`li`,{children:[(0,c.jsx)(`i`,{className:`fa-solid fa-circle`}),e]},t))})]})]})]})})})},A=()=>{let[e,t]=D(.08);return(0,c.jsx)(`section`,{className:`wdpl`,ref:e,children:(0,c.jsx)(`div`,{className:`wdpl-container`,children:(0,c.jsxs)(`div`,{className:`wdpl-grid`,children:[(0,c.jsxs)(`div`,{className:`wdpl-left`,children:[(0,c.jsx)(`div`,{className:`wds-section-label`,children:`CHOOSE YOUR SEO PATH`}),(0,c.jsxs)(`h3`,{className:`wdpl-heading`,children:[`Which SEO `,(0,c.jsx)(`span`,{children:`Service`}),` Do You Need?`]}),(0,c.jsx)(`p`,{className:`wdpl-desc`,children:`Every business has unique goals, competition, and audiences. We help you choose the right SEO strategy to improve rankings, increase organic traffic, and achieve long-term business growth.`})]}),(0,c.jsxs)(`div`,{className:`wdpl-right`,children:[(0,c.jsx)(`div`,{className:`wdpl-cards`,children:T.map((e,n)=>(0,c.jsxs)(`div`,{className:`wdpl-card${t?` wde-anim`:``}`,style:t?{animationDelay:`${n*.1}s`}:{},children:[(0,c.jsxs)(`div`,{className:`wdpl-card-inner`,children:[(0,c.jsx)(`div`,{className:`wdpl-card-icon`,children:(0,c.jsx)(`i`,{className:e.fa})}),(0,c.jsxs)(`div`,{className:`wdpl-card-body`,children:[(0,c.jsx)(`h5`,{children:e.title}),(0,c.jsx)(`span`,{className:`wdpl-sub`,children:e.sub}),(0,c.jsx)(`p`,{children:e.desc})]})]}),(0,c.jsx)(`div`,{className:`wdpl-arrow`,children:(0,c.jsx)(`i`,{className:`fa-solid fa-arrow-right`})})]},n))}),(0,c.jsxs)(`div`,{className:`wdpl-note${t?` wde-anim`:``}`,style:t?{animationDelay:`0.45s`}:{},children:[(0,c.jsx)(`div`,{className:`wdpl-note-icon`,children:(0,c.jsx)(`i`,{className:`fa-solid fa-lightbulb`})}),(0,c.jsx)(`p`,{children:`The right SEO strategy depends on your goals — and we help you grow in the right direction from day one.`})]})]})]})})})},j=()=>{let[e,t]=D(.08),[n,r]=(0,s.useState)(null),i=e=>r(n===e?null:e);return(0,c.jsx)(`section`,{className:`wdfq`,ref:e,children:(0,c.jsxs)(`div`,{className:`wdfq-container`,children:[(0,c.jsx)(`div`,{className:`wds-section-label`,children:`QUESTIONS? WE'VE GOT ANSWERS`}),(0,c.jsx)(`h3`,{className:`wdfq-heading`,children:`Frequently Asked Questions`}),(0,c.jsx)(`div`,{className:`wdfq-list`,children:E.map((e,r)=>(0,c.jsxs)(`div`,{className:`wdfq-item${n===r?` open`:``}${t?` wde-anim`:``}`,style:t?{animationDelay:`${r*.1}s`}:{},onClick:()=>i(r),children:[(0,c.jsxs)(`div`,{className:`wdfq-q`,children:[(0,c.jsx)(`div`,{className:`wdfq-icon`,children:(0,c.jsx)(`i`,{className:e.fa})}),(0,c.jsx)(`span`,{children:e.q}),(0,c.jsx)(`div`,{className:`wdfq-plus`,children:(0,c.jsx)(`i`,{className:`fa-solid ${n===r?`fa-minus`:`fa-plus`}`})})]}),n===r&&(0,c.jsx)(`div`,{className:`wdfq-a`,children:(0,c.jsx)(`p`,{children:e.a})})]},r))})]})})},M=()=>(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(O,{}),(0,c.jsx)(k,{}),(0,c.jsx)(A,{}),(0,c.jsx)(j,{})]}),N=()=>(0,c.jsxs)(`div`,{className:`page-wrapper`,children:[(0,c.jsx)(o,{title:`Best SEO Company in Noida & Delhi NCR | Brandmingo`,description:`Rank #1 on Google with Brandmingo, the leading SEO agency in Noida Sector 62. We deliver data-driven on-page SEO, Google Maps Local 3-Pack rankings, and high-authority link building.`,canonical:`https://brandmingo.com/seo-optimizing`,keywords:`SEO agency in Noida, best SEO company in Noida, local SEO services Noida, search engine optimization Delhi NCR, Brandmingo`}),(0,c.jsx)(l,{}),(0,c.jsx)(`section`,{className:`services-details pt-120 pb-120`,style:{marginTop:`40px`,marginBottom:`120px`},children:(0,c.jsx)(`div`,{className:`service-details-page`,children:(0,c.jsx)(`div`,{className:`container`,children:(0,c.jsx)(`div`,{className:`wd-outer`,children:(0,c.jsx)(`div`,{className:`wd-content-col`,children:(0,c.jsxs)(`div`,{className:`services-details__content`,children:[(0,c.jsx)(m,{}),(0,c.jsx)(x,{}),(0,c.jsx)(M,{})]})})})})})})]});export{N as default};