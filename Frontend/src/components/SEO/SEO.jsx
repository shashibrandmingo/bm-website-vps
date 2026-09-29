import React from "react";
import { Helmet } from "react-helmet-async";

export default function SEO({
  title = "Brandmingo | Digital Marketing, Branding & Web Development Company",
  description = "Brandmingo is a premier digital marketing, branding, and web development company in India specializing in SEO, Google Ads, Meta Ads, custom web development, and SaaS solutions.",
  canonical = "https://brandmingo.com/",
  keywords = "Brandmingo, digital marketing agency, SEO company, web development, branding agency, India",
  ogType = "website",
  ogImage = "https://brandmingo.com/brandmingo-fab-iocn.png",
  schema = null,
}) {
  return (
    <Helmet>
      {/* Dynamic Title */}
      <title>{title}</title>

      {/* Primary Meta Tags */}
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonical} />

      {/* Crawlers */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

      {/* Open Graph / Facebook / WhatsApp */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Brandmingo" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Structured Data (Schema.org JSON-LD) */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
}
