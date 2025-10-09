import styles from "./Home.module.css";

function Home() {
  return (
    <>
      <main className={"wrapper"}>
        {/* hero image */}
        <section className={styles.hero}>
          <p>
            Visuals: Hand-drawn UI elements (sketch-style outlines). Animated
            gears or blueprints in the background. Subtle hover animations like
            light bulbs flicking on. Vibe: Playful, clever, hands-on creative
            energy.
          </p>
        </section>
      </main>
    </>
  );
}

export default Home;
