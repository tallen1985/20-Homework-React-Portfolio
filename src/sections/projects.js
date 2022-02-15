import React from "react";
import "./style.css";
import Project from "../project";

export default function Projects() {
  const assignments = [
    {
      name: "eCommerceBackend",
      url: "https://watch.screencastify.com/v/WfPoKfWJtRiI2LsLfQyc",
      description: "CRUD/API/MySql/Sequelize/Dotenv",
      screenshot: "/13-Homework-screenshot.jpg",
    },
    {
      name: "CryptoWallet",
      url: "https://tallen1985.github.io/cryptocurrencyWallet/",
      description: "CRUD/API/MySql/Sequelize/Dotenv",
      screenshot: "/cryptoWallet-screenshot.jpg",
    },
    {
      name: "Weather Dashboard",
      url: "https://tallen1985.github.io/06-Homework-Weather-Dashboard/",
      description: "Server-side API/LocalStorage/UI-UX Design",
      screenshot: "/src/sections/img/11-Homework-screenshot.jpg)",
    },
    {
      name: "Note Taker",
      url: "https://troy-allen-note-taker.herokuapp.com/",
      description: "Back End Server Integration/Express",
      screenshot: "/src/sections/img/11-Homework-screenshot.jpg)",
    },
  ];

  return (
    <div>
      <article className="work" id="work">
        <div className="headline">
          <h1>Works</h1>
        </div>
        <div className="description">
          {assignments.map((item) => {
            return <Project key={item.name} project={item} />;
          })}
          ;
        </div>
      </article>
    </div>
  );
}
