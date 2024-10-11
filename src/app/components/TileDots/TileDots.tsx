import styles from "./TileDots.module.css";

const TileDots: React.FC = () => {
  return (
    <div className={styles.dotsWrapper}>
      <div className={`${styles.dot} ${styles.red}`}></div>
      <div className={`${styles.dot} ${styles.yellow}`}></div>
      <div className={`${styles.dot} ${styles.green}`}></div>
    </div>
  );
};

export default TileDots;
