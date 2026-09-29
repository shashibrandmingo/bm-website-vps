import{a as e}from"./rolldown-runtime-COnpUsM8.js";import{d as t,l as n}from"./animations-BJc3zUQd.js";import{Ct as r,kt as i,xt as a}from"./vendor-CfdKfBq_.js";import{n as o}from"./popup-DfbqftR9.js";var s=e(t(),1),c=n(),l=()=>((0,s.useEffect)(()=>{},[]),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(`style`,{children:`
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

        /* ════════════════════════════════════
           RIGHT VISUAL — Ads Dashboard Mock
        ════════════════════════════════════ */
        .wd-hero-visual { position: relative; }

        .wd-device-wrapper {
          position: relative;
          display: flex;
          align-items: flex-end;
          gap: -20px;
        }

        /* ── LAPTOP ── */
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

        /* ── Laptop Body — Ads Dashboard ── */
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

        /* Dashboard top row */
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

        /* KPI mini cards */
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

        /* Channel performance bars */
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
          font-size: 10px;
          flex-shrink: 0;
        }

        .wd-ch-name {
          font-size: 9px;
          color: rgba(255,255,255,0.55);
          width: 52px;
          flex-shrink: 0;
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

        /* Phone — lead counter widget */
        .wd-phone-widget-label {
          font-size: 7.5px;
          font-weight: 700;
          color: rgba(255,255,255,0.4);
          text-transform: uppercase;
          letter-spacing: 0.8px;
          margin-bottom: 6px;
        }

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

        /* mini channel pills */
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
          font-size: 8px;
          flex-shrink: 0;
        }

        .wd-phone-ch-name {
          font-size: 8px;
          color: rgba(255,255,255,0.55);
          flex: 1;
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
            width: 56px !important;
            height: 56px !important;
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
      `}),(0,c.jsx)(`section`,{className:`wd-hero`,children:(0,c.jsxs)(`div`,{className:`wd-inner`,children:[(0,c.jsxs)(`div`,{className:`wd-hero-grid`,children:[(0,c.jsxs)(`div`,{className:`wd-hero-content`,children:[(0,c.jsxs)(`div`,{className:`wd-tagline`,children:[(0,c.jsx)(`i`,{className:`fas fa-bolt`}),`LAUNCH. OPTIMIZE. SCALE.`]}),(0,c.jsxs)(`h3`,{children:[`Performance-Driven`,(0,c.jsx)(`br`,{}),`Ad Campaigns`,` `,(0,c.jsx)(`span`,{className:`wd-title-accent`,children:`That Generate Results`})]}),(0,c.jsx)(`p`,{className:`wd-description`,children:`We build data-driven advertising campaigns that reach the right audience, generate qualified leads, increase conversions, and maximize ROI across Google, Meta, LinkedIn, and other digital platforms.`}),(0,c.jsxs)(`div`,{className:`wd-btn-group`,children:[(0,c.jsxs)(`button`,{className:`wd-btn-primary`,type:`button`,onClick:o,children:[(0,c.jsx)(`i`,{className:`fas fa-rocket`}),`Start Your Campaign`]}),(0,c.jsxs)(r,{to:`/portfolio`,className:`wd-btn-secondary`,children:[(0,c.jsx)(`span`,{className:`wd-play-icon`,children:(0,c.jsx)(`i`,{className:`fas fa-eye`})}),`View Our Results`]})]})]}),(0,c.jsx)(`div`,{className:`wd-hero-visual`,children:(0,c.jsxs)(`div`,{className:`wd-device-wrapper`,children:[(0,c.jsxs)(`div`,{className:`wd-laptop`,children:[(0,c.jsxs)(`div`,{className:`wd-laptop-bar`,children:[(0,c.jsxs)(`div`,{className:`wd-dots`,children:[(0,c.jsx)(`div`,{className:`wd-dot-circle wd-dot-r`}),(0,c.jsx)(`div`,{className:`wd-dot-circle wd-dot-y`}),(0,c.jsx)(`div`,{className:`wd-dot-circle wd-dot-g`})]}),(0,c.jsxs)(`div`,{className:`wd-url-bar`,children:[(0,c.jsx)(`div`,{className:`wd-url-bar-dot`}),(0,c.jsx)(`span`,{className:`wd-url-text`,children:`ads.brandmingo.com`})]})]}),(0,c.jsxs)(`div`,{className:`wd-laptop-nav`,children:[(0,c.jsxs)(`div`,{className:`wd-mock-logo`,children:[`Brand`,(0,c.jsx)(`span`,{children:`Ads`})]}),(0,c.jsx)(`ul`,{className:`wd-mock-nav-links`,children:[`Campaigns`,`Analytics`,`Leads`,`Reports`,`Settings`].map(e=>(0,c.jsx)(`li`,{children:e},e))}),(0,c.jsx)(`div`,{className:`wd-mock-cta-small`,children:`Launch Ads →`})]}),(0,c.jsxs)(`div`,{className:`wd-laptop-body`,children:[(0,c.jsxs)(`div`,{className:`wd-dash-header`,children:[(0,c.jsxs)(`div`,{className:`wd-dash-title`,children:[`Campaign `,(0,c.jsx)(`span`,{children:`Performance`})]}),(0,c.jsxs)(`div`,{className:`wd-dash-live`,children:[(0,c.jsx)(`div`,{className:`wd-dash-live-dot`}),`Live`]})]}),(0,c.jsx)(`div`,{className:`wd-kpi-row`,children:[{icon:`fas fa-mouse-pointer`,label:`Total Clicks`,value:`84.2K`,delta:`+22% this month`},{icon:`fas fa-user-check`,label:`Leads Generated`,value:`3,180`,delta:`+31% this month`},{icon:`fas fa-chart-line`,label:`Avg. ROAS`,value:`4.8x`,delta:`+0.6x vs last`}].map((e,t)=>(0,c.jsxs)(`div`,{className:`wd-kpi-card`,children:[(0,c.jsxs)(`div`,{className:`wd-kpi-label`,children:[(0,c.jsx)(`i`,{className:e.icon}),` `,e.label]}),(0,c.jsx)(`div`,{className:`wd-kpi-value`,children:e.value}),(0,c.jsx)(`div`,{className:`wd-kpi-delta`,children:e.delta})]},t))}),(0,c.jsx)(`div`,{className:`wd-channels`,children:[{icon:`fab fa-google`,color:`#EA4335`,bg:`rgba(234,67,53,0.18)`,name:`Google Ads`,val:`38.4K`,barW:`85%`,barColor:`#EA4335`},{icon:`fab fa-facebook-f`,color:`#1877F2`,bg:`rgba(24,119,242,0.18)`,name:`Facebook`,val:`24.1K`,barW:`58%`,barColor:`#1877F2`},{icon:`fab fa-instagram`,color:`#E1306C`,bg:`rgba(225,48,108,0.18)`,name:`Instagram`,val:`14.6K`,barW:`40%`,barColor:`#E1306C`},{icon:`fab fa-linkedin-in`,color:`#0A66C2`,bg:`rgba(10,102,194,0.18)`,name:`LinkedIn`,val:`7.1K`,barW:`22%`,barColor:`#0A66C2`}].map((e,t)=>(0,c.jsxs)(`div`,{className:`wd-ch-row`,children:[(0,c.jsx)(`div`,{className:`wd-ch-icon`,style:{background:e.bg},children:(0,c.jsx)(`i`,{className:e.icon,style:{color:e.color}})}),(0,c.jsx)(`span`,{className:`wd-ch-name`,children:e.name}),(0,c.jsx)(`div`,{className:`wd-ch-bar-track`,children:(0,c.jsx)(`div`,{className:`wd-ch-bar-fill`,style:{"--bar-w":e.barW,background:e.barColor}})}),(0,c.jsx)(`span`,{className:`wd-ch-val`,children:e.val})]},t))}),(0,c.jsx)(`div`,{className:`wd-mock-stats`,children:[{value:`300+`,label:`Projects Completed`},{value:`98%`,label:`Client Satisfaction`},{value:`3+`,label:`Years Experience`},{value:`24/7`,label:`Support`}].map((e,t)=>(0,c.jsxs)(`div`,{className:`wd-mock-stat`,children:[(0,c.jsx)(`span`,{className:`wd-mock-stat-val`,children:e.value}),(0,c.jsx)(`span`,{className:`wd-mock-stat-lbl`,children:e.label})]},t))})]})]}),(0,c.jsxs)(`div`,{className:`wd-phone`,children:[(0,c.jsx)(`div`,{className:`wd-phone-notch`,children:(0,c.jsx)(`div`,{className:`wd-phone-notch-bar`})}),(0,c.jsxs)(`div`,{className:`wd-phone-body`,children:[(0,c.jsxs)(`div`,{className:`wd-phone-logo`,children:[`Brand`,(0,c.jsx)(`span`,{children:`Ads`})]}),(0,c.jsx)(`div`,{className:`wd-phone-widget-label`,children:`Today's Leads`}),(0,c.jsx)(`div`,{className:`wd-phone-lead-count`,children:(0,c.jsx)(`span`,{children:`142`})}),(0,c.jsxs)(`p`,{className:`wd-phone-lead-sub`,children:[`+18 in last hour`,(0,c.jsx)(`br`,{}),`across all channels`]}),(0,c.jsx)(`div`,{className:`wd-phone-channels`,children:[{icon:`fab fa-google`,color:`#EA4335`,bg:`rgba(234,67,53,0.18)`,name:`Google`,val:`68`},{icon:`fab fa-facebook-f`,color:`#1877F2`,bg:`rgba(24,119,242,0.18)`,name:`Facebook`,val:`41`},{icon:`fab fa-instagram`,color:`#E1306C`,bg:`rgba(225,48,108,0.18)`,name:`Instagram`,val:`33`}].map((e,t)=>(0,c.jsxs)(`div`,{className:`wd-phone-ch-row`,children:[(0,c.jsx)(`div`,{className:`wd-phone-ch-icon`,style:{background:e.bg},children:(0,c.jsx)(`i`,{className:e.icon,style:{color:e.color,fontSize:7}})}),(0,c.jsx)(`span`,{className:`wd-phone-ch-name`,children:e.name}),(0,c.jsx)(`span`,{className:`wd-phone-ch-val`,children:e.val})]},t))}),(0,c.jsxs)(`div`,{className:`wd-phone-btn`,children:[`View All Leads`,` `,(0,c.jsx)(`i`,{className:`fas fa-arrow-right`,style:{fontSize:7}})]})]})]})]})})]}),(0,c.jsx)(`div`,{className:`wd-features`,children:[{icon:`fas fa-bolt`,title:`High-Converting Campaigns`,desc:`Strategic ad campaigns designed to increase conversions, reduce acquisition costs, and maximize ROI.`},{icon:`fas fa-mobile-alt`,title:`Multi-Platform Reach`,desc:`Reach your ideal audience through Google Ads, Meta Ads, LinkedIn Ads, and other leading platforms.`},{icon:`fas fa-search`,title:`Data-Driven Optimization`,desc:`Continuous testing and campaign optimization to improve performance, increase leads, and drive better results.`},{icon:`fas fa-shield-alt`,title:`Scalable Growth`,desc:`Scalable advertising strategies built to support sustainable business growth without increasing wasted ad spend.`}].map((e,t)=>(0,c.jsxs)(`div`,{className:`wd-feat-item`,children:[(0,c.jsx)(`div`,{className:`wd-feat-icon-wrap`,children:(0,c.jsx)(`i`,{className:e.icon})}),(0,c.jsxs)(`div`,{children:[(0,c.jsx)(`h4`,{children:e.title}),(0,c.jsx)(`p`,{children:e.desc})]})]},t))})]})})]})),u=`https://res.cloudinary.com/dqqgpii8v/image/upload/v1783149224/Untitled_design_wvzr0k.png`,d=[{fa:`fa-solid fa-chart-line`,label:`Performance Marketing`,to:`/performance-marketing`},{fa:`fa-brands fa-google`,label:`Google Ads`,to:`/google-ads`},{fa:`fa-brands fa-meta`,label:`Facebook / Instagram Ads`,to:`/facebook-instagram-ads`},{fa:`fa-brands fa-linkedin`,label:`Linkedin Ads`,to:`/linkedin-ads`},{fa:(0,c.jsx)(a,{size:15}),label:`OpenAI Ads`,to:`/openai-ads`}],f=[{fa:`fa-solid fa-bullseye`,title:`Reach High-Intent Customers`,desc:`Connect with people actively searching for your products or services to increase qualified leads and conversions.`},{fa:`fa-solid fa-bullhorn`,title:`Build Strong Brand Awareness`,desc:`Expand your brand visibility across leading digital platforms with consistent, targeted advertising campaigns.`},{fa:`fa-solid fa-chart-line`,title:`Generate Quality Leads`,desc:`Drive high-quality leads and sales through data-driven campaigns optimized for better conversion performance.`},{fa:`fa-solid fa-chart-pie`,title:`Measure Every Result`,desc:`Track clicks, leads, conversions, and ROI with real-time analytics to continuously improve campaign performance.`},{fa:`fa-solid fa-rocket`,title:`Scale Business Growth`,desc:`Increase revenue with scalable advertising strategies designed to support sustainable business growth.`}],p=[{fa:`fa-solid fa-briefcase`,key:`p`,suffix:`+`,label:`Projects Completed`,target:300},{fa:`fa-solid fa-face-smile`,key:`s`,suffix:`%`,label:`Client Satisfaction`,target:98},{fa:`fa-solid fa-award`,key:`e`,suffix:`+`,label:`Years Experience`,target:3}],m=()=>{let e=(0,s.useRef)(null),[t,n]=(0,s.useState)(!1),[r,a]=(0,s.useState)(0),[o,l]=(0,s.useState)({p:0,s:0,h:0,e:0}),m=i();(0,s.useEffect)(()=>{let t=new IntersectionObserver(([e])=>{e.isIntersecting&&(n(!0),h(),t.disconnect())},{threshold:.08});return e.current&&t.observe(e.current),()=>t.disconnect()},[]);let h=()=>{let e={p:300,s:98,h:24,e:3},t=0,n=setInterval(()=>{t++;let r=1-(1-Math.min(t/60,1))**3;l({p:Math.round(e.p*r),s:Math.round(e.s*r),h:Math.round(e.h*r),e:Math.round(e.e*r)}),t>=60&&clearInterval(n)},2e3/60)};return(0,c.jsx)(`section`,{className:`wda`,ref:e,children:(0,c.jsxs)(`div`,{className:`wda-grid`,children:[(0,c.jsxs)(`aside`,{className:`wda-sidebar`,children:[(0,c.jsx)(`div`,{className:`wda-main-card`,children:(0,c.jsxs)(`div`,{className:`wda-logo-row`,children:[(0,c.jsx)(`div`,{className:`wda-logo-img`,children:(0,c.jsx)(`i`,{className:`fa-solid fa-layer-group`})}),(0,c.jsxs)(`div`,{className:`wda-logo-text`,children:[(0,c.jsx)(`b`,{children:`Brandmingo`}),(0,c.jsx)(`span`,{children:`Digital Solutions`})]})]})}),(0,c.jsx)(`div`,{className:`wda-main-card`,children:(0,c.jsx)(`div`,{className:`wda-nav-wrap wda-nav-wrap--no-border`,children:(0,c.jsx)(`ul`,{className:`wda-nav`,children:d.map((e,t)=>(0,c.jsxs)(`li`,{className:r===t?`active`:``,onClick:()=>{a(t),m(e.to)},children:[(0,c.jsxs)(`span`,{className:`nl`,children:[typeof e.fa==`string`?(0,c.jsx)(`i`,{className:e.fa}):e.fa,e.label]}),(0,c.jsx)(`i`,{className:`fa-solid fa-chevron-right chev`})]},t))})})}),(0,c.jsxs)(`div`,{className:`wda-main-card wda-call`,children:[(0,c.jsx)(`i`,{className:`fa-solid fa-rocket wda-rocket`}),(0,c.jsxs)(`h3`,{children:[`Let’s Grow Your `,(0,c.jsx)(`span`,{children:`Business with Ads`})]}),(0,c.jsx)(`p`,{children:`Have a campaign idea? Let’s turn your budget into high-performing ads that generate real leads and sales.`}),(0,c.jsx)(`a`,{href:`tel:+919990613140`,className:`wda-ring`,children:(0,c.jsx)(`i`,{className:`fa-solid fa-phone`})}),(0,c.jsx)(`small`,{className:`wda-expert-label`,children:`Talk to an expert`}),(0,c.jsx)(`a`,{href:`tel:+919990613140`,className:`wda-phone`,children:`+91 99906 13140`}),(0,c.jsx)(`small`,{className:`wda-expert-label wda-timing`,children:`Mon – Sat | 10:00 AM – 7:00 PM`})]}),(0,c.jsx)(`div`,{className:`wda-main-card`,children:(0,c.jsxs)(`div`,{className:`wda-stats-wrap`,children:[(0,c.jsx)(`p`,{className:`wda-stats-lbl`,children:`Our Work Speaks`}),p.map(e=>(0,c.jsxs)(`div`,{className:`wda-stat`,children:[(0,c.jsx)(`div`,{className:`wda-stat-ic`,children:(0,c.jsx)(`i`,{className:e.fa})}),(0,c.jsxs)(`div`,{children:[(0,c.jsxs)(`b`,{children:[o[e.key],e.suffix]}),(0,c.jsx)(`span`,{children:e.label})]})]},e.key))]})}),(0,c.jsxs)(`a`,{href:`src/assets/images/Brochure/BM Brochure.pdf`,target:`_blank`,rel:`noopener noreferrer`,className:`wda-pdf-card`,children:[(0,c.jsxs)(`span`,{className:`wda-dl-label`,children:[(0,c.jsx)(`i`,{className:`fa-solid fa-file-pdf`}),`Brochure (PDF)`]}),(0,c.jsx)(`div`,{className:`wda-dl-btn`,children:(0,c.jsx)(`i`,{className:`fa-solid fa-download`})})]})]}),(0,c.jsxs)(`main`,{className:`wda-main`,children:[(0,c.jsxs)(`div`,{className:`wda-hero`,children:[(0,c.jsx)(`img`,{src:u,alt:`Ads & Campaigns Banner - Brandmingo`,className:`wda-hero-img`}),(0,c.jsx)(`div`,{className:`wda-hero-ov`,children:(0,c.jsxs)(`div`,{className:`wda-hero-txt`,children:[(0,c.jsxs)(`div`,{className:`wda-hero-badge`,children:[(0,c.jsx)(`i`,{className:`fa-solid fa-laptop-code`}),`About Ads & Campaigns`]}),(0,c.jsxs)(`h2`,{children:[`Running Performance-Driven Campaigns`,` `,(0,c.jsx)(`span`,{children:`That Fuel Business Growth`})]})]})})]}),(0,c.jsxs)(`article`,{children:[(0,c.jsxs)(`div`,{className:`wda-lbl`,children:[(0,c.jsx)(`i`,{className:`fa-solid fa-circle`}),`Introduction`]}),(0,c.jsx)(`h2`,{className:`wda-h1`,children:`What is Ads and Campaign Management`}),(0,c.jsxs)(`p`,{className:`wda-p`,children:[`Ads & Campaign Management is the process of planning, launching, managing, and optimizing paid advertising campaigns across platforms like Google Ads, Meta Ads, LinkedIn Ads, and more. A strategic approach helps businesses reach the right audience, generate qualified leads, increase conversions, and maximize return on investment.`,(0,c.jsx)(`br`,{}),`At Brandmingo, we combine audience research, creative ad strategies, performance tracking, and continuous optimization to deliver measurable results. From lead generation and eCommerce sales to brand awareness campaigns, we create data-driven advertising solutions that help businesses scale faster and achieve sustainable growth.`]}),(0,c.jsxs)(`div`,{className:`wda-lbl`,style:{marginTop:`40px`},children:[(0,c.jsx)(`i`,{className:`fa-solid fa-circle`}),`Strategy`]}),(0,c.jsx)(`h3`,{className:`wda-h2`,children:`Why Smart Businesses Invest in Paid Advertising`}),(0,c.jsx)(`div`,{className:`wda-reasons`,children:f.map((e,n)=>(0,c.jsxs)(`div`,{className:`wda-r`,style:t?{animation:`wda-fade-up 0.55s ${n*.1}s forwards`}:{},children:[(0,c.jsx)(`div`,{className:`wda-r-ico`,children:(0,c.jsx)(`i`,{className:e.fa})}),(0,c.jsx)(`h5`,{children:e.title}),(0,c.jsx)(`p`,{children:e.desc})]},n))}),(0,c.jsxs)(`div`,{className:`wda-quote`,children:[(0,c.jsx)(`div`,{className:`wda-quote-icon`,children:(0,c.jsx)(`i`,{className:`fa-solid fa-quote-right`})}),(0,c.jsxs)(`span`,{children:[`Every day you delay your campaigns is another`,` `,(0,c.jsx)(`em`,{children:`opportunity your competitors win. `})]})]}),(0,c.jsxs)(`div`,{className:`wda-img-cards`,children:[(0,c.jsxs)(`div`,{className:`wda-img-card`,children:[(0,c.jsx)(`img`,{src:`https://res.cloudinary.com/dqqgpii8v/image/upload/v1783150698/Untitled_design_1_tjxamr.png`,alt:`Modern Web Development`}),(0,c.jsxs)(`div`,{className:`wda-img-card-body`,children:[(0,c.jsx)(`div`,{className:`wda-img-card-icon`,children:(0,c.jsx)(`i`,{className:`fa-solid fa-laptop-code`})}),(0,c.jsx)(`p`,{children:`Launch data-driven advertising campaigns that increase brand visibility, generate qualified leads, and maximize return on ad spend across digital platforms.`}),(0,c.jsx)(`a`,{href:`#contact`,className:`wda-img-card-arrow`,children:(0,c.jsx)(`i`,{className:`fa-solid fa-arrow-right`})})]})]}),(0,c.jsxs)(`div`,{className:`wda-img-card`,children:[(0,c.jsx)(`img`,{src:`https://i.ibb.co/Zz0MNRM4/website-developement-image-Brandmingo.avif`,alt:`E-commerce Solutions`}),(0,c.jsxs)(`div`,{className:`wda-img-card-body`,children:[(0,c.jsx)(`div`,{className:`wda-img-card-icon`,children:(0,c.jsx)(`i`,{className:`fa-solid fa-cart-shopping`})}),(0,c.jsx)(`p`,{children:`Build conversion-focused campaigns designed to attract high-intent customers, improve lead quality, and drive consistent business growth.`}),(0,c.jsx)(`a`,{href:`#contact`,className:`wda-img-card-arrow`,children:(0,c.jsx)(`i`,{className:`fa-solid fa-arrow-right`})})]})]})]})]})]})]})})},h=[{fa:`fa-solid fa-magnifying-glass-chart`,num:`01`,title:`Google Search Ads`,desc:`Capture high-intent customers actively searching for your products or services and convert clicks into valuable business opportunities.`},{fa:`fa-solid fa-bullhorn`,num:`02`,title:`Meta Ads (Facebook & Instagram)`,desc:`Reach the right audience with targeted campaigns that increase brand awareness, generate leads, and drive more sales.`},{fa:`fa-solid fa-rotate`,num:`03`,title:`Display & Remarketing Ads`,desc:`Reconnect with interested visitors through smart remarketing campaigns that improve conversions and maximize ROI.`},{fa:`fa-solid fa-chart-line`,num:`04`,title:`Performance Campaigns`,desc:`Run data-driven campaigns optimized for lead generation, customer acquisition, and sustainable business growth.`}],g=[{fa:`fa-brands fa-google`,title:`Google Ads`,desc:`Capture high-intent customers actively searching for your products and services to generate quality leads and increase sales.`},{fa:`fa-brands fa-facebook`,title:`Meta Ads (Facebook & Instagram)`,desc:`Capture high-intent customers actively searching for your products and services to generate quality leads and increase sales.`},{fa:`fa-brands fa-youtube`,title:`YouTube Ads`,desc:`Engage potential customers with impactful video campaigns that build brand trust and drive high-quality conversions.`},{fa:`fa-solid fa-chart-pie`,title:`Analytics & Tracking`,desc:`Monitor every click, lead, and conversion with real-time analytics to continuously improve campaign performance and ROI.`}],_=[{num:`01`,fa:`fa-solid fa-magnifying-glass-chart`,title:`Business & Audience Analysis`,desc:`We analyze your business, target audience, competitors, and goals to build a data-driven campaign strategy.`},{num:`02`,fa:`fa-solid fa-clipboard-list`,title:`Strategy & Campaign Planning`,desc:`We define audience targeting, budget allocation, campaign structure, and messaging for maximum performance.`},{num:`03`,fa:`fa-solid fa-pen-nib`,title:`Creative Development & Setup`,desc:`We create compelling ad creatives, set up campaigns, and implement accurate conversion tracking.`},{num:`04`,fa:`fa-solid fa-chart-line`,title:`Optimization & Scaling`,desc:`We continuously test, optimize, and scale campaigns to improve conversions, reduce costs, and increase ROI.`},{num:`05`,fa:`fa-solid fa-chart-pie`,title:`Reporting & Growth Insights`,desc:`Receive transparent reports and actionable insights to refine strategy and drive long-term business growth.`}],v=()=>{let e=(0,s.useRef)(null),[t,n]=(0,s.useState)(!1);return(0,s.useEffect)(()=>{let t=new IntersectionObserver(([e])=>{e.isIntersecting&&(n(!0),t.disconnect())},{threshold:.1});return e.current&&t.observe(e.current),()=>t.disconnect()},[]),(0,c.jsx)(`section`,{className:`wds`,ref:e,children:(0,c.jsx)(`div`,{className:`wds-container`,children:(0,c.jsxs)(`div`,{className:`wds-types-grid`,children:[(0,c.jsxs)(`div`,{className:`wds-types-left`,children:[(0,c.jsx)(`div`,{className:`wds-section-label`,children:`WHAT WE RUN`}),(0,c.jsx)(`h3`,{className:`wds-types-heading`,children:`Ad Campaigns Built for Maximum Growth`}),(0,c.jsx)(`p`,{className:`wds-types-desc`,children:`Every business has unique goals. We create tailored advertising strategies across leading digital platforms to generate qualified leads, increase conversions, and deliver measurable business growth.`}),(0,c.jsx)(`div`,{className:`wds-deco`,"aria-hidden":`true`,children:(0,c.jsxs)(`svg`,{width:`240`,height:`190`,viewBox:`0 0 240 190`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,children:[(0,c.jsxs)(`defs`,{children:[(0,c.jsxs)(`radialGradient`,{id:`dotFade`,cx:`20%`,cy:`20%`,r:`80%`,children:[(0,c.jsx)(`stop`,{offset:`0%`,stopColor:`white`,stopOpacity:`0.55`}),(0,c.jsx)(`stop`,{offset:`100%`,stopColor:`white`,stopOpacity:`0`})]}),(0,c.jsx)(`mask`,{id:`gridMask`,children:(0,c.jsx)(`rect`,{width:`240`,height:`190`,fill:`url(#dotFade)`})}),(0,c.jsxs)(`radialGradient`,{id:`glowDot`,cx:`50%`,cy:`50%`,r:`50%`,children:[(0,c.jsx)(`stop`,{offset:`0%`,stopColor:`#f97316`,stopOpacity:`1`}),(0,c.jsx)(`stop`,{offset:`100%`,stopColor:`#f97316`,stopOpacity:`0`})]})]}),(0,c.jsx)(`g`,{mask:`url(#gridMask)`,children:Array.from({length:10},(e,t)=>Array.from({length:13},(e,n)=>(0,c.jsx)(`circle`,{cx:n*20+4,cy:t*20+4,r:`1.4`,fill:`#f97316`,opacity:`0.5`},`${t}-${n}`)))}),(0,c.jsx)(`path`,{d:`M 0 190 Q 180 150 230 20`,stroke:`#f97316`,strokeWidth:`1.2`,fill:`none`,opacity:`0.45`,strokeLinecap:`round`}),(0,c.jsx)(`circle`,{cx:`205`,cy:`72`,r:`5`,fill:`#f97316`,opacity:`0.9`}),(0,c.jsx)(`circle`,{cx:`205`,cy:`72`,r:`10`,fill:`#f97316`,opacity:`0.2`}),(0,c.jsx)(`circle`,{cx:`205`,cy:`72`,r:`16`,fill:`#f97316`,opacity:`0.08`})]})})]}),(0,c.jsx)(`div`,{className:`wds-types-cards`,children:h.map((e,n)=>(0,c.jsxs)(`div`,{className:`wds-type-card${t?` wds-anim`:``}`,style:t?{animationDelay:`${n*.1}s`}:{},children:[(0,c.jsx)(`span`,{className:`wds-card-num`,children:e.num}),(0,c.jsx)(`div`,{className:`wds-card-icon`,children:(0,c.jsx)(`i`,{className:e.fa})}),(0,c.jsx)(`h4`,{className:`wds-card-title`,children:e.title}),(0,c.jsx)(`p`,{className:`wds-card-desc`,children:e.desc}),(0,c.jsxs)(`a`,{href:`#contact`,className:`wds-card-link`,onClick:e=>{e.preventDefault(),o()},children:[`Learn More `,(0,c.jsx)(`i`,{className:`fa-solid fa-arrow-right`})]})]},n))})]})})})},y=()=>{let e=(0,s.useRef)(null),[t,n]=(0,s.useState)(!1);return(0,s.useEffect)(()=>{let t=new IntersectionObserver(([e])=>{e.isIntersecting&&(n(!0),t.disconnect())},{threshold:.1});return e.current&&t.observe(e.current),()=>t.disconnect()},[]),(0,c.jsx)(`section`,{className:`wdt`,ref:e,children:(0,c.jsx)(`div`,{className:`wdt-container`,children:(0,c.jsxs)(`div`,{className:`wdt-grid`,children:[(0,c.jsxs)(`div`,{className:`wdt-left`,children:[(0,c.jsx)(`div`,{className:`wds-section-label`,children:`Built with Powerful Platforms`}),(0,c.jsx)(`h3`,{className:`wdt-heading`,children:`Advertising Platforms That Drive Real Business Growth`}),(0,c.jsx)(`p`,{className:`wdt-desc`,children:`We leverage industry-leading advertising platforms to reach the right audience, generate qualified leads, increase conversions, and maximize ROI through data-driven campaign strategies tailored to your business goals.`})]}),(0,c.jsx)(`div`,{className:`wdt-cards`,children:g.map((e,n)=>(0,c.jsxs)(`div`,{className:`wdt-card${t?` wds-anim`:``}`,style:t?{animationDelay:`${n*.1}s`}:{},children:[(0,c.jsx)(`div`,{className:`wdt-card-icon`,children:(0,c.jsx)(`i`,{className:e.fa})}),(0,c.jsxs)(`div`,{className:`wdt-card-content`,children:[(0,c.jsx)(`h4`,{className:`wdt-card-title`,children:e.title}),(0,c.jsx)(`p`,{className:`wdt-card-desc`,children:e.desc}),(0,c.jsx)(`div`,{className:`wdt-card-line`})]})]},n))})]})})})},b=()=>{let e=(0,s.useRef)(null),[t,n]=(0,s.useState)(!1);return(0,s.useEffect)(()=>{let t=new IntersectionObserver(([e])=>{e.isIntersecting&&(n(!0),t.disconnect())},{threshold:.08});return e.current&&t.observe(e.current),()=>t.disconnect()},[]),(0,c.jsx)(`section`,{className:`wdp`,ref:e,children:(0,c.jsx)(`div`,{className:`wdp-container`,children:(0,c.jsxs)(`div`,{className:`wdp-grid`,children:[(0,c.jsxs)(`div`,{className:`wdp-left`,children:[(0,c.jsx)(`div`,{className:`wds-section-label`,children:`OUR WORKFLOW`}),(0,c.jsx)(`h3`,{className:`wdp-heading`,children:` Our Proven Ads Campaign Process`}),(0,c.jsx)(`p`,{className:`wdp-desc`,children:`Every successful campaign starts with a strategy. Our proven process combines research, creativity, optimization, and performance tracking to generate qualified leads, increase conversions, and maximize ROI.`}),(0,c.jsxs)(`div`,{className:`wdp-cta`,children:[(0,c.jsx)(`div`,{className:`wdp-cta-icon`,children:(0,c.jsx)(`i`,{className:`fa-solid fa-comments`})}),(0,c.jsxs)(`div`,{className:`wdp-cta-text`,children:[(0,c.jsx)(`h4`,{children:`Have a campaign in mind?`}),(0,c.jsx)(`p`,{children:`Let’s build high-performing ad campaigns that generate real leads, sales, and measurable growth.`}),(0,c.jsxs)(`button`,{className:`wdp-cta-btn`,type:`button`,onClick:o,children:[`Let's Talk`,(0,c.jsx)(`i`,{className:`fa-solid fa-arrow-right`})]})]})]})]}),(0,c.jsx)(`div`,{className:`wdp-steps`,children:_.map((e,n)=>(0,c.jsxs)(`div`,{className:`wdp-step${t?` wds-anim`:``}`,style:t?{animationDelay:`${n*.1}s`}:{},children:[(0,c.jsx)(`div`,{className:`wdp-step-num`,children:e.num}),(0,c.jsx)(`div`,{className:`wdp-step-icon`,children:(0,c.jsx)(`i`,{className:e.fa})}),(0,c.jsxs)(`div`,{className:`wdp-step-body`,children:[(0,c.jsx)(`h4`,{children:e.title}),(0,c.jsx)(`p`,{children:e.desc})]})]},n))})]})})})},x=()=>(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(v,{}),(0,c.jsx)(y,{}),(0,c.jsx)(b,{})]}),S=[{fa:`fa-solid fa-crosshairs`,title:`Precision Audience Targeting`,desc:`Reach high-intent audiences with advanced targeting strategies for better leads and conversions.`},{fa:`fa-solid fa-sack-dollar`,title:`ROI-Driven Campaigns`,desc:`Maximize every advertising investment with campaigns built for stronger returns and business growth.`},{fa:`fa-solid fa-chart-line`,title:`Continuous Optimization`,desc:`Monitor, test, and optimize campaigns in real time for improved performance and lower ad costs.`},{fa:`fa-solid fa-funnel-dollar`,title:`Conversion-Focused Strategy`,desc:`Turn website visitors into qualified leads and paying customers through data-driven campaigns.`},{fa:`fa-solid fa-chart-column`,title:`Transparent Reporting`,desc:`Track every click, lead, and conversion with clear reports and actionable performance insights.`}],C=[`Increase brand visibility across top platforms`,`Generate qualified leads and consistent sales`,`Reach the right audience with smart targeting`,`Scale your business with data-driven campaigns`],w=[`Google Ads & Meta Ads campaign management`,`Audience targeting and campaign strategy`,`High-converting ad creatives and copy`,`Performance tracking, optimization, and reporting`],T=[{fa:`fa-brands fa-google`,title:`Google Ads`,sub:`BEST FOR`,desc:`High-intent searches & quality lead generation`},{fa:`fa-brands fa-facebook`,title:`Meta Ads`,sub:`BEST FOR`,desc:`Audience targeting, engagement & brand growth`},{fa:`fa-brands fa-youtube`,title:`YouTube Ads`,sub:`BEST FOR`,desc:`Video advertising & customer engagement`},{fa:`fa-brands fa-linkedin`,title:`LinkedIn Ads`,sub:`BEST FOR`,desc:` B2B lead generation & professional outreach`}],E=[{fa:`fa-solid fa-bullhorn`,q:`What advertising platforms do you manage?`,a:`We manage campaigns across Google Ads, Meta Ads (Facebook & Instagram), YouTube Ads, and LinkedIn Ads. Every platform is selected based on your business goals, audience, and campaign objectives.`},{fa:`fa-solid fa-chart-line`,q:`Which advertising platform is best for my business?`,a:`The right platform depends on your industry, target audience, budget, and marketing goals. We analyze your business and recommend the platform that delivers the highest ROI.`},{fa:`fa-solid fa-clock`,q:`How long does it take to see results from ads?`,a:`Most campaigns begin generating data within a few days, while consistent leads and measurable growth improve through continuous optimization, testing, and performance tracking.`},{fa:`fa-solid fa-gear`,q:`How do you improve campaign performance over time?`,a:`We continuously monitor campaign data, test creatives, optimize targeting, adjust budgets, and refine bidding strategies to increase conversions and maximize your return on investment.`}],D=(e=.1)=>{let t=(0,s.useRef)(null),[n,r]=(0,s.useState)(!1);return(0,s.useEffect)(()=>{let n=new IntersectionObserver(([e])=>{e.isIntersecting&&(r(!0),n.disconnect())},{threshold:e});return t.current&&n.observe(t.current),()=>n.disconnect()},[]),[t,n]},O=()=>{let[e,t]=D(.08);return(0,c.jsx)(`section`,{className:`wde`,ref:e,children:(0,c.jsx)(`div`,{className:`wde-container`,children:(0,c.jsxs)(`div`,{className:`wde-grid`,children:[(0,c.jsxs)(`div`,{className:`wde-left`,children:[(0,c.jsx)(`div`,{className:`wds-section-label`,children:`WHY BRANDS CHOOSE US`}),(0,c.jsxs)(`h3`,{className:`wde-heading`,children:[`Campaigns That Generate Leads`,(0,c.jsx)(`span`,{children:` Not Just Clicks`})]}),(0,c.jsx)(`p`,{className:`wde-desc`,children:`Successful advertising is about more than traffic. We create performance-driven campaigns that attract qualified customers, increase conversions, and maximize ROI through data-backed strategies and continuous optimization.`}),(0,c.jsx)(`div`,{className:`wde-gradient-bar`})]}),(0,c.jsxs)(`div`,{className:`wde-right`,children:[(0,c.jsx)(`div`,{className:`wde-features`,children:S.map((e,n)=>(0,c.jsxs)(`div`,{className:`wde-feat${t?` wde-anim`:``}`,style:t?{animationDelay:`${n*.1}s`}:{},children:[(0,c.jsx)(`div`,{className:`wde-feat-icon`,children:(0,c.jsx)(`i`,{className:e.fa})}),(0,c.jsxs)(`div`,{className:`wde-feat-body`,children:[(0,c.jsx)(`h5`,{children:e.title}),(0,c.jsx)(`p`,{children:e.desc})]})]},n))}),(0,c.jsxs)(`div`,{className:`wde-note`,children:[(0,c.jsx)(`div`,{className:`wde-note-icon`,children:(0,c.jsx)(`i`,{className:`fa-solid fa-rocket`})}),(0,c.jsxs)(`p`,{children:[`If your ads aren't generating results, `,(0,c.jsx)(`em`,{children:`you're funding`}),`, your competitors' growth`]})]})]})]})})})},k=()=>{let[e,t]=D(.08);return(0,c.jsx)(`section`,{className:`wdec`,ref:e,children:(0,c.jsx)(`div`,{className:`wdec-container`,children:(0,c.jsxs)(`div`,{className:`wdec-grid`,children:[(0,c.jsxs)(`div`,{className:`wdec-left`,children:[(0,c.jsx)(`div`,{className:`wds-section-label`,children:`Grow Your Business`}),(0,c.jsxs)(`h3`,{className:`wdec-heading`,children:[`Ready to Scale with Ads &`,(0,c.jsx)(`span`,{children:` Campaigns?`})]}),(0,c.jsx)(`div`,{className:`wdec-divider`}),(0,c.jsx)(`p`,{className:`wdec-desc`,children:`Stop relying only on organic reach. Our performance-driven advertising campaigns help you reach the right audience, generate qualified leads, increase conversions, and grow your business with measurable results.`})]}),(0,c.jsxs)(`div`,{className:`wdec-cards`,children:[(0,c.jsxs)(`div`,{className:`wdec-card${t?` wde-anim`:``}`,style:t?{animationDelay:`0.1s`}:{},children:[(0,c.jsx)(`div`,{className:`wdec-card-icon`,children:(0,c.jsx)(`i`,{className:`fa-solid fa-bullhorn`})}),(0,c.jsxs)(`h4`,{children:[`Ads & Campaigns `,(0,c.jsx)(`span`,{children:`Help You:`})]}),(0,c.jsx)(`ul`,{className:`wdec-list`,children:C.map((e,t)=>(0,c.jsxs)(`li`,{children:[(0,c.jsx)(`i`,{className:`fa-solid fa-arrow-right`}),e]},t))})]}),(0,c.jsxs)(`div`,{className:`wdec-card${t?` wde-anim`:``}`,style:t?{animationDelay:`0.2s`}:{},children:[(0,c.jsx)(`div`,{className:`wdec-card-icon`,children:(0,c.jsx)(`i`,{className:`fa-solid fa-gift`})}),(0,c.jsx)(`h4`,{children:`What We Deliver:`}),(0,c.jsx)(`ul`,{className:`wdec-list wdec-list--dot`,children:w.map((e,t)=>(0,c.jsxs)(`li`,{children:[(0,c.jsx)(`i`,{className:`fa-solid fa-circle`}),e]},t))})]})]})]})})})},A=()=>{let[e,t]=D(.08);return(0,c.jsx)(`section`,{className:`wdpl`,ref:e,children:(0,c.jsx)(`div`,{className:`wdpl-container`,children:(0,c.jsxs)(`div`,{className:`wdpl-grid`,children:[(0,c.jsxs)(`div`,{className:`wdpl-left`,children:[(0,c.jsx)(`div`,{className:`wds-section-label`,children:`CHOOSE THE RIGHT PLATFORM`}),(0,c.jsxs)(`h3`,{className:`wdpl-heading`,children:[`Which Ad Platform Fits `,(0,c.jsx)(`span`,{children:`Your`}),` Goals?`]}),(0,c.jsx)(`p`,{className:`wdpl-desc`,children:`Selecting the right advertising platform is the key to better results. We help you choose the best channel based on your business goals, target audience, budget, and growth strategy to generate quality leads and maximize ROI.`})]}),(0,c.jsxs)(`div`,{className:`wdpl-right`,children:[(0,c.jsx)(`div`,{className:`wdpl-cards`,children:T.map((e,n)=>(0,c.jsxs)(`div`,{className:`wdpl-card${t?` wde-anim`:``}`,style:t?{animationDelay:`${n*.1}s`}:{},children:[(0,c.jsxs)(`div`,{className:`wdpl-card-inner`,children:[(0,c.jsx)(`div`,{className:`wdpl-card-icon`,children:(0,c.jsx)(`i`,{className:e.fa})}),(0,c.jsxs)(`div`,{className:`wdpl-card-body`,children:[(0,c.jsx)(`h5`,{children:e.title}),(0,c.jsx)(`span`,{className:`wdpl-sub`,children:e.sub}),(0,c.jsx)(`p`,{children:e.desc})]})]}),(0,c.jsx)(`div`,{className:`wdpl-arrow`,children:(0,c.jsx)(`i`,{className:`fa-solid fa-arrow-right`})})]},n))}),(0,c.jsxs)(`div`,{className:`wdpl-note${t?` wde-anim`:``}`,style:t?{animationDelay:`0.45s`}:{},children:[(0,c.jsx)(`div`,{className:`wdpl-note-icon`,children:(0,c.jsx)(`i`,{className:`fa-solid fa-lightbulb`})}),(0,c.jsx)(`p`,{children:`The right platform isn't the most popular one—it's where your ideal customers discover, engage, and convert.`})]})]})]})})})},j=()=>{let[e,t]=D(.08),[n,r]=(0,s.useState)(null),i=e=>r(n===e?null:e);return(0,c.jsx)(`section`,{className:`wdfq`,ref:e,children:(0,c.jsxs)(`div`,{className:`wdfq-container`,children:[(0,c.jsx)(`div`,{className:`wds-section-label`,children:`QUESTIONS? WE'VE GOT ANSWERS`}),(0,c.jsx)(`h3`,{className:`wdfq-heading`,children:`Frequently Asked Questions`}),(0,c.jsx)(`div`,{className:`wdfq-list`,children:E.map((e,r)=>(0,c.jsxs)(`div`,{className:`wdfq-item${n===r?` open`:``}${t?` wde-anim`:``}`,style:t?{animationDelay:`${r*.1}s`}:{},onClick:()=>i(r),children:[(0,c.jsxs)(`div`,{className:`wdfq-q`,children:[(0,c.jsx)(`div`,{className:`wdfq-icon`,children:(0,c.jsx)(`i`,{className:e.fa})}),(0,c.jsx)(`span`,{children:e.q}),(0,c.jsx)(`div`,{className:`wdfq-plus`,children:(0,c.jsx)(`i`,{className:`fa-solid ${n===r?`fa-minus`:`fa-plus`}`})})]}),n===r&&(0,c.jsx)(`div`,{className:`wdfq-a`,children:(0,c.jsx)(`p`,{children:e.a})})]},r))})]})})},M=()=>(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(O,{}),(0,c.jsx)(k,{}),(0,c.jsx)(A,{}),(0,c.jsx)(j,{})]}),N=()=>(0,c.jsxs)(`div`,{className:`page-wrapper`,children:[(0,c.jsx)(l,{}),(0,c.jsx)(`section`,{className:`services-details pt-120 pb-120`,children:(0,c.jsx)(`div`,{className:`service-details-page`,children:(0,c.jsx)(`div`,{className:`container`,children:(0,c.jsx)(`div`,{className:`wd-outer`,children:(0,c.jsx)(`div`,{className:`wd-content-col`,children:(0,c.jsxs)(`div`,{className:`services-details__content`,children:[(0,c.jsx)(m,{}),(0,c.jsx)(`div`,{className:`WebDev-Services-spacing`,children:(0,c.jsx)(x,{})}),(0,c.jsx)(`div`,{className:`WebDev-Extra-spacing`,children:(0,c.jsx)(M,{})})]})})})})})})]});export{N as default};