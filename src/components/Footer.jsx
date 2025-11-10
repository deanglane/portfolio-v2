import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={`${styles.footer}`}>
      {/* <div className={"wrapper"}>
        <div className={styles.sitemap}>
          <div className={styles.tagLine}>
            <p>Day Off Dev</p>
            <p>Toronto • Building cozy, playful web things</p>
          </div>
        </div>
      </div> */}

      <div className={styles.copyright}>
        brewed in Toronto — © {new Date().getFullYear()} Dean the Day Off Dev -
        v:0.1.1.1
      </div>
    </footer>
  );
}

export default Footer;
