import React from "react";
import "./style.css";
import JakePicture from "./img/Jake-50pc.jpg";

export default function Home() {
  return (
    <div>
      <div class="headline">
        <img src={JakePicture} id="profilePicture" alt="" />
      </div>
      <div class="description">
        <p>
          Software Engineer with a strong customer service background to fully
          realize the needs of clients on the web. I am currently a student of
          the UNH Full Stack Program and will be certified in Full Stack Web
          Development with proficiency in Javascript, HTML, CSS, React, SQL and
          NoSQL database.
        </p>{" "}
        <br />
        <p>
          Recently, I was part of a group that utilized fetchAPI protocols to
          create a digital cryptocurrency wallet that displayed current and
          historic data rendered into graphic representation. I've also
          successfully deployed web applications that utilize independent front
          and back end processes as well as interfacing with SQL database
          systems.
        </p>
        <br />
        <p>
          In each project, I strive to utilize responsive dynamic elements to
          create and maintain the most up to date web experience. I’m looking
          forward to joining a team and contribute my real life experiences to
          create a truly memorable web presence.
        </p>
      </div>
    </div>
  );
}
