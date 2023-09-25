import React from "react";
import styles from "./header.module.scss";
import Image from "next/image";
import Logo from "@/common/media/logo/logo.svg";
import Link from "next/link";

export default function Header() {
  return (
    <div className={styles.container}>
      <Image alt="logo" src={Logo} />
      <ul className={styles.pages}>
        <Link href="/" className={styles.link}>
          Projects
        </Link>
        <Link href="/" className={styles.link}>
          Services
        </Link>
        <Link href="/" className={styles.link}>
          About us
        </Link>
        <Link href="/" className={styles.link}>
          Contact us
        </Link>
        <Link href="/" className={styles.link}>
          Start a Project
        </Link>
      </ul>
    </div>
  );
}
