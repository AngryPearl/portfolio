import TileDots from "../TileDots/TileDots";
import styles from "./MainTile.module.css";

const MainTile: React.FC = () => {
  return (
    <div className={styles.tileWrapper}>
      <div className={styles.tileOutline}>
        <div className={styles.tileBox}>
          <div className={styles.tileBar}>
            <TileDots />
          </div>
          <div className={styles.tileContent}>
            <div className={styles.header}>Welcome to my craft.</div>
            <div className={styles.jobWrapper}>
              <div></div>
              <div className={styles.jobHistory}>
                <div>Looking for my next role.</div>
                <div>Formerly at RASP Tech.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.tileFade}></div>
    </div>
  );
};

export default MainTile;
