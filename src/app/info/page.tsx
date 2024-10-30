import HobbyMainTile from "../components/MainTile/HobbyMainTile";
import HobbyTiles from "../components/Tiles/HobbyTiles";
import { HOBBY_PROJECTS } from "@/app/constants/projects";
import styles from "./page.module.css";

const Info: React.FC = () => {
  return (
    <main className={styles.mainWrapper}>
      <HobbyMainTile />
      <HobbyTiles projects={HOBBY_PROJECTS} />
    </main>
  );
};

export default Info;
