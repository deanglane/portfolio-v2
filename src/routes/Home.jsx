import styles from "./Home.module.css";
import { NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import FeatureCard from "../components/FeatureCard";
import SwiperGallery from "../components/SwiperGallery.jsx";

import { featured } from "../data/featured.js";

function Home() {
  // const featuredSorted = [...projects]
  //   .filter((f) => f.featured === true)
  //   .sort((a, b) => b.date.localeCompare(a.date));
  return (
    <>
      <main>
        {/* hero image */}
        <section className={styles.hero}>
          <div className={`${styles.intro} ${"wrapper"}`}>
            <h1>
              On my day off, I like to <span>build things on the web</span>
            </h1>
            <p>
              Welcome to my cozy corner of the internet—where code simmers,
              photos steep, and game ideas bubble like a fresh pour‑over.
            </p>
            <div className={styles.call_to_action}>
              <NavLink to="/projects" className={"button"}>
                Explore Projects
              </NavLink>
              <NavLink to="/about" className={"button_transparent"}>
                Meet the Barista
              </NavLink>
            </div>
          </div>

          {/* <SwiperGallery page={page} featured={featuredSorted} /> */}
          <div className={styles.feature_reel_container}>
            <div className={styles.card_background}>
              <div className={styles.card_foreground}>
                <Swiper
                  modules={[Autoplay]}
                  spaceBetween={16}
                  slidesPerView={1}
                  breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 1 },
                    1024: { slidesPerView: 1 },
                  }}
                  loop={true}
                  autoplay={{
                    delay: 5000,
                    pauseOnMouseEnter: true,
                    disableOnInteraction: false,
                  }}
                  onSlideChange={() => console.log("slider change")}
                  onSwiper={(swiper) => console.log(swiper)}
                >
                  {featured.map((f) => (
                    <SwiperSlide key={f.id}>
                      <FeatureCard
                        title={f.title}
                        description={f.desc}
                        image={f.image}
                        alt={f.alt}
                        button={f.button}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
