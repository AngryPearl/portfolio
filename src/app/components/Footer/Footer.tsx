import Links from "../Links/Links";
import Logo from "../Logo/Logo";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footerWrapper}>
      <div className={styles.footerMain}>
        <Logo />
        <div className={styles.links}>
          <div className={styles.linkGroup}>
            <p>MAIN</p>
            <a href="/">Work</a>
            <a href="/info">Info</a>
          </div>
          <div className={styles.linkGroup}>
            <p>CONTACT</p>
            <Links column />
          </div>
        </div>
      </div>
      <div className={styles.legal}>
        <p>© {new Date().getFullYear()} Rafał Bogusz. All Rights Reserved.</p>
        <p>Made with love and Water.</p>
      </div>
    </div>
  );
}
