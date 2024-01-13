"use client";
import React, { useState } from "react";
import styles from "@/styles/form.module.scss";
import { toast } from "react-toastify";
import { useFormHook } from "@/common/hooks/useFormHook";
import { validate } from "@/common/validate/validate";
import { Button } from "@/common/components/ui/button/button";
import { Input } from "@/common/components/ui/input/input";
// import Image from "next/image";
// import imageForm from "@/common/media/images/imageForm.png";
// import imageForm1 from "@/common/media/images/imageForm1.png";
// import imageForm2 from "@/common/media/images/imageForm2.png";

export default function Form(errors) {
  const notify = () => toast("Successful..!");

  const initialValues = {
    text: "",
    phone: "",
    message: "",
  };

  const [check, setCheck] = useState(false);
  const [form, setForm] = useFormHook(initialValues);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate(form)) {
      return;
    }
    console.log(form);
    setForm(initialValues);
    setCheck("");
  };

  return (
    <div className={styles.App}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h1 className={styles.h1}>start your project</h1>
        <span className={styles.span}>
          Leave your contact details and we will contact you
        </span>
        <Input
          name="text"
          type="text"
          placeholder="How can I contact you?"
          className={styles.input}
          onChange={setForm}
          value={form.text}
          required
        />
        {/* <input
          name="text"
          type="text"
          placeholder="How can I contact you?"
          className={styles.input}
          onChange={setForm}
          value={form.text}
          required
        /> */}
        <Input
          name="phone"
          type="text"
          placeholder="Phone/email"
          className={styles.input}
          onChange={setForm}
          value={form.phone}
          required
        />
        {/* <input
          name="phone"
          type="text"
          placeholder="Phone/email"
          className={styles.input}
          onChange={setForm}
          value={form.phone}
          required
        /> */}
        <Input
          name="message"
          type="text"
          placeholder="Add a message"
          className={styles.input}
          onChange={setForm}
          value={form.message}
          required
        />
        {/* <input
          name="message"
          type="text"
          placeholder="Add a message"
          className={styles.input}
          onChange={setForm}
          value={form.message}
          required
        /> */}
        <div className={styles.checkInput}>
          <Input
            onChange={(e) => setCheck(e.target.checked)}
            type="checkbox"
            checked={check}
            id="checkbox"
            value="checkbox"
            required
            readOnly={true}
          />
          {/* <input
            onChange={(e) => setCheck(e.target.checked)}
            type="checkbox"
            checked={check}
            id="checkbox"
            value="checkbox"
            required
            readOnly={true}
          /> */}
          <label htmlFor="checkbox">
            I agree to the processing of personal data.
          </label>
        </div>
        <Button
          onClick={notify}
          type="submit"
          className={styles.button}
          disabled={!check}
          label="Submit"
        />

        {errors.name && errors.name.type === "required" && (
          <div className="error">You must enter your name</div>
        )}
      </form>
      {/* <div className={styles.formImage}>
        <Image alt="" src={imageForm} width={250} height={400} />
        <Image alt="" src={imageForm1} width={330} height={200} />
        <Image alt="" src={imageForm2} width={270} height={190} />
      </div> */}
    </div>
  );
}
