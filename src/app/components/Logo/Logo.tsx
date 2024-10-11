import styles from "./Logo.module.css";

const Logo: React.FC = () => {
  return (
    <div className={styles.logoWrapper}>
      <div>Rafał Bogusz</div>
      <div>Software Developer</div>
    </div>
  );
};

export default Logo;
