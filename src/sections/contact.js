import React from "react";
import "./style.css";
import pdfLogo from "./img/pdf-logo.png";

export default function Contact() {
  return (
    <div>
      <div id="Contact/Resume">
        <div className="description" id="contactList">
          <h1>Contact</h1>
          <a href="tel: +16035533103">603-553-3103</a>
          <a href="mailto:jake.allen@me.com">jake.allen@me.com</a>
          <a
            href="https://github.com/tallen1985"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/troy-allen-595a40203/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
        <div className="description resumeSection" id="resumeList">
          <h1>Resume</h1>

          <a
            className="bottomBorderLink"
            href="https://docs.google.com/document/d/e/2PACX-1vR7ri_rWli_wjeb5OVynir-d6ePFMh7BHVxVTlPiIQ8wK12TMF_dVlA-qkIZRBOZZdxtJIwwODv-GfO/pub"
            target="_blank"
            rel="noopener noreferrer"
          >
            Link to Resume
            <img src={pdfLogo} alt="Link to Resume" />
          </a>
        </div>
      </div>
    </div>
  );
}
