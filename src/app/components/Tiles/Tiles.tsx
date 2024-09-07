import { PROJECTS } from "@/app/constants/projects";
import ARROW from "/public/images/arrow.svg";

import styles from "./Tile.module.css";
import Image from "next/image";

export default function Tiles() {
  return (
    <div className={styles.tilesWrapper}>
      {PROJECTS.map((project) => {
        return (
          <a href={project.url}>
            <div key={project.id} className={styles.tileOutline}>
              <div className={styles.tileContent}>
                <div className={styles.title}>
                  {project.title}
                  <Image src={ARROW} alt="arrow" width={32} height={32} />
                </div>
                <div className={styles.descriptionWrapper}>
                  <div>{project.progress}</div>—
                  <div className={styles.description}>
                    {project.description}
                  </div>
                </div>
                <div className={styles.imageWrapper}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={800}
                    height={500}
                  />
                </div>
              </div>
            </div>
          </a>
        );
      })}
    </div>
  );
}
