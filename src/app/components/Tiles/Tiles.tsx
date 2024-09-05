import { PROJECTS } from "@/app/constants/projects";
import styles from "./Tile.module.css";

export default function Tiles() {
  return (
    <div className={styles.tilesWrapper}>
      {PROJECTS.map((project) => {
        return (
          <div className={styles.tileOutline}>
            <div className={styles.tileContent}>content</div>
          </div>
        );
      })}
    </div>
  );
}
