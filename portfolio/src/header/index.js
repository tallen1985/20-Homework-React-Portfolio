import React from "react";
import Navigation from "../navigation";
import "./style.css";

function Header() {
  return (
    <header className="header">
      <h1>Header</h1>
      <Navigation></Navigation>
    </header>
  );
}

export default Header;
