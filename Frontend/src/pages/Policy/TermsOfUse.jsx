import React, { useEffect } from "react";
import "./Policy.css";

const TermsOfUse = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div className="policy-page">
      {/* ── HERO BANNER ── */}
      <section className="policy-hero">
        <div className="policy-hero-container">
          <div className="policy-badge">
            <i className="fa-solid fa-file-contract" /> Legal Agreement
          </div>
          <h1 className="policy-title">
            Terms of <span>Use</span>
          </h1>
          <div className="policy-meta">
            <i className="fa-regular fa-clock" />
            Last Updated: <strong>July 2026</strong>
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT CONTAINER ── */}
      <main className="policy-container">
        {/* INTRO CARD */}
        <div className="policy-intro-card">
          <p>
            Welcome to <strong>Brandmingo</strong>.
          </p>
          <p>
            These Terms of Use govern your access to and use of the Brandmingo
            website and our digital services. By accessing our website or
            engaging our services, you agree to comply with these terms. If you
            do not agree with any part of these Terms, please discontinue using
            our website.
          </p>
        </div>

        {/* SECTIONS */}
        <div className="policy-sections">
          {/* 01. About Brandmingo */}
          <div className="policy-card">
            <div className="policy-card-header">
              <span className="policy-card-num">01</span>
              <h2 className="policy-card-title">About Brandmingo</h2>
            </div>
            <div className="policy-card-body">
              <p>
                Brandmingo is a full-service digital agency providing
                solutions including:
              </p>
              <div className="policy-list policy-list--grid">
                {[
                  "Digital Marketing",
                  "Search Engine Optimization (SEO)",
                  "Performance Marketing",
                  "Website Design & Development",
                  "Shopify Development",
                  "UI/UX Design",
                  "Branding & Creative Design",
                  "Social Media Marketing",
                  "E-commerce Management",
                  "Marketplace Management",
                  "Web Maintenance & Consulting",
                ].map((item) => (
                  <div key={item} className="policy-list-item">
                    <i className="fa-solid fa-circle-check" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 02. Acceptance of Terms */}
          <div className="policy-card">
            <div className="policy-card-header">
              <span className="policy-card-num">02</span>
              <h2 className="policy-card-title">Acceptance of Terms</h2>
            </div>
            <div className="policy-card-body">
              <p>By using this website, you confirm that you:</p>
              <div className="policy-list">
                {[
                  "Are at least 18 years of age.",
                  "Will use the website lawfully.",
                  "Will not misuse or attempt to disrupt our services.",
                  "Accept these Terms of Use and our Privacy Policy.",
                ].map((item) => (
                  <div key={item} className="policy-list-item">
                    <i className="fa-solid fa-user-check" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 03. Website Usage */}
          <div className="policy-card">
            <div className="policy-card-header">
              <span className="policy-card-num">03</span>
              <h2 className="policy-card-title">Website Usage</h2>
            </div>
            <div className="policy-card-body">
              <p>
                You agree to use the Brandmingo website responsibly and only for
                legitimate business purposes.
              </p>
              <p>
                <strong>You must not:</strong>
              </p>
              <div className="policy-list">
                {[
                  "Copy or reproduce website content without permission.",
                  "Attempt unauthorized access to our systems.",
                  "Upload malicious software or harmful code.",
                  "Use automated tools to scrape website content.",
                  "Misrepresent your identity or business.",
                ].map((item) => (
                  <div key={item} className="policy-list-item">
                    <i className="fa-solid fa-ban" style={{ color: "#ef4444" }} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 04. Intellectual Property */}
          <div className="policy-card">
            <div className="policy-card-header">
              <span className="policy-card-num">04</span>
              <h2 className="policy-card-title">Intellectual Property</h2>
            </div>
            <div className="policy-card-body">
              <p>
                All content available on this website, including Logos,
                Branding, Graphics, Icons, Images, Videos, Website Design, Source
                Code, Text Content, and Case Studies, is the property of{" "}
                <strong>Brandmingo</strong> unless otherwise stated and is
                protected by applicable intellectual property laws.
              </p>
              <p>
                No material may be copied, distributed, modified, or reused
                without prior written permission.
              </p>
            </div>
          </div>

          {/* 05. Service Information */}
          <div className="policy-card">
            <div className="policy-card-header">
              <span className="policy-card-num">05</span>
              <h2 className="policy-card-title">Service Information</h2>
            </div>
            <div className="policy-card-body">
              <p>
                We strive to provide accurate and up-to-date information regarding
                our services. However:
              </p>
              <div className="policy-list">
                {[
                  "Service availability may change without notice.",
                  "Pricing may vary depending on project scope.",
                  "Timelines depend on client approvals and project requirements.",
                  "We reserve the right to modify or discontinue services at any time.",
                ].map((item) => (
                  <div key={item} className="policy-list-item">
                    <i className="fa-solid fa-circle-info" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 06. Client Responsibilities */}
          <div className="policy-card">
            <div className="policy-card-header">
              <span className="policy-card-num">06</span>
              <h2 className="policy-card-title">Client Responsibilities</h2>
            </div>
            <div className="policy-card-body">
              <p>Clients are responsible for:</p>
              <div className="policy-list">
                {[
                  "Providing accurate project information.",
                  "Sharing required content and assets on time.",
                  "Reviewing and approving deliverables promptly.",
                  "Maintaining ownership or licensing rights for submitted materials.",
                ].map((item) => (
                  <div key={item} className="policy-list-item">
                    <i className="fa-solid fa-list-check" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <p>Delays in client communication may affect project timelines.</p>
            </div>
          </div>

          {/* 07. Payments */}
          <div className="policy-card">
            <div className="policy-card-header">
              <span className="policy-card-num">07</span>
              <h2 className="policy-card-title">Payments</h2>
            </div>
            <div className="policy-card-body">
              <p>
                Payment terms are communicated separately in project proposals
                or agreements.
              </p>
              <p>
                <strong>Unless otherwise agreed:</strong>
              </p>
              <div className="policy-list">
                {[
                  "Payments must be made on time.",
                  "Delayed payments may result in project suspension.",
                  "Completed work remains the property of Brandmingo until outstanding invoices are cleared.",
                ].map((item) => (
                  <div key={item} className="policy-list-item">
                    <i className="fa-solid fa-credit-card" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 08. Third-Party Platforms */}
          <div className="policy-card">
            <div className="policy-card-header">
              <span className="policy-card-num">08</span>
              <h2 className="policy-card-title">Third-Party Platforms</h2>
            </div>
            <div className="policy-card-body">
              <p>Our services may involve third-party platforms such as:</p>
              <div className="policy-list policy-list--grid">
                {[
                  "Google",
                  "Meta (Facebook & Instagram)",
                  "Shopify",
                  "WooCommerce",
                  "Amazon",
                  "Flipkart",
                  "Meesho",
                  "Cloudinary",
                  "Payment Gateways",
                ].map((item) => (
                  <div key={item} className="policy-list-item">
                    <i className="fa-solid fa-network-wired" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <p>
                Brandmingo is not responsible for outages, policy changes,
                pricing changes, or limitations imposed by these third-party
                platforms.
              </p>
            </div>
          </div>

          {/* 09. Limitation of Liability */}
          <div className="policy-card">
            <div className="policy-card-header">
              <span className="policy-card-num">09</span>
              <h2 className="policy-card-title">Limitation of Liability</h2>
            </div>
            <div className="policy-card-body">
              <p>
                While we make every effort to deliver high-quality services,
                Brandmingo shall not be liable for:
              </p>
              <div className="policy-list policy-list--grid">
                {[
                  "Business losses",
                  "Revenue loss",
                  "Data loss",
                  "Search engine ranking fluctuations",
                  "Advertising platform policy changes",
                  "Third-party service interruptions",
                  "Indirect or consequential damages",
                ].map((item) => (
                  <div key={item} className="policy-list-item">
                    <i className="fa-solid fa-shield-cat" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 10. External Links */}
          <div className="policy-card">
            <div className="policy-card-header">
              <span className="policy-card-num">10</span>
              <h2 className="policy-card-title">External Links</h2>
            </div>
            <div className="policy-card-body">
              <p>Our website may contain links to external websites.</p>
              <p>
                Brandmingo is not responsible for the content, security, or
                privacy practices of third-party websites.
              </p>
            </div>
          </div>

          {/* 11. Disclaimer */}
          <div className="policy-card">
            <div className="policy-card-header">
              <span className="policy-card-num">11</span>
              <h2 className="policy-card-title">Disclaimer</h2>
            </div>
            <div className="policy-card-body">
              <p>
                All services are provided on an "as available" and "as is"
                basis.
              </p>
              <p>
                <strong>We do not guarantee:</strong>
              </p>
              <div className="policy-list">
                {[
                  "Specific SEO rankings",
                  "Exact advertising results",
                  "Guaranteed sales or revenue",
                  "Continuous website availability",
                ].map((item) => (
                  <div key={item} className="policy-list-item">
                    <i className="fa-solid fa-triangle-exclamation" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <p>
                Marketing performance depends on multiple factors beyond our
                control.
              </p>
            </div>
          </div>

          {/* 12. Termination */}
          <div className="policy-card">
            <div className="policy-card-header">
              <span className="policy-card-num">12</span>
              <h2 className="policy-card-title">Termination</h2>
            </div>
            <div className="policy-card-body">
              <p>
                We reserve the right to suspend or terminate access to our
                website or services if these Terms are violated or unlawful
                activities are detected.
              </p>
            </div>
          </div>

          {/* 13. Changes to These Terms */}
          <div className="policy-card">
            <div className="policy-card-header">
              <span className="policy-card-num">13</span>
              <h2 className="policy-card-title">Changes to These Terms</h2>
            </div>
            <div className="policy-card-body">
              <p>Brandmingo may revise these Terms of Use at any time.</p>
              <p>
                Updated versions will be published on this page with the
                revised effective date.
              </p>
              <p>
                Continued use of our website indicates acceptance of the
                updated Terms.
              </p>
            </div>
          </div>

          {/* 14. Governing Law */}
          <div className="policy-card">
            <div className="policy-card-header">
              <span className="policy-card-num">14</span>
              <h2 className="policy-card-title">Governing Law</h2>
            </div>
            <div className="policy-card-body">
              <p>
                These Terms shall be governed by and interpreted in accordance
                with the laws of India.
              </p>
              <p>
                Any disputes shall be subject to the jurisdiction of the
                competent courts in India.
              </p>
            </div>
          </div>
        </div>

        {/* ── CONTACT US CARD ── */}
        <div className="policy-contact-card">
          <div className="policy-contact-header">
            <div className="policy-contact-icon">
              <i className="fa-solid fa-headset" />
            </div>
            <div>
              <h3>Contact Us</h3>
              <p
                style={{
                  color: "#cbd5e1",
                  fontSize: "13.5px",
                  margin: "2px 0 0",
                }}
              >
                If you have any questions regarding these Terms of Use, please contact us.
              </p>
            </div>
          </div>

          <div className="policy-contact-grid">
            <div className="policy-contact-item">
              <div className="policy-ci-icon">
                <i className="fa-solid fa-envelope" />
              </div>
              <div className="policy-ci-info">
                <span className="policy-ci-label">Email Us</span>
                <a href="mailto:hello@brandmingo.com" className="policy-ci-link">
                  hello@brandmingo.com
                </a>
              </div>
            </div>

            <div className="policy-contact-item">
              <div className="policy-ci-icon">
                <i className="fa-solid fa-phone" />
              </div>
              <div className="policy-ci-info">
                <span className="policy-ci-label">Phone Support</span>
                <a href="tel:+919990613140" className="policy-ci-link">
                  +91 99906 13140
                </a>
                <a href="tel:+918799719725" className="policy-ci-link">
                  +91 87997 19725
                </a>
              </div>
            </div>

            <div className="policy-contact-item">
              <div className="policy-ci-icon">
                <i className="fa-solid fa-globe" />
              </div>
              <div className="policy-ci-info">
                <span className="policy-ci-label">Website</span>
                <a
                  href="https://brandmingo.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="policy-ci-link"
                >
                  https://brandmingo.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TermsOfUse;
