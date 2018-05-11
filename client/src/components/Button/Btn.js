import React from "react";

const Btn = props => (
  <button className= "btn btn-success"  {...props}>
     {props.children}
  </button>
);

export default Btn;