import React from "react";
import styles from "./ProjectCard.module.css";

function ProjectCard({ isLeft, project }) {
  const hasFeatures = project.features && project.features.length > 0;
  const hasTechStack = project.techStack && project.techStack.length > 0;

  const projectCell = (
    <div className={`${styles["timelineDate-left"]} ${styles.card}`}>
      <small>{new Date(project.date).toLocaleDateString()}</small>
      <h3>Features:</h3>
      {hasFeatures && (
        <ul>
          {project.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      )}
      <h3>Tech Stack:</h3>
      {hasTechStack && (
        <ul>
          {project.techStack.map((stack) => (
            <li key={stack}>{stack}</li>
          ))}
        </ul>
      )}
      <div className={styles.buttonContainer}>
        <a className={"button"} href={project.url}>
          Live Preview
        </a>
        <a className={"button"} href={project.gitHub}>
          Github Code
        </a>
      </div>
    </div>
  );

  const supportCell = (
    <div className={styles.card}>
      <h2>{project.title}</h2>
      <p>{project.tag}</p>
      <h3>Developer Summary:</h3>
      <p>{project.desc}</p>
      <div>
        <img src={project.image} alt="yep I'll do this one day" />
      </div>
    </div>
  );

  return (
    <li className={styles.item}>
      {/* Left side cell */}
      {isLeft ? supportCell : projectCell}

      {/* Center marker cell (line + dot) */}
      <div className={styles.markerCell}>
        <span className={styles.dot} />
      </div>

      {/* Right side cell */}
      {isLeft ? projectCell : supportCell}
    </li>
  );
}

export default ProjectCard;
