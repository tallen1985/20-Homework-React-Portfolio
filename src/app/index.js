import React, { useState } from "react";
import Navigation from "../navigation";
import MemoHeader from "../header";
import Project from "../project";
import Footer from "../footer";
import "./style.css";

function App() {
  const [page, setCurrentPage] = useState("Home");

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <main>
      <MemoHeader />
      <ul>
        <Navigation page={page} handlePageChange={handlePageChange} />
      </ul>
      <div>
        <Project currentPage={page} />
      </div>
      <Footer />
    </main>
  );
}

export default App;
