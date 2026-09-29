import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  STACK_PRODUCTS,
  PRODUCTS_FAQ,
} from "../../data/productsData";
import SEO from "../../components/SEO/SEO";
import "./Products.css";

gsap.registerPlugin(ScrollTrigger);

export default function Products({ openPopup }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const timelineRef = useRef(null);

  useEffect(() => {
    document.title = "Our Products | Modern SaaS Workflow Ecosystem | Brandmingo";
    window.scrollTo(0, 0);
  }, []);

  // ════════════════════════════════════════════════════════════════════
  // GSAP SCROLLTRIGGER 3D STACK ANIMATION (CENTER-LOCKED & FLUID)
  // ════════════════════════════════════════════════════════════════════
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const cards = cardsRef.current.filter(Boolean);

    const mm = gsap.matchMedia();

    // ── DESKTOP & TABLET ANIMATION (min-width: 768px) ──
    mm.add("(min-width: 768px)", () => {
      // 1. Initial State: All 4 cards visible in stepped 3D cascade!
      // Card 0: Active, expanded (height: 330px, y: 0)
      gsap.set(cards[0], {
        y: 0,
        height: 330,
        scale: 1,
        opacity: 1,
        zIndex: 40,
        filter: "brightness(1)",
      });
      // Card 1: Peek header below Card 0 (height: 52px, y: 340px)
      gsap.set(cards[1], {
        y: 340,
        height: 52,
        scale: 0.98,
        opacity: 0.92,
        zIndex: 30,
        filter: "brightness(0.92)",
      });
      // Card 2: Peek header below Card 1 (height: 52px, y: 398px)
      gsap.set(cards[2], {
        y: 398,
        height: 52,
        scale: 0.96,
        opacity: 0.85,
        zIndex: 20,
        filter: "brightness(0.85)",
      });
      // Card 3: Peek header below Card 2 (height: 52px, y: 456px)
      gsap.set(cards[3], {
        y: 456,
        height: 52,
        scale: 0.94,
        opacity: 0.78,
        zIndex: 10,
        filter: "brightness(0.78)",
      });

      // 2. Scrubbed Timeline with Pinning below navbar
      // Pin starts at "top 80px" so the entire section is centered and NEVER cut off by the navbar!
      // Scroll distance is concise (1400px) so the page smoothly unlocks after the last card without feeling stuck!
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 80px",
          end: "+=1400",
          pin: true,
          scrub: 0.6,
          anticipatePin: 1,
          onUpdate: (self) => {
            const p = self.progress;
            let current = 0;
            if (p >= 0.72) current = 3;
            else if (p >= 0.38) current = 2;
            else if (p >= 0.12) current = 1;
            setActiveIndex(current);
          },
        },
      });

      timelineRef.current = tl;

      // ── TRANSITION 1: Card 0 → Card 1 (t = 0 to 1) ──
      tl.to(cards[0], {
        y: -90,
        scale: 0.95,
        opacity: 0,
        ease: "power2.inOut",
        duration: 1,
      }, 0)
        .to(cards[1], {
          y: 0,
          height: 330,
          scale: 1,
          opacity: 1,
          zIndex: 40,
          filter: "brightness(1)",
          ease: "power2.inOut",
          duration: 1,
        }, 0)
        .to(cards[2], {
          y: 340,
          scale: 0.98,
          opacity: 0.92,
          zIndex: 30,
          filter: "brightness(0.92)",
          ease: "power2.inOut",
          duration: 1,
        }, 0)
        .to(cards[3], {
          y: 398,
          scale: 0.96,
          opacity: 0.85,
          zIndex: 20,
          filter: "brightness(0.85)",
          ease: "power2.inOut",
          duration: 1,
        }, 0);

      // ── TRANSITION 2: Card 1 → Card 2 (t = 1 to 2) ──
      tl.to(cards[1], {
        y: -90,
        scale: 0.95,
        opacity: 0,
        ease: "power2.inOut",
        duration: 1,
      }, 1)
        .to(cards[2], {
          y: 0,
          height: 330,
          scale: 1,
          opacity: 1,
          zIndex: 40,
          filter: "brightness(1)",
          ease: "power2.inOut",
          duration: 1,
        }, 1)
        .to(cards[3], {
          y: 340,
          scale: 0.98,
          opacity: 0.92,
          zIndex: 30,
          filter: "brightness(0.92)",
          ease: "power2.inOut",
          duration: 1,
        }, 1);

      // ── TRANSITION 3: Card 2 → Card 3 (t = 2 to 3) ──
      tl.to(cards[2], {
        y: -90,
        scale: 0.95,
        opacity: 0,
        ease: "power2.inOut",
        duration: 1,
      }, 2)
        .to(cards[3], {
          y: 0,
          height: 330,
          scale: 1,
          opacity: 1,
          zIndex: 40,
          filter: "brightness(1)",
          ease: "power2.inOut",
          duration: 1,
        }, 2);

      // Short buffer so user can read the 4th card before natural unpin
      tl.to({}, { duration: 0.25 });
    });

    // ── MOBILE ANIMATION (max-width: 767px) ──
    mm.add("(max-width: 767px)", () => {
      gsap.set(cards[0], { y: 0, height: 300, opacity: 1, zIndex: 40 });
      gsap.set(cards[1], { y: 308, height: 48, opacity: 0.9, zIndex: 30 });
      gsap.set(cards[2], { y: 362, height: 48, opacity: 0.82, zIndex: 20 });
      gsap.set(cards[3], { y: 416, height: 48, opacity: 0.75, zIndex: 10 });

      const tlMobile = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 70px",
          end: "+=1200",
          pin: true,
          scrub: 0.5,
          onUpdate: (self) => {
            const p = self.progress;
            let current = 0;
            if (p >= 0.72) current = 3;
            else if (p >= 0.38) current = 2;
            else if (p >= 0.12) current = 1;
            setActiveIndex(current);
          },
        },
      });

      timelineRef.current = tlMobile;

      tlMobile
        .to(cards[0], { y: -80, opacity: 0, duration: 1 }, 0)
        .to(cards[1], { y: 0, height: 300, opacity: 1, zIndex: 40, duration: 1 }, 0)
        .to(cards[2], { y: 308, opacity: 0.9, zIndex: 30, duration: 1 }, 0)
        .to(cards[3], { y: 362, opacity: 0.82, zIndex: 20, duration: 1 }, 0);

      tlMobile
        .to(cards[1], { y: -80, opacity: 0, duration: 1 }, 1)
        .to(cards[2], { y: 0, height: 300, opacity: 1, zIndex: 40, duration: 1 }, 1)
        .to(cards[3], { y: 308, opacity: 0.9, zIndex: 30, duration: 1 }, 1);

      tlMobile
        .to(cards[2], { y: -80, opacity: 0, duration: 1 }, 2)
        .to(cards[3], { y: 0, height: 300, opacity: 1, zIndex: 40, duration: 1 }, 2);
    });

    return () => {
      mm.revert();
    };
  }, []);

  // Jump directly to card when clicking indicators
  const jumpToCard = (targetIndex) => {
    if (!timelineRef.current || !timelineRef.current.scrollTrigger) return;
    const st = timelineRef.current.scrollTrigger;
    const targets = [0, 0.28, 0.58, 0.92];
    const targetP = targets[targetIndex] || 0;
    const scrollY = st.start + targetP * (st.end - st.start);
    window.scrollTo({ top: scrollY, behavior: "smooth" });
  };

  const handleTriggerAccess = () => {
    if (openPopup) openPopup();
    else window.dispatchEvent(new CustomEvent("open-enquiry-popup"));
  };

  const currentProduct = STACK_PRODUCTS[activeIndex] || STACK_PRODUCTS[0];

  return (
    <div className="products-page">
      <SEO
        title="Our Products | Modern SaaS Workflow Ecosystem | Brandmingo"
        description="Explore Brandmingo's suite of modern business products: WorkSensy CRM, BeeShip Logistics, CartSensy Cart Recovery, and Meta AutoPost Scheduler."
        canonical="https://brandmingo.com/products"
        keywords="Brandmingo products, WorkSensy, BeeShip, CartSensy, Meta AutoPost, SaaS software India"
      />
      {/* Ambient background glow corresponding to active card's accent */}
      <div
        className="prd-ambient-glow prd-ambient-glow--1"
        style={{
          background: `radial-gradient(circle, ${currentProduct.color}35 0%, transparent 70%)`,
        }}
      />
      <div className="prd-ambient-glow prd-ambient-glow--2" />

      {/* ══ HERO INTRO SECTION ═════════════════════════════════════ */}
      <section className="prd-hero-intro">
        <div className="container">
          <div className="prd-intro-badge">
            <i className="fa-solid fa-sparkles" />
            <span>Product Ecosystem</span>
          </div>
          <h1 className="prd-intro-title">
            Engineered for High-Growth{" "}
            <span className="prd-gradient-text">Modern Businesses</span>
          </h1>
          <p className="prd-intro-desc">
            A cohesive suite of autonomous tools designed to streamline your social reach,
            team velocity, client relationships, and automated cash flow.
          </p>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════
          PINNED SCROLL SECTION (GSAP PIN TARGET)
          ═════════════════════════════════════════════════════════════ */}
      <section className="prd-pinned-outer" ref={sectionRef}>
        <div className="prd-pinned-container container">
          <div className="prd-stack-layout">

            {/* ══ LEFT: 52% WIDTH — 3D LAYERED CARD STACK ═══════════ */}
            <div className="prd-left-stack-wrapper">
              <div className="prd-stack-stage">
                {STACK_PRODUCTS.map((prod, idx) => (
                  <div
                    key={prod.id}
                    ref={(el) => (cardsRef.current[idx] = el)}
                    className={`prd-stack-card-item ${idx === activeIndex ? "is-active" : ""}`}
                    onClick={() => jumpToCard(idx)}
                    style={{
                      background: `linear-gradient(145deg, ${prod.color}0d 0%, #111219 100%)`,
                      borderColor: idx === activeIndex ? `${prod.color}77` : `${prod.color}33`,
                      boxShadow:
                        idx === activeIndex
                          ? `0 24px 60px -8px rgba(0,0,0,0.92), 0 0 32px ${prod.color}28`
                          : `0 14px 35px rgba(0,0,0,0.7), 0 0 16px ${prod.color}15`,
                    }}
                  >
                    {/* Header Bar — Always visible in both peek and expanded states */}
                    <div className="prd-card-header-bar">
                      <div className="prd-card-identity">
                        <div
                          className="prd-card-icon-bubble"
                          style={{
                            background: prod.logo ? "transparent" : prod.gradient,
                            padding: prod.logo ? "0" : undefined,
                            overflow: "hidden",
                          }}
                        >
                          {prod.logo ? (
                            <img src={prod.logo} alt={prod.title} className="prd-card-logo-bubble-img" />
                          ) : (
                            <i className={prod.icon} />
                          )}
                        </div>
                        <div>
                          <div className="prd-card-name">{prod.title}</div>
                          <div className="prd-card-role">{prod.subtitle}</div>
                        </div>
                      </div>

                      <div className="prd-card-header-right">
                        {/* Compact peek preview */}
                        {prod.id === "worksensy" && (
                          <span className="prd-peek-mini-preview">💼 ₹320K Rev · 68% Conv</span>
                        )}
                        {prod.id === "beeship" && (
                          <span className="prd-peek-mini-preview">📦 4 Shipments · ₹755 Wallet</span>
                        )}
                        {prod.id === "cartsensy" && (
                          <span className="prd-peek-mini-preview">🛒 35% Recovery · ₹184K Saved</span>
                        )}
                        {prod.id === "metaautopost" && (
                          <span className="prd-peek-mini-preview">📱 3 Accounts · Auto Schedule</span>
                        )}

                        <div
                          className="prd-card-pill-tag"
                          style={{
                            color: prod.color,
                            background: `${prod.color}18`,
                            borderColor: `${prod.color}44`,
                          }}
                        >
                          {prod.badge}
                        </div>
                      </div>
                    </div>

                    {/* Inside Mockup Window — Revealed when expanded */}
                    <div className="prd-card-mockup-body">
                      {prod.image ? (
                        <div className="prd-card-image-container">
                          <img
                            src={prod.image}
                            alt={prod.title}
                            className="prd-card-real-mockup-img"
                            loading="eager"
                          />
                          <div className="prd-card-image-overlay" />
                        </div>
                      ) : (
                        <>
                          {/* Sidebar navigation */}
                          <div className="prd-mockup-aside">
                        {prod.mockup.sidebarMenu.slice(0, 5).map((item, sIdx) => (
                          <div
                            key={sIdx}
                            className={`prd-aside-tab ${sIdx === 0 ? "active" : ""}`}
                            style={
                              sIdx === 0
                                ? { background: `${prod.color}22`, color: prod.color }
                                : {}
                            }
                          >
                            <i className="fa-solid fa-circle" style={{ fontSize: "4px" }} />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>

                      {/* Main Dashboard Preview Content */}
                      <div className="prd-mockup-main">
                        <div className="prd-view-heading-row">
                          <div>
                            <div className="prd-view-greeting">{prod.mockup.userGreeting}</div>
                            <div className="prd-view-sub">{prod.mockup.userSub}</div>
                          </div>
                          <span className="prd-view-filter-badge">This Month ▾</span>
                        </div>

                        {/* Top 3 KPI Stats */}
                        <div className="prd-mockup-stat-strip">
                          {prod.mockup.stats.map((st, stIdx) => (
                            <div key={stIdx} className="prd-stat-box">
                              <div
                                className="prd-stat-icon-dot"
                                style={{ background: `${st.color}22`, color: st.color }}
                              >
                                <i className={st.icon} />
                              </div>
                              <div>
                                <div className="prd-stat-number">{st.val}</div>
                                <div className="prd-stat-text">{st.label}</div>
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Specific Interactive View depending on Product */}
                        <div className="prd-mockup-preview-area">
                          <div className="prd-area-header">
                            <span className="prd-area-label">{prod.mockup.chartTitle}</span>
                            <span
                              className="prd-area-badge"
                              style={{ background: `${prod.color}22`, color: prod.color }}
                            >
                              {prod.mockup.chartPill}
                            </span>
                          </div>

                          {/* 1. BrandPilot: Bar Chart */}
                          {prod.id === "brandpilot" && (
                            <div className="prd-bars-flex">
                              {prod.mockup.chartBars.map((h, bIdx) => (
                                <div key={bIdx} className="prd-bar-pillar">
                                  <div
                                    className="prd-bar-fill-elem"
                                    style={{
                                      height: `${h}%`,
                                      background:
                                        bIdx === prod.mockup.chartBars.length - 1
                                          ? prod.color
                                          : "rgba(255,255,255,0.14)",
                                    }}
                                  />
                                  <span className="prd-bar-month">
                                    {["Jan", "Feb", "Mar", "Apr", "May", "Jun"][bIdx]}
                                  </span>
                                </div>
                              ))}
                            </div>
                          )}

                          {/* 2. BeeShip: Courier Performance */}
                          {prod.id === "beeship" && (
                            <div className="prd-task-list-view">
                              <div className="prd-task-row">
                                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                  <i className="fa-solid fa-truck" style={{ color: prod.color }} />
                                  <span>Bluedart Surface Express</span>
                                </div>
                                <span className="prd-task-tag" style={{ background: "rgba(14, 165, 233, 0.15)", color: "#38bdf8" }}>In Transit</span>
                              </div>
                              <div className="prd-task-row">
                                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                  <i className="fa-solid fa-plane-departure" style={{ color: prod.color }} />
                                  <span>Delhivery Air Priority</span>
                                </div>
                                <span className="prd-task-tag" style={{ background: "rgba(16, 185, 129, 0.15)", color: "#34d399" }}>Delivered</span>
                              </div>
                            </div>
                          )}

                          {/* 3. CartSensy: Recovery Leads */}
                          {prod.id === "cartsensy" && (
                            <div className="prd-client-list-view">
                              {prod.mockup.clients.map((c, cIdx) => (
                                <div key={cIdx} className="prd-client-row">
                                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                    <div
                                      className="prd-client-avatar"
                                      style={{ background: c.color }}
                                    >
                                      {c.initial}
                                    </div>
                                    <span className="prd-client-info">{c.name}</span>
                                  </div>
                                  <span
                                    className="prd-client-badge"
                                    style={{
                                      background: `${c.color}20`,
                                      color: c.color,
                                    }}
                                  >
                                    {c.status}
                                  </span>
                                </div>
                              ))}
                            </div>
                          )}

                          {/* 4. Meta AutoPost: Post Status List */}
                          {prod.id === "metaautopost" && (
                            <div className="prd-invoice-list-view">
                              {prod.mockup.invoices.map((inv, iIdx) => (
                                <div key={iIdx} className="prd-invoice-row">
                                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                    <i className="fa-regular fa-file-lines" style={{ color: prod.color }} />
                                    <span style={{ color: "#fff", fontWeight: 600 }}>{inv.client}</span>
                                  </div>
                                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                                    <span style={{ color: "#fff", fontWeight: 700 }}>{inv.amount}</span>
                                    <span
                                      style={{
                                        fontSize: "9px",
                                        padding: "2px 7px",
                                        borderRadius: "999px",
                                        background: `${inv.color}20`,
                                        color: inv.color,
                                        fontWeight: 700,
                                      }}
                                    >
                                      {inv.status}
                                    </span>
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
                ))}
              </div>
            </div>

            {/* ══ RIGHT: 48% WIDTH — DETAILED PRODUCT INFORMATION ══ */}
            <div className="prd-right-info-wrapper">
              <div className="prd-details-card">
                {/* Top Stepper Indicator */}
                <div className="prd-details-top-bar">
                  <span
                    className="prd-category-pill"
                    style={{
                      color: currentProduct.color,
                      borderColor: `${currentProduct.color}44`,
                      background: `${currentProduct.color}15`,
                    }}
                  >
                    {currentProduct.tagline}
                  </span>

                  <div className="prd-stepper-dots">
                    {STACK_PRODUCTS.map((p, dotIdx) => (
                      <button
                        key={dotIdx}
                        type="button"
                        className={`prd-step-dot ${dotIdx === activeIndex ? "active" : ""}`}
                        style={{
                          background: dotIdx === activeIndex ? p.color : "rgba(255,255,255,0.12)",
                        }}
                        onClick={() => jumpToCard(dotIdx)}
                        aria-label={`Jump to ${p.title}`}
                      />
                    ))}
                  </div>
                </div>

                {/* Animated Body: Clean, dedicated container with ZERO overlapping text */}
                <div key={currentProduct.id} className="prd-details-animated-body">
                  {/* Product Headline */}
                  <div className="prd-details-headline">
                    <div
                      className="prd-details-icon-large"
                      style={{
                        background: currentProduct.logo ? "transparent" : currentProduct.gradient,
                        padding: currentProduct.logo ? "0" : undefined,
                        overflow: "hidden",
                      }}
                    >
                      {currentProduct.logo ? (
                        <img src={currentProduct.logo} alt={currentProduct.title} className="prd-details-logo-img" />
                      ) : (
                        <i className={currentProduct.icon} />
                      )}
                    </div>
                    <div>
                      <h2 className="prd-details-title">{currentProduct.title}</h2>
                      <div
                        className="prd-details-subtitle"
                        style={{ color: currentProduct.color }}
                      >
                        {currentProduct.subtitle}
                      </div>
                    </div>
                  </div>

                  {/* 2-3 line description */}
                  <p className="prd-details-desc">{currentProduct.desc}</p>

                  {/* 3-4 Key Features with Icons */}
                  <div className="prd-features-checklist">
                    {currentProduct.features.map((feat, fIdx) => (
                      <div key={fIdx} className="prd-feature-check-item">
                        <div
                          className="prd-check-icon"
                          style={{ background: `${currentProduct.color}22`, color: currentProduct.color }}
                        >
                          <i className="fa-solid fa-check" />
                        </div>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Small Supporting Statistic / Benefit */}
                  <div className="prd-stat-benefit-badge">
                    <i
                      className={currentProduct.stat.icon}
                      style={{ color: currentProduct.color, fontSize: "18px" }}
                    />
                    <div>
                      <span
                        className="prd-benefit-number"
                        style={{ color: currentProduct.color }}
                      >
                        {currentProduct.stat.val}
                      </span>{" "}
                      <span className="prd-benefit-text">{currentProduct.stat.label}</span>
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="prd-action-buttons-row">
                    <button
                      type="button"
                      className="prd-btn-primary-cta"
                      onClick={handleTriggerAccess}
                    >
                      <span>Get Early Access</span>
                      <i className="fa-solid fa-arrow-right" />
                    </button>
                    <button
                      type="button"
                      className="prd-btn-secondary-demo"
                      onClick={() => setVideoModalOpen(true)}
                    >
                      <i className="fa-regular fa-circle-play" />
                      <span>Watch Demo</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ══ FAQ SECTION ════════════════════════════════════════════ */}
      <section className="prd-faq-section">
        <div className="container">
          <div className="prd-section-head">
            <span className="prd-section-badge">Frequently Asked Questions</span>
            <h2 className="prd-section-title">Everything You Need to Know</h2>
            <p className="prd-section-desc">
              Quick answers about onboarding, integrations, custom enterprise
              deployments, and technical support.
            </p>
          </div>
          <div className="prd-faq-wrap">
            {PRODUCTS_FAQ.map((faq, i) => {
              const isOpen = openFaqIndex === i;
              return (
                <div key={i} className={`prd-faq-item ${isOpen ? "open" : ""}`}>
                  <button
                    type="button"
                    className="prd-faq-question"
                    onClick={() => setOpenFaqIndex((prev) => (prev === i ? null : i))}
                    aria-expanded={isOpen}
                  >
                    <span>{faq.q}</span>
                    <i className="fa-solid fa-chevron-down prd-faq-icon" />
                  </button>
                  {isOpen && <div className="prd-faq-answer">{faq.a}</div>}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══ CALL TO ACTION ═════════════════════════════════════════ */}
      <section className="prd-cta-section">
        <div className="container">
          <div className="prd-cta-card">
            <h2 className="prd-cta-title">Ready to Power Up Your Digital Workflow?</h2>
            <p className="prd-cta-desc">
              Join leading agencies and high-growth brands using Brandmingo's integrated
              ecosystem to streamline operations and scale revenue.
            </p>
            <div className="prd-cta-actions">
              <button
                type="button"
                className="prd-btn-primary-cta"
                onClick={handleTriggerAccess}
              >
                <span>Request Custom Demo</span>
                <i className="fa-solid fa-calendar-check" />
              </button>
              <Link to="/contact-us" className="prd-btn-secondary-demo">
                <span>Talk to Sales</span>
                <i className="fa-solid fa-arrow-right" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══ DEMO VIDEO MODAL ═══════════════════════════════════════ */}
      {videoModalOpen && (
        <div className="prd-modal-backdrop" onClick={() => setVideoModalOpen(false)}>
          <div className="prd-modal-container" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="prd-modal-close"
              onClick={() => setVideoModalOpen(false)}
              aria-label="Close"
            >
              ✕
            </button>

            <div style={{ textAlign: "center", padding: "8px 0 16px" }}>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "56px",
                  height: "56px",
                  borderRadius: "16px",
                  background: currentProduct.logo ? "transparent" : currentProduct.gradient,
                  color: "#ffffff",
                  fontSize: "24px",
                  marginBottom: "16px",
                  overflow: "hidden",
                }}
              >
                {currentProduct.logo ? (
                  <img
                    src={currentProduct.logo}
                    alt={currentProduct.title}
                    style={{ width: "100%", height: "100%", objectFit: "contain", borderRadius: "16px" }}
                  />
                ) : (
                  <i className={currentProduct.icon} />
                )}
              </div>
              <h3 style={{ fontSize: "22px", fontWeight: 800, color: "#fff", margin: "0 0 6px" }}>
                {currentProduct.title} — Live Walkthrough
              </h3>
              <p
                style={{
                  fontSize: "13.5px",
                  color: "rgba(255,255,255,0.6)",
                  maxWidth: "440px",
                  margin: "0 auto 20px",
                }}
              >
                A dedicated specialist will demo {currentProduct.title} live, tuned to your business use cases.
              </p>

              <div
                style={{
                  borderRadius: "16px",
                  border: "1px solid rgba(255,255,255,0.09)",
                  background: "#0a0a0f",
                  padding: "36px 20px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "12px",
                }}
              >
                <div
                  style={{
                    width: "58px",
                    height: "58px",
                    borderRadius: "50%",
                    background: "rgba(255,107,30,0.18)",
                    border: "2px solid #ff6b1e",
                    color: "#ff8843",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "21px",
                    cursor: "pointer",
                  }}
                  onClick={handleTriggerAccess}
                >
                  <i className="fa-solid fa-play" style={{ marginLeft: "4px" }} />
                </div>
                <div style={{ fontSize: "14px", fontWeight: 600, color: "#fff" }}>
                  Schedule Guided Demo
                </div>
                <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.45)", maxWidth: "360px" }}>
                  We'll prepare a live interactive sandbox environment for your team.
                </div>
              </div>

              <div style={{ marginTop: "24px", display: "flex", justifyContent: "center" }}>
                <button
                  type="button"
                  className="prd-btn-primary-cta"
                  onClick={() => {
                    setVideoModalOpen(false);
                    handleTriggerAccess();
                  }}
                >
                  <span>Book Guided Demo</span>
                  <i className="fa-solid fa-calendar-check" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
