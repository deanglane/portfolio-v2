import React from "react";
import styles from "./Techstack.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import TestComponent from "../components/TestComponent";

const slides = [
  {
    id: 1,
    title: "Test Slide 1",
    desc: "A tester slide",
  },
  {
    id: 2,
    title: "Test Slide 2",
    desc: "Another tester slide",
  },
  {
    id: 3,
    title: "Test Slide 3",
    desc: "Another tester slide",
  },
  {
    id: 4,
    title: "Test Slide 4",
    desc: "Another tester slide",
  },
];

function Techstack() {
  return (
    <>
      <section className={styles.techstack_section}>
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{
            delay: 2500,
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
      </section>
    </>
  );
}

export default Techstack;
