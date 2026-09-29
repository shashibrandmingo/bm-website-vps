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
           RIGHT VISUAL — UI/UX Audit Mock
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

        /* ── Laptop Body — UX Audit Dashboard ── */
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

        /* UX Score cards row */
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

        /* Audit issue rows */
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
          width: 72px;
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

        /* UX Score ring display */
        .wd-phone-score-wrap {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 8px;
        }

        .wd-phone-score-ring {
          width: 42px; height: 42px;
          border-radius: 50%;
          border: 3px solid rgba(255,255,255,0.08);
          border-top-color: var(--theme-color1);
          border-right-color: var(--theme-color1);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          position: relative;
        }

        .wd-phone-score-num {
          font-size: 12px;
          font-weight: 800;
          color: #fff;
          line-height: 1;
        }

        .wd-phone-score-info {
          display: flex;
          flex-direction: column;
          gap: 1px;
        }

        .wd-phone-score-title {
          font-size: 9px;
          font-weight: 700;
          color: #fff;
        }

        .wd-phone-score-sub {
          font-size: 7.5px;
          color: rgba(255,255,255,0.38);
          line-height: 1.4;
        }

        /* Issue severity pills */
        .wd-phone-issues {
          display: flex;
          flex-direction: column;
          gap: 5px;
          margin-bottom: 12px;
        }

        .wd-phone-issue-row {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .wd-phone-issue-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          flex-shrink: 0;
        }

        .wd-phone-issue-name {
          font-size: 8px;
          color: rgba(255,255,255,0.55);
          flex: 1;
        }

        .wd-phone-issue-count {
          font-size: 8px;
          font-weight: 700;
          color: rgba(255,255,255,0.75);
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
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--theme-color1);
          font-size: 16px;
          flex-shrink: 0;
        }

        .wd-feat-item h4 { font-size: 14px; font-weight: 600; margin: 0; }
        .wd-feat-item p  { font-size: 12px; opacity: 0.6; margin: 0; }

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
      `}),(0,s.jsx)(`section`,{className:`wd-hero`,children:(0,s.jsxs)(`div`,{className:`wd-inner`,children:[(0,s.jsxs)(`div`,{className:`wd-hero-grid`,children:[(0,s.jsxs)(`div`,{className:`wd-hero-content`,children:[(0,s.jsxs)(`div`,{className:`wd-tagline`,children:[(0,s.jsx)(`i`,{className:`fas fa-bolt`}),` OPTIMIZE. IMPROVE. CONVERT.`]}),(0,s.jsxs)(`h3`,{children:[`UI/UX Audit Services`,(0,s.jsx)(`br`,{}),`That Improve`,` `,(0,s.jsx)(`span`,{className:`wd-title-accent`,children:`User Experience`})]}),(0,s.jsx)(`p`,{className:`wd-description`,children:`Identify usability issues, improve website performance, and create seamless user journeys with Brandmingo's professional UI/UX audit services. We analyze user behavior, navigation, design consistency, accessibility, and conversion paths to enhance engagement, increase conversions, and deliver a better digital experience.`}),(0,s.jsxs)(`div`,{className:`wd-btn-group`,children:[(0,s.jsxs)(`button`,{className:`wd-btn-primary`,type:`button`,onClick:a,children:[(0,s.jsx)(`i`,{className:`fas fa-rocket`}),`Get Your UI/UX Audit`]}),(0,s.jsxs)(r,{to:`/portfolio`,className:`wd-btn-secondary`,children:[(0,s.jsx)(`span`,{className:`wd-play-icon`,children:(0,s.jsx)(`i`,{className:`fas fa-eye`})}),`View Audit Report`]})]})]}),(0,s.jsx)(`div`,{className:`wd-hero-visual`,children:(0,s.jsxs)(`div`,{className:`wd-device-wrapper`,children:[(0,s.jsxs)(`div`,{className:`wd-laptop`,children:[(0,s.jsxs)(`div`,{className:`wd-laptop-bar`,children:[(0,s.jsxs)(`div`,{className:`wd-dots`,children:[(0,s.jsx)(`div`,{className:`wd-dot-circle wd-dot-r`}),(0,s.jsx)(`div`,{className:`wd-dot-circle wd-dot-y`}),(0,s.jsx)(`div`,{className:`wd-dot-circle wd-dot-g`})]}),(0,s.jsxs)(`div`,{className:`wd-url-bar`,children:[(0,s.jsx)(`div`,{className:`wd-url-bar-dot`}),(0,s.jsx)(`span`,{className:`wd-url-text`,children:`audit.brandmingo.com`})]})]}),(0,s.jsxs)(`div`,{className:`wd-laptop-nav`,children:[(0,s.jsxs)(`div`,{className:`wd-mock-logo`,children:[`Brand`,(0,s.jsx)(`span`,{children:`UX`})]}),(0,s.jsx)(`ul`,{className:`wd-mock-nav-links`,children:[`Audit`,`Heatmaps`,`Funnels`,`Reports`,`Fixes`].map(e=>(0,s.jsx)(`li`,{children:e},e))}),(0,s.jsx)(`div`,{className:`wd-mock-cta-small`,children:`Start Audit →`})]}),(0,s.jsxs)(`div`,{className:`wd-laptop-body`,children:[(0,s.jsxs)(`div`,{className:`wd-dash-header`,children:[(0,s.jsxs)(`div`,{className:`wd-dash-title`,children:[`UX `,(0,s.jsx)(`span`,{children:`Audit Report`})]}),(0,s.jsxs)(`div`,{className:`wd-dash-live`,children:[(0,s.jsx)(`div`,{className:`wd-dash-live-dot`}),`Analyzing`]})]}),(0,s.jsx)(`div`,{className:`wd-kpi-row`,children:[{icon:`fas fa-tachometer-alt`,label:`UX Score`,value:`72/100`,delta:`+14 after fix`},{icon:`fas fa-mouse-pointer`,label:`Drop-off Rate`,value:`38%`,delta:`−12% improved`},{icon:`fas fa-percentage`,label:`Conversion Rate`,value:`3.6%`,delta:`+1.4% uplift`}].map((e,t)=>(0,s.jsxs)(`div`,{className:`wd-kpi-card`,children:[(0,s.jsxs)(`div`,{className:`wd-kpi-label`,children:[(0,s.jsx)(`i`,{className:e.icon}),` `,e.label]}),(0,s.jsx)(`div`,{className:`wd-kpi-value`,children:e.value}),(0,s.jsx)(`div`,{className:`wd-kpi-delta`,children:e.delta})]},t))}),(0,s.jsx)(`div`,{className:`wd-channels`,children:[{icon:`fas fa-sitemap`,color:`#FF6B1E`,bg:`rgba(255,107,30,0.18)`,name:`Navigation`,val:`9 issues`,barW:`88%`,barColor:`#FF6B1E`},{icon:`fas fa-mobile-alt`,color:`#A78BFA`,bg:`rgba(167,139,250,0.18)`,name:`Responsiveness`,val:`6 issues`,barW:`62%`,barColor:`#A78BFA`},{icon:`fas fa-universal-access`,color:`#34D399`,bg:`rgba(52,211,153,0.18)`,name:`Accessibility`,val:`11 issues`,barW:`76%`,barColor:`#34D399`},{icon:`fas fa-bolt`,color:`#FBBF24`,bg:`rgba(251,191,36,0.18)`,name:`Page Speed`,val:`4 issues`,barW:`42%`,barColor:`#FBBF24`}].map((e,t)=>(0,s.jsxs)(`div`,{className:`wd-ch-row`,children:[(0,s.jsx)(`div`,{className:`wd-ch-icon`,style:{background:e.bg},children:(0,s.jsx)(`i`,{className:e.icon,style:{color:e.color}})}),(0,s.jsx)(`span`,{className:`wd-ch-name`,children:e.name}),(0,s.jsx)(`div`,{className:`wd-ch-bar-track`,children:(0,s.jsx)(`div`,{className:`wd-ch-bar-fill`,style:{"--bar-w":e.barW,background:e.barColor}})}),(0,s.jsx)(`span`,{className:`wd-ch-val`,children:e.val})]},t))}),(0,s.jsx)(`div`,{className:`wd-mock-stats`,children:[{value:`400+`,label:`Projects Completed`},{value:`98%`,label:`Client Satisfaction`},{value:`3+`,label:`Years Experience`},{value:`24/7`,label:`Support`}].map((e,t)=>(0,s.jsxs)(`div`,{className:`wd-mock-stat`,children:[(0,s.jsx)(`span`,{className:`wd-mock-stat-val`,children:e.value}),(0,s.jsx)(`span`,{className:`wd-mock-stat-lbl`,children:e.label})]},t))})]})]}),(0,s.jsxs)(`div`,{className:`wd-phone`,children:[(0,s.jsx)(`div`,{className:`wd-phone-notch`,children:(0,s.jsx)(`div`,{className:`wd-phone-notch-bar`})}),(0,s.jsxs)(`div`,{className:`wd-phone-body`,children:[(0,s.jsxs)(`div`,{className:`wd-phone-logo`,children:[`Brand`,(0,s.jsx)(`span`,{children:`UX`})]}),(0,s.jsx)(`div`,{className:`wd-phone-widget-label`,children:`UX Health Score`}),(0,s.jsxs)(`div`,{className:`wd-phone-score-wrap`,children:[(0,s.jsx)(`div`,{className:`wd-phone-score-ring`,children:(0,s.jsx)(`span`,{className:`wd-phone-score-num`,children:`72`})}),(0,s.jsxs)(`div`,{className:`wd-phone-score-info`,children:[(0,s.jsx)(`span`,{className:`wd-phone-score-title`,children:`Needs Work`}),(0,s.jsxs)(`span`,{className:`wd-phone-score-sub`,children:[`30 issues`,(0,s.jsx)(`br`,{}),`found`]})]})]}),(0,s.jsx)(`div`,{className:`wd-phone-issues`,children:[{color:`#EF4444`,name:`Critical`,count:`8`},{color:`#FBBF24`,name:`Moderate`,count:`14`},{color:`#34D399`,name:`Minor`,count:`8`}].map((e,t)=>(0,s.jsxs)(`div`,{className:`wd-phone-issue-row`,children:[(0,s.jsx)(`div`,{className:`wd-phone-issue-dot`,style:{background:e.color}}),(0,s.jsx)(`span`,{className:`wd-phone-issue-name`,children:e.name}),(0,s.jsx)(`span`,{className:`wd-phone-issue-count`,children:e.count})]},t))}),(0,s.jsxs)(`div`,{className:`wd-phone-btn`,children:[`Full Report`,` `,(0,s.jsx)(`i`,{className:`fas fa-arrow-right`,style:{fontSize:7}})]})]})]})]})})]}),(0,s.jsx)(`div`,{className:`wd-features`,children:[{icon:`fas fa-users-viewfinder`,title:`User Behavior Analysis`,desc:`Analyze user interactions and identify usability issues to create smoother, intuitive, and engaging digital experiences.`},{icon:`fas fa-sitemap`,title:`UX Structure Audit`,desc:`Review navigation, page layouts, and user journeys to improve clarity, accessibility, and overall website usability.`},{icon:`fas fa-arrow-trend-up`,title:`Conversion Optimization`,desc:`Optimize landing pages and conversion paths to increase engagement, generate more leads, and improve business results.`},{icon:`fas fa-chart-pie`,title:`Performance Insights`,desc:`Leverage analytics, heatmaps, and user behavior data to make informed UX improvements and smarter design decisions.`}].map((e,t)=>(0,s.jsxs)(`div`,{className:`wd-feat-item`,children:[(0,s.jsx)(`div`,{className:`wd-feat-icon-wrap`,children:(0,s.jsx)(`i`,{className:e.icon})}),(0,s.jsxs)(`div`,{children:[(0,s.jsx)(`h4`,{children:e.title}),(0,s.jsx)(`p`,{children:e.desc})]})]},t))})]})})]})),l=`https://ik.imagekit.io/p1oa71jxg/Untitled%20design.png`,u=[{fa:`fa-solid fa-palette`,label:`Custom Web Design`,to:`/custom-web-design`},{fa:`fa-solid fa-bullhorn`,label:`Corporate Branding`,to:`/corporate-branding`},{fa:`fa-solid fa-mobile-screen`,label:`Mobile App Design`,to:`/mobile-app-design`},{fa:`fa-solid fa-cube`,label:`Product Design`,to:`/product-design`}],d=[{fa:`fa-solid fa-users-viewfinder`,title:`Enhance User Engagement`,desc:`Create intuitive experiences that keep visitors engaged and encourage deeper interaction with your website.`},{fa:`fa-solid fa-route`,title:`Identify Experience Gaps`,desc:`Discover usability issues, navigation challenges, and friction points affecting customer journeys.`},{fa:`fa-solid fa-arrow-trend-up`,title:`Increase Conversion Rates`,desc:`Optimize layouts, calls-to-action, and user flows to turn more visitors into leads and customers.`},{fa:`fa-solid fa-chart-pie`,title:`Make Data-Driven Improvements`,desc:`Leverage user behavior insights, analytics, and performance data to make smarter UX decisions.`},{fa:`fa-solid fa-shield-heart`,title:`Strengthen Brand Trust`,desc:`Deliver a consistent, professional experience that builds credibility, customer confidence, and long-term loyalty.`}],f=[{fa:`fa-solid fa-magnifying-glass-chart`,value:`400+`,label:`UX Audits Completed`},{fa:`fa-solid fa-face-smile`,value:`95%`,label:`Improved User Satisfaction`},{fa:`fa-solid fa-chart-line`,value:`40%+`,label:`Conversion Growth`},{fa:`fa-solid fa-lightbulb`,value:`3+`,label:`Years UX Experience`}],p=()=>{let e=(0,o.useRef)(null),[t,n]=(0,o.useState)(!1),[r,a]=(0,o.useState)(0),[c,p]=(0,o.useState)({p:0,s:0,h:0,e:0}),m=i();(0,o.useEffect)(()=>{let t=new IntersectionObserver(([e])=>{e.isIntersecting&&(n(!0),h(),t.disconnect())},{threshold:.08});return e.current&&t.observe(e.current),()=>t.disconnect()},[]);let h=()=>{let e={p:400,s:98,h:24,e:3},t=0,n=setInterval(()=>{t++;let r=1-(1-Math.min(t/60,1))**3;p({p:Math.round(e.p*r),s:Math.round(e.s*r),h:Math.round(e.h*r),e:Math.round(e.e*r)}),t>=60&&clearInterval(n)},2e3/60)};return(0,s.jsx)(`section`,{className:`wda`,ref:e,children:(0,s.jsxs)(`div`,{className:`wda-grid`,children:[(0,s.jsxs)(`aside`,{className:`wda-sidebar`,children:[(0,s.jsx)(`div`,{className:`wda-main-card`,children:(0,s.jsxs)(`div`,{className:`wda-logo-row`,children:[(0,s.jsx)(`div`,{className:`wda-logo-img`,children:(0,s.jsx)(`i`,{className:`fa-solid fa-layer-group`})}),(0,s.jsxs)(`div`,{className:`wda-logo-text`,children:[(0,s.jsx)(`b`,{children:`Brandmingo`}),(0,s.jsx)(`span`,{children:`Digital Solutions`})]})]})}),(0,s.jsx)(`div`,{className:`wda-main-card`,children:(0,s.jsx)(`div`,{className:`wda-nav-wrap wda-nav-wrap--no-border`,children:(0,s.jsx)(`ul`,{className:`wda-nav`,children:u.map((e,t)=>(0,s.jsxs)(`li`,{className:r===t?`active`:``,onClick:()=>{a(t),m(e.to)},children:[(0,s.jsxs)(`span`,{className:`nl`,children:[(0,s.jsx)(`i`,{className:e.fa}),e.label]}),(0,s.jsx)(`i`,{className:`fa-solid fa-chevron-right chev`})]},t))})})}),(0,s.jsxs)(`div`,{className:`wda-main-card wda-call`,children:[(0,s.jsx)(`i`,{className:`fa-solid fa-rocket wda-rocket`}),(0,s.jsxs)(`h3`,{children:[`Let’s Grow Your `,(0,s.jsx)(`span`,{children:`Business with Ads`})]}),(0,s.jsx)(`p`,{children:`Have a campaign idea? Let’s turn your budget into high-performing ads that generate real leads and sales.`}),(0,s.jsx)(`a`,{href:`tel:+919990613140`,className:`wda-ring`,children:(0,s.jsx)(`i`,{className:`fa-solid fa-phone`})}),(0,s.jsx)(`small`,{className:`wda-expert-label`,children:`Talk to an expert`}),(0,s.jsx)(`a`,{href:`tel:+919990613140`,className:`wda-phone`,children:`+91 99906 13140`}),(0,s.jsx)(`small`,{className:`wda-expert-label wda-timing`,children:`Mon – Sat | 10:00 AM – 7:00 PM`})]}),(0,s.jsx)(`div`,{className:`wda-main-card`,children:(0,s.jsxs)(`div`,{className:`wda-stats-wrap`,children:[(0,s.jsx)(`p`,{className:`wda-stats-lbl`,children:`Our Work Speaks`}),f.map(e=>(0,s.jsxs)(`div`,{className:`wda-stat`,children:[(0,s.jsx)(`div`,{className:`wda-stat-ic`,children:(0,s.jsx)(`i`,{className:e.fa})}),(0,s.jsxs)(`div`,{children:[(0,s.jsxs)(`b`,{children:[c[e.key],e.suffix]}),(0,s.jsx)(`span`,{children:e.label})]})]},e.key))]})}),(0,s.jsxs)(`a`,{href:`src/assets/images/Brochure/BM Brochure.pdf`,target:`_blank`,rel:`noopener noreferrer`,className:`wda-pdf-card`,children:[(0,s.jsxs)(`span`,{className:`wda-dl-label`,children:[(0,s.jsx)(`i`,{className:`fa-solid fa-file-pdf`}),`Brochure (PDF)`]}),(0,s.jsx)(`div`,{className:`wda-dl-btn`,children:(0,s.jsx)(`i`,{className:`fa-solid fa-download`})})]})]}),(0,s.jsxs)(`main`,{className:`wda-main`,children:[(0,s.jsxs)(`div`,{className:`wda-hero`,children:[(0,s.jsx)(`img`,{src:l,alt:`UI/UX Audits Banner - Brandmingo`,className:`wda-hero-img`}),(0,s.jsx)(`div`,{className:`wda-hero-ov`,children:(0,s.jsxs)(`div`,{className:`wda-hero-txt`,children:[(0,s.jsxs)(`div`,{className:`wda-hero-badge`,children:[(0,s.jsx)(`i`,{className:`fa-solid fa-laptop-code`}),`ABOUT UI/UX AUDITS`]}),(0,s.jsxs)(`h2`,{children:[`UI/UX Audits That `,(0,s.jsx)(`span`,{children:`Turn Visitors Into Customers`})]})]})})]}),(0,s.jsxs)(`article`,{children:[(0,s.jsxs)(`div`,{className:`wda-lbl`,children:[(0,s.jsx)(`i`,{className:`fa-solid fa-circle`}),`Introduction`]}),(0,s.jsx)(`h2`,{className:`wda-h1`,children:`Why Does Your Website Need a UI/UX Audit?`}),(0,s.jsxs)(`p`,{className:`wda-p`,children:[`A visually appealing website is only effective when it delivers a smooth and intuitive user experience. If visitors struggle to navigate your site, find information, or complete actions, you're likely losing valuable leads and conversions. A professional UI/UX audit helps identify usability issues, navigation bottlenecks, and conversion barriers that impact your website's performance.`,(0,s.jsx)(`br`,{}),`By analyzing user behavior, site structure, responsiveness, accessibility, and interaction flows, we uncover opportunities to improve engagement, reduce bounce rates, and create seamless customer journeys. The result is a faster, more user-friendly website designed to increase satisfaction, build trust, and drive measurable business growth.`]}),(0,s.jsxs)(`div`,{className:`wda-lbl`,style:{marginTop:`40px`},children:[(0,s.jsx)(`i`,{className:`fa-solid fa-circle`}),`Strategy`]}),(0,s.jsx)(`h3`,{className:`wda-h2`,children:`Why Your Business Needs a UI/UX Audit`}),(0,s.jsx)(`div`,{className:`wda-reasons`,children:d.map((e,n)=>(0,s.jsxs)(`div`,{className:`wda-r`,style:t?{animation:`wda-fade-up 0.55s ${n*.1}s forwards`}:{},children:[(0,s.jsx)(`div`,{className:`wda-r-ico`,children:(0,s.jsx)(`i`,{className:e.fa})}),(0,s.jsx)(`h5`,{children:e.title}),(0,s.jsx)(`p`,{children:e.desc})]},n))}),(0,s.jsxs)(`div`,{className:`wda-quote`,children:[(0,s.jsx)(`div`,{className:`wda-quote-icon`,children:(0,s.jsx)(`i`,{className:`fa-solid fa-quote-right`})}),(0,s.jsxs)(`span`,{children:[`A better user experience leads to higher engagement, stronger customer satisfaction, `,(0,s.jsx)(`em`,{children:`and measurable business growth.`})]})]}),(0,s.jsxs)(`div`,{className:`wda-img-cards`,children:[(0,s.jsxs)(`div`,{className:`wda-img-card`,children:[(0,s.jsx)(`img`,{src:`https://ik.imagekit.io/p1oa71jxg/uiux.png`,alt:`Modern Web Development`}),(0,s.jsxs)(`div`,{className:`wda-img-card-body`,children:[(0,s.jsx)(`div`,{className:`wda-img-card-icon`,children:(0,s.jsx)(`i`,{className:`fa-solid fa-user-gear`})}),(0,s.jsx)(`p`,{children:`Identify usability issues, improve navigation, and create seamless user experiences that increase engagement, satisfaction, and customer retention.`}),(0,s.jsx)(`a`,{href:`#contact`,className:`wda-img-card-arrow`,children:(0,s.jsx)(`i`,{className:`fa-solid fa-arrow-right`})})]})]}),(0,s.jsxs)(`div`,{className:`wda-img-card`,children:[(0,s.jsx)(`img`,{src:`https://i.ibb.co/Zz0MNRM4/website-developement-image-Brandmingo.avif`,alt:`E-commerce Solutions`}),(0,s.jsxs)(`div`,{className:`wda-img-card-body`,children:[(0,s.jsx)(`div`,{className:`wda-img-card-icon`,children:(0,s.jsx)(`i`,{className:`fa-solid fa-arrow-trend-up`})}),(0,s.jsx)(`p`,{children:`Optimize layouts, user journeys, and interface elements to boost engagement, improve conversions, and deliver better digital experiences.`}),(0,s.jsx)(`a`,{href:`#contact`,className:`wda-img-card-arrow`,children:(0,s.jsx)(`i`,{className:`fa-solid fa-arrow-right`})})]})]})]})]})]})]})})},m=[{fa:`fa-solid fa-computer-mouse`,num:`01`,title:`Website Usability Audit`,desc:`Evaluate navigation, accessibility, and interface usability to deliver smoother interactions and a better user experience.`},{fa:`fa-solid fa-route`,num:`02`,title:`User Journey Audit`,desc:`Analyze user behavior, navigation paths, and touchpoints to improve engagement and optimize conversion opportunities.`},{fa:`fa-solid fa-arrow-trend-up`,num:`03`,title:`Conversion Rate Audit`,desc:`Review landing pages, CTAs, and conversion funnels to increase leads, reduce drop-offs, and improve business growth.`},{fa:`fa-solid fa-gauge-high`,num:`04`,title:`Performance & UX Audit`,desc:`Assess website speed, responsiveness, and overall user experience to create faster, seamless digital interactions.`}],h=[{fa:`fa-solid fa-user-group`,title:`User Insights Discovery`,desc:`Uncover valuable insights from user behavior, feedback, and interaction patterns to better understand audience needs.`},{fa:`fa-solid fa-route`,title:`Experience Journey Mapping`,desc:`Analyze every stage of the user journey to remove friction and create smooth, intuitive digital experiences.`},{fa:`fa-solid fa-flask`,title:`UX Evaluation & Testing`,desc:`Evaluate usability, accessibility, and interface performance through expert audits and real-world user testing.`},{fa:`fa-solid fa-chart-simple`,title:`Performance Intelligence`,desc:`Turn analytics, heatmaps, and user insights into actionable recommendations that improve engagement and conversions.`}],g=[{num:`01`,fa:`fa-solid fa-magnifying-glass`,title:`UX Discovery & Website Assessment`,desc:`We evaluate your website, user behavior, and business goals to identify usability issues and opportunities for UX improvement.`},{num:`02`,fa:`fa-solid fa-chart-line`,title:`User Behavior & Data Analysis`,desc:`Using analytics, heatmaps, and interaction data, we uncover friction points and optimize user journeys for better engagement.`},{num:`03`,fa:`fa-solid fa-laptop-code`,title:`Interface & Usability Evaluation`,desc:`We review navigation, accessibility, responsiveness, and interface consistency to deliver seamless user experiences.`},{num:`04`,fa:`fa-solid fa-lightbulb`,title:`UX Optimization Strategy`,desc:`Our experts recommend practical improvements to enhance user flows, increase engagement, and boost conversion performance.`},{num:`05`,fa:`fa-solid fa-file-lines`,title:`Reporting & Continuous Enhancement`,desc:`Receive a detailed audit report with prioritized recommendations and an actionable roadmap for continuous UX improvements.`}],_=()=>{let e=(0,o.useRef)(null),[t,n]=(0,o.useState)(!1);return(0,o.useEffect)(()=>{let t=new IntersectionObserver(([e])=>{e.isIntersecting&&(n(!0),t.disconnect())},{threshold:.1});return e.current&&t.observe(e.current),()=>t.disconnect()},[]),(0,s.jsx)(`section`,{className:`wds`,ref:e,children:(0,s.jsx)(`div`,{className:`wds-container`,children:(0,s.jsxs)(`div`,{className:`wds-types-grid`,children:[(0,s.jsxs)(`div`,{className:`wds-types-left`,children:[(0,s.jsx)(`div`,{className:`wds-section-label`,children:`WHAT WE AUDIT`}),(0,s.jsx)(`h3`,{className:`wds-types-heading`,children:`Types of UI/UX Audits We Perform`}),(0,s.jsx)(`p`,{className:`wds-types-desc`,children:`Every digital experience is different, and so are the challenges users face. Our specialized UI/UX audits help identify usability issues, improve user journeys, and optimize website performance to create seamless experiences that drive engagement, conversions, and business growth.`}),(0,s.jsx)(`div`,{className:`wds-deco`,"aria-hidden":`true`,children:(0,s.jsxs)(`svg`,{width:`240`,height:`190`,viewBox:`0 0 240 190`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,children:[(0,s.jsxs)(`defs`,{children:[(0,s.jsxs)(`radialGradient`,{id:`dotFade`,cx:`20%`,cy:`20%`,r:`80%`,children:[(0,s.jsx)(`stop`,{offset:`0%`,stopColor:`white`,stopOpacity:`0.55`}),(0,s.jsx)(`stop`,{offset:`100%`,stopColor:`white`,stopOpacity:`0`})]}),(0,s.jsx)(`mask`,{id:`gridMask`,children:(0,s.jsx)(`rect`,{width:`240`,height:`190`,fill:`url(#dotFade)`})}),(0,s.jsxs)(`radialGradient`,{id:`glowDot`,cx:`50%`,cy:`50%`,r:`50%`,children:[(0,s.jsx)(`stop`,{offset:`0%`,stopColor:`#f97316`,stopOpacity:`1`}),(0,s.jsx)(`stop`,{offset:`100%`,stopColor:`#f97316`,stopOpacity:`0`})]})]}),(0,s.jsx)(`g`,{mask:`url(#gridMask)`,children:Array.from({length:10},(e,t)=>Array.from({length:13},(e,n)=>(0,s.jsx)(`circle`,{cx:n*20+4,cy:t*20+4,r:`1.4`,fill:`#f97316`,opacity:`0.5`},`${t}-${n}`)))}),(0,s.jsx)(`path`,{d:`M 0 190 Q 180 150 230 20`,stroke:`#f97316`,strokeWidth:`1.2`,fill:`none`,opacity:`0.45`,strokeLinecap:`round`}),(0,s.jsx)(`circle`,{cx:`205`,cy:`72`,r:`5`,fill:`#f97316`,opacity:`0.9`}),(0,s.jsx)(`circle`,{cx:`205`,cy:`72`,r:`10`,fill:`#f97316`,opacity:`0.2`}),(0,s.jsx)(`circle`,{cx:`205`,cy:`72`,r:`16`,fill:`#f97316`,opacity:`0.08`})]})})]}),(0,s.jsx)(`div`,{className:`wds-types-cards`,children:m.map((e,n)=>(0,s.jsxs)(`div`,{className:`wds-type-card${t?` wds-anim`:``}`,style:t?{animationDelay:`${n*.1}s`}:{},children:[(0,s.jsx)(`span`,{className:`wds-card-num`,children:e.num}),(0,s.jsx)(`div`,{className:`wds-card-icon`,children:(0,s.jsx)(`i`,{className:e.fa})}),(0,s.jsx)(`h4`,{className:`wds-card-title`,children:e.title}),(0,s.jsx)(`p`,{className:`wds-card-desc`,children:e.desc}),(0,s.jsxs)(`a`,{href:`#contact`,className:`wds-card-link`,onClick:e=>{e.preventDefault(),a()},children:[`Learn More `,(0,s.jsx)(`i`,{className:`fa-solid fa-arrow-right`})]})]},n))})]})})})},v=()=>{let e=(0,o.useRef)(null),[t,n]=(0,o.useState)(!1);return(0,o.useEffect)(()=>{let t=new IntersectionObserver(([e])=>{e.isIntersecting&&(n(!0),t.disconnect())},{threshold:.1});return e.current&&t.observe(e.current),()=>t.disconnect()},[]),(0,s.jsx)(`section`,{className:`wdt`,ref:e,children:(0,s.jsx)(`div`,{className:`wdt-container`,children:(0,s.jsxs)(`div`,{className:`wdt-grid`,children:[(0,s.jsxs)(`div`,{className:`wdt-left`,children:[(0,s.jsx)(`div`,{className:`wds-section-label`,children:`BUILT WITH UX INSIGHTS & TOOLS`}),(0,s.jsx)(`h3`,{className:`wdt-heading`,children:`Tools & Methods We Use`}),(0,s.jsx)(`p`,{className:`wdt-desc`,children:`We combine proven UX methodologies, behavioral analysis, and data-driven insights to identify usability challenges, enhance customer experiences, and improve website performance. Our approach helps businesses create seamless digital journeys that increase engagement, conversions, and long-term customer satisfaction.`})]}),(0,s.jsx)(`div`,{className:`wdt-cards`,children:h.map((e,n)=>(0,s.jsxs)(`div`,{className:`wdt-card${t?` wds-anim`:``}`,style:t?{animationDelay:`${n*.1}s`}:{},children:[(0,s.jsx)(`div`,{className:`wdt-card-icon`,children:(0,s.jsx)(`i`,{className:e.fa})}),(0,s.jsxs)(`div`,{className:`wdt-card-content`,children:[(0,s.jsx)(`h4`,{className:`wdt-card-title`,children:e.title}),(0,s.jsx)(`p`,{className:`wdt-card-desc`,children:e.desc}),(0,s.jsx)(`div`,{className:`wdt-card-line`})]})]},n))})]})})})},y=()=>{let e=(0,o.useRef)(null),[t,n]=(0,o.useState)(!1);return(0,o.useEffect)(()=>{let t=new IntersectionObserver(([e])=>{e.isIntersecting&&(n(!0),t.disconnect())},{threshold:.08});return e.current&&t.observe(e.current),()=>t.disconnect()},[]),(0,s.jsx)(`section`,{className:`wdp`,ref:e,children:(0,s.jsx)(`div`,{className:`wdp-container`,children:(0,s.jsxs)(`div`,{className:`wdp-grid`,children:[(0,s.jsxs)(`div`,{className:`wdp-left`,children:[(0,s.jsx)(`div`,{className:`wds-section-label`,children:`OUR WORKFLOW`}),(0,s.jsx)(`h3`,{className:`wdp-heading`,children:` Our Proven UI/UX Audit Process`}),(0,s.jsx)(`p`,{className:`wdp-desc`,children:`Our structured UI/UX audit process identifies usability issues, improves user experiences, and optimizes conversion opportunities. Every step is focused on creating seamless digital journeys that increase engagement, customer satisfaction, and measurable business growth.`}),(0,s.jsxs)(`div`,{className:`wdp-cta`,children:[(0,s.jsx)(`div`,{className:`wdp-cta-icon`,children:(0,s.jsx)(`i`,{className:`fa-solid fa-comments`})}),(0,s.jsxs)(`div`,{className:`wdp-cta-text`,children:[(0,s.jsx)(`h4`,{children:`Need to Improve Your User Experience?`}),(0,s.jsx)(`p`,{children:`Let's identify usability issues, optimize user journeys, and create seamless digital experiences that improve engagement and conversions.`}),(0,s.jsxs)(`button`,{className:`wdp-cta-btn`,type:`button`,onClick:a,children:[`Let's Talk`,(0,s.jsx)(`i`,{className:`fa-solid fa-arrow-right`})]})]})]})]}),(0,s.jsx)(`div`,{className:`wdp-steps`,children:g.map((e,n)=>(0,s.jsxs)(`div`,{className:`wdp-step${t?` wds-anim`:``}`,style:t?{animationDelay:`${n*.1}s`}:{},children:[(0,s.jsx)(`div`,{className:`wdp-step-num`,children:e.num}),(0,s.jsx)(`div`,{className:`wdp-step-icon`,children:(0,s.jsx)(`i`,{className:e.fa})}),(0,s.jsxs)(`div`,{className:`wdp-step-body`,children:[(0,s.jsx)(`h4`,{children:e.title}),(0,s.jsx)(`p`,{children:e.desc})]})]},n))})]})})})},b=()=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(_,{}),(0,s.jsx)(v,{}),(0,s.jsx)(y,{})]}),x=[{fa:`fa-solid fa-user-check`,title:`User-Centric Experience Analysis`,desc:`Understand user behavior to uncover usability issues and create smoother, more intuitive website experiences.`},{fa:`fa-solid fa-chart-line`,title:`Conversion-Focused UX Strategy`,desc:`Optimize user journeys, reduce friction, and improve engagement to increase leads and website conversions.`},{fa:`fa-solid fa-chart-pie`,title:`Data-Driven UX Insights`,desc:`Leverage analytics, heatmaps, and user behavior data to make smarter UX decisions with confidence.`},{fa:`fa-solid fa-route`,title:`User Journey Optimization`,desc:`Improve navigation, interaction flows, and accessibility for seamless user experiences across your website.`},{fa:`fa-solid fa-clipboard-list`,title:`Actionable UX Audit Reports`,desc:`Receive clear audit reports with prioritized recommendations to improve usability and website performance.`}],S=[`Identify usability issues and UX gaps  `,`Improve navigation and user journeys`,`Increase engagement and conversions`,`Increase engagement and conversions`],C=[`Complete UI/UX and usability audit`,`User journey and interaction analysis`,`Conversion-focused UX recommendations`,`Actionable audit reports with priorities`],w=[{fa:`fa-solid fa-user-check`,title:`Usability Audit`,sub:`BEST FOR`,desc:`Improving navigation, accessibility, and overall website usability for better user experiences.`},{fa:`fa-solid fa-route`,title:`User Journey Audit`,sub:`BEST FOR`,desc:`Optimizing user flows, interaction paths, and customer journeys for higher engagement.`},{fa:`fa-solid fa-filter`,title:`Conversion Funnel Audit`,sub:`BEST FOR`,desc:`Increasing conversions, reducing drop-offs, and optimizing key user actions and funnels.`},{fa:`fa-solid fa-gauge-high`,title:`Performance & UX Audit`,sub:`BEST FOR`,desc:`Enhancing website speed, responsiveness, and overall digital user experience performance.`}],T=[{fa:`fa-solid fa-magnifying-glass`,q:`What is a UI/UX audit?`,a:`A UI/UX audit is a comprehensive review of your website's usability, navigation, accessibility, and user experience to identify issues affecting engagement, conversions, and overall website performance.`},{fa:`fa-solid fa-user-check`,q:`How do I know if my website needs a UI/UX audit?`,a:`If your website has high bounce rates, low conversions, poor engagement, or confusing navigation, a UI/UX audit helps identify the problems and provides practical recommendations for improvement.`},{fa:`fa-solid fa-clock`,q:`How long does a UI/UX audit take?`,a:`Most UI/UX audits are completed within 5–10 business days, depending on your website's size and complexity, and include detailed findings with actionable improvement recommendations.`},{fa:`fa-solid fa-clipboard-list`,q:`What will I receive after the audit?`,a:`You'll receive a detailed audit report covering usability issues, user behavior insights, conversion opportunities, accessibility recommendations, and a prioritized UX improvement roadmap.`}],E=(e=.1)=>{let t=(0,o.useRef)(null),[n,r]=(0,o.useState)(!1);return(0,o.useEffect)(()=>{let n=new IntersectionObserver(([e])=>{e.isIntersecting&&(r(!0),n.disconnect())},{threshold:e});return t.current&&n.observe(t.current),()=>n.disconnect()},[]),[t,n]},D=()=>{let[e,t]=E(.08);return(0,s.jsx)(`section`,{className:`wde`,ref:e,children:(0,s.jsx)(`div`,{className:`wde-container`,children:(0,s.jsxs)(`div`,{className:`wde-grid`,children:[(0,s.jsxs)(`div`,{className:`wde-left`,children:[(0,s.jsx)(`div`,{className:`wds-section-label`,children:`OUR APPROACH`}),(0,s.jsxs)(`h3`,{className:`wde-heading`,children:[`Why Choose Our UI/UX Audit `,(0,s.jsx)(`span`,{children:`Services? `})]}),(0,s.jsx)(`p`,{className:`wde-desc`,children:`A successful website is built on more than great design. Our UI/UX audits uncover usability issues, improve user journeys, and optimize every interaction using data-driven insights to increase engagement, boost conversions, and support long-term business growth.`}),(0,s.jsx)(`div`,{className:`wde-gradient-bar`})]}),(0,s.jsxs)(`div`,{className:`wde-right`,children:[(0,s.jsx)(`div`,{className:`wde-features`,children:x.map((e,n)=>(0,s.jsxs)(`div`,{className:`wde-feat${t?` wde-anim`:``}`,style:t?{animationDelay:`${n*.1}s`}:{},children:[(0,s.jsx)(`div`,{className:`wde-feat-icon`,children:(0,s.jsx)(`i`,{className:e.fa})}),(0,s.jsxs)(`div`,{className:`wde-feat-body`,children:[(0,s.jsx)(`h5`,{children:e.title}),(0,s.jsx)(`p`,{children:e.desc})]})]},n))}),(0,s.jsxs)(`div`,{className:`wde-note`,children:[(0,s.jsx)(`div`,{className:`wde-note-icon`,children:(0,s.jsx)(`i`,{className:`fa-solid fa-rocket`})}),(0,s.jsxs)(`p`,{children:[`Receive prioritized recommendations and practical insights`,(0,s.jsx)(`em`,{children:` to improve usability and website performance.`})]})]})]})]})})})},O=()=>{let[e,t]=E(.08);return(0,s.jsx)(`section`,{className:`wdec`,ref:e,children:(0,s.jsx)(`div`,{className:`wdec-container`,children:(0,s.jsxs)(`div`,{className:`wdec-grid`,children:[(0,s.jsxs)(`div`,{className:`wdec-left`,children:[(0,s.jsx)(`div`,{className:`wds-section-label`,children:`GROW YOUR BUSINESS`}),(0,s.jsxs)(`h3`,{className:`wdec-heading`,children:[`Why Your Business`,(0,s.jsx)(`span`,{children:`Needs a UI/UX Audit`})]}),(0,s.jsx)(`div`,{className:`wdec-divider`}),(0,s.jsx)(`p`,{className:`wdec-desc`,children:`A poor user experience can cost your business valuable leads and customers. Our UI/UX audits identify usability issues, improve user journeys, and optimize website performance to increase engagement, strengthen trust, and boost conversions.`})]}),(0,s.jsxs)(`div`,{className:`wdec-cards`,children:[(0,s.jsxs)(`div`,{className:`wdec-card${t?` wde-anim`:``}`,style:t?{animationDelay:`0.1s`}:{},children:[(0,s.jsx)(`div`,{className:`wdec-card-icon`,children:(0,s.jsx)(`i`,{className:`fa-solid fa-circle-dot`})}),(0,s.jsxs)(`h4`,{children:[`UI/UX Audit `,(0,s.jsx)(`span`,{children:`Helps You To:`})]}),(0,s.jsx)(`ul`,{className:`wdec-list`,children:S.map((e,t)=>(0,s.jsxs)(`li`,{children:[(0,s.jsx)(`i`,{className:`fa-solid fa-arrow-right`}),e]},t))})]}),(0,s.jsxs)(`div`,{className:`wdec-card${t?` wde-anim`:``}`,style:t?{animationDelay:`0.2s`}:{},children:[(0,s.jsx)(`div`,{className:`wdec-card-icon`,children:(0,s.jsx)(`i`,{className:`fa-solid fa-gift`})}),(0,s.jsx)(`h4`,{children:`What We Deliver:`}),(0,s.jsx)(`ul`,{className:`wdec-list wdec-list--dot`,children:C.map((e,t)=>(0,s.jsxs)(`li`,{children:[(0,s.jsx)(`i`,{className:`fa-solid fa-circle`}),e]},t))})]})]})]})})})},k=()=>{let[e,t]=E(.08);return(0,s.jsx)(`section`,{className:`wdpl`,ref:e,children:(0,s.jsx)(`div`,{className:`wdpl-container`,children:(0,s.jsxs)(`div`,{className:`wdpl-grid`,children:[(0,s.jsxs)(`div`,{className:`wdpl-left`,children:[(0,s.jsx)(`div`,{className:`wds-section-label`,children:`CHOOSE WHAT’S RIGHT`}),(0,s.jsxs)(`h3`,{className:`wdpl-heading`,children:[`Choose the Right`,(0,s.jsx)(`span`,{children:` UI/UX`}),` Audit for Your Business`]}),(0,s.jsx)(`p`,{className:`wdpl-desc`,children:`Every website has unique usability challenges and business goals. Our specialized UI/UX audits identify experience gaps, improve user journeys, and optimize website performance to increase engagement, conversions, and long-term business growth.`})]}),(0,s.jsxs)(`div`,{className:`wdpl-right`,children:[(0,s.jsx)(`div`,{className:`wdpl-cards`,children:w.map((e,n)=>(0,s.jsxs)(`div`,{className:`wdpl-card${t?` wde-anim`:``}`,style:t?{animationDelay:`${n*.1}s`}:{},children:[(0,s.jsxs)(`div`,{className:`wdpl-card-inner`,children:[(0,s.jsx)(`div`,{className:`wdpl-card-icon`,children:(0,s.jsx)(`i`,{className:e.fa})}),(0,s.jsxs)(`div`,{className:`wdpl-card-body`,children:[(0,s.jsx)(`h5`,{children:e.title}),(0,s.jsx)(`span`,{className:`wdpl-sub`,children:e.sub}),(0,s.jsx)(`p`,{children:e.desc})]})]}),(0,s.jsx)(`div`,{className:`wdpl-arrow`,children:(0,s.jsx)(`i`,{className:`fa-solid fa-arrow-right`})})]},n))}),(0,s.jsxs)(`div`,{className:`wdpl-note${t?` wde-anim`:``}`,style:t?{animationDelay:`0.45s`}:{},children:[(0,s.jsx)(`div`,{className:`wdpl-note-icon`,children:(0,s.jsx)(`i`,{className:`fa-solid fa-lightbulb`})}),(0,s.jsx)(`p`,{children:`Not sure which UI/UX audit fits your business? Our experts recommend the right strategy based on your goals, users, and growth opportunities.`})]})]})]})})})},A=()=>{let[e,t]=E(.08),[n,r]=(0,o.useState)(null),i=e=>r(n===e?null:e);return(0,s.jsx)(`section`,{className:`wdfq`,ref:e,children:(0,s.jsxs)(`div`,{className:`wdfq-container`,children:[(0,s.jsx)(`div`,{className:`wds-section-label`,children:`QUESTIONS? WE'VE GOT ANSWERS`}),(0,s.jsx)(`h3`,{className:`wdfq-heading`,children:`Frequently Asked Questions`}),(0,s.jsx)(`div`,{className:`wdfq-list`,children:T.map((e,r)=>(0,s.jsxs)(`div`,{className:`wdfq-item${n===r?` open`:``}${t?` wde-anim`:``}`,style:t?{animationDelay:`${r*.1}s`}:{},onClick:()=>i(r),children:[(0,s.jsxs)(`div`,{className:`wdfq-q`,children:[(0,s.jsx)(`div`,{className:`wdfq-icon`,children:(0,s.jsx)(`i`,{className:e.fa})}),(0,s.jsx)(`span`,{children:e.q}),(0,s.jsx)(`div`,{className:`wdfq-plus`,children:(0,s.jsx)(`i`,{className:`fa-solid ${n===r?`fa-minus`:`fa-plus`}`})})]}),n===r&&(0,s.jsx)(`div`,{className:`wdfq-a`,children:(0,s.jsx)(`p`,{children:e.a})})]},r))})]})})},j=()=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(D,{}),(0,s.jsx)(O,{}),(0,s.jsx)(k,{}),(0,s.jsx)(A,{})]}),M=()=>(0,s.jsxs)(`div`,{className:`page-wrapper`,children:[(0,s.jsx)(c,{}),(0,s.jsx)(`section`,{className:`services-details pt-120 pb-120`,style:{marginTop:`40px`,marginBottom:`120px`},children:(0,s.jsx)(`div`,{className:`service-details-page`,children:(0,s.jsx)(`div`,{className:`container`,children:(0,s.jsx)(`div`,{className:`wd-outer`,children:(0,s.jsx)(`div`,{className:`wd-content-col`,children:(0,s.jsxs)(`div`,{className:`services-details__content`,children:[(0,s.jsx)(p,{}),(0,s.jsx)(b,{}),(0,s.jsx)(j,{})]})})})})})})]});export{M as default};