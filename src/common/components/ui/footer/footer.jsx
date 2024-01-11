import Image from "next/image";
import ImageInstagram from "@/common/media/logo/Group.svg";
import ImageLinkedin from "@/common/media/logo/Group1.svg";
import ImageTwitter1 from "@/common/media/logo/Group2.svg";
import styles from "./footer.module.scss";

export default function Footer() {
  return (
    <div className={styles.container}>
      <ul className={styles.icon}>
        <li className={styles.instagram}>
          <a
            target="_blank"
            href="https://www.instagram.com/"
            className={styles.fit}
          >
            <Image alt="" src={ImageInstagram} width={50} height={50} />
          </a>
        </li>
        <li className={styles.linkedin}>
          <a
            target="_blank"
            href="https://linkedin.com/"
            className={styles.fit}
          >
            <Image alt="" src={ImageLinkedin} width={50} height={50} />
          </a>
        </li>
        <li className={styles.twitter}>
          <a
            target="_blank"
            href="https://twitter.com/home/"
            className={styles.fit}
          >
            <Image alt="" src={ImageTwitter1} width={50} height={50} />
          </a>
        </li>
      </ul>
      <hr />
      <div className={styles.footer}>
        Üretken insanların tanışıp, proje üretebildiği açık inovasyon merkezi.
      </div>
    </div>
  );
}
