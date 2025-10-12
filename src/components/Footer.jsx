import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={`${styles.footer}`}>
      <div className={"wrapper"}>
        <div className={styles.sitemap}>
          <div className={styles.tagLine}>
            <p>Day Off Dev</p>
            <p>Toronto • Building cozy, playful web things</p>
          </div>

          <div className={styles.menu}>
            <ul>
              <li>menu</li>
              <li>Projects</li>
              <li>Recipes</li>
              <li>Gallery</li>
            </ul>
          </div>

          <div className={styles.contact}>
            <span>Say Hi!</span>
            <p>hello@dayoffdev.com</p>
            <ul>
              <li>LinkedIn</li>
              <li>GitHub</li>
              <li>Itch.io</li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.copyright}>
        brewed in Toronto — © {new Date().getFullYear()} Dean the Day Off Dev -
        v:0.1.1.1
      </div>
    </footer>
  );
}

export default Footer;
