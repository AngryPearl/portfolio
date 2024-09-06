import { PROJECTS } from "@/app/constants/projects";
import styles from "./Tile.module.css";
import Image from "next/image";

export default function Tiles() {
  return (
    <div className={styles.tilesWrapper}>
      {PROJECTS.map((project) => {
        return (
          <div key={project.id} className={styles.tileOutline}>
            <div className={styles.tileContent}>
              <div>{project.title}</div>
              <div>{project.description}</div>
              <a href={project.url}>URL -{">"}</a>
              <div>progress done/inprogress/done but needs polish</div>
              <Image
                src={project.image}
                alt={project.title}
                width={100}
                height={100}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
