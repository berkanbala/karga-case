import { toast } from "react-toastify";

export const showNotification = () => {
  const defaultOptions = {
    position: "top-right",
    autoClos: 1500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    ...options,
  };
  toast(defaultOptions);
};
