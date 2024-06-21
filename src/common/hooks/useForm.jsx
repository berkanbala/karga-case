import { useState } from "react";

export const useForm = (params) => {
  const [form, setForm] = useState(params);

  const handleChange = (e) => {
    if (!e.target) {
      setForm(e);
      return;
    }

    if (e?.target?.name == "checkbox") {
      setForm({ ...form, checkbox: e.target.checked });
      return;
    }

    return setForm({ ...form, [e.target.name]: e.target.value });
  };

  return [form, handleChange];
};
