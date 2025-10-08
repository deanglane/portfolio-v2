import styles from "./Home.module.css";

function Home() {
  return (
    <>
      <main className={styles.main_container}>
        {/* hero image */}
        <section className={`wrapper ${styles.hero}`}>
          <p>
            Visuals: Hand-drawn UI elements (sketch-style outlines). Animated
            gears or blueprints in the background. Subtle hover animations like
            light bulbs flicking on. Vibe: Playful, clever, hands-on creative
            energy.
          </p>
        </section>

        {/* About me */}
        <section>
          <p>“From frying pans to front-ends.”</p>
        </section>

        {/* Tech stack */}
        <section>
          <p>“Turning coffee and curiosity into code.”</p>
        </section>

        {/* Projects */}
        <section>
          <p>“Turning coffee and curiosity into code.”</p>
        </section>
      </main>
    </>
  );
}

export default Home;
