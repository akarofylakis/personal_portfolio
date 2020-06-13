import React, { useEffect, useState, useCallback } from "react";

import { FaBars, FaTimes } from "react-icons/fa";

import "./Header.scss";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  const checkForScroll = useCallback(() => {
    if (window.scrollY > 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }

    console.log(window.scrollY);

    if (window.scrollY < 600) {
      setActive("home");
    } else if (window.scrollY < 2300) {
      setActive("projects");
    } else if (window.scrollY < 3000) {
      setActive("skills");
    } else {
      setActive("contact");
    }
  }, [setScrolled]);

  const toggleOpen = () => {
    setOpen((prevState) => !prevState);
  };

  const closeModal = () => {
    if (open) {
      setOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkForScroll);
    return () => {
      window.removeEventListener("scroll", checkForScroll);
    };
  }, [checkForScroll]);
  return (
    <div
      className={`header-container ${open && "open"} ${scrolled && "sticky"}`}
    >
      <div className="inner-container">
        <div className="logo">
          <h5>
            <span>
              <a href="#home">AK</a>
            </span>
          </h5>
        </div>
        <nav>
          <div className="menu-icon" onClick={toggleOpen}>
            <FaBars />
          </div>
          <div className="close-icon" onClick={toggleOpen}>
            <FaTimes />
          </div>

          <ul>
            <li>
              <a
                href="#home"
                onClick={closeModal}
                className={`${active === "home" && "active"}`}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={closeModal}
                className={`${active === "projects" && "active"}`}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#Skills"
                onClick={closeModal}
                className={`${active === "skills" && "active"}`}
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={closeModal}
                className={`${active === "contact" && "active"}`}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
