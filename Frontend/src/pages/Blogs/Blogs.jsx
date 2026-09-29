import React from "react";
import BlogHero from "../../components/BlogHero/BlogHero";
import BlogList from "../../components/BlogList/BlogList";
import SEO from "../../components/SEO/SEO";

const Blogs = () => {
  return (
    <>
      <SEO
        title="Insights, Tech & Digital Marketing Blog | Brandmingo"
        description="Stay updated with the latest digital marketing trends, SEO strategies, web development practices, and business scaling guides by Brandmingo."
        canonical="https://brandmingo.com/blogs"
        keywords="Brandmingo blogs, digital marketing articles, SEO tips, tech trends"
      />
      <BlogHero />
      <BlogList />
    </>
  );
};

export default Blogs;
