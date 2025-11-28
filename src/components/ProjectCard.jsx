import React from "react";
import styles from "./ProjectCard.module.css";

function ProjectCard({ isLeft, project }) {
  // check if the projects object as a feature section and a tech stack section
  const hasFeatures = project.features && project.features.length > 0;
  const hasTechStack = project.techStack && project.techStack.length > 0;

  // Formatting the timeline date
  const date = new Date(project.date);
  const year = date.getFullYear();
  const month = date.toLocaleString("en-US", { month: "long" }).toUpperCase();
  const formattedDate = `${year} - ${month}`;

  // project cell for features and Tech stack
  const projectCell = (
    <div className={styles.card}>
      <h3>Features</h3>
      {hasFeatures && (
        <ul className={!isLeft ? styles.cardFeatureLeft : undefined}>
          {project.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      )}
      <h3>Tech Stack</h3>
      {hasTechStack && (
        <ul className={!isLeft ? styles.cardFeatureLeft : undefined}>
          {project.techStack.map((stack) => (
            <li key={stack}>{stack}</li>
          ))}
        </ul>
      )}
    </div>
  );

  // Project cell for descriptions, images and buttons
  const supportCell = (
    <div className={styles.card}>
      <h2>{project.title}</h2>
      <p>{project.tag}</p>
      <h3>Developer Summary</h3>
      <p>{project.desc}</p>
      <div>
        <img src={project.image} alt="yep I'll do this one day" />
      </div>
      <div className={styles.buttonContainer}>
        <a
          className={"button"}
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Live Preview
        </a>
        <a
          className={"button"}
          href={project.gitHub}
          target="_blank"
          rel="noopener noreferrer"
        >
          Github Code
        </a>
      </div>
    </div>
  );

  return (
    <li className={styles.item}>
      {/* Left side cell */}
      {isLeft ? supportCell : projectCell}

      {/* Center marker cell (line + dot) */}
      <div className={styles.markerCell}>
        <small className={styles.date}>{formattedDate}</small>
        <span className={styles.dot} />
      </div>

      {/* Right side cell */}
      {isLeft ? projectCell : supportCell}
    </li>
  );
}

export default ProjectCard;
