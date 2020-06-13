import React from "react";

import "./Button.scss";

const Button = (props) => {
  return (
    <button
      onClick={props.onClick}
      name={props.name}
      className={`btn ${props.className} ${props.type} ${
        props.primary && "btn--primary"
      } ${props.secondary && "btn--secondary"} 
      }`}
    >
      {props.children}
      <span className="btn-text">{props.text}</span>
    </button>
  );
};

export default Button;
