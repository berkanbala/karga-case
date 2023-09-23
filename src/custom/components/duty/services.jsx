import React from "react";
import styles from "@/styles/services.module.scss";
import Purple from "@/common/media/images/Rectangle1.png";
import Red from "@/common/media/images/Rectangle2.png";
import Grey from "@/common/media/images/Rectangle3.png";
import Image from "next/image";

export default function Services() {
  return (
    <div className={styles.services}>
      <div className={styles.card}>
        <h2>Character Design</h2>
        {/* <img alt="" src={} /> */}
        <Image alt="" src={Purple} />
        <span>Development of the character "Music teacher"</span>
      </div>
      <div className={styles.card}>
        <h2>Environment Art</h2>
        <Image alt="" src={Red} />
        <span>Concept art environment for the novel "Capital"</span>
      </div>
      <div className={styles.card}>
        <h2>2D-illustrations</h2>
        <Image alt="" src={Purple} />
        <span>Illustration for the comic "Star Girl"</span>
      </div>
      <div className={styles.card}>
        <h2>3D-modeling</h2>
        <Image alt="" src={Grey} />
        <span>3D character concept</span>
      </div>
      <div className={styles.card}>
        <h2>Book design</h2>
        <Image alt="" src={Red} />
        <span>Design of the book "Red Sands of Durnwood"</span>
      </div>
      <div className={styles.card}>
        <h2>Ux/Ui design</h2>
        <Image alt="" src={Grey} />
        <span>Website for art studio “Manco Art”</span>
      </div>
      <div className={styles.card}>
        <h2>Branding</h2>
        <Image alt="" src={Red} />
        <span>Corporate style "VESPA"</span>
      </div>
      <div className={styles.card}>
        <h2>NFT-collection</h2>
        <Image alt="" src={Purple} />
        <span>NFT collection "Dream"</span>
      </div>
    </div>
  );
}
