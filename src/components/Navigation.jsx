import styles from "./Navigation.module.css";

import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav className={"wrapper"}>
      <div className={styles.logo}>
        <h1>Day Off Dev</h1>
      </div>
      <ul>
        <li>
          <NavLink to="/" end>
            home
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects">projects</NavLink>
        </li>
        <li>
          <NavLink to="/about">about</NavLink>
        </li>
        <li>
          <NavLink to="/techstack">tech stack</NavLink>
        </li>
        <li>
          <NavLink to="/blog">blog</NavLink>
        </li>
        <li>
          <NavLink to="/contact">contact</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
