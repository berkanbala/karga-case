import React, { useState } from "react";
import styles from "@/styles/form.module.scss";
import Image from "next/image";
import imageForm from "@/common/media/images/imageForm.png";
import imageForm1 from "@/common/media/images/imageForm1.png";
import imageForm2 from "@/common/media/images/imageForm2.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Form(errors) {
  const notify = () => toast("Successful..!");

  const [text, setText] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [checked, setChecked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setPhone("");
    setMessage("");
    setText("");
    setChecked("");
  };
  const handleChange = (e) => {
    setChecked(e.target.value);
  };

  const changeText = (e) => {
    setText(e.target.value);
  };
  const changePhone = (e) => {
    setPhone(e.target.value);
  };
  const changeMessage = (e) => {
    setMessage(e.target.value);
  };

  return (
    <div className={styles.App}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h1 className={styles.h1}>start your project</h1>
        <span className={styles.span}>
          Leave your contact details and we will contact you
        </span>
        <input
          type="text"
          placeholder="How can I contact you?"
          className={styles.input}
          onChange={changeText}
          value={text}
          required
        />
        <input
          type="text"
          placeholder="Phone/email"
          className={styles.input}
          onChange={changePhone}
          value={phone}
          required
        />
        <input
          type="text"
          placeholder="Add a message"
          className={styles.input}
          onChange={changeMessage}
          value={message}
          required
        />
        <div className={styles.checkInput}>
          <input type="checkbox" onChange={handleChange} checked={checked} />
          <label>I agree to the processing of personal data.</label>
        </div>
        <button
          onClick={notify}
          type="submit"
          className={styles.button}
          disabled={!checked}
        >
          submit
        </button>
        <ToastContainer />
        {errors.name && errors.name.type === "required" && (
          <div className="error">You must enter your name</div>
        )}
      </form>
      <div className={styles.formImage}>
        <Image alt="" src={imageForm} width={250} height={400} />
        <Image alt="" src={imageForm1} width={330} height={200} />
        <Image alt="" src={imageForm2} width={270} height={190} />
      </div>
    </div>
  );
}
