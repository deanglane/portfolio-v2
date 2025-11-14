import styles from "./Navigation.module.css";
import { NavLink } from "react-router-dom";
import Dropdown from "./Dropdown";
import { useState, useRef } from "react";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  let hoverTimer = useRef(null);

  const handleMouseEnter = () => {
    hoverTimer.current = setTimeout(() => {
      setIsOpen(true);
    }, 300);
  };

  const handleMouseLeave = () => {
    clearTimeout(hoverTimer.current);
    setIsOpen(false);
  };

  return (
    <nav className={"wrapper"}>
      <div className={styles.logo}>
        <h1>Day Off Dev</h1>
      </div>
      <ul className={styles["main-nav-ul"]}>
        <li>
          <NavLink to="/" end>
            home
          </NavLink>
        </li>
        <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <NavLink className={styles["sub-nav-link"]} to="/projects">
            projects ▼
          </NavLink>
          <div
            className={`${styles["dropdown-container"]} ${
              isOpen ? styles["show"] : ""
            }`}
          >
            <Dropdown />
          </div>
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
        <li>
          <NavLink to="/workshop">workshop</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
