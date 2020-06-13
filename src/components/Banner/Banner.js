import React from "react";

import { FaBug, FaCode, FaCoffee } from "react-icons/fa";

import "./Banner.scss";

const Banner = () => {
  return (
    <div className="banner-container">
      <ul>
        <li>
          <FaCode /> <h3>2394782</h3>
          <h5>Lines of code</h5>
        </li>
        <li>
          <FaBug /> <h3>4388</h3>
          <h5>Bugs encountered</h5>
        </li>
        <li>
          <FaCoffee /> <h3>1389</h3>
          <h5>Cups of coffee</h5>
        </li>
      </ul>
    </div>
  );
};

export default Banner;
