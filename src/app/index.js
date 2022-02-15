import React, { useState } from "react";
import Navigation from "../navigation";
import MemoHeader from "../header";
import Footer from "../footer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "../sections/home";
import Contact from "../sections/contact";
import Projects from "../sections/projects";

function App() {
  const [page, setCurrentPage] = useState("Home");

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <main>
      <Router>
        <div id="headerBox">
          <MemoHeader />
          <Navigation page={page} handlePageChange={handlePageChange} />
        </div>
        <div id="projectWindow">
          <div id="textWindow">
            <Route exact path="/20-Homework-React-Portfolio">
              <Home />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
            <Route exact path="/projects">
              <Projects />
            </Route>
          </div>
        </div>
        <Footer />
      </Router>
    </main>
  );
}

export default App;
