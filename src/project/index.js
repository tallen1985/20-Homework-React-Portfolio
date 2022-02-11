import React, { useEffect } from "react";
import Home from "../sections/home";
import Contact from "../sections/contact";
import Projects from "../sections/projects";
import "./style.css";

function Project({ currentPage }) {
  const showPage = () => {
    if (currentPage === "Home") {
      return <Home />;
    } else if (currentPage === "Contact") {
      return <Contact />;
    } else {
      return <Projects />;
    }
    // if (currentPage === "About") {
    //   return <About />;
    // }
    // return <Contact />;
  };

  return (
    <div id="projectWindow">
      <div id="textWindow">{showPage()}</div>
    </div>
  );
}

export default Project;
