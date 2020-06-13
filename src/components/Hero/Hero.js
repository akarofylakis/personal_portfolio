import React from "react";
import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaTwitter,
  FaArrowDown,
} from "react-icons/fa";

import "./Hero.scss";

const Hero = () => {
  return (
    <section className="hero-container" id="home">
      <div className="inner-container">
        <div className="avatar"></div>
        <h1>
          Hi, I'm <span>Alex Karofilakis</span>
        </h1>
        <h2>
          A full-stack software engineer based in Greece, specializing in
          building (and occasionally designing) exceptional web applications. I
          enjoy turning complex problems into intuitive, dynamic user
          experiences.
        </h2>
        <ul>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/akarofylakis"
            >
              <FaGithub />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/akarofylakis/"
            >
              <FaLinkedinIn />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:akarofylakis@gmail.com"
            >
              <FaEnvelope />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="#">
              <FaTwitter />
            </a>
          </li>
        </ul>
        <div className="hero-cta">
          <a href="#projects" className="btn btn-white btn-animation-1">
            <span>CHECK MY WORK</span> <FaArrowDown />
          </a>
          <a href="#" className="btn btn-white btn-animation-1">
            <span>DOWNLOAD MY CV</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
