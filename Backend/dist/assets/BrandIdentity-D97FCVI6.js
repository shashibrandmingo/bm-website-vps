import{a as e}from"./rolldown-runtime-COnpUsM8.js";import{d as t,l as n}from"./animations-BJc3zUQd.js";import{Ct as r,kt as i}from"./vendor-CfdKfBq_.js";import{n as a}from"./popup-DfbqftR9.js";var o=e(t(),1),s=n(),c=()=>((0,o.useEffect)(()=>{},[]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(`style`,{children:`
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
           RIGHT VISUAL — Brand Identity Mock
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

        /* ── Laptop Body — Brand Identity Dashboard ── */
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

        /* Brand KPI cards */
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

        /* Brand deliverable rows */
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
          width: 40px;
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
      `}),(0,s.jsx)(`section`,{className:`wd-hero`,children:(0,s.jsxs)(`div`,{className:`wd-inner`,children:[(0,s.jsxs)(`div`,{className:`wd-hero-grid`,children:[(0,s.jsxs)(`div`,{className:`wd-hero-content`,children:[(0,s.jsxs)(`div`,{className:`wd-tagline`,children:[(0,s.jsx)(`i`,{className:`fas fa-bolt`}),` BUILD. DEFINE. ELEVATE YOUR BRAND.`]}),(0,s.jsxs)(`h3`,{children:[`Graphic Design & Branding`,(0,s.jsx)(`br`,{}),`That Creates`,` `,(0,s.jsx)(`span`,{className:`wd-title-accent`,children:`Lasting Impact`})]}),(0,s.jsx)(`p`,{className:`wd-description`,children:`We create strategic graphic designs that strengthen your brand identity, build trust, and help your business stand out. From logos to marketing creatives, every design is crafted to attract customers and drive business growth.`}),(0,s.jsxs)(`div`,{className:`wd-btn-group`,children:[(0,s.jsxs)(`button`,{className:`wd-btn-primary`,type:`button`,onClick:a,children:[(0,s.jsx)(`i`,{className:`fas fa-rocket`}),`Start Your Brand Journey`]}),(0,s.jsxs)(r,{to:`/portfolio`,className:`wd-btn-secondary`,children:[(0,s.jsx)(`span`,{className:`wd-play-icon`,children:(0,s.jsx)(`i`,{className:`fas fa-eye`})}),`View Our Work`]})]})]}),(0,s.jsx)(`div`,{className:`wd-hero-visual`,children:(0,s.jsxs)(`div`,{className:`wd-device-wrapper`,children:[(0,s.jsxs)(`div`,{className:`wd-laptop`,children:[(0,s.jsxs)(`div`,{className:`wd-laptop-bar`,children:[(0,s.jsxs)(`div`,{className:`wd-dots`,children:[(0,s.jsx)(`div`,{className:`wd-dot-circle wd-dot-r`}),(0,s.jsx)(`div`,{className:`wd-dot-circle wd-dot-y`}),(0,s.jsx)(`div`,{className:`wd-dot-circle wd-dot-g`})]}),(0,s.jsxs)(`div`,{className:`wd-url-bar`,children:[(0,s.jsx)(`div`,{className:`wd-url-bar-dot`}),(0,s.jsx)(`span`,{className:`wd-url-text`,children:`brand.brandmingo.com`})]})]}),(0,s.jsxs)(`div`,{className:`wd-laptop-nav`,children:[(0,s.jsxs)(`div`,{className:`wd-mock-logo`,children:[`Brand`,(0,s.jsx)(`span`,{children:`ID`})]}),(0,s.jsx)(`ul`,{className:`wd-mock-nav-links`,children:[`Logo`,`Colors`,`Typography`,`Assets`,`Guidelines`].map(e=>(0,s.jsx)(`li`,{children:e},e))}),(0,s.jsx)(`div`,{className:`wd-mock-cta-small`,children:`Get Started →`})]}),(0,s.jsxs)(`div`,{className:`wd-laptop-body`,children:[(0,s.jsxs)(`div`,{className:`wd-dash-header`,children:[(0,s.jsxs)(`div`,{className:`wd-dash-title`,children:[`Brand `,(0,s.jsx)(`span`,{children:`Identity Overview`})]}),(0,s.jsxs)(`div`,{className:`wd-dash-live`,children:[(0,s.jsx)(`div`,{className:`wd-dash-live-dot`}),`In Progress`]})]}),(0,s.jsx)(`div`,{className:`wd-kpi-row`,children:[{icon:`fas fa-palette`,label:`Brand Assets`,value:`48`,delta:`12 delivered`},{icon:`fas fa-eye`,label:`Brand Recall`,value:`+74%`,delta:`+22% uplift`},{icon:`fas fa-star`,label:`Trust Score`,value:`9.2/10`,delta:`+1.4 improved`}].map((e,t)=>(0,s.jsxs)(`div`,{className:`wd-kpi-card`,children:[(0,s.jsxs)(`div`,{className:`wd-kpi-label`,children:[(0,s.jsx)(`i`,{className:e.icon}),` `,e.label]}),(0,s.jsx)(`div`,{className:`wd-kpi-value`,children:e.value}),(0,s.jsx)(`div`,{className:`wd-kpi-delta`,children:e.delta})]},t))}),(0,s.jsx)(`div`,{className:`wd-channels`,children:[{icon:`fas fa-pen-nib`,color:`#FF6B1E`,bg:`rgba(255,107,30,0.18)`,name:`Logo Design`,val:`Done`,barW:`100%`,barColor:`#FF6B1E`},{icon:`fas fa-fill-drip`,color:`#34D399`,bg:`rgba(52,211,153,0.18)`,name:`Color Palette`,val:`Done`,barW:`100%`,barColor:`#34D399`},{icon:`fas fa-font`,color:`#A78BFA`,bg:`rgba(167,139,250,0.18)`,name:`Typography Kit`,val:`In Review`,barW:`78%`,barColor:`#A78BFA`},{icon:`fas fa-file-alt`,color:`#FBBF24`,bg:`rgba(251,191,36,0.18)`,name:`Brand Guidelines`,val:`WIP`,barW:`45%`,barColor:`#FBBF24`}].map((e,t)=>(0,s.jsxs)(`div`,{className:`wd-ch-row`,children:[(0,s.jsx)(`div`,{className:`wd-ch-icon`,style:{background:e.bg},children:(0,s.jsx)(`i`,{className:e.icon,style:{color:e.color}})}),(0,s.jsx)(`span`,{className:`wd-ch-name`,children:e.name}),(0,s.jsx)(`div`,{className:`wd-ch-bar-track`,children:(0,s.jsx)(`div`,{className:`wd-ch-bar-fill`,style:{"--bar-w":e.barW,background:e.barColor}})}),(0,s.jsx)(`span`,{className:`wd-ch-val`,children:e.val})]},t))}),(0,s.jsx)(`div`,{className:`wd-mock-stats`,children:[{value:`500+`,label:`Projects Completed`},{value:`98%`,label:`Client Satisfaction`},{value:`3+`,label:`Years Experience`},{value:`24/7`,label:`Support`}].map((e,t)=>(0,s.jsxs)(`div`,{className:`wd-mock-stat`,children:[(0,s.jsx)(`span`,{className:`wd-mock-stat-val`,children:e.value}),(0,s.jsx)(`span`,{className:`wd-mock-stat-lbl`,children:e.label})]},t))})]})]}),(0,s.jsxs)(`div`,{className:`wd-phone`,children:[(0,s.jsx)(`div`,{className:`wd-phone-notch`,children:(0,s.jsx)(`div`,{className:`wd-phone-notch-bar`})}),(0,s.jsxs)(`div`,{className:`wd-phone-body`,children:[(0,s.jsxs)(`div`,{className:`wd-phone-logo`,children:[`Brand`,(0,s.jsx)(`span`,{children:`ID`})]}),(0,s.jsx)(`div`,{className:`wd-phone-widget-label`,children:`Brand Score`}),(0,s.jsx)(`div`,{className:`wd-phone-lead-count`,children:(0,s.jsx)(`span`,{children:`9.2`})}),(0,s.jsxs)(`p`,{className:`wd-phone-lead-sub`,children:[`out of 10 trust score`,(0,s.jsx)(`br`,{}),`+1.4 pts this month`]}),(0,s.jsx)(`div`,{className:`wd-phone-channels`,children:[{icon:`fas fa-pen-nib`,color:`#FF6B1E`,bg:`rgba(255,107,30,0.18)`,name:`Logo`,val:`✓ Done`},{icon:`fas fa-fill-drip`,color:`#34D399`,bg:`rgba(52,211,153,0.18)`,name:`Colors`,val:`✓ Done`},{icon:`fas fa-font`,color:`#A78BFA`,bg:`rgba(167,139,250,0.18)`,name:`Typography`,val:`Review`}].map((e,t)=>(0,s.jsxs)(`div`,{className:`wd-phone-ch-row`,children:[(0,s.jsx)(`div`,{className:`wd-phone-ch-icon`,style:{background:e.bg},children:(0,s.jsx)(`i`,{className:e.icon,style:{color:e.color,fontSize:7}})}),(0,s.jsx)(`span`,{className:`wd-phone-ch-name`,children:e.name}),(0,s.jsx)(`span`,{className:`wd-phone-ch-val`,children:e.val})]},t))}),(0,s.jsxs)(`div`,{className:`wd-phone-btn`,children:[`View Assets`,` `,(0,s.jsx)(`i`,{className:`fas fa-arrow-right`,style:{fontSize:7}})]})]})]})]})})]}),(0,s.jsx)(`div`,{className:`wd-features`,children:[{icon:`fas fa-signature`,title:`Strong Brand Identity`,desc:`Create a unique brand identity that builds recognition and lasting trust.`},{icon:`fas fa-object-group`,title:`Consistent Brand Design`,desc:`Maintain a consistent visual style across every platform and channel.`},{icon:`fas fa-lightbulb`,title:`Creative Brand Strategy`,desc:`Design with purpose to communicate your brand message more effectively.`},{icon:`fas fa-medal`,title:`Lasting Brand Impact`,desc:`Deliver memorable designs that increase credibility and customer loyalty.`}].map((e,t)=>(0,s.jsxs)(`div`,{className:`wd-feat-item`,children:[(0,s.jsx)(`div`,{className:`wd-feat-icon-wrap`,children:(0,s.jsx)(`i`,{className:e.icon})}),(0,s.jsxs)(`div`,{children:[(0,s.jsx)(`h4`,{children:e.title}),(0,s.jsx)(`p`,{children:e.desc})]})]},t))})]})})]})),l=`https://res.cloudinary.com/dqqgpii8v/image/upload/v1783516949/Untitled_design_2_elf2n9.png`,u=[{fa:`fa-solid fa-pen-nib`,label:`Logo Design`,to:`/logo-design`},{fa:`fa-solid fa-bullhorn`,label:`Package & Label Designing`,to:`/label-designing`},{fa:`fa-solid fa-id-card`,label:`Corporate Identity Designing`,to:`/corporate-identity-designing`},{fa:`fa-solid fa-file-powerpoint`,label:`Brand Identity Design`,to:`/brand-identity-design`}],d=[{fa:`fa-solid fa-eye`,title:`Brand Recognition`,desc:`Build a memorable visual identity that helps customers recognize your brand instantly.`},{fa:`fa-solid fa-palette`,title:`Visual Consistency`,desc:`Maintain consistent branding across every platform to strengthen your business identity.`},{fa:`fa-solid fa-users`,title:`Audience Engagement`,desc:`Create meaningful brand experiences that increase customer engagement and long-term loyalty.`},{fa:`fa-solid fa-shield-halved`,title:`Trust & Credibility`,desc:`Establish a professional brand image that builds customer confidence and lasting trust.`},{fa:`fa-solid fa-trophy`,title:`Competitive Advantage`,desc:`Stand out from competitors with distinctive branding that leaves a lasting impression.`}],f=[{fa:`fa-solid fa-pen-nib`,key:`p`,suffix:`+`,label:`Brand Projects Delivered`,target:500},{fa:`fa-solid fa-face-smile`,key:`s`,suffix:`%`,label:`Client Satisfaction`,target:98},{fa:`fa-solid fa-award`,key:`e`,suffix:`+`,label:`Years Branding Experience`,target:3}],p=()=>{let e=(0,o.useRef)(null),[t,n]=(0,o.useState)(!1),[r,a]=(0,o.useState)(0),[c,p]=(0,o.useState)({p:0,s:0,h:0,e:0}),m=i();(0,o.useEffect)(()=>{let t=new IntersectionObserver(([e])=>{e.isIntersecting&&(n(!0),h(),t.disconnect())},{threshold:.08});return e.current&&t.observe(e.current),()=>t.disconnect()},[]);let h=()=>{let e={p:500,s:98,h:24,e:3},t=0,n=setInterval(()=>{t++;let r=1-(1-Math.min(t/60,1))**3;p({p:Math.round(e.p*r),s:Math.round(e.s*r),h:Math.round(e.h*r),e:Math.round(e.e*r)}),t>=60&&clearInterval(n)},2e3/60)};return(0,s.jsx)(`section`,{className:`wda`,ref:e,children:(0,s.jsxs)(`div`,{className:`wda-grid`,children:[(0,s.jsxs)(`aside`,{className:`wda-sidebar`,children:[(0,s.jsx)(`div`,{className:`wda-main-card`,children:(0,s.jsxs)(`div`,{className:`wda-logo-row`,children:[(0,s.jsx)(`div`,{className:`wda-logo-img`,children:(0,s.jsx)(`i`,{className:`fa-solid fa-layer-group`})}),(0,s.jsxs)(`div`,{className:`wda-logo-text`,children:[(0,s.jsx)(`b`,{children:`Brandmingo`}),(0,s.jsx)(`span`,{children:`Digital Solutions`})]})]})}),(0,s.jsx)(`div`,{className:`wda-main-card`,children:(0,s.jsx)(`div`,{className:`wda-nav-wrap wda-nav-wrap--no-border`,children:(0,s.jsx)(`ul`,{className:`wda-nav`,children:u.map((e,t)=>(0,s.jsxs)(`li`,{className:r===t?`active`:``,onClick:()=>{a(t),m(e.to)},children:[(0,s.jsxs)(`span`,{className:`nl`,children:[(0,s.jsx)(`i`,{className:e.fa}),e.label]}),(0,s.jsx)(`i`,{className:`fa-solid fa-chevron-right chev`})]},t))})})}),(0,s.jsxs)(`div`,{className:`wda-main-card wda-call`,children:[(0,s.jsx)(`i`,{className:`fa-solid fa-rocket wda-rocket`}),(0,s.jsxs)(`h3`,{children:[`Let’s Build Your`,(0,s.jsx)(`span`,{children:`Brand That Stands Out`})]}),(0,s.jsx)(`p`,{children:`Want to create a strong brand presence? Let’s craft a unique identity that builds recognition, trust, and long-term brand value.`}),(0,s.jsx)(`a`,{href:`tel:+919990613140`,className:`wda-ring`,children:(0,s.jsx)(`i`,{className:`fa-solid fa-phone`})}),(0,s.jsx)(`small`,{className:`wda-expert-label`,children:`Talk to an expert`}),(0,s.jsx)(`a`,{href:`tel:+919990613140`,className:`wda-phone`,children:`+91 99906 13140`}),(0,s.jsx)(`small`,{className:`wda-expert-label wda-timing`,children:`Mon – Sat | 10:00 AM – 7:00 PM`})]}),(0,s.jsx)(`div`,{className:`wda-main-card`,children:(0,s.jsxs)(`div`,{className:`wda-stats-wrap`,children:[(0,s.jsx)(`p`,{className:`wda-stats-lbl`,children:`Our Work Speaks`}),f.map(e=>(0,s.jsxs)(`div`,{className:`wda-stat`,children:[(0,s.jsx)(`div`,{className:`wda-stat-ic`,children:(0,s.jsx)(`i`,{className:e.fa})}),(0,s.jsxs)(`div`,{children:[(0,s.jsxs)(`b`,{children:[c[e.key],e.suffix]}),(0,s.jsx)(`span`,{children:e.label})]})]},e.key))]})}),(0,s.jsxs)(`a`,{href:`src/assets/images/Brochure/BM Brochure.pdf`,target:`_blank`,rel:`noopener noreferrer`,className:`wda-pdf-card`,children:[(0,s.jsxs)(`span`,{className:`wda-dl-label`,children:[(0,s.jsx)(`i`,{className:`fa-solid fa-file-pdf`}),`Brochure (PDF)`]}),(0,s.jsx)(`div`,{className:`wda-dl-btn`,children:(0,s.jsx)(`i`,{className:`fa-solid fa-download`})})]})]}),(0,s.jsxs)(`main`,{className:`wda-main`,children:[(0,s.jsxs)(`div`,{className:`wda-hero`,children:[(0,s.jsx)(`img`,{src:l,alt:`Brand Identity Banner - Brandmingo`,className:`wda-hero-img`}),(0,s.jsx)(`div`,{className:`wda-hero-ov`,children:(0,s.jsxs)(`div`,{className:`wda-hero-txt`,children:[(0,s.jsxs)(`div`,{className:`wda-hero-badge`,children:[(0,s.jsx)(`i`,{className:`fa-solid fa-laptop-code`}),`ABOUT BRAND IDENTITY`]}),(0,s.jsxs)(`h2`,{children:[`Building Powerful Brands `,(0,s.jsx)(`span`,{children:`With Creative Design`})]})]})})]}),(0,s.jsxs)(`article`,{children:[(0,s.jsxs)(`div`,{className:`wda-lbl`,children:[(0,s.jsx)(`i`,{className:`fa-solid fa-circle`}),`Introduction`]}),(0,s.jsx)(`h2`,{className:`wda-h1`,children:`What is Brand Identity?`}),(0,s.jsxs)(`p`,{className:`wda-p`,children:[`Graphic design is more than creating attractive visuals—it shapes how customers see, remember, and connect with your brand. From logo design and typography to marketing creatives and brand assets, every element works together to build a strong visual identity.`,(0,s.jsx)(`br`,{}),`A consistent brand identity helps your business stand out, earn customer trust, and create a memorable experience across every platform. Strategic graphic design strengthens brand recognition, improves credibility, and supports long-term business growth.`]}),(0,s.jsxs)(`div`,{className:`wda-lbl`,style:{marginTop:`40px`},children:[(0,s.jsx)(`i`,{className:`fa-solid fa-circle`}),`Strategy`]}),(0,s.jsx)(`h3`,{className:`wda-h2`,children:`Why Your Business Needs Brand Identity`}),(0,s.jsx)(`div`,{className:`wda-reasons`,children:d.map((e,n)=>(0,s.jsxs)(`div`,{className:`wda-r`,style:t?{animation:`wda-fade-up 0.55s ${n*.1}s forwards`}:{},children:[(0,s.jsx)(`div`,{className:`wda-r-ico`,children:(0,s.jsx)(`i`,{className:e.fa})}),(0,s.jsx)(`h5`,{children:e.title}),(0,s.jsx)(`p`,{children:e.desc})]},n))}),(0,s.jsxs)(`div`,{className:`wda-quote`,children:[(0,s.jsx)(`div`,{className:`wda-quote-icon`,children:(0,s.jsx)(`i`,{className:`fa-solid fa-quote-right`})}),(0,s.jsxs)(`span`,{children:[`A strong brand identity turns first impressions`,` `,(0,s.jsx)(`em`,{children:` into lasting customer relationships`})]})]}),(0,s.jsxs)(`div`,{className:`wda-img-cards`,children:[(0,s.jsxs)(`div`,{className:`wda-img-card`,children:[(0,s.jsx)(`img`,{src:`https://res.cloudinary.com/dqqgpii8v/image/upload/v1783516949/Untitled_design_2_elf2n9.png`,alt:`Modern Web Development`}),(0,s.jsxs)(`div`,{className:`wda-img-card-body`,children:[(0,s.jsx)(`div`,{className:`wda-img-card-icon`,children:(0,s.jsx)(`i`,{className:`fa-solid fa-palette`})}),(0,s.jsx)(`p`,{children:`Creative brand identities designed to strengthen recognition, build trust, and create a consistent visual presence across every customer touchpoint`}),(0,s.jsx)(`a`,{href:`#contact`,className:`wda-img-card-arrow`,children:(0,s.jsx)(`i`,{className:`fa-solid fa-arrow-right`})})]})]}),(0,s.jsxs)(`div`,{className:`wda-img-card`,children:[(0,s.jsx)(`img`,{src:`https://i.ibb.co/Zz0MNRM4/website-developement-image-Brandmingo.avif`,alt:`E-commerce Solutions`}),(0,s.jsxs)(`div`,{className:`wda-img-card-body`,children:[(0,s.jsx)(`div`,{className:`wda-img-card-icon`,children:(0,s.jsx)(`i`,{className:`fa-solid fa-bullseye`})}),(0,s.jsx)(`p`,{children:`Strategic graphic design solutions that capture attention, engage your audience, and transform ideas into memorable brand experiences`}),(0,s.jsx)(`a`,{href:`#contact`,className:`wda-img-card-arrow`,children:(0,s.jsx)(`i`,{className:`fa-solid fa-arrow-right`})})]})]})]})]})]})]})})},m=[{fa:`fa-solid fa-pen-nib`,num:`01`,title:`Logo & Brand Identity`,desc:`Create memorable logos, colors, and visual elements that define your brand.`},{fa:`fa-solid fa-book-open`,num:`02`,title:`Brand Guidelines`,desc:`Develop clear brand standards for consistent design and communication.`},{fa:`fa-solid fa-address-card`,num:`03`,title:`Corporate Identity`,desc:`Design business stationery and branded assets for a professional image.`},{fa:`fa-solid fa-photo-film`,num:`04`,title:`Marketing Creatives`,desc:`Create impactful marketing designs that boost visibility and engagement.`}],h=[{fa:`fa-solid fa-pen-ruler`,title:`Creative Design Tools`,desc:`Design professional logos, brand assets, and marketing creatives with precision.`},{fa:`fa-solid fa-lightbulb`,title:`Brand Strategy Tools`,desc:`Develop strong brand positioning and visual strategies for lasting business impact.`},{fa:`fa-solid fa-folder-tree`,title:`Brand Asset Systems`,desc:`Manage logos, brand assets, and design files for consistent brand communication.`},{fa:`fa-solid fa-palette`,title:`Visual Identity Tools`,desc:`Create cohesive color palettes, typography, and visual styles for every brand.`}],g=[{num:`01`,fa:`fa-solid fa-magnifying-glass`,title:`Brand Discovery`,desc:`We research your business, audience, industry, and competitors to shape your brand strategy.`},{num:`02`,fa:`fa-solid fa-lightbulb`,title:`Creative Strategy`,desc:`We define your brand positioning, messaging, and visual direction for market impact.`},{num:`03`,fa:`fa-solid fa-pen-ruler`,title:`Design Creation`,desc:`We create logos, visual assets, typography, and branding elements that reflect your identity.`},{num:`04`,fa:`fa-solid fa-book-open`,title:`Brand Guidelines`,desc:`We establish brand standards to ensure consistency across every design and platform.`},{num:`05`,fa:`fa-solid fa-arrow-trend-up`,title:`Brand Evolution`,desc:`We refine your brand identity to support long-term growth and changing business needs.`}],_=()=>{let e=(0,o.useRef)(null),[t,n]=(0,o.useState)(!1);return(0,o.useEffect)(()=>{let t=new IntersectionObserver(([e])=>{e.isIntersecting&&(n(!0),t.disconnect())},{threshold:.1});return e.current&&t.observe(e.current),()=>t.disconnect()},[]),(0,s.jsx)(`section`,{className:`wds`,ref:e,children:(0,s.jsx)(`div`,{className:`wds-container`,children:(0,s.jsxs)(`div`,{className:`wds-types-grid`,children:[(0,s.jsxs)(`div`,{className:`wds-types-left`,children:[(0,s.jsx)(`div`,{className:`wds-section-label`,children:`WHAT WE CREATE`}),(0,s.jsx)(`h3`,{className:`wds-types-heading`,children:`Types of Graphic Design Services We Offer`}),(0,s.jsx)(`p`,{className:`wds-types-desc`,children:`Every business has unique branding goals and design requirements. We create strategic graphic design solutions that strengthen your brand identity, improve recognition, and leave a lasting impression across every customer touchpoint.`}),(0,s.jsx)(`div`,{className:`wds-deco`,"aria-hidden":`true`,children:(0,s.jsxs)(`svg`,{width:`240`,height:`190`,viewBox:`0 0 240 190`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,children:[(0,s.jsxs)(`defs`,{children:[(0,s.jsxs)(`radialGradient`,{id:`dotFade`,cx:`20%`,cy:`20%`,r:`80%`,children:[(0,s.jsx)(`stop`,{offset:`0%`,stopColor:`white`,stopOpacity:`0.55`}),(0,s.jsx)(`stop`,{offset:`100%`,stopColor:`white`,stopOpacity:`0`})]}),(0,s.jsx)(`mask`,{id:`gridMask`,children:(0,s.jsx)(`rect`,{width:`240`,height:`190`,fill:`url(#dotFade)`})}),(0,s.jsxs)(`radialGradient`,{id:`glowDot`,cx:`50%`,cy:`50%`,r:`50%`,children:[(0,s.jsx)(`stop`,{offset:`0%`,stopColor:`#f97316`,stopOpacity:`1`}),(0,s.jsx)(`stop`,{offset:`100%`,stopColor:`#f97316`,stopOpacity:`0`})]})]}),(0,s.jsx)(`g`,{mask:`url(#gridMask)`,children:Array.from({length:10},(e,t)=>Array.from({length:13},(e,n)=>(0,s.jsx)(`circle`,{cx:n*20+4,cy:t*20+4,r:`1.4`,fill:`#f97316`,opacity:`0.5`},`${t}-${n}`)))}),(0,s.jsx)(`path`,{d:`M 0 190 Q 180 150 230 20`,stroke:`#f97316`,strokeWidth:`1.2`,fill:`none`,opacity:`0.45`,strokeLinecap:`round`}),(0,s.jsx)(`circle`,{cx:`205`,cy:`72`,r:`5`,fill:`#f97316`,opacity:`0.9`}),(0,s.jsx)(`circle`,{cx:`205`,cy:`72`,r:`10`,fill:`#f97316`,opacity:`0.2`}),(0,s.jsx)(`circle`,{cx:`205`,cy:`72`,r:`16`,fill:`#f97316`,opacity:`0.08`})]})})]}),(0,s.jsx)(`div`,{className:`wds-types-cards`,children:m.map((e,n)=>(0,s.jsxs)(`div`,{className:`wds-type-card${t?` wds-anim`:``}`,style:t?{animationDelay:`${n*.1}s`}:{},children:[(0,s.jsx)(`span`,{className:`wds-card-num`,children:e.num}),(0,s.jsx)(`div`,{className:`wds-card-icon`,children:(0,s.jsx)(`i`,{className:e.fa})}),(0,s.jsx)(`h4`,{className:`wds-card-title`,children:e.title}),(0,s.jsx)(`p`,{className:`wds-card-desc`,children:e.desc}),(0,s.jsxs)(`a`,{href:`#contact`,className:`wds-card-link`,onClick:e=>{e.preventDefault(),a()},children:[`Learn More `,(0,s.jsx)(`i`,{className:`fa-solid fa-arrow-right`})]})]},n))})]})})})},v=()=>{let e=(0,o.useRef)(null),[t,n]=(0,o.useState)(!1);return(0,o.useEffect)(()=>{let t=new IntersectionObserver(([e])=>{e.isIntersecting&&(n(!0),t.disconnect())},{threshold:.1});return e.current&&t.observe(e.current),()=>t.disconnect()},[]),(0,s.jsx)(`section`,{className:`wdt`,ref:e,children:(0,s.jsx)(`div`,{className:`wdt-container`,children:(0,s.jsxs)(`div`,{className:`wdt-grid`,children:[(0,s.jsxs)(`div`,{className:`wdt-left`,children:[(0,s.jsx)(`div`,{className:`wds-section-label`,children:`BUILT WITH POWERFUL TOOLS`}),(0,s.jsx)(`h3`,{className:`wdt-heading`,children:`Design Tools & Platforms We Use`}),(0,s.jsx)(`p`,{className:`wdt-desc`,children:`We use industry-leading design tools and creative platforms to craft impactful brand identities, marketing creatives, and visual assets that help businesses stand out and grow.`})]}),(0,s.jsx)(`div`,{className:`wdt-cards`,children:h.map((e,n)=>(0,s.jsxs)(`div`,{className:`wdt-card${t?` wds-anim`:``}`,style:t?{animationDelay:`${n*.1}s`}:{},children:[(0,s.jsx)(`div`,{className:`wdt-card-icon`,children:(0,s.jsx)(`i`,{className:e.fa})}),(0,s.jsxs)(`div`,{className:`wdt-card-content`,children:[(0,s.jsx)(`h4`,{className:`wdt-card-title`,children:e.title}),(0,s.jsx)(`p`,{className:`wdt-card-desc`,children:e.desc}),(0,s.jsx)(`div`,{className:`wdt-card-line`})]})]},n))})]})})})},y=()=>{let e=(0,o.useRef)(null),[t,n]=(0,o.useState)(!1);return(0,o.useEffect)(()=>{let t=new IntersectionObserver(([e])=>{e.isIntersecting&&(n(!0),t.disconnect())},{threshold:.08});return e.current&&t.observe(e.current),()=>t.disconnect()},[]),(0,s.jsx)(`section`,{className:`wdp`,ref:e,children:(0,s.jsx)(`div`,{className:`wdp-container`,children:(0,s.jsxs)(`div`,{className:`wdp-grid`,children:[(0,s.jsxs)(`div`,{className:`wdp-left`,children:[(0,s.jsx)(`div`,{className:`wds-section-label`,children:`OUR WORKFLOW`}),(0,s.jsx)(`h3`,{className:`wdp-heading`,children:` Our Brand Design Process`}),(0,s.jsx)(`p`,{className:`wdp-desc`,children:`We follow a strategic branding process to create memorable visual identities, maintain consistency, and help businesses build long-term brand recognition`}),(0,s.jsxs)(`div`,{className:`wdp-cta`,children:[(0,s.jsx)(`div`,{className:`wdp-cta-icon`,children:(0,s.jsx)(`i`,{className:`fa-solid fa-comments`})}),(0,s.jsxs)(`div`,{className:`wdp-cta-text`,children:[(0,s.jsx)(`h4`,{children:`Have a branding project in mind?`}),(0,s.jsx)(`p`,{children:`Let's create a unique brand identity that builds trust, attracts customers, and drives long-term business growth`}),(0,s.jsxs)(`button`,{className:`wdp-cta-btn`,type:`button`,onClick:a,children:[`Let's Talk`,(0,s.jsx)(`i`,{className:`fa-solid fa-arrow-right`})]})]})]})]}),(0,s.jsx)(`div`,{className:`wdp-steps`,children:g.map((e,n)=>(0,s.jsxs)(`div`,{className:`wdp-step${t?` wds-anim`:``}`,style:t?{animationDelay:`${n*.1}s`}:{},children:[(0,s.jsx)(`div`,{className:`wdp-step-num`,children:e.num}),(0,s.jsx)(`div`,{className:`wdp-step-icon`,children:(0,s.jsx)(`i`,{className:e.fa})}),(0,s.jsxs)(`div`,{className:`wdp-step-body`,children:[(0,s.jsx)(`h4`,{children:e.title}),(0,s.jsx)(`p`,{children:e.desc})]})]},n))})]})})})},b=()=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(_,{}),(0,s.jsx)(v,{}),(0,s.jsx)(y,{})]}),x=[{fa:`fa-solid fa-lightbulb`,title:`Strategic Design Thinking`,desc:`Every design is guided by research, audience insights, and business goals.`},{fa:`fa-solid fa-chart-pie`,title:`Data-Driven Creativity`,desc:`We combine market insights with creative design for stronger brand impact.`},{fa:`fa-solid fa-bullhorn`,title:`Conversion-Focused Design`,desc:`Create designs that engage audiences and encourage meaningful customer actions.`},{fa:`fa-solid fa-diagram-project`,title:`Scalable Brand Systems`,desc:`Build flexible brand identities that grow with your business over time.`},{fa:`fa-solid fa-medal`,title:`Lasting Brand Value`,desc:`Develop memorable brand experiences that build trust and long-term recognition.`}],S=[`Build strong brand recognition`,`Create a consistent visual identity`,`Connect with your ideal audience`,`Strengthen customer trust`],C=[`Logo & visual identity design`,`Brand guidelines & style systems`,`Corporate branding & stationery`,`Marketing creatives & brand assets`],w=[{fa:`fa-solid fa-pen-nib`,title:`Logo & Visual Identity`,sub:`BEST FOR`,desc:`Creating a memorable brand identity that stands out in the market.`},{fa:`fa-solid fa-layer-group`,title:`Brand Guidelines`,sub:`BEST FOR`,desc:`Keeping your branding consistent across every business platform.`},{fa:`fa-solid fa-id-card`,title:`Corporate Identity`,sub:`BEST FOR`,desc:`Building a professional image for business communication.`},{fa:`fa-solid fa-bullhorn`,title:`Marketing & Brand Assets`,sub:`BEST FOR`,desc:`Designing impactful creatives for marketing and promotions.`}],T=[{fa:`fa-solid fa-pen-ruler`,q:`What graphic design services do you offer?`,a:`We provide logo design, brand identity, packaging design, social media creatives, brochures, marketing materials, and complete branding solutions.`},{fa:`fa-solid fa-lightbulb`,q:`Why is brand identity important?`,a:`A strong brand identity builds recognition, earns customer trust, improves credibility, and creates a consistent experience across every platform.`},{fa:`fa-solid fa-clock`,q:`How long does a graphic design project take?`,a:`Project timelines depend on the scope. Logo design takes 5–10 days, while complete branding projects usually require 2–4 weeks.`},{fa:`fa-solid fa-book-open`,q:`Do you provide brand guidelines?`,a:`Yes. We create detailed brand guidelines covering logo usage, typography, color palettes, imagery, and visual identity standards.`},{fa:`fa-solid fa-arrows-rotate`,q:`Can you redesign my existing brand?`,a:`Absolutely. We modernize your brand identity while preserving recognition and creating a fresh, professional visual presence.`}],E=(e=.1)=>{let t=(0,o.useRef)(null),[n,r]=(0,o.useState)(!1);return(0,o.useEffect)(()=>{let n=new IntersectionObserver(([e])=>{e.isIntersecting&&(r(!0),n.disconnect())},{threshold:e});return t.current&&n.observe(t.current),()=>n.disconnect()},[]),[t,n]},D=()=>{let[e,t]=E(.08);return(0,s.jsx)(`section`,{className:`wde`,ref:e,children:(0,s.jsx)(`div`,{className:`wde-container`,children:(0,s.jsxs)(`div`,{className:`wde-grid`,children:[(0,s.jsxs)(`div`,{className:`wde-left`,children:[(0,s.jsx)(`div`,{className:`wds-section-label`,children:`OUR PROMISE`}),(0,s.jsxs)(`h3`,{className:`wde-heading`,children:[`What Makes Our Graphic `,(0,s.jsx)(`span`,{children:`Design Different?`})]}),(0,s.jsx)(`p`,{className:`wde-desc`,children:`Great design goes beyond aesthetics—it builds recognition, communicates your brand story, and creates lasting customer impressions. Our creative solutions combine strategy, consistency, and innovation to help your business stand out in a competitive market`}),(0,s.jsx)(`div`,{className:`wde-gradient-bar`})]}),(0,s.jsxs)(`div`,{className:`wde-right`,children:[(0,s.jsx)(`div`,{className:`wde-features`,children:x.map((e,n)=>(0,s.jsxs)(`div`,{className:`wde-feat${t?` wde-anim`:``}`,style:t?{animationDelay:`${n*.1}s`}:{},children:[(0,s.jsx)(`div`,{className:`wde-feat-icon`,children:(0,s.jsx)(`i`,{className:e.fa})}),(0,s.jsxs)(`div`,{className:`wde-feat-body`,children:[(0,s.jsx)(`h5`,{children:e.title}),(0,s.jsx)(`p`,{children:e.desc})]})]},n))}),(0,s.jsxs)(`div`,{className:`wde-note`,children:[(0,s.jsx)(`div`,{className:`wde-note-icon`,children:(0,s.jsx)(`i`,{className:`fa-solid fa-rocket`})}),(0,s.jsxs)(`p`,{children:[`Great design doesn't just attract attention`,` `,(0,s.jsx)(`em`,{children:`—it builds trust, `}),`recognition, and lasting brand value`]})]})]})]})})})},O=()=>{let[e,t]=E(.08);return(0,s.jsx)(`section`,{className:`wdec`,ref:e,children:(0,s.jsx)(`div`,{className:`wdec-container`,children:(0,s.jsxs)(`div`,{className:`wdec-grid`,children:[(0,s.jsxs)(`div`,{className:`wdec-left`,children:[(0,s.jsx)(`div`,{className:`wds-section-label`,children:`GROW YOUR BUSINESS`}),(0,s.jsxs)(`h3`,{className:`wdec-heading`,children:[`Do You Need`,(0,s.jsx)(`span`,{children:`Brand Identity Design?`})]}),(0,s.jsx)(`div`,{className:`wdec-divider`}),(0,s.jsx)(`p`,{className:`wdec-desc`,children:`If your brand lacks consistency, recognition, or a clear visual identity, you're missing valuable business opportunities. A strong brand identity helps you build trust, stand out from competitors, and create lasting connections with your audience`})]}),(0,s.jsxs)(`div`,{className:`wdec-cards`,children:[(0,s.jsxs)(`div`,{className:`wdec-card${t?` wde-anim`:``}`,style:t?{animationDelay:`0.1s`}:{},children:[(0,s.jsx)(`div`,{className:`wdec-card-icon`,children:(0,s.jsx)(`i`,{className:`fa-solid fa-palette`})}),(0,s.jsxs)(`h4`,{children:[`Brand Identity`,(0,s.jsx)(`span`,{children:`Allows You To:`})]}),(0,s.jsx)(`ul`,{className:`wdec-list`,children:S.map((e,t)=>(0,s.jsxs)(`li`,{children:[(0,s.jsx)(`i`,{className:`fa-solid fa-arrow-right`}),e]},t))})]}),(0,s.jsxs)(`div`,{className:`wdec-card${t?` wde-anim`:``}`,style:t?{animationDelay:`0.2s`}:{},children:[(0,s.jsx)(`div`,{className:`wdec-card-icon`,children:(0,s.jsx)(`i`,{className:`fa-solid fa-gift`})}),(0,s.jsx)(`h4`,{children:`We Provide:`}),(0,s.jsx)(`ul`,{className:`wdec-list wdec-list--dot`,children:C.map((e,t)=>(0,s.jsxs)(`li`,{children:[(0,s.jsx)(`i`,{className:`fa-solid fa-circle`}),e]},t))})]})]})]})})})},k=()=>{let[e,t]=E(.08);return(0,s.jsx)(`section`,{className:`wdpl`,ref:e,children:(0,s.jsx)(`div`,{className:`wdpl-container`,children:(0,s.jsxs)(`div`,{className:`wdpl-grid`,children:[(0,s.jsxs)(`div`,{className:`wdpl-left`,children:[(0,s.jsx)(`div`,{className:`wds-section-label`,children:`CHOOSE WHAT’S RIGHT`}),(0,s.jsxs)(`h3`,{className:`wdpl-heading`,children:[`Which Brand Identity`,(0,s.jsx)(`span`,{children:` Service`}),` Fits Your Business?`]}),(0,s.jsx)(`p`,{className:`wdpl-desc`,children:`Every brand has unique goals, audiences, and challenges. We help you choose the right branding solution to build recognition, trust, and long-term business growth`})]}),(0,s.jsxs)(`div`,{className:`wdpl-right`,children:[(0,s.jsx)(`div`,{className:`wdpl-cards`,children:w.map((e,n)=>(0,s.jsxs)(`div`,{className:`wdpl-card${t?` wde-anim`:``}`,style:t?{animationDelay:`${n*.1}s`}:{},children:[(0,s.jsxs)(`div`,{className:`wdpl-card-inner`,children:[(0,s.jsx)(`div`,{className:`wdpl-card-icon`,children:(0,s.jsx)(`i`,{className:e.fa})}),(0,s.jsxs)(`div`,{className:`wdpl-card-body`,children:[(0,s.jsx)(`h5`,{children:e.title}),(0,s.jsx)(`span`,{className:`wdpl-sub`,children:e.sub}),(0,s.jsx)(`p`,{children:e.desc})]})]}),(0,s.jsx)(`div`,{className:`wdpl-arrow`,children:(0,s.jsx)(`i`,{className:`fa-solid fa-arrow-right`})})]},n))}),(0,s.jsxs)(`div`,{className:`wdpl-note${t?` wde-anim`:``}`,style:t?{animationDelay:`0.45s`}:{},children:[(0,s.jsx)(`div`,{className:`wdpl-note-icon`,children:(0,s.jsx)(`i`,{className:`fa-solid fa-lightbulb`})}),(0,s.jsx)(`p`,{children:`The right brand identity strategy strengthens recognition, builds trust, and helps your business grow with confidence`})]})]})]})})})},A=()=>{let[e,t]=E(.08),[n,r]=(0,o.useState)(null),i=e=>r(n===e?null:e);return(0,s.jsx)(`section`,{className:`wdfq`,ref:e,children:(0,s.jsxs)(`div`,{className:`wdfq-container`,children:[(0,s.jsx)(`div`,{className:`wds-section-label`,children:`QUESTIONS? WE'VE GOT ANSWERS`}),(0,s.jsx)(`h3`,{className:`wdfq-heading`,children:`Frequently Asked Questions`}),(0,s.jsx)(`div`,{className:`wdfq-list`,children:T.map((e,r)=>(0,s.jsxs)(`div`,{className:`wdfq-item${n===r?` open`:``}${t?` wde-anim`:``}`,style:t?{animationDelay:`${r*.1}s`}:{},onClick:()=>i(r),children:[(0,s.jsxs)(`div`,{className:`wdfq-q`,children:[(0,s.jsx)(`div`,{className:`wdfq-icon`,children:(0,s.jsx)(`i`,{className:e.fa})}),(0,s.jsx)(`span`,{children:e.q}),(0,s.jsx)(`div`,{className:`wdfq-plus`,children:(0,s.jsx)(`i`,{className:`fa-solid ${n===r?`fa-minus`:`fa-plus`}`})})]}),n===r&&(0,s.jsx)(`div`,{className:`wdfq-a`,children:(0,s.jsx)(`p`,{children:e.a})})]},r))})]})})},j=()=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(D,{}),(0,s.jsx)(O,{}),(0,s.jsx)(k,{}),(0,s.jsx)(A,{})]}),M=()=>(0,s.jsxs)(`div`,{className:`page-wrapper`,children:[(0,s.jsx)(c,{}),(0,s.jsx)(`section`,{className:`services-details pt-120 pb-120`,style:{marginTop:`40px`,marginBottom:`120px`},children:(0,s.jsx)(`div`,{className:`service-details-page`,children:(0,s.jsx)(`div`,{className:`container`,children:(0,s.jsx)(`div`,{className:`wd-outer`,children:(0,s.jsx)(`div`,{className:`wd-content-col`,children:(0,s.jsxs)(`div`,{className:`services-details__content`,children:[(0,s.jsx)(p,{}),(0,s.jsx)(b,{}),(0,s.jsx)(j,{})]})})})})})})]});export{M as default};