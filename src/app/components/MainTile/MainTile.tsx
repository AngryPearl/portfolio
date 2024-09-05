import TileDots from "../TileDots/TileDots";
import styles from "./MainTile.module.css";

export default function MainTile() {
  return (
    <div className={styles.tileOutline}>
      <div className={styles.tileContent}>
        <div className={styles.tileBar}>
          <TileDots />
          <img src="" alt="" />+
        </div>
        <div>Welcome to my craft.</div>
        <div className={styles.jobStatus}>
          <div></div>
          <div>
            <div>Looking for my next role.s</div>
            <div>Formerly at RASP Tech.</div>
          </div>
        </div>
      </div>
    </div>
  );
}
