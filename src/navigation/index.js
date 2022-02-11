import React from "react";
import "./style.css";

function Navigation({ page, handlePageChange }) {
  console.log(page);
  return (
    <ul>
      <li className="nav-item">
        <a
          href="#home"
          onClick={() => handlePageChange("Home")}
          className={page === "Home" ? "nav-link active" : "nav-link"}
        >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#home"
          onClick={() => handlePageChange("Projects")}
          className={page === "Projects" ? "nav-link active" : "nav-link"}
        >
          Projects
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#home"
          onClick={() => handlePageChange("Contact")}
          className={page === "Contact" ? "nav-link active" : "nav-link"}
        >
          Contact / Resume
        </a>
      </li>
    </ul>
  );
}

export default Navigation;
