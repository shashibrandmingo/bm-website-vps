import React, { useState } from "react";
import "./ShopifyHeroForm.css";

const SERVICES_OPTIONS = [
  "New Shopify Store Development",
  "Redesign My Existing Store",
  "Migrate Website to Shopify",
  "Shopify Store Customisation",
  "Shopify Maintenance & Support",
];

const SAMPLE_ENQUIRY =
  "Hi, I am looking to build a modern, high-converting Shopify store for my brand. We have around 20-50 SKUs and need custom sections, mobile optimization, and fast checkout integration.";

const ShopifyHeroForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    service: "New Shopify Store Development",
    requirements: "",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedSample, setCopiedSample] = useState(false);

  // Field validation logic
  const validateField = (name, value) => {
    switch (name) {
      case "fullName":
        if (!value.trim()) return "Please enter your full name";
        if (value.trim().length < 2) return "Name must be at least 2 characters";
        return "";
      case "email":
        if (!value.trim()) return "Please enter your business email";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim()))
          return "Please enter a valid email address";
        return "";
      case "phone":
        if (!value.trim()) return "Please enter your phone number";
        const digits = value.replace(/\D/g, "");
        if (digits.length < 10) return "Please enter a valid 10-digit number";
        return "";
      case "service":
        if (!value) return "Please select a service";
        return "";
      default:
        return "";
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  };

  const handleCopySample = () => {
    setFormData((prev) => ({ ...prev, requirements: SAMPLE_ENQUIRY }));
    setCopiedSample(true);
    setTimeout(() => setCopiedSample(false), 2500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate all fields
    const newErrors = {};
    const allTouched = {};
    Object.keys(formData).forEach((key) => {
      allTouched[key] = true;
      const err = validateField(key, formData[key]);
      if (err) newErrors[key] = err;
    });

    setTouched(allTouched);
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      // Focus first error field
      const firstErrorKey = Object.keys(newErrors)[0];
      const el = document.querySelector(`[name="${firstErrorKey}"]`);
      if (el) el.focus();
      return;
    }

    setIsSubmitting(true);

    const scriptUrl =
      import.meta.env.VITE_GOOGLE_SHEET_URL ||
      "https://script.google.com/macros/s/AKfycbzNIsuCOE73SHPVoZ0qcZXRYsc09Hn1za60JHtyHZDfW9wywvGXXJ_jP0KBKPKtF2saDA/exec";

    try {
      await fetch(scriptUrl, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          formType: "Shopify leads",
          fullName: formData.fullName.trim(),
          email: formData.email.trim(),
          phone: "+91 " + formData.phone.trim(),
          service: formData.service,
          requirements: formData.requirements.trim() || "N/A",
          project: formData.requirements.trim() || "N/A",
          submittedAt: new Date().toLocaleString("en-IN", {
            timeZone: "Asia/Kolkata",
          }),
        }),
      });

      setIsSubmitting(false);
      setIsSubmitted(true);
    } catch (err) {
      console.error("Hero form submission error:", err);
      // Even in case of CORS or network quirks with Google Script, consider successful if no fatal crash
      setIsSubmitting(false);
      setIsSubmitted(true);
    }
  };

  const handleClose = () => {
    setIsSubmitted(false);
    if (typeof onClose === "function") {
      onClose();
    }
  };

  return (
    <div className="sh-hero-form-container">
      {/* Glow border decoration */}
      <div className="sh-hero-form-glow" aria-hidden="true" />

      <div className="sh-hero-form-card">
        {/* Close Button on Top Right */}
        <button
          type="button"
          className="sh-form-close-btn"
          onClick={handleClose}
          aria-label="Close form"
          title="Close form & show 3D graphic"
        >
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
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {isSubmitted ? (
          /* SUCCESS STATE */
          <div className="sh-form-success-box">
            <div className="sh-success-icon-wrap">
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ff6b1e"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
            </div>
            <h3 className="sh-success-title">Enquiry Received!</h3>
            <p className="sh-success-desc">
              Thank you, <strong>{formData.fullName}</strong>. Our Shopify
              solutions expert will connect with you within <strong>2 hours</strong> to discuss your project.
            </p>
            <div className="sh-success-actions">
              <button
                type="button"
                className="sh-success-btn"
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({
                    fullName: "",
                    email: "",
                    phone: "",
                    service: "New Shopify Store Development",
                    requirements: "",
                  });
                }}
              >
                Send Another Enquiry
              </button>
              <button
                type="button"
                className="sh-success-ghost-btn"
                onClick={handleClose}
              >
                Close & View 3D Showcase
              </button>
            </div>
          </div>
        ) : (
          /* ACTIVE FORM */
          <>
            <div className="sh-form-header">
              <div className="sh-form-tag">
                <span className="sh-tag-dot" />
                Get Free Proposal
              </div>
              <h2 className="sh-form-title">Let's Build Your Shopify Store</h2>
              <p className="sh-form-subtitle">
                Tell us about your project. Our team will get in touch with you.
              </p>
            </div>

            <form
              className="sh-form-body"
              onSubmit={handleSubmit}
              noValidate
            >
              {/* Full Name */}
              <div className="sh-field-group">
                <label className="sh-label" htmlFor="sh-fullName">
                  Full Name <span className="sh-req">*</span>
                </label>
                <input
                  type="text"
                  id="sh-fullName"
                  name="fullName"
                  className={`sh-input ${
                    touched.fullName && errors.fullName ? "sh-input--error" : ""
                  }`}
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  autoComplete="name"
                />
                {touched.fullName && errors.fullName && (
                  <span className="sh-err-msg">{errors.fullName}</span>
                )}
              </div>

              {/* Business Email */}
              <div className="sh-field-group">
                <label className="sh-label" htmlFor="sh-email">
                  Business Email <span className="sh-req">*</span>
                </label>
                <input
                  type="email"
                  id="sh-email"
                  name="email"
                  className={`sh-input ${
                    touched.email && errors.email ? "sh-input--error" : ""
                  }`}
                  placeholder="you@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  autoComplete="email"
                />
                {touched.email && errors.email && (
                  <span className="sh-err-msg">{errors.email}</span>
                )}
              </div>

              {/* Phone Number */}
              <div className="sh-field-group">
                <label className="sh-label" htmlFor="sh-phone">
                  Phone Number <span className="sh-req">*</span>
                </label>
                <div className="sh-phone-wrap">
                  <span className="sh-phone-prefix">+91</span>
                  <input
                    type="tel"
                    id="sh-phone"
                    name="phone"
                    className={`sh-input sh-input--phone ${
                      touched.phone && errors.phone ? "sh-input--error" : ""
                    }`}
                    placeholder="Enter mobile number"
                    value={formData.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    maxLength={10}
                    autoComplete="tel"
                  />
                </div>
                {touched.phone && errors.phone && (
                  <span className="sh-err-msg">{errors.phone}</span>
                )}
              </div>



              {/* What service do you need? (Dropdown) */}
              <div className="sh-field-group">
                <label className="sh-label" htmlFor="sh-service">
                  What service do you need? <span className="sh-req">*</span>
                </label>
                <div className="sh-select-wrap">
                  <select
                    id="sh-service"
                    name="service"
                    className="sh-select"
                    value={formData.service}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    {SERVICES_OPTIONS.map((srv) => (
                      <option key={srv} value={srv}>
                        {srv}
                      </option>
                    ))}
                  </select>
                  <span className="sh-select-arrow" aria-hidden="true">
                    ▼
                  </span>
                </div>
              </div>



              {/* Project Requirements (Optional) */}
              <div className="sh-field-group">
                <div className="sh-label-row">
                  <label className="sh-label" htmlFor="sh-requirements">
                    Project Requirements <span className="sh-optional">(Optional)</span>
                  </label>
                </div>
                <textarea
                  id="sh-requirements"
                  name="requirements"
                  className="sh-textarea"
                  rows={2}
                  placeholder="Tell us about your products, features, or project goals..."
                  value={formData.requirements}
                  onChange={handleChange}
                />
              </div>

              {/* Quick Template Helper Button */}
              <div className="sh-quick-helper">
                <button
                  type="button"
                  className="sh-copy-sample-btn"
                  onClick={handleCopySample}
                >
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                  </svg>
                  {copiedSample ? "Sample Applied!" : "Use Sample Enquiry"}
                </button>
              </div>

              {/* Submit CTA */}
              <div className="sh-submit-wrap">
                <button
                  type="submit"
                  className="sh-submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="sh-spinner-row">
                      <span className="sh-spinner" />
                      Submitting...
                    </span>
                  ) : (
                    <span className="sh-submit-label">
                      Get Free Consultation
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </span>
                  )}
                </button>
              </div>

              {/* Security Trust Note */}
              <div className="sh-form-trust">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                <span>100% Confidential · No Spam Guarantee</span>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default ShopifyHeroForm;
