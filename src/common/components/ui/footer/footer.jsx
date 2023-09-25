import React from "react";
import Image from "next/image";
import ImageFacebook2 from "@/common/media/logo/facebook2.png";
import ImageInstagram3 from "@/common/media/logo/instagram3.png";
import ImageTwitter1 from "@/common/media/logo/twitter1.png";
import styles from "./footer.module.scss";

export default function Footer() {
  return (
    <div className={styles.container}>
      <ul className={styles.icon}>
        <li className={styles.facebook}>
          <a
            target="_blank"
            href="https://www.facebook.com/"
            className={styles.fit}
          >
            <Image alt="" src={ImageFacebook2} width={50} height={50} />
          </a>
        </li>
        <li className={styles.instagram}>
          <a
            target="_blank"
            href="https://www.instagram.com/"
            className={styles.fit}
          >
            <Image alt="" src={ImageInstagram3} width={50} height={50} />
          </a>
        </li>
        <li className={styles.twitter}>
          <a
            target="_blank"
            href="https://twitter.com/home"
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
