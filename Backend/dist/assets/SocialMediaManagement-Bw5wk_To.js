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

        @keyframes wd-float {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-6px); }
        }

        @keyframes wd-bar-grow {
          from { width: 0; }
          to   { width: var(--bar-w); }
        }

        @keyframes wd-count-pulse {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.6; }
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

        /* ══════════════════════════════════════
           RIGHT VISUAL — SMM Dashboard Mock
        ══════════════════════════════════════ */
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

        /* Nav inside mock */
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

        /* Laptop Body — SMM Dashboard */
        .wd-laptop-body {
          background: linear-gradient(145deg, #111 0%, #0d0d0d 100%);
          padding: 20px 20px 18px;
          min-height: 260px;
          position: relative;
          overflow: hidden;
        }

        .wd-laptop-body::before {
          content: '';
          position: absolute;
          top: -40px; right: -40px;
          width: 220px; height: 220px;
          background: radial-gradient(circle, rgba(255,107,30,0.14) 0%, transparent 70%);
          pointer-events: none;
        }

        /* Dashboard heading row */
        .wd-dash-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 14px;
        }

        .wd-dash-title {
          font-size: 13px;
          font-weight: 700;
          color: #fff;
        }

        .wd-dash-title span { color: var(--theme-color1); }

        .wd-dash-badge {
          background: rgba(255,107,30,0.15);
          border: 1px solid rgba(255,107,30,0.35);
          color: var(--theme-color1);
          font-size: 9px;
          font-weight: 700;
          padding: 3px 8px;
          border-radius: 20px;
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .wd-dash-badge i { font-size: 8px; }

        /* Platform rows */
        .wd-platform-rows {
          display: flex;
          flex-direction: column;
          gap: 9px;
          margin-bottom: 14px;
        }

        .wd-platform-row {
          display: flex;
          align-items: center;
          gap: 10px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.05);
          border-radius: 8px;
          padding: 8px 12px;
        }

        .wd-plat-icon {
          width: 26px; height: 26px;
          border-radius: 6px;
          display: flex; align-items: center; justify-content: center;
          font-size: 12px;
          flex-shrink: 0;
        }

        .wd-plat-info {
          flex: 1;
          min-width: 0;
        }

        .wd-plat-name {
          font-size: 9px;
          font-weight: 600;
          color: rgba(255,255,255,0.75);
          margin-bottom: 4px;
        }

        .wd-plat-bar-wrap {
          height: 4px;
          background: rgba(255,255,255,0.07);
          border-radius: 4px;
          overflow: hidden;
        }

        .wd-plat-bar {
          height: 100%;
          border-radius: 4px;
          background: var(--theme-color1);
          animation: wd-bar-grow 1.2s ease forwards;
        }

        .wd-plat-right {
          text-align: right;
          flex-shrink: 0;
        }

        .wd-plat-val {
          font-size: 10px;
          font-weight: 700;
          color: #fff;
        }

        .wd-plat-sub {
          font-size: 8px;
          color: rgba(255,107,30,0.8);
        }

        /* Stats row at bottom */
        .wd-mock-stats {
          display: grid;
          grid-template-columns: repeat(4,1fr);
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
          animation: wd-float 5s ease-in-out 0.8s infinite;
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

        /* Phone: Social media engagement widget */
        .wd-phone-label {
          font-size: 8px;
          font-weight: 700;
          color: rgba(255,255,255,0.45);
          text-transform: uppercase;
          letter-spacing: 0.8px;
          margin-bottom: 8px;
        }

        .wd-phone-platform-list {
          display: flex;
          flex-direction: column;
          gap: 7px;
          margin-bottom: 12px;
        }

        .wd-phone-plat-row {
          display: flex;
          align-items: center;
          gap: 7px;
        }

        .wd-phone-plat-icon {
          width: 18px; height: 18px;
          border-radius: 4px;
          display: flex; align-items: center; justify-content: center;
          font-size: 9px;
          flex-shrink: 0;
        }

        .wd-phone-plat-name {
          font-size: 8px;
          color: rgba(255,255,255,0.6);
          flex: 1;
        }

        .wd-phone-plat-tag {
          font-size: 7px;
          font-weight: 700;
          color: var(--theme-color1);
        }

        .wd-phone-cta {
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
      `}),(0,s.jsx)(`section`,{className:`wd-hero`,children:(0,s.jsxs)(`div`,{className:`wd-inner`,children:[(0,s.jsxs)(`div`,{className:`wd-hero-grid`,children:[(0,s.jsxs)(`div`,{className:`wd-hero-content`,children:[(0,s.jsxs)(`div`,{className:`wd-tagline`,children:[(0,s.jsx)(`i`,{className:`fas fa-bolt`}),` Engage. Grow Your Brand.`]}),(0,s.jsxs)(`h3`,{children:[`Social Media Management`,(0,s.jsx)(`br`,{}),`That Drives `,(0,s.jsx)(`span`,{className:`wd-title-accent`,children:`Real Growth`})]}),(0,s.jsx)(`p`,{className:`wd-description`,children:`Build a stronger online presence with strategic social media management that increases brand visibility, audience engagement, and business growth. We create compelling content, manage your social platforms, and optimize every campaign to turn followers into loyal customers.`}),(0,s.jsxs)(`div`,{className:`wd-btn-group`,children:[(0,s.jsxs)(`button`,{className:`wd-btn-primary`,type:`button`,onClick:a,children:[(0,s.jsx)(`i`,{className:`fas fa-rocket`}),`Start Your Social Growth`]}),(0,s.jsxs)(r,{to:`/portfolio`,className:`wd-btn-secondary`,children:[(0,s.jsx)(`span`,{className:`wd-play-icon`,children:(0,s.jsx)(`i`,{className:`fas fa-eye`})}),`View Our Work`]})]})]}),(0,s.jsx)(`div`,{className:`wd-hero-visual`,children:(0,s.jsxs)(`div`,{className:`wd-device-wrapper`,children:[(0,s.jsxs)(`div`,{className:`wd-laptop`,children:[(0,s.jsxs)(`div`,{className:`wd-laptop-bar`,children:[(0,s.jsxs)(`div`,{className:`wd-dots`,children:[(0,s.jsx)(`div`,{className:`wd-dot-circle wd-dot-r`}),(0,s.jsx)(`div`,{className:`wd-dot-circle wd-dot-y`}),(0,s.jsx)(`div`,{className:`wd-dot-circle wd-dot-g`})]}),(0,s.jsxs)(`div`,{className:`wd-url-bar`,children:[(0,s.jsx)(`div`,{className:`wd-url-bar-dot`}),(0,s.jsx)(`span`,{className:`wd-url-text`,children:`smm.brandmingo.com`})]})]}),(0,s.jsxs)(`div`,{className:`wd-laptop-nav`,children:[(0,s.jsxs)(`div`,{className:`wd-mock-logo`,children:[`Brand`,(0,s.jsx)(`span`,{children:`SMM`})]}),(0,s.jsx)(`ul`,{className:`wd-mock-nav-links`,children:[`Channels`,`Posts`,`Engagement`,`Analytics`,`Reports`].map(e=>(0,s.jsx)(`li`,{children:e},e))}),(0,s.jsx)(`div`,{className:`wd-mock-cta-small`,children:`Schedule Post →`})]}),(0,s.jsxs)(`div`,{className:`wd-laptop-body`,children:[(0,s.jsxs)(`div`,{className:`wd-dash-top`,children:[(0,s.jsxs)(`div`,{className:`wd-dash-title`,children:[`Social `,(0,s.jsx)(`span`,{children:`Engagement`}),` Overview`]}),(0,s.jsxs)(`div`,{className:`wd-dash-badge`,children:[(0,s.jsx)(`i`,{className:`fas fa-circle`,style:{color:`#27c93f`,fontSize:7}}),`Live Tracking`]})]}),(0,s.jsx)(`div`,{className:`wd-platform-rows`,children:[{icon:`fab fa-instagram`,color:`#E1306C`,bg:`rgba(225,48,108,0.15)`,name:`Instagram`,val:`4.2K Likes`,bar:`82%`,grow:`+18% Reach`},{icon:`fab fa-facebook-f`,color:`#1877F2`,bg:`rgba(24,119,242,0.15)`,name:`Facebook`,val:`2.8K Shares`,bar:`64%`,grow:`+24% Reach`},{icon:`fab fa-linkedin-in`,color:`#0A66C2`,bg:`rgba(10,102,194,0.15)`,name:`LinkedIn`,val:`1.5K Views`,bar:`45%`,grow:`+11% Reach`}].map((e,t)=>(0,s.jsxs)(`div`,{className:`wd-platform-row`,children:[(0,s.jsx)(`div`,{className:`wd-plat-icon`,style:{background:e.bg},children:(0,s.jsx)(`i`,{className:e.icon,style:{color:e.color}})}),(0,s.jsxs)(`div`,{className:`wd-plat-info`,children:[(0,s.jsx)(`div`,{className:`wd-plat-name`,children:e.name}),(0,s.jsx)(`div`,{className:`wd-plat-bar-wrap`,children:(0,s.jsx)(`div`,{className:`wd-plat-bar`,style:{"--bar-w":e.bar,background:e.color}})})]}),(0,s.jsxs)(`div`,{className:`wd-plat-right`,children:[(0,s.jsx)(`div`,{className:`wd-plat-val`,children:e.val}),(0,s.jsx)(`div`,{className:`wd-plat-sub`,children:e.grow})]})]},t))}),(0,s.jsx)(`div`,{className:`wd-mock-stats`,children:[{value:`350+`,label:`Projects Completed`},{value:`98%`,label:`Client Satisfaction`},{value:`3+`,label:`Years Experience`},{value:`24/7`,label:`Support`}].map((e,t)=>(0,s.jsxs)(`div`,{className:`wd-mock-stat`,children:[(0,s.jsx)(`span`,{className:`wd-mock-stat-val`,children:e.value}),(0,s.jsx)(`span`,{className:`wd-mock-stat-lbl`,children:e.label})]},t))})]})]}),(0,s.jsxs)(`div`,{className:`wd-phone`,children:[(0,s.jsx)(`div`,{className:`wd-phone-notch`,children:(0,s.jsx)(`div`,{className:`wd-phone-notch-bar`})}),(0,s.jsxs)(`div`,{className:`wd-phone-body`,children:[(0,s.jsxs)(`div`,{className:`wd-phone-logo`,children:[`Brand`,(0,s.jsx)(`span`,{children:`SMM`})]}),(0,s.jsx)(`div`,{className:`wd-phone-label`,children:`Platforms Active`}),(0,s.jsx)(`div`,{className:`wd-phone-platform-list`,children:[{icon:`fab fa-instagram`,color:`#E1306C`,bg:`rgba(225,48,108,0.18)`,name:`Instagram`,tag:`4.2K ↑`},{icon:`fab fa-facebook-f`,color:`#1877F2`,bg:`rgba(24,119,242,0.18)`,name:`Facebook`,tag:`2.8K ↑`},{icon:`fab fa-twitter`,color:`#1DA1F2`,bg:`rgba(29,161,242,0.18)`,name:`Twitter / X`,tag:`1.1K ↑`},{icon:`fab fa-youtube`,color:`#FF0000`,bg:`rgba(255,0,0,0.15)`,name:`YouTube`,tag:`980 ↑`}].map((e,t)=>(0,s.jsxs)(`div`,{className:`wd-phone-plat-row`,children:[(0,s.jsx)(`div`,{className:`wd-phone-plat-icon`,style:{background:e.bg},children:(0,s.jsx)(`i`,{className:e.icon,style:{color:e.color}})}),(0,s.jsx)(`span`,{className:`wd-phone-plat-name`,children:e.name}),(0,s.jsx)(`span`,{className:`wd-phone-plat-tag`,children:e.tag})]},t))}),(0,s.jsxs)(`div`,{className:`wd-phone-cta`,children:[`Manage All`,` `,(0,s.jsx)(`i`,{className:`fas fa-arrow-right`,style:{fontSize:7}})]})]})]})]})})]}),(0,s.jsx)(`div`,{className:`wd-features`,children:[{icon:`fas fa-pen-to-square`,title:`Strategic Content Planning`,desc:`Creative, data-driven content strategies designed to boost engagement, increase reach, and strengthen your brand presence.`},{icon:`fas fa-share-nodes`,title:`Multi-Platform Management`,desc:`Manage Instagram, Facebook, LinkedIn, and more with consistent content, scheduling, and audience engagement.`},{icon:`fas fa-chart-line`,title:`Performance Analytics`,desc:`Monitor insights, track engagement, and optimize content continuously for stronger reach and better results.`},{icon:`fas fa-users`,title:`Audience Growth`,desc:`Build a loyal community, increase brand awareness, and attract the right audience through proven social strategies.`}].map((e,t)=>(0,s.jsxs)(`div`,{className:`wd-feat-item`,children:[(0,s.jsx)(`div`,{className:`wd-feat-icon-wrap`,children:(0,s.jsx)(`i`,{className:e.icon})}),(0,s.jsxs)(`div`,{children:[(0,s.jsx)(`h4`,{children:e.title}),(0,s.jsx)(`p`,{children:e.desc})]})]},t))})]})})]})),l=`https://res.cloudinary.com/dqqgpii8v/image/upload/v1783153379/Untitled_design_2_wboyug.png`,u=[{fa:`fa-solid fa-bullhorn`,label:`Brand Awareness`,to:`/brand-awareness`},{fa:`fa-solid fa-lightbulb`,label:`Strategy & Planning`,to:`/strategy-planning`},{fa:`fa-solid fa-pen-nib`,label:`Content Creation & Publishing`,to:`/content-creation-publishing`},{fa:`fa-solid fa-users`,label:`Engagement & Growth`,to:`/engagement-growth`}],d=[{fa:`fa-solid fa-users`,title:`Boost Brand Awareness`,desc:`Increase your brand visibility with consistent, creative content that keeps your business top-of-mind across every social platform.`},{fa:`fa-solid fa-comments`,title:`Increase Engagement`,desc:`Build meaningful connections through interactive content that encourages conversations, shares, and long-term audience loyalty.`},{fa:`fa-solid fa-bullseye`,title:`Generate Quality Leads`,desc:`Turn your social media presence into a lead generation channel with targeted strategies and high-converting content.`},{fa:`fa-solid fa-handshake`,title:`Build Customer Trust`,desc:`Strengthen your brand credibility with authentic communication, timely responses, and consistent online engagement.`},{fa:`fa-solid fa-chart-line`,title:`Drive Business Growth`,desc:`Achieve measurable business growth through data-driven campaigns, performance tracking, and continuous optimization.`}],f=[{fa:`fa-solid fa-briefcase`,key:`p`,suffix:`+`,label:`Accounts Managed`,target:150},{fa:`fa-solid fa-face-smile`,key:`s`,suffix:`%`,label:`Client Satisfaction`,target:98},{fa:`fa-solid fa-award`,key:`e`,suffix:`+`,label:`Years Experience`,target:5}],p=()=>{let e=(0,o.useRef)(null),[t,n]=(0,o.useState)(!1),[r,a]=(0,o.useState)(0),[c,p]=(0,o.useState)({p:0,s:0,h:0,e:0}),m=i();(0,o.useEffect)(()=>{let t=new IntersectionObserver(([e])=>{e.isIntersecting&&(n(!0),h(),t.disconnect())},{threshold:.08});return e.current&&t.observe(e.current),()=>t.disconnect()},[]);let h=()=>{let e={p:350,s:98,h:24,e:3},t=0,n=setInterval(()=>{t++;let r=1-(1-Math.min(t/60,1))**3;p({p:Math.round(e.p*r),s:Math.round(e.s*r),h:Math.round(e.h*r),e:Math.round(e.e*r)}),t>=60&&clearInterval(n)},2e3/60)};return(0,s.jsx)(`section`,{className:`wda`,ref:e,children:(0,s.jsxs)(`div`,{className:`wda-grid`,children:[(0,s.jsxs)(`aside`,{className:`wda-sidebar`,children:[(0,s.jsx)(`div`,{className:`wda-main-card`,children:(0,s.jsxs)(`div`,{className:`wda-logo-row`,children:[(0,s.jsx)(`div`,{className:`wda-logo-img`,children:(0,s.jsx)(`i`,{className:`fa-solid fa-layer-group`})}),(0,s.jsxs)(`div`,{className:`wda-logo-text`,children:[(0,s.jsx)(`b`,{children:`Brandmingo`}),(0,s.jsx)(`span`,{children:`Digital Solutions`})]})]})}),(0,s.jsx)(`div`,{className:`wda-main-card`,children:(0,s.jsx)(`div`,{className:`wda-nav-wrap wda-nav-wrap--no-border`,children:(0,s.jsx)(`ul`,{className:`wda-nav`,children:u.map((e,t)=>(0,s.jsxs)(`li`,{className:r===t?`active`:``,onClick:()=>{a(t),m(e.to)},children:[(0,s.jsxs)(`span`,{className:`nl`,children:[(0,s.jsx)(`i`,{className:e.fa}),e.label]}),(0,s.jsx)(`i`,{className:`fa-solid fa-chevron-right chev`})]},t))})})}),(0,s.jsxs)(`div`,{className:`wda-main-card wda-call`,children:[(0,s.jsx)(`i`,{className:`fa-solid fa-rocket wda-rocket`}),(0,s.jsxs)(`h3`,{children:[`Let’s Grow Your `,(0,s.jsx)(`span`,{children:`Business with Ads`})]}),(0,s.jsx)(`p`,{children:`Have a campaign idea? Let’s turn your budget into high-performing ads that generate real leads and sales.`}),(0,s.jsx)(`a`,{href:`tel:+919990613140`,className:`wda-ring`,children:(0,s.jsx)(`i`,{className:`fa-solid fa-phone`})}),(0,s.jsx)(`small`,{className:`wda-expert-label`,children:`Talk to an expert`}),(0,s.jsx)(`a`,{href:`tel:+919990613140`,className:`wda-phone`,children:`+91 99906 13140`}),(0,s.jsx)(`small`,{className:`wda-expert-label wda-timing`,children:`Mon – Sat | 10:00 AM – 7:00 PM`})]}),(0,s.jsx)(`div`,{className:`wda-main-card`,children:(0,s.jsxs)(`div`,{className:`wda-stats-wrap`,children:[(0,s.jsx)(`p`,{className:`wda-stats-lbl`,children:`Our Work Speaks`}),f.map(e=>(0,s.jsxs)(`div`,{className:`wda-stat`,children:[(0,s.jsx)(`div`,{className:`wda-stat-ic`,children:(0,s.jsx)(`i`,{className:e.fa})}),(0,s.jsxs)(`div`,{children:[(0,s.jsxs)(`b`,{children:[c[e.key],e.suffix]}),(0,s.jsx)(`span`,{children:e.label})]})]},e.key))]})}),(0,s.jsxs)(`a`,{href:`src/assets/images/Brochure/BM Brochure.pdf`,target:`_blank`,rel:`noopener noreferrer`,className:`wda-pdf-card`,children:[(0,s.jsxs)(`span`,{className:`wda-dl-label`,children:[(0,s.jsx)(`i`,{className:`fa-solid fa-file-pdf`}),`Brochure (PDF)`]}),(0,s.jsx)(`div`,{className:`wda-dl-btn`,children:(0,s.jsx)(`i`,{className:`fa-solid fa-download`})})]})]}),(0,s.jsxs)(`main`,{className:`wda-main`,children:[(0,s.jsxs)(`div`,{className:`wda-hero`,children:[(0,s.jsx)(`img`,{src:l,alt:`Social Media Management Banner - Brandmingo`,className:`wda-hero-img`}),(0,s.jsx)(`div`,{className:`wda-hero-ov`,children:(0,s.jsxs)(`div`,{className:`wda-hero-txt`,children:[(0,s.jsxs)(`div`,{className:`wda-hero-badge`,children:[(0,s.jsx)(`i`,{className:`fa-solid fa-laptop-code`}),`ABOUT SOCIAL MEDIA MANAGEMENT`]}),(0,s.jsxs)(`h2`,{children:[`Smart Social Media That `,(0,s.jsx)(`span`,{children:`Delivers Business Growth.`})]})]})})]}),(0,s.jsxs)(`article`,{children:[(0,s.jsxs)(`div`,{className:`wda-lbl`,children:[(0,s.jsx)(`i`,{className:`fa-solid fa-circle`}),`Introduction`]}),(0,s.jsx)(`h2`,{className:`wda-h1`,children:`What is Social Media Management?`}),(0,s.jsxs)(`p`,{className:`wda-p`,children:[`Social Media Management is the process of creating, publishing, and optimizing content across digital platforms to build brand awareness, engage audiences, and generate quality leads. It combines strategic planning, creative storytelling, and data-driven insights to help businesses establish a strong online presence.`,(0,s.jsx)(`br`,{}),`With consistent content, active community management, and performance optimization, social media becomes a powerful channel for increasing visibility, building customer trust, and driving sustainable business growth.`]}),(0,s.jsxs)(`div`,{className:`wda-lbl`,style:{marginTop:`40px`},children:[(0,s.jsx)(`i`,{className:`fa-solid fa-circle`}),`Strategy`]}),(0,s.jsx)(`h3`,{className:`wda-h2`,children:`Why Social Media Management Matters for Your Business`}),(0,s.jsx)(`div`,{className:`wda-reasons`,children:d.map((e,n)=>(0,s.jsxs)(`div`,{className:`wda-r`,style:t?{animation:`wda-fade-up 0.55s ${n*.1}s forwards`}:{},children:[(0,s.jsx)(`div`,{className:`wda-r-ico`,children:(0,s.jsx)(`i`,{className:e.fa})}),(0,s.jsx)(`h5`,{children:e.title}),(0,s.jsx)(`p`,{children:e.desc})]},n))}),(0,s.jsxs)(`div`,{className:`wda-quote`,children:[(0,s.jsx)(`div`,{className:`wda-quote-icon`,children:(0,s.jsx)(`i`,{className:`fa-solid fa-quote-right`})}),(0,s.jsxs)(`span`,{children:[`A strong social media presence isn't optional anymore—it's essential for`,` `,(0,s.jsx)(`em`,{children:` sustainable business growth. losing winning it.`})]})]}),(0,s.jsxs)(`div`,{className:`wda-img-cards`,children:[(0,s.jsxs)(`div`,{className:`wda-img-card`,children:[(0,s.jsx)(`img`,{src:`https://res.cloudinary.com/dqqgpii8v/image/upload/v1783155891/Untitled_design_3_pnt8wg.png`,alt:`Modern Web Development`}),(0,s.jsxs)(`div`,{className:`wda-img-card-body`,children:[(0,s.jsx)(`div`,{className:`wda-img-card-icon`,children:(0,s.jsx)(`i`,{className:`fa-solid fa-laptop-code`})}),(0,s.jsx)(`p`,{children:`Professional social media content strategy designed to increase brand awareness, audience engagement, and online visibility through creative and consistent content marketing.`}),(0,s.jsx)(`a`,{href:`#contact`,className:`wda-img-card-arrow`,children:(0,s.jsx)(`i`,{className:`fa-solid fa-arrow-right`})})]})]}),(0,s.jsxs)(`div`,{className:`wda-img-card`,children:[(0,s.jsx)(`img`,{src:`https://i.ibb.co/Zz0MNRM4/website-developement-image-Brandmingo.avif`,alt:`E-commerce Solutions`}),(0,s.jsxs)(`div`,{className:`wda-img-card-body`,children:[(0,s.jsx)(`div`,{className:`wda-img-card-icon`,children:(0,s.jsx)(`i`,{className:`fa-solid fa-cart-shopping`})}),(0,s.jsx)(`p`,{children:`Expert social media marketing strategies focused on audience growth, lead generation, customer engagement, and measurable business results across digital platforms.`}),(0,s.jsx)(`a`,{href:`#contact`,className:`wda-img-card-arrow`,children:(0,s.jsx)(`i`,{className:`fa-solid fa-arrow-right`})})]})]})]})]})]})]})})},m=[{fa:`fa-solid fa-pen-to-square`,num:`01`,title:`Content Creation & Management`,desc:`Create engaging posts, reels, and branded content designed to increase reach, engagement, and customer interest.`},{fa:`fa-solid fa-bullhorn`,num:`02`,title:`Social Media Strategy`,desc:`Develop customized content strategies that align with your business goals and connect with your ideal audience.`},{fa:`fa-solid fa-comments`,num:`03`,title:`Community Management`,desc:`Engage with your audience, respond to messages, and build lasting customer relationships across every platform.`},{fa:`fa-solid fa-chart-line`,num:`04`,title:`Performance & Analytics`,desc:`Track key metrics, measure performance, and optimize campaigns to improve engagement and business growth.`}],h=[{fa:`fa-brands fa-instagram`,title:`Instagram Marketing`,desc:`Create engaging reels, posts, and stories that boost brand awareness, audience engagement, and organic growth.`},{fa:`fa-brands fa-facebook-f`,title:`Facebook Marketing`,desc:`Reach targeted customers with strategic content, community management, and high-performing promotional campaigns.`},{fa:`fa-brands fa-youtube`,title:`YouTube Marketing`,desc:`Grow your brand with engaging video content that increases visibility, builds trust, and drives audience engagement.`},{fa:`fa-solid fa-chart-line`,title:`Performance Analytics`,desc:`Measure engagement, audience behavior, and campaign performance with real-time insights for smarter marketing decisions.`}],g=[{num:`01`,fa:`fa-solid fa-magnifying-glass`,title:`Brand & Audience Research`,desc:`We analyze your business, target audience, competitors, and market trends to build a strong social media foundation.`},{num:`02`,fa:`fa-solid fa-calendar-check`,title:`Content Strategy & Planning`,desc:`We create content calendars, posting schedules, and platform-specific strategies designed for consistent brand growth.`},{num:`03`,fa:`fa-solid fa-photo-film`,title:`Creative Content Production`,desc:`We design engaging posts, reels, graphics, and creatives that capture attention and encourage audience interaction.`},{num:`04`,fa:`fa-solid fa-users`,title:`Community Engagement`,desc:`We actively manage interactions, respond to messages, and build meaningful relationships with your online community.`},{num:`05`,fa:`fa-solid fa-chart-line`,title:`Performance Analysis & Optimization`,desc:`We monitor insights, optimize content performance, and refine strategies to maximize reach, engagement, and business growth.`}],_=()=>{let e=(0,o.useRef)(null),[t,n]=(0,o.useState)(!1);return(0,o.useEffect)(()=>{let t=new IntersectionObserver(([e])=>{e.isIntersecting&&(n(!0),t.disconnect())},{threshold:.1});return e.current&&t.observe(e.current),()=>t.disconnect()},[]),(0,s.jsx)(`section`,{className:`wds`,ref:e,children:(0,s.jsx)(`div`,{className:`wds-container`,children:(0,s.jsxs)(`div`,{className:`wds-types-grid`,children:[(0,s.jsxs)(`div`,{className:`wds-types-left`,children:[(0,s.jsx)(`div`,{className:`wds-section-label`,children:`WHAT WE MANAGE`}),(0,s.jsxs)(`h3`,{className:`wds-types-heading`,children:[` `,`Social Media Solutions Designed to Grow Your Brand`]}),(0,s.jsx)(`p`,{className:`wds-types-desc`,children:`Every business needs a unique social media strategy. We understand your goals, identify the right audience, and create content that builds engagement, strengthens your brand, and delivers measurable business growth.`}),(0,s.jsx)(`div`,{className:`wds-deco`,"aria-hidden":`true`,children:(0,s.jsxs)(`svg`,{width:`240`,height:`190`,viewBox:`0 0 240 190`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,children:[(0,s.jsxs)(`defs`,{children:[(0,s.jsxs)(`radialGradient`,{id:`dotFade`,cx:`20%`,cy:`20%`,r:`80%`,children:[(0,s.jsx)(`stop`,{offset:`0%`,stopColor:`white`,stopOpacity:`0.55`}),(0,s.jsx)(`stop`,{offset:`100%`,stopColor:`white`,stopOpacity:`0`})]}),(0,s.jsx)(`mask`,{id:`gridMask`,children:(0,s.jsx)(`rect`,{width:`240`,height:`190`,fill:`url(#dotFade)`})}),(0,s.jsxs)(`radialGradient`,{id:`glowDot`,cx:`50%`,cy:`50%`,r:`50%`,children:[(0,s.jsx)(`stop`,{offset:`0%`,stopColor:`#f97316`,stopOpacity:`1`}),(0,s.jsx)(`stop`,{offset:`100%`,stopColor:`#f97316`,stopOpacity:`0`})]})]}),(0,s.jsx)(`g`,{mask:`url(#gridMask)`,children:Array.from({length:10},(e,t)=>Array.from({length:13},(e,n)=>(0,s.jsx)(`circle`,{cx:n*20+4,cy:t*20+4,r:`1.4`,fill:`#f97316`,opacity:`0.5`},`${t}-${n}`)))}),(0,s.jsx)(`path`,{d:`M 0 190 Q 180 150 230 20`,stroke:`#f97316`,strokeWidth:`1.2`,fill:`none`,opacity:`0.45`,strokeLinecap:`round`}),(0,s.jsx)(`circle`,{cx:`205`,cy:`72`,r:`5`,fill:`#f97316`,opacity:`0.9`}),(0,s.jsx)(`circle`,{cx:`205`,cy:`72`,r:`10`,fill:`#f97316`,opacity:`0.2`}),(0,s.jsx)(`circle`,{cx:`205`,cy:`72`,r:`16`,fill:`#f97316`,opacity:`0.08`})]})})]}),(0,s.jsx)(`div`,{className:`wds-types-cards`,children:m.map((e,n)=>(0,s.jsxs)(`div`,{className:`wds-type-card${t?` wds-anim`:``}`,style:t?{animationDelay:`${n*.1}s`}:{},children:[(0,s.jsx)(`span`,{className:`wds-card-num`,children:e.num}),(0,s.jsx)(`div`,{className:`wds-card-icon`,children:(0,s.jsx)(`i`,{className:e.fa})}),(0,s.jsx)(`h4`,{className:`wds-card-title`,children:e.title}),(0,s.jsx)(`p`,{className:`wds-card-desc`,children:e.desc}),(0,s.jsxs)(`a`,{href:`#contact`,className:`wds-card-link`,onClick:e=>{e.preventDefault(),a()},children:[`Learn More `,(0,s.jsx)(`i`,{className:`fa-solid fa-arrow-right`})]})]},n))})]})})})},v=()=>{let e=(0,o.useRef)(null),[t,n]=(0,o.useState)(!1);return(0,o.useEffect)(()=>{let t=new IntersectionObserver(([e])=>{e.isIntersecting&&(n(!0),t.disconnect())},{threshold:.1});return e.current&&t.observe(e.current),()=>t.disconnect()},[]),(0,s.jsx)(`section`,{className:`wdt`,ref:e,children:(0,s.jsx)(`div`,{className:`wdt-container`,children:(0,s.jsxs)(`div`,{className:`wdt-grid`,children:[(0,s.jsxs)(`div`,{className:`wdt-left`,children:[(0,s.jsx)(`div`,{className:`wds-section-label`,children:`POWERED BY LEADING PLATFORMS`}),(0,s.jsx)(`h3`,{className:`wdt-heading`,children:`Platforms & Tools That Drive Social Growth`}),(0,s.jsx)(`p`,{className:`wdt-desc`,children:`We use leading social media platforms and advanced analytics tools to help brands reach the right audience, increase engagement, and achieve measurable growth. Every strategy is backed by data, creativity, and continuous performance optimization.`})]}),(0,s.jsx)(`div`,{className:`wdt-cards`,children:h.map((e,n)=>(0,s.jsxs)(`div`,{className:`wdt-card${t?` wds-anim`:``}`,style:t?{animationDelay:`${n*.1}s`}:{},children:[(0,s.jsx)(`div`,{className:`wdt-card-icon`,children:(0,s.jsx)(`i`,{className:e.fa})}),(0,s.jsxs)(`div`,{className:`wdt-card-content`,children:[(0,s.jsx)(`h4`,{className:`wdt-card-title`,children:e.title}),(0,s.jsx)(`p`,{className:`wdt-card-desc`,children:e.desc}),(0,s.jsx)(`div`,{className:`wdt-card-line`})]})]},n))})]})})})},y=()=>{let e=(0,o.useRef)(null),[t,n]=(0,o.useState)(!1);return(0,o.useEffect)(()=>{let t=new IntersectionObserver(([e])=>{e.isIntersecting&&(n(!0),t.disconnect())},{threshold:.08});return e.current&&t.observe(e.current),()=>t.disconnect()},[]),(0,s.jsx)(`section`,{className:`wdp`,ref:e,children:(0,s.jsx)(`div`,{className:`wdp-container`,children:(0,s.jsxs)(`div`,{className:`wdp-grid`,children:[(0,s.jsxs)(`div`,{className:`wdp-left`,children:[(0,s.jsx)(`div`,{className:`wds-section-label`,children:`OUR WORKFLOW`}),(0,s.jsx)(`h3`,{className:`wdp-heading`,children:`Our Social Media Growth Process`}),(0,s.jsx)(`p`,{className:`wdp-desc`,children:`Successful social media growth requires a clear strategy. We follow a structured, data-driven process to strengthen your brand, engage your audience, and deliver consistent business growth across every platform.`}),(0,s.jsxs)(`div`,{className:`wdp-cta`,children:[(0,s.jsx)(`div`,{className:`wdp-cta-icon`,children:(0,s.jsx)(`i`,{className:`fa-solid fa-comments`})}),(0,s.jsxs)(`div`,{className:`wdp-cta-text`,children:[(0,s.jsx)(`h4`,{children:`Have a brand to grow?`}),(0,s.jsx)(`p`,{children:`Let’s build engaging content and strategies that turn your audience into loyal customers.`}),(0,s.jsxs)(`button`,{className:`wdp-cta-btn`,type:`button`,onClick:a,children:[`Let's Talk`,(0,s.jsx)(`i`,{className:`fa-solid fa-arrow-right`})]})]})]})]}),(0,s.jsx)(`div`,{className:`wdp-steps`,children:g.map((e,n)=>(0,s.jsxs)(`div`,{className:`wdp-step${t?` wds-anim`:``}`,style:t?{animationDelay:`${n*.1}s`}:{},children:[(0,s.jsx)(`div`,{className:`wdp-step-num`,children:e.num}),(0,s.jsx)(`div`,{className:`wdp-step-icon`,children:(0,s.jsx)(`i`,{className:e.fa})}),(0,s.jsxs)(`div`,{className:`wdp-step-body`,children:[(0,s.jsx)(`h4`,{children:e.title}),(0,s.jsx)(`p`,{children:e.desc})]})]},n))})]})})})},b=()=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(_,{}),(0,s.jsx)(v,{}),(0,s.jsx)(y,{})]}),x=[{fa:`fa-solid fa-bullseye`,title:`Strategic Content Planning`,desc:`Content tailored to your audience, industry, and business goals for maximum engagement.`},{fa:`fa-solid fa-chart-line`,title:`Growth-Focused Strategy`,desc:`Proven strategies designed to increase visibility, engagement, followers, and brand authority.`},{fa:`fa-solid fa-chart-pie`,title:`Performance Analytics`,desc:`Track insights, measure engagement, and optimize content using real-time performance data.`},{fa:`fa-solid fa-comments`,title:`Community-First Engagement`,desc:`Build meaningful relationships through conversations, interaction, and audience engagement.`},{fa:`fa-solid fa-sliders`,title:`Transparent Account Management`,desc:`Clear reporting, regular updates, and performance insights to keep your brand moving forward.`}],S=[`Increase brand awareness & engagement`,`Build a loyal online community`,`Reach your ideal audience consistently`,`Drive business growth through content`],C=[`Content creation & creative design`,`Social media strategy & planning`,`Community management & engagement`,`Analytics, reporting & optimization`],w=[{fa:`fa-brands fa-instagram`,title:`Instagram`,sub:`BEST FOR`,desc:`Visual branding, Reels & audience engagement`},{fa:`fa-brands fa-facebook`,title:`Facebook`,sub:`BEST FOR`,desc:`Local marketing, communities & lead generation`},{fa:`fa-brands fa-linkedin`,title:`LinkedIn`,sub:`BEST FOR`,desc:`B2B networking & professional brand growth`},{fa:`fa-brands fa-youtube`,title:`YouTube`,sub:`BEST FOR`,desc:`Video marketing & long-term brand visibility`}],T=[{fa:`fa-brands fa-instagram`,q:`Which social media platforms do you manage?`,a:`We manage Instagram, Facebook, LinkedIn, YouTube, and other platforms based on your business goals, industry, and target audience to maximize engagement and business growth.`},{fa:`fa-solid fa-chart-line`,q:`Which social platform is right for my business?`,a:`The ideal platform depends on your audience and objectives. We recommend the best channels to increase brand awareness, engagement, leads, and long-term business growth.`},{fa:`fa-solid fa-calendar-check`,q:`How long does social media growth take?`,a:`Organic social media growth requires consistency. Most businesses begin seeing improved engagement within weeks, while stronger brand growth develops over the following months.`},{fa:`fa-solid fa-users`,q:`How do you increase engagement and followers?`,a:`We create strategic content, publish consistently, optimize every post, and actively engage with your audience to build an authentic community and sustainable growth.`}],E=(e=.1)=>{let t=(0,o.useRef)(null),[n,r]=(0,o.useState)(!1);return(0,o.useEffect)(()=>{let n=new IntersectionObserver(([e])=>{e.isIntersecting&&(r(!0),n.disconnect())},{threshold:e});return t.current&&n.observe(t.current),()=>n.disconnect()},[]),[t,n]},D=()=>{let[e,t]=E(.08);return(0,s.jsx)(`section`,{className:`wde`,ref:e,children:(0,s.jsx)(`div`,{className:`wde-container`,children:(0,s.jsxs)(`div`,{className:`wde-grid`,children:[(0,s.jsxs)(`div`,{className:`wde-left`,children:[(0,s.jsx)(`div`,{className:`wds-section-label`,children:`WHY CHOOSE US`}),(0,s.jsxs)(`h3`,{className:`wde-heading`,children:[`What Makes Our Social Media Strategy `,(0,s.jsx)(`span`,{children:`Different?`})]}),(0,s.jsx)(`p`,{className:`wde-desc`,children:`Most brands post content without a strategy. We combine creativity, consistency, and data-driven marketing to increase engagement, grow your audience, and deliver measurable business results.`}),(0,s.jsx)(`div`,{className:`wde-gradient-bar`})]}),(0,s.jsxs)(`div`,{className:`wde-right`,children:[(0,s.jsx)(`div`,{className:`wde-features`,children:x.map((e,n)=>(0,s.jsxs)(`div`,{className:`wde-feat${t?` wde-anim`:``}`,style:t?{animationDelay:`${n*.1}s`}:{},children:[(0,s.jsx)(`div`,{className:`wde-feat-icon`,children:(0,s.jsx)(`i`,{className:e.fa})}),(0,s.jsxs)(`div`,{className:`wde-feat-body`,children:[(0,s.jsx)(`h5`,{children:e.title}),(0,s.jsx)(`p`,{children:e.desc})]})]},n))}),(0,s.jsxs)(`div`,{className:`wde-note`,children:[(0,s.jsx)(`div`,{className:`wde-note-icon`,children:(0,s.jsx)(`i`,{className:`fa-solid fa-rocket`})}),(0,s.jsxs)(`p`,{children:[`If your audience isn't engaging,`,` `,(0,s.jsx)(`em`,{children:`your social media isn't delivering `}),`real business growth.`]})]})]})]})})})},O=()=>{let[e,t]=E(.08);return(0,s.jsx)(`section`,{className:`wdec`,ref:e,children:(0,s.jsx)(`div`,{className:`wdec-container`,children:(0,s.jsxs)(`div`,{className:`wdec-grid`,children:[(0,s.jsxs)(`div`,{className:`wdec-left`,children:[(0,s.jsx)(`div`,{className:`wds-section-label`,children:`GROW YOUR BUSINESS`}),(0,s.jsxs)(`h3`,{className:`wdec-heading`,children:[`Ready to Grow `,(0,s.jsx)(`span`,{children:` Through Social Media?`})]}),(0,s.jsx)(`div`,{className:`wdec-divider`}),(0,s.jsx)(`p`,{className:`wdec-desc`,children:`Without a clear strategy, social media becomes noise. We help you build a strong brand presence, engage the right audience, and generate consistent leads through creative, data-driven social media management.`})]}),(0,s.jsxs)(`div`,{className:`wdec-cards`,children:[(0,s.jsxs)(`div`,{className:`wdec-card${t?` wde-anim`:``}`,style:t?{animationDelay:`0.1s`}:{},children:[(0,s.jsx)(`div`,{className:`wdec-card-icon`,children:(0,s.jsx)(`i`,{className:`fa-solid fa-bullhorn`})}),(0,s.jsxs)(`h4`,{children:[`Social Media Management`,(0,s.jsx)(`span`,{children:`Allows You To:`})]}),(0,s.jsx)(`ul`,{className:`wdec-list`,children:S.map((e,t)=>(0,s.jsxs)(`li`,{children:[(0,s.jsx)(`i`,{className:`fa-solid fa-arrow-right`}),e]},t))})]}),(0,s.jsxs)(`div`,{className:`wdec-card${t?` wde-anim`:``}`,style:t?{animationDelay:`0.2s`}:{},children:[(0,s.jsx)(`div`,{className:`wdec-card-icon`,children:(0,s.jsx)(`i`,{className:`fa-solid fa-gift`})}),(0,s.jsx)(`h4`,{children:`We Provide:`}),(0,s.jsx)(`ul`,{className:`wdec-list wdec-list--dot`,children:C.map((e,t)=>(0,s.jsxs)(`li`,{children:[(0,s.jsx)(`i`,{className:`fa-solid fa-circle`}),e]},t))})]})]})]})})})},k=()=>{let[e,t]=E(.08);return(0,s.jsx)(`section`,{className:`wdpl`,ref:e,children:(0,s.jsx)(`div`,{className:`wdpl-container`,children:(0,s.jsxs)(`div`,{className:`wdpl-grid`,children:[(0,s.jsxs)(`div`,{className:`wdpl-left`,children:[(0,s.jsx)(`div`,{className:`wds-section-label`,children:`CHOOSE WHAT’S RIGHT`}),(0,s.jsxs)(`h3`,{className:`wdpl-heading`,children:[`Which Social Media Platform `,(0,s.jsx)(`span`,{children:`Drives`}),` Your Growth?`]}),(0,s.jsx)(`p`,{className:`wdpl-desc`,children:`Every platform serves a different purpose. We help you choose the right social media channel based on your audience, business goals, and growth strategy to maximize engagement, visibility, and conversions.`})]}),(0,s.jsxs)(`div`,{className:`wdpl-right`,children:[(0,s.jsx)(`div`,{className:`wdpl-cards`,children:w.map((e,n)=>(0,s.jsxs)(`div`,{className:`wdpl-card${t?` wde-anim`:``}`,style:t?{animationDelay:`${n*.1}s`}:{},children:[(0,s.jsxs)(`div`,{className:`wdpl-card-inner`,children:[(0,s.jsx)(`div`,{className:`wdpl-card-icon`,children:(0,s.jsx)(`i`,{className:e.fa})}),(0,s.jsxs)(`div`,{className:`wdpl-card-body`,children:[(0,s.jsx)(`h5`,{children:e.title}),(0,s.jsx)(`span`,{className:`wdpl-sub`,children:e.sub}),(0,s.jsx)(`p`,{children:e.desc})]})]}),(0,s.jsx)(`div`,{className:`wdpl-arrow`,children:(0,s.jsx)(`i`,{className:`fa-solid fa-arrow-right`})})]},n))}),(0,s.jsxs)(`div`,{className:`wdpl-note${t?` wde-anim`:``}`,style:t?{animationDelay:`0.45s`}:{},children:[(0,s.jsx)(`div`,{className:`wdpl-note-icon`,children:(0,s.jsx)(`i`,{className:`fa-solid fa-lightbulb`})}),(0,s.jsx)(`p`,{children:`The best platform isn't the biggest one — it's where your ideal audience spends their time.`})]})]})]})})})},A=()=>{let[e,t]=E(.08),[n,r]=(0,o.useState)(null),i=e=>r(n===e?null:e);return(0,s.jsx)(`section`,{className:`wdfq`,ref:e,children:(0,s.jsxs)(`div`,{className:`wdfq-container`,children:[(0,s.jsx)(`div`,{className:`wds-section-label`,children:`QUESTIONS? WE'VE GOT ANSWERS`}),(0,s.jsx)(`h3`,{className:`wdfq-heading`,children:`Frequently Asked Questions`}),(0,s.jsx)(`div`,{className:`wdfq-list`,children:T.map((e,r)=>(0,s.jsxs)(`div`,{className:`wdfq-item${n===r?` open`:``}${t?` wde-anim`:``}`,style:t?{animationDelay:`${r*.1}s`}:{},onClick:()=>i(r),children:[(0,s.jsxs)(`div`,{className:`wdfq-q`,children:[(0,s.jsx)(`div`,{className:`wdfq-icon`,children:(0,s.jsx)(`i`,{className:e.fa})}),(0,s.jsx)(`span`,{children:e.q}),(0,s.jsx)(`div`,{className:`wdfq-plus`,children:(0,s.jsx)(`i`,{className:`fa-solid ${n===r?`fa-minus`:`fa-plus`}`})})]}),n===r&&(0,s.jsx)(`div`,{className:`wdfq-a`,children:(0,s.jsx)(`p`,{children:e.a})})]},r))})]})})},j=()=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(D,{}),(0,s.jsx)(O,{}),(0,s.jsx)(k,{}),(0,s.jsx)(A,{})]}),M=()=>(0,s.jsxs)(`div`,{className:`page-wrapper`,children:[(0,s.jsx)(c,{}),(0,s.jsx)(`section`,{className:`services-details pt-120 pb-120`,style:{marginTop:`40px`,marginBottom:`120px`},children:(0,s.jsx)(`div`,{className:`service-details-page`,children:(0,s.jsx)(`div`,{className:`container`,children:(0,s.jsx)(`div`,{className:`wd-outer`,children:(0,s.jsx)(`div`,{className:`wd-content-col`,children:(0,s.jsxs)(`div`,{className:`services-details__content`,children:[(0,s.jsx)(p,{}),(0,s.jsx)(b,{}),(0,s.jsx)(j,{})]})})})})})})]});export{M as default};