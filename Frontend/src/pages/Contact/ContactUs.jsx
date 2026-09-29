import React from "react";
import ContactHero from "../../components/ContactpagesHero/ContactHero";
import ClientForm from "../../components/contactfrom/ClientForm";
import ContactInfo from "../../components/ContactInfo/ContactInfo";
import ContactFaq from "../../components/ContactFaq/ContactFaq";
import SEO from "../../components/SEO/SEO";

const ContactUs = () => {
  return (
    <>
      <SEO
        title="Contact Us | Get in Touch with Brandmingo"
        description="Ready to scale your business? Contact Brandmingo today for customized digital marketing, SEO, branding, and web development consultations."
        canonical="https://brandmingo.com/contact-us"
        keywords="Contact Brandmingo, hire web developers India, digital marketing consultation"
      />
      <ContactHero />

      <div className="client-form-wrap">
        <ClientForm />
      </div>

      <div className="contact-info-section">
        <ContactInfo />
      </div>

      <div className="contact-info-section">
        <ContactFaq />
      </div>
    </>
  );
};

export default ContactUs;
