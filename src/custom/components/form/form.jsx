import React from "react";
import styles from "@/styles/form.module.scss";

export default function Form() {
  return (
    <div className={styles.App}>
      <form className={styles.form}>
        <h1 className={styles.h1}>start your project</h1>
        <label className={styles.label}>
          enter your name:
          <input className={styles.input} />
        </label>
        <label>
          enter your name:
          <input />
        </label>
        <label>
          enter your name:
          <input />
        </label>
        <button className={styles.button}>submit</button>
      </form>
    </div>
  );
}
