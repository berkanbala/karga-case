import React from "react";
import styles from "@/styles/header.module.css";

export default function Header() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>kargakarga</h1>
      <div className={styles.content}>
        <p>Projects</p>
        <p>Services</p>
        <p>About us</p>
        <p>Contact us</p>
        <p>Start a Project</p>
      </div>
    </div>
  );
}
