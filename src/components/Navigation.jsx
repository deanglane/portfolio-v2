import styles from "./Navigation.module.css";

import { NavLink } from "react-router-dom";

const linkBase = "px-3 py-2 rounded-lg transition";
const active = "text-white bg-[#F77F00]";
const idle = "text-[#8B5E34] hover:bg-[#FAEEDC]";

const classFor = ({ isActive }) =>
  [linkBase, isActive ? active : idle].join(" ");

function Navigation() {
  return (
    <nav className={"wrapper"}>
      <div className={styles.logo}>
        <h1>Day Off Dev</h1>
      </div>
      <ul>
        <li>
          <NavLink to="/" end className={classFor}>
            home
          </NavLink>
        </li>
        <li>
          <NavLink to="/portfolio" className={classFor}>
            projects
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={classFor}>
            about
          </NavLink>
        </li>
        <li>
          <NavLink to="/techstack" className={classFor}>
            tech stack
          </NavLink>
        </li>
        <li>
          <NavLink to="/blog" className={classFor}>
            blog
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={classFor}>
            contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
