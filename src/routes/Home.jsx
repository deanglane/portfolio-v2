import styles from "./Home.module.css";

function Home() {
  return (
    <>
      <main className={"wrapper"}>
        {/* hero image */}
        <section className={styles.hero}>
          <h1>On my day off, I like to make things.</h1>
          <p>
            Welcome to my cozy corner of the internet—where code simmers, photos
            steep, and game ideas bubble like a fresh pour‑over.
          </p>
          <a href="#">Explore Projects</a>
          <a href="#">Meet the Barista</a>
          <div>
            <div>
              <p>image</p>
            </div>
            <div>
              <p>description</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
