import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
// Font Awesome is imported in App.jsx — removed duplicate here to prevent
// double woff2 font download (fa-solid-900: 116KB, fa-brands-400: 110KB)
import "swiper/css";

// ── AOS ─────────────────────────────────────────────────────
import AOS from "aos";
import "aos/dist/aos.css";

import "./index.css";
import App from "./App.jsx";

// Init AOS once before render
try {
  AOS.init({
    duration: 800,
    once: true, // animate only on first scroll — no repeat
    mirror: false,
    disable: typeof window !== "undefined" && window.innerWidth < 768,
    offset: 60, // trigger slightly before element enters viewport
  });
} catch (e) {
  console.warn("AOS init error:", e);
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </StrictMode>,
);
