import React from "react";
import styles from "../routes/Projects.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

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
        <div>
          <h3>All Projects</h3>
          <ul>
            <li>pdf conversions</li>
            <li>Web Based Games</li>
            <li>Godot Games - dayoffgames.com</li>
            <li>javascript</li>
            <li>rest ApI's</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Projects;
