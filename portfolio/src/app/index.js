import React from "react";
import Header from "../header";
import Project from "../project";
import Footer from "../footer";
import "./style.css";

function App() {
  return (
    <main>
      <Header />
      <div>
        <Project />
        <Project />
      </div>
      <Footer />
    </main>
  );
}

export default App;
