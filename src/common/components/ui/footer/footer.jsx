import React from "react";
import Image from "next/image";
import ImageFacebook from "@/common/media/images/facebook.png";
import ImageInstagram from "@/common/media/images/instagram.png";
import ImageTwitter from "@/common/media/images/twitter.png";
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
            <Image alt="" src={ImageFacebook} width={50} height={50} />
          </a>
        </li>
        <li className={styles.instagram}>
          <a
            target="_blank"
            href="https://www.instagram.com/"
            className={styles.fit}
          >
            <Image alt="" src={ImageInstagram} width={50} height={50} />
          </a>
        </li>
        <li className={styles.twitter}>
          <a
            target="_blank"
            href="https://twitter.com/home"
            className={styles.fit}
          >
            <Image alt="" src={ImageTwitter} width={50} height={50} />
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
