import styles from "./Home.module.css";
import { NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import FeatureCard from "../components/FeatureCard";
// Assets
import pokedex from "../assets/images/screen-shots/pokemon_pokedex_app_new.png";
import flashIt from "../assets/images/screen-shots/flash_it_new.png";
import hangryTummy from "../assets/images/screen-shots/hangry_tummy.png";

const features = [
  {
    id: 1,
    title: "Pokedex",
    desc: "A pokemon pokedex gameboy built using custom css styles and Pokemon API",
    image: pokedex,
    alt: "A pokemon pokedex application",
    button: "/projects",
  },
  {
    id: 2,
    title: "Flash It",
    desc: "Build your own flash cards for study",
    image: flashIt,
    alt: "Tappy Plane Screenshot",
    button: "/projects",
  },
  {
    id: 3,
    title: "Hangry Tummy",
    desc: "My first Frontend Website project converting a pdf design into a fully functioning site",
    image: hangryTummy,
    alt: "Hangry Tummy website",
    button: "/projects",
  },
  {
    id: 4,
    title: "More News",
    desc: "read the latest articles",
    image: "",
    alt: "news headlines",
    button: "/blog",
  },
];

function Home() {
  return (
    <>
      <main>
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
                  {features.map((f) => (
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
