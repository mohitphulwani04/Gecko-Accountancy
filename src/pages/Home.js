import React from "react";
import QuoteSection from "../components/quoteSection/QuoteSection";
import Services from "../components/servicesSection/Services";
import About from "../components/aboutSection/About";
import Footer from "../components/footerSection/Footer";
import ContactSection from "../components/contactSection/contactSection";
import BlogsSection from "../components/blog";

const Home = () => {
  return (
    <div className="flex flex-col">
      <QuoteSection />
      <Services />
      <About />
      <BlogsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Home;
