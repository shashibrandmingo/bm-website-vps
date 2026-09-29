import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import "./Performancslider.css";

const projectsData = [
  {
    id: 1,
    name: "D2C Beauty Brand Sales Campaign",
    category: "META ADS PERFORMANCE MARKETING",
    preview: "#",
    caseStudy: "/portfolio",
    images: [
      "/Cloudinary-images/WhatsApp_Image_2026-07-23_at_4.40.46_PM_jhekrw.jpg",
    ],
  },

  {
    id: 2,
    name: "Education Lead Generation Campaign",
    category: "META LEAD GENERATION CAMPAIGN",
    preview: "#",
    caseStudy: "/portfolio",
    images: [
      "/Cloudinary-images/WhatsApp_Image_2026-07-23_at_4.40.50_PM_obqsar.jpg",
    ],
  },

  {
    id: 3,
    name: "Multi-State Education Lead Campaign",
    category: "META LEAD GENERATION",
    preview: "#",
    caseStudy: "/portfolio",
    images: [
      "/Cloudinary-images/WhatsApp_Image_2026-07-23_at_4.40.42_PM_nqbjyi.jpg",
    ],
  },

  {
    id: 4,
    name: "Shopify Store Revenue Scaling",
    category: "SHOPIFY GROWTH & ANALYTICS",
    preview: "#",
    caseStudy: "/portfolio",
    images: [
      "/Cloudinary-images/WhatsApp_Image_2026-07-23_at_4.40.48_PM_ffaayw.jpg",
    ],
  },

  {
    id: 5,
    name: "E-Commerce ROAS Optimization",
    category: "META ADS ROAS OPTIMIZATION",
    preview: "#",
    caseStudy: "/portfolio",
    images: [
      "/Cloudinary-images/WhatsApp_Image_2026-07-23_at_4.40.44_PM_togst5.jpg",
    ],
  },
];

const CARD_GAP = 24;
const SPEED = 0.6;

const Performancslider = () => {
  const trackRef = useRef(null);
  const posRef = useRef(0);
  const rafRef = useRef(null);
  const isPausedRef = useRef(false);

  // Drag states
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const startPosRef = useRef(0);

  const isTouchDraggingRef = useRef(false);
  const touchStartXRef = useRef(0);
  const touchStartPosRef = useRef(0);
  const touchMovedRef = useRef(false);

  // Modal & Lightbox states
  const [popup, setPopup] = useState(null);
  const [activeImgIndex, setActiveImgIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const allCards = [
    ...projectsData,
    ...projectsData,
    ...projectsData,
    ...projectsData,
  ];

  const getCardWidth = () => {
    if (window.innerWidth <= 479) return 240;
    if (window.innerWidth <= 767) return 270;
    return 320;
  };

  useEffect(() => {
    const animate = () => {
      if (!isPausedRef.current) {
        posRef.current -= SPEED;
        const track = trackRef.current;
        if (track) {
          const cardWidth = getCardWidth();
          const singleSetWidth = projectsData.length * (cardWidth + CARD_GAP);
          if (Math.abs(posRef.current) >= singleSetWidth) {
            posRef.current = 0;
          }
          track.style.transform = `translate3d(${posRef.current}px, 0, 0)`;
        }
      }
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  // Close on Escape, navigate lightbox with arrow keys
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") {
        if (lightboxOpen) closeLightbox();
        else if (popup) closePopup();
      }
      if (lightboxOpen && popup?.images?.length > 1) {
        if (e.key === "ArrowRight") nextLightboxImg();
        if (e.key === "ArrowLeft") prevLightboxImg();
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lightboxOpen, popup, activeImgIndex]);

  /* ── Mouse Handlers ── */
  const handleMouseDown = (e) => {
    isDraggingRef.current = true;
    isPausedRef.current = true;
    startXRef.current = e.clientX;
    startPosRef.current = posRef.current;
  };

  const handleMouseMove = (e) => {
    if (!isDraggingRef.current) return;
    const dx = e.clientX - startXRef.current;
    posRef.current = startPosRef.current + dx;
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
    if (!popup && !lightboxOpen) isPausedRef.current = false;
  };

  const handleWheel = (e) => {
    isPausedRef.current = true;
    posRef.current -= e.deltaY * 0.4;
  };

  /* ── Touch Handlers ── */
  const handleTouchStart = (e) => {
    isPausedRef.current = true;
    isTouchDraggingRef.current = true;
    touchMovedRef.current = false;
    touchStartXRef.current = e.touches[0].clientX;
    touchStartPosRef.current = posRef.current;
  };

  const handleTouchMove = (e) => {
    if (!isTouchDraggingRef.current) return;
    const dx = e.touches[0].clientX - touchStartXRef.current;
    if (Math.abs(dx) > 12) {
      touchMovedRef.current = true;
    }
    posRef.current = touchStartPosRef.current + dx;
  };

  const handleTouchEnd = () => {
    isTouchDraggingRef.current = false;
    if (!popup && !lightboxOpen) isPausedRef.current = false;
  };

  /* ── Detail Popup Handlers ── */
  const openPopup = (p, e) => {
    if (touchMovedRef.current) return;
    e.stopPropagation();
    setPopup(p);
    setActiveImgIndex(0);
    isPausedRef.current = true;
    document.body.style.overflow = "hidden";
  };

  const closePopup = () => {
    setPopup(null);
    setLightboxOpen(false);
    isPausedRef.current = false;
    document.body.style.overflow = "";
  };

  /* ── Lightbox Handlers (full-image viewer) ── */
  const openLightbox = (idx, e) => {
    if (e) e.stopPropagation();
    setActiveImgIndex(idx);
    setLightboxOpen(true);
  };

  const closeLightbox = (e) => {
    if (e) e.stopPropagation();
    setLightboxOpen(false);
  };

  const nextLightboxImg = (e) => {
    if (e) e.stopPropagation();
    if (!popup || !popup.images) return;
    setActiveImgIndex((prev) => (prev + 1) % popup.images.length);
  };

  const prevLightboxImg = (e) => {
    if (e) e.stopPropagation();
    if (!popup || !popup.images) return;
    setActiveImgIndex(
      (prev) => (prev - 1 + popup.images.length) % popup.images.length,
    );
  };

  return (
    <>
      <section className="psl-section">
        {/* Section Header */}
        <div className="psl-header">
          <div className="psl-subtitle-tag">
            <span className="psl-subtitle-dot" />
            PORTFOLIO
          </div>
          <h2 className="psl-title">
            Creative <span>Archive</span>
          </h2>
        </div>

        {/* Track Slider */}
        <div
          className="psl-track-wrapper"
          onMouseEnter={() => (isPausedRef.current = true)}
          onMouseLeave={() => {
            if (!popup && !lightboxOpen) isPausedRef.current = false;
            handleMouseUp();
          }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onWheel={handleWheel}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onTouchCancel={handleTouchEnd}
        >
          <div ref={trackRef} className="psl-track">
            {allCards.map((p, i) => {
              const cardNum = String((i % projectsData.length) + 1).padStart(
                2,
                "0",
              );
              return (
                <div
                  key={i}
                  className="psl-card"
                  onClick={(e) => openPopup(p, e)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") openPopup(p, e);
                  }}
                >
                  <div className="psl-card-img-container">
                    <span className="psl-card-index">{cardNum}</span>
                    <img
                      src={p.images[0]}
                      alt={p.name}
                      className="psl-card-img"
                      draggable="false"
                      loading="lazy"
                    />
                    <div className="psl-card-overlay" />
                  </div>

                  <div className="psl-card-content">
                    <span className="psl-card-cat">{p.category}</span>
                    <h3 className="psl-card-name">{p.name}</h3>

                    <div className="psl-card-footer">
                      <span className="psl-explore-text">View Details</span>
                      <div className="psl-arrow-btn">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <line x1="5" y1="12" x2="19" y2="12" />
                          <polyline points="12 5 19 12 12 19" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══ POPUP MODAL (PROJECT DETAILS) ══ */}
      {popup &&
        typeof document !== "undefined" &&
        createPortal(
          <div className="psl-popup-overlay" onClick={closePopup}>
            <div
              className="psl-popup-card"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="psl-popup-close"
                onClick={closePopup}
                title="Close"
                aria-label="Close modal"
              >
                ✕
              </button>

              {/* Gallery Left */}
              <div className="psl-popup-gallery">
                <div className="psl-side-thumbs">
                  {popup.images.map((img, idx) => (
                    <button
                      key={idx}
                      type="button"
                      className={`psl-thumb-item${activeImgIndex === idx ? " active" : ""}`}
                      onClick={() => setActiveImgIndex(idx)}
                      aria-label={`View image ${idx + 1}`}
                    >
                      <img
                        src={img}
                        alt={`${popup.name} thumbnail ${idx + 1}`}
                      />
                    </button>
                  ))}
                </div>
                <div
                  className="psl-main-view"
                  onClick={(e) => openLightbox(activeImgIndex, e)}
                  title="Click to view full image"
                >
                  <img
                    src={popup.images[activeImgIndex]}
                    alt={popup.name}
                    draggable="false"
                  />
                  <div className="psl-zoom-hint">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="11" cy="11" r="8" />
                      <line x1="21" y1="21" x2="16.65" y2="16.65" />
                      <line x1="11" y1="8" x2="11" y2="14" />
                      <line x1="8" y1="11" x2="14" y2="11" />
                    </svg>
                    Click to Zoom
                  </div>
                </div>
              </div>

              {/* Details */}
              <div className="psl-popup-info">
                <span className="psl-popup-cat">{popup.category}</span>
                <h3 className="psl-popup-name">{popup.name}</h3>

                <p className="psl-popup-desc">
                  This production-level campaign strategy focuses on data
                  analytics, ROAS optimization, and targeted audience engagement
                  for {popup.name}. Built with performance marketing and high
                  conversion standards in mind.
                </p>

                <div className="psl-popup-btns">
                  <a href="/portfolio" className="psl-btn-live">
                    VIEW PORTFOLIO
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>,
          document.body,
        )}

      {/* ══ PURE FULL-IMAGE LIGHTBOX MODAL ══ */}
      {lightboxOpen &&
        popup &&
        typeof document !== "undefined" &&
        createPortal(
          <div className="psl-lightbox-overlay" onClick={closeLightbox}>
            <div
              className="psl-lightbox-wrapper"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className="psl-lightbox-close"
                onClick={(e) => {
                  e.stopPropagation();
                  closeLightbox(e);
                }}
                onTouchEnd={(e) => {
                  e.stopPropagation();
                  closeLightbox(e);
                }}
                title="Close"
                aria-label="Close full image view"
              >
                ✕
              </button>

              <img
                src={popup.images[activeImgIndex]}
                alt={`${popup.name} full view`}
                className="psl-lightbox-img"
                draggable="false"
              />
            </div>
          </div>,
          document.body,
        )}
    </>
  );
};

export default Performancslider;
