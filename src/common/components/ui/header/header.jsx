import React from "react";
import styles from "./header.module.scss";
import Image from "next/image";
import Logo from "@/common/media/logo/logo.svg";

export default function Header() {
  return (
    <div className={styles.container}>
      <Image alt="logo" src={Logo} />
      <ul className={styles.pages}>
        <li>Projects</li>
        <li>Services</li>
        <li>About us</li>
        <li>Contact us</li>
        <li>Start a Project</li>
      </ul>
    </div>
  );
}
