import React from "react";

import Hero from "../../components/Hero/Hero";
import Header from "../../components/Header/Header";
import Projects from "../../components/Projects/Projects";
import Banner from "../../components/Banner/Banner";
import Skills from "../../components/Skills/Skills";
import Footer from "../../components/Footer/Footer";
import Contact from "../../components/Contact/Contact";

import "./Homepage.scss";

const Homepage = () => {
  return (
    <div className="homepage-container">
      <Header />
      <Hero />
      <Projects />
      <Banner />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default Homepage;
