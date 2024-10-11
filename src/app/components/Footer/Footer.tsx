import Link from "next/link";
import Links from "../Links/Links";
import Logo from "../Logo/Logo";
import styles from "./Footer.module.css";

const Footer: React.FC = () => {
  return (
    <div className={styles.footerWrapper}>
      <div>
        <div className={styles.footerMain}>
          <Logo />
          <div className={styles.links}>
            <div className={styles.linkGroup}>
              <p>MAIN</p>
              <Link href="/">Work</Link>
              <Link href="/info">Info</Link>
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
    </div>
  );
};

export default Footer;
