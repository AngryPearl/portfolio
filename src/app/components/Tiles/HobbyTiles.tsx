import { HobbyProject, Project } from "@/app/constants/projects";

import styles from "./HobbyTiles.module.css";
import Image from "next/image";

interface TilesProps {
  projects: HobbyProject[];
}

const HobbyTiles: React.FC<TilesProps> = ({ projects }) => {
  return (
    <div className={styles.hobbysWrapper}>
      {projects.map((project: HobbyProject) => {
        return (
          <div key={project.id} className={styles.hobbysGrid}>
            <div className={styles.hobbyColumn}>
              <div className={styles.imageOutline}>
                <Image
                  src={project.imageLeft}
                  alt="hobby image"
                  width={450}
                  height={600}
                />
              </div>
              <div className={styles.descriptionContainer}>
                {project.descriptionLeft}
              </div>
            </div>
            <div className={styles.hobbyColumn}>
              <div className={styles.descriptionContainer}>
                {project.descriptionRight}
              </div>
              <div className={styles.imageOutline}>
                <Image
                  src={project.imageRight}
                  alt="hobby image"
                  width={450}
                  height={600}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HobbyTiles;
