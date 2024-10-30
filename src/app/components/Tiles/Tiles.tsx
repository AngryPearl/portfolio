import { Project } from "@/app/constants/projects";
import ARROW from "/public/images/arrow.svg";

import styles from "./Tile.module.css";
import Image from "next/image";
import Link from "next/link";

interface TilesProps {
  projects: Project[];
}

const Tiles: React.FC<TilesProps> = ({ projects }) => {
  return (
    <div className={styles.tilesWrapper}>
      {projects.map((project: Project) => {
        return (
          <Link key={project.id} href={project.url}>
            <div className={styles.tileOutline}>
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
          </Link>
        );
      })}
    </div>
  );
};

export default Tiles;
