import{a as e}from"./rolldown-runtime-COnpUsM8.js";import{d as t,l as n}from"./animations-BJc3zUQd.js";import{t as r}from"./white-logo-B_W0aL42.js";var i=e(t(),1),a=n(),o=[`Web Developer`,`React Developer`,`WordPress Developer`,`Shopify Developer`,`SEO Executive`,`Performance Marketer`,`Social Media Manager`,`Graphic Designer`,`UI/UX Designer`,`Content Writer`,`Sales Executive`,`Business Development Executive`,`Internship`],s=[`Fresher`,`0–1 Year`,`1–2 Years`,`2–5 Years`,`5+ Years`],c={fullName:e=>e.trim()?e.trim().length<2?`At least 2 characters.`:/^[a-zA-Z\s'.\-]+$/.test(e.trim())?``:`Letters only please.`:`Full name is required.`,email:e=>{let t=e.trim();return t?/^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/.test(t)?``:`Enter a valid email address.`:`Email is required.`},phone:e=>{let t=e.replace(/\D/g,``);return t?t.length<7||t.length>15?`Enter a valid phone number.`:``:`Phone number is required.`},position:e=>e?``:`Please select a position.`,experience:e=>e?``:`Please select your experience.`,location:e=>e.trim()?``:`Location is required.`,resume:e=>e?``:`Resume file is required.`},l=[`fullName`,`email`,`phone`,`position`,`experience`,`location`,`resume`],u=5*1024*1024,d=[`application/pdf`,`application/msword`,`application/vnd.openxmlformats-officedocument.wordprocessingml.document`],f=({label:e,required:t,error:n,touched:r,children:i})=>(0,a.jsxs)(`div`,{className:`cp-group`,children:[(0,a.jsxs)(`label`,{className:`cp-label`,children:[e,t&&(0,a.jsx)(`span`,{className:`cp-req`,children:` *`})]}),i,r&&n&&(0,a.jsxs)(`span`,{className:`cp-error-msg`,role:`alert`,children:[(0,a.jsx)(`i`,{className:`fa-solid fa-circle-exclamation`}),n]})]}),p=({isOpen:e,onClose:t})=>{let[n,p]=(0,i.useState)(!1),[m,h]=(0,i.useState)(!1),g=(0,i.useRef)(null),_={fullName:``,email:``,phone:``,position:``,experience:``,location:``,portfolioUrl:``,coverMessage:``},[v,y]=(0,i.useState)(_),[b,x]=(0,i.useState)(null),[S,C]=(0,i.useState)(``),[w,T]=(0,i.useState)({}),[E,D]=(0,i.useState)({}),O=(0,i.useRef)(null);(0,i.useEffect)(()=>(e?(document.body.style.overflow=`hidden`,p(!1),h(!1),y(_),x(null),C(``),T({}),D({}),setTimeout(()=>g.current?.focus(),120)):document.body.style.overflow=``,()=>{document.body.style.overflow=``}),[e]),(0,i.useEffect)(()=>{let n=n=>{n.key===`Escape`&&e&&t()};return window.addEventListener(`keydown`,n),()=>window.removeEventListener(`keydown`,n)},[e,t]);let k=(e,t)=>c[e]?c[e](t):``,A=()=>{let e={},t={};return l.forEach(n=>{t[n]=!0,n===`resume`?e[n]=c.resume(b):e[n]=k(n,v[n])}),D(e=>({...e,...t})),T(t=>({...t,...e})),b||C(`Resume is required.`),Object.values(e).every(e=>!e)&&b&&!S},j=e=>{let{name:t,value:n}=e.target;y(e=>({...e,[t]:n})),E[t]&&T(e=>({...e,[t]:k(t,n)}))},M=e=>{let{name:t,value:n}=e.target;D(e=>({...e,[t]:!0})),T(e=>({...e,[t]:k(t,n)}))},N=e=>{let t=e.target.value.replace(/\D/g,``).slice(0,15);y(e=>({...e,phone:t})),E.phone&&T(e=>({...e,phone:k(`phone`,t)}))},P=()=>{D(e=>({...e,phone:!0})),T(e=>({...e,phone:k(`phone`,v.phone)}))},F=e=>{let t=e.target.files[0];if(t){if(!d.includes(t.type)){C(`Only PDF, DOC, or DOCX allowed.`),x(null);return}if(t.size>u){C(`File size must be under 5 MB.`),x(null);return}x(t),C(``),T(e=>({...e,resume:``}))}},I=()=>{x(null),C(``),O.current&&(O.current.value=``)},L=async e=>{if(e.preventDefault(),A()){h(!0);try{await fetch(`https://script.google.com/macros/s/AKfycbzNIsuCOE73SHPVoZ0qcZXRYsc09Hn1za60JHtyHZDfW9wywvGXXJ_jP0KBKPKtF2saDA/exec`,{method:`POST`,mode:`no-cors`,headers:{"Content-Type":`application/json`},body:JSON.stringify({formType:`Careers`,fullName:v.fullName,email:v.email,phone:v.phone,position:v.position,experience:v.experience,location:v.location,portfolioUrl:v.portfolioUrl,coverMessage:v.coverMessage,resumeName:b?b.name:``})}),h(!1),p(!0)}catch(e){console.error(`Careers submission error:`,e),h(!1),alert(`Something went wrong while submitting. Please try again.`)}}},R=e=>E[e]?w[e]?`cp-invalid`:`cp-valid`:``;return e?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(`style`,{children:`
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
      `}),(0,a.jsx)(`div`,{className:`cp-overlay`,onClick:e=>e.target===e.currentTarget&&t(),role:`dialog`,"aria-modal":`true`,"aria-label":`Careers Application Form`,children:(0,a.jsxs)(`div`,{className:`cp-modal`,children:[(0,a.jsxs)(`div`,{className:`cp-top-bar`,children:[(0,a.jsx)(`img`,{src:r,alt:`Brandmingo Logo`,className:`cp-top-logo`}),(0,a.jsx)(`button`,{className:`cp-close-btn`,onClick:t,"aria-label":`Close careers popup`,children:(0,a.jsx)(`i`,{className:`fa-solid fa-xmark`})})]}),n?(0,a.jsxs)(`div`,{className:`cp-success`,children:[(0,a.jsx)(`div`,{className:`cp-success-icon`,children:(0,a.jsx)(`i`,{className:`fa-solid fa-check`})}),(0,a.jsx)(`h3`,{children:`Application Submitted!`}),(0,a.jsxs)(`p`,{children:[`Thank you for your interest in joining `,(0,a.jsx)(`strong`,{children:`Brandmingo`}),`. We have received your application and our HR team will review it shortly.`]}),(0,a.jsxs)(`p`,{className:`cp-success-note`,children:[(0,a.jsx)(`i`,{className:`fa-solid fa-envelope`}),` We'll reach out to you via email within 3–5 business days.`]}),(0,a.jsx)(`button`,{className:`cp-success-close`,onClick:t,children:`Close`})]}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(`div`,{className:`cp-intro`,children:[(0,a.jsxs)(`div`,{className:`cp-badge`,children:[(0,a.jsx)(`i`,{className:`fa-solid fa-briefcase`}),` We're Hiring`]}),(0,a.jsx)(`h2`,{children:`Join Our Creative Team`}),(0,a.jsx)(`p`,{children:`Fill out the application below and take the next big step in your career.`})]}),(0,a.jsxs)(`form`,{className:`cp-body`,onSubmit:L,noValidate:!0,children:[(0,a.jsxs)(`div`,{className:`cp-section-tag`,children:[(0,a.jsx)(`i`,{className:`fa-solid fa-user`}),`Personal Information`]}),(0,a.jsx)(f,{label:`Full Name`,required:!0,error:w.fullName,touched:E.fullName,children:(0,a.jsx)(`input`,{ref:g,type:`text`,name:`fullName`,placeholder:`Enter your full name`,value:v.fullName,onChange:j,onBlur:M,className:R(`fullName`),autoComplete:`name`})}),(0,a.jsxs)(`div`,{className:`cp-row`,children:[(0,a.jsx)(f,{label:`Email Address`,required:!0,error:w.email,touched:E.email,children:(0,a.jsx)(`input`,{type:`email`,name:`email`,placeholder:`you@example.com`,value:v.email,onChange:j,onBlur:M,className:R(`email`),autoComplete:`email`})}),(0,a.jsx)(f,{label:`Phone Number`,required:!0,error:w.phone,touched:E.phone,children:(0,a.jsx)(`input`,{type:`tel`,name:`phone`,placeholder:`Enter phone number`,value:v.phone,onChange:N,onBlur:P,className:R(`phone`),autoComplete:`tel`})})]}),(0,a.jsxs)(`div`,{className:`cp-section-tag`,children:[(0,a.jsx)(`i`,{className:`fa-solid fa-laptop-code`}),`Professional Information`]}),(0,a.jsxs)(`div`,{className:`cp-row`,children:[(0,a.jsx)(f,{label:`Position Applying For`,required:!0,error:w.position,touched:E.position,children:(0,a.jsxs)(`select`,{name:`position`,value:v.position,onChange:j,onBlur:M,className:R(`position`),children:[(0,a.jsx)(`option`,{value:``,children:`Select Position`}),o.map(e=>(0,a.jsx)(`option`,{value:e,children:e},e))]})}),(0,a.jsx)(f,{label:`Experience`,required:!0,error:w.experience,touched:E.experience,children:(0,a.jsxs)(`select`,{name:`experience`,value:v.experience,onChange:j,onBlur:M,className:R(`experience`),children:[(0,a.jsx)(`option`,{value:``,children:`Select Experience`}),s.map(e=>(0,a.jsx)(`option`,{value:e,children:e},e))]})})]}),(0,a.jsxs)(`div`,{className:`cp-row`,children:[(0,a.jsx)(f,{label:`Current Location`,required:!0,error:w.location,touched:E.location,children:(0,a.jsx)(`input`,{type:`text`,name:`location`,placeholder:`e.g. Noida, Delhi NCR`,value:v.location,onChange:j,onBlur:M,className:R(`location`)})}),(0,a.jsx)(f,{label:`Portfolio / LinkedIn URL (Optional)`,error:``,touched:!1,children:(0,a.jsx)(`input`,{type:`url`,name:`portfolioUrl`,placeholder:`https://linkedin.com/in/profile`,value:v.portfolioUrl,onChange:j})})]}),(0,a.jsxs)(`div`,{className:`cp-section-tag`,children:[(0,a.jsx)(`i`,{className:`fa-solid fa-file-lines`}),`Resume & Message`]}),(0,a.jsxs)(`div`,{className:`cp-group`,children:[(0,a.jsxs)(`label`,{className:`cp-label`,children:[`Upload Resume `,(0,a.jsx)(`span`,{className:`cp-req`,children:`*`})]}),b?(0,a.jsxs)(`div`,{className:`cp-file-preview`,children:[(0,a.jsx)(`i`,{className:`fa-solid fa-file-pdf cp-file-preview-icon`}),(0,a.jsxs)(`div`,{className:`cp-file-info`,children:[(0,a.jsx)(`span`,{className:`cp-file-name`,children:b.name}),(0,a.jsxs)(`span`,{className:`cp-file-size`,children:[`(`,(b.size/1024/1024).toFixed(2),` MB)`]})]}),(0,a.jsx)(`button`,{type:`button`,className:`cp-file-remove`,onClick:I,title:`Remove file`,children:(0,a.jsx)(`i`,{className:`fa-solid fa-xmark`})})]}):(0,a.jsxs)(`div`,{className:`cp-file-box`,children:[(0,a.jsx)(`input`,{type:`file`,ref:O,accept:`.pdf,.doc,.docx`,onChange:F}),(0,a.jsx)(`i`,{className:`fa-solid fa-cloud-arrow-up cp-file-box-icon`}),(0,a.jsxs)(`p`,{className:`cp-file-box-text`,children:[(0,a.jsx)(`strong`,{children:`Upload Resume`}),` (PDF, DOC, DOCX — Max 5MB)`]})]}),(S||E.resume&&w.resume)&&(0,a.jsxs)(`span`,{className:`cp-error-msg`,role:`alert`,children:[(0,a.jsx)(`i`,{className:`fa-solid fa-circle-exclamation`}),S||w.resume]})]}),(0,a.jsx)(f,{label:`Cover Message (Optional)`,error:``,touched:!1,children:(0,a.jsx)(`textarea`,{name:`coverMessage`,placeholder:`Tell us about yourself...`,value:v.coverMessage,onChange:j,rows:2})}),(0,a.jsx)(`button`,{type:`submit`,className:`cp-submit-btn`,disabled:m,children:m?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(`span`,{className:`cp-spinner`}),`Submitting Application...`]}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(`i`,{className:`fa-solid fa-paper-plane`}),`Apply Now`]})})]})]})]})})]}):null};export{p as default};