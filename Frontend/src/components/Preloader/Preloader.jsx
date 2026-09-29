import React, { useEffect, useState } from "react";

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
    const duration = isMobile ? 800 : 1500;
    const timer = setTimeout(() => {
      setLoading(false);
    }, duration);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="preloader is-loading" style={{ pointerEvents: loading ? "auto" : "none" }}>
      <div className="preloader-inner">
        <div className="preloader-ball-wrap">
          <div className="preloader-ball-inner-wrap">
            <div className="preloader-ball-inner">
              <div className="preloader-ball"></div>
            </div>
            <div className="preloader-ball-shadow"></div>
          </div>

          <div id="weave-anim" className="preloader-text">
            Loading...
          </div>
        </div>
      </div>

      <div className="preloader-overlay"></div>
    </div>
  );
};

export default Preloader;
