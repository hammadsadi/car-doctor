import toast from "react-hot-toast";

export const toastAlert = (msg, type = "error") => {
  return toast[type](msg);
};
