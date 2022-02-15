import React, { useState } from "react";
import "./style.css";
import pdfLogo from "./img/pdf-logo.png";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      alert("Please fill in all fields");
    } else {
      alert(`Hello ${name}
  your email is ${email}.
  Thanks for the letting me know about
      ${message}`);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (e.target.onBlur)
      if (name === "name") {
        setName(value);
      } else if (name === "email") {
        setEmail(value);
      } else {
        setMessage(value);
      }
  };

  return (
    <div>
      <div id="Contact/Resume">
        <div className="description" id="contactList">
          <h1>Contact</h1>

          <form className="form">
            <input
              value={name}
              name="name"
              onChange={handleInputChange}
              type="text"
              placeholder="Name"
            />{" "}
            <br />
            <input
              value={email}
              name="email"
              onChange={handleInputChange}
              type="text"
              placeholder="Email Address"
            />{" "}
            <br />
            <input
              value={message}
              name="message"
              onChange={handleInputChange}
              type="text"
              placeholder="Enter Message Here"
              required
            />{" "}
            <br />
            <button type="button" onClick={handleSubmit}>
              Submit
            </button>
          </form>
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
