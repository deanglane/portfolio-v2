import React from "react";
import styles from "./Portfolio.module.css";

function Portfolio() {
  return (
    <section className={`${styles.portfolioSection} wrapper`}>
      <div>This is the projects page that showcases all the projects</div>
      <p>“Turning coffee and curiosity into code.”</p>
    </section>
  );
}

export default Portfolio;
