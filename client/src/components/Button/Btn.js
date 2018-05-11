import React from "react";

const Btn = props => (
  <button className= "btn btn-primary" {...props}>
     {props.children}
  </button>
);

export default Btn;