import React from "react";
import styles from "./TestComponent.module.css";

function TestComponent({ title, description }) {
  return (
    <div className={styles["card-container"]}>
      <div className={styles["card-content"]}>
        <h2>{title}</h2>
        <p>{description}</p>
        <p>Test Component</p>
      </div>
    </div>
  );
}

export default TestComponent;
