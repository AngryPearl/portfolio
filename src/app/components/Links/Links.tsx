import Image from "next/image";
import ICON_EXTERNAL from "/public/images/icon-external.svg";
import styles from "./Links.module.css";

export default function Links({ column = false }) {
  return (
    <div
      className={column ? styles.columnLinksWrapper : styles.rowLinksWrapper}
    >
      <div>
        <a
          href="https://linkedin.com/in/rafal-bogusz"
          target="_blank"
          rel="noopener noreferer"
        >
          LinkedIn <Image src={ICON_EXTERNAL} alt="icon external" />
        </a>
      </div>
      <div>
        <a
          href="https://drive.google.com/file/d/1Ak2jH0PS9lg-V8ylyLqrgUQEAhsXCyQE/view?usp=sharing"
          target="_blank"
          rel="noopener noreferer"
        >
          Resume <Image src={ICON_EXTERNAL} alt="icon external" />
        </a>
      </div>
    </div>
  );
}
