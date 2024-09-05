import MainTile from "./components/MainTile/MainTile";
import styles from "./page.module.css";
import Tiles from "./components/Tiles/Tiles";

export default function Home() {
  return (
    <main className={styles.main}>
      <MainTile />
      <Tiles />
    </main>
  );
}
