import React from "react";
import styles from "./Workshop.module.css";
import TestComponent from "../components/TestComponent";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

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
  return (
    <>
      <section className={"wrapper"}>
        <h2>Workshop Area</h2>
        <p>A page to test adding new content</p>
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
      </section>
    </>
  );
}

export default Workshop;
