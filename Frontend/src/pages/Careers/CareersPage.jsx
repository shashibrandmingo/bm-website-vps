import React from "react";
import SEO from "../../components/SEO/SEO";
import { openCareersPopup } from "../../utils/popup";

export default function CareersPage() {
  return (
    <div
      style={{
        minHeight: "80vh",
        padding: "160px 24px 100px",
        backgroundColor: "#0b0b0f",
        color: "#fff",
      }}
    >
      <SEO
        title="Careers at Brandmingo | Join Top Web & Digital Agency in Noida Sector 62"
        description="Explore exciting career opportunities at Brandmingo Noida. We are hiring React developers, SEO specialists, Google/Meta Ads media buyers, and UI/UX designers."
        canonical="https://brandmingo.com/careers"
        keywords="brandmingo careers, web developer jobs noida, seo jobs noida sector 62, digital marketing jobs noida"
      />
      <div style={{ maxWidth: "960px", margin: "0 auto", textAlign: "center" }}>
        <span
          style={{
            display: "inline-block",
            color: "#ff6b1e",
            fontWeight: 700,
            fontSize: "13px",
            letterSpacing: "2px",
            textTransform: "uppercase",
            marginBottom: "14px",
          }}
        >
          JOIN OUR TALENTED TEAM
        </span>
        <h1
          style={{
            fontSize: "clamp(32px, 5vw, 54px)",
            fontWeight: 800,
            lineHeight: 1.2,
            marginBottom: "20px",
          }}
        >
          Build the Future of Digital with <span style={{ color: "#ff6b1e" }}>Brandmingo</span>
        </h1>
        <p
          style={{
            fontSize: "17px",
            color: "rgba(255, 255, 255, 0.72)",
            maxWidth: "720px",
            margin: "0 auto 40px",
            lineHeight: 1.6,
          }}
        >
          We are always looking for passionate React developers, UI/UX designers, performance marketers, and SEO specialists to join our office at ITHUM Tower, Sector 62, Noida.
        </p>

        <div style={{ display: "flex", justifyContent: "center", gap: "16px", flexWrap: "wrap", marginBottom: "60px" }}>
          <button
            type="button"
            onClick={() => openCareersPopup()}
            style={{
              backgroundColor: "#ff6b1e",
              color: "#fff",
              border: "none",
              padding: "15px 32px",
              borderRadius: "12px",
              fontSize: "16px",
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            <i className="fa-solid fa-paper-plane" /> Apply Online Now
          </button>
          <a
            href="mailto:hr@brandmingo.com?subject=Job%20Application%20at%20Brandmingo"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.08)",
              color: "#fff",
              border: "1px solid rgba(255, 255, 255, 0.15)",
              padding: "15px 28px",
              borderRadius: "12px",
              fontSize: "16px",
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            <i className="fa-solid fa-envelope" /> Email: hr@brandmingo.com
          </a>
        </div>

        <div
          style={{
            backgroundColor: "rgba(20, 20, 30, 0.7)",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            borderRadius: "20px",
            padding: "36px 30px",
            textAlign: "left",
          }}
        >
          <h3 style={{ fontSize: "22px", fontWeight: 700, marginBottom: "16px", color: "#fff" }}>
            Why Work at Brandmingo Noida?
          </h3>
          <ul style={{ color: "rgba(255, 255, 255, 0.75)", lineHeight: 1.8, fontSize: "15px", paddingLeft: "20px" }}>
            <li>Work on high-impact projects for Indian &amp; international brands</li>
            <li>Collaborative, growth-first culture at prime ITHUM Tower Sector 62 location</li>
            <li>Competitive compensation, performance bonuses &amp; rapid skill progression</li>
            <li>Modern tech stack (React 19, Vite, Next.js, Node.js, Cloudinary, AWS)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

