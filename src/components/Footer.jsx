import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={`${styles.footer}`}>
      <div>
        brewed in Toronto — © {new Date().getFullYear()} Dean the Day Off Dev -
        v:2.1.4.0
      </div>
    </footer>
  );
}

export default Footer;
