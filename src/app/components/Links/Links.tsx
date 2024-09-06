import Image from "next/image";
import ICON_EXTERNAL from "/public/images/icon-external.svg";
import styles from "./Links.module.css";

export default function Links({ column = false }) {
  return (
    <div className={column ? "" : styles.linksWrapper}>
      <div>
        <a
          href="https://linkedin.com/in/rafal-bogusz"
          target="_blank"
          rel="noopener noreferer"
        >
          LinkenIn
        </a>
        <Image src={ICON_EXTERNAL} alt="icon external" />
      </div>
      <div>
        <a
          href="https://drive.google.com/file/d/1CUp4iw-vdAn1U-AU_iHD5grIngWu8UzF/view?usp=sharing"
          target="_blank"
          rel="noopener noreferer"
        >
          Resume
        </a>
        <Image src={ICON_EXTERNAL} alt="icon external" />
      </div>
    </div>
  );
}
