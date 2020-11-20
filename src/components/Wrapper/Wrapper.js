import React from "react";
import "./Wrapper.css";

// higher Order Functional component that wraps all the other components (used in App.js)
function Wrapper(props) {
  return <main className="wrapper" {...props} />;
}

export default Wrapper;
