import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Dropdown.module.css";
import games from "../assets/images/dd-thumb/games.png";
import websites from "../assets/images/dd-thumb/web-sites.png";
import photography from "../assets/images/dd-thumb/photography.png";
import other from "../assets/images/dd-thumb/other.png";

const links = [
  {
    title: "Games",
    href: "/projects/games",
    image: games,
    desc: "All My Games",
  },
  {
    title: "Web-sites",
    href: "/projects/web",
    image: websites,
    desc: "All My websites",
  },
  {
    title: "Photography",
    href: "/projects/photography",
    image: photography,
    desc: "All my Photography",
  },
  {
    title: "Other",
    href: "/projects/other",
    image: other,
    desc: "All my other stuff",
  },
];

function Dropdown() {
  const [active, setActive] = useState(0);

  const handleMouseLeave = () => {
    setActive(0);
  };

  return (
    <div className={styles.dropdown} onMouseLeave={handleMouseLeave}>
      {/* left side */}
      <ul className={styles.menu}>
        {links.map((link, i) => (
          <li
            key={link.title}
            className={`${styles.menuItem} ${
              i === active ? styles.active : ""
            }`}
            onMouseEnter={() => setActive(i)}
          >
            <NavLink className={styles.link} to={link.href}>
              {link.title}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Right Side */}
      <div className={styles.preview}>
        <img
          className={styles.preview}
          src={links[active].image}
          alt={links[active].desc}
        />
        <p className={styles.caption}>{links[active].desc}</p>
      </div>
    </div>
  );
}

export default Dropdown;
