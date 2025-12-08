import styles from "./Home.module.css";
import { NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import SwiperGallery from "../components/SwiperGallery.jsx";
import { projects } from "../data/projects.js";
import { information } from "../data/information.js";

function Home() {
  const featuredSorted = [...projects].filter(
    (feature) => feature.featureReel === true
  );

  const infoArray = information.map((item) => ({
    id: item.id,
    title: item.title,
    tag: item.tag,
    summary: item.summary,
    image: item.image,
  }));

  const projectArray = featuredSorted.map((item) => ({
    id: item.id,
    title: item.title,
    tag: item.tag,
    summary: item.summary,
    image: item.image,
  }));

  function buildFeaturedCards(infoArray, projectArray) {
    const result = [];

    // Start indexes at 0
    let infoIndex = 0;
    let projectIndex = 0;

    // Always add the first info item, if it exists
    if (infoArray.length > 0) {
      const firstInfoItem = infoArray[0];
      result.push(firstInfoItem);

      // Move infoIndex to 1 so we don't use the first item again
      infoIndex = 1;
    }

    // Loop while there is still at least one item left
    while (infoIndex < infoArray.length || projectIndex < projectArray.length) {
      // Add a project card if any remain
      if (projectIndex < projectArray.length) {
        const nextProject = projectArray[projectIndex];
        result.push(nextProject);
        projectIndex = projectIndex + 1;
      }

      // Add an info card if any remain
      if (infoIndex < infoArray.length) {
        const nextInfo = infoArray[infoIndex];
        result.push(nextInfo);
        infoIndex = infoIndex + 1;
      }
    }

    // Return the combined result
    return result;
  }

  const featuredCards = buildFeaturedCards(infoArray, projectArray);

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
            {/* <SwiperGallery pageGallery={featuredSorted} /> */}
            <SwiperGallery pageGallery={featuredCards} />
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
