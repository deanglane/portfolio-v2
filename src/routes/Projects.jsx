import React from "react";
import styles from "../routes/Projects.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { projects } from "../data/projects.js";
import ProjectCard from "../components/ProjectCard.jsx";

function Projects() {
  const activeSorted = [...projects]
    .filter((p) => p.status.toLowerCase() === "active")
    .sort((a, b) => b.date.localeCompare(a.date));

  return (
    <section>
      <div className="wrapper">
        <h2>Projects</h2>
        <p>
          “Turning coffee, curiosity and code into something visually amazing
          for the web.”
        </p>
        <h3>Today's Specials</h3>
        {/* slider specials gallery */}
        <div className={styles["specials-container"]}>
          <div className={styles["specials-viewport"]}>
            <Swiper
              modules={[Autoplay]}
              spaceBetween={50}
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 5000,
                pauseOnMouseEnter: true,
                disableOnInteraction: false,
              }}
            >
              <SwiperSlide>
                <div>Slide 1</div>
              </SwiperSlide>
              <SwiperSlide>
                <div>Slide 2</div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>

      <div>
        <h2>Project's Timeline</h2>
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
