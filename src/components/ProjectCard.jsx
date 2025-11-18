import React from "react";
import styles from "../routes/Projects.module.css";

function ProjectCard({ isLeft, project }) {
  return (
    <li className={styles.item}>
      {/* Left side cell */}
      {isLeft ? (
        <div className={styles.card}>
          <h3>{project.title}</h3>
          <p>Description of project</p>
          <p>{project.desc}</p>
        </div>
      ) : (
        <div className={styles["timelineDate-left"]}>
          <small>{new Date(project.date).toLocaleDateString()}</small>
        </div> // empty placeholder to keep grid structure
      )}

      {/* Center marker cell (line + dot) */}
      <div className={styles.markerCell}>
        <span className={styles.dot} />
      </div>

      {/* Right side cell */}
      {isLeft ? (
        <div>
          <small>{new Date(project.date).toLocaleDateString()}</small>
        </div> // empty placeholder to keep grid structure
      ) : (
        <div className={styles.card}>
          <h3>{project.title}</h3>
          <p>Description of project</p>
          <p>{project.desc}</p>
        </div>
      )}
    </li>
  );
}

export default ProjectCard;
