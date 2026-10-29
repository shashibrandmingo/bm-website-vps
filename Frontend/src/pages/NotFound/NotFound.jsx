import React from "react";
import { Link } from "react-router-dom";
import SEO from "../../components/SEO/SEO";

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "75vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "160px 24px 80px",
        textAlign: "center",
        backgroundColor: "#0b0b0f",
        color: "#fff",
      }}
    >
      <SEO
        title="404 - Page Not Found | Brandmingo"
        description="The requested page could not be found on Brandmingo. Explore our website development, SEO, and performance marketing services in Noida."
        canonical="https://brandmingo.com/404"
        keywords="brandmingo 404"
      />
      <h1
        style={{
          fontSize: "clamp(60px, 12vw, 120px)",
          fontWeight: "900",
          color: "#ff6b1e",
          lineHeight: 1,
          margin: 0,
        }}
      >
        404
      </h1>
      <h2
        style={{
          fontSize: "clamp(22px, 3vw, 32px)",
          fontWeight: "700",
          margin: "16px 0",
        }}
      >
        Page Not Found
      </h2>
      <p
        style={{
          maxWidth: "520px",
          color: "rgba(255, 255, 255, 0.7)",
          fontSize: "16px",
          lineHeight: 1.6,
          marginBottom: "32px",
        }}
      >
        The page you are looking for might have been removed, had its name changed,
        or is temporarily unavailable.
      </p>
      <Link
        to="/"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "10px",
          backgroundColor: "#ff6b1e",
          color: "#fff",
          padding: "14px 28px",
          borderRadius: "10px",
          fontWeight: "700",
          textDecoration: "none",
        }}
      >
        <i className="fa-solid fa-house" /> Return to Home
      </Link>
    </div>
  );
}

