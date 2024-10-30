import styles from "./HobbyMainTile.module.css";

const HobbyMainTile: React.FC = () => {
  return (
    <div className={styles.hobbyTileContent}>
      <div className={styles.aboutWrapper}>
        <div className={styles.aboutDot}></div>
        <div>About me</div>
      </div>
      <div className={styles.header}>
        I&apos;m love learning a lot of new stuff, not only at work.
      </div>
    </div>
  );
};

export default HobbyMainTile;
