import styles from "./Home.module.css";
import { NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import SwiperGallery from "../components/SwiperGallery.jsx";
import { projects } from "../data/projects.js";

function Home() {
  const featuredSorted = [...projects].filter(
    (feature) => feature.featureReel === true
  );

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

          <div className={styles.feature_reel_container}>
            <SwiperGallery pageGallery={featuredSorted} />
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
