import React from "react";
import { projects } from "../utils/projects.js";

function ProjectCard() {
  return (
    <div className={styles.card}>
      <h3>{project.desc}</h3>
      <p>Description of project</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia molestiae
        expedita veniam sint! Dolorum quibusdam reprehenderit optio neque quia
        voluptate cupiditate velit asperiores, alias unde a, repellendus at
        vitae sunt voluptas, necessitatibus fugit impedit iste consequatur ut
        quidem rerum soluta! In qui voluptate quas voluptatem labore, assumenda
        voluptates. Sapiente iste quidem cum asperiores doloribus minima, fugiat
        commodi consequatur, inventore expedita debitis quisquam dignissimos.
        Maxime libero molestiae, veniam dolor hic accusantium voluptatum vitae
        corporis totam natus? Dignissimos aliquam maiores amet pariatur
        repudiandae soluta magnam numquam distinctio, repellendus neque labore
        impedit et eaque aspernatur. Debitis excepturi et consequuntur iure amet
        eaque maiores est quam fugiat ullam nihil autem adipisci quia nesciunt
        a, voluptate reprehenderit sapiente ex alias. Temporibus dolorum.
      </p>
    </div>
  );
}

export default ProjectCard;
