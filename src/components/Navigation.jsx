import styles from "./Navigation.module.css";
// import logo from "../assets/dayoffdean.png";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      {/* <div className={styles.logo_container}>
        <Link to="/">
          <img src={logo} alt="day off dean" />
        </Link>
      </div> */}
      <div className={styles.title}>
        <h1>day off dev</h1>
      </div>
      <div className={styles.nav_container}>
        <ul>
          <Link to="/">
            <li>
              <p>home</p>
            </li>
          </Link>
          <Link to="portfolio">
            <li>
              <p>portfolio</p>
            </li>
          </Link>
          <Link to="about">
            <li>
              <p>about</p>
            </li>
          </Link>
          <Link to="techstack">
            <li>
              <p>tech stack</p>
            </li>
          </Link>
          <Link to="blog">
            <li>
              <p>blog</p>
            </li>
          </Link>
          <Link to="contact">
            <li>
              <p>contact</p>
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
