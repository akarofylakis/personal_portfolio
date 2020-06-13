import React from "react";

import "./Skills.scss";

const Skills = () => {
  return (
    <section className="skills-container" id="Skills">
      <div className="inner-container">
        <h3>Skills</h3>
        <div className="skills-divider">
          <div className="front-end">
            <h4>Front-End</h4>
            <ul>
              <li>React</li>
              <li>
                Redux <span>(Thunks/Sagas)</span>
              </li>
              <li>JavaScript ES6</li>
              <li>
                CSS Preprocessing <span>(SASS)</span>
              </li>
              <li>Responsive UI Design</li>
              <li>
                Adobe Suite <span>(Photoshop/XD)</span>
              </li>
            </ul>
          </div>
          <div className="back-end">
            <h4>Back-End</h4>
            <ul>
              <li>Node.js</li>
              <li>Express</li>
              <li>
                Package Managers <span>(npm/yarn)</span>
              </li>
              <li>RESTful APIs</li>
              <li>JWT Authentication</li>
              <li>MongoDB, MySQL</li>
            </ul>
          </div>
          <div className="general">
            <h4>General</h4>
            <ul>
              <li>
                Version Control <span>(Git)</span>
              </li>
              <li>SOLID Design Patterns</li>
              <li>Flux</li>
              <li>Data Structures & Algorithms</li>
              <li>
                Unit & Integration Testing <span>(Jest, SuperTest)</span>
              </li>
              <li>VS Code</li>
              <li>Command Line</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
