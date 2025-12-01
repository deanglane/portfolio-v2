import React from "react";
import styles from "./SwiperGallery.module.css";
import SliderCardDefault from "../components/SliderCardDefault";

// swiper library
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const SwiperGallery = ({ highlights }) => {
  return (
    <div className={styles.slider_background}>
      <div className={styles["slider-viewport"]}>
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
            delay: 1000,
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
          }}
        >
          {highlights.map((project) => (
            <SwiperSlide key={project.id}>
              <SliderCardDefault project={project} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SwiperGallery;
