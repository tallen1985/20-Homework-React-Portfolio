import React, { useEffect } from "react";
import Home from "../sections/home";
import "./style.css";

function Project({ currentPage }) {
  const showPage = () => {
    if (currentPage === "Home") {
      return <Home />;
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
