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
           RIGHT VISUAL — Ecom Dashboard Mock
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

        /* ── Laptop Body — Ecom Dashboard ── */
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

        /* Ecom KPI cards */
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

        /* Product / channel rows */
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
      `}),(0,s.jsx)(`section`,{className:`wd-hero`,children:(0,s.jsxs)(`div`,{className:`wd-inner`,children:[(0,s.jsxs)(`div`,{className:`wd-hero-grid`,children:[(0,s.jsxs)(`div`,{className:`wd-hero-content`,children:[(0,s.jsxs)(`div`,{className:`wd-tagline`,children:[(0,s.jsx)(`i`,{className:`fas fa-bolt`}),` SCALE. OPTIMIZE. SELL MORE ONLINE.`]}),(0,s.jsxs)(`h3`,{children:[`Ecommerce Management`,(0,s.jsx)(`br`,{}),`That Drives `,(0,s.jsx)(`span`,{className:`wd-title-accent`,children:`Real Growth`})]}),(0,s.jsx)(`p`,{className:`wd-description`,children:`We help brands manage, optimize, and scale online stores with data-driven ecommerce strategies. From product listings and marketplace management to conversion optimization and performance tracking, our ecommerce solutions are built to increase sales, improve customer experience, and drive sustainable business growth.`}),(0,s.jsxs)(`div`,{className:`wd-btn-group`,children:[(0,s.jsxs)(`button`,{className:`wd-btn-primary`,type:`button`,onClick:a,children:[(0,s.jsx)(`i`,{className:`fas fa-rocket`}),`Start Your Store Growth`]}),(0,s.jsxs)(r,{to:`/portfolio`,className:`wd-btn-secondary`,children:[(0,s.jsx)(`span`,{className:`wd-play-icon`,children:(0,s.jsx)(`i`,{className:`fas fa-eye`})}),`View Our Results`]})]})]}),(0,s.jsx)(`div`,{className:`wd-hero-visual`,children:(0,s.jsxs)(`div`,{className:`wd-device-wrapper`,children:[(0,s.jsxs)(`div`,{className:`wd-laptop`,children:[(0,s.jsxs)(`div`,{className:`wd-laptop-bar`,children:[(0,s.jsxs)(`div`,{className:`wd-dots`,children:[(0,s.jsx)(`div`,{className:`wd-dot-circle wd-dot-r`}),(0,s.jsx)(`div`,{className:`wd-dot-circle wd-dot-y`}),(0,s.jsx)(`div`,{className:`wd-dot-circle wd-dot-g`})]}),(0,s.jsxs)(`div`,{className:`wd-url-bar`,children:[(0,s.jsx)(`div`,{className:`wd-url-bar-dot`}),(0,s.jsx)(`span`,{className:`wd-url-text`,children:`store.brandmingo.com`})]})]}),(0,s.jsxs)(`div`,{className:`wd-laptop-nav`,children:[(0,s.jsxs)(`div`,{className:`wd-mock-logo`,children:[`Brand`,(0,s.jsx)(`span`,{children:`Store`})]}),(0,s.jsx)(`ul`,{className:`wd-mock-nav-links`,children:[`Orders`,`Products`,`Inventory`,`Analytics`,`Returns`].map(e=>(0,s.jsx)(`li`,{children:e},e))}),(0,s.jsx)(`div`,{className:`wd-mock-cta-small`,children:`Manage Store →`})]}),(0,s.jsxs)(`div`,{className:`wd-laptop-body`,children:[(0,s.jsxs)(`div`,{className:`wd-dash-header`,children:[(0,s.jsxs)(`div`,{className:`wd-dash-title`,children:[`Store `,(0,s.jsx)(`span`,{children:`Sales Overview`})]}),(0,s.jsxs)(`div`,{className:`wd-dash-live`,children:[(0,s.jsx)(`div`,{className:`wd-dash-live-dot`}),`Live`]})]}),(0,s.jsx)(`div`,{className:`wd-kpi-row`,children:[{icon:`fas fa-rupee-sign`,label:`Total Revenue`,value:`₹8.4L`,delta:`+28% this month`},{icon:`fas fa-shopping-bag`,label:`Orders Today`,value:`312`,delta:`+44 vs yesterday`},{icon:`fas fa-percentage`,label:`Conv. Rate`,value:`4.2%`,delta:`+0.8% improved`}].map((e,t)=>(0,s.jsxs)(`div`,{className:`wd-kpi-card`,children:[(0,s.jsxs)(`div`,{className:`wd-kpi-label`,children:[(0,s.jsx)(`i`,{className:e.icon}),` `,e.label]}),(0,s.jsx)(`div`,{className:`wd-kpi-value`,children:e.value}),(0,s.jsx)(`div`,{className:`wd-kpi-delta`,children:e.delta})]},t))}),(0,s.jsx)(`div`,{className:`wd-channels`,children:[{icon:`fas fa-tshirt`,color:`#FF6B1E`,bg:`rgba(255,107,30,0.18)`,name:`Clothing`,val:`₹2.8L`,barW:`88%`,barColor:`#FF6B1E`},{icon:`fas fa-mobile-alt`,color:`#34D399`,bg:`rgba(52,211,153,0.18)`,name:`Electronics`,val:`₹2.1L`,barW:`66%`,barColor:`#34D399`},{icon:`fas fa-home`,color:`#A78BFA`,bg:`rgba(167,139,250,0.18)`,name:`Home & Living`,val:`₹1.6L`,barW:`50%`,barColor:`#A78BFA`},{icon:`fas fa-dumbbell`,color:`#FBBF24`,bg:`rgba(251,191,36,0.18)`,name:`Sports`,val:`₹1.1L`,barW:`36%`,barColor:`#FBBF24`}].map((e,t)=>(0,s.jsxs)(`div`,{className:`wd-ch-row`,children:[(0,s.jsx)(`div`,{className:`wd-ch-icon`,style:{background:e.bg},children:(0,s.jsx)(`i`,{className:e.icon,style:{color:e.color}})}),(0,s.jsx)(`span`,{className:`wd-ch-name`,children:e.name}),(0,s.jsx)(`div`,{className:`wd-ch-bar-track`,children:(0,s.jsx)(`div`,{className:`wd-ch-bar-fill`,style:{"--bar-w":e.barW,background:e.barColor}})}),(0,s.jsx)(`span`,{className:`wd-ch-val`,children:e.val})]},t))}),(0,s.jsx)(`div`,{className:`wd-mock-stats`,children:[{value:`200+`,label:`Projects Completed`},{value:`98%`,label:`Client Satisfaction`},{value:`4+`,label:`Years Experience`},{value:`24/7`,label:`Support`}].map((e,t)=>(0,s.jsxs)(`div`,{className:`wd-mock-stat`,children:[(0,s.jsx)(`span`,{className:`wd-mock-stat-val`,children:e.value}),(0,s.jsx)(`span`,{className:`wd-mock-stat-lbl`,children:e.label})]},t))})]})]}),(0,s.jsxs)(`div`,{className:`wd-phone`,children:[(0,s.jsx)(`div`,{className:`wd-phone-notch`,children:(0,s.jsx)(`div`,{className:`wd-phone-notch-bar`})}),(0,s.jsxs)(`div`,{className:`wd-phone-body`,children:[(0,s.jsxs)(`div`,{className:`wd-phone-logo`,children:[`Brand`,(0,s.jsx)(`span`,{children:`Store`})]}),(0,s.jsx)(`div`,{className:`wd-phone-widget-label`,children:`Today's Revenue`}),(0,s.jsx)(`div`,{className:`wd-phone-lead-count`,children:(0,s.jsx)(`span`,{children:`₹38.2K`})}),(0,s.jsxs)(`p`,{className:`wd-phone-lead-sub`,children:[`312 orders placed`,(0,s.jsx)(`br`,{}),`+18% vs yesterday`]}),(0,s.jsx)(`div`,{className:`wd-phone-channels`,children:[{icon:`fas fa-tshirt`,color:`#FF6B1E`,bg:`rgba(255,107,30,0.18)`,name:`Clothing`,val:`124`},{icon:`fas fa-mobile-alt`,color:`#34D399`,bg:`rgba(52,211,153,0.18)`,name:`Electronics`,val:`98`},{icon:`fas fa-home`,color:`#A78BFA`,bg:`rgba(167,139,250,0.18)`,name:`Home`,val:`90`}].map((e,t)=>(0,s.jsxs)(`div`,{className:`wd-phone-ch-row`,children:[(0,s.jsx)(`div`,{className:`wd-phone-ch-icon`,style:{background:e.bg},children:(0,s.jsx)(`i`,{className:e.icon,style:{color:e.color,fontSize:7}})}),(0,s.jsx)(`span`,{className:`wd-phone-ch-name`,children:e.name}),(0,s.jsx)(`span`,{className:`wd-phone-ch-val`,children:e.val})]},t))}),(0,s.jsxs)(`div`,{className:`wd-phone-btn`,children:[`View Orders`,` `,(0,s.jsx)(`i`,{className:`fas fa-arrow-right`,style:{fontSize:7}})]})]})]})]})})]}),(0,s.jsx)(`div`,{className:`wd-features`,children:[{icon:`fas fa-cart-shopping`,title:`Increase Online Sales`,desc:`Boost conversions with optimized listings, better visibility, and seamless shopping experiences.`},{icon:`fas fa-store`,title:`Multi-Channel Management`,desc:`Manage Shopify, Amazon, Flipkart, Meesho, and other marketplaces from one strategy.`},{icon:`fas fa-chart-line`,title:`Store Performance Growth`,desc:`Optimize products, pricing, inventory, and customer experience for higher revenue.`},{icon:`fas fa-rocket`,title:`Scalable Business Growth`,desc:`Scale your ecommerce business with data-driven strategies and continuous optimization.`}].map((e,t)=>(0,s.jsxs)(`div`,{className:`wd-feat-item`,children:[(0,s.jsx)(`div`,{className:`wd-feat-icon-wrap`,children:(0,s.jsx)(`i`,{className:e.icon})}),(0,s.jsxs)(`div`,{children:[(0,s.jsx)(`h4`,{children:e.title}),(0,s.jsx)(`p`,{children:e.desc})]})]},t))})]})})]})),l=`https://res.cloudinary.com/dqqgpii8v/image/upload/v1783514025/Untitled_design_we7jsc.png`,u=[{fa:`fa-brands fa-amazon`,label:`Amazon Management`,to:`/amazon-management-services`},{fa:`fa-solid fa-store`,label:`Flipkart Management`,to:`/flipkart-management-services`},{fa:`fa-solid fa-bag-shopping`,label:`Shopsy Management`,to:`/shopsy-management-services`},{fa:`fa-solid fa-cart-shopping`,label:`Snapdeal Management`,to:`/snapdeal-management-services`}],d=[{fa:`fa-solid fa-store`,title:`Increase Marketplace Visibility`,desc:`Boost product visibility across marketplaces to attract more customers and increase sales.`},{fa:`fa-solid fa-cart-shopping`,title:`Increase Sales & Conversions`,desc:`Optimize listings, pricing, and customer journeys to drive higher conversions and revenue.`},{fa:`fa-solid fa-boxes-stacked`,title:`Manage Inventory Efficiently`,desc:`Track inventory, prevent stock issues, and maintain smooth store operations every day.`},{fa:`fa-solid fa-face-smile`,title:`Enhance Customer Experience`,desc:`Deliver faster order management and seamless shopping experiences that build customer trust.`},{fa:`fa-solid fa-rocket`,title:`Achieve Sustainable Growth`,desc:`Scale your ecommerce business with data-driven strategies built for long-term success.`}],f=[{fa:`fa-solid fa-box`,key:`p`,suffix:`+`,label:`Orders Managed`,target:200},{fa:`fa-solid fa-face-smile`,key:`s`,suffix:`%`,label:`Client Satisfaction`,target:98},{fa:`fa-solid fa-chart-line`,key:`e`,suffix:`+`,label:`Years Ecommerce Experience`,target:4}],p=()=>{let e=(0,o.useRef)(null),[t,n]=(0,o.useState)(!1),[r,a]=(0,o.useState)(0),[c,p]=(0,o.useState)({p:0,s:0,h:0,e:0}),m=i();(0,o.useEffect)(()=>{let t=new IntersectionObserver(([e])=>{e.isIntersecting&&(n(!0),h(),t.disconnect())},{threshold:.08});return e.current&&t.observe(e.current),()=>t.disconnect()},[]);let h=()=>{let e={p:200,s:98,h:24,e:3},t=0,n=setInterval(()=>{t++;let r=1-(1-Math.min(t/60,1))**3;p({p:Math.round(e.p*r),s:Math.round(e.s*r),h:Math.round(e.h*r),e:Math.round(e.e*r)}),t>=60&&clearInterval(n)},2e3/60)};return(0,s.jsx)(`section`,{className:`wda`,ref:e,children:(0,s.jsxs)(`div`,{className:`wda-grid`,children:[(0,s.jsxs)(`aside`,{className:`wda-sidebar`,children:[(0,s.jsx)(`div`,{className:`wda-main-card`,children:(0,s.jsxs)(`div`,{className:`wda-logo-row`,children:[(0,s.jsx)(`div`,{className:`wda-logo-img`,children:(0,s.jsx)(`i`,{className:`fa-solid fa-layer-group`})}),(0,s.jsxs)(`div`,{className:`wda-logo-text`,children:[(0,s.jsx)(`b`,{children:`Brandmingo`}),(0,s.jsx)(`span`,{children:`Digital Solutions`})]})]})}),(0,s.jsx)(`div`,{className:`wda-main-card`,children:(0,s.jsx)(`div`,{className:`wda-nav-wrap wda-nav-wrap--no-border`,children:(0,s.jsx)(`ul`,{className:`wda-nav`,children:u.map((e,t)=>(0,s.jsxs)(`li`,{className:r===t?`active`:``,onClick:()=>{a(t),m(e.to)},children:[(0,s.jsxs)(`span`,{className:`nl`,children:[(0,s.jsx)(`i`,{className:e.fa}),e.label]}),(0,s.jsx)(`i`,{className:`fa-solid fa-chevron-right chev`})]},t))})})}),(0,s.jsxs)(`div`,{className:`wda-main-card wda-call`,children:[(0,s.jsx)(`i`,{className:`fa-solid fa-rocket wda-rocket`}),(0,s.jsxs)(`h3`,{children:[`Let’s Grow Your `,(0,s.jsx)(`span`,{children:`Business with Ecommerce`})]}),(0,s.jsx)(`p`,{children:`Want to boost your online sales? Let’s turn your store into a high-converting machine that drives consistent orders and long-term revenue growth.`}),(0,s.jsx)(`a`,{href:`tel:+919990613140`,className:`wda-ring`,children:(0,s.jsx)(`i`,{className:`fa-solid fa-phone`})}),(0,s.jsx)(`small`,{className:`wda-expert-label`,children:`Talk to an expert`}),(0,s.jsx)(`a`,{href:`tel:+919990613140`,className:`wda-phone`,children:`+91 99906 13140`}),(0,s.jsx)(`small`,{className:`wda-expert-label wda-timing`,children:`Mon – Sat | 10:00 AM – 7:00 PM`})]}),(0,s.jsx)(`div`,{className:`wda-main-card`,children:(0,s.jsxs)(`div`,{className:`wda-stats-wrap`,children:[(0,s.jsx)(`p`,{className:`wda-stats-lbl`,children:`Our Work Speaks`}),f.map(e=>(0,s.jsxs)(`div`,{className:`wda-stat`,children:[(0,s.jsx)(`div`,{className:`wda-stat-ic`,children:(0,s.jsx)(`i`,{className:e.fa})}),(0,s.jsxs)(`div`,{children:[(0,s.jsxs)(`b`,{children:[c[e.key],e.suffix]}),(0,s.jsx)(`span`,{children:e.label})]})]},e.key))]})}),(0,s.jsxs)(`a`,{href:`src/assets/images/Brochure/BM Brochure.pdf`,target:`_blank`,rel:`noopener noreferrer`,className:`wda-pdf-card`,children:[(0,s.jsxs)(`span`,{className:`wda-dl-label`,children:[(0,s.jsx)(`i`,{className:`fa-solid fa-file-pdf`}),`Brochure (PDF)`]}),(0,s.jsx)(`div`,{className:`wda-dl-btn`,children:(0,s.jsx)(`i`,{className:`fa-solid fa-download`})})]})]}),(0,s.jsxs)(`main`,{className:`wda-main`,children:[(0,s.jsxs)(`div`,{className:`wda-hero`,children:[(0,s.jsx)(`img`,{src:l,alt:`Ecommerce Management Banner - Brandmingo`,className:`wda-hero-img`}),(0,s.jsx)(`div`,{className:`wda-hero-ov`,children:(0,s.jsxs)(`div`,{className:`wda-hero-txt`,children:[(0,s.jsxs)(`div`,{className:`wda-hero-badge`,children:[(0,s.jsx)(`i`,{className:`fa-solid fa-laptop-code`}),`ABOUT ECOMMERCE MANAGEMENT`]}),(0,s.jsxs)(`h2`,{children:[`Driving Ecommerce Growth Through`,` `,(0,s.jsx)(`span`,{children:`Strategic Store Management`})]})]})})]}),(0,s.jsxs)(`article`,{children:[(0,s.jsxs)(`div`,{className:`wda-lbl`,children:[(0,s.jsx)(`i`,{className:`fa-solid fa-circle`}),`Introduction`]}),(0,s.jsx)(`h2`,{className:`wda-h1`,children:`What is Ecommerce Management?`}),(0,s.jsxs)(`p`,{className:`wda-p`,children:[`Ecommerce management is the process of optimizing, managing, and growing your online store across ecommerce platforms and marketplaces. It includes product listings, inventory management, pricing strategies, order processing, and store optimization to improve overall performance.`,(0,s.jsx)(`br`,{}),`A successful ecommerce store is more than just products—it requires the right strategy, seamless operations, and continuous optimization. Effective ecommerce management helps increase visibility, improve customer experience, boost conversions, and drive sustainable business growth across every sales channel.`]}),(0,s.jsxs)(`div`,{className:`wda-lbl`,style:{marginTop:`40px`},children:[(0,s.jsx)(`i`,{className:`fa-solid fa-circle`}),`Strategy`]}),(0,s.jsx)(`h3`,{className:`wda-h2`,children:`Why Your Business Needs Ecommerce Management`}),(0,s.jsx)(`div`,{className:`wda-reasons`,children:d.map((e,n)=>(0,s.jsxs)(`div`,{className:`wda-r`,style:t?{animation:`wda-fade-up 0.55s ${n*.1}s forwards`}:{},children:[(0,s.jsx)(`div`,{className:`wda-r-ico`,children:(0,s.jsx)(`i`,{className:e.fa})}),(0,s.jsx)(`h5`,{children:e.title}),(0,s.jsx)(`p`,{children:e.desc})]},n))}),(0,s.jsxs)(`div`,{className:`wda-quote`,children:[(0,s.jsx)(`div`,{className:`wda-quote-icon`,children:(0,s.jsx)(`i`,{className:`fa-solid fa-quote-right`})}),(0,s.jsxs)(`span`,{children:[`Without effective ecommerce management, you're losing valuable`,(0,s.jsx)(`em`,{children:` sales, and long-term growth opportunities`})]})]}),(0,s.jsxs)(`div`,{className:`wda-img-cards`,children:[(0,s.jsxs)(`div`,{className:`wda-img-card`,children:[(0,s.jsx)(`img`,{src:`https://res.cloudinary.com/dqqgpii8v/image/upload/v1783516290/Untitled_design_1_tdiced.png`,alt:`Modern Web Development`}),(0,s.jsxs)(`div`,{className:`wda-img-card-body`,children:[(0,s.jsx)(`div`,{className:`wda-img-card-icon`,children:(0,s.jsx)(`i`,{className:`fa-solid fa-cart-shopping`})}),(0,s.jsx)(`p`,{children:`Data-driven ecommerce strategies that improve product visibility, increase conversions, and accelerate long-term business growth.`}),(0,s.jsx)(`a`,{href:`#contact`,className:`wda-img-card-arrow`,children:(0,s.jsx)(`i`,{className:`fa-solid fa-arrow-right`})})]})]}),(0,s.jsxs)(`div`,{className:`wda-img-card`,children:[(0,s.jsx)(`img`,{src:`https://i.ibb.co/Zz0MNRM4/website-developement-image-Brandmingo.avif`,alt:`E-commerce Solutions`}),(0,s.jsxs)(`div`,{className:`wda-img-card-body`,children:[(0,s.jsx)(`div`,{className:`wda-img-card-icon`,children:(0,s.jsx)(`i`,{className:`fa-solid fa-chart-line`})}),(0,s.jsx)(`p`,{children:`Conversion-focused ecommerce solutions that optimize customer journeys, boost online sales, and maximize store performance.`}),(0,s.jsx)(`a`,{href:`#contact`,className:`wda-img-card-arrow`,children:(0,s.jsx)(`i`,{className:`fa-solid fa-arrow-right`})})]})]})]})]})]})]})})},m=[{fa:`fa-solid fa-store`,num:`01`,title:`Marketplace Management`,desc:`Manage Amazon, Flipkart, Meesho, Myntra, Etsy, and more to improve sales performance.`},{fa:`fa-solid fa-tags`,num:`02`,title:`Product Listing Optimization`,desc:`Create SEO-friendly listings, keywords, and content to improve visibility and conversions.`},{fa:`fa-solid fa-boxes-stacked`,num:`03`,title:`Inventory & Order Management`,desc:`Manage inventory, monitor stock levels, and streamline order fulfillment efficiently.`},{fa:`fa-solid fa-bullhorn`,num:`04`,title:`Ecommerce Marketing`,desc:`Drive qualified traffic through SEO, paid ads, social media, and marketplace promotions.`}],h=[{fa:`fa-brands fa-amazon`,title:`Amazon Seller Central`,desc:`Manage listings, inventory, advertising, and performance for higher marketplace sales.`},{fa:`fa-brands fa-shopify`,title:`Shopify & WooCommerce`,desc:`Build, optimize, and scale high-performing ecommerce stores with confidence.`},{fa:`fa-solid fa-chart-line`,title:`Marketplace Analytics`,desc:`Track sales, customer behavior, and product performance with accurate insights.`},{fa:`fa-solid fa-boxes-stacked`,title:`Inventory Management`,desc:`Monitor stock levels, automate inventory, and streamline order fulfillment efficiently.`}],g=[{num:`01`,fa:`fa-solid fa-magnifying-glass-chart`,title:`Ecommerce Audit & Analysis`,desc:`We evaluate store performance, product listings, competitors, and growth opportunities for success.`},{num:`02`,fa:`fa-solid fa-route`,title:`Strategy & Marketplace Planning`,desc:`We create customized marketplace strategies based on products, customers, and business objectives.`},{num:`03`,fa:`fa-solid fa-store`,title:`Store & Product Optimization`,desc:`We optimize listings, pricing, inventory, categories, and user experience for higher conversions.`},{num:`04`,fa:`fa-solid fa-bullhorn`,title:`Marketing & Growth Execution`,desc:`We execute SEO, marketplace ads, promotions, and campaigns to increase online sales consistently.`},{num:`05`,fa:`fa-solid fa-chart-line`,title:`Performance Monitoring & Scaling`,desc:`We track KPIs, optimize campaigns, and scale profitable growth opportunities for maximum ROI.`}],_=()=>{let e=(0,o.useRef)(null),[t,n]=(0,o.useState)(!1);return(0,o.useEffect)(()=>{let t=new IntersectionObserver(([e])=>{e.isIntersecting&&(n(!0),t.disconnect())},{threshold:.1});return e.current&&t.observe(e.current),()=>t.disconnect()},[]),(0,s.jsx)(`section`,{className:`wds`,ref:e,children:(0,s.jsx)(`div`,{className:`wds-container`,children:(0,s.jsxs)(`div`,{className:`wds-types-grid`,children:[(0,s.jsxs)(`div`,{className:`wds-types-left`,children:[(0,s.jsx)(`div`,{className:`wds-section-label`,children:`WHAT WE MANAGE`}),(0,s.jsx)(`h3`,{className:`wds-types-heading`,children:`TYPES OF ECOMMERCE MANAGEMENT SERVICES`}),(0,s.jsx)(`p`,{className:`wds-types-desc`,children:`Every ecommerce business has unique goals, products, and challenges. We create customized management strategies that improve store performance, increase sales, and support sustainable business growth across leading ecommerce platforms.`}),(0,s.jsx)(`div`,{className:`wds-deco`,"aria-hidden":`true`,children:(0,s.jsxs)(`svg`,{width:`240`,height:`190`,viewBox:`0 0 240 190`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,children:[(0,s.jsxs)(`defs`,{children:[(0,s.jsxs)(`radialGradient`,{id:`dotFade`,cx:`20%`,cy:`20%`,r:`80%`,children:[(0,s.jsx)(`stop`,{offset:`0%`,stopColor:`white`,stopOpacity:`0.55`}),(0,s.jsx)(`stop`,{offset:`100%`,stopColor:`white`,stopOpacity:`0`})]}),(0,s.jsx)(`mask`,{id:`gridMask`,children:(0,s.jsx)(`rect`,{width:`240`,height:`190`,fill:`url(#dotFade)`})}),(0,s.jsxs)(`radialGradient`,{id:`glowDot`,cx:`50%`,cy:`50%`,r:`50%`,children:[(0,s.jsx)(`stop`,{offset:`0%`,stopColor:`#f97316`,stopOpacity:`1`}),(0,s.jsx)(`stop`,{offset:`100%`,stopColor:`#f97316`,stopOpacity:`0`})]})]}),(0,s.jsx)(`g`,{mask:`url(#gridMask)`,children:Array.from({length:10},(e,t)=>Array.from({length:13},(e,n)=>(0,s.jsx)(`circle`,{cx:n*20+4,cy:t*20+4,r:`1.4`,fill:`#f97316`,opacity:`0.5`},`${t}-${n}`)))}),(0,s.jsx)(`path`,{d:`M 0 190 Q 180 150 230 20`,stroke:`#f97316`,strokeWidth:`1.2`,fill:`none`,opacity:`0.45`,strokeLinecap:`round`}),(0,s.jsx)(`circle`,{cx:`205`,cy:`72`,r:`5`,fill:`#f97316`,opacity:`0.9`}),(0,s.jsx)(`circle`,{cx:`205`,cy:`72`,r:`10`,fill:`#f97316`,opacity:`0.2`}),(0,s.jsx)(`circle`,{cx:`205`,cy:`72`,r:`16`,fill:`#f97316`,opacity:`0.08`})]})})]}),(0,s.jsx)(`div`,{className:`wds-types-cards`,children:m.map((e,n)=>(0,s.jsxs)(`div`,{className:`wds-type-card${t?` wds-anim`:``}`,style:t?{animationDelay:`${n*.1}s`}:{},children:[(0,s.jsx)(`span`,{className:`wds-card-num`,children:e.num}),(0,s.jsx)(`div`,{className:`wds-card-icon`,children:(0,s.jsx)(`i`,{className:e.fa})}),(0,s.jsx)(`h4`,{className:`wds-card-title`,children:e.title}),(0,s.jsx)(`p`,{className:`wds-card-desc`,children:e.desc}),(0,s.jsxs)(`a`,{href:`#contact`,className:`wds-card-link`,onClick:e=>{e.preventDefault(),a()},children:[`Learn More `,(0,s.jsx)(`i`,{className:`fa-solid fa-arrow-right`})]})]},n))})]})})})},v=()=>{let e=(0,o.useRef)(null),[t,n]=(0,o.useState)(!1);return(0,o.useEffect)(()=>{let t=new IntersectionObserver(([e])=>{e.isIntersecting&&(n(!0),t.disconnect())},{threshold:.1});return e.current&&t.observe(e.current),()=>t.disconnect()},[]),(0,s.jsx)(`section`,{className:`wdt`,ref:e,children:(0,s.jsx)(`div`,{className:`wdt-container`,children:(0,s.jsxs)(`div`,{className:`wdt-grid`,children:[(0,s.jsxs)(`div`,{className:`wdt-left`,children:[(0,s.jsx)(`div`,{className:`wds-section-label`,children:`BUILT WITH POWERFUL TOOLS`}),(0,s.jsx)(`h3`,{className:`wdt-heading`,children:`Ecommerce Tools & Platforms We Use`}),(0,s.jsx)(`p`,{className:`wdt-desc`,children:`We use industry-leading ecommerce platforms, marketplace tools, and analytics solutions to optimize store performance, improve operations, and drive sustainable online sales growth.`})]}),(0,s.jsx)(`div`,{className:`wdt-cards`,children:h.map((e,n)=>(0,s.jsxs)(`div`,{className:`wdt-card${t?` wds-anim`:``}`,style:t?{animationDelay:`${n*.1}s`}:{},children:[(0,s.jsx)(`div`,{className:`wdt-card-icon`,children:(0,s.jsx)(`i`,{className:e.fa})}),(0,s.jsxs)(`div`,{className:`wdt-card-content`,children:[(0,s.jsx)(`h4`,{className:`wdt-card-title`,children:e.title}),(0,s.jsx)(`p`,{className:`wdt-card-desc`,children:e.desc}),(0,s.jsx)(`div`,{className:`wdt-card-line`})]})]},n))})]})})})},y=()=>{let e=(0,o.useRef)(null),[t,n]=(0,o.useState)(!1);return(0,o.useEffect)(()=>{let t=new IntersectionObserver(([e])=>{e.isIntersecting&&(n(!0),t.disconnect())},{threshold:.08});return e.current&&t.observe(e.current),()=>t.disconnect()},[]),(0,s.jsx)(`section`,{className:`wdp`,ref:e,children:(0,s.jsx)(`div`,{className:`wdp-container`,children:(0,s.jsxs)(`div`,{className:`wdp-grid`,children:[(0,s.jsxs)(`div`,{className:`wdp-left`,children:[(0,s.jsx)(`div`,{className:`wds-section-label`,children:`OUR WORKFLOW`}),(0,s.jsx)(`h3`,{className:`wdp-heading`,children:`Our Ecommerce Growth Process`}),(0,s.jsx)(`p`,{className:`wdp-desc`,children:`Our proven ecommerce management process helps increase online sales, optimize operations, improve customer experience, and drive sustainable business growth across every sales channel.`}),(0,s.jsxs)(`div`,{className:`wdp-cta`,children:[(0,s.jsx)(`div`,{className:`wdp-cta-icon`,children:(0,s.jsx)(`i`,{className:`fa-solid fa-comments`})}),(0,s.jsxs)(`div`,{className:`wdp-cta-text`,children:[(0,s.jsx)(`h4`,{children:`Have an ecommerce project in mind?`}),(0,s.jsx)(`p`,{children:`Let’s build a high-performing store that drives sales and real growth.`}),(0,s.jsxs)(`button`,{className:`wdp-cta-btn`,type:`button`,onClick:a,children:[`Let's Talk`,(0,s.jsx)(`i`,{className:`fa-solid fa-arrow-right`})]})]})]})]}),(0,s.jsx)(`div`,{className:`wdp-steps`,children:g.map((e,n)=>(0,s.jsxs)(`div`,{className:`wdp-step${t?` wds-anim`:``}`,style:t?{animationDelay:`${n*.1}s`}:{},children:[(0,s.jsx)(`div`,{className:`wdp-step-num`,children:e.num}),(0,s.jsx)(`div`,{className:`wdp-step-icon`,children:(0,s.jsx)(`i`,{className:e.fa})}),(0,s.jsxs)(`div`,{className:`wdp-step-body`,children:[(0,s.jsx)(`h4`,{children:e.title}),(0,s.jsx)(`p`,{children:e.desc})]})]},n))})]})})})},b=()=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(_,{}),(0,s.jsx)(v,{}),(0,s.jsx)(y,{})]}),x=[{fa:`fa-solid fa-store`,title:`Marketplace-Focused Growth`,desc:`Increase product visibility across leading marketplaces to drive more sales consistently.`},{fa:`fa-solid fa-chart-line`,title:`ROI-Driven Strategy`,desc:`Every optimization is focused on maximizing revenue, profitability, and long-term growth.`},{fa:`fa-solid fa-chart-pie`,title:`Data-Driven Decisions`,desc:`Use analytics and customer insights to improve store performance continuously.`},{fa:`fa-solid fa-cart-shopping`,title:`Conversion Optimization`,desc:`Transform visitors into loyal customers through strategic store optimization efforts.`},{fa:`fa-solid fa-file-lines`,title:`Transparent Reporting`,desc:`Receive clear performance reports with actionable insights and growth recommendations.`}],S=[`Increase product visibility`,`Improve conversion rates`,`Generate more online sales`,`Scale your business faster`],C=[`Marketplace account management`,`Product listing optimization`,`Inventory & order management`,`Performance reporting & analytics`],w=[{fa:`fa-solid fa-store`,title:`Marketplace Management`,sub:`BEST FOR`,desc:`Managing Amazon, Flipkart, Myntra, Meesho, Etsy, and other marketplaces.`},{fa:`fa-solid fa-magnifying-glass`,title:`Ecommerce SEO`,sub:`BEST FOR`,desc:`Improving product visibility, organic traffic, and search engine rankings.`},{fa:`fa-solid fa-bullhorn`,title:`Performance Marketing`,sub:`BEST FOR`,desc:`Driving targeted traffic, customer acquisition, and online store sales.`},{fa:`fa-solid fa-chart-line`,title:`Conversion Optimization`,sub:`BEST FOR`,desc:`Increasing conversions, revenue, and overall store performance consistently.`}],T=[{fa:`fa-solid fa-store`,q:`What ecommerce management services do you offer?`,a:`We provide marketplace management, product listing optimization, inventory management, ecommerce SEO, advertising, order monitoring, and growth consulting.`},{fa:`fa-solid fa-layer-group`,q:`Which ecommerce platform is best for my business?`,a:`The right platform depends on your products, audience, and business goals. We help you choose and optimize the best ecommerce ecosystem.`},{fa:`fa-solid fa-clock`,q:`How long does it take to see results?`,a:`Most ecommerce stores start seeing measurable improvements within 30–90 days, depending on competition, store performance, and optimization opportunities.`},{fa:`fa-solid fa-chart-line`,q:`How do you increase ecommerce sales?`,a:`We optimize listings, improve store visibility, manage advertising campaigns, enhance customer experience, and implement data-driven growth strategies.`},{fa:`fa-brands fa-amazon`,q:`Which marketplaces do you manage?`,a:`We manage Amazon, Flipkart, Myntra, Meesho, JioMart, Etsy, Shopify, WooCommerce, and other leading ecommerce platforms.`}],E=(e=.1)=>{let t=(0,o.useRef)(null),[n,r]=(0,o.useState)(!1);return(0,o.useEffect)(()=>{let n=new IntersectionObserver(([e])=>{e.isIntersecting&&(r(!0),n.disconnect())},{threshold:e});return t.current&&n.observe(t.current),()=>n.disconnect()},[]),[t,n]},D=()=>{let[e,t]=E(.08);return(0,s.jsx)(`section`,{className:`wde`,ref:e,children:(0,s.jsx)(`div`,{className:`wde-container`,children:(0,s.jsxs)(`div`,{className:`wde-grid`,children:[(0,s.jsxs)(`div`,{className:`wde-left`,children:[(0,s.jsx)(`div`,{className:`wds-section-label`,children:`OUR PROMISE`}),(0,s.jsxs)(`h3`,{className:`wde-heading`,children:[`Why Brands Choose Our `,(0,s.jsx)(`span`,{children:`Ecommerce Management Services`})]}),(0,s.jsx)(`p`,{className:`wde-desc`,children:`Most agencies focus only on traffic. We focus on increasing sales, improving profitability, and building scalable ecommerce businesses through data-driven management and continuous optimization.`}),(0,s.jsx)(`div`,{className:`wde-gradient-bar`})]}),(0,s.jsxs)(`div`,{className:`wde-right`,children:[(0,s.jsx)(`div`,{className:`wde-features`,children:x.map((e,n)=>(0,s.jsxs)(`div`,{className:`wde-feat${t?` wde-anim`:``}`,style:t?{animationDelay:`${n*.1}s`}:{},children:[(0,s.jsx)(`div`,{className:`wde-feat-icon`,children:(0,s.jsx)(`i`,{className:e.fa})}),(0,s.jsxs)(`div`,{className:`wde-feat-body`,children:[(0,s.jsx)(`h5`,{children:e.title}),(0,s.jsx)(`p`,{children:e.desc})]})]},n))}),(0,s.jsxs)(`div`,{className:`wde-note`,children:[(0,s.jsx)(`div`,{className:`wde-note-icon`,children:(0,s.jsx)(`i`,{className:`fa-solid fa-rocket`})}),(0,s.jsxs)(`p`,{children:[`More visibility. More sales. More customers. More growth`,` `,(0,s.jsx)(`em`,{children:`That's the power of professional `}),`ecommerce management`]})]})]})]})})})},O=()=>{let[e,t]=E(.08);return(0,s.jsx)(`section`,{className:`wdec`,ref:e,children:(0,s.jsx)(`div`,{className:`wdec-container`,children:(0,s.jsxs)(`div`,{className:`wdec-grid`,children:[(0,s.jsxs)(`div`,{className:`wdec-left`,children:[(0,s.jsx)(`div`,{className:`wds-section-label`,children:`GROW YOUR BUSINESS`}),(0,s.jsxs)(`h3`,{className:`wdec-heading`,children:[`Do You Need`,(0,s.jsx)(`span`,{children:`Ecommerce Management?`})]}),(0,s.jsx)(`div`,{className:`wdec-divider`}),(0,s.jsx)(`p`,{className:`wdec-desc`,children:`If your online store is struggling with low sales, poor visibility, or operational challenges, ecommerce management can help. We optimize your store, improve conversions, streamline operations, and build sustainable growth across leading ecommerce platforms`})]}),(0,s.jsxs)(`div`,{className:`wdec-cards`,children:[(0,s.jsxs)(`div`,{className:`wdec-card${t?` wde-anim`:``}`,style:t?{animationDelay:`0.1s`}:{},children:[(0,s.jsx)(`div`,{className:`wdec-card-icon`,children:(0,s.jsx)(`i`,{className:`fa-solid fa-cart-shopping`})}),(0,s.jsxs)(`h4`,{children:[`Ecommerce Management`,(0,s.jsx)(`span`,{children:`Allows You To:`})]}),(0,s.jsx)(`ul`,{className:`wdec-list`,children:S.map((e,t)=>(0,s.jsxs)(`li`,{children:[(0,s.jsx)(`i`,{className:`fa-solid fa-arrow-right`}),e]},t))})]}),(0,s.jsxs)(`div`,{className:`wdec-card${t?` wde-anim`:``}`,style:t?{animationDelay:`0.2s`}:{},children:[(0,s.jsx)(`div`,{className:`wdec-card-icon`,children:(0,s.jsx)(`i`,{className:`fa-solid fa-gift`})}),(0,s.jsx)(`h4`,{children:`We Provide:`}),(0,s.jsx)(`ul`,{className:`wdec-list wdec-list--dot`,children:C.map((e,t)=>(0,s.jsxs)(`li`,{children:[(0,s.jsx)(`i`,{className:`fa-solid fa-circle`}),e]},t))})]})]})]})})})},k=()=>{let[e,t]=E(.08);return(0,s.jsx)(`section`,{className:`wdpl`,ref:e,children:(0,s.jsx)(`div`,{className:`wdpl-container`,children:(0,s.jsxs)(`div`,{className:`wdpl-grid`,children:[(0,s.jsxs)(`div`,{className:`wdpl-left`,children:[(0,s.jsx)(`div`,{className:`wds-section-label`,children:`CHOOSE WHAT’S RIGHT`}),(0,s.jsxs)(`h3`,{className:`wdpl-heading`,children:[`Which Ecommerce`,(0,s.jsx)(`span`,{children:` Strategy `}),`Fits You?`]}),(0,s.jsx)(`p`,{className:`wdpl-desc`,children:`Every ecommerce business has unique products, customers, and growth goals. We help you choose the right ecommerce strategy to increase visibility, improve conversions, and maximize long-term sales performance.`})]}),(0,s.jsxs)(`div`,{className:`wdpl-right`,children:[(0,s.jsx)(`div`,{className:`wdpl-cards`,children:w.map((e,n)=>(0,s.jsxs)(`div`,{className:`wdpl-card${t?` wde-anim`:``}`,style:t?{animationDelay:`${n*.1}s`}:{},children:[(0,s.jsxs)(`div`,{className:`wdpl-card-inner`,children:[(0,s.jsx)(`div`,{className:`wdpl-card-icon`,children:(0,s.jsx)(`i`,{className:e.fa})}),(0,s.jsxs)(`div`,{className:`wdpl-card-body`,children:[(0,s.jsx)(`h5`,{children:e.title}),(0,s.jsx)(`span`,{className:`wdpl-sub`,children:e.sub}),(0,s.jsx)(`p`,{children:e.desc})]})]}),(0,s.jsx)(`div`,{className:`wdpl-arrow`,children:(0,s.jsx)(`i`,{className:`fa-solid fa-arrow-right`})})]},n))}),(0,s.jsxs)(`div`,{className:`wdpl-note${t?` wde-anim`:``}`,style:t?{animationDelay:`0.45s`}:{},children:[(0,s.jsx)(`div`,{className:`wdpl-note-icon`,children:(0,s.jsx)(`i`,{className:`fa-solid fa-lightbulb`})}),(0,s.jsx)(`p`,{children:`The strongest ecommerce brands combine marketplace management, SEO, paid marketing, and conversion optimization for sustainable growth.`})]})]})]})})})},A=()=>{let[e,t]=E(.08),[n,r]=(0,o.useState)(null),i=e=>r(n===e?null:e);return(0,s.jsx)(`section`,{className:`wdfq`,ref:e,children:(0,s.jsxs)(`div`,{className:`wdfq-container`,children:[(0,s.jsx)(`div`,{className:`wds-section-label`,children:`QUESTIONS? WE'VE GOT ANSWERS`}),(0,s.jsx)(`h3`,{className:`wdfq-heading`,children:`Frequently Asked Questions`}),(0,s.jsx)(`div`,{className:`wdfq-list`,children:T.map((e,r)=>(0,s.jsxs)(`div`,{className:`wdfq-item${n===r?` open`:``}${t?` wde-anim`:``}`,style:t?{animationDelay:`${r*.1}s`}:{},onClick:()=>i(r),children:[(0,s.jsxs)(`div`,{className:`wdfq-q`,children:[(0,s.jsx)(`div`,{className:`wdfq-icon`,children:(0,s.jsx)(`i`,{className:e.fa})}),(0,s.jsx)(`span`,{children:e.q}),(0,s.jsx)(`div`,{className:`wdfq-plus`,children:(0,s.jsx)(`i`,{className:`fa-solid ${n===r?`fa-minus`:`fa-plus`}`})})]}),n===r&&(0,s.jsx)(`div`,{className:`wdfq-a`,children:(0,s.jsx)(`p`,{children:e.a})})]},r))})]})})},j=()=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(D,{}),(0,s.jsx)(O,{}),(0,s.jsx)(k,{}),(0,s.jsx)(A,{})]}),M=()=>(0,s.jsxs)(`div`,{className:`page-wrapper`,children:[(0,s.jsx)(c,{}),(0,s.jsx)(`section`,{className:`services-details pt-120 pb-120`,style:{marginTop:`40px`,marginBottom:`120px`},children:(0,s.jsx)(`div`,{className:`service-details-page`,children:(0,s.jsx)(`div`,{className:`container`,children:(0,s.jsx)(`div`,{className:`wd-outer`,children:(0,s.jsx)(`div`,{className:`wd-content-col`,children:(0,s.jsxs)(`div`,{className:`services-details__content`,children:[(0,s.jsx)(p,{}),(0,s.jsx)(b,{}),(0,s.jsx)(j,{})]})})})})})})]});export{M as default};