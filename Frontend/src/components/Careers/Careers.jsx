import React, { useEffect, useState, useRef } from "react";
import logo from "../../assets/images/logo/white-logo.png";

/* ─────────────────────────────────────────
   Position options
───────────────────────────────────────── */
const POSITIONS = [
  "Web Developer",
  "React Developer",
  "WordPress Developer",
  "Shopify Developer",
  "SEO Executive",
  "Performance Marketer",
  "Social Media Manager",
  "Graphic Designer",
  "UI/UX Designer",
  "Content Writer",
  "Sales Executive",
  "Business Development Executive",
  "Internship",
];

const EXPERIENCE_OPTIONS = [
  "Fresher",
  "0–1 Year",
  "1–2 Years",
  "2–5 Years",
  "5+ Years",
];

/* ─────────────────────────────────────────
   Validation helpers
───────────────────────────────────────── */
const validators = {
  fullName: (v) => {
    if (!v.trim()) return "Full name is required.";
    if (v.trim().length < 2) return "At least 2 characters.";
    if (!/^[a-zA-Z\s'.\-]+$/.test(v.trim())) return "Letters only please.";
    return "";
  },
  email: (v) => {
    const val = v.trim();
    if (!val) return "Email is required.";
    if (!/^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/.test(val))
      return "Enter a valid email address.";
    return "";
  },
  phone: (v) => {
    const d = v.replace(/\D/g, "");
    if (!d) return "Phone number is required.";
    if (d.length < 7 || d.length > 15) return "Enter a valid phone number.";
    return "";
  },
  position: (v) => (!v ? "Please select a position." : ""),
  experience: (v) => (!v ? "Please select your experience." : ""),
  location: (v) => (!v.trim() ? "Location is required." : ""),
  resume: (v) => (!v ? "Resume file is required." : ""),
};

const REQUIRED_FIELDS = [
  "fullName",
  "email",
  "phone",
  "position",
  "experience",
  "location",
  "resume",
];

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 MB
const ALLOWED_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

/* ─────────────────────────────────────────
   FieldGroup wrapper
───────────────────────────────────────── */
const FieldGroup = ({ label, required, error, touched, children }) => (
  <div className="cp-group">
    <label className="cp-label">
      {label}
      {required && <span className="cp-req"> *</span>}
    </label>
    {children}
    {touched && error && (
      <span className="cp-error-msg" role="alert">
        <i className="fa-solid fa-circle-exclamation" />
        {error}
      </span>
    )}
  </div>
);

/* ─────────────────────────────────────────
   Main Careers Popup Component
───────────────────────────────────────── */
const Careers = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const firstRef = useRef(null);

  const blank = {
    fullName: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    location: "",
    portfolioUrl: "",
    coverMessage: "",
  };

  const [values, setValues] = useState(blank);
  const [resumeFile, setResumeFile] = useState(null);
  const [resumeError, setResumeError] = useState("");
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const fileInputRef = useRef(null);

  /* scroll lock + reset */
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setSubmitted(false);
      setLoading(false);
      setValues(blank);
      setResumeFile(null);
      setResumeError("");
      setErrors({});
      setTouched({});
      setTimeout(() => firstRef.current?.focus(), 120);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  /* ESC key */
  useEffect(() => {
    const fn = (e) => {
      if (e.key === "Escape" && isOpen) onClose();
    };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, [isOpen, onClose]);

  const validate = (name, value) =>
    validators[name] ? validators[name](value) : "";

  const validateAll = () => {
    const ne = {};
    const nt = {};
    REQUIRED_FIELDS.forEach((f) => {
      nt[f] = true;
      if (f === "resume") {
        ne[f] = validators.resume(resumeFile);
      } else {
        ne[f] = validate(f, values[f]);
      }
    });
    setTouched((t) => ({ ...t, ...nt }));
    setErrors((e) => ({ ...e, ...ne }));

    if (!resumeFile) {
      setResumeError("Resume is required.");
    }

    return Object.values(ne).every((e) => !e) && resumeFile && !resumeError;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (touched[name])
      setErrors((er) => ({ ...er, [name]: validate(name, value) }));
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((t) => ({ ...t, [name]: true }));
    setErrors((er) => ({ ...er, [name]: validate(name, value) }));
  };

  /* Phone digits handler */
  const handlePhone = (e) => {
    const d = e.target.value.replace(/\D/g, "").slice(0, 15);
    setValues((v) => ({ ...v, phone: d }));
    if (touched.phone)
      setErrors((er) => ({ ...er, phone: validate("phone", d) }));
  };

  const handlePhoneBlur = () => {
    setTouched((t) => ({ ...t, phone: true }));
    setErrors((er) => ({ ...er, phone: validate("phone", values.phone) }));
  };

  /* File upload */
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!ALLOWED_TYPES.includes(file.type)) {
      setResumeError("Only PDF, DOC, or DOCX allowed.");
      setResumeFile(null);
      return;
    }

    if (file.size > MAX_FILE_SIZE) {
      setResumeError("File size must be under 5 MB.");
      setResumeFile(null);
      return;
    }

    setResumeFile(file);
    setResumeError("");
    setErrors((er) => ({ ...er, resume: "" }));
  };

  const removeFile = () => {
    setResumeFile(null);
    setResumeError("");
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  /* Submit handler */
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateAll()) return;
    setLoading(true);

    const scriptUrl = import.meta.env.VITE_GOOGLE_SHEET_URL || "https://script.google.com/macros/s/AKfycbzNIsuCOE73SHPVoZ0qcZXRYsc09Hn1za60JHtyHZDfW9wywvGXXJ_jP0KBKPKtF2saDA/exec";

    try {
      await fetch(scriptUrl, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          formType: "Careers",
          fullName: values.fullName,
          email: values.email,
          phone: values.phone,
          position: values.position,
          experience: values.experience,
          location: values.location,
          portfolioUrl: values.portfolioUrl,
          coverMessage: values.coverMessage,
          resumeName: resumeFile ? resumeFile.name : "",
        }),
      });

      setLoading(false);
      setSubmitted(true);
    } catch (error) {
      console.error("Careers submission error:", error);
      setLoading(false);
      alert("Something went wrong while submitting. Please try again.");
    }
  };

  const cls = (name) =>
    !touched[name] ? "" : errors[name] ? "cp-invalid" : "cp-valid";

  if (!isOpen) return null;

  return (
    <>
      <style>{`
        /* ═══════════════════════════════════════
           PREMIUM CAREERS POPUP (ORANGE HEADER)
        ═══════════════════════════════════════ */
        .cp-overlay {
          position: fixed;
          inset: 0;
          z-index: 99999;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(10, 10, 15, 0.75);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          animation: cpFadeIn 0.25s ease;
          padding: 16px;
        }

        @keyframes cpFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes cpSlideUp {
          from { opacity: 0; transform: translateY(16px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        .cp-modal {
          position: relative;
          width: 100%;
          max-width: 540px;
          max-height: 88vh;
          background: #ffffff;
          border-radius: 20px;
          box-shadow: 0 25px 70px rgba(0, 0, 0, 0.45);
          animation: cpSlideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          font-family: var(--body-font-family, 'Poppins', sans-serif);
          color: #1a1a2e;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          border: none;
          outline: none;
        }

        /* ── TOP NAV BAR (ORANGE BRANDING GRADIENT) ── */
        .cp-top-bar {
          padding: 14px 20px;
          background: linear-gradient(135deg, #e85c0d 0%, #ff6b1e 100%);
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-shrink: 0;
        }

        .cp-top-logo {
          height: 26px;
          object-fit: contain;
          filter: brightness(0) invert(1);
        }

        .cp-close-btn {
          width: 28px;
          height: 28px;
          border: none;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.22);
          color: #ffffff;
          font-size: 13px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
        }
        .cp-close-btn:hover {
          background: rgba(255, 255, 255, 0.45);
          color: #ffffff;
          transform: rotate(90deg);
        }

        /* ── INTRO BANNER ── */
        .cp-intro {
          padding: 18px 24px 12px;
          background: #fafafa;
          border-bottom: 1px solid #f0f0f0;
          text-align: left;
          flex-shrink: 0;
        }

        .cp-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(255, 107, 30, 0.1);
          color: #ff6b1e;
          font-size: 10.5px;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          padding: 3px 10px;
          border-radius: 20px;
          margin-bottom: 6px;
        }

        .cp-intro h2 {
          font-size: 20px;
          font-weight: 700;
          color: #111111;
          margin: 0 0 3px;
          font-family: var(--heading-font-family, 'Poppins', sans-serif);
          letter-spacing: -0.3px;
          line-height: 1.25;
        }

        .cp-intro p {
          font-size: 12px;
          color: #64748b;
          margin: 0;
          line-height: 1.4;
        }

        /* ── SCROLLABLE FORM BODY ── */
        .cp-body {
          padding: 14px 24px 20px;
          overflow-y: auto;
          flex: 1;
        }

        .cp-body::-webkit-scrollbar {
          width: 5px;
        }
        .cp-body::-webkit-scrollbar-track {
          background: transparent;
        }
        .cp-body::-webkit-scrollbar-thumb {
          background: rgba(255, 107, 30, 0.3);
          border-radius: 10px;
        }

        /* Section tag */
        .cp-section-tag {
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1.1px;
          color: #ff6b1e;
          margin: 14px 0 10px;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .cp-section-tag:first-child {
          margin-top: 0;
        }
        .cp-section-tag::after {
          content: '';
          flex: 1;
          height: 1px;
          background: rgba(255, 107, 30, 0.15);
          margin-left: 6px;
        }

        /* Grid */
        .cp-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }
        @media (max-width: 520px) {
          .cp-row { grid-template-columns: 1fr; gap: 0; }
        }

        /* Group */
        .cp-group {
          margin-bottom: 11px;
        }

        .cp-label {
          display: block;
          font-size: 12px;
          font-weight: 600;
          color: #333333;
          margin-bottom: 4px;
        }

        .cp-req {
          color: #ff6b1e;
          font-weight: 700;
        }

        .cp-group input,
        .cp-group select,
        .cp-group textarea {
          width: 100%;
          padding: 8px 12px;
          border: 1.5px solid #e2e8f0;
          border-radius: 8px;
          font-size: 12.5px;
          font-family: inherit;
          color: #1a1a2e;
          background: #f8fafc;
          transition: all 0.2s ease;
          outline: none;
          box-sizing: border-box;
        }

        .cp-group input::placeholder,
        .cp-group textarea::placeholder {
          color: #94a3b8;
          font-size: 12px;
        }

        .cp-group input:focus,
        .cp-group select:focus,
        .cp-group textarea:focus {
          border-color: #ff6b1e !important;
          background: #ffffff !important;
          box-shadow: 0 0 0 3px rgba(255, 107, 30, 0.12) !important;
        }

        .cp-group select {
          cursor: pointer;
          appearance: none;
          -webkit-appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6' fill='%2364748b'%3E%3Cpath d='M5 6L0 0h10z'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 12px center;
          padding-right: 28px;
        }

        .cp-group textarea {
          resize: vertical;
          min-height: 55px;
        }

        /* Validation states (ORANGE accent, ZERO GREEN) */
        .cp-invalid { border-color: #ef4444 !important; }
        .cp-valid { border-color: #ff6b1e !important; }

        .cp-error-msg {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 11px;
          color: #ef4444;
          margin-top: 3px;
          font-weight: 500;
        }

        /* ── COMPACT FILE UPLOAD ── */
        .cp-file-box {
          position: relative;
          border: 1.5px dashed #cbd5e1;
          border-radius: 8px;
          padding: 8px 12px;
          text-align: center;
          transition: all 0.2s ease;
          cursor: pointer;
          background: #f8fafc;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }
        .cp-file-box:hover {
          border-color: #ff6b1e;
          background: rgba(255, 107, 30, 0.03);
        }

        .cp-file-box input[type="file"] {
          position: absolute;
          inset: 0;
          opacity: 0;
          cursor: pointer;
          width: 100%;
          height: 100%;
        }

        .cp-file-box-icon {
          font-size: 16px;
          color: #ff6b1e;
          flex-shrink: 0;
        }

        .cp-file-box-text {
          font-size: 12px;
          color: #475569;
          margin: 0;
          text-align: left;
        }
        .cp-file-box-text strong {
          color: #ff6b1e;
        }

        .cp-file-preview {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 7px 10px;
          background: rgba(255, 107, 30, 0.05);
          border: 1.5px solid rgba(255, 107, 30, 0.25);
          border-radius: 8px;
        }

        .cp-file-preview-icon {
          font-size: 16px;
          color: #ff6b1e;
          flex-shrink: 0;
        }

        .cp-file-info {
          flex: 1;
          min-width: 0;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .cp-file-name {
          font-size: 12px;
          font-weight: 600;
          color: #1e293b;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .cp-file-size {
          font-size: 10.5px;
          color: #64748b;
          flex-shrink: 0;
        }

        .cp-file-remove {
          border: none !important;
          background: rgba(239, 68, 68, 0.12) !important;
          color: #ef4444 !important;
          font-size: 12px !important;
          cursor: pointer !important;
          width: 24px !important;
          height: 24px !important;
          border-radius: 50% !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          transition: all 0.2s ease !important;
          padding: 0 !important;
        }
        .cp-file-remove:hover {
          background: #ef4444 !important;
          color: #ffffff !important;
        }

        /* ── SUBMIT BUTTON (ORANGE GRADIENT) ── */
        .cp-submit-btn,
        .cp-submit-btn:not(:disabled) {
          width: 100% !important;
          padding: 11px 18px !important;
          border: none !important;
          border-radius: 9px !important;
          font-size: 13.5px !important;
          font-weight: 600 !important;
          font-family: inherit !important;
          color: #ffffff !important;
          background: linear-gradient(135deg, #ff6b1e 0%, #e85c0d 100%) !important;
          cursor: pointer !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          gap: 8px !important;
          transition: all 0.3s ease !important;
          margin-top: 12px !important;
          box-shadow: 0 4px 14px rgba(255, 107, 30, 0.35) !important;
        }
        .cp-submit-btn:hover:not(:disabled) {
          transform: translateY(-1px) !important;
          box-shadow: 0 6px 18px rgba(255, 107, 30, 0.45) !important;
          background: linear-gradient(135deg, #ff7933 0%, #f06110 100%) !important;
          color: #ffffff !important;
        }
        .cp-submit-btn:disabled {
          opacity: 0.7 !important;
          cursor: not-allowed !important;
        }

        .cp-spinner {
          width: 15px;
          height: 15px;
          border: 2.5px solid rgba(255,255,255,0.3);
          border-top-color: #ffffff;
          border-radius: 50%;
          animation: cpSpin 0.7s linear infinite;
        }

        @keyframes cpSpin {
          to { transform: rotate(360deg); }
        }

        /* ── THANK YOU SCREEN ── */
        .cp-success {
          padding: 36px 20px;
          text-align: center;
          animation: cpSlideUp 0.35s ease;
        }

        .cp-success-icon {
          width: 58px;
          height: 58px;
          margin: 0 auto 14px;
          border-radius: 50%;
          background: linear-gradient(135deg, #ff6b1e 0%, #e85c0d 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 26px;
          color: #ffffff;
          box-shadow: 0 6px 20px rgba(255, 107, 30, 0.35);
        }

        .cp-success h3 {
          font-size: 20px;
          font-weight: 700;
          color: #151515;
          margin: 0 0 6px;
          font-family: var(--heading-font-family, 'Poppins', sans-serif);
        }

        .cp-success p {
          font-size: 12.5px;
          color: #555;
          line-height: 1.5;
          margin: 0 0 6px;
          max-width: 360px;
          margin-left: auto;
          margin-right: auto;
        }

        .cp-success-note {
          font-size: 11.5px;
          color: #777;
          margin-top: 6px;
        }

        .cp-success-close {
          margin-top: 18px;
          padding: 9px 28px;
          border: none;
          border-radius: 8px;
          font-size: 13px;
          font-weight: 600;
          font-family: inherit;
          color: #ffffff;
          background: linear-gradient(135deg, #ff6b1e 0%, #e85c0d 100%);
          cursor: pointer;
          transition: all 0.25s ease;
          box-shadow: 0 4px 12px rgba(255, 107, 30, 0.3);
        }
        .cp-success-close:hover {
          transform: translateY(-1px);
          box-shadow: 0 6px 16px rgba(255, 107, 30, 0.4);
        }

        @media (max-width: 480px) {
          .cp-modal { max-height: 90vh; border-radius: 16px; }
          .cp-intro { padding: 14px 18px 10px; }
          .cp-body { padding: 12px 18px 16px; }
        }
      `}</style>

      <div
        className="cp-overlay"
        onClick={(e) => e.target === e.currentTarget && onClose()}
        role="dialog"
        aria-modal="true"
        aria-label="Careers Application Form"
      >
        <div className="cp-modal">
          {/* ── TOP NAV BAR (ORANGE BRANDING GRADIENT) ── */}
          <div className="cp-top-bar">
            <img src={logo} alt="Brandmingo Logo" className="cp-top-logo" />
            <button
              className="cp-close-btn"
              onClick={onClose}
              aria-label="Close careers popup"
            >
              <i className="fa-solid fa-xmark" />
            </button>
          </div>

          {submitted ? (
            /* ── THANK YOU SCREEN ── */
            <div className="cp-success">
              <div className="cp-success-icon">
                <i className="fa-solid fa-check" />
              </div>
              <h3>Application Submitted!</h3>
              <p>
                Thank you for your interest in joining <strong>Brandmingo</strong>.
                We have received your application and our HR team will review it shortly.
              </p>
              <p className="cp-success-note">
                <i className="fa-solid fa-envelope" /> We'll reach out to you via email within 3–5 business days.
              </p>
              <button className="cp-success-close" onClick={onClose}>
                Close
              </button>
            </div>
          ) : (
            /* ── FORM ── */
            <>
              {/* ── ELEGANT INTRO BANNER ── */}
              <div className="cp-intro">
                <div className="cp-badge">
                  <i className="fa-solid fa-briefcase" /> We're Hiring
                </div>
                <h2>Join Our Creative Team</h2>
                <p>Fill out the application below and take the next big step in your career.</p>
              </div>

              <form className="cp-body" onSubmit={handleSubmit} noValidate>
                {/* ── PERSONAL INFORMATION ── */}
                <div className="cp-section-tag">
                  <i className="fa-solid fa-user" />
                  Personal Information
                </div>

                <FieldGroup
                  label="Full Name"
                  required
                  error={errors.fullName}
                  touched={touched.fullName}
                >
                  <input
                    ref={firstRef}
                    type="text"
                    name="fullName"
                    placeholder="Enter your full name"
                    value={values.fullName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={cls("fullName")}
                    autoComplete="name"
                  />
                </FieldGroup>

                <div className="cp-row">
                  <FieldGroup
                    label="Email Address"
                    required
                    error={errors.email}
                    touched={touched.email}
                  >
                    <input
                      type="email"
                      name="email"
                      placeholder="you@example.com"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={cls("email")}
                      autoComplete="email"
                    />
                  </FieldGroup>

                  <FieldGroup
                    label="Phone Number"
                    required
                    error={errors.phone}
                    touched={touched.phone}
                  >
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Enter phone number"
                      value={values.phone}
                      onChange={handlePhone}
                      onBlur={handlePhoneBlur}
                      className={cls("phone")}
                      autoComplete="tel"
                    />
                  </FieldGroup>
                </div>

                {/* ── PROFESSIONAL INFORMATION ── */}
                <div className="cp-section-tag">
                  <i className="fa-solid fa-laptop-code" />
                  Professional Information
                </div>

                <div className="cp-row">
                  <FieldGroup
                    label="Position Applying For"
                    required
                    error={errors.position}
                    touched={touched.position}
                  >
                    <select
                      name="position"
                      value={values.position}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={cls("position")}
                    >
                      <option value="">Select Position</option>
                      {POSITIONS.map((p) => (
                        <option key={p} value={p}>
                          {p}
                        </option>
                      ))}
                    </select>
                  </FieldGroup>

                  <FieldGroup
                    label="Experience"
                    required
                    error={errors.experience}
                    touched={touched.experience}
                  >
                    <select
                      name="experience"
                      value={values.experience}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={cls("experience")}
                    >
                      <option value="">Select Experience</option>
                      {EXPERIENCE_OPTIONS.map((exp) => (
                        <option key={exp} value={exp}>
                          {exp}
                        </option>
                      ))}
                    </select>
                  </FieldGroup>
                </div>

                <div className="cp-row">
                  <FieldGroup
                    label="Current Location"
                    required
                    error={errors.location}
                    touched={touched.location}
                  >
                    <input
                      type="text"
                      name="location"
                      placeholder="e.g. Noida, Delhi NCR"
                      value={values.location}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={cls("location")}
                    />
                  </FieldGroup>

                  <FieldGroup label="Portfolio / LinkedIn URL (Optional)" error="" touched={false}>
                    <input
                      type="url"
                      name="portfolioUrl"
                      placeholder="https://linkedin.com/in/profile"
                      value={values.portfolioUrl}
                      onChange={handleChange}
                    />
                  </FieldGroup>
                </div>

                {/* ── RESUME & COVER MESSAGE ── */}
                <div className="cp-section-tag">
                  <i className="fa-solid fa-file-lines" />
                  Resume & Message
                </div>

                <div className="cp-group">
                  <label className="cp-label">
                    Upload Resume <span className="cp-req">*</span>
                  </label>
                  {!resumeFile ? (
                    <div className="cp-file-box">
                      <input
                        type="file"
                        ref={fileInputRef}
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                      />
                      <i className="fa-solid fa-cloud-arrow-up cp-file-box-icon" />
                      <p className="cp-file-box-text">
                        <strong>Upload Resume</strong> (PDF, DOC, DOCX — Max 5MB)
                      </p>
                    </div>
                  ) : (
                    <div className="cp-file-preview">
                      <i className="fa-solid fa-file-pdf cp-file-preview-icon" />
                      <div className="cp-file-info">
                        <span className="cp-file-name">{resumeFile.name}</span>
                        <span className="cp-file-size">
                          ({(resumeFile.size / 1024 / 1024).toFixed(2)} MB)
                        </span>
                      </div>
                      <button
                        type="button"
                        className="cp-file-remove"
                        onClick={removeFile}
                        title="Remove file"
                      >
                        <i className="fa-solid fa-xmark" />
                      </button>
                    </div>
                  )}
                  {(resumeError || (touched.resume && errors.resume)) && (
                    <span className="cp-error-msg" role="alert">
                      <i className="fa-solid fa-circle-exclamation" />
                      {resumeError || errors.resume}
                    </span>
                  )}
                </div>

                <FieldGroup label="Cover Message (Optional)" error="" touched={false}>
                  <textarea
                    name="coverMessage"
                    placeholder="Tell us about yourself..."
                    value={values.coverMessage}
                    onChange={handleChange}
                    rows={2}
                  />
                </FieldGroup>

                {/* ── SUBMIT BUTTON (ORANGE GRADIENT) ── */}
                <button
                  type="submit"
                  className="cp-submit-btn"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <span className="cp-spinner" />
                      Submitting Application...
                    </>
                  ) : (
                    <>
                      <i className="fa-solid fa-paper-plane" />
                      Apply Now
                    </>
                  )}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Careers;
