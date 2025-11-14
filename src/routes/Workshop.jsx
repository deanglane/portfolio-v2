import { useState, React } from "react";
import { NavLink } from "react-router-dom";

import Dropdown from "../components/Dropdown";
import TestComponent from "../components/TestComponent";
import styles from "./Workshop.module.css";

// swiper library
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

// slides object data
const slides = [
  {
    id: 1,
    title: "slide 1",
    desc: "first Slide",
  },
  {
    id: 2,
    title: "slide 2",
    desc: "second Slide",
  },
  {
    id: 3,
    title: "slide 3",
    desc: "third Slide",
  },
];

function Workshop() {
  // logic for open close dropdown
  const [isOpen, setIsOpen] = useState(false);

  let hoverTimer;

  // hover intent & changing state of isOpen
  const handleMouseEnter = () => {
    hoverTimer = setTimeout(() => {
      setIsOpen(true);
    }, 300);
  };

  const handleMouseLeave = () => {
    clearTimeout(hoverTimer);
    setIsOpen(false);
  };

  // const toggleDropdown = () => {
  //   setIsOpen((prev) => !prev);
  // };

  return (
    <>
      <section className={"wrapper"}>
        <h2>Workshop Area</h2>
        <p>A page to test adding new content</p>
        {/* Slides testing */}
        <div className={styles["slides-div"]}>
          {/* Swiper Slider Testing */}
          <div className={styles["slides-container"]}>
            <h3>Slider.js</h3>
            <div className={styles["slides-viewport"]}>
              <Swiper
                modules={[Autoplay, Pagination, EffectFade]}
                spaceBetween={50}
                slidesPerView={1}
                loop={true}
                effect={"fade"}
                fadeEffect={{ crossFade: true }}
                speed={1500}
                pagination={{ dynamicBullets: false, clickable: true }}
                autoplay={{
                  delay: 5000,
                  pauseOnMouseEnter: true,
                  disableOnInteraction: false,
                }}
              >
                {slides.map((f) => (
                  <SwiperSlide key={f.id}>
                    <TestComponent title={f.title} description={f.desc} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>

        {/* Dropdown mega menu testing */}
        <div className={styles["megaDD-div"]}>
          {/* <button onClick={toggleDropdown}>
            {isOpen ? "Close Menu" : "Open Menu"}
          </button> */}
          <div
            className={styles["nav-hover-area"]}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <NavLink className={styles["nav-title"]} to="/projects">
              projects ▼
            </NavLink>
            <div
              className={`${styles["dropdown-container"]} ${
                isOpen ? styles["show"] : ""
              }`}
            >
              <Dropdown />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Workshop;
