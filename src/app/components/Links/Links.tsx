import Image from "next/image";
import ICON_EXTERNAL from "/public/images/icon-external.svg";

export default function Links() {
  return (
    <div>
      <a
        href="https://linkedin.com/in/rafal-bogusz"
        target="_blank"
        rel="noopener noreferer"
      >
        LinkenIn
      </a>
      <Image src={ICON_EXTERNAL} alt="icon external" />
      <a
        href="https://drive.google.com/file/d/1CUp4iw-vdAn1U-AU_iHD5grIngWu8UzF/view?usp=sharing"
        target="_blank"
        rel="noopener noreferer"
      >
        Resume
      </a>
      <Image src={ICON_EXTERNAL} alt="icon external" />
    </div>
  );
}
