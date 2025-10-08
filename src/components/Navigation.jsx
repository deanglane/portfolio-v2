import styles from "./Navigation.module.css";
import logo from "../assets/dayoffdean.png";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <div className={styles.logo_container}>
        <Link to="/">
          <img src={logo} alt="day off dean" />
        </Link>
      </div>
      <div className={styles.nav_container}>
        <ul>
          <Link>
            <li>
              <p>about me</p>
            </li>
          </Link>
          <Link>
            <li>
              <p>tech stack</p>
            </li>
          </Link>
          <Link to="projects">
            <li>
              <p>projects</p>
            </li>
          </Link>
          <Link>
            <li>
              <p>blog</p>
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
