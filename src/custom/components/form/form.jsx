"use client";
import React, { useState } from "react";
import styles from "@/styles/form.module.scss";
import { toast } from "react-toastify";
import { useForm } from "@/common/hooks/useForm";
import { validate } from "@/common/validate/validate";
import { Button } from "@/common/components/ui/button/button";
import { Input } from "@/common/components/ui/input/input";
import { getInitialValuesForm } from "./helpers";
import { Checkbox } from "@/common/components/ui/checkbox/checkbox";

export default function Form() {
  const [formData, setFormData] = useForm(getInitialValuesForm());

  const handleSubmit = (e) => {
    e.preventDefault();

    toast.success("Success Notification !", {
      position: "top-right",
    });

    setFormData(getInitialValuesForm());
    console.log({ formData });
  };
  // console.log({ formData });

  return (
    <div className={styles.container}>
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
          onChange={setFormData}
          value={formData.text}
          required
        />
        <Input
          name="phone"
          type="text"
          placeholder="Phone/email"
          className={styles.input}
          onChange={setFormData}
          value={formData.phone}
          required
        />
        <Input
          name="message"
          type="text"
          placeholder="Add a message"
          className={styles.input}
          onChange={setFormData}
          value={formData.message}
          required
        />
        <div className={styles.checkInput}>
          <Checkbox
            onChange={setFormData}
            name="checkbox"
            checked={formData.checkbox}
          />
          <label htmlFor="checkbox">
            I agree to the processing of personal data.
          </label>
        </div>
        <Button
          type="submit"
          className={styles.button}
          disabled={Object.values(formData).some(
            (formValue) => formValue == ""
          )}
          label="Submit"
        />
      </form>
    </div>
  );
}
