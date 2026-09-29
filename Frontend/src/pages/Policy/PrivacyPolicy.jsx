import React, { useEffect } from "react";
import "./Policy.css";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div className="policy-page">
      {/* ── HERO BANNER ── */}
      <section className="policy-hero">
        <div className="policy-hero-container">
          <div className="policy-badge">
            <i className="fa-solid fa-shield-halved" /> Legal Information
          </div>
          <h1 className="policy-title">
            Privacy <span>Policy</span>
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
            At <strong>Brandmingo</strong>, we value your privacy and are
            committed to protecting the personal information you share with us.
            This Privacy Policy explains how we collect, use, store, and protect
            your information when you visit our website or use our digital
            marketing, web development, branding, and e-commerce services.
          </p>
          <p>
            By accessing or using our website, you agree to the terms outlined
            in this Privacy Policy.
          </p>
        </div>

        {/* SECTIONS */}
        <div className="policy-sections">
          {/* 01. Information We Collect */}
          <div className="policy-card">
            <div className="policy-card-header">
              <span className="policy-card-num">01</span>
              <h2 className="policy-card-title">Information We Collect</h2>
            </div>
            <div className="policy-card-body">
              <p>We may collect the following types of information:</p>

              <h3 className="policy-subheading">
                <i className="fa-solid fa-user-check" /> Personal Information
              </h3>
              <p>
                When you contact us, request a quotation, book a consultation, or
                fill out a form, we may collect:
              </p>
              <div className="policy-list policy-list--grid">
                {[
                  "Full Name",
                  "Email Address",
                  "Phone Number",
                  "Company Name",
                  "Business Website",
                  "Project Requirements",
                ].map((item) => (
                  <div key={item} className="policy-list-item">
                    <i className="fa-solid fa-circle-check" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <h3 className="policy-subheading">
                <i className="fa-solid fa-laptop-code" /> Technical Information
              </h3>
              <p>We automatically collect certain information such as:</p>
              <div className="policy-list policy-list--grid">
                {[
                  "IP Address",
                  "Browser Type",
                  "Device Information",
                  "Operating System",
                  "Pages Visited",
                  "Time Spent on Website",
                  "Referral Source",
                ].map((item) => (
                  <div key={item} className="policy-list-item">
                    <i className="fa-solid fa-microchip" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 02. How We Use Your Information */}
          <div className="policy-card">
            <div className="policy-card-header">
              <span className="policy-card-num">02</span>
              <h2 className="policy-card-title">How We Use Your Information</h2>
            </div>
            <div className="policy-card-body">
              <p>Your information may be used to:</p>
              <div className="policy-list">
                {[
                  "Respond to your inquiries",
                  "Provide our digital marketing and development services",
                  "Prepare project proposals and quotations",
                  "Improve our website performance",
                  "Send important service updates",
                  "Share relevant marketing information (only with your consent)",
                  "Analyze website traffic and user experience",
                  "Prevent fraud and maintain website security",
                ].map((item) => (
                  <div key={item} className="policy-list-item">
                    <i className="fa-solid fa-arrow-right-long" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 03. Cookies */}
          <div className="policy-card">
            <div className="policy-card-header">
              <span className="policy-card-num">03</span>
              <h2 className="policy-card-title">Cookies</h2>
            </div>
            <div className="policy-card-body">
              <p>
                Our website uses cookies and similar technologies to improve your
                browsing experience.
              </p>
              <p>
                <strong>Cookies help us:</strong>
              </p>
              <div className="policy-list">
                {[
                  "Remember user preferences",
                  "Analyze website traffic",
                  "Improve website performance",
                  "Measure marketing campaign effectiveness",
                ].map((item) => (
                  <div key={item} className="policy-list-item">
                    <i className="fa-solid fa-cookie-bite" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <p>
                You may disable cookies through your browser settings at any
                time.
              </p>
            </div>
          </div>

          {/* 04. Third-Party Services */}
          <div className="policy-card">
            <div className="policy-card-header">
              <span className="policy-card-num">04</span>
              <h2 className="policy-card-title">Third-Party Services</h2>
            </div>
            <div className="policy-card-body">
              <p>We may use trusted third-party platforms including:</p>
              <div className="policy-list policy-list--grid">
                {[
                  "Google Analytics",
                  "Google Ads",
                  "Meta (Facebook & Instagram)",
                  "LinkedIn",
                  "Shopify",
                  "Cloudinary",
                  "Email Marketing Platforms",
                  "Payment Service Providers",
                ].map((item) => (
                  <div key={item} className="policy-list-item">
                    <i className="fa-solid fa-network-wired" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <p>
                These platforms have their own privacy policies regarding the
                information they collect.
              </p>
            </div>
          </div>

          {/* 05. Data Security */}
          <div className="policy-card">
            <div className="policy-card-header">
              <span className="policy-card-num">05</span>
              <h2 className="policy-card-title">Data Security</h2>
            </div>
            <div className="policy-card-body">
              <p>
                We implement industry-standard security practices to protect
                your personal information against unauthorized access, misuse,
                alteration, or disclosure.
              </p>
              <p>
                Although we strive to protect your information, no online
                system can guarantee 100% security.
              </p>
            </div>
          </div>

          {/* 06. Information Sharing */}
          <div className="policy-card">
            <div className="policy-card-header">
              <span className="policy-card-num">06</span>
              <h2 className="policy-card-title">Information Sharing</h2>
            </div>
            <div className="policy-card-body">
              <p>
                <strong>Brandmingo does not sell, rent, or trade your personal information.</strong>
              </p>
              <p>We may share information only when:</p>
              <div className="policy-list">
                {[
                  "Required by law",
                  "Necessary to provide requested services",
                  "Working with trusted service providers under confidentiality agreements",
                  "Protecting our legal rights",
                ].map((item) => (
                  <div key={item} className="policy-list-item">
                    <i className="fa-solid fa-handshake-angle" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 07. Third-Party Links */}
          <div className="policy-card">
            <div className="policy-card-header">
              <span className="policy-card-num">07</span>
              <h2 className="policy-card-title">Third-Party Links</h2>
            </div>
            <div className="policy-card-body">
              <p>Our website may contain links to third-party websites.</p>
              <p>
                We are not responsible for the privacy practices or content of
                external websites. We encourage users to review their privacy
                policies before providing personal information.
              </p>
            </div>
          </div>

          {/* 08. Your Rights */}
          <div className="policy-card">
            <div className="policy-card-header">
              <span className="policy-card-num">08</span>
              <h2 className="policy-card-title">Your Rights</h2>
            </div>
            <div className="policy-card-body">
              <p>Depending on your location, you may have the right to:</p>
              <div className="policy-list policy-list--grid">
                {[
                  "Access your personal information",
                  "Request corrections",
                  "Request deletion of your data",
                  "Withdraw consent",
                  "Object to data processing",
                  "Request a copy of stored info",
                ].map((item) => (
                  <div key={item} className="policy-list-item">
                    <i className="fa-solid fa-user-shield" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <p>To exercise these rights, please contact us.</p>
            </div>
          </div>

          {/* 09. Data Retention */}
          <div className="policy-card">
            <div className="policy-card-header">
              <span className="policy-card-num">09</span>
              <h2 className="policy-card-title">Data Retention</h2>
            </div>
            <div className="policy-card-body">
              <p>
                We retain personal information only for as long as necessary to:
              </p>
              <div className="policy-list">
                {[
                  "Deliver our services",
                  "Meet legal obligations",
                  "Resolve disputes",
                  "Improve customer support",
                ].map((item) => (
                  <div key={item} className="policy-list-item">
                    <i className="fa-solid fa-box-archive" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 10. Children's Privacy */}
          <div className="policy-card">
            <div className="policy-card-header">
              <span className="policy-card-num">10</span>
              <h2 className="policy-card-title">Children's Privacy</h2>
            </div>
            <div className="policy-card-body">
              <p>
                Our services are not intended for individuals under the age of 18.
              </p>
              <p>We do not knowingly collect personal information from children.</p>
            </div>
          </div>

          {/* 11. Changes to This Privacy Policy */}
          <div className="policy-card">
            <div className="policy-card-header">
              <span className="policy-card-num">11</span>
              <h2 className="policy-card-title">Changes to This Privacy Policy</h2>
            </div>
            <div className="policy-card-body">
              <p>We may update this Privacy Policy from time to time.</p>
              <p>
                Any updates will be published on this page along with the
                revised effective date.
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
              <p style={{ color: "#cbd5e1", fontSize: "13.5px", margin: "2px 0 0" }}>
                If you have any questions regarding this Privacy Policy or your personal information, please contact us.
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

export default PrivacyPolicy;
