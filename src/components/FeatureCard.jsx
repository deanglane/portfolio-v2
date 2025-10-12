import React from "react";
import styles from "./FeatureCard.module.css";
import { NavLink } from "react-router-dom";

function FeatureCard({ title, description, image, alt, button }) {
  return (
    <article className="feature_card">
      <h3>{title}</h3>
      <p>{description}</p>
      <div className={styles.image_container}>
        <img src={image} alt={alt} />
      </div>
      <NavLink to={button} className={"button"}>
        More Info
      </NavLink>
    </article>
  );
}

export default FeatureCard;
