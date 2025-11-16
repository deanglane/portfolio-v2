import React from "react";
import styles from "../routes/Projects.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { projects } from "../utils/projects.js";

function Projects() {
  return (
    <section className={"wrapper"}>
      <div>
        <h2>Projects</h2>
        <quote>
          “Turning coffee, curiosity and code into something visually amazing
          for the web.”
        </quote>
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
        <h2>Testing a grid layout</h2>
        <div className={styles["grid-container"]}>
          <div className={styles["grid-leftPanel"]}>
            <ul>
              {[...projects]
                .filter((project) => project.status.toLowerCase() === "active")
                .sort((a, b) => b.date.localeCompare(a.date))
                .map((project) => (
                  <li key={`${project.date}-${project.desc}`}>
                    <div className={styles["project-card-left"]}>
                      <small>
                        {new Date(project.date).toLocaleDateString()}
                      </small>
                      <h3>{project.desc}</h3>
                      <p>Description of project</p>
                    </div>
                    <div className={styles["project-card-right"]}>
                      <p>screenshot</p>
                    </div>
                  </li>
                ))}
            </ul>
          </div>
          <div className={styles["grid-rightPanel"]}></div>
        </div>
      </div>
    </section>
  );
}

export default Projects;

// The projects view will be a linear timeline from most recent to oldest projects with the year and month a created them
// TODO: 1) Projects title centered on page
// TODO: 2) tag line centered below title
// TODO: 3) Make specials gallery width shorter to accommodate a screenshot with short description overlay and link to project below
// TODO: 4) Style individual project components cards
