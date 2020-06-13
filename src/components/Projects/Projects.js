import React from "react";

import { FaLongArrowAltRight, FaCode } from "react-icons/fa";

import "./Projects.scss";

const Projects = () => {
  return (
    <section className="projects-container" id="projects">
      <div className="inner-container">
        <h3>Personal Projects</h3>
        <ul className="projects-list">
          <li>
            <div className="image-container folllowr">
              <div className="project-logo"></div>
            </div>
            <div className="details">
              <h2>Folllowr</h2>
              <h4>
                A photo sharing, social app with features made popular by
                Instagram. It allows users to create an account, upload their
                photos, as well as search for users and connect with them. It
                also enables common post interactions like commenting/liking.
              </h4>
              <div className="image-container mobile folllowr">
                <div className="project-logo"></div>
              </div>
              <h2 className="technical">Technical Wrap Up</h2>
              <h4 className="technical-text">
                A SPA done in <span>React</span>, using <span>Redux</span> (and
                Redux Thunks) for state management. The standalone front-end
                connects to a REST API made with <span>Node.js</span> and
                <span> Express</span>, while I use <span>MongoDB</span> for data
                storage. Integrates usage of Cloudinary API for storing photos
                and user authentication is handled via JWT tokens. Offers great
                user expierience through a mobile-friendly, good-looking UI.
              </h4>
              <div className="project-cta folllowr-cta">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/akarofylakis/instaclone"
                  className="btn btn-white btn-animation-1"
                >
                  <span>View Code</span> <FaCode />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://folllowr.web.app/"
                  className="btn btn-white btn-animation-1"
                >
                  <span>Visit Website</span> <FaLongArrowAltRight />
                </a>
              </div>
            </div>
          </li>
          <li>
            <div className="details">
              <h2>Staysharp</h2>
              <h4>
                A scalable e-commerce website with shopping cart functionality.
                It lets users browse a list of clothing products, add them to
                their cart, update it, proceed to checkout and make a payment.
                Signing up and Google authentication are also (optionally)
                featured.
              </h4>
              <div className="image-container mobile staysharp">
                <div className="project-logo"></div>
              </div>
              <h2 className="technical">Technical Wrap Up</h2>
              <h4 className="technical-text">
                A front-end web application built with <span>React</span>,
                managing state with <span>Redux</span> (and Redux Sagas). Users
                storage and authentication as well as authenticating via Google
                OAuth are handled through <span>Firebase</span>. I also use the
                <span> Stripe API</span> to process the payment requests. UI
                design and implementation were conceived with a user-centered
                approach, so that great performance and great visual expierence
                are achieved.
              </h4>
              <div className="project-cta staysharp-cta">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/akarofylakis/staysharp"
                  className="btn btn-white btn-animation-1"
                >
                  <span>View Code</span> <FaCode />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://staysharp-akarofylakis.herokuapp.com/"
                  className="btn btn-white btn-animation-1"
                >
                  <span>Visit Website</span> <FaLongArrowAltRight />
                </a>
              </div>
            </div>
            <div className="image-container staysharp">
              <div className="project-logo"></div>
            </div>
          </li>
          <li>
            <div className="image-container lifttracker">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://lifttracker-65d38.firebaseapp.com/"
              >
                <div className="project-logo"></div>
              </a>
            </div>
            <div className="details">
              <h2>LiftTracker</h2>
              <h4>
                A simplistic workout tracker for users to keep track of their
                daily lift numbers. It offers signing up, creating logs with
                their workout information, dynamically adding the number of
                exercises for each post and browsing public logs posted by
                others.
              </h4>
              <div className="image-container mobile lifttracker">
                <div className="project-logo"></div>
              </div>
              <h2 className="technical">Technical Wrap Up</h2>
              <h4 className="technical-text">
                A full-stack web application built using the <span>MERN</span>
                stack. Managing the data layer on the front-end is once again
                done with
                <span> Redux</span> and <span>React</span>'s Context. Users get
                authenticated through
                <span> Firebase</span> and uploading of images is done with
                multer, a middleware running on the <span>Express</span> server.
                Validation of data is implemented both on the front-end, as well
                as on the back-end, before the data hits <span>MongoDB</span>.
              </h4>
              <div className="project-cta lifttracker-cta">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/akarofylakis/instaclone"
                  className="btn btn-white btn-animation-1"
                >
                  <span>View Code</span> <FaCode />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://folllowr.web.app/"
                  className="btn btn-white btn-animation-1"
                >
                  <span>Visit Website</span> <FaLongArrowAltRight />
                </a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Projects;
