import React from "react";
import "./style.css";

function Footer() {
  return (
    <footer>
      Copyright 2022 - Troy Allen
      <a href="https://github.com/tallen1985" target="_blank" rel="noreferrer">
        {" "}
        <i className="fab fa-github"></i>
      </a>
      <a
        href="https://www.linkedin.com/in/troy-allen-595a40203/"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fab fa-linkedin"></i>
      </a>
    </footer>
  );
}

export default Footer;
