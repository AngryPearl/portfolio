"use client";

import { usePathname } from "next/navigation";
import styles from "./Menu.module.css";

export default function Menu() {
  const pathname = usePathname();
  console.log(pathname === "/info");

  return (
    <ul className={styles.menu}>
      <li>
        <a href="/" className={pathname === "/" ? styles.active : ""}>
          Work
        </a>
      </li>
      <li>
        <a href="/info" className={pathname === "/info" ? styles.active : ""}>
          Info
        </a>
      </li>
    </ul>
  );
}
