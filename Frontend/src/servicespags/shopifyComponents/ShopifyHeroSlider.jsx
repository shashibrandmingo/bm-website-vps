import React, { useEffect, useRef, useState, useCallback } from "react";
import projectsData from "../../data/projects";
import PopUpPortfolio from "../../components/PopUpPortfolio/PopUpPortfolio";
import "./ShopifyHeroSlider.css";

/* ── Filter Shopify & Featured Store Projects ── */
const SHOPIFY_PROJECTS = projectsData.filter(
  (p) => p.type === "Shopify" || p.title === "Rajcrest Website",
);

const CARD_GAP = 18;
const SCROLL_SPEED = 0.65;

const ShopifyHeroSlider = () => {
  const trackRef = useRef(null);
  const posRef = useRef(0);
  const rafRef = useRef(null);
  const isPausedRef = useRef(false);

  // Mouse Drag Tracking
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const startPosRef = useRef(0);
  const movedRef = useRef(false);

  // Touch Swipe Tracking
  const isTouchDraggingRef = useRef(false);
  const touchStartXRef = useRef(0);
  const touchStartPosRef = useRef(0);
  const touchMovedRef = useRef(false);

  // Active Popup Project
  const [activeProject, setActiveProject] = useState(null);

  // Duplicate for smooth seamless loop
  const displayCards = [
    ...SHOPIFY_PROJECTS,
    ...SHOPIFY_PROJECTS,
    ...SHOPIFY_PROJECTS,
    ...SHOPIFY_PROJECTS,
  ];

  const getCardWidth = () => {
    if (window.innerWidth <= 480) return 215;
    if (window.innerWidth <= 768) return 235;
    if (window.innerWidth <= 1200) return 255;
    return 270;
  };

  /* ── Continuous Infinite Scroll Loop ── */
  useEffect(() => {
    const animate = () => {
      if (!isPausedRef.current && !activeProject) {
        posRef.current -= SCROLL_SPEED;
        const track = trackRef.current;
        if (track) {
          const cardWidth = getCardWidth();
          const singleSetWidth =
            SHOPIFY_PROJECTS.length * (cardWidth + CARD_GAP);
          if (Math.abs(posRef.current) >= singleSetWidth) {
            posRef.current = 0;
          }
          track.style.transform = `translate3d(${posRef.current}px, 0, 0)`;
        }
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [activeProject]);

  /* ── Mouse Drag Handlers ── */
  const handleMouseDown = (e) => {
    isDraggingRef.current = true;
    movedRef.current = false;
    startXRef.current = e.pageX;
    startPosRef.current = posRef.current;
    isPausedRef.current = true;
  };

  const handleMouseMove = (e) => {
    if (!isDraggingRef.current) return;
    const diff = e.pageX - startXRef.current;
    if (Math.abs(diff) > 4) {
      movedRef.current = true;
    }
    posRef.current = startPosRef.current + diff;
    if (trackRef.current) {
      trackRef.current.style.transform = `translate3d(${posRef.current}px, 0, 0)`;
    }
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
    if (!activeProject) isPausedRef.current = false;
  };

  /* ── Touch Handlers for Mobile ── */
  const handleTouchStart = (e) => {
    isTouchDraggingRef.current = true;
    touchMovedRef.current = false;
    touchStartXRef.current = e.touches[0].clientX;
    touchStartPosRef.current = posRef.current;
    isPausedRef.current = true;
  };

  const handleTouchMove = (e) => {
    if (!isTouchDraggingRef.current) return;
    const diff = e.touches[0].clientX - touchStartXRef.current;
    if (Math.abs(diff) > 5) {
      touchMovedRef.current = true;
    }
    posRef.current = touchStartPosRef.current + diff;
    if (trackRef.current) {
      trackRef.current.style.transform = `translate3d(${posRef.current}px, 0, 0)`;
    }
  };

  const handleTouchEnd = () => {
    isTouchDraggingRef.current = false;
    if (!activeProject) isPausedRef.current = false;
  };

  /* ── Card Click ── */
  const handleCardClick = (project) => {
    if (movedRef.current || touchMovedRef.current) return;
    setActiveProject(project);
  };

  return (
    <>
      <section
        className="sh-hero-slider-section"
        aria-label="Shopify Featured Projects Showcase"
      >
        {/* Subtle Ambient Background Light */}
        <div className="sh-slider-ambient" aria-hidden="true" />

        {/* Viewport with Edge Fade Mask */}
        <div
          className="sh-slider-viewport"
          onMouseEnter={() => (isPausedRef.current = true)}
          onMouseLeave={() => {
            if (!activeProject) isPausedRef.current = false;
            handleMouseUp();
          }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div ref={trackRef} className="sh-slider-track">
            {displayCards.map((item, idx) => {
              const actualIndex = (idx % SHOPIFY_PROJECTS.length) + 1;
              const displayImg = item.img || item.images?.[0];

              return (
                <div
                  key={`${item.title}-${idx}`}
                  className="sh-portfolio-card"
                  onClick={() => handleCardClick(item)}
                  role="button"
                  tabIndex={0}
                  aria-label={`View ${item.title} project`}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") handleCardClick(item);
                  }}
                >
                  {/* Image Frame */}
                  <div className="sh-card-img-wrap">
                    <span className="sh-card-badge">0{actualIndex}</span>
                    <span className="sh-card-platform-tag">
                      {item.type === "Shopify" ? "Shopify Plus" : "Website"}
                    </span>
                    <img
                      src={displayImg}
                      alt={item.title}
                      loading="lazy"
                      draggable="false"
                    />
                    <div className="sh-card-img-overlay" />
                  </div>

                  {/* Card Content */}
                  <div className="sh-card-content">
                    <div className="sh-card-meta-row">
                      <span className="sh-card-category">{item.category}</span>
                      {item.meta?.duration && (
                        <span className="sh-card-year">
                          {item.meta.duration}
                        </span>
                      )}
                    </div>

                    <h3 className="sh-card-title">{item.title}</h3>

                    <div className="sh-card-footer">
                      <span className="sh-card-cta">
                        Explore Store
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <line x1="7" y1="17" x2="17" y2="7" />
                          <polyline points="7 7 17 7 17 17" />
                        </svg>
                      </span>

                      <div className="sh-card-glow-btn" aria-hidden="true">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.6"
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

      {/* Full Modal Popup for Selected Project */}
      {activeProject && (
        <PopUpPortfolio
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}
    </>
  );
};

export default ShopifyHeroSlider;
