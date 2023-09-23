import React from "react";
import styles from "@/styles/form.module.scss";

export default function Form() {
  return (
    <div className={styles.App}>
      <form className={styles.form}>
        <h1 className={styles.h1}>start your project</h1>
        <span className={styles.span}>
          Leave your contact details and we will contact you
        </span>
        <label className={styles.label}>
          enter your name:
          <input className={styles.input} />
        </label>
        <label className={styles.label}>
          enter your name:
          <input className={styles.input} />
        </label>
        <label className={styles.label}>
          enter your name:
          <input className={styles.input} />
        </label>
        <button className={styles.button}>submit</button>
      </form>
    </div>
  );
}
