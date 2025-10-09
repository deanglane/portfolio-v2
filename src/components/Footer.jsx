import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      brewed in Toronto — © {new Date().getFullYear()} Dean the Day Off Dev
    </footer>
  );
}

export default Footer;
