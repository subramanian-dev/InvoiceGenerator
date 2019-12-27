import React from "react";

const Error = (props) => {
  return (
    <div className="tr w-80">
      <span className="red">
      Invalid {props.type} !!! 
      </span>
    </div>
  );
};

export default Error;
