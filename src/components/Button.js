import React from "react";
import "./Button.css";

const Button = (props) => {
  return (
    <button
      type={props.type}
      className={`btn ${props.btnStyle}`}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
