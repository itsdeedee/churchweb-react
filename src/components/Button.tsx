import React from "react";
import { Link } from "react-router-dom";

import "../Home.css";

const Button = () => {
  return (
    <>
      <div className="Button">
        <Link to="/" style={{ textDecoration: "none" }}>
          <h3>WORSHIP WITH US</h3>
        </Link>
        <Link to="/" style={{ textDecoration: "none" }}>
          <h3 className="events-link">UPCOMING EVENTS</h3>
        </Link>
      </div>
    </>
  );
};

export default Button;
