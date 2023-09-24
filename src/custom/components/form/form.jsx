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
        <input placeholder="How can I contact you?" className={styles.input} />
        <input placeholder="Phone/email" className={styles.input} />
        <input placeholder="Add a message" className={styles.input} />
        <input type="checkbox" />
        <label>I agree to the processing of personal data.</label>
        <button className={styles.button}>submit</button>
      </form>
    </div>
  );
}
