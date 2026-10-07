import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import SEO from "../../components/SEO/SEO";
import { PRODUCTS_FAQ } from "../../data/productsData";
import "./Products.css";

gsap.registerPlugin(ScrollTrigger);

// ── 4 Main Large Cards Data matching Shiprocket reference ──
const DECK_CARDS_DATA = [
  {
    id: "worksensy",
    title: "WorkSensy",
    subtitle: "Sales CRM & Lead Automation Pipeline",
    logo: "/Cloudinary-images/worksensy.png",
    websiteUrl: "https://www.worksensy.com/",
    bgGradient: "linear-gradient(135deg, #7c3aed 0%, #6366f1 45%, #0ea5e9 100%)",
    headerTextColor: "#ffffff",
    services: [
      {
        id: "ws-1",
        title: "Sales Trends & Analytics",
        desc: "Monitor live conversion velocity, revenue targets, and performance charts in real-time.",
        icon: "fa-solid fa-chart-line",
        iconColor: "#7c3aed",
        badge: "Live Trends",
        link: "#",
        image: "/Cloudinary-images/worksensy-screen-1.png",
        points: [
          "Live conversion velocity & win rates",
          "Revenue target forecasting & pacing",
          "Sales rep activity & efficiency radar",
        ],
      },
      {
        id: "ws-2",
        title: "Leads Overview & Table",
        desc: "Centralized lead repository with 1-click WhatsApp connect, status tags, and export filters.",
        icon: "fa-solid fa-users",
        iconColor: "#6366f1",
        badge: "Smart Funnel",
        link: "#",
        image: "/Cloudinary-images/worksensy-screen-2.png",
        points: [
          "1-Click direct WhatsApp & call trigger",
          "Multi-source lead capture (Meta, Google, Web)",
          "Dynamic tag filters & instant bulk export",
        ],
      },
      {
        id: "ws-3",
        title: "Marketing ROI & Distribution",
        desc: "Analyze ad channel attribution and automate round-robin lead allocation to sales agents.",
        icon: "fa-solid fa-bullseye",
        iconColor: "#0284c7",
        badge: "Round-Robin",
        link: "#",
        image: "/Cloudinary-images/worksensy-screen-3.png",
        points: [
          "Ad channel attribution & CAC analytics",
          "Automated round-robin agent assignment",
          "Campaign conversion vs ad spend tracking",
        ],
      },
      {
        id: "ws-4",
        title: "Pipeline & Follow-Up Radar",
        desc: "Visual stage pipeline funnel with automated overdue reminders and instant scheduling.",
        icon: "fa-solid fa-calendar-check",
        iconColor: "#0ea5e9",
        badge: "Zero Missed Deals",
        link: "#",
        image: "/Cloudinary-images/worksensy-screen-4.png",
        points: [
          "Visual drag-and-drop deal pipeline",
          "Smart overdue deal alerts & nudges",
          "Automated follow-up reminder calendar",
        ],
      },
    ],
  },
  {
    id: "beeship",
    title: "BeeShip",
    subtitle: "Multi-Courier Shipping & Logistics Suite",
    logo: "/Cloudinary-images/beeship.png",
    isWideLogo: true,
    websiteUrl: "https://beeship.in/login",
    bgGradient: "linear-gradient(135deg, #0284c7 0%, #06b6d4 50%, #10b981 100%)",
    headerTextColor: "#ffffff",
    services: [
      {
        id: "s2-1",
        title: "Multi-Carrier Shipping Hub",
        desc: "Unified console to compare courier performance, book shipments, and track volume metrics.",
        icon: "fa-solid fa-truck-fast",
        iconColor: "#0284c7",
        badge: "Carrier Radar",
        link: "#",
        image: "/Cloudinary-images/beeship-screen-1.png",
        points: [
          "Courier performance matrix (Bluedart, Delhivery)",
          "1-Click order creation & bulk shipment upload",
          "Automated courier rate comparison & routing",
        ],
      },
      {
        id: "s2-2",
        title: "Unified Shipment Tracking",
        desc: "Centralized order book with real-time status updates, Shopify integration, and courier AWB sync.",
        icon: "fa-solid fa-boxes-packing",
        iconColor: "#059669",
        badge: "Live AWB Sync",
        link: "#",
        image: "/Cloudinary-images/beeship-screen-2.png",
        points: [
          "Multi-store order sync (Shopify, WooCommerce)",
          "Live milestone AWB tracking with stage filters",
          "Automated Estimated Delivery Date (EDD) radar",
        ],
      },
      {
        id: "s2-3",
        title: "Smart NDR & Re-Attempt Engine",
        desc: "Automated Non-Delivery Report workflows to convert failed delivery attempts into delivered orders.",
        icon: "fa-solid fa-arrows-rotate",
        iconColor: "#0891b2",
        badge: "Zero RTO Loss",
        link: "#",
        image: "/Cloudinary-images/beeship-screen-3.png",
        points: [
          "Automated buyer WhatsApp & SMS re-attempt flow",
          "Real-time NDR remarks & courier ticket escalation",
          "Reduce costly RTO returns by up to 38%",
        ],
      },
      {
        id: "s2-4",
        title: "Billing & Shipping Rate Cards",
        desc: "Transparent multi-courier billing rates across India with instant B2C shipping rate calculator.",
        icon: "fa-solid fa-receipt",
        iconColor: "#10b981",
        badge: "B2C Calculator",
        link: "#",
        image: "/Cloudinary-images/beeship-screen-4.png",
        points: [
          "Pre-negotiated city, state & metro rate slabs",
          "Transparent COD fee & weight anomaly shield",
          "Instant B2C rate calculator & GST tax invoices",
        ],
      },
    ],
  },
  {
    id: "cartsensy",
    title: "CartSensy",
    subtitle: "Abandoned Cart & Revenue Recovery System",
    icon: "fa-solid fa-cart-arrow-down",
    bgGradient: "linear-gradient(135deg, #ea580c 0%, #f59e0b 50%, #84cc16 100%)",
    headerTextColor: "#ffffff",
    services: [
      {
        id: "s3-1",
        title: "Real-Time Recovery Dashboard",
        desc: "Monitor live checkout leads, abandoned carts, converted orders, and recover lost revenue in real time.",
        icon: "fa-solid fa-chart-pie",
        iconColor: "#ea580c",
        badge: "Live Telemetry",
        link: "#",
        image: "/Cloudinary-images/cartsensy-screen-1.png",
        imageCenter: true,
        points: [
          "Live checkout lead tracking & abandonment alerts",
          "Revenue loss & converted order analytics",
          "Custom status filters & instant Excel export",
        ],
      },
      {
        id: "s3-2",
        title: "Shopify & GoKwik Webhook Sync",
        desc: "Connect your eCommerce store in minutes with plug-and-play webhooks for Shopify and GoKwik.",
        icon: "fa-solid fa-code-merge",
        iconColor: "#16a34a",
        badge: "1-Click Sync",
        link: "#",
        image: "/Cloudinary-images/cartsensy-screen-2.png",
        imageCenter: true,
        points: [
          "Instant Shopify checkout creation webhook listener",
          "Native GoKwik 1-click checkout integration",
          "Zero-code setup with automatic store handshake",
        ],
      },
      {
        id: "s3-3",
        title: "Instant Store Onboarding",
        desc: "Seamless merchant registration designed to start recovering high-intent abandoned carts within minutes.",
        icon: "fa-solid fa-store",
        iconColor: "#ca8a04",
        badge: "Fast Launch",
        link: "#",
        image: "/Cloudinary-images/cartsensy-screen-3.png",
        imageCenter: true,
        points: [
          "Rapid 60-second store setup & platform pairing",
          "Multi-platform support (Shopify, WooCommerce)",
          "Automated revenue recovery engine activation",
        ],
      },
      {
        id: "s3-4",
        title: "Secure Merchant Portal",
        desc: "Enterprise-grade secure portal for store owners to manage recovery campaigns, agents, and webhooks.",
        icon: "fa-solid fa-shield-halved",
        iconColor: "#65a30d",
        badge: "Encrypted Auth",
        link: "#",
        image: "/Cloudinary-images/cartsensy-screen-4.png",
        imageCenter: true,
        points: [
          "Role-based access control & multi-store manager",
          "Encrypted credential auth & session safeguards",
          "Direct store telemetry & webhook health logs",
        ],
      },
    ],
  },
  {
    id: "metaautopost",
    title: "Meta AutoPost",
    subtitle: "Multi-Account Social Media Scheduler",
    icon: "fa-solid fa-share-nodes",
    bgGradient: "linear-gradient(135deg, #4f46e5 0%, #9333ea 50%, #ec4899 100%)",
    headerTextColor: "#ffffff",
    services: [
      {
        id: "s4-1",
        title: "Instant Capital Financing",
        desc: "Revenue-based working capital financing to scale your inventory and marketing ads.",
        icon: "fa-solid fa-coins",
        iconColor: "#6366f1",
        badge: "Fast Approvals",
        link: "#",
        visualType: "capital",
        points: [
          "Fast revenue-based working capital loans",
          "Collateral-free approval within 24 hours",
          "Repay as you grow with flexible revenue share",
        ],
      },
      {
        id: "s4-2",
        title: "Unified Returns & Exchanges",
        desc: "Branded self-serve return portal with instant refunds and reverse pickup automation.",
        icon: "fa-solid fa-arrow-right-arrow-left",
        iconColor: "#9333ea",
        badge: "Self-Serve Portal",
        link: "#",
        visualType: "returns",
        points: [
          "White-labeled self-serve return portal",
          "Automated reverse pickup courier booking",
          "Instant store credit or bank refund flow",
        ],
      },
      {
        id: "s4-3",
        title: "Enterprise REST APIs",
        desc: "Developer-first GraphQL and Webhooks that integrate seamlessly into bespoke ERPs.",
        icon: "fa-solid fa-code",
        iconColor: "#db2777",
        badge: "Sub-10ms Latency",
        link: "#",
        visualType: "api",
        points: [
          "GraphQL & REST APIs with sub-10ms response",
          "Real-time webhooks for 50+ event triggers",
          "SDKs for Node, Python, PHP, and Go",
        ],
      },
      {
        id: "s4-4",
        title: "Dedicated SLA Support",
        desc: "24/7 dedicated account manager, priority incident escalation and 99.99% uptime guarantee.",
        icon: "fa-solid fa-headset",
        iconColor: "#7c3aed",
        badge: "24/7 Priority",
        link: "#",
        visualType: "support",
        points: [
          "Dedicated Enterprise account manager",
          "Guaranteed 99.99% system uptime SLA",
          "Priority 15-minute response on critical issues",
        ],
      },
    ],
  },
];

// ════════════════════════════════════════════════════════════════════
// INNER SERVICES ROW WITH SILKY AUTO-SCROLL ON MOBILE
// ════════════════════════════════════════════════════════════════════
function DeckServicesRow({ card, handleTriggerAccess }) {
  const rowRef = useRef(null);
  const [activeIndex, setActiveIndex] = React.useState(0);
  const isInteractingRef = useRef(false);
  const resumeTimerRef = useRef(null);
  const [isInView, setIsInView] = React.useState(true);

  // Detect when this card is in viewport on mobile
  useEffect(() => {
    const el = rowRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Smooth auto-scroll loop for mobile (<768px)
  useEffect(() => {
    const el = rowRef.current;
    if (!el || !isInView) return;

    const interval = setInterval(() => {
      if (window.innerWidth >= 768) return;
      if (isInteractingRef.current) return;

      const cards = el.querySelectorAll(".bms-service-card");
      if (!cards || cards.length <= 1) return;

      setActiveIndex((prev) => {
        const next = (prev + 1) % cards.length;
        const target = cards[next];
        if (target) {
          el.scrollTo({
            left: target.offsetLeft - el.offsetLeft,
            behavior: "smooth",
          });
        }
        return next;
      });
    }, 2800);

    return () => clearInterval(interval);
  }, [isInView, card.services.length]);

  // Sync active dot indicator when user manually swipes
  const handleScroll = () => {
    const el = rowRef.current;
    if (!el) return;
    const cards = el.querySelectorAll(".bms-service-card");
    if (!cards || cards.length === 0) return;

    const scrollLeft = el.scrollLeft;
    let closestIndex = 0;
    let minDiff = Infinity;
    cards.forEach((c, idx) => {
      const cardOffset = c.offsetLeft - el.offsetLeft;
      const diff = Math.abs(cardOffset - scrollLeft);
      if (diff < minDiff) {
        minDiff = diff;
        closestIndex = idx;
      }
    });
    setActiveIndex(closestIndex);
  };

  const pauseAutoScroll = () => {
    isInteractingRef.current = true;
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
  };

  const resumeAutoScroll = () => {
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = setTimeout(() => {
      isInteractingRef.current = false;
    }, 3500);
  };

  const scrollToIndex = (index) => {
    const el = rowRef.current;
    if (!el) return;
    const cards = el.querySelectorAll(".bms-service-card");
    const target = cards[index];
    if (target) {
      pauseAutoScroll();
      el.scrollTo({
        left: target.offsetLeft - el.offsetLeft,
        behavior: "smooth",
      });
      setActiveIndex(index);
      resumeAutoScroll();
    }
  };

  return (
    <div className="bms-services-row-wrap">
      <div
        className="bms-services-row"
        ref={rowRef}
        onScroll={handleScroll}
        onTouchStart={pauseAutoScroll}
        onTouchEnd={resumeAutoScroll}
        onPointerDown={pauseAutoScroll}
        onPointerUp={resumeAutoScroll}
      >
        {card.services.map((srv) => (
          <a
            key={srv.id}
            href={srv.link}
            className="bms-service-card"
            onClick={(e) => {
              if (srv.link === "#") {
                e.preventDefault();
                handleTriggerAccess();
              }
            }}
          >
            {/* Visual Graphic Area */}
            <div className="bms-service-visual">
              {srv.image ? (
                <div className="bms-service-real-img-wrap">
                  <div className="bms-browser-bar">
                    <span className="bms-browser-dot bms-dot-red" />
                    <span className="bms-browser-dot bms-dot-yellow" />
                    <span className="bms-browser-dot bms-dot-green" />
                    <span className="bms-browser-url-mock">
                      {card.id === "worksensy"
                        ? "app.worksensy.com"
                        : card.id === "beeship"
                        ? "app.beeship.in"
                        : card.id === "cartsensy"
                        ? "app.cartsensy.io"
                        : "app.platform.io"}
                    </span>
                  </div>
                  <div className="bms-real-img-viewport">
                    <img
                      src={srv.image}
                      alt={srv.title}
                      className={`bms-service-real-img ${srv.imageCenter ? "bms-img-center" : ""}`}
                      loading="lazy"
                    />
                    <div className="bms-service-img-overlay" />
                  </div>
                </div>
              ) : (
                <div className="bms-service-mock-graphic">
                  <div className="bms-mock-illustration-slot">
                    {srv.visualType === "shipping" && (
                      <div className="bms-mock-shipping-card">
                        <div className="bms-mock-date">
                          <span>Estimated Delivery</span>
                          <strong>24 hrs Express</strong>
                        </div>
                        <div className="bms-mock-box-3d">
                          <i className="fa-solid fa-box-open" />
                        </div>
                      </div>
                    )}

                    {srv.visualType === "quick" && (
                      <div className="bms-mock-map-card">
                        <div className="bms-mock-pulse-dot" />
                        <span className="bms-mock-route-tag">
                          <i className="fa-solid fa-route" /> 15 Mins
                        </span>
                      </div>
                    )}

                    {srv.visualType === "cargo" && (
                      <div className="bms-mock-cargo-card">
                        <i className="fa-solid fa-truck-moving" />
                        <span>Multi-Modal B2B</span>
                      </div>
                    )}

                    {srv.visualType === "fulfillment" && (
                      <div className="bms-mock-store-pills">
                        <span className="bms-pill-badge bms-pill-shopify">
                          <i className="fa-brands fa-shopify" />
                        </span>
                        <span className="bms-pill-badge bms-pill-woo">
                          <i className="fa-brands fa-wordpress" />
                        </span>
                        <span className="bms-pill-badge bms-pill-amazon">
                          <i className="fa-brands fa-amazon" />
                        </span>
                      </div>
                    )}

                    {srv.visualType === "global" && (
                      <div className="bms-mock-globe-card">
                        <i className="fa-solid fa-earth-americas" />
                        <span>Global Direct</span>
                      </div>
                    )}

                    {srv.visualType === "customs" && (
                      <div className="bms-mock-doc-card">
                        <i className="fa-solid fa-stamp" />
                        <span>Auto IOSS Cleared</span>
                      </div>
                    )}

                    {srv.visualType === "currency" && (
                      <div className="bms-mock-currency-card">
                        <span className="bms-currency-chip">$ USD</span>
                        <span className="bms-currency-chip">€ EUR</span>
                        <span className="bms-currency-chip">₹ INR</span>
                      </div>
                    )}

                    {srv.visualType === "channels" && (
                      <div className="bms-mock-sync-card">
                        <i className="fa-solid fa-arrows-rotate fa-spin" />
                        <span>Live Cloud Sync</span>
                      </div>
                    )}

                    {srv.visualType === "checkout" && (
                      <div className="bms-mock-checkout-card">
                        <span className="bms-fast-pill">⚡ 1-Click</span>
                        <div className="bms-mock-address-bar" />
                      </div>
                    )}

                    {srv.visualType === "whatsapp" && (
                      <div className="bms-mock-chat-bubble">
                        <i className="fa-brands fa-whatsapp" />
                        <span>Order Confirmed! 🎉</span>
                      </div>
                    )}

                    {srv.visualType === "fraud" && (
                      <div className="bms-mock-shield-card">
                        <i className="fa-solid fa-shield-halved" />
                        <span>Zero Fraud Score</span>
                      </div>
                    )}

                    {srv.visualType === "trends" && (
                      <div className="bms-mock-bar-chart">
                        <span style={{ height: "45%" }} />
                        <span style={{ height: "70%" }} />
                        <span style={{ height: "95%" }} />
                        <span style={{ height: "60%" }} />
                      </div>
                    )}

                    {srv.visualType === "capital" && (
                      <div className="bms-mock-capital-card">
                        <i className="fa-solid fa-arrow-trend-up" />
                        <span>Instant Limit</span>
                      </div>
                    )}

                    {srv.visualType === "returns" && (
                      <div className="bms-mock-return-card">
                        <i className="fa-solid fa-rotate-left" />
                        <span>Instant Refund</span>
                      </div>
                    )}

                    {srv.visualType === "api" && (
                      <div className="bms-mock-code-card">
                        <code>&lt;200 OK API/&gt;</code>
                      </div>
                    )}

                    {srv.visualType === "support" && (
                      <div className="bms-mock-support-card">
                        <i className="fa-solid fa-headset" />
                        <span>&lt;1m Response</span>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Content Area */}
            <div className="bms-service-content">
              <div className="bms-service-header-row">
                <div className="bms-service-title-flex">
                  <span
                    className="bms-service-icon"
                    style={{ color: srv.iconColor }}
                  >
                    <i className={srv.icon} />
                  </span>
                  <h3 className="bms-service-name">{srv.title}</h3>
                </div>
                <span className="bms-service-arrow-btn">
                  <i className="fa-solid fa-arrow-up-right-from-square" />
                </span>
              </div>
              <p className="bms-service-desc">{srv.desc}</p>

              {/* Point-wise feature bullet list */}
              {srv.points && srv.points.length > 0 && (
                <ul className="bms-service-points">
                  {srv.points.map((pt, pIdx) => (
                    <li key={pIdx} className="bms-point-item">
                      <span className="bms-point-bullet">
                        <i className="fa-solid fa-check" />
                      </span>
                      <span className="bms-point-text">{pt}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Bottom explore footer */}
              <div className="bms-service-footer">
                <span className="bms-service-explore-text">Explore feature</span>
                <i className="fa-solid fa-arrow-right bms-service-explore-icon" />
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* Pagination indicator dots on mobile */}
      <div className="bms-carousel-dots" aria-hidden="true">
        {card.services.map((_, idx) => (
          <button
            key={idx}
            type="button"
            className={`bms-carousel-dot ${idx === activeIndex ? "active" : ""}`}
            onClick={(e) => {
              e.stopPropagation();
              scrollToIndex(idx);
            }}
            aria-label={`Slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function Products({ openPopup }) {
  const [openFaqIndex, setOpenFaqIndex] = React.useState(null);
  const deckWrapperRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    document.title = "Products Ecosystem | Brandmingo";
    window.scrollTo(0, 0);
  }, []);

  // ════════════════════════════════════════════════════════════════════
  // GSAP SCROLLTRIGGER: SHIPROCKET-STYLE LAYERED STACK DECK
  // ════════════════════════════════════════════════════════════════════
  useEffect(() => {
    const wrapper = deckWrapperRef.current;
    if (!wrapper) return;

    const cards = cardsRef.current.filter(Boolean);
    if (cards.length < 2) return;

    const mm = gsap.matchMedia();

    // ── DESKTOP & TABLET ANIMATION (min-width: 768px) ──
    mm.add("(min-width: 768px)", () => {
      const STACK_STEP = 28; // tight, sleek stacked deck gap (reduced gap)
      const ACTIVE_SCALE = 1.03;
      const STACKED_SCALE = 0.965;

      const getInnerCards = (card) => card?.querySelectorAll(".bms-service-card");

      // ── Initial State at scroll position 0 ──
      // Card 0: Active, scaled up on GPU
      gsap.set(cards[0], {
        y: 0,
        top: 0,
        scale: ACTIVE_SCALE,
        transformOrigin: "center top",
        opacity: 1,
        zIndex: 1,
        force3D: true,
      });
      if (getInnerCards(cards[0])) {
        gsap.set(getInnerCards(cards[0]), { y: 0, opacity: 1, scale: 1, force3D: true });
      }

      // Cards 1, 2, 3: Start below viewport, stacked scale, inner cards prepared to rise
      cards.slice(1).forEach((card, i) => {
        gsap.set(card, {
          yPercent: 110,
          top: (i + 1) * STACK_STEP,
          scale: STACKED_SCALE,
          transformOrigin: "center top",
          opacity: 0.92,
          zIndex: i + 2,
          force3D: true,
        });
        if (getInnerCards(card)) {
          gsap.set(getInnerCards(card), {
            y: 35,
            opacity: 0.25,
            scale: 0.94,
            force3D: true,
          });
        }
      });

      // ── Silky-Smooth Scrubbed Pinning Timeline ──
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapper,
          start: "top 75px",
          end: "+=1900",
          pin: true,
          scrub: 0.5,
          anticipatePin: 1,
          fastScrollEnd: true,
        },
      });

      // ── TRANSITION 1: Card 0 shrinks → Card 1 rises & its inner cards float up ──
      tl.to(
        cards[0],
        {
          scale: STACKED_SCALE,
          opacity: 0.92,
          ease: "none",
          duration: 1,
        },
        0
      );
      if (getInnerCards(cards[0])) {
        tl.to(
          getInnerCards(cards[0]),
          { y: 12, opacity: 0.8, scale: 0.98, ease: "none", duration: 0.8 },
          0
        );
      }

      tl.to(
        cards[1],
        {
          yPercent: 0,
          scale: ACTIVE_SCALE,
          opacity: 1,
          ease: "none",
          duration: 1,
        },
        0
      );
      if (getInnerCards(cards[1])) {
        tl.to(
          getInnerCards(cards[1]),
          {
            y: 0,
            opacity: 1,
            scale: 1,
            stagger: 0.05,
            ease: "none",
            duration: 0.85,
          },
          0.12
        );
      }

      // ── TRANSITION 2: Card 1 shrinks → Card 2 rises & its inner cards float up ──
      tl.to(
        cards[1],
        {
          scale: STACKED_SCALE,
          opacity: 0.92,
          ease: "none",
          duration: 1,
        },
        1
      );
      if (getInnerCards(cards[1])) {
        tl.to(
          getInnerCards(cards[1]),
          { y: 12, opacity: 0.8, scale: 0.98, ease: "none", duration: 0.8 },
          1
        );
      }

      tl.to(
        cards[2],
        {
          yPercent: 0,
          scale: ACTIVE_SCALE,
          opacity: 1,
          ease: "none",
          duration: 1,
        },
        1
      );
      if (getInnerCards(cards[2])) {
        tl.to(
          getInnerCards(cards[2]),
          {
            y: 0,
            opacity: 1,
            scale: 1,
            stagger: 0.05,
            ease: "none",
            duration: 0.85,
          },
          1.12
        );
      }

      // ── TRANSITION 3: Card 2 shrinks → Card 3 rises & its inner cards float up ──
      tl.to(
        cards[2],
        {
          scale: STACKED_SCALE,
          opacity: 0.92,
          ease: "none",
          duration: 1,
        },
        2
      );
      if (getInnerCards(cards[2])) {
        tl.to(
          getInnerCards(cards[2]),
          { y: 12, opacity: 0.8, scale: 0.98, ease: "none", duration: 0.8 },
          2
        );
      }

      tl.to(
        cards[3],
        {
          yPercent: 0,
          scale: ACTIVE_SCALE,
          opacity: 1,
          ease: "none",
          duration: 1,
        },
        2
      );
      if (getInnerCards(cards[3])) {
        tl.to(
          getInnerCards(cards[3]),
          {
            y: 0,
            opacity: 1,
            scale: 1,
            stagger: 0.05,
            ease: "none",
            duration: 0.85,
          },
          2.12
        );
      }

      // Small release buffer
      tl.to({}, { duration: 0.15 });
    });

    // ── MOBILE ANIMATION (<768px) ──
    mm.add("(max-width: 767px)", () => {
      const MOBILE_STEP = 12;
      const ACTIVE_SCALE = 1.02;
      const STACKED_SCALE = 0.975;
      const getInnerCards = (card) => card?.querySelectorAll(".bms-service-card");

      gsap.set(cards[0], {
        y: 0,
        top: 0,
        scale: ACTIVE_SCALE,
        transformOrigin: "center top",
        zIndex: 1,
        opacity: 1,
        force3D: true,
      });

      cards.slice(1).forEach((card, i) => {
        gsap.set(card, {
          yPercent: 110,
          top: (i + 1) * MOBILE_STEP,
          scale: STACKED_SCALE,
          transformOrigin: "center top",
          zIndex: i + 2,
          opacity: 0.92,
          force3D: true,
        });
        if (getInnerCards(card)) {
          gsap.set(getInnerCards(card), { y: 20, opacity: 0.4, force3D: true });
        }
      });

      const tlMobile = gsap.timeline({
        scrollTrigger: {
          trigger: wrapper,
          start: "top 65px",
          end: "+=1300",
          pin: true,
          scrub: 0.4,
          anticipatePin: 1,
          fastScrollEnd: true,
        },
      });

      tlMobile
        .to(cards[0], { scale: STACKED_SCALE, opacity: 0.92, ease: "none", duration: 1 }, 0)
        .to(cards[1], { yPercent: 0, scale: ACTIVE_SCALE, opacity: 1, ease: "none", duration: 1 }, 0);
      if (getInnerCards(cards[1])) {
        tlMobile.to(getInnerCards(cards[1]), { y: 0, opacity: 1, stagger: 0.04, ease: "none", duration: 0.8 }, 0.1);
      }

      tlMobile
        .to(cards[1], { scale: STACKED_SCALE, opacity: 0.92, ease: "none", duration: 1 }, 1)
        .to(cards[2], { yPercent: 0, scale: ACTIVE_SCALE, opacity: 1, ease: "none", duration: 1 }, 1);
      if (getInnerCards(cards[2])) {
        tlMobile.to(getInnerCards(cards[2]), { y: 0, opacity: 1, stagger: 0.04, ease: "none", duration: 0.8 }, 1.1);
      }

      tlMobile
        .to(cards[2], { scale: STACKED_SCALE, opacity: 0.92, ease: "none", duration: 1 }, 2)
        .to(cards[3], { yPercent: 0, scale: ACTIVE_SCALE, opacity: 1, ease: "none", duration: 1 }, 2);
      if (getInnerCards(cards[3])) {
        tlMobile.to(getInnerCards(cards[3]), { y: 0, opacity: 1, stagger: 0.04, ease: "none", duration: 0.8 }, 2.1);
      }

      tlMobile.to({}, { duration: 0.1 });
    });

    return () => {
      mm.revert();
    };
  }, []);

  const handleTriggerAccess = () => {
    if (openPopup) openPopup();
    else window.dispatchEvent(new CustomEvent("open-enquiry-popup"));
  };

  return (
    <div className="bms-products-page">
      <SEO
        title="Our Products | Modern SaaS Workflow Ecosystem | Brandmingo"
        description="Explore Brandmingo's unified suite of modern business solutions, AI growth tools, and scaling infrastructure."
        canonical="https://brandmingo.com/products"
        keywords="Brandmingo products, unified shipping, AI marketing tools, ecommerce growth"
      />

      {/* Ambient background glows */}
      <div className="bms-ambient-glow bms-ambient-glow--1" />
      <div className="bms-ambient-glow bms-ambient-glow--2" />

      {/* ══ HERO INTRO SECTION ═════════════════════════════════════ */}
      <section className="bms-hero-intro">
        <div className="bms-container">
          <div className="bms-intro-badge">
            <i className="fa-solid fa-sparkles" />
            <span>Product Ecosystem</span>
          </div>
          <h1 className="bms-intro-title">
            Engineered for High-Growth{" "}
            <span className="bms-gradient-text">Modern Businesses</span>
          </h1>
          <p className="bms-intro-desc">
            A cohesive suite of autonomous tools designed to streamline your reach,
            team velocity, client relationships, and operations.
          </p>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════
          PREMIUM SCROLL-DRIVEN LAYERED CARD DECK (SHIPROCKET STYLE)
          ═════════════════════════════════════════════════════════════ */}
      <section className="bms-deck-section" ref={deckWrapperRef}>
        <div className="bms-deck-container">
          <div className="bms-deck-viewport">
            {DECK_CARDS_DATA.map((card, cIdx) => (
              <div
                key={card.id}
                ref={(el) => (cardsRef.current[cIdx] = el)}
                className={`bms-deck-panel bms-deck-panel--${cIdx + 1}`}
                style={{
                  background: card.bgGradient,
                }}
              >
                {/* ── CARD HEADER: Icon Box & Main Heading + Subtitle ── */}
                <div className="bms-deck-panel-header">
                  <div className="bms-deck-title-row">
                    <div className="bms-deck-title-left">
                      {card.isWideLogo ? (
                        <div className="bms-deck-brand-pill">
                          <img
                            src={card.logo}
                            alt={card.title}
                            className="bms-deck-brand-img"
                          />
                        </div>
                      ) : (
                        <div className="bms-deck-icon-box">
                          {card.logo ? (
                            <img
                              src={card.logo}
                              alt={card.title}
                              className="bms-deck-logo-img"
                            />
                          ) : (
                            <i className={card.icon} />
                          )}
                        </div>
                      )}
                      <div className="bms-deck-title-col">
                        {!card.isWideLogo && (
                          <h2
                            className="bms-deck-main-title"
                            style={{ color: card.headerTextColor }}
                          >
                            {card.title}
                          </h2>
                        )}
                        {card.subtitle && (
                          <p
                            className="bms-deck-subtitle"
                            style={{ color: card.headerTextColor }}
                          >
                            {card.subtitle}
                          </p>
                        )}
                      </div>
                    </div>

                    {card.websiteUrl && (
                      <a
                        href={card.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bms-deck-website-btn"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <span>Visit Website</span>
                        <i className="fa-solid fa-arrow-up-right-from-square" />
                      </a>
                    )}
                  </div>
                </div>

                {/* ── INNER 4 SERVICE CARDS (WITH AUTO-SCROLL ON MOBILE) ── */}
                <DeckServicesRow
                  card={card}
                  handleTriggerAccess={handleTriggerAccess}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FAQ SECTION ════════════════════════════════════════════ */}
      <section className="prd-faq-section">
        <div className="bms-container">
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
        <div className="bms-container">
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
    </div>
  );
}
