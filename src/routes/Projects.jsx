import React from "react";
import styles from "../routes/Projects.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { projects } from "../utils/projects.js";

function Projects() {
  const activeSorted = [...projects]
    .filter((p) => p.status.toLowerCase() === "active")
    .sort((a, b) => b.date.localeCompare(a.date)); // newest first
  return (
    <section>
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
        <div className={styles.timeline}>
          <ul className={styles.list}>
            {activeSorted.map((project, i) => {
              const isLeft = i % 2 === 0; // even index = left, odd = right

              return (
                <li
                  key={`${project.date}-${project.desc}`}
                  className={styles.item}
                >
                  {/* Left side cell */}
                  {isLeft ? (
                    <div className={styles.card}>
                      <small>
                        {new Date(project.date).toLocaleDateString()}
                      </small>
                      <h3>{project.desc}</h3>
                      <p>Description of project</p>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quia molestiae expedita veniam sint! Dolorum quibusdam
                        reprehenderit optio neque quia voluptate cupiditate
                        velit asperiores, alias unde a, repellendus at vitae
                        sunt voluptas, necessitatibus fugit impedit iste
                        consequatur ut quidem rerum soluta! In qui voluptate
                        quas voluptatem labore, assumenda voluptates. Sapiente
                        iste quidem cum asperiores doloribus minima, fugiat
                        commodi consequatur, inventore expedita debitis quisquam
                        dignissimos. Maxime libero molestiae, veniam dolor hic
                        accusantium voluptatum vitae corporis totam natus?
                        Dignissimos aliquam maiores amet pariatur repudiandae
                        soluta magnam numquam distinctio, repellendus neque
                        labore impedit et eaque aspernatur. Debitis excepturi et
                        consequuntur iure amet eaque maiores est quam fugiat
                        ullam nihil autem adipisci quia nesciunt a, voluptate
                        reprehenderit sapiente ex alias. Temporibus dolorum.
                      </p>
                    </div>
                  ) : (
                    <div /> // empty placeholder to keep grid structure
                  )}

                  {/* Center marker cell (line + dot) */}
                  <div className={styles.markerCell}>
                    <span className={styles.dot} />
                  </div>

                  {/* Right side cell */}
                  {isLeft ? (
                    <div /> // empty placeholder
                  ) : (
                    <div className={styles.card}>
                      <small>
                        {new Date(project.date).toLocaleDateString()}
                      </small>
                      <h3>{project.desc}</h3>
                      <p>Description of project</p>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quia molestiae expedita veniam sint! Dolorum quibusdam
                        reprehenderit optio neque quia voluptate cupiditate
                        velit asperiores, alias unde a, repellendus at vitae
                        sunt voluptas, necessitatibus fugit impedit iste
                        consequatur ut quidem rerum soluta! In qui voluptate
                        quas voluptatem labore, assumenda voluptates. Sapiente
                        iste quidem cum asperiores doloribus minima, fugiat
                        commodi consequatur, inventore expedita debitis quisquam
                        dignissimos. Maxime libero molestiae, veniam dolor hic
                        accusantium voluptatum vitae corporis totam natus?
                        Dignissimos aliquam maiores amet pariatur repudiandae
                        soluta magnam numquam distinctio, repellendus neque
                        labore impedit et eaque aspernatur. Debitis excepturi et
                        consequuntur iure amet eaque maiores est quam fugiat
                        ullam nihil autem adipisci quia nesciunt a, voluptate
                        reprehenderit sapiente ex alias. Temporibus dolorum.
                      </p>
                    </div>
                  )}
                </li>
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

// The projects view will be a linear timeline from most recent to oldest projects with the year and month a created them
// TODO: 1) Projects title centered on page
// TODO: 2) tag line centered below title
// TODO: 3) Make specials gallery width shorter to accommodate a screenshot with short description overlay and link to project below
// TODO: 4) Style individual project components cards
