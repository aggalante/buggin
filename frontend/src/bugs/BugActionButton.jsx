import React from "react";

export default (props) => (
  <button
    disabled={props.disabled}
    className={`btn btn-xs btn-${props.color}${
      props.disabled ? ".disabled" : ""
    }`}
    onClick={() => {
      props.changeState(props.bug, props.type);
    }}>
    {props.title}
  </button>
);
