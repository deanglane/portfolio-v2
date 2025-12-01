import React from "react";
import styles from "../routes/Projects.module.css";
import SwiperGallery from "../components/SwiperGallery.jsx";

import { projects } from "../data/projects.js";
import ProjectCard from "../components/ProjectCard.jsx";

// swiper library
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination, EffectFade } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/effect-fade";

function Projects() {
  const activeSorted = [...projects]
    .filter((p) => p.status.toLowerCase() === "active")
    .sort((a, b) => b.date.localeCompare(a.date));

  const highlightSorted = [...projects]
    .filter((f) => f.highlight.display === true)
    .sort((a, b) => b.date.localeCompare(a.date));

  return (
    <section>
      <div className="wrapper">
        <h1 className={styles.pageTitle}>Projects</h1>
        <p className={styles.pageTag}>
          “Turning coffee, curiosity and code into something visually amazing
          for the web.”
        </p>
        {/* slider specials gallery */}
        <SwiperGallery highlights={highlightSorted} />
      </div>

      <div>
        <h2 className={styles.timelineTitle}>Project's Timeline</h2>
        <div className={styles.timeline}>
          <ul className={styles.list}>
            {activeSorted.map((project, i) => {
              const isLeft = i % 2 === 0; // even index = left, odd = right

              return (
                <ProjectCard
                  key={`${project.date}-${project.desc}`}
                  isLeft={isLeft}
                  project={project}
                />
              );
            })}
          </ul>
          <div className={styles["grid-rightPanel"]}></div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
