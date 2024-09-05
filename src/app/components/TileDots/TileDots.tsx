import styles from "./TileDots.module.css";

export default function TileDots() {
  return (
    <div className={styles.dotsWrapper}>
      <div className={`${styles.dot} ${styles.red}`}></div>
      <div className={`${styles.dot} ${styles.yellow}`}></div>
      <div className={`${styles.dot} ${styles.green}`}></div>
    </div>
  );
}
