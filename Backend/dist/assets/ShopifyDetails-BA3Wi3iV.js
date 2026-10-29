import{a as e}from"./rolldown-runtime-COnpUsM8.js";import{d as t,p as n}from"./admin-editor-CQTIwrz8.js";import{P as r,d as i,k as a}from"./vendor-LVJMZm79.js";import{t as o}from"./swiper-DPOQuZeZ.js";import{n as s}from"./popup-DgPSrofa.js";import{n as c,t as l}from"./projects-BVa-rrQN.js";import{t as u}from"./RelatedServices-lTQygw6c.js";import"./PortfolioSlider-KefDAtpX.js";var d=e(n(),1),f=t(),p=[`New Shopify Store Development`,`Redesign My Existing Store`,`Migrate Website to Shopify`,`Shopify Store Customisation`,`Shopify Maintenance & Support`],m=`Hi, I am looking to build a modern, high-converting Shopify store for my brand. We have around 20-50 SKUs and need custom sections, mobile optimization, and fast checkout integration.`,h=({onClose:e})=>{let[t,n]=(0,d.useState)({fullName:``,email:``,phone:``,service:`New Shopify Store Development`,requirements:``}),[r,i]=(0,d.useState)({}),[a,o]=(0,d.useState)({}),[s,c]=(0,d.useState)(!1),[l,u]=(0,d.useState)(!1),[h,g]=(0,d.useState)(!1),_=(e,t)=>{switch(e){case`fullName`:return t.trim()?t.trim().length<2?`Name must be at least 2 characters`:``:`Please enter your full name`;case`email`:return t.trim()?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t.trim())?``:`Please enter a valid email address`:`Please enter your business email`;case`phone`:return t.trim()?t.replace(/\D/g,``).length<10?`Please enter a valid 10-digit number`:``:`Please enter your phone number`;case`service`:return t?``:`Please select a service`;default:return``}},v=e=>{let{name:t,value:a}=e.target;n(e=>({...e,[t]:a})),r[t]&&i(e=>({...e,[t]:_(t,a)}))},y=e=>{let{name:t,value:n}=e.target;o(e=>({...e,[t]:!0})),i(e=>({...e,[t]:_(t,n)}))},b=()=>{n(e=>({...e,requirements:m})),g(!0),setTimeout(()=>g(!1),2500)},x=async e=>{e.preventDefault();let n={},r={};if(Object.keys(t).forEach(e=>{r[e]=!0;let i=_(e,t[e]);i&&(n[e]=i)}),o(r),i(n),Object.keys(n).length>0){let e=Object.keys(n)[0],t=document.querySelector(`[name="${e}"]`);t&&t.focus();return}c(!0);try{await fetch(`https://script.google.com/macros/s/AKfycbzNIsuCOE73SHPVoZ0qcZXRYsc09Hn1za60JHtyHZDfW9wywvGXXJ_jP0KBKPKtF2saDA/exec`,{method:`POST`,mode:`no-cors`,headers:{"Content-Type":`application/json`},body:JSON.stringify({formType:`Shopify leads`,fullName:t.fullName.trim(),email:t.email.trim(),phone:`+91 `+t.phone.trim(),service:t.service,requirements:t.requirements.trim()||`N/A`,project:t.requirements.trim()||`N/A`,submittedAt:new Date().toLocaleString(`en-IN`,{timeZone:`Asia/Kolkata`})})}),c(!1),u(!0)}catch(e){console.error(`Hero form submission error:`,e),c(!1),u(!0)}},S=()=>{u(!1),typeof e==`function`&&e()};return(0,f.jsxs)(`div`,{className:`sh-hero-form-container`,children:[(0,f.jsx)(`div`,{className:`sh-hero-form-glow`,"aria-hidden":`true`}),(0,f.jsxs)(`div`,{className:`sh-hero-form-card`,children:[(0,f.jsx)(`button`,{type:`button`,className:`sh-form-close-btn`,onClick:S,"aria-label":`Close form`,title:`Close form & show 3D graphic`,children:(0,f.jsxs)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.5`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,f.jsx)(`line`,{x1:`18`,y1:`6`,x2:`6`,y2:`18`}),(0,f.jsx)(`line`,{x1:`6`,y1:`6`,x2:`18`,y2:`18`})]})}),l?(0,f.jsxs)(`div`,{className:`sh-form-success-box`,children:[(0,f.jsx)(`div`,{className:`sh-success-icon-wrap`,children:(0,f.jsxs)(`svg`,{width:`40`,height:`40`,viewBox:`0 0 24 24`,fill:`none`,stroke:`#ff6b1e`,strokeWidth:`2.5`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,f.jsx)(`path`,{d:`M22 11.08V12a10 10 0 1 1-5.93-9.14`}),(0,f.jsx)(`polyline`,{points:`22 4 12 14.01 9 11.01`})]})}),(0,f.jsx)(`h3`,{className:`sh-success-title`,children:`Enquiry Received!`}),(0,f.jsxs)(`p`,{className:`sh-success-desc`,children:[`Thank you, `,(0,f.jsx)(`strong`,{children:t.fullName}),`. Our Shopify solutions expert will connect with you within `,(0,f.jsx)(`strong`,{children:`2 hours`}),` to discuss your project.`]}),(0,f.jsxs)(`div`,{className:`sh-success-actions`,children:[(0,f.jsx)(`button`,{type:`button`,className:`sh-success-btn`,onClick:()=>{u(!1),n({fullName:``,email:``,phone:``,service:`New Shopify Store Development`,requirements:``})},children:`Send Another Enquiry`}),(0,f.jsx)(`button`,{type:`button`,className:`sh-success-ghost-btn`,onClick:S,children:`Close & View 3D Showcase`})]})]}):(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(`div`,{className:`sh-form-header`,children:[(0,f.jsxs)(`div`,{className:`sh-form-tag`,children:[(0,f.jsx)(`span`,{className:`sh-tag-dot`}),`Get Free Proposal`]}),(0,f.jsx)(`h2`,{className:`sh-form-title`,children:`Let's Build Your Shopify Store`}),(0,f.jsx)(`p`,{className:`sh-form-subtitle`,children:`Tell us about your project. Our team will get in touch with you.`})]}),(0,f.jsxs)(`form`,{className:`sh-form-body`,onSubmit:x,noValidate:!0,children:[(0,f.jsxs)(`div`,{className:`sh-field-group`,children:[(0,f.jsxs)(`label`,{className:`sh-label`,htmlFor:`sh-fullName`,children:[`Full Name `,(0,f.jsx)(`span`,{className:`sh-req`,children:`*`})]}),(0,f.jsx)(`input`,{type:`text`,id:`sh-fullName`,name:`fullName`,className:`sh-input ${a.fullName&&r.fullName?`sh-input--error`:``}`,placeholder:`Enter your full name`,value:t.fullName,onChange:v,onBlur:y,autoComplete:`name`}),a.fullName&&r.fullName&&(0,f.jsx)(`span`,{className:`sh-err-msg`,children:r.fullName})]}),(0,f.jsxs)(`div`,{className:`sh-field-group`,children:[(0,f.jsxs)(`label`,{className:`sh-label`,htmlFor:`sh-email`,children:[`Business Email `,(0,f.jsx)(`span`,{className:`sh-req`,children:`*`})]}),(0,f.jsx)(`input`,{type:`email`,id:`sh-email`,name:`email`,className:`sh-input ${a.email&&r.email?`sh-input--error`:``}`,placeholder:`you@company.com`,value:t.email,onChange:v,onBlur:y,autoComplete:`email`}),a.email&&r.email&&(0,f.jsx)(`span`,{className:`sh-err-msg`,children:r.email})]}),(0,f.jsxs)(`div`,{className:`sh-field-group`,children:[(0,f.jsxs)(`label`,{className:`sh-label`,htmlFor:`sh-phone`,children:[`Phone Number `,(0,f.jsx)(`span`,{className:`sh-req`,children:`*`})]}),(0,f.jsxs)(`div`,{className:`sh-phone-wrap`,children:[(0,f.jsx)(`span`,{className:`sh-phone-prefix`,children:`+91`}),(0,f.jsx)(`input`,{type:`tel`,id:`sh-phone`,name:`phone`,className:`sh-input sh-input--phone ${a.phone&&r.phone?`sh-input--error`:``}`,placeholder:`Enter mobile number`,value:t.phone,onChange:v,onBlur:y,maxLength:10,autoComplete:`tel`})]}),a.phone&&r.phone&&(0,f.jsx)(`span`,{className:`sh-err-msg`,children:r.phone})]}),(0,f.jsxs)(`div`,{className:`sh-field-group`,children:[(0,f.jsxs)(`label`,{className:`sh-label`,htmlFor:`sh-service`,children:[`What service do you need? `,(0,f.jsx)(`span`,{className:`sh-req`,children:`*`})]}),(0,f.jsxs)(`div`,{className:`sh-select-wrap`,children:[(0,f.jsx)(`select`,{id:`sh-service`,name:`service`,className:`sh-select`,value:t.service,onChange:v,onBlur:y,children:p.map(e=>(0,f.jsx)(`option`,{value:e,children:e},e))}),(0,f.jsx)(`span`,{className:`sh-select-arrow`,"aria-hidden":`true`,children:`▼`})]})]}),(0,f.jsxs)(`div`,{className:`sh-field-group`,children:[(0,f.jsx)(`div`,{className:`sh-label-row`,children:(0,f.jsxs)(`label`,{className:`sh-label`,htmlFor:`sh-requirements`,children:[`Project Requirements `,(0,f.jsx)(`span`,{className:`sh-optional`,children:`(Optional)`})]})}),(0,f.jsx)(`textarea`,{id:`sh-requirements`,name:`requirements`,className:`sh-textarea`,rows:2,placeholder:`Tell us about your products, features, or project goals...`,value:t.requirements,onChange:v})]}),(0,f.jsx)(`div`,{className:`sh-quick-helper`,children:(0,f.jsxs)(`button`,{type:`button`,className:`sh-copy-sample-btn`,onClick:b,children:[(0,f.jsxs)(`svg`,{width:`13`,height:`13`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,f.jsx)(`rect`,{x:`9`,y:`9`,width:`13`,height:`13`,rx:`2`,ry:`2`}),(0,f.jsx)(`path`,{d:`M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1`})]}),h?`Sample Applied!`:`Use Sample Enquiry`]})}),(0,f.jsx)(`div`,{className:`sh-submit-wrap`,children:(0,f.jsx)(`button`,{type:`submit`,className:`sh-submit-btn`,disabled:s,children:s?(0,f.jsxs)(`span`,{className:`sh-spinner-row`,children:[(0,f.jsx)(`span`,{className:`sh-spinner`}),`Submitting...`]}):(0,f.jsxs)(`span`,{className:`sh-submit-label`,children:[`Get Free Consultation`,(0,f.jsxs)(`svg`,{width:`15`,height:`15`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.4`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,f.jsx)(`line`,{x1:`5`,y1:`12`,x2:`19`,y2:`12`}),(0,f.jsx)(`polyline`,{points:`12 5 19 12 12 19`})]})]})})}),(0,f.jsxs)(`div`,{className:`sh-form-trust`,children:[(0,f.jsxs)(`svg`,{width:`12`,height:`12`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,children:[(0,f.jsx)(`rect`,{x:`3`,y:`11`,width:`18`,height:`11`,rx:`2`,ry:`2`}),(0,f.jsx)(`path`,{d:`M7 11V7a5 5 0 0 1 10 0v4`})]}),(0,f.jsx)(`span`,{children:`100% Confidential · No Spam Guarantee`})]})]})]})]})]})},g=({text:e,fontFamily:t})=>(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(`style`,{children:`
      @property --gt-bg1x { syntax: "<number>"; inherits: true; initial-value: 25; }
      @property --gt-bg2x { syntax: "<number>"; inherits: true; initial-value: 35; }
      @property --gt-bg2y { syntax: "<number>"; inherits: true; initial-value: 40; }
      @property --gt-bg3x { syntax: "<number>"; inherits: true; initial-value: 45; }
      @property --gt-bg3y { syntax: "<number>"; inherits: true; initial-value: 20; }
      .gt-text {
        font-family: ${t||`var(--heading-font-family)`};
        font-size: clamp(48px, 9vw, 92px);
        font-weight: 700;
        line-height: 1;
        letter-spacing: -0.02em;
        margin: 0;
        display: block;
        width: 100%;
        mix-blend-mode: lighten;
        background:
          url("data:image/svg+xml,%3Csvg viewBox='0 0 600 600' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E"),
          conic-gradient(from 120deg at calc(var(--gt-bg1x) * 1%) 85%, hsl(15deg 100% 8%), hsl(20deg 100% 30%), hsl(25deg 100% 55%), hsl(30deg 100% 65%), hsl(35deg 95% 72%), hsl(40deg 100% 78%), hsl(45deg 100% 85%), hsl(38deg 100% 72%), hsl(28deg 100% 58%), hsl(20deg 100% 40%), hsl(15deg 100% 10%)),
          radial-gradient(ellipse at calc(var(--gt-bg2x) * 1%) calc(var(--gt-bg2y) * 1%), rgba(255,220,180,0.98) 10%, transparent 38%),
          radial-gradient(ellipse at calc(var(--gt-bg3x) * 1%) calc(var(--gt-bg3y) * 1%), hsl(30deg 100% 65%), transparent 38%);
        background-size: 500px, cover, cover, cover;
        background-blend-mode: color-burn;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        animation: gt-shift 18s linear infinite alternate;
      }
      @keyframes gt-shift {
        0%   { --gt-bg1x:25; --gt-bg2x:35; --gt-bg2y:40; --gt-bg3x:45; --gt-bg3y:20; }
        25%  { --gt-bg1x:15; --gt-bg2x:75; --gt-bg2y:25; --gt-bg3x:30; --gt-bg3y:10; }
        50%  { --gt-bg1x:8;  --gt-bg2x:20; --gt-bg2y:20; --gt-bg3x:40; --gt-bg3y:45; }
        75%  { --gt-bg1x:38; --gt-bg2x:55; --gt-bg2y:8;  --gt-bg3x:18; --gt-bg3y:15; }
        100% { --gt-bg1x:25; --gt-bg2x:35; --gt-bg2y:40; --gt-bg3x:45; --gt-bg3y:20; }
      }
    `}),(0,f.jsx)(`span`,{className:`gt-text`,children:e})]}),_=()=>{let[e,t]=d.useState(`var(--heading-font-family)`),[n,r]=(0,d.useState)(!0);return(0,d.useEffect)(()=>{let e=getComputedStyle(document.documentElement).getPropertyValue(`--heading-font-family`).trim();e&&t(e)},[]),(0,f.jsx)(`section`,{className:`rdh-section`,children:(0,f.jsx)(`div`,{className:`auto-container`,children:(0,f.jsxs)(`div`,{className:`rdh-grid`,children:[(0,f.jsxs)(`div`,{className:`rdh-top-block`,children:[(0,f.jsx)(`div`,{className:`rdh-eyebrow`,children:`PREMIUM SHOPIFY SOLUTION`}),(0,f.jsx)(`h1`,{className:`title`,children:`Shopify`}),(0,f.jsx)(`div`,{className:`rdh-liquid-wrap`,children:(0,f.jsx)(g,{text:`Development`,fontFamily:e})}),(0,f.jsxs)(`ul`,{className:`rdh-breadcrumb`,children:[(0,f.jsx)(`li`,{children:(0,f.jsx)(`a`,{href:`/`,children:`Home`})}),(0,f.jsx)(`li`,{className:`sep`,children:`/`}),(0,f.jsx)(`li`,{className:`active`,children:`Shopify Development`})]})]}),n?(0,f.jsx)(`div`,{className:`rdh-right has-form`,children:(0,f.jsx)(h,{onClose:()=>r(!1)})},`hero-form-box`):(0,f.jsxs)(`div`,{className:`rdh-right`,children:[(0,f.jsx)(`div`,{className:`rdh-ring-1`}),(0,f.jsx)(`div`,{className:`rdh-ring-2`}),(0,f.jsx)(`div`,{className:`rdh-img-glow`}),(0,f.jsx)(`div`,{className:`rdh-atom-wrap rdh-no-spin`,children:(0,f.jsx)(i,{src:`https://lottie.host/541c4010-602e-4a20-81e1-2eed81d671ab/vprLzTuF7A.lottie`,loop:!0,autoplay:!0})}),(0,f.jsxs)(`div`,{className:`rdh-chip rdh-chip-1`,children:[(0,f.jsx)(`i`,{className:`fas fa-shopping-cart`}),` Shopify Expert Ready`]}),(0,f.jsxs)(`div`,{className:`rdh-chip rdh-chip-2`,children:[(0,f.jsx)(`i`,{className:`fas fa-store`}),` High-Converting Stores`]}),(0,f.jsxs)(`div`,{className:`rdh-chip rdh-chip-3`,children:[(0,f.jsx)(`i`,{className:`fas fa-chart-line`}),` Sales-Driven Growth`]}),(0,f.jsx)(`span`,{className:`rdh-vert-label`,children:`React · PWA · SPA · TypeScript`})]},`hero-graphic-box`),(0,f.jsxs)(`div`,{className:`rdh-bottom-block`,children:[(0,f.jsx)(`p`,{className:`rdh-desc`,children:`Build high-performing Shopify stores that are fast, secure, and optimized for conversions. We create scalable eCommerce solutions designed to increase sales, enhance user experience, and help your business grow faster online.`}),(0,f.jsxs)(`div`,{className:`rdh-btn-row`,children:[(0,f.jsxs)(`a`,{href:`/`,className:`rdh-btn-primary`,onClick:e=>{e.preventDefault(),s()},children:[`Discuss Your Store Requirements`,(0,f.jsx)(`i`,{className:`fas fa-arrow-right`})]}),(0,f.jsxs)(a,{to:`/portfolio`,className:`rdh-btn-ghost`,children:[(0,f.jsx)(`i`,{className:`fas fa-play`}),`View Our Work`]})]}),(0,f.jsxs)(`div`,{className:`rdh-badges`,children:[(0,f.jsxs)(`div`,{className:`rdh-badge`,children:[(0,f.jsx)(`img`,{src:`/Cloudinary-images/f-500_icvdap.svg`,className:`rdh-badge-logo`,alt:`Fortune 500`}),(0,f.jsxs)(`div`,{className:`rdh-badge-text`,children:[(0,f.jsx)(`strong`,{children:`Fortune 500`}),(0,f.jsx)(`span`,{children:`Trusted by Companies`})]})]}),(0,f.jsxs)(`div`,{className:`rdh-badge`,children:[(0,f.jsx)(`img`,{src:`/Cloudinary-images/ica_hx4ujj.svg`,className:`rdh-badge-logo`,alt:`ICA`}),(0,f.jsxs)(`div`,{className:`rdh-badge-text`,children:[(0,f.jsx)(`strong`,{children:`ICA Certified`}),(0,f.jsx)(`span`,{children:`International Compliance`})]})]}),(0,f.jsxs)(`div`,{className:`rdh-badge`,children:[(0,f.jsx)(`img`,{src:`/Cloudinary-images/topp-dev_l9jcyb.png`,className:`rdh-badge-logo`,alt:`Top Devs`}),(0,f.jsxs)(`div`,{className:`rdh-badge-text`,children:[(0,f.jsx)(`strong`,{children:`Top Developers`}),(0,f.jsx)(`span`,{children:`Award Recognised`})]})]})]})]})]})})})},v=l.filter(e=>e.type===`Shopify`||e.title===`Rajcrest Website`),y=18,b=.65,x=()=>{let e=(0,d.useRef)(null),t=(0,d.useRef)(0),n=(0,d.useRef)(null),r=(0,d.useRef)(!1),i=(0,d.useRef)(!1),a=(0,d.useRef)(0),o=(0,d.useRef)(0),s=(0,d.useRef)(!1),l=(0,d.useRef)(!1),u=(0,d.useRef)(0),p=(0,d.useRef)(0),m=(0,d.useRef)(!1),[h,g]=(0,d.useState)(null),_=[...v,...v,...v,...v],x=()=>window.innerWidth<=480?215:window.innerWidth<=768?235:window.innerWidth<=1200?255:270;(0,d.useEffect)(()=>{let i=()=>{if(!r.current&&!h){t.current-=b;let n=e.current;if(n){let e=x(),r=v.length*(e+y);Math.abs(t.current)>=r&&(t.current=0),n.style.transform=`translate3d(${t.current}px, 0, 0)`}}n.current=requestAnimationFrame(i)};return n.current=requestAnimationFrame(i),()=>{n.current&&cancelAnimationFrame(n.current)}},[h]);let S=e=>{i.current=!0,s.current=!1,a.current=e.pageX,o.current=t.current,r.current=!0},C=n=>{if(!i.current)return;let r=n.pageX-a.current;Math.abs(r)>4&&(s.current=!0),t.current=o.current+r,e.current&&(e.current.style.transform=`translate3d(${t.current}px, 0, 0)`)},w=()=>{i.current=!1,h||(r.current=!1)},T=e=>{l.current=!0,m.current=!1,u.current=e.touches[0].clientX,p.current=t.current,r.current=!0},E=n=>{if(!l.current)return;let r=n.touches[0].clientX-u.current;Math.abs(r)>5&&(m.current=!0),t.current=p.current+r,e.current&&(e.current.style.transform=`translate3d(${t.current}px, 0, 0)`)},D=()=>{l.current=!1,h||(r.current=!1)},O=e=>{s.current||m.current||g(e)};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(`section`,{className:`sh-hero-slider-section`,"aria-label":`Shopify Featured Projects Showcase`,children:[(0,f.jsx)(`div`,{className:`sh-slider-ambient`,"aria-hidden":`true`}),(0,f.jsx)(`div`,{className:`sh-slider-viewport`,onMouseEnter:()=>r.current=!0,onMouseLeave:()=>{h||(r.current=!1),w()},onMouseDown:S,onMouseMove:C,onMouseUp:w,onTouchStart:T,onTouchMove:E,onTouchEnd:D,children:(0,f.jsx)(`div`,{ref:e,className:`sh-slider-track`,children:_.map((e,t)=>{let n=t%v.length+1,r=e.img||e.images?.[0];return(0,f.jsxs)(`div`,{className:`sh-portfolio-card`,onClick:()=>O(e),role:`button`,tabIndex:0,"aria-label":`View ${e.title} project`,onKeyDown:t=>{t.key===`Enter`&&O(e)},children:[(0,f.jsxs)(`div`,{className:`sh-card-img-wrap`,children:[(0,f.jsxs)(`span`,{className:`sh-card-badge`,children:[`0`,n]}),(0,f.jsx)(`span`,{className:`sh-card-platform-tag`,children:e.type===`Shopify`?`Shopify Plus`:`Website`}),(0,f.jsx)(`img`,{src:r,alt:e.title,loading:`lazy`,draggable:`false`}),(0,f.jsx)(`div`,{className:`sh-card-img-overlay`})]}),(0,f.jsxs)(`div`,{className:`sh-card-content`,children:[(0,f.jsxs)(`div`,{className:`sh-card-meta-row`,children:[(0,f.jsx)(`span`,{className:`sh-card-category`,children:e.category}),e.meta?.duration&&(0,f.jsx)(`span`,{className:`sh-card-year`,children:e.meta.duration})]}),(0,f.jsx)(`h3`,{className:`sh-card-title`,children:e.title}),(0,f.jsxs)(`div`,{className:`sh-card-footer`,children:[(0,f.jsxs)(`span`,{className:`sh-card-cta`,children:[`Explore Store`,(0,f.jsxs)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.4`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,f.jsx)(`line`,{x1:`7`,y1:`17`,x2:`17`,y2:`7`}),(0,f.jsx)(`polyline`,{points:`7 7 17 7 17 17`})]})]}),(0,f.jsx)(`div`,{className:`sh-card-glow-btn`,"aria-hidden":`true`,children:(0,f.jsxs)(`svg`,{width:`12`,height:`12`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.6`,children:[(0,f.jsx)(`line`,{x1:`5`,y1:`12`,x2:`19`,y2:`12`}),(0,f.jsx)(`polyline`,{points:`12 5 19 12 12 19`})]})})]})]})]},`${e.title}-${t}`)})})})]}),h&&(0,f.jsx)(c,{project:h,onClose:()=>g(null)})]})},S=[{id:`store-development`,title:`Custom Shopify Store Development`,desc:`We build high-converting Shopify stores tailored to your brand, products, and business goals.`,points:[`Custom storefront design aligned with your brand identity`,`Mobile-friendly and conversion-focused layouts`,`Seamless shopping experience and intuitive navigation`,`Scalable Shopify solutions for business growth`]},{id:`store-redesign`,title:`Shopify Store Redesign`,desc:`Transform your existing Shopify store with a modern design, improved usability, and a better shopping experience.`,points:[`Modernise your storefront with a premium look`,`Improve product discovery and navigation`,`Optimise layouts for mobile and desktop`,`Enhance user experience across the customer journey`]},{id:`theme-customization`,title:`Shopify Theme Customization`,desc:`Customise your Shopify theme to match your business requirements and create a consistent brand experience.`,points:[`Customise theme layouts, sections, and templates`,`Personalise colours, typography, and styling`,`Design unique product and collection pages`,`Improve responsive design across devices`]},{id:`app-integrations`,title:`App & API Integrations`,desc:`Connect your Shopify store with essential business tools to streamline operations and expand functionality.`,points:[`Integrate payment gateways and shipping solutions`,`Connect inventory, CRM, and marketing tools`,`Configure relevant Shopify apps and extensions`,`Automate workflows through supported integrations`]},{id:`migration-services`,title:`Shopify Migration Services`,desc:`Move your online store to Shopify with a structured migration process designed to minimise business disruption.`,points:[`Migrate products, collections, and customer data`,`Transfer relevant store information and content`,`Preserve URL structures and configure redirects`,`Test store functionality before launch`]},{id:`performance-optimization`,title:`Shopify Performance Optimization`,desc:`Improve your Shopify store's loading experience, usability, and technical performance.`,points:[`Identify page speed bottlenecks`,`Optimise images and frontend assets`,`Review scripts and apps affecting performance`,`Improve mobile usability and Core Web Vitals`]},{id:`seo-optimization`,title:`Shopify SEO Optimization`,desc:`Improve your Shopify store's organic search visibility with ecommerce-focused SEO strategies.`,points:[`Optimise product and collection page metadata`,`Improve headings, descriptions, and internal linking`,`Address crawlability and indexing issues`,`Optimise image alt text and relevant structured data`]},{id:`maintenance-support`,title:`Shopify Maintenance & Support`,desc:`Keep your Shopify store updated, functional, and ready to support your growing ecommerce business.`,points:[`Resolve theme and storefront issues`,`Maintain apps and integrations`,`Test important shopping and checkout journeys`,`Implement ongoing technical improvements`]}],C=()=>{let[e,t]=(0,d.useState)(S[0]),[n,r]=(0,d.useState)(S[0].id),i=e=>{r(t=>t===e?null:e)};return(0,f.jsx)(f.Fragment,{children:(0,f.jsxs)(`div`,{className:`react-expertise-section`,children:[(0,f.jsxs)(`div`,{className:`auto-container`,children:[(0,f.jsx)(`h3`,{className:`mb-5 text-center section-main-h3`,children:`Our Shopify Development Expertise`}),(0,f.jsxs)(`div`,{className:`react-expertise-grid re-desktop-only`,children:[(0,f.jsx)(`div`,{className:`react-expertise-tabs`,children:S.map(n=>(0,f.jsxs)(`button`,{className:`react-expertise-tab-btn ${e.id===n.id?`active`:``}`,onClick:()=>t(n),children:[(0,f.jsx)(`h3`,{className:`tab-btn-title`,children:n.title}),(0,f.jsx)(`span`,{className:`arrow-icon`,children:(0,f.jsx)(`i`,{className:`fas fa-arrow-right`})})]},n.id))}),(0,f.jsxs)(`div`,{className:`react-expertise-content`,children:[(0,f.jsx)(`h3`,{className:`react-expertise-content-title`,children:e.title}),(0,f.jsx)(`p`,{className:`react-expertise-content-desc`,children:e.desc}),(0,f.jsx)(`ul`,{className:`react-expertise-content-list`,children:e.points.map((e,t)=>(0,f.jsx)(`li`,{children:e},t))})]},e.id)]}),(0,f.jsx)(`div`,{className:`re-accordion re-mobile-only`,children:S.map(e=>{let t=n===e.id;return(0,f.jsxs)(`div`,{className:`re-accordion-item ${t?`open`:``}`,children:[(0,f.jsxs)(`button`,{className:`re-accordion-header`,onClick:()=>i(e.id),children:[(0,f.jsx)(`span`,{className:`re-acc-title`,children:e.title}),(0,f.jsx)(`span`,{className:`re-acc-icon`,children:(0,f.jsx)(`i`,{className:`fas fa-chevron-${t?`up`:`down`}`})})]}),t&&(0,f.jsxs)(`div`,{className:`re-accordion-body`,children:[(0,f.jsx)(`p`,{className:`re-acc-desc`,children:e.desc}),(0,f.jsx)(`ul`,{className:`re-acc-list`,children:e.points.map((e,t)=>(0,f.jsx)(`li`,{children:e},t))})]})]},e.id)})})]}),(0,f.jsx)(`style`,{children:`
          /* ─────────────────────────────────────────
             REACT EXPERTISE — Desktop unchanged
             Mobile: accordion replaces grid
          ───────────────────────────────────────── */

          .react-expertise-section {
            background-color: var(--body-bg);
            padding: 100px 0;
          }

          /* visibility helpers */
          .re-desktop-only { display: grid; }
          .re-mobile-only  { display: none; }

          /* ── DESKTOP GRID (unchanged) ── */
          .react-expertise-grid {
            grid-template-columns: 1fr 1.2fr;
            gap: 30px;
            align-items: stretch;
          }

          .react-expertise-tabs {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 15px;
          }

          .react-expertise-tab-btn {
            background-color: var(--bg-color);
            border: 1px solid var(--border-color2-rgba);
            border-radius: 12px;
            padding: 25px 20px;
            color: rgba(255, 255, 255, 0.78);
            text-align: left;
            cursor: pointer;
            transition: all 0.3s ease;
            display: flex;
            justify-content: space-between;
            align-items: center;
            line-height: 1.3;
            height: 100%;
          }

          .tab-btn-title {
            font-family: var(--heading-font-family) !important;
            font-size: var(--body-font-size) !important;
            font-weight: 400 !important;
            color: inherit;
            margin: 0;
            max-width: 85%;
          }

          .react-expertise-tab-btn:hover {
            background-color: #1a1a1a;
            border-color: rgba(var(--theme-color1-rgb), 0.3);
            color: #fff;
          }

          .react-expertise-tab-btn.active {
            background-color: var(--bg-color);
            border: 1px solid var(--theme-color1);
            color: #fff;
            box-shadow: 0 8px 25px rgba(var(--theme-color1-rgb), 0.15);
          }

          .react-expertise-tab-btn.active .tab-btn-title {
            font-weight: 700 !important;
          }

          .react-expertise-tab-btn .arrow-icon {
            font-size: 14px;
            color: var(--theme-color1);
            opacity: 0.3;
            transition: 0.3s ease;
          }

          .react-expertise-tab-btn.active .arrow-icon {
            opacity: 1;
            transform: rotate(-45deg);
          }

          .react-expertise-content {
            background-color: var(--bg-color);
            border-radius: 20px;
            padding: 50px;
            border: 1px solid var(--border-color2-rgba);
            display: flex;
            flex-direction: column;
            justify-content: center;
            height: 100%;
          }

          .react-expertise-content-title {
            font-family: var(--heading-font-family);
            font-size: var(--h3-font-size);
            color: var(--headings-color);
            margin-bottom: 20px;
            font-weight: 600;
            border-left: 4px solid var(--theme-color1);
            padding-left: 20px;
          }

          .react-expertise-content-desc {
            color: var(--text-color);
            opacity: 0.7;
            font-size: var(--body-font-size);
            line-height: var(--body-line-height);
            margin-bottom: 30px;
            font-family: var(--body-font-family);
          }

          .react-expertise-content-list {
            list-style: none;
            padding: 0;
            display: flex;
            flex-direction: column;
            gap: 15px;
          }

          .react-expertise-content-list li {
            font-size: 15px;
            color: var(--text-color);
            opacity: 0.9;
            display: flex;
            align-items: start;
            gap: 12px;
            font-family: var(--body-font-family);
          }

          .react-expertise-content-list li::before {
            content: '✓';
            color: var(--theme-color1);
            font-weight: bold;
          }

          /* tablet: stack columns */
          @media (max-width: 1200px) {
            .react-expertise-grid { grid-template-columns: 1fr; }
          }

          /* ── MOBILE: swap to accordion ── */
          @media (max-width: 768px) {
            .react-expertise-section { padding: 60px 0; }

            .re-desktop-only { display: none !important; }
            .re-mobile-only  { display: flex; flex-direction: column; gap: 10px; }

            /* accordion item */
            .re-accordion-item {
              border: 1px solid var(--border-color2-rgba);
              border-radius: 12px;
              overflow: hidden;
              transition: border-color 0.3s ease;
            }
            .re-accordion-item.open {
              border-color: var(--theme-color1);
            }

            /* header */
            .re-accordion-header {
              width: 100%;
              background-color: var(--bg-color);
              border: none;
              padding: 18px 20px;
              display: flex;
              justify-content: space-between;
              align-items: center;
              gap: 12px;
              cursor: pointer;
              text-align: left;
            }
            .re-accordion-item.open .re-accordion-header {
              border-bottom: 1px solid var(--border-color2-rgba);
            }

            .re-acc-title {
              font-family: var(--heading-font-family);
              font-size: 15px;
              font-weight: 600;
              color: #fff;
              line-height: 1.4;
            }

            .re-acc-icon {
              font-size: 13px;
              color: var(--theme-color1);
              flex-shrink: 0;
            }

            /* body */
            .re-accordion-body {
              background-color: var(--bg-color);
              padding: 20px 20px 24px;
            }

            .re-acc-desc {
              font-family: var(--body-font-family);
              font-size: 14px;
              color: var(--text-color);
              opacity: 0.75;
              line-height: var(--body-line-height);
              margin-bottom: 16px;
            }

            .re-acc-list {
              list-style: none;
              padding: 0;
              margin: 0;
              display: flex;
              flex-direction: column;
              gap: 12px;
            }

            .re-acc-list li {
              font-family: var(--body-font-family);
              font-size: 14px;
              color: var(--text-color);
              display: flex;
              align-items: flex-start;
              gap: 10px;
              line-height: 1.5;
            }

            .re-acc-list li::before {
              content: "✓";
              color: var(--theme-color1);
              font-weight: bold;
              flex-shrink: 0;
            }
          }
        `})]})})},w=`M 40 700 C 80 680, 120 650, 160 620 C 200 590, 240 560, 280 530 C 320 500, 340 480, 360 460 C 400 420, 440 400, 480 385 C 510 372, 530 365, 560 355 C 600 340, 640 320, 680 300 C 710 284, 730 272, 760 258 C 800 238, 840 215, 880 195 C 910 178, 940 162, 980 148 C 1020 132, 1060 108, 1100 82 C 1120 68, 1140 52, 1160 38`,T=[{num:`01`,icon:`fa-solid fa-search`,title:`Requirement Analysis`,desc:`Understanding your business, products, target audience, and goals before planning your Shopify store.`},{num:`02`,icon:`fa-solid fa-table-columns`,title:`UI/UX Design`,desc:`Designing clean, modern, and conversion-focused Shopify interfaces that reflect your brand.`},{num:`03`,icon:`fa-solid fa-code`,title:`Shopify Development`,desc:`Building fast, scalable, and fully optimized Shopify stores with clean development practices.`},{num:`04`,icon:`fa-solid fa-shield-halved`,title:`Testing & Optimization`,desc:`Ensuring your Shopify store performs flawlessly across devices, browsers, and checkout flows.`},{num:`05`,icon:`fa-solid fa-rocket`,title:`Launch`,desc:`Deploying your Shopify store smoothly with ongoing support, monitoring, and performance optimization.`}],E=[{cx:160,cy:620,ibx:125,iby:524,labelX:206,titleY:613,descY:625,labelW:215},{cx:360,cy:460,ibx:325,iby:364,labelX:406,titleY:453,descY:465,labelW:200},{cx:560,cy:355,ibx:525,iby:259,labelX:606,titleY:388,descY:400,labelW:195},{cx:760,cy:258,ibx:725,iby:162,labelX:806,titleY:291,descY:303,labelW:195},{cx:980,cy:148,ibx:945,iby:52,labelX:1026,titleY:141,descY:153,labelW:155}];function D(){let[e,t]=(0,d.useState)(!1),[n,r]=(0,d.useState)(1600),i=(0,d.useRef)(null),a=(0,d.useRef)(null);(0,d.useEffect)(()=>{i.current&&r(i.current.getTotalLength())},[]),(0,d.useEffect)(()=>{let e=new IntersectionObserver(([e])=>{e.isIntersecting&&t(!0)},{threshold:.1});return a.current&&e.observe(a.current),()=>e.disconnect()},[]);let o=e=>`${.3+e*.38}s`;return(0,f.jsxs)(`div`,{className:`ps-root`,ref:a,children:[(0,f.jsx)(`div`,{className:`ps-blob`}),(0,f.jsxs)(`svg`,{className:`ps-arcs`,viewBox:`0 0 380 300`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,children:[(0,f.jsx)(`path`,{d:`M-20 300 Q 70 210 230 230 Q 320 242 380 205`,stroke:`rgba(255,107,30,0.55)`,strokeWidth:`1.5`}),(0,f.jsx)(`path`,{d:`M-20 278 Q 90 178 248 202 Q 332 216 380 174`,stroke:`rgba(255,107,30,0.35)`,strokeWidth:`1`}),(0,f.jsx)(`path`,{d:`M-20 256 Q 108 148 264 175 Q 344 190 380 146`,stroke:`rgba(255,107,30,0.20)`,strokeWidth:`0.8`}),(0,f.jsx)(`path`,{d:`M-20 234 Q 126 118 280 148 Q 356 162 380 118`,stroke:`rgba(255,107,30,0.10)`,strokeWidth:`0.7`})]}),(0,f.jsxs)(`div`,{className:`ps-inner`,children:[(0,f.jsxs)(`div`,{className:`ps-left`,children:[(0,f.jsxs)(`div`,{className:`ps-tag`,children:[(0,f.jsx)(`span`,{className:`ps-dot`}),`Our Process Shopify`]}),(0,f.jsxs)(`h2`,{className:`ps-heading`,children:[`We Build Shopify Stores `,(0,f.jsx)(`br`,{}),`with a `,(0,f.jsx)(`span`,{className:`ora`,children:`Proven Process`})]}),(0,f.jsx)(`p`,{className:`ps-sub`,children:`Our Shopify experts follow a streamlined development process to deliver fast, secure, and conversion-focused stores that help businesses grow online.`}),(0,f.jsxs)(`a`,{href:`/`,className:`ps-btn`,onClick:e=>{e.preventDefault(),s()},children:[`Get Started `,(0,f.jsx)(`span`,{children:`→`})]})]}),(0,f.jsx)(`div`,{className:`ps-diag desktop-only`,children:(0,f.jsxs)(`svg`,{viewBox:`0 0 1180 740`,xmlns:`http://www.w3.org/2000/svg`,children:[(0,f.jsxs)(`defs`,{children:[(0,f.jsxs)(`filter`,{id:`pglow`,x:`-40%`,y:`-40%`,width:`180%`,height:`180%`,children:[(0,f.jsx)(`feGaussianBlur`,{stdDeviation:`4.5`,result:`b`}),(0,f.jsxs)(`feMerge`,{children:[(0,f.jsx)(`feMergeNode`,{in:`b`}),(0,f.jsx)(`feMergeNode`,{in:`SourceGraphic`})]})]}),(0,f.jsxs)(`filter`,{id:`cglow`,x:`-100%`,y:`-100%`,width:`300%`,height:`300%`,children:[(0,f.jsx)(`feGaussianBlur`,{stdDeviation:`6`,result:`b`}),(0,f.jsxs)(`feMerge`,{children:[(0,f.jsx)(`feMergeNode`,{in:`b`}),(0,f.jsx)(`feMergeNode`,{in:`SourceGraphic`})]})]}),(0,f.jsxs)(`linearGradient`,{id:`pg`,x1:`0%`,y1:`100%`,x2:`100%`,y2:`0%`,children:[(0,f.jsx)(`stop`,{offset:`0%`,stopColor:`#b03a00`}),(0,f.jsx)(`stop`,{offset:`50%`,stopColor:`#ff6b1e`}),(0,f.jsx)(`stop`,{offset:`100%`,stopColor:`#ffb060`})]})]}),(0,f.jsx)(`path`,{className:`ps-track`,d:w}),(0,f.jsx)(`path`,{ref:i,className:`ps-line`,d:w,filter:`url(#pglow)`,style:{strokeDasharray:n,strokeDashoffset:e?0:n,transition:`stroke-dashoffset 2.2s cubic-bezier(0.42,0,0.2,1)`}}),T.map((t,n)=>{let r=E[n];return(0,f.jsxs)(`g`,{className:`ps-step${e?` on`:``}`,style:{transitionDelay:o(n)},children:[(0,f.jsx)(`rect`,{x:r.ibx,y:r.iby,width:56,height:56,rx:13,className:`ps-ib`}),(0,f.jsx)(`foreignObject`,{x:r.ibx,y:r.iby,width:56,height:56,children:(0,f.jsx)(`div`,{xmlns:`http://www.w3.org/1999/xhtml`,className:`ps-ico`,children:(0,f.jsx)(`i`,{className:t.icon})})}),(0,f.jsx)(`line`,{x1:r.ibx+28,y1:r.iby+56,x2:r.cx,y2:r.cy-29,className:`ps-dash`}),(0,f.jsx)(`circle`,{cx:r.cx,cy:r.cy,r:29,className:`ps-cout`,filter:`url(#cglow)`}),(0,f.jsx)(`circle`,{cx:r.cx,cy:r.cy,r:23,className:`ps-cin`}),(0,f.jsx)(`text`,{x:r.cx,y:r.cy+5,textAnchor:`middle`,className:`ps-cnum`,children:t.num}),(0,f.jsx)(`text`,{x:r.labelX,y:r.titleY,className:`ps-ltit`,children:t.title}),(0,f.jsx)(`foreignObject`,{x:r.labelX,y:r.descY,width:r.labelW,height:75,children:(0,f.jsx)(`p`,{xmlns:`http://www.w3.org/1999/xhtml`,className:`ps-ldsc`,children:t.desc})})]},t.num)}),(0,f.jsx)(`circle`,{cx:1160,cy:38,r:7,fill:`#ffaa50`,filter:`url(#pglow)`,style:{opacity:e?1:0,transition:`opacity 0.4s ease 2.4s`}})]})}),(0,f.jsx)(`div`,{className:`ps-stepper mobile-only`,children:T.map((t,n)=>(0,f.jsxs)(`div`,{className:`ps-step-item${e?` on`:``}`,style:{transitionDelay:o(n)},children:[(0,f.jsxs)(`div`,{className:`ps-step-track`,children:[(0,f.jsx)(`div`,{className:`ps-step-circle`,children:(0,f.jsx)(`span`,{className:`ps-step-num`,children:t.num})}),n<T.length-1&&(0,f.jsx)(`div`,{className:`ps-step-line`})]}),(0,f.jsxs)(`div`,{className:`ps-step-body`,children:[(0,f.jsx)(`div`,{className:`ps-step-icon-wrap`,children:(0,f.jsx)(`i`,{className:t.icon})}),(0,f.jsxs)(`div`,{className:`ps-step-text`,children:[(0,f.jsx)(`h4`,{className:`ps-step-title`,children:t.title}),(0,f.jsx)(`p`,{className:`ps-step-desc`,children:t.desc})]})]})]},t.num))})]})]})}var O={enterprise:`/Cloudinary-images/Untitled_design_3_g04kyv.png`,legacy:`/Cloudinary-images/Untitled_design_3_g04kyv.png`,pwa:`/Cloudinary-images/Untitled_design_3_g04kyv.png`,api:`/Cloudinary-images/Untitled_design_3_g04kyv.png`,ecommerce:`/Cloudinary-images/Untitled_design_3_g04kyv.png`,spa:`/Cloudinary-images/Untitled_design_3_g04kyv.png`,migration:`/Cloudinary-images/Untitled_design_3_g04kyv.png`,payment:`/Cloudinary-images/Untitled_design_3_g04kyv.png`},k=[{id:`enterprise`,title:`Custom Shopify Store Development`,desc:`We build premium Shopify stores tailored to your brand, business goals, and customer journey for higher conversions.`},{id:`legacy`,title:`Shopify Theme Customization`,desc:`We customize Shopify themes to match your brand identity while improving performance and shopping experiences.`},{id:`pwa`,title:`Shopify Store Redesign`,desc:`We redesign outdated Shopify stores with modern layouts that improve user experience and increase online sales.`},{id:`api`,title:`Shopify App Integrations`,desc:`We integrate Shopify with payment gateways, shipping providers, CRMs, and third-party business applications.`},{id:`ecommerce`,title:`Shopify Migration Services`,desc:`We migrate your existing online store to Shopify securely while preserving products, customers, and SEO structure.`},{id:`spa`,title:`Shopify Performance Optimization`,desc:`We optimize Shopify stores for faster loading, better performance, and smoother shopping across every device.`},{id:`migration`,title:`Shopify SEO Optimization`,desc:`We build SEO-ready Shopify stores designed to improve search visibility, rankings, and organic traffic growth.`},{id:`payment`,title:`Shopify Maintenance & Support`,desc:`We provide ongoing Shopify maintenance, updates, and technical support to keep your store running smoothly.`}],A=()=>{let[e,t]=(0,d.useState)(k[0]),[n,r]=(0,d.useState)(0),[i,a]=(0,d.useState)(k[0].id),o=e=>{t(e),r(e=>e+1)},s=e=>{a(t=>t===e?null:e)};return(0,f.jsx)(`div`,{className:`ret-section`,children:(0,f.jsxs)(`div`,{className:`auto-container`,children:[(0,f.jsx)(`h3`,{className:`ret-heading text-center mb-5`,children:`Shopify Development Services for Modern eCommerce Brands`}),(0,f.jsxs)(`div`,{className:`ret-grid ret-desktop-only`,children:[(0,f.jsx)(`div`,{className:`ret-tabs`,children:k.map(t=>(0,f.jsxs)(`button`,{className:`ret-tab-btn ${e.id===t.id?`active`:``}`,onClick:()=>o(t),children:[(0,f.jsx)(`span`,{className:`ret-tab-label`,children:t.title}),(0,f.jsx)(`span`,{className:`ret-arrow`,children:(0,f.jsx)(`i`,{className:`fas fa-arrow-right`})})]},t.id))}),(0,f.jsxs)(`div`,{className:`ret-content`,children:[(0,f.jsx)(`h4`,{className:`ret-content-title`,children:e.title}),(0,f.jsxs)(`div`,{className:`ret-content-body`,children:[(0,f.jsx)(`p`,{className:`ret-content-desc`,children:e.desc}),(0,f.jsxs)(`div`,{className:`ret-image-wrap`,children:[(0,f.jsx)(`div`,{className:`ret-image-badge`,children:(0,f.jsx)(`i`,{className:`fas fa-code`})}),(0,f.jsx)(`div`,{className:`ret-image-inner`,children:(0,f.jsx)(`img`,{src:O[e.id],alt:e.title,loading:`lazy`})})]})]})]},n)]}),(0,f.jsx)(`div`,{className:`ret-mobile-only`,children:k.map(e=>{let t=i===e.id;return(0,f.jsxs)(`div`,{className:`ret-mob-item ${t?`open`:``}`,children:[(0,f.jsxs)(`button`,{className:`ret-mob-header`,onClick:()=>s(e.id),children:[(0,f.jsx)(`span`,{className:`ret-mob-title`,children:e.title}),(0,f.jsx)(`span`,{className:`ret-mob-icon`,children:(0,f.jsx)(`i`,{className:`fas fa-chevron-${t?`up`:`down`}`})})]}),t&&(0,f.jsxs)(`div`,{className:`ret-mob-body`,children:[(0,f.jsx)(`p`,{className:`ret-mob-desc`,children:e.desc}),(0,f.jsx)(`div`,{className:`ret-mob-img-wrap`,children:(0,f.jsx)(`img`,{src:O[e.id],alt:e.title,loading:`lazy`})})]})]},e.id)})})]})})},j=()=>(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(`style`,{children:`
        /* ─── CTA Section ─── */
        .cta-section {
          position: relative;
          overflow: hidden;
          border-radius: 30px;
          margin: 0 0 80px;
          min-height: 360px;
          display: flex;
          align-items: center;
          background: linear-gradient(
            125deg,
            #e85c0d 0%,
            #ff6b1e 40%,
            #ff9a5c 75%,
            #ff6b1e 100%
          );
        }

        /* Decorative circles for depth */
        .cta-circle-1 {
          position: absolute;
          top: -90px; right: -90px;
          width: 360px; height: 360px;
          border-radius: 50%;
          background: rgba(255,255,255,0.08);
          pointer-events: none;
          z-index: 1;
        }

        .cta-circle-2 {
          position: absolute;
          bottom: -130px; right: 200px;
          width: 280px; height: 280px;
          border-radius: 50%;
          background: rgba(255,255,255,0.05);
          pointer-events: none;
          z-index: 1;
        }

        .cta-circle-3 {
          position: absolute;
          top: 50%; left: -70px;
          transform: translateY(-50%);
          width: 200px; height: 200px;
          border-radius: 50%;
          background: rgba(255,255,255,0.05);
          pointer-events: none;
          z-index: 1;
        }

        /* Subtle grid texture */
        .cta-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px);
          background-size: 56px 56px;
          z-index: 1;
          pointer-events: none;
        }

        /* ─── Inner ─── */
        .cta-inner {
          position: relative;
          z-index: 3;
          width: 100%;
          padding: 72px 65px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 50px;
        }

        .cta-left { flex: 1; }

        /* Eyebrow */
        .cta-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-family: var(--heading-font-family);
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.78);
          margin-bottom: 20px;
        }

        .cta-eyebrow::before {
          content: "";
          width: 24px; height: 2px;
          background: rgba(255,255,255,0.6);
          border-radius: 2px;
          display: block;
        }

        /* Heading — uses your theme vars */
        .cta-heading {
          font-family: var(--heading-font-family);
          font-size: var(--h3-font-size);
          font-weight: 500;
          color: #ffffff;
          line-height: var(--line-height-heading);
          margin-bottom: 22px;
          letter-spacing: -0.5px;
          max-width: 680px;
        }

        /* Sub text */
        .cta-subtext {
          font-family: var(--body-font-family);
          font-size: var(--body-font-size);
          color: rgba(255,255,255,0.78);
          line-height: var(--body-line-height);
          margin-bottom: 38px;
          max-width: 520px;
        }

        /* ─── Buttons ─── */
        .cta-btn-wrap {
          display: flex;
          align-items: center;
          gap: 22px;
          flex-wrap: wrap;
        }

        /* Primary white button */
        .cta-main-btn {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          background: #ffffff;
          color: #e85c0d !important;
          font-family: var(--heading-font-family);
          font-size: 15px;
          font-weight: 700;
          padding: 17px 36px;
          border-radius: 100px;
          text-decoration: none;
          transition: all 0.38s cubic-bezier(0.165, 0.84, 0.44, 1);
          box-shadow: 0 8px 28px rgba(0,0,0,0.18);
          white-space: nowrap;
        }

        .cta-main-btn i {
          font-size: 13px;
          transition: transform 0.35s ease;
        }

        .cta-main-btn:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 40px rgba(0,0,0,0.22);
          color: #c94d08 !important;
        }

        .cta-main-btn:hover i {
          transform: translateX(4px) rotate(-45deg);
        }

        /* Ghost secondary link */
        .cta-link {
          font-family: var(--heading-font-family);
          font-size: 14px;
          font-weight: 600;
          color: rgba(255,255,255,0.78);
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 7px;
          border-bottom: 1px solid rgba(255,255,255,0.35);
          padding-bottom: 3px;
          transition: all 0.3s ease;
          white-space: nowrap;
        }

        .cta-link i { font-size: 11px; transition: transform 0.3s ease; }

        .cta-link:hover {
          color: #fff;
          border-color: rgba(255,255,255,0.85);
        }

        .cta-link:hover i { transform: translateX(3px); }

        /* ─── Right Badges ─── */
        .cta-badges-col {
          display: flex;
          flex-direction: column;
          gap: 14px;
          flex-shrink: 0;
        }

        .cta-premium-badge {
          background: rgba(255,255,255,0.12);
          border: 1px solid rgba(255,255,255,0.22);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border-radius: 18px;
          padding: 20px 26px;
          display: flex;
          align-items: center;
          gap: 18px;
          min-width: 230px;
          transition: all 0.35s ease;
        }

        .cta-premium-badge:hover {
          transform: translateX(-8px);
          background: rgba(255,255,255,0.2);
          border-color: rgba(255,255,255,0.4);
        }

        .badge-icon-box {
          width: 42px; height: 42px;
          background: rgba(255,255,255,0.2);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-size: 17px;
          flex-shrink: 0;
        }

        .badge-info .val {
          display: block;
          font-family: var(--heading-font-family);
          font-size: 22px;
          font-weight: 800;
          color: #fff;
          line-height: 1;
          letter-spacing: -0.5px;
        }

        .badge-info .lbl {
          font-family: var(--body-font-family);
          font-size: 11.5px;
          color: rgba(255,255,255,0.78);
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-top: 4px;
          display: block;
        }

        /* ─── Responsive ─── */
        @media (max-width: 1200px) {
          .cta-badges-col { display: none; }
          .cta-inner { padding: 65px 44px; }
        }

        @media (max-width: 900px) {
          .cta-inner { padding: 58px 36px; }
          .cta-heading { font-size: clamp(22px, 4vw, 32px); }
        }

        @media (max-width: 768px) {
          .cta-section { border-radius: 20px; margin: 0 0 60px; }
          .cta-inner {
            padding: 54px 28px;
            flex-direction: column;
            text-align: center;
            align-items: center;
          }
          .cta-eyebrow { justify-content: center; }
          .cta-subtext { margin: 0 auto 34px; }
          .cta-btn-wrap { justify-content: center; }
          .cta-heading { max-width: 100%; }
        }

        @media (max-width: 480px) {
          .cta-section { border-radius: 16px; }
          .cta-inner { padding: 44px 22px; }
          .cta-btn-wrap { flex-direction: column; width: 100%; }
          .cta-main-btn { width: 100%; justify-content: center; padding: 15px 28px; }
          .cta-link { width: 100%; justify-content: center; }
        }
      `}),(0,f.jsx)(`div`,{className:`auto-container`,children:(0,f.jsxs)(`section`,{className:`cta-section`,children:[(0,f.jsx)(`div`,{className:`cta-circle-1`}),(0,f.jsx)(`div`,{className:`cta-circle-2`}),(0,f.jsx)(`div`,{className:`cta-circle-3`}),(0,f.jsx)(`div`,{className:`cta-grid`}),(0,f.jsxs)(`div`,{className:`cta-inner`,children:[(0,f.jsxs)(`div`,{className:`cta-left`,children:[(0,f.jsx)(`span`,{className:`cta-eyebrow`,children:`Free Consultation Available`}),(0,f.jsxs)(`h3`,{className:`cta-heading`,children:[`Launch Your`,(0,f.jsx)(`br`,{className:`d-none d-lg-block`}),`High-Converting Shopify Store?`]}),(0,f.jsx)(`p`,{className:`cta-subtext`,children:`From custom Shopify development to high-converting storefronts, Brandmingo builds fast, scalable, and performance-driven eCommerce solutions that help businesses increase sales and grow with confidence.`}),(0,f.jsxs)(`div`,{className:`cta-btn-wrap`,children:[(0,f.jsxs)(`a`,{href:`/`,className:`cta-main-btn`,onClick:e=>{e.preventDefault(),s()},children:[`Start Your Project`,(0,f.jsx)(`i`,{className:`fas fa-arrow-right`})]}),(0,f.jsxs)(a,{to:`/portfolio`,className:`cta-link`,children:[`View Our Work `,(0,f.jsx)(`i`,{className:`fas fa-arrow-right`})]})]})]}),(0,f.jsxs)(`div`,{className:`cta-badges-col`,children:[(0,f.jsxs)(`div`,{className:`cta-premium-badge`,children:[(0,f.jsx)(`div`,{className:`badge-icon-box`,children:(0,f.jsx)(`i`,{className:`fas fa-rocket`})}),(0,f.jsxs)(`div`,{className:`badge-info`,children:[(0,f.jsx)(`span`,{className:`val`,children:`500+`}),(0,f.jsx)(`span`,{className:`lbl`,children:`Brands Delivered`})]})]}),(0,f.jsxs)(`div`,{className:`cta-premium-badge`,children:[(0,f.jsx)(`div`,{className:`badge-icon-box`,children:(0,f.jsx)(`i`,{className:`fas fa-check-circle`})}),(0,f.jsxs)(`div`,{className:`badge-info`,children:[(0,f.jsx)(`span`,{className:`val`,children:`98%`}),(0,f.jsx)(`span`,{className:`lbl`,children:`Satisfaction Rate`})]})]}),(0,f.jsxs)(`div`,{className:`cta-premium-badge`,children:[(0,f.jsx)(`div`,{className:`badge-icon-box`,children:(0,f.jsx)(`i`,{className:`fas fa-headset`})}),(0,f.jsxs)(`div`,{className:`badge-info`,children:[(0,f.jsx)(`span`,{className:`val`,children:`24×7`}),(0,f.jsx)(`span`,{className:`lbl`,children:`Expert Support`})]})]})]})]})]})})]}),M=()=>(0,f.jsx)(`section`,{className:`wcb-section`,children:(0,f.jsxs)(`div`,{className:`auto-container`,children:[(0,f.jsxs)(`div`,{className:`wcb-header`,children:[(0,f.jsxs)(`h3`,{children:[`Why Choose Brandmingo for Shopify Development? `,(0,f.jsx)(`br`,{})]}),(0,f.jsx)(`p`,{className:`wcb-subtitle`,children:`We build high-performing Shopify stores that combine premium design, fast performance, and conversion-focused development to help businesses grow online.`})]}),(0,f.jsxs)(`div`,{className:`wcb-grid`,children:[(0,f.jsxs)(`div`,{className:`wcb-card`,children:[(0,f.jsxs)(`div`,{className:`wcb-stat-value`,children:[`150`,(0,f.jsx)(`span`,{children:`+`})]}),(0,f.jsx)(`div`,{className:`wcb-stat-label`,children:`Shopify Stores Delivered`}),(0,f.jsx)(`p`,{className:`wcb-stat-desc`,children:`Successfully delivered stores for growing brands.`})]}),(0,f.jsxs)(`div`,{className:`wcb-card`,children:[(0,f.jsx)(`div`,{className:`wcb-feat-icon`,children:(0,f.jsx)(`i`,{className:`fas fa-award`})}),(0,f.jsx)(`div`,{className:`wcb-feat-title`,children:`Conversion-Focused Strategy`}),(0,f.jsx)(`p`,{className:`wcb-feat-desc`,children:`Every store is designed to improve user experience and increase sales.`})]}),(0,f.jsxs)(`div`,{className:`wcb-card`,children:[(0,f.jsxs)(`div`,{className:`wcb-stat-value`,children:[`500`,(0,f.jsx)(`span`,{children:`+`})]}),(0,f.jsx)(`div`,{className:`wcb-stat-label`,children:`Projects Delivered`}),(0,f.jsx)(`p`,{className:`wcb-stat-desc`,children:`High-impact brand solutions for startups to established enterprises.`})]}),(0,f.jsxs)(`div`,{className:`wcb-card`,children:[(0,f.jsxs)(`div`,{className:`wcb-stat-value`,children:[`98`,(0,f.jsx)(`span`,{children:`%`})]}),(0,f.jsx)(`div`,{className:`wcb-stat-label`,children:`Client Satisfaction Rate`}),(0,f.jsx)(`p`,{className:`wcb-stat-desc`,children:`Creative excellence that consistently exceeds expectations.`})]}),(0,f.jsxs)(`div`,{className:`wcb-card`,children:[(0,f.jsx)(`div`,{className:`wcb-feat-icon`,children:(0,f.jsx)(`i`,{className:`fas fa-bolt`})}),(0,f.jsx)(`div`,{className:`wcb-feat-title`,children:`Agile-Driven Delivery`}),(0,f.jsx)(`p`,{className:`wcb-feat-desc`,children:`Rapid iterations, clear milestones, and transparent workflows that keep every project on track.`})]}),(0,f.jsxs)(`div`,{className:`wcb-card`,children:[(0,f.jsx)(`div`,{className:`wcb-feat-icon`,children:(0,f.jsx)(`i`,{className:`fas fa-headset`})}),(0,f.jsx)(`div`,{className:`wcb-feat-title`,children:`24×7 Expert Support`}),(0,f.jsx)(`p`,{className:`wcb-feat-desc`,children:`Round-the-clock support with rapid issue resolution whenever your brand needs us most.`})]}),(0,f.jsxs)(`div`,{className:`wcb-card wcb-card-highlight`,children:[(0,f.jsxs)(`div`,{className:`wcb-stat-value`,children:[`100`,(0,f.jsx)(`span`,{children:`%`})]}),(0,f.jsx)(`div`,{className:`wcb-stat-label`,children:`In-House Creative Team`}),(0,f.jsx)(`p`,{className:`wcb-stat-desc`,children:`No outsourcing—every pixel crafted by our dedicated in-house designers.`})]}),(0,f.jsxs)(`div`,{className:`wcb-card`,children:[(0,f.jsx)(`div`,{className:`wcb-feat-icon`,children:(0,f.jsx)(`i`,{className:`fas fa-shield-alt`})}),(0,f.jsx)(`div`,{className:`wcb-feat-title`,children:`Quality Assurance`}),(0,f.jsx)(`p`,{className:`wcb-feat-desc`,children:`Rigorous brand consistency audits and performance benchmarks built into every deliverable.`})]}),(0,f.jsxs)(`div`,{className:`wcb-card`,children:[(0,f.jsxs)(`div`,{className:`wcb-stat-value`,children:[`99`,(0,f.jsx)(`span`,{children:`%`})]}),(0,f.jsx)(`div`,{className:`wcb-stat-label`,children:`On-Time Delivery`}),(0,f.jsx)(`p`,{className:`wcb-stat-desc`,children:`On schedule without ever compromising on quality or strategic depth.`})]}),(0,f.jsxs)(`div`,{className:`wcb-card`,children:[(0,f.jsx)(`div`,{className:`wcb-feat-icon`,children:(0,f.jsx)(`i`,{className:`fas fa-chart-line`})}),(0,f.jsx)(`div`,{className:`wcb-feat-title`,children:`Optimized for Performance & Growth`}),(0,f.jsx)(`p`,{className:`wcb-feat-desc`,children:`Brand systems engineered for scalability—built to grow with your business and captivate your audience.`})]}),(0,f.jsxs)(`div`,{className:`wcb-card`,children:[(0,f.jsxs)(`div`,{className:`wcb-stat-value`,children:[`90`,(0,f.jsx)(`span`,{children:`%`})]}),(0,f.jsx)(`div`,{className:`wcb-stat-label`,children:`Client Retention Rate`}),(0,f.jsx)(`p`,{className:`wcb-stat-desc`,children:`Reflecting our commitment to delivering value and lasting partnerships.`})]}),(0,f.jsxs)(`div`,{className:`wcb-card`,children:[(0,f.jsx)(`div`,{className:`wcb-feat-icon`,children:(0,f.jsx)(`i`,{className:`fas fa-layer-group`})}),(0,f.jsx)(`div`,{className:`wcb-feat-title`,children:`Flexible Engagement Models`}),(0,f.jsx)(`p`,{className:`wcb-feat-desc`,children:`Dedicated teams or project-based models tailored to suit your unique branding and business needs.`})]})]})]})}),N=[{id:`dedicated`,icon:`fas fa-users`,title:`Dedicated Team`,desc:`A fully committed creative team working exclusively on your brand, ensuring deep focus and consistent quality.`,points:[`Seamless collaboration`,`Scalable team size`,`Ideal for long-term projects`,`Full brand ownership`],tag:`Most Popular`},{id:`time`,icon:`fas fa-clock`,title:`Time & Material`,desc:`Pay only for the work delivered with complete flexibility to adjust scope as your needs evolve.`,points:[`Transparent billing`,`Agile & adaptive execution`,`Easy scope adjustments`,`Best for Evolving Projects`],tag:null},{id:`fixed`,icon:`fas fa-shield-alt`,title:`Fixed Price`,desc:`Predictable cost and timelines for clearly defined branding projects with zero surprises.`,points:[`Pre-defined scope`,`No budget surprises`,`On-time delivery`,`Zero Surprise Costs`],tag:null},{id:`hybrid`,icon:`fas fa-layer-group`,title:`Hybrid Model`,desc:`A balanced mix of structure and flexibility tailored to the unique demands of your project.`,points:[`Fixed scope with flexibility`,`Smooth transition between models`,`Best of both worlds`,`Ideal for Scaling Brands`],tag:null}],P=()=>{let[e,t]=(0,d.useState)(`dedicated`);return(0,f.jsx)(`section`,{className:`eng-section`,children:(0,f.jsxs)(`div`,{className:`auto-container`,children:[(0,f.jsxs)(`div`,{className:`eng-header`,children:[(0,f.jsx)(`div`,{className:`eng-eyebrow`,children:`How We Work`}),(0,f.jsxs)(`h3`,{className:`eng-title`,children:[`Our Engagement Models`,(0,f.jsx)(`br`,{}),`for Brandmingo Services`]}),(0,f.jsx)(`p`,{className:`eng-subtitle`,children:`We offer flexible engagement models designed to align perfectly with your project scope, timelines, and business goals.`})]}),(0,f.jsx)(`div`,{className:`eng-grid`,children:N.map(n=>(0,f.jsxs)(`div`,{className:`eng-card${e===n.id?` active`:``}`,onMouseEnter:()=>t(n.id),children:[n.tag&&(0,f.jsx)(`span`,{className:`eng-badge`,children:n.tag}),(0,f.jsx)(`div`,{className:`eng-icon`,children:(0,f.jsx)(`i`,{className:n.icon})}),(0,f.jsx)(`h3`,{className:`eng-card-title`,children:n.title}),(0,f.jsx)(`p`,{className:`eng-card-desc`,children:n.desc}),(0,f.jsx)(`div`,{className:`eng-divider`}),(0,f.jsx)(`ul`,{className:`eng-points`,children:n.points.map((e,t)=>(0,f.jsx)(`li`,{children:e},t))})]},n.id))}),(0,f.jsxs)(`div`,{className:`eng-cta-wrap`,children:[(0,f.jsx)(`p`,{className:`eng-cta-note`,children:`Not sure which model suits you? Let's talk and find the perfect fit.`}),(0,f.jsxs)(`a`,{href:`/`,className:`eng-cta-btn`,onClick:e=>{e.preventDefault(),s()},children:[`Request a Free Quote`,(0,f.jsx)(`i`,{className:`fas fa-arrow-right`})]})]})]})})},F=[{icon:`fas fa-layer-group`,label:`Project Scope & Complexity`},{icon:`fas fa-handshake`,label:`Engagement Model Selected`},{icon:`fas fa-users`,label:`Team Size & Skill Mix`},{icon:`fas fa-clock`,label:`Timeline & Delivery Speed`},{icon:`fas fa-plug`,label:`Third-Party Integrations`}],I=[{num:`01`,title:`Requirement Discussion`,desc:`We understand your brand goals, vision, and project requirements in detail.`},{num:`02`,title:`Technical Assessment`,desc:`Our team evaluates scope, complexity, and the right strategy for your project.`},{num:`03`,title:`Effort & Timeline Planning`,desc:`We map out deliverables, milestones, and realistic timelines for execution.`},{num:`04`,title:`Clear Cost Estimate`,desc:`You receive a transparent, no-hidden-cost proposal tailored to your needs.`}],L=()=>{let[e,t]=(0,d.useState)(0);return(0,f.jsx)(`section`,{className:`prc-section`,children:(0,f.jsxs)(`div`,{className:`auto-container`,children:[(0,f.jsxs)(`div`,{className:`prc-header`,children:[(0,f.jsx)(`div`,{className:`prc-eyebrow`,children:`Transparent Pricing`}),(0,f.jsx)(`h3`,{className:`prc-title`,children:`Pricing & Cost Estimation Shopify`}),(0,f.jsx)(`p`,{className:`prc-subtitle`,children:`Every Shopify store is unique. Pricing depends on your goals, required features, and business needs—not fixed packages or hidden charges.`})]}),(0,f.jsxs)(`div`,{className:`prc-block`,children:[(0,f.jsx)(`div`,{className:`prc-block-label`,children:`Pricing Depends On`}),(0,f.jsx)(`div`,{className:`prc-factors`,children:F.map((e,t)=>(0,f.jsxs)(`div`,{className:`prc-factor-card`,children:[(0,f.jsx)(`div`,{className:`prc-factor-icon`,children:(0,f.jsx)(`i`,{className:e.icon})}),(0,f.jsx)(`span`,{className:`prc-factor-label`,children:e.label})]},t))})]}),(0,f.jsxs)(`div`,{className:`prc-block`,children:[(0,f.jsx)(`div`,{className:`prc-block-label`,children:`How We Estimate Cost`}),(0,f.jsx)(`div`,{className:`prc-steps-row`,children:I.map((n,r)=>(0,f.jsxs)(`div`,{className:`prc-step${e===r?` active`:``}`,onMouseEnter:()=>t(r),children:[(0,f.jsx)(`div`,{className:`prc-step-num`,children:n.num}),(0,f.jsx)(`div`,{className:`prc-step-title`,children:n.title}),(0,f.jsx)(`p`,{className:`prc-step-desc`,children:n.desc})]},r))})]}),(0,f.jsxs)(`div`,{className:`prc-cta-wrap`,children:[(0,f.jsx)(`p`,{className:`prc-cta-note`,children:`Get a custom quote tailored to your project — no obligations.`}),(0,f.jsxs)(`a`,{href:`/`,className:`prc-cta-btn`,onClick:e=>{e.preventDefault(),s()},children:[`Get a Free Estimate`,(0,f.jsx)(`i`,{className:`fas fa-arrow-right`})]})]})]})})},R=[{name:`Syrish`,category:`Business Website`,tags:[`WordPress`,`UI/UX`,`Responsive`],preview:`https://syrish.com/`,caseStudy:`/portfolio`,images:[`https://i.ibb.co/674RCz3z/BM-WEBSITE-IMAGES-5.jpg`,`https://i.ibb.co/yFLzhPqK/32.jpg`,`https://i.ibb.co/7JpP0mHb/31.jpg`,`https://i.ibb.co/k6wp5zPQ/30.jpg`]},{name:`Suryatra`,category:`Travel & Tourism`,tags:[`WordPress`,`Booking`,`SEO Optimized`],preview:`https://suryatras.com/`,caseStudy:`/portfolio`,images:[`https://i.ibb.co/YF2sdQ2w/BM-WEBSITE-IMAGES-6.jpg`,`https://i.ibb.co/Qvt5wZ1s/34.jpg`,`https://i.ibb.co/yGHxLfR/35.jpg`,`https://i.ibb.co/bMCfRMfc/36.jpg`]},{name:`BlackGrape`,category:`Corporate Website`,tags:[`WordPress`,`Modern UI`,`Performance`],preview:`https://blackgrape.in/`,caseStudy:`/portfolio`,images:[`https://i.ibb.co/N2jtJL6K/BM-WEBSITE-IMAGES-7.jpg`,`https://i.ibb.co/sv8XHNjR/40.jpg`,`https://i.ibb.co/svg739Nk/39.jpg`,`https://i.ibb.co/mFP3nxVb/38.jpg`]}],z=24,B=.6,V=()=>{let e=(0,d.useRef)(null),t=(0,d.useRef)(0),n=(0,d.useRef)(null),r=(0,d.useRef)(!1),i=(0,d.useRef)(!1),a=(0,d.useRef)(0),o=(0,d.useRef)(0),s=(0,d.useRef)(!1),c=(0,d.useRef)(0),l=(0,d.useRef)(0),u=(0,d.useRef)(!1),[p,m]=(0,d.useState)(null),[h,g]=(0,d.useState)(0),_=[...R,...R,...R],v=()=>window.innerWidth<=479?230:window.innerWidth<=767?260:window.innerWidth<=1199?290:320;(0,d.useEffect)(()=>{let i=()=>{if(!r.current){t.current-=B;let n=e.current;if(n){let e=v(),r=R.length*(e+z);Math.abs(t.current)>=r&&(t.current=0),n.style.transform=`translate3d(${t.current}px, 0, 0)`}}n.current=requestAnimationFrame(i)};return n.current=requestAnimationFrame(i),()=>cancelAnimationFrame(n.current)},[]);let y=e=>{i.current=!0,r.current=!0,a.current=e.clientX,o.current=t.current},b=e=>{if(!i.current)return;let n=e.clientX-a.current;t.current=o.current+n},x=()=>{i.current=!1,p||(r.current=!1)},S=e=>{r.current=!0,t.current-=e.deltaY*.5},C=e=>{r.current=!0,s.current=!0,u.current=!1,c.current=e.touches[0].clientX,l.current=t.current},w=e=>{if(!s.current)return;let n=e.touches[0].clientX-c.current;Math.abs(n)>5&&(u.current=!0),t.current=l.current+n,Math.abs(n)>8&&e.preventDefault()},T=()=>{s.current=!1,p||(r.current=!1)},E=(e,t)=>{u.current||(t.stopPropagation(),m(e),g(0),r.current=!0,document.body.style.overflow=`hidden`)},D=()=>{m(null),r.current=!1,document.body.style.overflow=``};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(`section`,{className:`ptf-section`,children:[(0,f.jsxs)(`div`,{className:`ptf-header`,children:[(0,f.jsx)(`span`,{className:`ptf-subtitle-tag`,children:`Portfolio`}),(0,f.jsx)(`h3`,{className:`ptf-title`,children:`Creative Archive`})]}),(0,f.jsx)(`div`,{className:`ptf-track-wrapper`,onMouseEnter:()=>r.current=!0,onMouseLeave:()=>{p||(r.current=!1),x()},onMouseDown:y,onMouseMove:b,onMouseUp:x,onWheel:S,onTouchStart:C,onTouchMove:w,onTouchEnd:T,onTouchCancel:T,children:(0,f.jsx)(`div`,{ref:e,className:`ptf-track`,children:_.map((e,t)=>(0,f.jsxs)(`div`,{className:`ptf-card`,onClick:t=>E(e,t),children:[(0,f.jsxs)(`div`,{className:`ptf-card-img-container`,children:[(0,f.jsxs)(`div`,{className:`ptf-card-index`,children:[`0`,t%R.length+1]}),(0,f.jsx)(`img`,{src:e.images[0],alt:e.name,draggable:`false`})]}),(0,f.jsxs)(`div`,{className:`ptf-card-content`,children:[(0,f.jsx)(`span`,{className:`ptf-card-cat`,children:e.category}),(0,f.jsx)(`h3`,{className:`ptf-card-name`,children:e.name}),(0,f.jsxs)(`div`,{className:`ptf-card-footer`,children:[(0,f.jsx)(`span`,{className:`ptf-explore-text`,children:`View Details`}),(0,f.jsx)(`div`,{className:`ptf-arrow-btn`,children:(0,f.jsxs)(`svg`,{width:`18`,height:`18`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.5`,children:[(0,f.jsx)(`line`,{x1:`5`,y1:`12`,x2:`19`,y2:`12`}),(0,f.jsx)(`polyline`,{points:`12 5 19 12 12 19`})]})})]})]})]},t))})})]}),p&&(0,f.jsx)(`div`,{className:`ptf-popup-overlay`,onClick:D,children:(0,f.jsxs)(`div`,{className:`ptf-popup-card`,onClick:e=>e.stopPropagation(),children:[(0,f.jsx)(`button`,{className:`ptf-popup-close`,onClick:D,children:`✕`}),(0,f.jsxs)(`div`,{className:`ptf-popup-gallery`,children:[(0,f.jsx)(`div`,{className:`ptf-side-thumbs`,children:p.images.map((e,t)=>(0,f.jsx)(`div`,{className:`ptf-thumb-item${h===t?` active`:``}`,onMouseEnter:()=>g(t),onClick:()=>g(t),children:(0,f.jsx)(`img`,{src:e,alt:`thumb-${t}`})},t))}),(0,f.jsx)(`div`,{className:`ptf-main-view`,children:(0,f.jsx)(`img`,{src:p.images[h],alt:`Main View`})})]}),(0,f.jsxs)(`div`,{className:`ptf-popup-info`,children:[(0,f.jsx)(`span`,{className:`ptf-card-cat`,children:p.category}),(0,f.jsx)(`h3`,{className:`ptf-popup-name`,children:p.name}),(0,f.jsxs)(`p`,{className:`ptf-popup-desc`,children:[`This production-level project focuses on a minimal yet highly functional UI to ensure the best user experience for`,` `,p.name,`'s target audience. Built with performance and aesthetics in mind.`]}),(0,f.jsxs)(`div`,{className:`ptf-popup-btns`,children:[(0,f.jsx)(`a`,{href:p.preview,target:`_blank`,rel:`noreferrer`,className:`btn-live`,children:`LIVE PREVIEW`}),p.caseStudy&&(0,f.jsx)(`a`,{href:p.caseStudy,className:`btn-case`,children:`CASE STUDY`})]})]})]})})]})},H=()=>{let[e,t]=(0,d.useState)(null);return r(),(0,d.useEffect)(()=>{window.scrollTo(0,0);let e=new o(`.project-image-slider`,{slidesPerView:2,spaceBetween:20,loop:!0,autoHeight:!1,autoplay:{delay:2500,disableOnInteraction:!1},breakpoints:{0:{slidesPerView:1},768:{slidesPerView:2}}});return()=>{e&&e.destroy&&e.destroy(!0,!0)}},[]),(0,f.jsxs)(`div`,{className:`page-wrapper`,children:[(0,f.jsx)(`style`,{children:`
  .wd-outer {
    display: flex;
    align-items: flex-start;   /* ZARURI hai */
  }

  .wd-sidebar-col {
    width: 320px;
    flex-shrink: 0;
    position: sticky;
    top: 100px;
    align-self: flex-start;   /* ZARURI hai */
  }

  .wd-content-col {
    flex: 1;
    min-width: 0;
    padding-left: 30px;
  }

  @media (max-width: 991px) {
    .wd-outer { flex-direction: column; }
    .wd-sidebar-col { width: 100%; position: static; margin-bottom: 40px; }
    .wd-content-col { padding-left: 0; }
  }
`}),(0,f.jsx)(_,{}),(0,f.jsx)(x,{}),(0,f.jsxs)(`section`,{className:`services-details pt-120 pb-120`,style:{marginTop:`40px`,marginBottom:`120px`},children:[(0,f.jsx)(`div`,{className:`service-details-page`,children:(0,f.jsx)(`div`,{className:`container`,children:(0,f.jsx)(`div`,{className:`wd-outer`,children:(0,f.jsx)(`div`,{className:`wd-content-col`,children:(0,f.jsxs)(`div`,{className:`services-details__content`,children:[(0,f.jsxs)(`div`,{className:`react-build-section mt-5`,children:[(0,f.jsxs)(`div`,{className:`row align-items-center`,children:[(0,f.jsx)(`div`,{className:`col-lg-6 col-md-12`,children:(0,f.jsxs)(`div`,{className:`react-build-content`,children:[(0,f.jsx)(`h3`,{className:`mt-0 mb-3 theme-h3`,children:`Build with Shopify`}),(0,f.jsx)(`p`,{className:`text mb-3`,children:`Shopify development is the process of building fast, scalable, and high-converting eCommerce stores using one of the world's leading commerce platforms. A slow or outdated store can reduce customer trust and sales opportunities.`}),(0,f.jsx)(`p`,{className:`text mb-4`,children:`We build secure, mobile-friendly, and conversion-focused Shopify stores that enhance user experience, improve performance, and help businesses achieve long-term online growth.`}),(0,f.jsxs)(`div`,{className:`react-stats-row`,children:[(0,f.jsxs)(`div`,{className:`react-stat-item`,children:[(0,f.jsx)(`span`,{className:`react-stat-num`,children:`3x`}),(0,f.jsx)(`span`,{className:`react-stat-label`,children:`Higher Conversions`})]}),(0,f.jsx)(`div`,{className:`react-stat-divider`}),(0,f.jsxs)(`div`,{className:`react-stat-item`,children:[(0,f.jsx)(`span`,{className:`react-stat-num`,children:`98%`}),(0,f.jsx)(`span`,{className:`react-stat-label`,children:`Client Satisfaction`})]}),(0,f.jsx)(`div`,{className:`react-stat-divider`}),(0,f.jsxs)(`div`,{className:`react-stat-item`,children:[(0,f.jsx)(`span`,{className:`react-stat-num`,children:`500+`}),(0,f.jsx)(`span`,{className:`react-stat-label`,children:`Stores Built`})]})]}),(0,f.jsxs)(`div`,{className:`react-feature-tag`,children:[(0,f.jsx)(`i`,{className:`fa-solid fa-rocket`}),(0,f.jsx)(`span`,{children:`Conversion-Driven Shopify Stores`})]})]})}),(0,f.jsx)(`div`,{className:`col-lg-6 col-md-12`,children:(0,f.jsxs)(`div`,{className:`react-build-image-wrapper`,children:[(0,f.jsxs)(`div`,{className:`image-glass-card`,children:[(0,f.jsx)(`img`,{src:`https://i.ibb.co/VW5jgKmx/Chat-GPT-Image-Jul-16-2026-01-44-29-PM.png`,alt:`React Development`,className:`main-react-img`}),(0,f.jsxs)(`div`,{className:`floating-badge top-right`,children:[(0,f.jsx)(`i`,{className:`fas fa-bolt`,style:{marginRight:`5px`}}),`Fast`]}),(0,f.jsxs)(`div`,{className:`floating-badge bottom-left`,children:[(0,f.jsx)(`i`,{className:`fas fa-expand-arrows-alt`,style:{marginRight:`5px`}}),`Scalable`]})]}),(0,f.jsx)(`div`,{className:`corner-accent top-left-accent`}),(0,f.jsx)(`div`,{className:`corner-accent bottom-right-accent`}),(0,f.jsx)(`div`,{className:`bg-glow-circle`})]})})]}),(0,f.jsx)(`style`,{children:`
    .react-build-section {
      position: relative;
      padding: 40px 0;
    }

    .react-build-content {
      padding-right: 30px;
    }

    /* ── Stats Row ── */
    .react-stats-row {
      display: flex;
      align-items: center;
      gap: 0;
      margin-bottom: 28px;
      background: linear-gradient(
        125deg,
        #e85c0d 0%,
        #ff6b1e 40%,
        #ff9a5c 75%,
        #ff6b1e 100%
      );
      border-radius: 16px;
      overflow: hidden;
    }

    .react-stat-item {
      display: flex;
      flex-direction: column;
      gap: 4px;
      flex: 1;
      text-align: center;
      padding: 20px 24px;
    }

    .react-stat-num {
      font-family: var(--heading-font-family);
      font-size: 26px;
      font-weight: 700;
      color: #ffffff;
      line-height: 1;
    }

    .react-stat-label {
      font-family: var(--body-font-family);
      font-size: 12px;
      color: rgba(255,255,255,0.78);
      letter-spacing: 0.3px;
    }

    .react-stat-divider {
      width: 1px;
      height: 36px;
      background: rgba(255,255,255,0.25);
      flex-shrink: 0;
    }

    /* ── Feature Tag ── */
    .react-feature-tag {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      background: rgba(var(--theme-color1-rgb), 0.1);
      border: 1px solid rgba(var(--theme-color1-rgb), 0.2);
      padding: 8px 16px;
      border-radius: 50px;
      font-family: var(--heading-font-family);
      font-size: 13px;
      font-weight: 600;
      color: var(--theme-color1);
    }

    .spin-icon {
      animation: fa-spin 5s linear infinite;
    }

    /* ── Image Wrapper ── */
    .react-build-image-wrapper {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 30px;
    }

    .corner-accent {
      position: absolute;
      width: 60px;
      height: 60px;
      z-index: 0;
    }

    .top-left-accent {
      top: 10px;
      left: 10px;
      border-top: 2px solid var(--theme-color1);
      border-left: 2px solid var(--theme-color1);
      border-radius: 4px 0 0 0;
      opacity: 0.5;
    }

    .bottom-right-accent {
      bottom: 10px;
      right: 10px;
      border-bottom: 2px solid var(--theme-color1);
      border-right: 2px solid var(--theme-color1);
      border-radius: 0 0 4px 0;
      opacity: 0.5;
    }

    /* ── Glass Card ── */
    .image-glass-card {
      position: relative;
      z-index: 2;
      border-radius: 24px;
      padding: 15px;
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(255,255,255,0.08);
      backdrop-filter: blur(10px);
      transition: transform 0.5s ease;
    }

    .main-react-img {
      width: 100%;
      height: auto;
      border-radius: 18px;
      display: block;
      box-shadow: 0 20px 40px rgba(0,0,0,0.3);
    }

    .image-glass-card:hover {
      transform: translateY(-10px) rotate(1deg);
    }

    /* ── Floating Badges ── */
    .floating-badge {
      position: absolute;
      background: var(--theme-color1);
      color: #fff;
      padding: 6px 18px;
      border-radius: 50px;
      font-family: var(--heading-font-family);
      font-weight: 700;
      font-size: 12px;
      text-transform: uppercase;
      letter-spacing: 1px;
      box-shadow: 0 10px 20px rgba(var(--theme-color1-rgb), 0.3);
      z-index: 3;
      display: flex;
      align-items: center;
    }

    .top-right { top: -10px; right: -10px; }
    .bottom-left { bottom: 20px; left: -20px; }

    /* ── Floating Code Card ── */
    .floating-code-card {
      position: absolute;
      bottom: -18px;
      right: -18px;
      background: #1a1a2e;
      border: 1px solid rgba(255,255,255,0.1);
      border-radius: 12px;
      padding: 12px 16px;
      z-index: 4;
      min-width: 160px;
      box-shadow: 0 12px 32px rgba(0,0,0,0.4);
    }

    .floating-code-card p {
      margin: 0;
      font-family: monospace;
      font-size: 11px;
      line-height: 1.7;
    }

    .code-dot {
      display: inline-block;
      width: 8px; height: 8px;
      border-radius: 50%;
      margin-right: 4px;
      margin-bottom: 8px;
    }
    .red    { background: #ff5f57; }
    .yellow { background: #febc2e; }
    .green  { background: #28c840; }

    .code-blue   { color: #79b8ff; }
    .code-orange { color: var(--theme-color1, #ff6b1e); }
    .code-white  { color: rgba(255,255,255,0.78); }
    .code-line   { margin: 0 !important; }

    /* ── Back Glow ── */
    .bg-glow-circle {
      position: absolute;
      width: 300px;
      height: 300px;
      background: var(--theme-color1);
      filter: blur(100px);
      opacity: 0.12;
      z-index: 1;
    }

    @media (max-width: 991px) {
      .react-build-content { padding-right: 0; text-align: center; margin-bottom: 50px; }
      .react-build-image-wrapper { max-width: 500px; margin: 0 auto; }
      .react-feature-tag { justify-content: center; }
      .react-stats-row { justify-content: center; }
      .floating-code-card { display: none; }
    }
  `})]}),!1,(0,f.jsxs)(`div`,{className:`mt-0`,style:{paddingTop:`70px`},children:[(0,f.jsx)(`h3`,{className:`mb-2`,children:`What You Get with Our Shopify Development Services`}),(0,f.jsx)(`p`,{className:`text mb-4`,children:`We don’t just build online stores — we create high-converting eCommerce systems that drive sales and business growth.`}),(0,f.jsxs)(`div`,{className:`deliverables-outer-card`,children:[(0,f.jsx)(`div`,{className:`deliverables-accent-glow deliverables-accent-glow--top`}),(0,f.jsx)(`div`,{className:`deliverables-accent-glow deliverables-accent-glow--bottom`}),(0,f.jsxs)(`div`,{className:`deliverables-subtitle-row`,children:[(0,f.jsx)(`span`,{className:`deliverables-subtitle-bar`}),(0,f.jsx)(`p`,{className:`deliverables-subtitle`,children:`Our Deliverables`})]}),(0,f.jsx)(`div`,{className:`deliverables-grid`,children:[{icon:(0,f.jsxs)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 24 24`,fill:`none`,stroke:`#fff`,strokeWidth:`2.2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,f.jsx)(`path`,{d:`M12 20h9`}),(0,f.jsx)(`path`,{d:`M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z`})]}),label:`Custom Shopify Store Design`,desc:`Tailored to your brand identity`},{icon:(0,f.jsxs)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 24 24`,fill:`none`,stroke:`#fff`,strokeWidth:`2.2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,f.jsx)(`rect`,{x:`5`,y:`2`,width:`14`,height:`20`,rx:`2`}),(0,f.jsx)(`line`,{x1:`12`,y1:`18`,x2:`12.01`,y2:`18`})]}),label:`Fully Responsive Store Development`,desc:`Optimized for mobile & all devices`},{icon:(0,f.jsxs)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 24 24`,fill:`none`,stroke:`#fff`,strokeWidth:`2.2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,f.jsx)(`path`,{d:`M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6`}),(0,f.jsx)(`polyline`,{points:`15,3 21,3 21,9`}),(0,f.jsx)(`line`,{x1:`10`,y1:`14`,x2:`21`,y2:`3`})]}),label:`App & Third-Party Integrations`,desc:`Seamless Shopify app integrations`},{icon:(0,f.jsx)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 24 24`,fill:`none`,stroke:`#fff`,strokeWidth:`2.2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:(0,f.jsx)(`polygon`,{points:`13,2 3,14 12,14 11,22 21,10 12,10`})}),label:`Speed & Performance Optimization`,desc:`Fast loading for better conversions`},{icon:(0,f.jsxs)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 24 24`,fill:`none`,stroke:`#fff`,strokeWidth:`2.2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,f.jsx)(`circle`,{cx:`11`,cy:`11`,r:`8`}),(0,f.jsx)(`line`,{x1:`21`,y1:`21`,x2:`16.65`,y2:`16.65`})]}),label:`SEO-Ready Store Structure`,desc:`Built to rank on search engines`},{icon:(0,f.jsxs)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 24 24`,fill:`none`,stroke:`#fff`,strokeWidth:`2.2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,f.jsx)(`path`,{d:`M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2`}),(0,f.jsx)(`circle`,{cx:`12`,cy:`7`,r:`4`}),(0,f.jsx)(`polyline`,{points:`16,11 18,13 22,9`})]}),label:`Easy Store Management Setup`,desc:`Simple dashboard & control panel`}].map((e,t)=>(0,f.jsxs)(`div`,{className:`deliverable-white-card`,children:[(0,f.jsx)(`div`,{className:`deliverable-icon-box`,children:e.icon}),(0,f.jsxs)(`div`,{className:`deliverable-text-group`,children:[(0,f.jsx)(`span`,{className:`deliverable-label`,children:e.label}),(0,f.jsx)(`span`,{className:`deliverable-desc`,children:e.desc})]}),(0,f.jsx)(`div`,{className:`deliverable-arrow`,children:(0,f.jsxs)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 24 24`,fill:`none`,stroke:`var(--theme-color1)`,strokeWidth:`2.5`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,f.jsx)(`line`,{x1:`5`,y1:`12`,x2:`19`,y2:`12`}),(0,f.jsx)(`polyline`,{points:`12,5 19,12 12,19`})]})})]},t))})]})]}),(0,f.jsx)(`div`,{className:`react-expertise-section`,children:(0,f.jsx)(C,{})}),(0,f.jsx)(`div`,{className:`process-section-wrapper`,children:(0,f.jsx)(D,{})}),(0,f.jsxs)(`div`,{className:`modern-cta-section`,children:[(0,f.jsx)(A,{}),(0,f.jsx)(j,{})]}),(0,f.jsx)(`div`,{className:`why-brandmingo-section`,children:(0,f.jsx)(M,{})}),(0,f.jsx)(`div`,{className:`engagement-section`,children:(0,f.jsx)(P,{})}),(0,f.jsx)(`div`,{className:`pricing-final-section`,children:(0,f.jsx)(L,{})}),(0,f.jsxs)(`div`,{className:`faq-content mt-2`,children:[(0,f.jsx)(`h3`,{className:`mb-3`,children:`Frequently Asked Question`}),(0,f.jsx)(`ul`,{className:`accordion-box mt-40`,children:[{q:`Is Shopify good for growing brands?`,a:`Yes. Shopify is one of the best platforms for growing eCommerce brands because of its scalability, fast performance, app ecosystem, and conversion-focused shopping experience.`},{q:`Is Shopify SEO-friendly?`,a:`Absolutely. Shopify supports SEO-friendly URLs, meta optimization, mobile responsiveness, fast-loading pages, and structured store architecture to improve search engine rankings.`},{q:`How much does Shopify development cost?`,a:`Shopify development cost depends on store complexity, custom features, product listings, integrations, and design requirements. Basic stores usually start around ₹30K+, while advanced custom stores can go much higher.`},{q:`Can you create custom Shopify designs?`,a:`Yes. We develop fully custom Shopify stores with premium UI/UX, custom Liquid coding, conversion-focused layouts, and brand-specific experiences.`}].map((n,r)=>(0,f.jsxs)(`li`,{className:`accordion block ${e===r?`active-block`:``}`,children:[(0,f.jsxs)(`div`,{className:`acc-btn`,onClick:()=>t(e===r?null:r),children:[n.q,(0,f.jsx)(`div`,{className:`icon fa ${e===r?`fa-minus`:`fa-plus`}`})]}),(0,f.jsx)(`div`,{className:`acc-content ${e===r?`current`:``}`,children:(0,f.jsx)(`div`,{className:`text`,children:n.a})})]},r))})]})]})})})})}),(0,f.jsx)(`div`,{className:`related-portfolio-section`,children:(0,f.jsx)(u,{})}),(0,f.jsx)(`div`,{className:`portfolio-slider-section`,children:(0,f.jsx)(V,{})})]})]})};export{H as default};