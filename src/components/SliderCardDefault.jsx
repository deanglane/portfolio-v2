import React from "react";
import styles from "./SliderCardDefault.module.css";

function SliderCardDefault({ project }) {
  // function SliderCardDefault({ project }) {
  return (
    <div className={styles.slide_container}>
      {/* leftside */}
      <div className={styles.slide_left}>
        <h2>{project.title}</h2>
        <h3>{project.tag}</h3>
        <p>{project.summary}</p>
      </div>
      {/* right side */}
      <div className={styles.slide_right}>
        <img src={project.image} alt="???" />
      </div>
    </div>
  );
}

export default SliderCardDefault;
