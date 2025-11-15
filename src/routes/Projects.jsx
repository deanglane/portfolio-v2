import React from "react";
import styles from "../routes/Projects.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

function Projects() {
  return (
    <section className={"wrapper"}>
      <div>
        <h2>Projects</h2>
        <quote>
          “Turning coffee, curiosity and code into something visually amazing
          for the web.”
        </quote>
        <h3>Today's Specials</h3>
        {/* slider specials gallery */}
        <div className={styles["specials-container"]}>
          <div className={styles["specials-viewport"]}>
            <Swiper
              modules={[Autoplay]}
              spaceBetween={50}
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 5000,
                pauseOnMouseEnter: true,
                disableOnInteraction: false,
              }}
            >
              <SwiperSlide>
                <div>Slide 1</div>
              </SwiperSlide>
              <SwiperSlide>
                <div>Slide 2</div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div>
          <h3>All Completed Projects (In Order)</h3>
          <ul>
            <li>Portfolio 2.0</li>
            <li>Tappy Bird Game</li>
            <li>Stellar Harvest Game</li>
            <li>Battle Rockets</li>
            <li>Flash it!</li>
            <li>Pokedex</li>
            <li>Daily Horoscope</li>
            <li>Bar one</li>
            <li>Hangry Tummy</li>
          </ul>
          <h3>Coming in the near future</h3>
          <p>Projects I want to start</p>
          <ul>
            <li>three.js projects</li>
            <li>dayoffgames.com COMING SOON</li>
            <li>Game 3 COMING SOON</li>
            <li>Flash It 2.0 COMING SOON</li>
            <li>turnupthatbeet.com COMING SOON</li>
            <li>dayoffchef.com COMING SOON</li>
            <li>YouTube Channel Launch COMING SOON</li>
          </ul>
        </div>
      </div>
      <div className="container">
        <div className="line"></div>
        <div className="content">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias,
            voluptates dignissimos? Error minus nostrum ullam expedita? Cumque
            sunt ad, magnam sint delectus itaque doloremque, voluptatibus
            asperiores molestiae nihil tempore pariatur consequatur nemo alias,
            excepturi quidem? Deleniti eaque sit officia vel recusandae
            inventore laboriosam ipsum alias? Molestiae iusto dolore et officia,
            velit dolorem illo, hic qui, ea laborum distinctio saepe suscipit
            similique aspernatur. Dolorum laudantium distinctio, aut iste atque
            hic corporis. Perferendis reprehenderit omnis enim. Voluptatum quos
            sequi molestias culpa aut suscipit officiis dignissimos aperiam
            inventore vel perspiciatis, officia reiciendis dolor mollitia earum
            ducimus sit cum ad sunt, ex molestiae non eum! Excepturi provident
            voluptates eius ipsam consequatur suscipit ullam id explicabo quod
            dicta velit possimus illum reprehenderit reiciendis laboriosam
            temporibus ipsum quis nam, ut dolorum delectus facere ex. Ducimus,
            delectus laudantium accusamus sunt aliquam qui? Dolores ipsum
            deserunt quisquam sunt ut ducimus veniam dignissimos, fuga quos
            reiciendis libero mollitia corrupti, nostrum voluptatibus expedita
            veritatis ex minima, asperiores porro? Harum facilis quis nemo ipsam
            velit! Commodi saepe itaque voluptatum, neque voluptates sapiente
            voluptas a inventore modi, culpa, tempore dicta quia nam illum
            consequuntur dolores accusamus laborum non optio quam veritatis
            aliquid adipisci tempora qui. Quidem laudantium saepe corrupti velit
            numquam, debitis quae ullam nobis sunt alias? Veritatis earum
            ducimus ullam fugit quasi cum quidem et fugiat. Consequuntur,
            laudantium impedit, dolor dicta optio quis reiciendis recusandae
            unde accusantium dignissimos et vero repellendus dolores perferendis
            cupiditate harum? Illo consectetur cumque sint quod recusandae
            nostrum assumenda eveniet accusantium modi deleniti minima illum
            eius aliquid beatae esse culpa hic ipsam ullam dignissimos id,
            suscipit veniam ducimus voluptate. Commodi cum, corporis iusto
            mollitia quia quaerat. Et necessitatibus odit ad, tenetur labore sed
            inventore reprehenderit aperiam provident optio possimus,
            laudantium, at cumque fugiat fuga dicta. Quam quaerat repellat
            accusantium commodi, doloribus error odio? Nulla, voluptate earum
            voluptas tempore porro pariatur, nisi maxime cum consequuntur
            laudantium delectus! Ullam magnam magni hic similique molestiae,
            libero quod perferendis, rem deserunt aliquam officiis odit
            incidunt, necessitatibus dignissimos ut minus quibusdam? Blanditiis
            aperiam, a laboriosam nam dolor sunt provident repellat laudantium
            repudiandae culpa quae esse placeat similique cumque corrupti quidem
            impedit saepe beatae magni ipsum autem magnam necessitatibus fugit
            unde? Possimus delectus aliquid, doloremque totam debitis mollitia
            porro, eveniet ducimus magnam inventore fugit nesciunt minus
            necessitatibus eius vero, est rem accusamus. Fugit veritatis quae
            voluptatem non modi nemo repellat officia vel eaque ea dolor ex
            incidunt a, obcaecati, quia at numquam saepe iste, nisi vero in
            debitis? Eos minus nemo, similique soluta cupiditate deleniti rem
            neque ipsum reprehenderit iusto porro! Modi, tenetur. Distinctio
            provident incidunt consectetur, minima voluptates nobis animi
            voluptatum eveniet nemo laboriosam accusantium assumenda illum ullam
            hic, aliquam deserunt tenetur ea consequuntur, inventore doloribus
            dolorem odio excepturi? Cum corrupti ullam officia perferendis
            consequuntur necessitatibus ipsam. Accusamus non adipisci optio quo
            saepe omnis dicta qui, a accusantium soluta sed voluptate tempora
            alias dolorum ipsa eius. Adipisci et quam nam, est sed molestias
            excepturi dicta accusantium tempora autem perspiciatis enim hic
            soluta nobis, nostrum, eos tenetur neque incidunt. Est inventore,
            soluta totam nesciunt similique dignissimos nam delectus iste dolor
            quo ullam vel architecto cupiditate molestias dolorum? Quisquam eum
            iusto nulla sed ipsa harum aperiam molestiae obcaecati sunt facilis
            voluptate sequi amet voluptates voluptas delectus dicta assumenda
            id, quae architecto tempore fugit recusandae temporibus quia!
            Molestiae alias necessitatibus laboriosam voluptatem mollitia porro,
            culpa pariatur quod obcaecati cum esse sit quos earum explicabo est
            atque iste hic reprehenderit, illo delectus excepturi! Quaerat
            consequatur quae quasi dignissimos ut incidunt. Est ipsa ullam quos
            similique necessitatibus, suscipit possimus, ea asperiores fuga
            praesentium aspernatur quibusdam quas tenetur quod omnis voluptas
            sapiente dolorum placeat sint facilis eos? A exercitationem eum ex
            aperiam ullam atque mollitia nostrum, iste eveniet voluptates, in
            voluptatum earum deserunt natus aut nemo numquam alias laudantium
            consequuntur. Illum, cum fugiat. Omnis quas fugit aliquam aut hic.
            Adipisci error, ducimus quis asperiores molestiae enim tempore
            accusantium iure atque ullam neque expedita libero aperiam! Non
            quasi voluptatem tempore nulla voluptates magnam ex, voluptas dolore
            modi harum consequuntur, aperiam eos esse magni assumenda voluptate
            maxime itaque sint culpa quis quibusdam. Necessitatibus tempore sed
            quibusdam maxime delectus sit enim expedita recusandae voluptatem
            provident, distinctio dignissimos quidem maiores laborum modi non
            commodi. Facere maxime consequatur laboriosam quae molestias ad
            minus officia pariatur molestiae earum, nihil, commodi ipsum eos
            fugiat beatae similique, doloremque delectus! Vel inventore iste
            fugiat minima? Voluptas assumenda odit amet dolore necessitatibus
            praesentium modi, eligendi quos cumque odio cupiditate. Et
            consectetur neque harum accusantium amet eius incidunt in commodi
            enim dolores. Placeat doloribus laborum minus est iure ipsum omnis
            numquam veniam maxime saepe modi, rerum, repudiandae dignissimos
            vero eaque. Atque labore, praesentium quos facilis alias, illo ipsa
            debitis numquam ad aliquam assumenda iusto molestias aut, quo dolor
            dolore nobis voluptatem dicta eius! Fuga, quae aperiam voluptatem
            labore adipisci aut harum, corrupti a asperiores aliquid enim
            mollitia nesciunt ea dolorum minus similique id nemo eveniet est
            inventore, iste quidem repudiandae ipsum. Harum vel maiores modi
            quasi maxime, magni itaque velit impedit quo sapiente veniam alias a
            tempora deserunt unde reprehenderit incidunt odit culpa pariatur
            expedita quidem tenetur. Maxime nemo quisquam quaerat exercitationem
            recusandae velit ducimus molestiae, odit eos ipsam aspernatur eaque
            magnam beatae totam corporis vel quibusdam? Quod consequuntur earum
            mollitia adipisci similique hic, et, maxime in minus molestias enim
            quia! Officia, eveniet optio veniam magnam illum accusantium
            explicabo asperiores. Provident velit, soluta id eius consequatur
            est cumque eos aspernatur quibusdam aliquam suscipit at repudiandae
            dignissimos excepturi. Aspernatur veniam, expedita autem doloremque
            laborum accusamus molestiae recusandae quas, dolore quam laboriosam
            quos sunt nemo tenetur officia. Odit impedit hic totam ipsam quae
            laborum quia reprehenderit illo amet quod esse doloremque iusto
            dolore error sequi, minima ab quasi cumque ratione porro architecto
            eligendi nemo odio soluta? Animi similique possimus dolorem. Eveniet
            suscipit quos libero placeat doloremque, debitis esse, repudiandae
            reiciendis in alias voluptas necessitatibus hic vel eius impedit at
            voluptatibus sunt qui deserunt sequi laborum a eligendi laudantium.
            Laboriosam iste itaque dignissimos dolores consequuntur nostrum
            tempora non provident quae aut. Voluptates adipisci debitis
            doloremque doloribus odit iure nihil tempora odio corrupti.
          </p>
          <p>More text...</p>
        </div>
      </div>
    </section>
  );
}

export default Projects;

// The projects view will be a linear timeline from most recent to oldest projects with the year and month a created them
// TODO: 1) Projects title centered on page
// TODO: 2) tag line centered below title
// TODO: 3) Make specials gallery width shorter to accommodate a screenshot with short description overlay and link to project below
// TODO: 4) Staggered left right project timeline
// TODO: 5) make the page scrollable
