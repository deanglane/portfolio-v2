import styles from "./Home.module.css";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <>
      <main className={"wrapper"}>
        {/* hero image */}
        <section className={styles.hero}>
          <div className={styles.intro}>
            <h1>
              On my day off, I like to <span>make things</span>.
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
            <div className={styles.card_background}>
              <div className={styles.card_foreground}>
                <p>☕</p>
                <p>
                  A comfy hero visual goes here — maybe a looping reel of sites,
                  games, and food shots.
                </p>
              </div>
              <div className={styles.feature_desc}>feature description</div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
