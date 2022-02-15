import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

function Navigation({ page, handlePageChange }) {
  console.log(page);
  return (
    <ul>
      <li className="nav-item">
        <Link
          to="/"
          onClick={() => handlePageChange("Home")}
          className={page === "Home" ? "nav-link active" : "nav-link"}
        >
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/projects"
          onClick={() => handlePageChange("Projects")}
          className={page === "Projects" ? "nav-link active" : "nav-link"}
        >
          Projects
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/contact"
          onClick={() => handlePageChange("Contact")}
          className={page === "Contacts" ? "nav-link active" : "nav-link"}
        >
          Contact
        </Link>
      </li>
    </ul>
  );
}

export default Navigation;
