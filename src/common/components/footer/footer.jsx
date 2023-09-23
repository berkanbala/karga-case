import React from "react";
import Image from "next/image";
import facebookPic from "@/custom/images/facebook.png";
import instagramPic from "@/custom/images/instagram.png";
import twitterPic from "@/custom/images/twitter.png";
import styles from "@/styles/footer.module.css";

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
            <Image alt="" src={facebookPic} width={50} height={50} />
          </a>
        </li>
        <li className={styles.instagram}>
          <a
            target="_blank"
            href="https://www.instagram.com/"
            className={styles.fit}
          >
            <Image alt="" src={instagramPic} width={50} height={50} />
          </a>
        </li>
        <li className={styles.twitter}>
          <a
            target="_blank"
            href="https://twitter.com/home"
            className={styles.fit}
          >
            <Image alt="" src={twitterPic} width={50} height={50} />
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
