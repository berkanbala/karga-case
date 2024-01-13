import { useState } from "react";

export const useFormHook = (params) => {
  const [form, setForm] = useState(params);

  const handleChange = (e) => {
    if (e.target) {
      setForm({ ...form, [e.target.name]: e.target.value });
    } else {
      setForm(e);
    }
  };
  return [form, handleChange];
};
