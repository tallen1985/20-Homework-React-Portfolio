import React from "react";

export default function Project({ project }) {
  const styles = {
    backgroundColor: "#ede7d9",
    backgroundImage: `url(${project.screenshot})`,
    backgroundSize: "100%",
    backgroundPosition: "50% 15%",
    backgroundRepeat: "no-repeat",
    minWidth: "300px",
  };

  return (
    <div className="workCard small" data-active="false" style={styles}>
      <a
        className="cardLink"
        href={project.url}
        target="_blank"
        rel="noreferrer"
      >
        <div className="cardDescription">
          <h2>{project.name}</h2>
          <p>{project.description}</p>
        </div>
      </a>
    </div>
  );
}
