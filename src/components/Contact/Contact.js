import React from "react";

import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaTwitter,
  FaPaperPlane,
} from "react-icons/fa";

import "./Contact.scss";

const Contact = () => {
  return (
    <div className="contact-container" id="contact">
      <div className="inner-container">
        <h3>Let's get in touch!</h3>
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
        <h6>
          Want to discuss any ideas of collaboration? I'm most definitely game.
        </h6>
        <form>
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder=""
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">Your Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder=""
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">Your Phone</label>
            <input
              type="text"
              name="phone"
              className="form-control"
              placeholder=""
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea className="form-control" id="message" rows="4"></textarea>
          </div>
          <button
            type="submit"
            href="#projects"
            className="btn btn-white btn-animation-1"
          >
            <span>SEND MESSAGE</span> <FaPaperPlane />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
