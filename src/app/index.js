import React, { useState } from "react";
import Navigation from "../navigation";
import MemoHeader from "../header";
import Project from "../project";
import Footer from "../footer";

function App() {
  const [page, setCurrentPage] = useState("Home");

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <main>
      <div id="headerBox">
        <MemoHeader />
        <Navigation page={page} handlePageChange={handlePageChange} />
      </div>
      <div>
        <Project currentPage={page} />
      </div>
      <Footer />
    </main>
  );
}

export default App;
