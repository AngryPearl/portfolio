import Image from "next/image";
import ICON_EXTERNAL from "/public/images/icon-external.svg";
import styles from "./Links.module.css";
import Link from "next/link";

interface LinksProps {
  column?: boolean;
}

const Links: React.FC<LinksProps> = ({ column = false }) => {
  return (
    <div
      className={column ? styles.columnLinksWrapper : styles.rowLinksWrapper}
    >
      <div>
        <Link
          href="https://linkedin.com/in/rafal-bogusz"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn <Image src={ICON_EXTERNAL} alt="icon external" />
        </Link>
      </div>
      <div>
        <Link
          href="https://drive.google.com/file/d/1bqFJ1vM2YoMTbCn-BQA9kKa9JhfKHeud/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume <Image src={ICON_EXTERNAL} alt="icon external" />
        </Link>
      </div>
    </div>
  );
};
export default Links;
