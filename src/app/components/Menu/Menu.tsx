"use client"; // for usePathname

import { usePathname } from "next/navigation";
import styles from "./Menu.module.css";
import Link from "next/link";

const Menu: React.FC = () => {
  const pathname = usePathname();

  return (
    <ul className={styles.menu}>
      <li>
        <Link href="/" className={pathname === "/" ? styles.active : ""}>
          Work
        </Link>
      </li>
      <li>
        <Link
          href="/info"
          className={pathname === "/info" ? styles.active : ""}
        >
          About
        </Link>
      </li>
    </ul>
  );
};

export default Menu;
